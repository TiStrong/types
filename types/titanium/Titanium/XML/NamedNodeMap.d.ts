declare namespace Titanium {
	namespace XML {
		/**
		 * A key-value paired map that maps String objects to <Titanium.XML.Node> objects.
		 * Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1780488922) on Android and iOS.
		 */
		class NamedNodeMap extends Titanium.Proxy {
			/**
			 * The number of nodes in the map. The valid range of child node indices is 0-`length`-1, inclusive.
			 */
			readonly length: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Retrieves a node specified by name.
			 */
			getNamedItem(name: string): Titanium.XML.Node;

			/**
			 * Retrieves a node specified by name and namespace. Returns `null` if no matching node is in the map.
			 */
			getNamedItemNS(namespaceURI: string, localName: string): Titanium.XML.Node;

			/**
			 * Retrieves the node at the specified index of the map. Note that NamedNodeMaps are not ordered.
			 */
			item(index: number): Titanium.XML.Node;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Removes a node from the map specified by name. When this map contains attributes attached to an element, if the removed attribtue is known to have a default, it is replaced with that value.
			 */
			removeNamedItem(name: string): Titanium.XML.Node;

			/**
			 * Removes a node from the map specified by local name and namespace URI. When this map contains attributes attached to an element, if the removed attribtue is known to have a default, it is replaced with that value. Returns the node removed from the map, or `null` if there is no corresponding node.
			 */
			removeNamedItemNS(namespaceURI: string, localName: string): Titanium.XML.Node;

			/**
			 * Adds a node using its `nodeName` attribute. If a node with that name is already present, it is replaced. Throws an exception if the argument is from a different document, the map is read-only, or the argument is an attribute of another element.
			 */
			setNamedItem(node: Titanium.XML.Node): Titanium.XML.Node;

			/**
			 * Adds a node using its `namespaceURI` and `localName` attributes. If a node with that name is already present, it is replaced. Throws an exception if the argument is from a different document, the map is read-only, or the argument is an attribute of another element.
			 */
			setNamedItemNS(node: Titanium.XML.Node): Titanium.XML.Node;

		}
	}
}
