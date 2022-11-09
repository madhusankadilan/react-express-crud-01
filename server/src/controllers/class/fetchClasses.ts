import { RequestHandler } from "express";
// TODO: convert this into ES6
// eslint-disable-next-line @typescript-eslint/no-var-requires
const models = require("./../../../models");

export const fetchClasses: RequestHandler = async (req, res) => {
    try {
        const classes = await models.Class.findAll({
            attributes: ["id", "name"],
            include: [
                {
                    model: models.ClassLevel,
                    as: "classLevels",
                    attributes: ["name"],
                },
                {
                    model: models.Teacher,
                    as: "teachers",
                    attributes: ["name"],
                },
            ],
        });

        res.status(200).json(
            classes.map((classObj: any) => {
                return {
                    key: `${classObj.id}-${classObj.name}`,
                    id: classObj.id,
                    name: classObj.name,
                    level: classObj?.classLevels?.name,
                    teacher: classObj?.teachers?.name,
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
