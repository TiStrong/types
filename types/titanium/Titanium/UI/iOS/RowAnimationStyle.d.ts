declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the Animation Styles used for transition on table view rows.
			 */
			namespace RowAnimationStyle {
				/**
				 * The inserted row or rows slides in from the bottom; the deleted row or rows slides out
				 * toward the bottom.
				 */
				const BOTTOM: number;

				/**
				 * The inserted or deleted row or rows fades into or out of the table view.
				 */
				const FADE: number;

				/**
				 * The inserted row or rows slides in from the left; the deleted row or rows slides out to the
				 * left.
				 */
				const LEFT: number;

				/**
				 * No animation is performed. The new cell value appears as if the cell had just been reloaded.
				 */
				const NONE: number;

				/**
				 * The inserted row or rows slides in from the right; the deleted row or rows slides out to
				 * the right.
				 */
				const RIGHT: number;

				/**
				 * The inserted row or rows slides in from the top; the deleted row or rows slides out toward
				 * the top.
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
