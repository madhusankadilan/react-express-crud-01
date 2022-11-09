import { RequestHandler } from "express";
// TODO: convert this into ES6
// eslint-disable-next-line @typescript-eslint/no-var-requires
const models = require("./../../../models");

export const fetchTeachers: RequestHandler = async (req, res) => {
    try {
        const teachers = await models.Teacher.findAll({
            attributes: ["id", "name", "email", "contactNumber"],
            include: {
                model: models.Subject,
                as: "subjects",
                attributes: ["name"],
            },
        });

        res.status(200).json(
            teachers.map((teacher: any) => {
                return {
                    key: `${teacher.id}-${teacher.name}`,
                    id: teacher.id,
                    name: teacher.name,
                    email: teacher.email,
                    contactNumber: teacher.contactNumber,
                    // TODO: If teacher has multiple subjects, then send an array from here
                    // subjects: teacher.subjects.map(
                    //     (subject: any) => subject.name
                    // ),
                    subject: teacher.subjects[0].name,
                };
            })
        );
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Something unexpected has occurred. Please try again later.",
        });
    }
};
