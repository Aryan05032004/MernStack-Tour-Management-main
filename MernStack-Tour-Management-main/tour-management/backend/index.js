import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js'; // Added .js extension

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Database connection
mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database connected');
    } catch (err) {
        console.log('MongoDB database connection failed', err);
    }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/tours', tourRoute);

// Start server
app.listen(port, () => {
    connect();  // Connect to the database when the server starts
    console.log('Server listening at port', port);

});
