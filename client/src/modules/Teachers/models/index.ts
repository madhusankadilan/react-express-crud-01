export interface Teacher {
    key?: string;
    id?: number;
    name: string;
    subject: string;
    email: string;
    contactNumber: string;
    createdAt: string;
    updatedAt: string;
}

export interface Subject {
    key?: string;
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}
