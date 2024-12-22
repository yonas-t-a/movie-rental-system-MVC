import express from 'express'
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const router = express.Router()

const __fileName = fileURLToPath(import.meta.url) 
const __dirname = dirname(__fileName)
const filePath = join(__dirname , '..', 'view', 'index.html')

router.get('/', (req, res)=>{
    res.sendFile(filePath)
})

export default  router;