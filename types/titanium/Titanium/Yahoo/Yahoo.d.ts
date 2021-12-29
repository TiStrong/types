declare namespace Titanium {
	/**
	 * The top level Yahoo module.  The Yahoo module is used for accessing Yahoo related API services.
	 * @deprecated Use the standalone [Ti.Yahoo](https://github.com/appcelerator-modules/ti.yahoo) module instead.
	 */
	const Yahoo: never;
}
/**
 * Properties passed to a yql callback to report a success or failure.
 */
interface YQLResponse extends ErrorResponse {
	/**
	 * Error code. Returns 0 if `success` is `true`.
	 */
	code?: number;

	/**
	 * The data payload received from the YQL.
	 */
	data?: any;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Error message, if any returned. Use `error` instead
	 * @deprecated
	 */
	message?: string;

}
