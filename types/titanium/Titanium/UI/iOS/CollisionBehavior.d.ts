declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Base event for class Titanium.UI.iOS.CollisionBehavior
			 */
			interface CollisionBehaviorBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.UI.iOS.CollisionBehavior;

			}
			/**
			 * Fired when an item collides with a boundary.
			 */
			interface CollisionBehavior_boundarycollision_Event extends CollisionBehaviorBaseEvent {
				/**
				 * Identifier of the boundary the item collided with.
				 */
				identifier: string;

				/**
				 * Item that collided with the boundary.
				 */
				item: Titanium.UI.View;

				/**
				 * Point of the collision when it started. Only returned when `start` is `true`.
				 */
				point: Point;

				/**
				 * Returns `true` if the collision started else `false`.
				 */
				start: boolean;

			}
			/**
			 * Fired when two items collide.
			 */
			interface CollisionBehavior_itemcollision_Event extends CollisionBehaviorBaseEvent {
				/**
				 * Item that collided with `item2`.
				 */
				item1: Titanium.UI.View;

				/**
				 * Item that collided with `item1`.
				 */
				item2: Titanium.UI.View;

				/**
				 * Point of the collision when it started. Only returned when `start` is `true`.
				 */
				point: Point;

				/**
				 * Returns `true` if the collision started else `false`.
				 */
				start: boolean;

			}
			interface CollisionBehaviorEventMap extends ProxyEventMap {
				boundarycollision: CollisionBehavior_boundarycollision_Event;

				itemcollision: CollisionBehavior_itemcollision_Event;

			}
			/**
			 * Dynamic behavior to support collisions between items and boundaries.
			 */
			class CollisionBehavior extends Titanium.Proxy {
				/**
				 * Boundary identfiers added to this behavior.
				 */
				readonly boundaryIdentifiers: BoundaryIdentifier[];

				/**
				 * Specifies the collision behavior.
				 */
				collisionMode: number;

				/**
				 * Items added to this behavior.
				 */
				readonly items: Titanium.UI.View[];

				/**
				 * Insets to apply when using the animator's reference view as the boundary.
				 */
				referenceInsets: Padding;

				/**
				 * Use the animator's reference view as the boundary.
				 */
				treatReferenceAsBoundary: boolean;

				/**
				 * Adds a boundary to this behavior.
				 */
				addBoundary(boundary: BoundaryIdentifier): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof CollisionBehaviorEventMap>(name: K, callback: (this: Titanium.UI.iOS.CollisionBehavior, event: CollisionBehaviorEventMap[K]) => void): void;

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
				fireEvent<K extends keyof CollisionBehaviorEventMap>(name: K, event?: CollisionBehaviorEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Removes all boundaries from this behavior.
				 */
				removeAllBoundaries(): void;

				/**
				 * Removes the specified boundary from this behavior.
				 */
				removeBoundary(boundary: BoundaryIdentifier): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof CollisionBehaviorEventMap>(name: K, callback: (this: Titanium.UI.iOS.CollisionBehavior, event: CollisionBehaviorEventMap[K]) => void): void;

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
/**
 * Dictionary to specify a boundary identifier for <Titanium.UI.iOS.CollisionBehavior.addBoundary>.
 */
interface BoundaryIdentifier {
	/**
	 * Arbitrary identifier for the boundary
	 */
	identifier?: string;

	/**
	 * Start point for the boundary
	 */
	point1?: Point;

	/**
	 * End point for the boundary
	 */
	point2?: Point;

}
