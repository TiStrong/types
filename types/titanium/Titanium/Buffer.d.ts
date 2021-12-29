declare namespace Titanium {
	/**
	 * Buffer is a mutable, resizable container for raw data.
	 */
	class Buffer extends Titanium.Proxy {
		/**
		 * Byte order of this buffer.
		 */
		byteOrder: number;

		/**
		 * Length of the buffer in bytes.
		 */
		length: number;

		/**
		 * The type of data encoding to use with `value`.
		 */
		type: string;

		/**
		 * Data to be encoded.
		 */
		value: number | string;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Appends `sourceBuffer` to the this buffer.
		 */
		append(sourceBuffer: Titanium.Buffer, sourceOffset?: number, sourceLength?: number): number;

		/**
		 * Clears this buffer's contents but does not change the size of the buffer.
		 */
		clear(): void;

		/**
		 * Creates a complete or partial copy of this buffer.
		 */
		clone(offset?: number, length?: number): Titanium.Buffer;

		/**
		 * Copies data from `sourceBuffer` into the current buffer at `offset`.
		 */
		copy(sourceBuffer: Titanium.Buffer, offset: number, sourceOffset?: number, sourceLength?: number): number;

		/**
		 * Fills this buffer with the specified byte value.
		 */
		fill(fillByte: number, offset?: number, length?: number): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		fireEvent(name: string, event?: any): void;

		/**
		 * Inserts data from `sourceBuffer` into this buffer at `offset`.
		 */
		insert(sourceBuffer: Titanium.Buffer, offset: number, sourceOffset?: number, sourceLength?: number): number;

		/**
		 * Releases the space allocated to the buffer, and sets its length to 0.
		 */
		release(): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Converts this buffer to a <Titanium.Blob>.
		 */
		toBlob(): Titanium.Blob;

		/**
		 * Converts this buffer to a String.
		 */
		toString(): string;

	}
}
