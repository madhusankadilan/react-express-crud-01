import axios, { AxiosRequestConfig } from 'axios';

export const putHttpClient = async <T>(url: string, data: any, config?: AxiosRequestConfig) => {
    try {
        const result = await axios.put<T>(url, data, config);
        return result;
    } catch (error) {
        console.log(error);
    }
};
