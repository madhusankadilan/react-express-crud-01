import { RequestHandler } from "express";
// TODO: convert this into ES6
// eslint-disable-next-line @typescript-eslint/no-var-requires
const models = require("./../../../models");
/**
 * Echo endpoint
 */
export const editTeacher: RequestHandler = async (req, res) => {
    try {
        const { subject, id,  ...rest } = req.body;

        // TODO: Use database transaction here
        const teacher = await models.Teacher.findAll({
            where: {
              id: id
            }
          });

          teacher.set(rest);
          await teacher.save();
        // if (teacher) {
        //     const teachersSubject = await models.TeachersSubject.create({
        //         teacherId: teacher.id,
        //         subjectId: subject,
        //     });
        // }

        res.status(201).json({
            msg: "Record added successfully",
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Something unexpected has occurred. Please try again later.",
        });
    }
};
