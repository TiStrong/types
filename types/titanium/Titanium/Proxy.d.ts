declare namespace Titanium {
	/**
	 * The base for all Titanium objects.
	 */
	class Proxy {
		/**
		 * The name of the API that this proxy corresponds to.
		 */
		readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		bubbleParent: boolean;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		lifecycleContainer?: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Proxy identifier
		 */
		id?: string | number;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		applyProperties(props: any): void;

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
