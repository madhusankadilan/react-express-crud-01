import { http } from "@core";

export const addClass = async (values: any) => {
    const response = await http.post("/api/classes", values);

    if (response?.status === 200) {
        return response?.data;
    }

    return [];
};
