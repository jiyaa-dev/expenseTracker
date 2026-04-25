class ApiError extends Error {
    constructor(msg, errorCode) {
        super(msg);
        this.errorCode = errorCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
export { ApiError };
