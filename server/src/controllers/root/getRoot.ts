import { RequestHandler } from "express";

const getRoot: RequestHandler = (req, res) => {
    res.status(200).json({
        name: "Dilan Madhusanka",
        description: "Dilan Madhusanka",
        version: "V1",
    });
};

export default getRoot;
