declare namespace Titanium {
	namespace Filesystem {
		/**
		 * Wrapper around `Titanium.Filesystem.File` that implements the `Titanium.IOStream` interface
		 */
		class FileStream extends Titanium.IOStream {
			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * closes file stream, exception is thrown on error
			 */
			close(): void;

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
