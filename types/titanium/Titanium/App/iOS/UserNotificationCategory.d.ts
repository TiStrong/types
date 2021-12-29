declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * A set of notification actions to associate with a notification.
			 */
			class UserNotificationCategory extends Titanium.Proxy {
				/**
				 * Array of notification actions to associate with the group.
				 */
				actionsForDefaultContext: Titanium.App.iOS.UserNotificationAction[];

				/**
				 * Array of notification actions to display for non-dialog-style notification.
				 */
				actionsForMinimalContext: Titanium.App.iOS.UserNotificationAction[];

				/**
				 * Indicates if the proxy will bubble an event to its parent.
				 */
				bubbleParent: never;

				/**
				 * A format string for the summary description used when the system groups the category's notifications.
				 */
				categorySummaryFormat: string;

				/**
				 * The placeholder text to display when notification previews are disabled for the app.
				 */
				hiddenPreviewsBodyPlaceholder: string;

				/**
				 * Identifier for this category.
				 */
				identifier: string;

				/**
				 * The intents related to notifications of this category.
				 */
				intentIdentifiers: string[];

				/**
				 * Options for how to handle notifications of this type.
				 */
				options: number[];

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
