import { http } from "@core";
import { Subject } from "../models";

export const fetchAllSubjects = async () => {
    const response = await http.get<Subject>("/api/subjects");

    if (response?.status === 200) {
        return response?.data;
    }

    return [];
};
