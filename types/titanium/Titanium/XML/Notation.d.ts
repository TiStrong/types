declare namespace Titanium {
	namespace XML {
		/**
		 * Represents a notation declared in the DTD.  Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-5431D1B9) on Android and iOS.
		 */
		class Notation extends Titanium.Proxy {
			/**
			 * The public identifier of this notation. If the public identifier was not specified, this is `null`.
			 */
			readonly publicId: string;

			/**
			 * The system identifier of this notation. If the system identifier was not specified, this is `null`.
			 */
			readonly systemId: string;

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
