declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the style that can be used for the `selectionStyle` property of
			 * <Titanium.UI.TableViewRow>.
			 */
			namespace TableViewCellSelectionStyle {
				/**
				 * The cell when selected has a blue background. This is the default value.
				 */
				const BLUE: number;

				/**
				 * Then cell when selected has a gray background.
				 */
				const GRAY: number;

				/**
				 * The cell has no distinct style for when it is selected.
				 */
				const NONE: number;

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
