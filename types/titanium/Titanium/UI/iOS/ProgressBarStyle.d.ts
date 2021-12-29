declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the bar styles used on the `style` property of <Titanium.UI.ProgressBar>.
			 */
			namespace ProgressBarStyle {
				/**
				 * The style of progress view that is used in a toolbar.
				 */
				const BAR: number;

				/**
				 * he standard progress-view style. This is the default.
				 */
				const DEFAULT: number;

				/**
				 * The standard progress-view style. Same as `DEFAULT`.
				 */
				const PLAIN: number;

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
