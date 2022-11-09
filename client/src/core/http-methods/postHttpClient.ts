import axios, { AxiosRequestConfig } from 'axios';

export const postHttpClient = async <T>(url: string, data: any, config?: AxiosRequestConfig) => {
    try {
        const result = await axios.post<T>(url, data, config);
        return result;
    } catch (error) {
        console.log(error);
    }
};
