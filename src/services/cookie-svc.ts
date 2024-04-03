'use server'
import { getServerSession } from "next-auth";
import { authOptions } from "@/util/auth";
import { cookies } from "next/headers"

export async function setAccessToken() {
    const session = await getServerSession(authOptions);
    const token = session?.user.accessToken;
    if (token) {
        const cookie = cookies();
        cookie.set('accessToken', token)
    }
    return token;
}

export async function removeAccessToken() {
    const cookie = cookies();
    cookie.delete('accessToken')
    return true;
}