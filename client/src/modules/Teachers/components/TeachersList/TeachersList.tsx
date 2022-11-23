import { Space, Button, Table, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { Teacher } from "../../models";

type Props = {
    teacherList: Teacher[];
    handleAddTeacherClick: () => void;
    setActiveRowData: (teacher: Teacher) => void;
};

export const TeachersList = ({ teacherList, handleAddTeacherClick, setActiveRowData }: Props) => {
    // Placed under the component. If not we have to scroll down to see the main component.
    const columns: ColumnsType<Teacher> = [
        {
            title: "#",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Subject",
            dataIndex: "subject",
            key: "subject",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Work Contact",
            dataIndex: "contactNumber",
            key: "contactNumber",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => {
                const handleEdit = () => {
                    console.log({ _ });
                    console.log({ record });
                    setActiveRowData(record);
                    handleAddTeacherClick();
                };

                return <Button onClick={handleEdit}>Edit Teacher</Button>;
            },
        },
    ];

    return (
        <>
            <div className="toolBar">
                <span className="heading">Teachers</span>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    className="empty-list-button"
                    onClick={handleAddTeacherClick}
                >
                    Add Teacher
                </Button>
            </div>
            <div className="card">
                <Table columns={columns} dataSource={teacherList} />
            </div>
        </>
    );
};
