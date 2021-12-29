declare namespace Titanium {
	namespace UI {
		/**
		 * A toast notification.
		 */
		class Notification extends Titanium.Proxy {
			/**
			 * Determines how long the notification stays on screen.
			 */
			duration: number;

			/**
			 * Determines the location at which the notification should appear on the screen.
			 */
			gravity: number;

			/**
			 * Horizontal placement of the notification, *as a fraction of the screen width*.
			 */
			horizontalMargin: number;

			/**
			 * Notification text to display.
			 */
			message: string;

			/**
			 * Vertical placement of the notifcation, *as a fraction of the screen height*.
			 */
			verticalMargin: number;

			/**
			 * X offset from the default position, in pixels.
			 */
			xOffset: number;

			/**
			 * Y offset from the default position, in pixels.
			 */
			yOffset: number;

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
			 * Show the notification.
			 */
			show(): void;

		}
	}
}
