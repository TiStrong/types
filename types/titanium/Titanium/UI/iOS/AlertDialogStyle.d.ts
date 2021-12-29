declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the style that can be used for the `style` property of
			 * <Titanium.UI.AlertDialog>.
			 */
			namespace AlertDialogStyle {
				/**
				 * A standard alert dialog. This is the default value.
				 */
				const DEFAULT: number;

				/**
				 * An alert dialog that allows the user to enter login identifier and password.
				 */
				const LOGIN_AND_PASSWORD_INPUT: number;

				/**
				 * An alert dialog that allows the user to enter text.
				 */
				const PLAIN_TEXT_INPUT: number;

				/**
				 * An alert dialog that allows the user to enter text. The text field is obscured.
				 */
				const SECURE_TEXT_INPUT: number;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				function addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				function fireEvent(name: string, event?: any): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				function removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
