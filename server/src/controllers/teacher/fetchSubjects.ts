import { RequestHandler } from "express";
// TODO: convert this into ES6
// eslint-disable-next-line @typescript-eslint/no-var-requires
const models = require("./../../../models");

export const fetchSubjects: RequestHandler = async (req, res) => {
    try {
        const subjects = await models.Subject.findAll();

        res.status(200).json(subjects);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Something unexpected has occurred. Please try again later.",
        });
    }
};
