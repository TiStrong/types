declare namespace Titanium {
	/**
	 * Stream module containing stream utility methods.
	 */
	class Stream extends Titanium.Module {
		/**
		 * Use with [createStream](Titanium.Stream.createStream) to open a stream in append
		 * mode.
		 */
		static readonly MODE_APPEND: number;

		/**
		 * Use with [createStream](Titanium.Stream.createStream) to open a stream in read
		 * mode.
		 */
		static readonly MODE_READ: number;

		/**
		 * Use with [createStream](Titanium.Stream.createStream) to open a stream in write
		 * mode.
		 */
		static readonly MODE_WRITE: number;

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
		 * Creates stream from a `Buffer` or `Blob` object.
		 */
		static createStream(params: CreateStreamArgs): Titanium.IOStream;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Reads data from input stream and passes it to a handler method.
		 */
		static pump(inputStream: Titanium.IOStream, handler: (param0: PumpCallbackArgs) => void, maxChunkSize: number, isAsync?: boolean): void;

		/**
		 * Asynchronously reads data from an [IOStream](Titanium.IOStream) into a buffer.
		 */
		static read(sourceStream: Titanium.IOStream, buffer: Titanium.Buffer, offset?: number, length?: number, resultsCallback?: (param0: ReadCallbackArgs) => void): void;

		/**
		 * Reads all data from the specified [IOStream](Titanium.IOStream).
		 */
		static readAll(sourceStream: Titanium.IOStream, buffer?: Titanium.Buffer, resultsCallback?: (param0: ReadCallbackArgs) => void): Titanium.Buffer | void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Asynchronously writes data from a buffer to an [IOStream](Titanium.IOStream).
		 */
		static write(outputStream: Titanium.IOStream, buffer: Titanium.Buffer, offset?: number, length?: number, resultsCallback?: (param0: WriteCallbackArgs) => void): void;

		/**
		 * Writes all data from an input stream to an output stream.
		 */
		static writeStream(inputStream: Titanium.IOStream, outputStream: Titanium.IOStream, maxChunkSize: number, resultsCallback?: (param0: WriteStreamCallbackArgs) => void): void;

	}
}
/**
 * Argument passed to [createStream](Titanium.Stream.createStream).
 */
interface CreateStreamArgs {
	/**
	 * Mode to open the stream in.
	 */
	mode?: number;

	/**
	 * Object that the stream will read from or write to.
	 */
	source?: Titanium.Blob | Titanium.Buffer;

}
/**
 * Argument passed to the callback each time the
 * [pump](Titanium.Stream.pump) operation has new data to deliver.
 */
interface PumpCallbackArgs extends ErrorResponse {
	/**
	 * Buffer object holding the data currently being pumped to the handler method.
	 */
	buffer?: Titanium.Buffer;

	/**
	 * Number of bytes being passed to this invocation of the handler, or
	 * -1 in the event of an error or end of stream.
	 */
	bytesProcessed?: number;

	/**
	 * Error code. Returns 0 if `success` is `true`.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Text description of the error.
	 * @deprecated Use error property to determine error message
	 */
	errorDescription: never;

	/**
	 * Whether an error was encountered. Set to 1 in the case of an error, 0
	 * otherwise.
	 * @deprecated Use success or code values to determine error conditions
	 */
	errorState: never;

	/**
	 * Stream being read from.
	 */
	source?: Titanium.IOStream;

	/**
	 * Indicates if the operation succeeded.
	 */
	success?: boolean;

	/**
	 * Total number of bytes read from the stream so far,
	 * including the data passed to this current invocation of the handler.
	 */
	totalBytesProcessed?: number;

}
/**
 * Argument passed to the read callback when an asynchronous [read](Titanium.Stream.read) operation
 * finishes.
 */
interface ReadCallbackArgs extends ErrorResponse {
	/**
	 * Number of bytes processed, or -1 in the event of an error or end of stream.
	 */
	bytesProcessed?: number;

	/**
	 * Error code. Returns 0 if `success` is `true`.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Text description of the error.
	 * @deprecated Use the `error` property to determine error message.
	 */
	errorDescription: never;

	/**
	 * Whether an error was encountered. Set to 1 in the case of an error, 0
	 * otherwise.
	 * @deprecated Use the `success` or `code` property values to determine error conditions.
	 */
	errorState: never;

	/**
	 * Stream being read.
	 */
	source?: Titanium.IOStream;

	/**
	 * Indicates if the operation succeeded.
	 */
	success?: boolean;

}
/**
 * Argument passed to the write callback when an asynchronous
 * [write](Titanium.Stream.write) operation
 * finishes.
 */
interface WriteCallbackArgs extends ErrorResponse {
	/**
	 * Number of bytes processed, or -1 in the event of an error or end of stream.
	 */
	bytesProcessed?: number;

	/**
	 * Error code. Returns 0 if `success` is `true`.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Text description of the error.
	 * @deprecated Use the `error` property to determine the error message.
	 */
	errorDescription: never;

	/**
	 * Whether an error was encountered. Set to 1 in the case of an error, 0
	 * otherwise.
	 * @deprecated Use the `success` or `code` property values to determine error conditions.
	 */
	errorState: never;

	/**
	 * Stream being written to.
	 */
	source?: Titanium.IOStream;

	/**
	 * Indicates if the operation succeeded.
	 */
	success?: boolean;

}
/**
 * Argument passed to the callback when an asynchronous
 * [writeStream](Titanium.Stream.writeStream) operation finishes.
 */
interface WriteStreamCallbackArgs extends ErrorResponse {
	/**
	 * Number of bytes processed, or -1 in the event of an error or end of stream.
	 */
	bytesProcessed?: number;

	/**
	 * Text description of the error.
	 * @deprecated Use error property to determine error message
	 */
	errorDescription: never;

	/**
	 * Whether an error was encountered. Set to 1 in the case of an error, 0
	 * otherwise.
	 * @deprecated Use success or code values to determine error conditions
	 */
	errorState: never;

	/**
	 * Stream being read from.
	 */
	fromStream?: Titanium.IOStream;

	/**
	 * Stream being written to.
	 */
	toStream?: Titanium.IOStream;

}
