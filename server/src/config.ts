import dotenv from "dotenv";
dotenv.config();

const config = {
    port: process.env["PORT"] ?? 4000,
};

export default config;
