declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.Animation
		 */
		interface AnimationBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.Animation;

		}
		/**
		 * Fired when the animation completes.
		 */
		interface Animation_complete_Event extends AnimationBaseEvent {
		}
		/**
		 * Fired when the animation starts.
		 */
		interface Animation_start_Event extends AnimationBaseEvent {
		}
		interface AnimationEventMap extends ProxyEventMap {
			complete: Animation_complete_Event;

			start: Animation_start_Event;

		}
		/**
		 * The `Animation` object defines an animation that can be applied to a view.
		 */
		class Animation extends Titanium.Proxy {
			/**
			 * Coordinate of the view about which to pivot an animation.
			 */
			anchorPoint: Point;

			/**
			 * Specifies if the animation should be replayed in reverse upon completion.
			 */
			autoreverse: boolean;

			/**
			 * Value of the `backgroundColor` property at the end of the animation, as a color name
			 * or hex triplet.
			 */
			backgroundColor: string | Titanium.UI.Color;

			/**
			 * Value of the `bottom` property at the end of the animation.
			 */
			bottom: number;

			/**
			 * Value of the `center` property at the end of the animation.
			 */
			center: Point;

			/**
			 * Value of the `color` property at the end of the animation, as a color name or hex triplet.
			 */
			color: string | Titanium.UI.Color;

			/**
			 * Animation curve or easing function to apply to the animation.
			 */
			curve: number;

			/**
			 * The damping ratio for the spring animation as it approaches its quiescent state.
			 */
			dampingRatio: number;

			/**
			 * Delay, in milliseconds before starting the animation.
			 */
			delay: number;

			/**
			 * Duration of the animation, in milliseconds.
			 */
			duration: number;

			/**
			 * Value of the `elevation` property at the end of the animation.
			 */
			elevation: number;

			/**
			 * Value of the `height` property at the end of the animation.
			 */
			height: number;

			/**
			 * Value of the `left` property at the end of the animation.
			 */
			left: number;

			/**
			 * Value of the `opacity` property at the end of the animation.
			 */
			opacity: number;

			/**
			 * Value of the `opaque` property at the end of the animation.
			 */
			opaque: boolean;

			/**
			 * Number of times the animation should be performed.
			 */
			repeat: number;

			/**
			 * Value of the `right` property at the end of the animation.
			 */
			right: number;

			/**
			 * The initial spring velocity.
			 */
			springVelocity: number;

			/**
			 * Value of the `top` property at the end of the animation.
			 */
			top: number;

			/**
			 * Animate the view from its current tranform to the specified transform.
			 */
			transform: Titanium.UI.Matrix2D | Titanium.UI.Matrix3D;

			/**
			 * Transition type to use during a transition animation.
			 */
			transition: number;

			/**
			 * New view to transition to.
			 */
			view: Titanium.UI.View;

			/**
			 * Value of the `visible` property at the end of the animation.
			 */
			visible: boolean;

			/**
			 * Value of the `width` property at the end of the animation.
			 */
			width: number;

			/**
			 * Value of the `zIndex` property at the end of the animation.
			 */
			zIndex: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof AnimationEventMap>(name: K, callback: (this: Titanium.UI.Animation, event: AnimationEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof AnimationEventMap>(name: K, event?: AnimationEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof AnimationEventMap>(name: K, callback: (this: Titanium.UI.Animation, event: AnimationEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
