declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Continuous or instantaneous force to apply to an item.
			 */
			class PushBehavior extends Titanium.Proxy {
				/**
				 * State of the push behavior's force.
				 */
				active: boolean;

				/**
				 * Specifies the angle of the force vector in radians.
				 */
				angle: number;

				/**
				 * Items added to this behavior.
				 */
				readonly items: Titanium.UI.View[];

				/**
				 * Specifies the magnitude of the force vector.
				 */
				magnitude: number;

				/**
				 * Specifies the direction of the force vector as an x, y pair.
				 */
				pushDirection: Point;

				/**
				 * Specifies the push mode.
				 */
				pushMode: number;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Adds an item to this behavior.
				 */
				addItem(item: Titanium.UI.View): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Removes the specified item from this behavior.
				 */
				removeItem(item: Titanium.UI.View): void;

			}
		}
	}
}
