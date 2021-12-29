declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * Used to create a unique object containing all of the search information that will appear in the device search index.
			 */
			class SearchableItem extends Titanium.Proxy {
				/**
				 * Set of metadata properties to display for the item.
				 */
				attributeSet: Titanium.App.iOS.SearchableItemAttributeSet;

				/**
				 * Identifier that represents the "domain" or owner of this item.
				 */
				domainIdentifier: string;

				/**
				 * Searchable items have an expiration date or time to live.  By default it is set to one month.
				 */
				expirationDate: string;

				/**
				 * Unique identifier to your application group.
				 */
				uniqueIdentifier: string;

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
}
