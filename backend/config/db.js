import mongoose from "mongoose"


export const connectedDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URL);
        console.log(`Mongoose connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);  // 1 means failure and 0 means success
    }
}