declare namespace Titanium {
	namespace Android {
		/**
		 * Base event for class Titanium.Android.Service
		 */
		interface ServiceBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.Android.Service;

		}
		/**
		 * For Javascript-based services that you create, `pause` fires after each time the JavaScript
		 * code executes.
		 */
		interface Service_pause_Event extends ServiceBaseEvent {
			/**
			 * Incrementing integer indicating which iteration of an interval-based Service is pausing.
			 * For example, if you have an interval-based Service running every 10 seconds, iteration
			 * 3 would occur at about 30 seconds after you start the instance (assuming your service
			 * code runs quickly).
			 */
			iteration: number;

		}
		/**
		 * For JavaScript-based Services which you create, `resume` fires each time the JavaScript
		 * code executes.
		 */
		interface Service_resume_Event extends ServiceBaseEvent {
			/**
			 * Incrementing integer indicating which iteration of an interval-based Service is pausing.
			 * For example, if you have an interval-based Service running every 10 seconds, iteration
			 * 3 would occur at about 30 seconds after you start the instance (assuming your service
			 * code runs quickly).
			 */
			iteration: number;

		}
		/**
		 * Fired when the bound service instance starts.
		 */
		interface Service_start_Event extends ServiceBaseEvent {
		}
		/**
		 * Fired when the bound service instance stops.
		 */
		interface Service_stop_Event extends ServiceBaseEvent {
		}
		/**
		 * Fired when the task that comes from the service's application has been removed.
		 */
		interface Service_taskremoved_Event extends ServiceBaseEvent {
		}
		interface ServiceEventMap extends ProxyEventMap {
			pause: Service_pause_Event;

			resume: Service_resume_Event;

			start: Service_start_Event;

			stop: Service_stop_Event;

			taskremoved: Service_taskremoved_Event;

		}
		/**
		 * Android application component that executes in the background.
		 */
		class Service extends Titanium.Proxy {
			/**
			 * The intent used to start or bind to the Service.
			 */
			readonly intent: Titanium.Android.Intent;

			/**
			 * A service can be started more than once -- this number (based on an incrementing integer)
			 * indicates which "start number" in the sequence the current service instance is.
			 */
			readonly serviceInstanceId: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof ServiceEventMap>(name: K, callback: (this: Titanium.Android.Service, event: ServiceEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof ServiceEventMap>(name: K, event?: ServiceEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Puts the service into the "background" state and removes its foreground notification.
			 */
			foregroundCancel(): void;

			/**
			 * Puts the service into the "foreground" state and displays a notification.
			 */
			foregroundNotify(id: number, notification: Titanium.Android.Notification, foregroundServiceType?: number): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof ServiceEventMap>(name: K, callback: (this: Titanium.Android.Service, event: ServiceEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Starts the Service.
			 */
			start(): void;

			/**
			 * Stops this running instance of the Service.
			 */
			stop(): void;

		}
	}
}
