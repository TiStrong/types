/// <reference path="./Attr.d.ts" />
/// <reference path="./CDATASection.d.ts" />
/// <reference path="./CharacterData.d.ts" />
/// <reference path="./Comment.d.ts" />
/// <reference path="./DOMImplementation.d.ts" />
/// <reference path="./Document.d.ts" />
/// <reference path="./DocumentFragment.d.ts" />
/// <reference path="./DocumentType.d.ts" />
/// <reference path="./Element.d.ts" />
/// <reference path="./Entity.d.ts" />
/// <reference path="./EntityReference.d.ts" />
/// <reference path="./NamedNodeMap.d.ts" />
/// <reference path="./Node.d.ts" />
/// <reference path="./NodeList.d.ts" />
/// <reference path="./Notation.d.ts" />
/// <reference path="./ProcessingInstruction.d.ts" />
/// <reference path="./Text.d.ts" />
declare namespace Titanium {
	/**
	 * The top level XML module.  The XML module is used for parsing and processing XML-based content.
	 */
	namespace XML {
	}
	/**
	 * The top level XML module.  The XML module is used for parsing and processing XML-based content.
	 */
	class XML extends Titanium.Module {
		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Parses an XML string into a <Titanium.XML.Document> object.
		 */
		static parseString(xml: string): Titanium.XML.Document;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Serializes a [Node](Titanium.XML.Node) object into a string.
		 */
		static serializeToString(node: Titanium.XML.Node): string;

	}
}
