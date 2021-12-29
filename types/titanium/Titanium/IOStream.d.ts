declare namespace Titanium {
	/**
	 * IOStream is the interface that all stream types implement.
	 */
	// tslint:disable-next-line:interface-name
	class IOStream extends Titanium.Proxy {
		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Closes this stream.
		 */
		close(): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		fireEvent(name: string, event?: any): void;

		/**
		 * Indicates whether this stream is readable.
		 */
		isReadable(): boolean;

		/**
		 * Indicates whether this stream is writable.
		 */
		isWritable(): boolean;

		/**
		 * Reads data from this stream into a buffer.
		 */
		read(buffer: Titanium.Buffer, offset?: number, length?: number, resultsCallback?: (param0: ReadCallbackArgs) => void): number;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Writes data from a buffer to this stream.
		 */
		write(buffer: Titanium.Buffer, offset?: number, length?: number, resultsCallback?: (param0: WriteCallbackArgs) => void): number;

	}
}
