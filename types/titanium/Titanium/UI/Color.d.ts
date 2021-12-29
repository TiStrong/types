declare namespace Titanium {
	namespace UI {
		/**
		 * Represents a color used for UI components.
		 */
		class Color extends Titanium.Proxy {
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

			/**
			 * Returns a hex string representation of the color (in the RRGGBB or AARRGGBB formats)
			 */
			toHex(): string;

		}
	}
}
