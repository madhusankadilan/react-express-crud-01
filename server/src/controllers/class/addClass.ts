import { RequestHandler } from "express";
// TODO: convert this into ES6
// eslint-disable-next-line @typescript-eslint/no-var-requires
const models = require("./../../../models");
/**
 * Echo endpoint
 */
export const addClass: RequestHandler = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        

        // TODO: Use database transaction here
        const classData = await models.Class.create(data);

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
