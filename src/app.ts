import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

async function setupApp() {
    const mongoURI = process.env["MONGO_URI"] ?? "mongodb://localhost/db";
    console.log(`Connecting to MongoDB instance at '${mongoURI}'...`);
    await mongoose.connect(mongoURI, { autoIndex: false });

    return express();
}

export default setupApp;
