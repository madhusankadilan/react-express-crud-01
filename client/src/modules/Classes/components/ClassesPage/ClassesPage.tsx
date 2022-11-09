import React, { useState } from "react";
import { Button, Alert } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRunOnce } from "@core";
import { fetchAllClasses, fetchAllClassLevels } from "../../usecases";
// import { ClassesList } from "../ClassesList";
// import { Subject, Class } from "../../models";
import "./ClassesPage.css";
import { AddForm } from "../AddForm";
import { Class } from "../../models";
import { ClassesList } from "../ClassesList";
import { Teacher } from "../../../Teachers/models";
import { fetchAllTeachers } from "../../../Teachers/usecases";

export const ClassesPage = () => {
    const [classList, setclassList] = useState<Class[]>([]);
    const [teacherList, setTeacherList] = useState<Teacher[]>([]);
    const [classLevelList, setClassLevelList] = useState<any[]>([]);

    const [localState, setLocalState] = useState({
        isVisibleAddForm: false,
        httpAlert: undefined as any,
    });

    const validations = {
        hasClasses: classList && classList.length > 0,
        isVisibleAddForm: localState.isVisibleAddForm,
    };

    useRunOnce(async () =>
        setclassList((await fetchAllClasses(setLocalState)) as Class[])
    );

    useRunOnce(async () =>
        setClassLevelList((await fetchAllClassLevels(setLocalState)) as any[])
    );

    useRunOnce(async () =>
        setTeacherList((await fetchAllTeachers(setLocalState)) as Teacher[])
    );

    const handleAlertClose = () => {
        setLocalState((prev) => {
            return {
                ...prev,
                httpAlert: undefined,
            };
        });
    };

    const handleAddClassClick = () => {
        setLocalState((prev) => {
            return {
                ...prev,
                isVisibleAddForm: true,
            };
        });
    };

    const hideAddForm = async () => {
        // setclassList((await fetchAllClasses(setLocalState)) as Class[]);
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
    const renderAddClassButton = () => {
        return (
            <div className="empty-List-wrapper">
                <p className="empty-list-msg">
                    There are no existing classes yet.
                </p>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    className="empty-list-button"
                    onClick={handleAddClassClick}
                >
                    Add Class
                </Button>
            </div>
        );
    };

    return (
        <div className="page-wrapper">
            {renderHttpAlert()}
            {validations.isVisibleAddForm ? (
                <AddForm
                    teacherList={teacherList}
                    classLevelList={classLevelList}
                    hideAddForm={hideAddForm}
                />
            ) : (
                <>
                    {validations.hasClasses ? (
                        <ClassesList
                            classList={classList}
                            handleAddClassClick={handleAddClassClick}
                        />
                    ) : (
                        <div className="card">{renderAddClassButton()}</div>
                    )}
                </>
            )}
        </div>
    );
};
