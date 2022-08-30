import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

async function setupApp() {
    await mongoose.connect(
        process.env["MONGO_URI"] ?? "mongodb://localhost/db",
        { autoIndex: false }
    );
    
    return express();
}

export default setupApp;