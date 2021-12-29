/**
 * An abstract datatype for specifying an attributed string attribute.
 */
interface Attribute {
	/**
	 * Attribute range.
	 */
	range: number[];

	/**
	 * Attribute to apply to the text.
	 */
	type: number;

	/**
	 * Attribute value.
	 */
	value: any;

}
/**
 * An abstract datatype for specifying an Paragraph style attribute.
 */
interface ParagraphAttribute {
	/**
	 * The text alignment of the receiver.
	 */
	alignment?: number;

	/**
	 * A Boolean value indicating whether the system may tighten inter-character spacing
	 * before truncating text.
	 */
	allowsDefaultTighteningForTruncation?: boolean;

	/**
	 * The indentation of the first line of the receiver.
	 */
	firstLineHeadIndent?: number | string;

	/**
	 * The indentation of the lines of lines other than the first.
	 */
	headIndent?: number | string;

	/**
	 * The threshold of paragraph for hyphenation.
	 */
	hyphenationFactor?: number;

	/**
	 * The mode that should be used to break lines in the receiver.
	 */
	lineBreakMode?: number;

	/**
	 * The line height multiple.
	 */
	lineHeightMultiple?: number;

	/**
	 * The distance in points between the bottom of one line fragment and the top of the next.
	 */
	lineSpacing?: number | string;

	/**
	 * The maximum line height of receiver.
	 */
	maximumLineHeight?: number | string;

	/**
	 * The minimum height of receiver.
	 */
	minimumLineHeight?: number | string;

	/**
	 * The space after the end of the paragraph.
	 */
	paragraphSpacingAfter?: number | string;

	/**
	 * The distance between the top of paragraph and the beginning of its text content.
	 */
	paragraphSpacingBefore?: number | string;

	/**
	 * The trailing indentation of the receiver.
	 */
	tailIndent?: number | string;

}
