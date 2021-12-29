declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * An action the user selects in response to an interactive notification.
			 */
			class UserNotificationAction extends Titanium.Proxy {
				/**
				 * Selects how to activate the application.
				 */
				activationMode: number;

				/**
				 * Set to true if the action requires the device to be unlocked. On the Apple Watch actions never require authentication.
				 */
				authenticationRequired: boolean;

				/**
				 * Custom behavior the user notification supports.
				 */
				behavior: number;

				/**
				 * Indicates if the proxy will bubble an event to its parent.
				 */
				bubbleParent: never;

				/**
				 * Set to true if the action causes destructive behavior to the user's data or the application.
				 */
				destructive: boolean;

				/**
				 * Identifier for this action. Used to identify the action the user pressed.
				 */
				identifier: string;

				/**
				 * Title of the button displayed in the notification.
				 */
				title: string;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener: never;

				/**
				 * Applies the properties to the proxy.
				 */
				applyProperties: never;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent: never;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener: never;

			}
		}
	}
}
