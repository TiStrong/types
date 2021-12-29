declare namespace Titanium {
	namespace XML {
		/**
		 * A single node in the [Document](Titanium.XML.Document) tree.
		 */
		class Node extends Titanium.Proxy {
			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify an
			 * [Attr](Titanium.XML.Attr) node.
			 */
			readonly ATTRIBUTE_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a
			 * [CDATASection](Titanium.XML.CDATASection) node.
			 */
			readonly CDATA_SECTION_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a
			 * [Comment](Titanium.XML.Comment) node.
			 */
			readonly COMMENT_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a
			 * [DocumentFragment](Titanium.XML.DocumentFragment) node.
			 */
			readonly DOCUMENT_FRAGMENT_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a
			 * [Document](Titanium.XML.Document) node.
			 */
			readonly DOCUMENT_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a
			 * [DocumentType](Titanium.XML.DocumentType) node.
			 */
			readonly DOCUMENT_TYPE_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify an
			 * [Element](Titanium.XML.Element) node.
			 */
			readonly ELEMENT_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify an
			 * [Entity](Titanium.XML.Entity) node.
			 */
			readonly ENTITY_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify an
			 * [EntityReference](Titanium.XML.EntityReference) node.
			 */
			readonly ENTITY_REFERENCE_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a
			 * [Notation](Titanium.XML.Notation) node.
			 */
			readonly NOTATION_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a
			 * [ProcessingInstruction](Titanium.XML.ProcessingInstruction) node.
			 */
			readonly PROCESSING_INSTRUCTION_NODE: number;

			/**
			 * Used with [nodeType](Titanium.XML.Node.nodeType) to identify a
			 * [Text](Titanium.XML.Text) node.
			 */
			readonly TEXT_NODE: number;

			/**
			 * A map of this node's attributes.
			 */
			readonly attributes: Titanium.XML.NamedNodeMap;

			/**
			 * A <Titanium.XML.NodeList> of this node's children.
			 */
			readonly childNodes: Titanium.XML.NodeList;

			/**
			 * This node's first child.
			 */
			readonly firstChild: Titanium.XML.Node;

			/**
			 * This node's last child.
			 */
			readonly lastChild: Titanium.XML.Node;

			/**
			 * Local part of the qualified name of this node.
			 */
			localName: string;

			/**
			 * Namespace URI of this node.
			 */
			readonly namespaceURI: string;

			/**
			 * This node's next sibling.
			 */
			readonly nextSibling: Titanium.XML.Node;

			/**
			 * Name of this node.
			 */
			readonly nodeName: string;

			/**
			 * This node's type. One of `ELEMENT_NODE`, `ATTRIBUTE_NODE`, `TEXT_NODE`, `CDATA_SECTION_NODE`,
			 * `ENTITY_REFERENCE_NODE`, `ENTITY_NODE`, `PROCESSING_INSTRUCTION_NODE`, `COMMENT_NODE`,
			 * `DOCUMENT_NODE`, `DOCUMENT_TYPE_NODE`, `DOCUMENT_FRAGMENT_NODE`, `NOTATION_NODE`.
			 */
			readonly nodeType: number;

			/**
			 * Content (value) of this node.
			 */
			nodeValue: string;

			/**
			 * This node's owning document.
			 */
			readonly ownerDocument: Titanium.XML.Document;

			/**
			 * This node's parent node.
			 */
			readonly parentNode: Titanium.XML.Node;

			/**
			 * Namespace prefix of this node.
			 */
			prefix: string;

			/**
			 * This node's previous sibling.
			 */
			readonly previousSibling: Titanium.XML.Node;

			/**
			 * Content (value) of all text nodes within this node.
			 * @deprecated Use [Titanium.XML.Node.textContent](Titanium.XML.Node.textContent) instead.
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
			 * Appends the node `newChild` as a child of this node.
			 */
			appendChild(newChild: Titanium.XML.Node): Titanium.XML.Node;

			/**
			 * Returns a duplicate of this node.
			 */
			cloneNode(deep: boolean): Titanium.XML.Node;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Returns `true` if this node has attributes.
			 */
			hasAttributes(): boolean;

			/**
			 * Returns `true` if this node has child nodes.
			 */
			hasChildNodes(): boolean;

			/**
			 * Inserts the node `newChild` before the node `refChild`.
			 */
			insertBefore(newChild: Titanium.XML.Node, refChild: Titanium.XML.Node): Titanium.XML.Node;

			/**
			 * Tests whether the DOM implementation supports a specific feature.
			 */
			isSupported(feature: string, version: string): boolean;

			/**
			 * Normalizes text and attribute nodes in this node's child hierarchy.
			 */
			normalize(): void;

			/**
			 * Removes a child node from this node.
			 */
			removeChild(oldChild: Titanium.XML.Node): Titanium.XML.Node;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Replaces the node `oldChild` with the node `newChild`.
			 */
			replaceChild(newChild: Titanium.XML.Node, oldChild: Titanium.XML.Node): Titanium.XML.Node;

		}
	}
}
