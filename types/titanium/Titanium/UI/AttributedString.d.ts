declare namespace Titanium {
	namespace UI {
		/**
		 * An attributed string proxy manages character strings and associated sets of attributes (for example,
		 * font and foregroundcolor) that apply to individual characters or ranges of characters in the string.
		 */
		class AttributedString extends Titanium.Proxy {
			/**
			 * An array of attributes to add.
			 */
			attributes: Attribute[];

			/**
			 * The text applied to the attributed string.
			 */
			text: string;

			/**
			 * Adds an [attribute](Attribute) with the given name and value to the characters in the specified range.
			 */
			addAttribute(attribute: Attribute): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
