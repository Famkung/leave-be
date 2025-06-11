import express from 'express'
import Leave from './leave.route.js'

const route = express.Router()
route.use('/leave', Leave)

export default route