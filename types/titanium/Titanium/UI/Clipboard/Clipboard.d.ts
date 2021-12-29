declare namespace Titanium {
	namespace UI {
		/**
		 * A module used for accessing clipboard data.
		 */
		class Clipboard extends Titanium.Module {
			/**
			 * Create a clipboard identified by name if it doesn't exist.
			 */
			static allowCreation: boolean;

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
			 * Create a new named clipboard.
			 */
			static name: string;

			/**
			 * Create a new clipboard identified by a unique system-generated name.
			 */
			static unique: boolean;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Applies the properties to the proxy.
			 */
			static applyProperties(props: any): void;

			/**
			 * Deletes data of the specified MIME type stored in the clipboard. If MIME type omitted, all
			 * data is deleted.
			 */
			static clearData(type?: string): void;

			/**
			 * Deletes all text data stored in the clipboard.
			 */
			static clearText(): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent(name: string, event?: any): void;

			/**
			 * Gets data of the specified MIME type stored in the clipboard. Returns null if non-text mimetype on Android.
			 */
			static getData(type: string): string | Titanium.Blob;

			/**
			 * Gets the items that have been specified earlier using <Titanium.UI.Clipboard.setItems>.
			 */
			static getItems(): any[];

			/**
			 * Gets text data stored in the clipboard.
			 */
			static getText(): string;

			/**
			 * Indicates whether any colors are stored in the clipboard.
			 */
			static hasColors(): boolean;

			/**
			 * Indicates whether any data of the specified MIME type is stored in the clipboard.
			 */
			static hasData(type?: string): boolean;

			/**
			 * Indicates whether any images are stored in the clipboard.
			 */
			static hasImages(): boolean;

			/**
			 * Indicates whether any text data is stored in the clipboard.
			 */
			static hasText(): boolean;

			/**
			 * Indicates whether any URLs are stored in the clipboard.
			 */
			static hasURLs(): boolean;

			/**
			 * Removes the clipboard.
			 */
			static remove(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Stores data of the specified MIME type in the clipboard.
			 */
			static setData(type: string, data: any): void;

			/**
			 * Adds an array of items to a clipboard, and sets privacy options for all included items.
			 */
			static setItems(items: ClipboardItemsType): void;

			/**
			 * Stores text data in the clipboard.
			 */
			static setText(text: string): void;

		}
	}
}
/**
 * Dictionary describing the items for <Titanium.UI.Clipboard.setItems>.
 */
interface ClipboardItemsType {
	/**
	 * An array of key-value items to add to the clipboard. The key must a valid mime-type
	 * matching the mime-type of the value.
	 * Alterntaively, iOS supports using [Universal Type Identifiers](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html)
	 */
	items?: any[];

	/**
	 * The privacy options to apply to all the items on the clipboard. The available options are
	 * described in `Ti.UI.CLIPBOARD_OPTION_*`. Depending on the key, the value can be a Date or
	 * Boolean.
	 */
	options?: any;

}
