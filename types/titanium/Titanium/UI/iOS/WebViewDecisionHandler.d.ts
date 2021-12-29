declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * It represents the decision handler to tell to webview, whether allow or cancel the navigation.
			 */
			class WebViewDecisionHandler extends Titanium.Proxy {
				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * It calls the decision handler with given action policy.
				 */
				invoke(value: number): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
