/**
 * The JavaScript built-in String type.
 */
interface StringConstructor {
	/**
	 * Formats a string using `printf`-style substitution.
	 */
	format(formatString: string, ...value: Array<string | number>): string;

	/**
	 * Formats a number into the currency format, including currency symbol, of the locale
	 * configured for the system.
	 */
	formatCurrency(value: number): string;

	/**
	 * Formats a date into the date format of the locale configured for the system.
	 */
	formatDate(date: Date, format?: string): string;

	/**
	 * Formats a number into the decimal format, including decimal symbol, of the locale
	 * configured for the system.
	 */
	formatDecimal(value: number, locale?: string, pattern?: string): string;

	/**
	 * Formats a date into the time format of the locale configured for the system.
	 */
	formatTime(date: Date, format?: string): string;

}
