import * as mongoose from "mongoose";

async function connect() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to MongoDB!")
    } catch(error) {
        console.log("Connection error: ", error)
    }
}

export default connect;