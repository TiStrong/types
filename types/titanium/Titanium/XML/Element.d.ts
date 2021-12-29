declare namespace Titanium {
	namespace XML {
		/**
		 * Represents an element in a DOM document, a <Titanium.XML.Node> defined by a start-tag and end-tag (or an empty tag). Elements may have [attributes](Titanium.XML.Attr) associated with them.
		 * Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-745549614) on Android and iOS with some non-standard extensions.
		 */
		class Element extends Titanium.XML.Node {
			/**
			 * The name of the element, as defined by its tag.
			 */
			readonly tagName: string;

			/**
			 * Content (value) of all text nodes within this node.
			 * @deprecated Use [Titanium.XML.Element.textContent](Titanium.XML.Element.textContent) instead.
			 */
			readonly text: string;

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
			 * Retrieves an attribute value by name, returning it as a string.
			 */
			getAttribute(name: string): string;

			/**
			 * Retrieves an attribute value by local name and namespace URI, returning it as a string.
			 */
			getAttributeNS(namespaceURI: string, localName: string): string;

			/**
			 * Retrieves an attribute value by name, returning it as a <Titanium.XML.Attr> object.
			 */
			getAttributeNode(name: string): Titanium.XML.Attr;

			/**
			 * Retrieves an attribute value by local name and namespace URI, returning it as a <Titanium.XML.Attr> object.
			 */
			getAttributeNodeNS(namespaceURI: string, localName: string): Titanium.XML.Attr;

			/**
			 * Retrieves a <Titanium.XML.NodeList> of all descendant elements with a given tag name, in preorder traversal.
			 */
			getElementsByTagName(name: string): Titanium.XML.NodeList;

			/**
			 * Retrieves a <Titanium.XML.NodeList> of all descendant elements with a given local name and namespace URI, in preorder traversal.
			 */
			getElementsByTagNameNS(namespaceURI: string, localName: string): Titanium.XML.NodeList;

			/**
			 * Determines whether or not an attribute with the given name is available in the element, or has a default value.
			 */
			hasAttribute(name: string): boolean;

			/**
			 * Determines whether or not an attribute with the given name is available in the element, or has a default value.
			 */
			hasAttributeNS(namespaceURI: string, localName: string): boolean;

			/**
			 * Removes an attribute by name. If the attribute has a default value, it is immediately replaced with this default, including namespace URI and local name. Throws an exception if the element is read-only.
			 */
			removeAttribute(name: string): void;

			/**
			 * Removes an attribute by local name and namespace URI. If the attribute has a default value, it is immediately replaced with this default, including namespace URI and local name. Throws an exception if the element is read-only.
			 */
			removeAttributeNS(namespaceURI: string, localName: string): void;

			/**
			 * Removes the specified attribute node. If the removed attribute has a default value, it is replaced immediately, with the same namespace and local name as the removed attribute, if applicable. Throws an exception if the element is read-only, or the attribute is not an attribute of the element.
			 */
			removeAttributeNode(oldAttr: Titanium.XML.Attr): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Adds a new attribute. Any attribute with the same name is replaced. Throws an exception if the element is read-only, or if the name contains an illegal character.
			 */
			setAttribute(name: string, value: string): void;

			/**
			 * Adds a new attribute. Any attribute with the same local name and namespace URI is present on the element is replaced, with its prefix changed to that of the `qualifiedName` parameter. Throws an exception if the element is read-only, if the name contains an illegal character, or if the qualified name contains an error.
			 */
			setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void;

			/**
			 * Adds a new attribute. Any attribute with the same `nodeName` as the argument is replaced. Throws an exception if the element is read-only, if `newAttr` is from a different document, or if `newAttr` is already an attribute of another element.
			 */
			setAttributeNode(newAttr: Titanium.XML.Attr): Titanium.XML.Attr;

			/**
			 * Adds a new attribute. Any attribute with the same local name and namespace URI is replaced. Throws an exception if the element is read-only, if `newAttr` is from a different document, or if `newAttr` is already an attribute of another element.
			 */
			setAttributeNodeNS(newAttr: Titanium.XML.Attr): Titanium.XML.Attr;

		}
	}
}
