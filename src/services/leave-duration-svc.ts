"use server"
import { clientAPI } from "@/util/axiosConfig";

export const getLeaveDuration = async (body: any) => {
    try {
        const response = await clientAPI('patch', '/holiday/duration', body)
        return response.data;
    } catch (error) {
        return {
            message: `Error! can not get holiday duration`
        }
    }
}