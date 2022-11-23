import { http } from "@core";

export const editTeacher = async (values: any) => {
    const response = await http.put("/api/teachers", values);

    if (response?.status === 200) {
        return response?.data;
    }

    return [];
};