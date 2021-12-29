declare namespace Titanium {
	namespace XML {
		/**
		 * The <Titanium.XML.DOMImplementation> interface provides a number of methods for performing operations that are independent of any particular instance of the document object model.Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490) on Android and iOS.
		 */
		class DOMImplementation extends Titanium.Proxy {
			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Creates an <Titanium.XML.Document> object of the specified type with its document element. Raises an exception if qualifiedName is malformed, contains an illegal character, or is inconsistent with namespaceURI. Also raises an exception if doctype has already been used with a different document.
			 */
			createDocument(namespaceURI: string, qualifiedName: string, doctype: Titanium.XML.DocumentType): Titanium.XML.Document;

			/**
			 * Creates an empty <Titanium.XML.DocumentType> node. Entity declarations and notations are not made available. Entity reference expansions and default attribute additions do not occur. Raises an exception if qualifiedName is malformed or contains an illegal character.
			 */
			createDocumentType(qualifiedName: string, publicId: string, systemId: string): Titanium.XML.DocumentType;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Test if the <Titanium.XML.DOMImplementation> implements a specific feature.
			 */
			hasFeature(feature: string, version: string): boolean;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
