import React from "react";
import { Button, Select, Form, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./addForm.css";
import { Subject } from "../../models";
import { addTeacher } from "../../usecases";

const { Option } = Select;

type Props = {
    subjectList: Subject[];
};

export const AddForm = ({ subjectList }: Props) => {
    const [form] = Form.useForm();

    const handleSubjectChange = (value: number) => {
        form.setFieldsValue({ subject: value });
    };

    const onFinish = (values: any) => {
        addTeacher(values);
        form.resetFields();
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <>
            <div className="toolBar">
                <span className="heading">Add Teacher</span>
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
                        Add Teacher
                    </Button>
                </div>
            </Form>
        </>
    );
};
