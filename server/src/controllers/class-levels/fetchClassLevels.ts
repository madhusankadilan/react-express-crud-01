import { RequestHandler } from "express";
// TODO: convert this into ES6
// eslint-disable-next-line @typescript-eslint/no-var-requires
const models = require("./../../../models");

export const fetchClassLevels: RequestHandler = async (req, res) => {
    try {
        const classLevels = await models.ClassLevel.findAll();

        res.status(200).json(classLevels);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Something unexpected has occurred. Please try again later.",
        });
    }
};
