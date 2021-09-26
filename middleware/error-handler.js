const { CustomAPIError } = require('../errors/custom-error');

const errorHandlingMiddleware = (err, req, res) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.Message });
  }

  return res
    .status(500)
    .json({ msg: 'Something went wrong. please try again' });
};

module.exports = errorHandlingMiddleware;
