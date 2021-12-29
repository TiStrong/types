/**
 * Properties used in any event or callback which needs to report a success or failure.
 */
interface ErrorResponse {
	/**
	 * Error code. Returns 0 if `success` is `true`.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Indicates if the operation succeeded.
	 */
	success?: boolean;

}
/**
 * Properties used in any event or callback which needs to report a failure.
 */
interface FailureResponse extends ErrorResponse {
	/**
	 * Error code. Returns a non-zero value.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Indicates if the operation succeeded. Returns `false`.
	 */
	success?: boolean;

}
/**
 * Properties used in any event or callback which needs to report a success.
 */
interface SuccessResponse extends ErrorResponse {
	/**
	 * Error code. Returns 0.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Indicates if the operation succeeded. Returns `true`.
	 */
	success?: boolean;

}
