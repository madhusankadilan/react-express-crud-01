import React from "react";
import { Button, Select, Form, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./addForm.css";
import { Subject, Teacher } from "../../models";
import { addTeacher, editTeacher } from "../../usecases";
import { useRunOnce } from "@core";

const { Option } = Select;

type Props = {
    subjectList: Subject[];
    activeRowData: Teacher;
    hideAddForm: () => void;
};

export const AddForm = ({ subjectList, activeRowData, hideAddForm }: Props) => {
    const [form] = Form.useForm();

    const validation = {
        isEditMode:
            activeRowData && Object.keys(activeRowData).length > 0
                ? true
                : false,
    };

    useRunOnce(async () => {
        if (validation.isEditMode) {
            form.setFieldsValue(activeRowData);
        }
    });

    const handleSubjectChange = (value: number) => {
        form.setFieldsValue({ subject: value });
    };

    const onFinish = (values: any) => {
        if (validation.isEditMode) {
            console.log({ values });
            editTeacher(values);
        } else {
            addTeacher(values);
        }

        form.resetFields();
    };

    const onReset = () => {
        hideAddForm();
        form.resetFields();
    };

    return (
        <>
            <div className="toolBar">
                <span className="heading">{`${
                    validation.isEditMode ? "Edit" : "Add"
                } Teacher`}</span>
            </div>
            <Form
                form={form}
                layout="vertical"
                name="control-hooks"
                onFinish={onFinish}
            >
                <div className="card">
                    <Form.Item
                        label="Name"
                        rules={[{ required: true }]}
                        name="name"
                    >
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        label="Subject"
                        rules={[{ required: true }]}
                        name="subject"
                    >
                        <Select
                            placeholder="Select a subject"
                            onChange={handleSubjectChange}
                            allowClear
                        >
                            {subjectList.map((subject) => {
                                return (
                                    <Option
                                        key={`${subject.id}-${subject.name}`}
                                        value={subject.id}
                                    >
                                        {subject.name}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Email Address"
                        rules={[{ required: true }]}
                        name="email"
                    >
                        <Input placeholder="Email Address" />
                    </Form.Item>
                    <Form.Item
                        label="Work Contact Number"
                        rules={[{ required: true }]}
                        name="contactNumber"
                    >
                        <Input placeholder="Work Contact Number" />
                    </Form.Item>
                </div>
                <div className="form-footer">
                    <Button
                        type="default"
                        icon={<ArrowLeftOutlined />}
                        className="back-btn"
                        onClick={onReset}
                    >
                        Back
                    </Button>
                    <Button
                        htmlType="submit"
                        type="primary"
                        className="add-btn"
                    >
                        {`${validation.isEditMode ? "Edit" : "Add"} Teacher`}
                    </Button>
                </div>
            </Form>
        </>
    );
};
