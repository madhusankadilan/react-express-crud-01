import React, { useState } from "react";
import { Button, Alert } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRunOnce } from "@core";
import { fetchAllSubjects, fetchAllTeachers } from "../../usecases";
import { TeachersList } from "../TeachersList";
import { Subject, Teacher } from "../../models";
import "./teachersPage.css";
import { AddForm } from "../AddForm";

export const TeachersPage = () => {
    const [teacherList, setTeacherList] = useState<Teacher[]>([]);
    const [subjectList, setSubjectList] = useState<Subject[]>([]);
    const [activeRowData, setActiveRowData] = useState<Teacher>({} as Teacher);
    const [localState, setLocalState] = useState({
        isVisibleAddForm: false,
        httpAlert: undefined as any,
    });

    const validations = {
        hasTeachers: teacherList && teacherList.length > 0,
        isVisibleAddForm: localState.isVisibleAddForm,
    };

    useRunOnce(async () =>
        setTeacherList((await fetchAllTeachers(setLocalState)) as Teacher[])
    );

    useRunOnce(async () =>
        setSubjectList((await fetchAllSubjects()) as Subject[])
    );

    const handleAlertClose = () => {
        setLocalState((prev) => {
            return {
                ...prev,
                httpAlert: undefined,
            };
        });
    };

    const handleAddTeacherClick = () => {
        setLocalState((prev) => {
            return {
                ...prev,
                isVisibleAddForm: true,
            };
        });
    };

    const hideAddForm = () => {
        setLocalState((prev) => {
            return {
                ...prev,
                isVisibleAddForm: false,
            };
        });
    };

    const renderHttpAlert = () => {
        return (
            <>
                {localState.httpAlert && (
                    <>
                        {localState.httpAlert?.status === 200 && (
                            <Alert
                                message={localState.httpAlert?.msg}
                                type="success"
                                closable
                                onClose={handleAlertClose}
                            />
                        )}
                        {localState.httpAlert?.status === 500 && (
                            <Alert
                                message={localState.httpAlert?.msg}
                                type="error"
                                closable
                                onClose={handleAlertClose}
                            />
                        )}
                    </>
                )}
            </>
        );
    };

    // Sub rendering pattern for minimize the code lines of main return
    const renderAddTeacherButton = () => {
        return (
            <div className="empty-List-wrapper">
                <p className="empty-list-msg">
                    There are no existing teachers yet.
                </p>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    className="empty-list-button"
                    onClick={handleAddTeacherClick}
                >
                    Add Teacher
                </Button>
            </div>
        );
    };

    return (
        <div className="page-wrapper">
            {renderHttpAlert()}
            {validations.isVisibleAddForm ? (
                <AddForm subjectList={subjectList} hideAddForm={hideAddForm} activeRowData={activeRowData} />
            ) : (
                <>
                    {validations.hasTeachers ? (
                        <TeachersList
                            teacherList={teacherList}
                            handleAddTeacherClick={handleAddTeacherClick}
                            setActiveRowData={setActiveRowData}
                        />
                    ) : (
                        <div className="card">{renderAddTeacherButton()}</div>
                    )}
                </>
            )}
        </div>
    );
};
