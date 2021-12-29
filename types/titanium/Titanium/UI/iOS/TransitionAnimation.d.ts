declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A transition animation when opening or closing windows in a
			 * <Titanium.UI.NavigationWindow> or <Titanium.UI.Tab>.
			 * Use this proxy with the Window's
			 * [transitionAnimation](Titanium.UI.Window.transitionAnimation) property.
			 */
			class TransitionAnimation extends Titanium.Proxy {
				/**
				 * Length of the transition in milliseconds.
				 */
				duration: number;

				/**
				 * Animation to hide the current window.
				 */
				transitionFrom: Titanium.UI.Animation;

				/**
				 * Animation to show the new window.
				 */
				transitionTo: Titanium.UI.Animation;

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
