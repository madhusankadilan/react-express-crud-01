import axios, { AxiosRequestConfig } from 'axios';

export const deleteHttpClient = async <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
    const requestConfig = {
        data: data,
        ...config,
    };

    try {
        const result = await axios.delete<T>(url, requestConfig);
        return result;
    } catch (error) {
        console.log(error);
    }
};
