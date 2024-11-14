import 'dotenv/config';
import express from 'express'
import router from './routers/index.routes.js'

const app = express()
const port = 1234;

app.use('/', router);

// app.get('/', (req, res) => {
//     res.send('hello')

// })

app.listen(port, ()=> {
    console.log(`listening to port: ${port}`);
})