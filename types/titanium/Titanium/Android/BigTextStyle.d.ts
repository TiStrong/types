declare namespace Titanium {
	namespace Android {
		/**
		 * Helper object for generating large-format notifications that include a lot of text.
		 */
		class BigTextStyle extends Titanium.Proxy {
			/**
			 * Overrides <Titanium.Android.Notification.contentTitle> in the big form of the notification. This defaults to the value passed to <Titanium.Android.Notification.contentTitle>.
			 */
			bigContentTitle: string;

			/**
			 * Sets the longer text to be displayed in the big form of the notification in place of the content text.
			 */
			bigText: string;

			/**
			 * Set the first line of text after the detail section in the big form of the notification.
			 */
			summaryText: string;

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
