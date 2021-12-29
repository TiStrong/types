declare namespace Titanium {
	/**
	 * Base event for class Titanium.Gesture
	 */
	interface GestureBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.Gesture;

	}
	/**
	 * Fired when the device orientation changes.
	 */
	interface Gesture_orientationchange_Event extends GestureBaseEvent {
		/**
		 * Orientation of the device.
		 */
		orientation: number;

	}
	/**
	 * Fired when the device is shaken.
	 */
	interface Gesture_shake_Event extends GestureBaseEvent {
		/**
		 * Time interval since previous shake event. On iOS, this value is 0 for the first shake
		 * event in a series.
		 */
		timestamp: number;

		/**
		 * Acceleration along the X axis, in Gs.
		 */
		x: number;

		/**
		 * Acceleration along the Y axis, in Gs.
		 */
		y: number;

		/**
		 * Acceleration along the Z axis, in Gs.
		 */
		z: number;

	}
	interface GestureEventMap extends ProxyEventMap {
		orientationchange: Gesture_orientationchange_Event;

		shake: Gesture_shake_Event;

	}
	/**
	 * The Gesture module is responsible for high-level device gestures such as orientation changes
	 * and shake gestures.
	 */
	class Gesture extends Titanium.Module {
		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * Indicates if the device is currently held in landscape form.
		 */
		static readonly landscape: boolean;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Orientation of the device.
		 */
		static readonly orientation: number;

		/**
		 * Indicates if the device is currently held in portrait form.
		 */
		static readonly portrait: boolean;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof GestureEventMap>(name: K, callback: (this: Titanium.Gesture, event: GestureEventMap[K]) => void): void;

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
		static fireEvent<K extends keyof GestureEventMap>(name: K, event?: GestureEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof GestureEventMap>(name: K, callback: (this: Titanium.Gesture, event: GestureEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

	}
}
