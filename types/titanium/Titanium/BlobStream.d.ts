declare namespace Titanium {
	/**
	 * Wrapper around <Titanium.Blob> that implements the <Titanium.IOStream> interface.
	 */
	class BlobStream extends Titanium.IOStream {
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
