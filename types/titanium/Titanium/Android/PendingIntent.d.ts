declare namespace Titanium {
	namespace Android {
		/**
		 * The Titanium binding of an Android `PendingIntent`.
		 */
		class PendingIntent extends Titanium.Proxy {
			/**
			 * Flags used for creating the Pending Intent.
			 */
			flags: number;

			/**
			 * The intent data to pass to the [Activity](Titanium.Android.Activity) launched by this `PendingIntent`.
			 */
			intent: Titanium.Android.Intent;

			/**
			 * If this property is true, flag <Titanium.Android.FLAG_UPDATE_CURRENT> will be
			 * appended to `flags` automatically. Default value is true.
			 */
			updateCurrentIntent: boolean;

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
