declare namespace Titanium {
	namespace Network {
		/**
		 * Base event for class Titanium.Network.BonjourBrowser
		 */
		interface BonjourBrowserBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.Network.BonjourBrowser;

		}
		/**
		 * Fired when the discovered services list is updated
		 */
		interface BonjourBrowser_updatedservices_Event extends BonjourBrowserBaseEvent {
			/**
			 * An array of BonjourService objects corresponding to currently available services.  If you cache this value, including using it as table data, be aware that it could become out of date at any time due to the asynchronous nature of Bonjour service discovery.
			 */
			services: Titanium.Network.BonjourService[];

		}
		interface BonjourBrowserEventMap extends ProxyEventMap {
			updatedservices: BonjourBrowser_updatedservices_Event;

		}
		/**
		 * A browser for the discovery and retrieval of Bonjour services available on the network.
		 */
		class BonjourBrowser extends Titanium.Proxy {
			/**
			 * The domain the browser is searching in
			 */
			domain: string;

			/**
			 * Whether or not the browser is currently searching
			 */
			isSearching: boolean;

			/**
			 * The type of the service the browser searches for
			 */
			serviceType: string;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof BonjourBrowserEventMap>(name: K, callback: (this: Titanium.Network.BonjourBrowser, event: BonjourBrowserEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof BonjourBrowserEventMap>(name: K, event?: BonjourBrowserEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof BonjourBrowserEventMap>(name: K, callback: (this: Titanium.Network.BonjourBrowser, event: BonjourBrowserEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Conduct a search for Bonjour services matching the type and domain specified during creation
			 */
			search(): void;

			/**
			 * Halt an ongoing search
			 */
			stopSearch(): void;

		}
	}
}
