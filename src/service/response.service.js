import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Bangkok')

export class ResponseService {
  static sendSuccess(res, payload) {
    res.status(200).json({
      status: 'success',
      message: payload.message ? payload.message : 'Request Success.',
      data: payload.data,
    });
  }

  static sendError(res, payload) {
    const msg = payload.message
      ? payload.message
      : payload.statusCode === 500
      ? 'Internal Server Error'
      : 'An error occurred';

    res.status(payload.statusCode).json({
      status: 'error',
      message: msg,
      data: null,
    })
  }
}
