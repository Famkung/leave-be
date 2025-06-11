import express from 'express'
import routes from './routes/index.route.js'
import cors from 'cors'
import { testConnection } from '../config/database.js'

const app = express()
const PORT = process.env.PORT || 8080

await testConnection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

app.listen(PORT, () => {
console.log(`🚀 Server running at http://localhost:${PORT}`)
})
