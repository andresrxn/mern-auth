export const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode ?? 500
  const errorMessage = error.message ?? 'Something went wrong!'

  return res
    .status(statusCode)
    .json({ success: false, error: errorMessage, code: statusCode })
}
