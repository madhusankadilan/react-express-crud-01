import { http } from "@core";
import { Teacher } from "../models";

// TODO: Add proper typings
export const fetchAllTeachers = async (setLocalState: any) => {
    const response = await http.get<any>("/api/teachers");

    if (response?.status === 200) {
        return response?.data;
    }

    if (response?.status === 500) {
        console.log('====500=====', response);
        
        setLocalState((prev: any) => {
            return {
                ...prev,
                httpAlert: {
                    status: response.status,
                    msg: response.data?.error || "",
                },
            };
        });

        return [];
    }
};
