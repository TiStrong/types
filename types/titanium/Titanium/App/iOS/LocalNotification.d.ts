declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * A local notification to alert the user of new or pending application information.
			 */
			class LocalNotification extends Titanium.Proxy {
				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Cancels the pending notification.
				 * @deprecated Use [Titanium.App.iOS.UserNotificationCenter.removePendingNotifications](Titanium.App.iOS.UserNotificationCenter.removePendingNotifications) instead.
				 */
				cancel(): void;

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
