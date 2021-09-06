class CustomErrorHandler extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }

  static alreadyExists(message) {
    return new CustomErrorHandler(409, message); //creates new object --> when new instance made --> constructor is called
  }

  static wrongCredentials(message = "username or password is wrong") {
    return new CustomErrorHandler(401, message);
  }

  //unauthorise user
  static unAuthorized(message = "unAuthorized") {
    return new CustomErrorHandler(401, message);
  }

  //User not found || userController
  static userNotFound(message = "404 Not found") {
    return new CustomErrorHandler(404, message);
  }

  //multer error && other 500 status
  static serverError(message = "Internal Server Error") {
    return new CustomErrorHandler(500, message);
  }
}

export default CustomErrorHandler;
