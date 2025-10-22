export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    public readonly details?: any;

    constructor(message: string, statusCode: number, isOperational = true, details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.details = details;
        // Use Node's captureStackTrace when available; cast to any to avoid TS lib mismatch
        if ((Error as any).captureStackTrace) {
            (Error as any).captureStackTrace(this);
        } else {
            // Fallback to capturing stack manually
            this.stack = new Error(message).stack;
        }
    }
}


// Not found error
export class NotFoundError extends AppError {
    constructor(message = "Resource Not found") {
        super(message, 404)
    }
}


///validation Error(use for zod, react hooks )
export class validationError extends AppError {
    constructor(message = "Invalid Request Data", details?: any) {
        super(message, 404, true, details)
    }
}


//jwt authentication error
