declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * The SearchableIndex module is used to add or remove Ti.App.iOS.SearchableItem objects from the device search index.
			 */
			class SearchableIndex extends Titanium.Proxy {
				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Adds an array of Titanium.App.iOS.SearchableItem objects to the default search index.
				 */
				addToDefaultSearchableIndex(Array: ReadonlyArray<Titanium.App.iOS.SearchableItem>, callback: (param0: any) => void): void;

				/**
				 * Removes search items based on an array of domain identifiers.
				 */
				deleteAllSearchableItemByDomainIdenifiers(Array: ReadonlyArray<string>, callback: (param0: any) => void): void;

				/**
				 * Removes all search items added by the application.
				 */
				deleteAllSearchableItems(callback: (param0: any) => void): void;

				/**
				 * Removes search items based on an array of identifiers.
				 */
				deleteSearchableItemsByIdentifiers(Array: ReadonlyArray<string>, callback: (param0: any) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Indicates whether indexing is supported by the device.
				 */
				isSupported(): boolean;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
