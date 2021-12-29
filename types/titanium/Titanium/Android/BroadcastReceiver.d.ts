declare namespace Titanium {
	namespace Android {
		/**
		 * Monitor and handle Android system broadcasts.
		 */
		class BroadcastReceiver extends Titanium.Proxy {
			/**
			 * The function called when a broadcast is received.
			 */
			onReceived: (param0: any) => void;

			/**
			 * URL of the JavaScript file to handle the broadcast.
			 */
			url: string;

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
