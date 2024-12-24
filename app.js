import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import setUpDatabase from './database.js';

import rental from './routers/api/rentalApi.js'
import movie from './routers/api/movieApi.js'
import user from './routers/api/userApi.js'
import root from './routers/root.js'

import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)

const staticFileLocation = join(__dirname, 'view')


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(staticFileLocation))

setUpDatabase();

app.use("/", root)
app.use('/rental', rental)
app.use('/movie', movie)
app.use('/user', user)


app.listen(PORT, ()=>{
    console.log(`The app is listenting at port ${PORT}`)
})