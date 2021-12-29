declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Base event for class Titanium.UI.iOS.Animator
			 */
			interface AnimatorBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.UI.iOS.Animator;

			}
			/**
			 * Fired when the animator paused its animations.
			 */
			interface Animator_pause_Event extends AnimatorBaseEvent {
			}
			/**
			 * Fired when the animator resumes its animations.
			 */
			interface Animator_resume_Event extends AnimatorBaseEvent {
			}
			interface AnimatorEventMap extends ProxyEventMap {
				pause: Animator_pause_Event;

				resume: Animator_resume_Event;

			}
			/**
			 * Provides support for the built-in iOS dynamic animations
			 */
			class Animator extends Titanium.Proxy {
				/**
				 * Behaviors associated with this animator.
				 */
				behaviors: Titanium.Proxy[];

				/**
				 * Titanium View object to initialize as the reference view for the animator.
				 */
				referenceView: Titanium.UI.View;

				/**
				 * Returns `true` if the animator is running else `false`.
				 */
				readonly running: boolean;

				/**
				 * Adds a dynamic behavior to the animator.
				 */
				addBehavior(behavior: Titanium.Proxy): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof AnimatorEventMap>(name: K, callback: (this: Titanium.UI.iOS.Animator, event: AnimatorEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof AnimatorEventMap>(name: K, event?: AnimatorEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Removes all behaviors from this animator.
				 */
				removeAllBehaviors(): void;

				/**
				 * Removes the specified behavior from the animator.
				 */
				removeBehavior(behavior: Titanium.Proxy): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof AnimatorEventMap>(name: K, callback: (this: Titanium.UI.iOS.Animator, event: AnimatorEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Starts the animation behaviors.
				 */
				startAnimator(): void;

				/**
				 * Stops the animation behaviors.
				 */
				stopAnimator(): void;

				/**
				 * Updates the animator's state information with the current state of the specified item.
				 */
				updateItemUsingCurrentState(item: Titanium.UI.View): void;

			}
		}
	}
}
