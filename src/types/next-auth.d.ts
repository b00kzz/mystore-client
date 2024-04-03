import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {
    interface JWT {
        user: User & {
            id: UserId,
            roleId?: string | null,
            positionId?: string | null,
            username?: string | null
            accessToken?: string | null,
            expiresIn?: number
        }
    }
}

declare module 'next-auth' {
    interface Session {
        user: User & {
            id: UserId,
            roleId?: string | null,
            positionId?: string | null,
            username?: string | null
            accessToken?: string | null,
            expiresIn?: number
        }
    }
}