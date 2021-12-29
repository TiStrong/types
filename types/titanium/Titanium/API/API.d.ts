declare namespace Titanium {
	/**
	 * The top-level API module, containing methods to output messages to the system log.
	 */
	class API extends Titanium.Module {
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
		 * Logs messages with a `debug` severity-level.
		 */
		static debug(message: string[] | string): void;

		/**
		 * Logs messages with an `error` severity-level.
		 */
		static error(message: string[] | string): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Logs messages with an `info` severity-level.
		 */
		static info(message: string[] | string): void;

		/**
		 * Logs messages with the specified severity-level.
		 */
		static log(level: string, message: string[] | string): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Logs messages with a `timestamp` severity-level, prefixed with a timestamp float number
		 * representing the number of seconds since January 1st, 2001.
		 */
		static timestamp(message: string[] | string): void;

		/**
		 * Logs messages with a `trace` severity-level.
		 */
		static trace(message: string[] | string): void;

		/**
		 * Logs messages with a `warn` severity-level.
		 */
		static warn(message: string[] | string): void;

	}
}
