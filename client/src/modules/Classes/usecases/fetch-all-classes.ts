import { http } from "@core";

// TODO: Add proper typings
export const fetchAllClasses = async (setLocalState: any) => {
    const response = await http.get<any>("/api/classes");

    if (response?.status === 200) {
        return response?.data;
    }

    if (response?.status === 500) {
        console.log("====500=====", response);

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
