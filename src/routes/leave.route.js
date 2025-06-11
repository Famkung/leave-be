import express from 'express'
import { LaeveDataController 
        , OptionLeaveController
        , RequestLeaveController
        , DeleteLeaveController
        , UpdateController
} from '../controller/leave.controller.js'

const route = express.Router()
route.get('/list', LaeveDataController)
route.get('/options', OptionLeaveController)
route.post('/request', RequestLeaveController)
route.post('/delete', DeleteLeaveController)
route.post('/update', UpdateController)

export default route
