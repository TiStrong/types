declare namespace Titanium {
	/**
	 * Base event for class Titanium.Accelerometer
	 */
	interface AccelerometerBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.Accelerometer;

	}
	/**
	 * Fired when the accelerometer changes.
	 */
	interface Accelerometer_update_Event extends AccelerometerBaseEvent {
		/**
		 * Reference timestamp since the previous change. This is not a valid timestamp and should
		 * simply be used to determine the number of milliseconds between events.
		 */
		timestamp: number;

		/**
		 * Current `x` axis of the device.
		 */
		x: number;

		/**
		 * Current `y` axis of the device.
		 */
		y: number;

		/**
		 * Current `z` axis of the device.
		 */
		z: number;

	}
	interface AccelerometerEventMap extends ProxyEventMap {
		update: Accelerometer_update_Event;

	}
	/**
	 * The top-level Accelerometer module, used to determine the device's physical position.
	 */
	class Accelerometer extends Titanium.Module {
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
		static addEventListener<K extends keyof AccelerometerEventMap>(name: K, callback: (this: Titanium.Accelerometer, event: AccelerometerEventMap[K]) => void): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent<K extends keyof AccelerometerEventMap>(name: K, event?: AccelerometerEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof AccelerometerEventMap>(name: K, callback: (this: Titanium.Accelerometer, event: AccelerometerEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

	}
}
