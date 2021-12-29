declare namespace Titanium {
	namespace XML {
		/**
		 * The DOM Document returned from <Titanium.XML.parseString>.
		 */
		class Document extends Titanium.XML.Node {
			/**
			 * An interface to the list of entities that are defined for the document, such as via a Document Type Definition (DTD).
			 */
			readonly doctype: Titanium.XML.DocumentType;

			/**
			 * Root element of this document.
			 */
			readonly documentElement: Titanium.XML.Element;

			/**
			 * [DOMImplementation](Titanium.XML.DOMImplementation) object associated with this
			 * document.
			 */
			readonly implementation: Titanium.XML.DOMImplementation;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Creates an attribute with the given name.
			 */
			createAttribute(name: string): Titanium.XML.Attr;

			/**
			 * Creates an attribute with the given name and namespace.
			 */
			createAttributeNS(namespaceURI: string, name: string): Titanium.XML.Attr;

			/**
			 * Creates and returns a [CDATASection](Titanium.XML.CDATASection).
			 */
			createCDATASection(data: string): Titanium.XML.CDATASection;

			/**
			 * Creates a [Comment](Titanium.XML.Comment) with the supplied string data.
			 */
			createComment(data: string): Titanium.XML.Comment;

			/**
			 * Creates an empty [DocumentFragment](Titanium.XML.DocumentFragment).
			 */
			createDocumentFragment(): Titanium.XML.DocumentFragment;

			/**
			 * Creates an element with the given tag name.
			 */
			createElement(tagName: string): Titanium.XML.Element;

			/**
			 * Create a new element with the given namespace and name.
			 */
			createElementNS(namespaceURI: string, name: string): Titanium.XML.Element;

			/**
			 * Creates an [EntityReference](Titanium.XML.EntityReference) with the given name.
			 */
			createEntityReference(name: string): Titanium.XML.EntityReference;

			/**
			 * Creates a processing instruction for inserting into the DOM tree.
			 */
			createProcessingInstruction(target: string, data: string): Titanium.XML.ProcessingInstruction;

			/**
			 * Creates a text node.
			 */
			createTextNode(data: string): Titanium.XML.Text;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Returns an [Element](Titanium.XML.Element) that has an ID attribute with the given value.
			 */
			getElementById(elementId: string): Titanium.XML.Element;

			/**
			 * Returns a node list of elements in the document which have the given tag.
			 */
			getElementsByTagName(tagname: string): Titanium.XML.NodeList;

			/**
			 * Returns a node list of elements in the document which belong to the given namespace and have the given tag name.
			 */
			getElementsByTagNameNS(namespaceURI: string, localname: string): Titanium.XML.NodeList;

			/**
			 * Imports a node from another document to this document,
			 * without altering or removing the source node from the original document.
			 */
			importNode(importedNode: Titanium.XML.Node, deep: boolean): Titanium.XML.Node;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
