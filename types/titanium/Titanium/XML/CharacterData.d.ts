declare namespace Titanium {
	namespace XML {
		/**
		 * An interface extending <Titanium.XML.Node> with a set of attributes and methods for accessing character data in the DOM.
		 * Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-FF21A306) on Android and iOS. For reasons of compatibility with the javascript engine, text is represented by UTF-8 instead of UTF-16 on Android and iOS.
		 */
		class CharacterData extends Titanium.XML.Node {
			/**
			 * The character data of the node that implements this interface. Throws an exception during setting if this node is readonly.
			 */
			data: string;

			/**
			 * The number of characters that are available through data and the substringData method. This may have the value zero, i.e., <Titanium.XML.CharacterData> may be empty.
			 */
			readonly length: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Append the string to the end of the character data of the node. Upon success, data provides access to the concatenation of data and the string specified. Throws an exception if this node is readonly.
			 */
			appendData(arg: string): void;

			/**
			 * Remove a range of characters from the node. Upon success, data and length reflect the change. Throws an exception if this node is readonly, if offset is negative, offset is beyond the data's length, or if count is negative.
			 */
			deleteData(offset: number, count: number): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Insert a string at the specified offset. Throws an exception if this node is readonly, if offset is negative, or if offset is beyond the data's length.
			 */
			insertData(offset: number, arg: string): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Replace the characters starting at the specified offset with the specified string. Throws an exception if this node is readonly, if offset is negative, offset is beyond the data's length, or if count is negative.
			 */
			replaceData(offset: number, count: number, arg: string): void;

			/**
			 * Extracts a range of data from the node. Throws an exception if offset is negative, offset is beyond the data's length, or if count is negative.
			 */
			substringData(offset: number, count: number): string;

		}
	}
}
