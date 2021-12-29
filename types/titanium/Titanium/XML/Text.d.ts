declare namespace Titanium {
	namespace XML {
		/**
		 * Represents the textual content of an <Titanium.XML.Element> or <Titanium.XML.Attr> Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1312295772) on Android and iOS.
		 */
		class Text extends Titanium.XML.CharacterData {
			/**
			 * Content (value) of all text nodes within this node.
			 */
			readonly textContent: string;

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

			/**
			 * Breaks this node into two nodes at the specified by offset, and returns a new node of the same type, which contains all the content at and after the offset point. Throws an exception if the specified offset is negative or if this node is read only.
			 */
			splitText(offset: number): Titanium.XML.Text;

		}
	}
}
