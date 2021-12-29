declare namespace Titanium {
	/**
	 * Used for transmitting developer-defined Analytics events to the Appcelerator Analytics product.
	 */
	class Analytics extends Titanium.Module {
		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * JSON representation of the last Analytics event generated.
		 */
		static readonly lastEvent: string;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Allows the user to opt out from Analytics during runtime to comply to GPDR.
		 */
		static optedOut: boolean;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener: never;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties: never;

		/**
		 * Sends a feature event for this application session.
		 */
		static featureEvent(name: string, data?: any): number;

		/**
		 * Sets a list of events that will not be sent to the Analytics server.
		 */
		static filterEvents(events: ReadonlyArray<string>): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent: never;

		/**
		 * Sends a navigation event for this application session.
		 * **Not displayed in Analytics UI**.
		 * @deprecated
		 */
		static navEvent(from: string, to: string, name?: string, data?: any): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener: never;

	}
}
