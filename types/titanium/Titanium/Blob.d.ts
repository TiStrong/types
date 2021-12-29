declare namespace Titanium {
	/**
	 * A container for binary data.
	 */
	class Blob extends Titanium.Proxy {
		/**
		 * File object represented by this blob, or `null` if this blob is not
		 * associated with a file.
		 */
		readonly file: Titanium.Filesystem.File;

		/**
		 * If this blob represents an image, this is the height of the image in pixels.
		 */
		readonly height: number;

		/**
		 * Length of this blob in bytes.
		 */
		readonly length: number;

		/**
		 * Mime type of the data in this blob.
		 */
		readonly mimeType: string;

		/**
		 * If this blob represents a [File](Titanium.Filesystem.File), this is the file URL
		 * that represents it.
		 */
		readonly nativePath: string;

		/**
		 * Size of the blob in pixels (for image blobs) or bytes (for all other blobs).
		 */
		readonly size: number;

		/**
		 * UTF-8 string representation of the data in this blob.
		 */
		readonly text: string;

		/**
		 * If the blob references an image, this provides the height in pixels after factoring in EXIF orientation.
		 */
		readonly uprightHeight: number;

		/**
		 * If the blob references an image, this provides the width in pixels after factoring in EXIF orientation.
		 */
		readonly uprightWidth: number;

		/**
		 * If this blob represents an image, this is the width of the image in pixels.
		 */
		readonly width: number;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Appends the data from another blob to this blob.
		 */
		append(blob: Titanium.Blob): void;

		/**
		 * Returns a `Promise` that resolves with the contents of the blob as binary data contained in an `ArrayBuffer`.
		 */
		arrayBuffer(): Promise<ArrayBuffer>;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		fireEvent(name: string, event?: any): void;

		/**
		 * Creates a new blob by compressing the underlying image to the specified quality.
		 */
		imageAsCompressed(quality: number): Titanium.Blob;

		/**
		 * Creates a new blob by cropping the underlying image to the specified dimensions.
		 */
		imageAsCropped(options: Dimension): Titanium.Blob;

		/**
		 * Creates a new blob by resizing and scaling the underlying image to the specified dimensions.
		 */
		imageAsResized(width: number, height: number): Titanium.Blob;

		/**
		 * Returns a thumbnail version of the underlying image, optionally with a border and rounded corners.
		 */
		imageAsThumbnail(size: number, borderSize?: number, cornerRadius?: number): Titanium.Blob;

		/**
		 * Returns a copy of the underlying image with an added alpha channel.
		 */
		imageWithAlpha(): Titanium.Blob;

		/**
		 * Returns a copy of the underlying image with rounded corners added.
		 */
		imageWithRoundedCorner(cornerSize: number, borderSize?: number): Titanium.Blob;

		/**
		 * Returns a copy of the underlying image with an added transparent border.
		 */
		imageWithTransparentBorder(size: number): Titanium.Blob;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Returns an `ArrayBuffer` representation of this blob.
		 */
		toArrayBuffer(): ArrayBuffer;

		/**
		 * Returns a string representation of this blob.
		 */
		toString(): string;

	}
}
