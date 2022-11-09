import { http } from "@core";

export const addTeacher = async (values: any) => {
    const response = await http.post("/api/teachers", values);

    if (response?.status === 200) {
        return response?.data;
    }

    return [];
};
