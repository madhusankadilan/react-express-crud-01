import { ErrorRequestHandler } from "express";
import config from "../config";

/**
 * 500 response & log when errors are raised.
 */
const errorHandler: ErrorRequestHandler = (err, req, res) => {
    return res.status(500).json({
        message: "unknown error",
    });
};

export default errorHandler;
