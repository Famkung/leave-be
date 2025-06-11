
import {
    ResponseService,
  } from '../service/response.service.js'
  import db from '../../models/index.js';

  const { leave_type , leave } = db;
  
export const LaeveDataController = async (req , res) => {
    try {
        const leaveData = await leave.findAll()
        const response = {
            data: leaveData,
            message: 'success.',
          }
        ResponseService.sendSuccess(res, response)
    } catch (error) {
        console.log(error)
        const sendError = {
          statusCode: 500,
        }
        ResponseService.sendError(res, sendError)
    }
}


export const OptionLeaveController = async (req , res) => {
    try {
        const options = await leave_type.findAll()
        const response = {
            data: options,
            message: 'success.',
          }
        ResponseService.sendSuccess(res, response)
    } catch (error) {
        console.log(error)
        const sendError = {
          statusCode: 500,
        }
        ResponseService.sendError(res, sendError)
    }
}

export const RequestLeaveController = async (req , res) => {
    try {
        const data = req.body
        await leave.create({
            full_name : data.fullname,
            email: data.email,
            department: data.department,
            reason: data.reason,
            phone: data.phone,
            leave_id: data.leave,
            leave_start_date: data.start_date,
            leave_end_date: data.end_date,
            status: 'PENDING'
        })
        const response = {
            data: '',
            message: 'success.',
          }
        ResponseService.sendSuccess(res, response)
    } catch (error) {
        console.log(error)
        const sendError = {
          statusCode: 500,
        }
        ResponseService.sendError(res, sendError)
    }
}


export const DeleteLeaveController = async (req , res) => {
    try {
       await leave.destroy({ where: { id : req.body.id } })
        const response = {
            data: null,
            message: 'success.',
          }
        ResponseService.sendSuccess(res, response)
    } catch (error) {
        console.log(error)
        const sendError = {
          statusCode: 500,
        }
        ResponseService.sendError(res, sendError)
    }
}

export const UpdateController = async (req , res) => {
    try {
        let status = ''
        if(req.body.status  === 1){
            status= 'APPROVED'
        }else {
             status= 'REJECTED'
        }
        await leave.update(
            {status},
            { where: { id : req.body.id }})
         const response = {
             data: null,
             message: 'success.',
           }
         ResponseService.sendSuccess(res, response)
     } catch (error) {
         console.log(error)
         const sendError = {
           statusCode: 500,
         }
         ResponseService.sendError(res, sendError)
     }
}