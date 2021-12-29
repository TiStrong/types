declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Base dynamic configuration for an item.
			 */
			class DynamicItemBehavior extends Titanium.Proxy {
				/**
				 * Specifies if this item can rotate.
				 */
				allowsRotation: boolean;

				/**
				 * Specifies the angular resistance of this item.
				 */
				angularResistance: number;

				/**
				 * Specifies the relative mass density of this item.
				 */
				density: number;

				/**
				 * Specifies the elasticity applied to collisions for this item.
				 */
				elasticity: number;

				/**
				 * Specifies the linear resistance of the item when it slides against another item.
				 */
				friction: number;

				/**
				 * Items added to this behavior.
				 */
				readonly items: Titanium.UI.View[];

				/**
				 * Specifies the linear resistance of this item which reduces linear velocity over time.
				 */
				resistance: number;

				/**
				 * Adds a specified angular velocity for the item.
				 */
				addAngularVelocityForItem(item: Titanium.UI.View, velocity: number): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Adds an item to this behavior.
				 */
				addItem(item: Titanium.UI.View): void;

				/**
				 * Adds a specified linear velocity for the item.
				 */
				addLinearVelocityForItem(item: Titanium.UI.View, velocity: Point): void;

				/**
				 * Returns the angular velocity of the item.
				 */
				angularVelocityForItem(item: Titanium.UI.View): number;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Returns the linear velocity of the item.
				 */
				linearVelocityForItem(item: Titanium.UI.View): Point;

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
