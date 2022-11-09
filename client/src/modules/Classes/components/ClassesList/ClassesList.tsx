import { Space, Button, Table, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { Class } from "../../models";

type Props = {
    classList: Class[];
    handleAddClassClick: () => void;
};

export const ClassesList = ({ classList, handleAddClassClick }: Props) => {
    return (
        <>
            <div className="toolBar">
                <span className="heading">Classes</span>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    className="empty-list-button"
                    onClick={handleAddClassClick}
                >
                    Add Class
                </Button>
            </div>
            <div className="card">
                <Table columns={columns} dataSource={classList} />
            </div>
        </>
    );
};

// Placed under the component. If not we have to scroll down to see the main component.
const columns: ColumnsType<Class> = [
    {
        title: "#",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Class Level",
        dataIndex: "level",
        key: "level",
    },
    {
        title: "Class Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Form Teacher",
        dataIndex: "teacher",
        key: "teacher",
    },
    // {
    //     title: "Action",
    //     key: "action",
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];
