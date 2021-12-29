declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Gravitational force to apply to an item.
			 */
			class GravityBehavior extends Titanium.Proxy {
				/**
				 * Specifies the angle of the gravity vector in radians.
				 */
				angle: number;

				/**
				 * Specifies the direction of the gravity vector as an x, y pair.
				 */
				gravityDirection: Point;

				/**
				 * Items added to this behavior.
				 */
				readonly items: Titanium.UI.View[];

				/**
				 * Specifies the magnitude of the gravity vector.
				 */
				magnitude: number;

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
