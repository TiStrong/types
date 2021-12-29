declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * A service that runs when the application is placed in the background.
			 */
			class BackgroundService extends Titanium.Proxy {
				/**
				 * A local URL to a JavaScript file containing the code to run in the background.
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

				/**
				 * Stops the service from running during the current background session to conserve resources.
				 */
				stop(): void;

				/**
				 * Unregisters the background service.
				 */
				unregister(): void;

			}
		}
	}
}
