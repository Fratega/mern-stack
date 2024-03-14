import express from 'express'
import {PORT} from './config.js'
import routes from './routes/routes.js'

const app = express();


app.use(routes)
app.listen(PORT || 3000)
console.log(`Server is listening on ${PORT}`)


