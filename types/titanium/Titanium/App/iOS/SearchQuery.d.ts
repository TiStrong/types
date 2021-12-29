declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * Base event for class Titanium.App.iOS.SearchQuery
			 */
			interface SearchQueryBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.App.iOS.SearchQuery;

			}
			/**
			 * Fired when the query finds a new batch of matching items.
			 */
			interface SearchQuery_founditems_Event extends SearchQueryBaseEvent {
				/**
				 * The number of items that are currently fetched.
				 */
				foundItemsCount: number;

				/**
				 * An array of indexed items that match the specified query.
				 */
				items: Titanium.App.iOS.SearchableItem[];

			}
			/**
			 * Fired when the query completes to inform you about it's success.
			 * To receive items, use the `founditems` event.
			 */
			interface SearchQuery_completed_Event extends SearchQueryBaseEvent {
				/**
				 * Error message, if any returned. Undefined otherwise.
				 */
				error: string;

				/**
				 * Indicates if the operation succeeded. Returns true if download succeeded, false otherwise.
				 */
				success: boolean;

			}
			interface SearchQueryEventMap extends ProxyEventMap {
				completed: SearchQuery_completed_Event;

				founditems: SearchQuery_founditems_Event;

			}
			/**
			 * A search query object manages the criteria to apply when searching app content that you have previously
			 * indexed by using the Core Spotlight APIs.
			 */
			class SearchQuery extends Titanium.Proxy {
				/**
				 * An array of strings that represent the attributes of indexed items.
				 */
				attributes: string[];

				/**
				 * A formatted string that defines the matching criteria to apply to indexed items.
				 */
				queryString: string;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof SearchQueryEventMap>(name: K, callback: (this: Titanium.App.iOS.SearchQuery, event: SearchQueryEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Cancels a query operation.
				 */
				cancel(): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof SearchQueryEventMap>(name: K, event?: SearchQueryEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * A Boolean value that indicates if the query has been cancelled (`true`) or not (`false`).
				 */
				isCancelled(): boolean;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof SearchQueryEventMap>(name: K, callback: (this: Titanium.App.iOS.SearchQuery, event: SearchQueryEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Asynchronously queries the index for items that match the query object's specifications.
				 */
				start(): void;

			}
		}
	}
}
