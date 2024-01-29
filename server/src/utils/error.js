export const appError = (status, message) => {
  const error = new Error(message)
  error.statusCode = status
  return error
}
