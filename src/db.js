import mongoose from 'mongoose'

export const connectDB = async() => {

try {
    await mongoose.connect("mongodb+srv://brackperlacio:tDZXhWxC03aXTsfN@cluster0.bb7rh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        
    console.log('>>>>> Database MongoDB esta conectada <<<<<')
} catch (error) {
    console.log(error)
}

}