declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the animation styles used for view transitions.
			 * One of the group of animation style constants
			 *   * [CURL_DOWN](Titanium.UI.iOS.AnimationStyle.CURL_DOWN)
			 *   * [CURL_UP](Titanium.UI.iOS.AnimationStyle.CURL_UP)
			 *   * [FLIP_FROM_LEFT](Titanium.UI.iOS.AnimationStyle.FLIP_FROM_LEFT)
			 *   * [FLIP_FROM_RIGHT](Titanium.UI.iOS.AnimationStyle.FLIP_FROM_RIGHT)
			 *   * [FLIP_FROM_TOP](Titanium.UI.iOS.AnimationStyle.FLIP_FROM_TOP)
			 *   * [FLIP_FROM_BOTTOM](Titanium.UI.iOS.AnimationStyle.FLIP_FROM_BOTTOM)
			 *   * [CROSS_DISSOLVE](Titanium.UI.iOS.AnimationStyle.CROSS_DISSOLVE)
			 *   * [NONE](Titanium.UI.iOS.AnimationStyle.NONE)
			 */
			namespace AnimationStyle {
				/**
				 * A transition that dissolves from one view to the next.
				 */
				const CROSS_DISSOLVE: number;

				/**
				 * Curl downwards during a transition animation.
				 */
				const CURL_DOWN: number;

				/**
				 * Curl upwards during a transition animation.
				 */
				const CURL_UP: number;

				/**
				 * Flip from bottom to top during a transition animation.
				 */
				const FLIP_FROM_BOTTOM: number;

				/**
				 * Flip from left to right during a transition animation.
				 */
				const FLIP_FROM_LEFT: number;

				/**
				 * Flip from right to left during a transition animation.
				 */
				const FLIP_FROM_RIGHT: number;

				/**
				 * Flip from top to bottom during a transition animation.
				 */
				const FLIP_FROM_TOP: number;

				/**
				 * No animation.
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
