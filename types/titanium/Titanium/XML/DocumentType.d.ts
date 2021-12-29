declare namespace Titanium {
	namespace XML {
		/**
		 * Each <Titanium.XML.Document> has a `doctype` attribute whose value is either 'null' or a <Titanium.XML.DocumentType> object.
		 */
		class DocumentType extends Titanium.XML.Node {
			/**
			 * A <Titanium.XML.NamedNodeMap> containing the general entities, both external and internal, declared in the DTD. Parameter entities are not contained. Duplicates are discarded.
			 */
			readonly entities: Titanium.XML.NamedNodeMap;

			/**
			 * The internal subset as a string.
			 */
			readonly internalSubset: string;

			/**
			 * The name of DTD; i.e., the name immediately following the `DOCTYPE` keyword.
			 */
			readonly name: string;

			/**
			 * A <Titanium.XML.NamedNodeMap> containing the notations declared in the DTD. Duplicates are discarded. Every node in this map also implements the <Titanium.XML.Notation> interface.
			 */
			readonly notations: Titanium.XML.NamedNodeMap;

			/**
			 * The public identifier of the external subset.
			 */
			readonly publicId: string;

			/**
			 * The system identifier of the external subset.
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
