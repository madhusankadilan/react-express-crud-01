import axios, { AxiosRequestConfig } from 'axios';

export const getHttpClient = async <T>(url: string, params?: any, config?: AxiosRequestConfig) => {
    const requestConfig = {
        params: params,
        ...config,
    };

    try {
        const result = await axios.get<T>(url, requestConfig);
        return result;
    } catch (error) {
        console.log(error);
    }
};