const { CustomAPIError } = require('../errors/custom-error')

const errorHandlingMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.Message })
    }

    res.status(500).json({ msg: 'Something went wrong. please try again' })
}

module.exports = errorHandlingMiddleware