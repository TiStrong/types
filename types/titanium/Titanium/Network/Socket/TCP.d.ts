declare namespace Titanium {
	namespace Network {
		namespace Socket {
			/**
			 * TCP socket that implements the `Titanium.IOStream` interface.
			 */
			class TCP extends Titanium.IOStream {
				/**
				 * Callback to be fired when a listener accepts a connection.
				 */
				accepted: (param0: AcceptedCallbackArgs) => void;

				/**
				 * Callback to be fired when the socket enters the "connected" state.
				 */
				connected: (param0: ConnectedCallbackArgs) => void;

				/**
				 * Callback to be fired when the socket enters the [ERROR](Titanium.Network.Socket.ERROR) state.
				 */
				error: (param0: ErrorCallbackArgs) => void;

				/**
				 * The host to connect to or listen on.
				 */
				host: string;

				/**
				 * Max number of pending incoming connections to be allowed when the socket is in the [LISTENING](Titanium.Network.Socket.LISTENING) state.
				 */
				listenQueueSize: number;

				/**
				 * The port to connect to or listen on.
				 */
				port: number;

				/**
				 * Current state of the socket.
				 */
				readonly state: number;

				/**
				 * Timeout, in milliseconds, for `connect` and all `write` operations.
				 */
				timeout: number;

				/**
				 * Tells a [LISTENING](Titanium.Network.Socket.LISTENING) socket to accept a connection request at the top of a listener's request queue when one becomes available.
				 */
				accept(options: AcceptDict): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Closes a socket.
				 */
				close(): void;

				/**
				 * Attempts to connect the socket to its host/port.
				 */
				connect(): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Attempts to start listening on the socket's host/port.
				 */
				listen(): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
/**
 * Options object for the [accept](Titanium.Network.Socket.TCP.accept) method.
 */
interface AcceptDict {
	/**
	 * Callback to be fired when the socket enters the [ERROR](Titanium.Network.Socket.ERROR) state.
	 */
	error?: (param0: ErrorCallbackArgs) => void;

	/**
	 * Timeout, in milliseconds, for all `write` operations.
	 */
	timeout?: number;

}
/**
 * Argument object passed to the [accepted](Titanium.Network.Socket.TCP.accepted)
 * callback when a listener accepts a connection.
 */
interface AcceptedCallbackArgs {
	/**
	 * Socket which represents the inbound connection.
	 */
	inbound?: Titanium.Network.Socket.TCP;

	/**
	 * Socket which received the connection.
	 */
	socket?: Titanium.Network.Socket.TCP;

}
/**
 * Argument object passed to the [connected](Titanium.Network.Socket.TCP.connected) callback when the socket connects.
 */
interface ConnectedCallbackArgs {
	/**
	 * Socket instance that has been connected.
	 */
	socket?: Titanium.Network.Socket.TCP;

}
/**
 * Object passed to the error callback when the socket enters the [ERROR](Titanium.Network.Socket.ERROR) state.
 */
interface ErrorCallbackArgs extends FailureResponse {
	/**
	 * Error code. Returns a non-zero value.
	 */
	code?: number;

	/**
	 * The error code of the error (potentially system-dependent).
	 * @deprecated Use the `code` property for a numeric error code.
	 */
	errorCode: never;

	/**
	 * Socket that experienced the error.
	 */
	socket?: Titanium.Network.Socket.TCP;

	/**
	 * Indicates if the operation succeeded. Returns `false`.
	 */
	success?: boolean;

}
