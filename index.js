import express from 'express';
import { config } from 'dotenv';
import connectDB from './db/connect.js';
import router from './routes/route.js';

config();
connectDB();

const app = express();
const port = 3000;
app.use(express.json());
app.use('/user',router);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);

})

