import { RequestHandler } from "express";
// TODO: convert this into ES6
// eslint-disable-next-line @typescript-eslint/no-var-requires
const models = require("./../../../models");
/**
 * Echo endpoint
 */
export const addTeacher: RequestHandler = async (req, res) => {
    try {
        const { subject, ...rest } = req.body;

        // TODO: Use database transaction here
        const teacher = await models.Teacher.create(rest);

        if (teacher) {
            const teachersSubject = await models.TeachersSubject.create({
                teacherId: teacher.id,
                subjectId: subject,
            });
        }

        res.status(200).json({
            msg: "Record added successfully",
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Something unexpected has occurred. Please try again later.",
        });
    }
};
