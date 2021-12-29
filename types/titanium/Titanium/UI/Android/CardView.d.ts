declare namespace Titanium {
	namespace UI {
		namespace Android {
			/**
			 * Base event for class Titanium.UI.Android.CardView
			 */
			interface CardViewBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.UI.Android.CardView;

			}
			/**
			 * Fired when the device detects a click against the view.
			 */
			interface CardView_click_Event extends CardViewBaseEvent {
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
			interface CardView_dblclick_Event extends CardViewBaseEvent {
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
			interface CardView_doubletap_Event extends CardViewBaseEvent {
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
			interface CardView_focus_Event extends CardViewBaseEvent {
			}
			/**
			 * Fired when a hardware key is pressed in the view.
			 */
			interface CardView_keypressed_Event extends CardViewBaseEvent {
				/**
				 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
				 */
				keyCode: number;

			}
			/**
			 * Fired when the device detects a long click.
			 */
			interface CardView_longclick_Event extends CardViewBaseEvent {
			}
			/**
			 * Fired when the device detects a long press.
			 */
			interface CardView_longpress_Event extends CardViewBaseEvent {
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
			interface CardView_pinch_Event extends CardViewBaseEvent {
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
			interface CardView_postlayout_Event extends CardViewBaseEvent {
			}
			/**
			 * Fired when the device detects a single tap against the view.
			 */
			interface CardView_singletap_Event extends CardViewBaseEvent {
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
			interface CardView_swipe_Event extends CardViewBaseEvent {
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
			interface CardView_touchcancel_Event extends CardViewBaseEvent {
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
			interface CardView_touchend_Event extends CardViewBaseEvent {
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
			interface CardView_touchmove_Event extends CardViewBaseEvent {
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
			interface CardView_touchstart_Event extends CardViewBaseEvent {
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
			interface CardView_twofingertap_Event extends CardViewBaseEvent {
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
			interface CardViewEventMap extends ProxyEventMap {
				click: CardView_click_Event;

				dblclick: CardView_dblclick_Event;

				doubletap: CardView_doubletap_Event;

				focus: CardView_focus_Event;

				keypressed: CardView_keypressed_Event;

				longclick: CardView_longclick_Event;

				longpress: CardView_longpress_Event;

				pinch: CardView_pinch_Event;

				postlayout: CardView_postlayout_Event;

				singletap: CardView_singletap_Event;

				swipe: CardView_swipe_Event;

				touchcancel: CardView_touchcancel_Event;

				touchend: CardView_touchend_Event;

				touchmove: CardView_touchmove_Event;

				touchstart: CardView_touchstart_Event;

				twofingertap: CardView_twofingertap_Event;

			}
			/**
			 * CardView provides a layout container with rounded corners and a shadow indicating the view is elevated.
			 */
			class CardView extends Titanium.UI.View {
				/**
				 * Background color for CardView as a color name or hex triplet.
				 */
				backgroundColor: string;

				/**
				 * A background gradient for the view.
				 */
				backgroundGradient: never;

				/**
				 * Background image for the view, specified as a local file path or URL.
				 */
				backgroundImage: never;

				/**
				 * Determines whether to tile a background across a view.
				 */
				backgroundRepeat: never;

				/**
				 * Border color of the view, as a color name or hex triplet.
				 */
				borderColor: never;

				/**
				 * Corner radius for CardView.
				 */
				borderRadius: number;

				/**
				 * Elevation for CardView.
				 */
				elevation: number;

				/**
				 * Maximum Elevation for CardView.
				 */
				maxElevation: number;

				/**
				 * Inner padding between the edges of the Card and children of the CardView.
				 */
				padding: number;

				/**
				 * Inner padding between the bottom edge of the Card and children of the CardView.
				 */
				paddingBottom: number;

				/**
				 * Inner padding between the left edge of the Card and children of the CardView.
				 */
				paddingLeft: number;

				/**
				 * Inner padding between the right edge of the Card and children of the CardView.
				 */
				paddingRight: number;

				/**
				 * Inner padding between the top edge of the Card and children of the CardView.
				 */
				paddingTop: number;

				/**
				 * Add padding to CardView on API level 20 and before to prevent intersections between
				 * the Card content and rounded corners.
				 */
				preventCornerOverlap: boolean;

				/**
				 * Add padding on API level 21 and above to have the same measurements with previous versions.
				 */
				useCompatPadding: boolean;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof CardViewEventMap>(name: K, callback: (this: Titanium.UI.Android.CardView, event: CardViewEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof CardViewEventMap>(name: K, event?: CardViewEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof CardViewEventMap>(name: K, callback: (this: Titanium.UI.Android.CardView, event: CardViewEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
