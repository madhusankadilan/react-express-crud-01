import { RequestHandler } from "express";

const fourOhFour: RequestHandler = (req, res) => {
    return res.status(404).json({ message: "not found" });
};

export default fourOhFour;
