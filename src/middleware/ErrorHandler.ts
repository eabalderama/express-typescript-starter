import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import { isHttpError } from 'http-errors';

const ErrorHandler: ErrorRequestHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
    let errorMessage = 'An unknown error occured';
    let statusCode = 500;
    let stack = undefined;
    if (isHttpError(error)) {
        statusCode = error.statusCode;
        errorMessage = error.message;
        stack = process.env.ENV !== 'production' ? error.stack : undefined;
    }
    res.status(statusCode).json({
        success: false,
        message: errorMessage,
        error: stack,
    });
};

export default ErrorHandler;
