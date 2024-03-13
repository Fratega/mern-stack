import express from 'express'
import {PORT} from './config.js'

const app = express();

app.listen(PORT || 3000)
console.log(`Server is listening on ${PORT}`)


