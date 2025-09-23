import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import BlogRoutes from './Routes/BlogRoutes.js'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use('/blogs', BlogRoutes);

mongoose.connect(MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});