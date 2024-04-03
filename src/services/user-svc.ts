"use server"
import { clientAPI } from "@/util/axiosConfig"

export const useFetchProfileUser = async () => {
    try {
        const res = await clientAPI('get', '/auth/profile/me')
        return res.data
    } catch (error) {
        console.log("🚀 ~ useFetchProfileUser ~ error:", error)
    }
}
