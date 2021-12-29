declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.Slider
		 */
		interface SliderBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.Slider;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface Slider_click_Event extends SliderBaseEvent {
			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the device detects a double click against the view.
		 */
		interface Slider_dblclick_Event extends SliderBaseEvent {
			/**
			 * Returns `true` if the double click passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the device detects a double tap against the view.
		 */
		interface Slider_doubletap_Event extends SliderBaseEvent {
			/**
			 * Returns `true` if the double tap passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the view element gains focus.
		 */
		interface Slider_focus_Event extends SliderBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface Slider_keypressed_Event extends SliderBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface Slider_longclick_Event extends SliderBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface Slider_longpress_Event extends SliderBaseEvent {
			/**
			 * Returns `true` if the long press passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the device detects a pinch gesture.
		 */
		interface Slider_pinch_Event extends SliderBaseEvent {
			/**
			 * The average distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			currentSpan: number;

			/**
			 * The average X distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			currentSpanX: number;

			/**
			 * The average Y distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			currentSpanY: number;

			/**
			 * The X coordinate of the current gesture's focal point.
			 */
			focusX: number;

			/**
			 * The Y coordinate of the current gesture's focal point.
			 */
			focusY: number;

			/**
			 * Returns `true` if a scale gesture is in progress, `false` otherwise.
			 */
			inProgress: boolean;

			/**
			 * The previous average distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			previousSpan: number;

			/**
			 * The previous average X distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			previousSpanX: number;

			/**
			 * The previous average Y distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			previousSpanY: number;

			/**
			 * The scale factor relative to the points of the two touches in screen coordinates.
			 */
			scale: number;

			/**
			 * The event time of the current event being processed.
			 */
			time: number;

			/**
			 * The time difference in milliseconds between the previous accepted scaling event and the
			 * current scaling event.
			 */
			timeDelta: number;

			/**
			 * The velocity of the pinch in scale factor per second.
			 */
			velocity: number;

		}
		/**
		 * Fired when a layout cycle is finished.
		 */
		interface Slider_postlayout_Event extends SliderBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface Slider_singletap_Event extends SliderBaseEvent {
			/**
			 * Returns `true` if the single tap passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the device detects a swipe gesture against the view.
		 */
		interface Slider_swipe_Event extends SliderBaseEvent {
			/**
			 * Direction of the swipe--either 'left', 'right', 'up', or 'down'.
			 */
			direction: string;

			/**
			 * Returns `true` if the swipe passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event's endpoint from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event's endpoint from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when a touch event is interrupted by the device.
		 */
		interface Slider_touchcancel_Event extends SliderBaseEvent {
			/**
			 * A value which indicates the stylus angle on the screen. If the stylus is perpendicular to the screen or no stylus is
			 * being used, the value will be Pi/2. If the stylus is parallel to the screen, the value will be 0.
			 * Note: This property is only available for iOS devices that support 3D-Touch and are 9.1 or later.
			 */
			altitudeAngle: number;

			/**
			 * The x value of the unit vector that points in the direction of the azimuth of the stylus.
			 * Note: This property is only available for iOS devices that support the Apple Pencil and are 9.1 or later.
			 */
			azimuthUnitVectorInViewX: number;

			/**
			 * The y value of the unit vector that points in the direction of the azimuth of the stylus.
			 * Note: This property is only available for iOS devices that support the Apple Pencil and are 9.1 or later.
			 */
			azimuthUnitVectorInViewY: number;

			/**
			 * The current force value of the touch event.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later and on some Android devices.
			 */
			force: number;

			/**
			 * Maximum possible value of the force property.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			maximumPossibleForce: number;

			/**
			 * Returns `true` if the touch passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * The current size of the touch area. Note: This property is only available on some Android devices.
			 */
			size: number;

			/**
			 * The time (in seconds) when the touch was used in correlation with the system start up.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			timestamp: number;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when a touch event is completed.
		 */
		interface Slider_touchend_Event extends SliderBaseEvent {
			/**
			 * A value which indicates the stylus angle on the screen. If the stylus is perpendicular to the screen or no stylus is
			 * being used, the value will be Pi/2. If the stylus is parallel to the screen, the value will be 0.
			 * Note: This property is only available for iOS devices that support 3D-Touch and are 9.1 or later.
			 */
			altitudeAngle: number;

			/**
			 * The x value of the unit vector that points in the direction of the azimuth of the stylus.
			 * Note: This property is only available for iOS devices that support the Apple Pencil and are 9.1 or later.
			 */
			azimuthUnitVectorInViewX: number;

			/**
			 * The y value of the unit vector that points in the direction of the azimuth of the stylus.
			 * Note: This property is only available for iOS devices that support the Apple Penciland are 9.1 or later.
			 */
			azimuthUnitVectorInViewY: number;

			/**
			 * The current force value of the touch event.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later and on some Android devices.
			 */
			force: number;

			/**
			 * Maximum possible value of the force property.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			maximumPossibleForce: number;

			/**
			 * Returns `true` if the touch passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * The current size of the touch area. Note: This property is only available on some Android devices.
			 */
			size: number;

			/**
			 * The time (in seconds) when the touch was used in correlation with the system start up.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			timestamp: number;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired as soon as the device detects movement of a touch.
		 */
		interface Slider_touchmove_Event extends SliderBaseEvent {
			/**
			 * A value which indicates the stylus angle on the screen. If the stylus is perpendicular to the screen or no stylus is
			 * being used, the value will be Pi/2. If the stylus is parallel to the screen, the value will be 0.
			 * Note: This property is only available for iOS devices that support 3D-Touch and are 9.1 or later.
			 */
			altitudeAngle: number;

			/**
			 * The x value of the unit vector that points in the direction of the azimuth of the stylus.
			 * Note: This property is only available for iOS devices that support the Apple Pencil and are 9.1 or later.
			 */
			azimuthUnitVectorInViewX: number;

			/**
			 * The y value of the unit vector that points in the direction of the azimuth of the stylus.
			 * Note: This property is only available for iOS devices that support the Apple Pencil and are 9.1 or later.
			 */
			azimuthUnitVectorInViewY: number;

			/**
			 * The current force value of the touch event.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later and on some Android devices.
			 */
			force: number;

			/**
			 * Maximum possible value of the force property.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			maximumPossibleForce: number;

			/**
			 * Returns `true` if the touch passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * The current size of the touch area. Note: This property is only available on some Android devices.
			 */
			size: number;

			/**
			 * The time (in seconds) when the touch was used in correlation with the system start up.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			timestamp: number;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired as soon as the device detects a touch gesture.
		 */
		interface Slider_touchstart_Event extends SliderBaseEvent {
			/**
			 * A value which indicates the stylus angle on the screen. If the stylus is perpendicular to the screen or no stylus is
			 * being used, the value will be Pi/2. If the stylus is parallel to the screen, the value will be 0.
			 * Note: This property is only available for iOS devices that support 3D-Touch and are 9.1 or later.
			 */
			altitudeAngle: number;

			/**
			 * The x value of the unit vector that points in the direction of the azimuth of the stylus.
			 * Note: This property is only available for iOS devices that support the Apple Pencil and are 9.1 or later.
			 */
			azimuthUnitVectorInViewX: number;

			/**
			 * The y value of the unit vector that points in the direction of the azimuth of the stylus.
			 * Note: This property is only available for iOS devices that support the Apple Pencil and are 9.1 or later.
			 */
			azimuthUnitVectorInViewY: number;

			/**
			 * The current force value of the touch event.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later and on some Android devices.
			 */
			force: number;

			/**
			 * Maximum possible value of the force property.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			maximumPossibleForce: number;

			/**
			 * Returns `true` if the touch passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * The current size of the touch area. Note: This property is only available on some Android devices.
			 */
			size: number;

			/**
			 * The time (in seconds) when the touch was used in correlation with the system start up.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			timestamp: number;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the device detects a two-finger tap against the view.
		 */
		interface Slider_twofingertap_Event extends SliderBaseEvent {
			/**
			 * Returns `true` if the tap passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the value of the slider changes.
		 */
		interface Slider_change_Event extends SliderBaseEvent {
			/**
			 * True if change was made by the user. False if change was made programmatically.
			 */
			isTrusted: boolean;

			/**
			 * Dictionary with properties `x` and `y` of the thumb's left-top corner in
			 * the control. Available with custom thumb image.
			 */
			thumbOffset: Point;

			/**
			 * Dictionary with properties `width` and `height` of the size of the thumb.
			 * Available with custom thumb image.
			 */
			thumbSize: Size;

			/**
			 * New value of the slider.
			 */
			value: number;

		}
		/**
		 * Fired when the user starts tracking the slider.
		 */
		interface Slider_start_Event extends SliderBaseEvent {
			/**
			 * False. This event does not bubble.
			 */
			bubbles: boolean;

			/**
			 * Current value of the slider.
			 */
			value: number;

		}
		/**
		 * Fired when the user stops tracking the slider.
		 */
		interface Slider_stop_Event extends SliderBaseEvent {
			/**
			 * False. This event does not bubble.
			 */
			bubbles: boolean;

			/**
			 * Current value of the slider.
			 */
			value: number;

		}
		interface SliderEventMap extends ProxyEventMap {
			change: Slider_change_Event;

			click: Slider_click_Event;

			dblclick: Slider_dblclick_Event;

			doubletap: Slider_doubletap_Event;

			focus: Slider_focus_Event;

			keypressed: Slider_keypressed_Event;

			longclick: Slider_longclick_Event;

			longpress: Slider_longpress_Event;

			pinch: Slider_pinch_Event;

			postlayout: Slider_postlayout_Event;

			singletap: Slider_singletap_Event;

			start: Slider_start_Event;

			stop: Slider_stop_Event;

			swipe: Slider_swipe_Event;

			touchcancel: Slider_touchcancel_Event;

			touchend: Slider_touchend_Event;

			touchmove: Slider_touchmove_Event;

			touchstart: Slider_touchstart_Event;

			twofingertap: Slider_twofingertap_Event;

		}
		/**
		 * A slider component with a draggable thumb.
		 */
		class Slider extends Titanium.UI.View {
			/**
			 * Array of this view's child views.
			 */
			readonly children: never;

			/**
			 * Image URL of the slider left track when in the disabled state.
			 */
			disabledLeftTrackImage: string;

			/**
			 * Image URL of the slider right track when in the disabled state.
			 */
			disabledRightTrackImage: string;

			/**
			 * Image URL of the slider thumb when in the disabled state.
			 */
			disabledThumbImage: string;

			/**
			 * Boolean to indicate the enabled state of the slider.
			 */
			enabled: boolean;

			/**
			 * View height, in platform-specific units.
			 */
			height: never;

			/**
			 * Image URL of the slider left track when in the highlighted state.
			 */
			highlightedLeftTrackImage: string;

			/**
			 * Image URL of the slider right track when in the highlighted state.
			 */
			highlightedRightTrackImage: string;

			/**
			 * Image URL of the slider thumb when in the highlighted state.
			 */
			highlightedThumbImage: string;

			/**
			 * Image URL of the slider left track.
			 */
			leftTrackImage: string;

			/**
			 * Size of the left end cap for the leftTrackImage, disabledLeftTrackImage, highlightedLeftTrackImage and selectedLeftTrackImage properties.
			 */
			leftTrackLeftCap: number;

			/**
			 * Size of the top end cap for the leftTrackImage, disabledLeftTrackImage, highlightedLeftTrackImage and selectedLeftTrackImage properties.
			 */
			leftTrackTopCap: number;

			/**
			 * Maximum value of the slider.
			 */
			max: number;

			/**
			 * Upper limit on the slider value that can be selected.
			 */
			maxRange: number;

			/**
			 * Minimum value of the slider.
			 */
			min: number;

			/**
			 * Lower limit on the slider value that can be selected.
			 */
			minRange: number;

			/**
			 * Image URL of the slider right track.
			 */
			rightTrackImage: string;

			/**
			 * Size of the left end cap for the rightTrackImage, disabledRightTrackImage, highlightedRightTrackImage and selectedRightTrackImage properties.
			 */
			rightTrackLeftCap: number;

			/**
			 * Size of the top end cap for the rightTrackImage, disabledRightTrackImage, highlightedRightTrackImage and selectedRightTrackImage properties.
			 */
			rightTrackTopCap: number;

			/**
			 * Image URL of the slider left track when in the selected state.
			 */
			selectedLeftTrackImage: string;

			/**
			 * Image URL of the slider right track when in the selected state.
			 */
			selectedRightTrackImage: string;

			/**
			 * Image URL of the slider thumb when in the selected state.
			 */
			selectedThumbImage: string;

			/**
			 * Separates the thumbImage from the slider track.
			 */
			splitTrack: boolean;

			/**
			 * Image for the slider thumb.
			 */
			thumbImage: string | Titanium.Blob;

			/**
			 * The color shown for the portion of the progress bar that is filled.
			 */
			tintColor: string | Titanium.UI.Color;

			/**
			 * The color shown for the portion of the progress bar that is not filled.
			 */
			trackTintColor: string | Titanium.UI.Color;

			/**
			 * Current value of the slider.
			 */
			value: number;

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add: never;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof SliderEventMap>(name: K, callback: (this: Titanium.UI.Slider, event: SliderEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof SliderEventMap>(name: K, event?: SliderEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes a child view from this view's hierarchy.
			 */
			remove: never;

			/**
			 * Removes all child views from this view's hierarchy.
			 */
			removeAllChildren: never;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof SliderEventMap>(name: K, callback: (this: Titanium.UI.Slider, event: SliderEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt: never;

			/**
			 * Sets the [value](Titanium.UI.Slider.value) property.
			 */
			setValue(value: number, options?: AnimatedOptions): void;

		}
	}
}
