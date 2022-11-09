import { http } from "@core";

// TODO: Add proper typings
export const fetchAllClassLevels = async (setLocalState: any) => {
    const response = await http.get<any>("/api/class-levels");

    if (response?.status === 200) {
        return response?.data;
    }

    if (response?.status === 500) {
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
