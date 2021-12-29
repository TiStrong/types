declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Dynamic behavior defining an item's movement to a specific point.
			 */
			class SnapBehavior extends Titanium.Proxy {
				/**
				 * Specifies the amount of oscillation during the conclusion of the snap.
				 */
				damping: number;

				/**
				 * Item to add to this behavior.
				 */
				item: Titanium.UI.View;

				/**
				 * Specifies the point to snap to.
				 */
				snapPoint: Point;

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

			}
		}
	}
}
