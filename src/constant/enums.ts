export enum ApiErrorCode {
    VALIDATION = 'VALIDATION_ERROR',
    RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND_ERROR',
    INVALID_CREDENTIALS = 'INVALID_CREDENTIALS_ERROR',
    SMTP_ERROR = 'SMTP_ERROR',
    UNAUTHORIZED = 'UNAUTHORIZED_ERROR',
    FORBIDDEN = 'FORBIDDEN_ERROR',
    UNKNOWN_ROUTE = 'UNKNOWN_ROUTE_ERROR',
    RATE_LIMIT = 'TOO_MANY_REQUESTS_ERROR',
    DEPENDENCY_ERROR = 'DEPENDENCY_ERROR',
    SERVER = 'SERVER_ERROR',
    INCORRECT_OLD_PASSWORD = 'INCORRECT_OLD_PASSWORD_ERROR',
    PAYLOAD_TOO_LARGE = 'PAYLOAD_TOO_LARGE_ERROR',
    EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED_ERROR',
    BAD_REQUEST = 'BAD_REQUEST_ERROR',
}
