declare namespace Titanium {
	namespace UI {
		namespace Android {
			/**
			 * Base event for class Titanium.UI.Android.SearchView
			 */
			interface SearchViewBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.UI.Android.SearchView;

			}
			/**
			 * Fired when the device detects a click against the view.
			 */
			interface SearchView_click_Event extends SearchViewBaseEvent {
				/**
				 * Returns `true` if the click passed through an overlapping window belonging to another app.
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
			 * Fired when the device detects a double click against the view.
			 */
			interface SearchView_dblclick_Event extends SearchViewBaseEvent {
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
			interface SearchView_doubletap_Event extends SearchViewBaseEvent {
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
			 * Fired when the search view gains focus.
			 */
			interface SearchView_focus_Event extends SearchViewBaseEvent {
			}
			/**
			 * Fired when a hardware key is pressed in the view.
			 */
			interface SearchView_keypressed_Event extends SearchViewBaseEvent {
				/**
				 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
				 */
				keyCode: number;

			}
			/**
			 * Fired when the device detects a long click.
			 */
			interface SearchView_longclick_Event extends SearchViewBaseEvent {
			}
			/**
			 * Fired when the device detects a long press.
			 */
			interface SearchView_longpress_Event extends SearchViewBaseEvent {
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
			interface SearchView_pinch_Event extends SearchViewBaseEvent {
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
			interface SearchView_postlayout_Event extends SearchViewBaseEvent {
			}
			/**
			 * Fired when the device detects a single tap against the view.
			 */
			interface SearchView_singletap_Event extends SearchViewBaseEvent {
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
			interface SearchView_swipe_Event extends SearchViewBaseEvent {
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
			interface SearchView_touchcancel_Event extends SearchViewBaseEvent {
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
			interface SearchView_touchend_Event extends SearchViewBaseEvent {
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
			interface SearchView_touchmove_Event extends SearchViewBaseEvent {
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
			interface SearchView_touchstart_Event extends SearchViewBaseEvent {
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
			interface SearchView_twofingertap_Event extends SearchViewBaseEvent {
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
			 * Fired when the search view loses focus.
			 */
			interface SearchView_blur_Event extends SearchViewBaseEvent {
			}
			/**
			 * Fired when the cancel button is pressed.
			 */
			interface SearchView_cancel_Event extends SearchViewBaseEvent {
			}
			/**
			 * Fired when the value of the search view changes.
			 */
			interface SearchView_change_Event extends SearchViewBaseEvent {
			}
			/**
			 * If the search query is not empty, fired when the search button is clicked on soft keyboard
			 */
			interface SearchView_submit_Event extends SearchViewBaseEvent {
			}
			interface SearchViewEventMap extends ProxyEventMap {
				blur: SearchView_blur_Event;

				cancel: SearchView_cancel_Event;

				change: SearchView_change_Event;

				click: SearchView_click_Event;

				dblclick: SearchView_dblclick_Event;

				doubletap: SearchView_doubletap_Event;

				focus: SearchView_focus_Event;

				keypressed: SearchView_keypressed_Event;

				longclick: SearchView_longclick_Event;

				longpress: SearchView_longpress_Event;

				pinch: SearchView_pinch_Event;

				postlayout: SearchView_postlayout_Event;

				singletap: SearchView_singletap_Event;

				submit: SearchView_submit_Event;

				swipe: SearchView_swipe_Event;

				touchcancel: SearchView_touchcancel_Event;

				touchend: SearchView_touchend_Event;

				touchmove: SearchView_touchmove_Event;

				touchstart: SearchView_touchstart_Event;

				twofingertap: SearchView_twofingertap_Event;

			}
			/**
			 * A specialized text field for entering search text.
			 */
			class SearchView extends Titanium.UI.View {
				/**
				 * Color of the text in this SearchView, as a color name or hex triplet.
				 */
				color: string;

				/**
				 * Text to show when the search view field is not focused.
				 */
				hintText: string;

				/**
				 * Color of hint text that displays when field is empty.
				 */
				hintTextColor: string;

				/**
				 * Iconifies or expands the search view
				 */
				iconified: boolean;

				/**
				 * Sets the default or resting state of the search view
				 */
				iconifiedByDefault: boolean;

				/**
				 * Whether to display the submit button when necessary or never display.
				 */
				submitEnabled: boolean;

				/**
				 * Value of the search view.
				 */
				value: string;

				/**
				 * Adds a child to this view's hierarchy.
				 */
				add: never;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof SearchViewEventMap>(name: K, callback: (this: Titanium.UI.Android.SearchView, event: SearchViewEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Causes the search view to lose focus.
				 */
				blur(): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof SearchViewEventMap>(name: K, event?: SearchViewEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Causes the search view to gain focus.
				 */
				focus(): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof SearchViewEventMap>(name: K, callback: (this: Titanium.UI.Android.SearchView, event: SearchViewEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
