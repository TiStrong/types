/// <reference path="./TCP.d.ts" />
declare namespace Titanium {
	namespace Network {
		/**
		 * Socket module, used for creating sockets.
		 */
		namespace Socket {
			/**
			 * State value representing a closed socket.
			 */
			const CLOSED: number;

			/**
			 * State value representing a connected socket.
			 */
			const CONNECTED: number;

			/**
			 * State value indicating an error has occurred on the socket.
			 */
			const ERROR: number;

			/**
			 * State value representing an initialized socket.
			 */
			const INITIALIZED: number;

			/**
			 * State value representing a socket that is listening for connections.
			 */
			const LISTENING: number;

		}
		/**
		 * Socket module, used for creating sockets.
		 */
		class Socket extends Titanium.Module {
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
			 * Returns a new TCP socket object.
			 */
			static createTCP(params?: Dictionary<Titanium.Network.Socket.TCP>): Titanium.Network.Socket.TCP;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
