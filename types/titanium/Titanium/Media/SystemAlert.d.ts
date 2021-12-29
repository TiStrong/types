declare namespace Titanium {
	namespace Media {
		/**
		 * An object for playing system sounds.
		 * @deprecated This iOS-only API has been deprecated and moved to the [Ti.SystemAlert](https://github.com/appcelerator-modules/ti.systemalert) module in 8.0.0.
		 */
		class SystemAlert extends Titanium.Proxy {
			/**
			 * URL identifying the audio resource.
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
			 * Start playing the system alert.
			 */
			play(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
