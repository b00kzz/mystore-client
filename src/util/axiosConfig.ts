'use server'
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
const base_url = process.env.API_URL;

const createClientAPI = axios.create({
    baseURL: base_url,
    headers: {
        Accept: 'application/json',
    },
    responseType: 'json',
})

export const clientAPI = async (method: string, url: string, body?: any) => {
    try {
        const response = await createClientAPI({
            method,
            url,
            data: body,
            headers: {
                Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
            },
        })
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error("Axios Error:", axiosError.response?.data);
        } else {
            console.error("Unknown Error:", error);
        }
        throw error;
    }
}
