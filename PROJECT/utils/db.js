import mongoose from 'mongoose'

const connectToDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL)

        console.log("Server connected to the Database")

        mongoose.connection.on('connected',()=>{
            console.log("Connected to Database")
        })
    } catch (error) {
        console.log("Failed to connect to MongoDB:",error.message)
        process.exit(1);
    }
}

export default connectToDB