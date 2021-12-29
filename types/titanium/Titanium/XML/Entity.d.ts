declare namespace Titanium {
	namespace XML {
		/**
		 * This interface represents an entity, either parsed or unparsed, in an XML document. Note that this models the entity itself not the entity declaration. The nodeName attribute that is inherited from Node contains the name of the entity. An Entity node does not have any parent.
		 * Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-527DCFF2) on Android and iOS.
		 */
		class Entity extends Titanium.XML.Node {
			/**
			 * For unparsed entities, the name of the notation for the entity. For parsed entities, this is `null`.
			 */
			readonly notationName: string;

			/**
			 * The public identifier associated with the entity, if specified. If the public identifier was not specified, this is `null`.
			 */
			readonly publicId: string;

			/**
			 * The system identifier associated with the entity, if specified. If the system identifier was not specified, this is null.
			 */
			readonly systemId: string;

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
