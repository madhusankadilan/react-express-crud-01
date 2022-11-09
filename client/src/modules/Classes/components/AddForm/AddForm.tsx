import React from "react";
import { Button, Select, Form, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./addForm.css";
import { Teacher } from "../../../Teachers/models";
import { addClass } from "../../usecases";

const { Option } = Select;

type Props = {
    teacherList: Teacher[];
    classLevelList: any[];
    hideAddForm: () => void;
};

export const AddForm = ({
    teacherList,
    classLevelList,
    hideAddForm,
}: Props) => {
    const [form] = Form.useForm();

    const handleSubjectChange = (value: number) => {
        form.setFieldsValue({ subject: value });
    };

    const onFinish = (values: any) => {
        addClass(values);
        form.resetFields();
    };

    const onReset = () => {
        hideAddForm();
        form.resetFields();
    };

    return (
        <>
            <div className="toolBar">
                <span className="heading">Add Class</span>
            </div>
            <Form
                form={form}
                layout="vertical"
                name="control-hooks"
                onFinish={onFinish}
            >
                <div className="card">
                    <Form.Item
                        label="Class Level"
                        rules={[{ required: true }]}
                        name="levelId"
                    >
                        <Select
                            placeholder="Select a level"
                            onChange={handleSubjectChange}
                            allowClear
                        >
                            {classLevelList.map((level) => {
                                return (
                                    <Option
                                        key={`${level.key}`}
                                        value={level.id}
                                    >
                                        {level.name}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Class Name"
                        rules={[{ required: true }]}
                        name="name"
                    >
                        <Input placeholder="Class Name" />
                    </Form.Item>
                    <Form.Item
                        label="Form Teacher"
                        rules={[{ required: true }]}
                        name="teacherId"
                    >
                        <Select
                            placeholder="Assign a form teacher"
                            onChange={handleSubjectChange}
                            allowClear
                        >
                            {teacherList.map((teacherList) => {
                                return (
                                    <Option
                                        key={`${teacherList.key}`}
                                        value={teacherList.id}
                                    >
                                        {teacherList.name}
                                    </Option>
                                );
                            })}
                        </Select>
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
                        Add Class
                    </Button>
                </div>
            </Form>
        </>
    );
};
