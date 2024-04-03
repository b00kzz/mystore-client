import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<any> {
    const res = await fetch(`${process.env.API_URL}auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            refresh: token.user.accessToken
        })
    })
    const data = await res.json();
    if (data.statusCode === 401) {
        return null
    } else {
        token.user.accessToken = data.accessToken;
        token.user.expiresIn = data.expiresIn;
        return token
    }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { username, password } = credentials as {
                    username: string;
                    password: string;
                }
                const res = await fetch(`${process.env.API_URL}auth/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }).then(res => res.json())
                return res.data;
            }

        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }

            if (new Date().getTime() > Number(token.user.expiresIn)) {
                return token
            }
            return token = await refreshToken(token)
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith(baseUrl)) {
                return url
            }
            return baseUrl;
        }

    },
} satisfies NextAuthOptions;