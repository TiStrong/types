declare namespace Titanium {
	namespace Network {
		/**
		 * Base event for class Titanium.Network.BonjourService
		 */
		interface BonjourServiceBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.Network.BonjourService;

		}
		/**
		 * Fired when the service has been published (or errored).
		 */
		interface BonjourService_publish_Event extends BonjourServiceBaseEvent {
			/**
			 * Error code
			 */
			code: number;

			/**
			 * Error message
			 */
			error: string;

			/**
			 * Reports if the publish operation was successful
			 */
			success: boolean;

		}
		/**
		 * Fired when the service has been resolved (or errored). If successful, the [socket](Titanium.Network.BonjourService.socket) property should now be available.
		 */
		interface BonjourService_resolve_Event extends BonjourServiceBaseEvent {
			/**
			 * Error code
			 */
			code: number;

			/**
			 * Error message
			 */
			error: string;

			/**
			 * Reports if the resolve operation was successful
			 */
			success: boolean;

		}
		/**
		 * Fired when a service's publish or resolution was stopped via <Titanium.Network.BonjourService.stop>
		 */
		interface BonjourService_stop_Event extends BonjourServiceBaseEvent {
			/**
			 * Error code
			 */
			code: number;

			/**
			 * Error message
			 */
			error: string;

			/**
			 * Reports if the stop operation was successful
			 */
			success: boolean;

		}
		interface BonjourServiceEventMap extends ProxyEventMap {
			publish: BonjourService_publish_Event;

			resolve: BonjourService_resolve_Event;

			stop: BonjourService_stop_Event;

		}
		/**
		 * Describes a service on the network which is published by Bonjour.
		 */
		class BonjourService extends Titanium.Proxy {
			/**
			 * the domain of the service
			 */
			domain: string;

			/**
			 * whether or not the service is local to the device
			 */
			isLocal: boolean;

			/**
			 * the name of the service
			 */
			name: string;

			/**
			 * the TCPSocket object that is used to connect to the service
			 */
			socket: Titanium.Network.Socket.TCP;

			/**
			 * the type of the service
			 */
			type: string;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof BonjourServiceEventMap>(name: K, callback: (this: Titanium.Network.BonjourService, event: BonjourServiceEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof BonjourServiceEventMap>(name: K, event?: BonjourServiceEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Asynchronously publish a Bonjour service to the network.  Only works if isLocal is TRUE
			 */
			publish(socket: Titanium.Network.Socket.TCP, callback?: (param0: Error, param1: boolean) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof BonjourServiceEventMap>(name: K, callback: (this: Titanium.Network.BonjourService, event: BonjourServiceEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Asynchronously resolve a Bonjour service from the network.  Must be done before attempting to access the service's socket information, if a remote service.  You cannot resolve a locally published service.
			 */
			resolve(timeout?: number, callback?: (param0: Error, param1: boolean) => void): void;

			/**
			 * Asynchronously halts a currently running attempt to publish or resolve a service.
			 */
			stop(callback?: (param0: Error, param1: boolean) => void): void;

		}
	}
}
