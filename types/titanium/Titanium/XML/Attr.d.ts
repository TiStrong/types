declare namespace Titanium {
	namespace XML {
		/**
		 * Represents an attribute of an [Element](Titanium.XML.Element).
		 */
		class Attr extends Titanium.XML.Node {
			/**
			 * Attribute name
			 */
			readonly name: string;

			/**
			 * The <Titanium.XML.Element> to which the attribute belongs.
			 */
			readonly ownerElement: Titanium.XML.Element;

			/**
			 * True if this attribute was explicitly given a value in the instance document, false otherwise.
			 */
			readonly specified: boolean;

			/**
			 * The attribute value as a string.
			 */
			value: string;

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
