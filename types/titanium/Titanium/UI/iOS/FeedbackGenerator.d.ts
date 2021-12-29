declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * The feedback generator API is introduced in iOS 10 to handle the haptic feedback when using an iPhone 7 or
			 * later devices.
			 */
			class FeedbackGenerator extends Titanium.Proxy {
				/**
				 * The style of the feedback generator you want to create. This property is only required when using <Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT>.
				 */
				style?: number;

				/**
				 * The type of feedback generator you want to create.
				 */
				type: number;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Used to trigger a haptic feedback after an impact occurred.
				 */
				impactOccurred(): void;

				/**
				 * Used to trigger a haptic feedback after a notification has been received.
				 */
				notificationOccurred(notificationType: number): void;

				/**
				 * Used to prepare the haptic sensor for the upcoming interaction with it.
				 */
				prepare(): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Used to trigger a haptic feedback after a selection has been made.
				 */
				selectionChanged(): void;

			}
		}
	}
}
