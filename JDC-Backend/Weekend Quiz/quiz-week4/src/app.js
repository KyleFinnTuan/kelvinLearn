import 'dotenv/config';
import express from 'express'
import router from './routers/index.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/',router)

app.listen(port,()=>{
    console.log(`App is running on port`, port);
})

