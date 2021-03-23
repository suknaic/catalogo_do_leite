export default class AppError {
  public readonly message: String;
  public readonly statusCode: number;

  constructor(message: String, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
