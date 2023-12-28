import express from "express";
import { readFile } from "fs/promises";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const startServer = async () => {
    try {
        const data = await readFile("./res.json", "utf-8");

        const app = express();
        const port = process.env.PORT || 3456; // Use PORT from .env or default to 3000

        const ipAddress = "192.168.1.6"; // Replace with your desired IP address

        // Use CORS middleware
        app.use(cors());

        app.get("/", (req, res) => {
            res.json(JSON.parse(data));
        });

        app.listen(port, ipAddress, () => {
            console.log(`Server is running on http://${ipAddress}:${port}`);
        });
    } catch (error) {
        console.error("Error reading JSON file:", error);
    }
};

startServer();
