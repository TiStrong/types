/**
 * An abstract datatype for specifying a text font.
 */
interface Font {
	/**
	 * Specifies the font family or specific font to use.
	 */
	fontFamily?: string;

	/**
	 * Font size, in platform-dependent units.
	 */
	fontSize?: number | string;

	/**
	 * Font style. Valid values are "italic" or "normal".
	 */
	fontStyle?: string;

	/**
	 * Font weight. Valid values are "bold", "semibold", "normal", "thin",
	 * "light" and "ultralight".
	 */
	fontWeight?: string;

	/**
	 * The text style for the font.
	 */
	textStyle?: string;

}
