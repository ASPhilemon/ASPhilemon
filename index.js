import express from 'express';
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';

//ENVIRONMENT
dotenv.config()
const PORT = process.env.PORT
const CWD = process.cwd()

const app = express();

//Middleware
app.use(express.json())
app.use(express.static('frontend/build'))


app.get('/json', (req, res)=>{
    res.json({a:8})
})

//Serve index.html for all other get requests
app.get('*', (req, res) => {
    const filePath = CWD + '/frontend/build/index.html'
    res.sendFile(filePath)
});

//Listen for requests
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})