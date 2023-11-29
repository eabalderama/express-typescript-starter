import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import ErrorHandler from '../middleware/ErrorHandler';
import createHttpError from 'http-errors';
import UserRouter from '../User/route';
import { ApiErrorCode } from '../constant/enums';

const app = express();
// Helmet helps secure Express apps by setting HTTP response headers.
app.use(helmet());

// Use cors
app.use(cors());

// Compresses all responses
app.use(compression());

// Parse incoming requests with url encoded payloads
app.use(express.urlencoded({ extended: false }));

// Parse incoming requests with JSON payloads
app.use(express.json());

// Log incoming requests
if (process.env.ENV !== 'production') {
    app.use(morgan('dev'));
}

/**
 * API Routes
 */
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: 'Hello world' });
});

app.use('/api/v1/user', UserRouter);

// Handle 404 response
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createHttpError(404, ApiErrorCode.UNKNOWN_ROUTE));
});

// Error handler middleware
app.use(ErrorHandler);

export default app;
