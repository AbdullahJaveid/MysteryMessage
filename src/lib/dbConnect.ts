import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to the database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})
        connection.isConnected = db.connection.readyState;
        console.log("Connected to the database:");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
}

export default dbConnect;