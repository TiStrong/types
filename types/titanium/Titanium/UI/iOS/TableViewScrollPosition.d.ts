declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the position value that can be used for the `position` property of
			 * <Titanium.UI.TableView> when invoking `scrollToIndex`.
			 */
			namespace TableViewScrollPosition {
				/**
				 * The table view scrolls the row of interest to the bottom of the visible table view.
				 */
				const BOTTOM: number;

				/**
				 * The table view scrolls the row of interest to the middle of the visible table view.
				 */
				const MIDDLE: number;

				/**
				 * The table view scrolls the row of interest to be fully visible with a minimum of movement. If the row is already fully visible, no scrolling occurs. For example, if the row is above the visible area, the behavior is identical to that specified by `TOP`. This is the default.
				 */
				const NONE: number;

				/**
				 * The table view scrolls the row of interest to the top of the visible table view.
				 */
				const TOP: number;

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
