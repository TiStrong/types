declare namespace Titanium {
	namespace UI {
		/**
		 * A set of constants for the styles available for <Titanium.UI.ActivityIndicator> objects.
		 */
		class ActivityIndicatorStyle extends Titanium.Module {
			/**
			 * Large white spinning indicator.
			 */
			static readonly BIG: number;

			/**
			 * Large gray spinning indicator.
			 */
			static readonly BIG_DARK: number;

			/**
			 * Small gray spinning indicator.
			 */
			static readonly DARK: number;

			/**
			 * Small white spinning indicator (default).
			 */
			static readonly PLAIN: number;

			/**
			 * The name of the API that this proxy corresponds to.
			 */
			static readonly apiName: string;

			/**
			 * Indicates if the proxy will bubble an event to its parent.
			 */
			static bubbleParent: boolean;

			/**
			 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
			 */
			static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Applies the properties to the proxy.
			 */
			static applyProperties(props: any): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
