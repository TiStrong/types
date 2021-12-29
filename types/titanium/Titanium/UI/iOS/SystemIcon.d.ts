declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the system icon styles that can be used on a tab group tab.
			 */
			namespace SystemIcon {
				/**
				 * Bookmark style icon
				 */
				const BOOKMARKS: number;

				/**
				 * Contacts style icon
				 */
				const CONTACTS: number;

				/**
				 * Downloads style icon
				 */
				const DOWNLOADS: number;

				/**
				 * Favorites style icon
				 */
				const FAVORITES: number;

				/**
				 * Featured style icon
				 */
				const FEATURED: number;

				/**
				 * History style icon
				 */
				const HISTORY: number;

				/**
				 * More style icon
				 */
				const MORE: number;

				/**
				 * Most recent style icon
				 */
				const MOST_RECENT: number;

				/**
				 * Most viewed style icon
				 */
				const MOST_VIEWED: number;

				/**
				 * Recents style icon
				 */
				const RECENTS: number;

				/**
				 * Search style icon
				 */
				const SEARCH: number;

				/**
				 * Top rated style icon
				 */
				const TOP_RATED: number;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				function addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				function fireEvent(name: string, event?: any): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				function removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
