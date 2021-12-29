declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Base event for class Titanium.UI.iOS.SplitWindow
			 */
			interface SplitWindowBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.UI.iOS.SplitWindow;

			}
			/**
			 * Fired when the device detects a click against the view.
			 */
			interface SplitWindow_click_Event extends SplitWindowBaseEvent {
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
			interface SplitWindow_dblclick_Event extends SplitWindowBaseEvent {
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
			interface SplitWindow_doubletap_Event extends SplitWindowBaseEvent {
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
			 * Fired when the window gains focus.
			 */
			interface SplitWindow_focus_Event extends SplitWindowBaseEvent {
			}
			/**
			 * Fired when a hardware key is pressed in the view.
			 */
			interface SplitWindow_keypressed_Event extends SplitWindowBaseEvent {
				/**
				 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
				 */
				keyCode: number;

			}
			/**
			 * Fired when the device detects a long press.
			 */
			interface SplitWindow_longpress_Event extends SplitWindowBaseEvent {
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
			interface SplitWindow_pinch_Event extends SplitWindowBaseEvent {
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
			interface SplitWindow_postlayout_Event extends SplitWindowBaseEvent {
			}
			/**
			 * Fired when the device detects a single tap against the view.
			 */
			interface SplitWindow_singletap_Event extends SplitWindowBaseEvent {
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
			interface SplitWindow_swipe_Event extends SplitWindowBaseEvent {
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
			interface SplitWindow_touchcancel_Event extends SplitWindowBaseEvent {
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
			interface SplitWindow_touchend_Event extends SplitWindowBaseEvent {
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
			interface SplitWindow_touchmove_Event extends SplitWindowBaseEvent {
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
			interface SplitWindow_touchstart_Event extends SplitWindowBaseEvent {
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
			interface SplitWindow_twofingertap_Event extends SplitWindowBaseEvent {
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
			 * Fired when the window loses focus.
			 */
			interface SplitWindow_blur_Event extends SplitWindowBaseEvent {
			}
			/**
			 * Fired when the window is closed.
			 */
			interface SplitWindow_close_Event extends SplitWindowBaseEvent {
			}
			/**
			 * Fired when the window is opened.
			 */
			interface SplitWindow_open_Event extends SplitWindowBaseEvent {
			}
			interface SplitWindowEventMap extends ProxyEventMap {
				blur: SplitWindow_blur_Event;

				click: SplitWindow_click_Event;

				close: SplitWindow_close_Event;

				dblclick: SplitWindow_dblclick_Event;

				doubletap: SplitWindow_doubletap_Event;

				focus: SplitWindow_focus_Event;

				keypressed: SplitWindow_keypressed_Event;

				longpress: SplitWindow_longpress_Event;

				open: SplitWindow_open_Event;

				pinch: SplitWindow_pinch_Event;

				postlayout: SplitWindow_postlayout_Event;

				singletap: SplitWindow_singletap_Event;

				swipe: SplitWindow_swipe_Event;

				touchcancel: SplitWindow_touchcancel_Event;

				touchend: SplitWindow_touchend_Event;

				touchmove: SplitWindow_touchmove_Event;

				touchstart: SplitWindow_touchstart_Event;

				twofingertap: SplitWindow_twofingertap_Event;

			}
			/**
			 * A SplitWindow is a window that manages the presentation of two side-by-side view
			 * controllers.
			 */
			class SplitWindow extends Titanium.UI.Window {
				/**
				 * Window for the detail view section of the SplitWindow.
				 */
				detailView: Titanium.UI.Window;

				/**
				 * Determines the width of the `masterView` in landscape mode.
				 */
				landscapeSplit: number;

				/**
				 * Determines whether to show the master view is overlayed in portrait orientation.
				 */
				masterIsOverlayed: boolean;

				/**
				 * Window for the master view section of the SplitWindow.
				 */
				masterView: Titanium.UI.Window;

				/**
				 * Determines whether to show the master view or hide.
				 */
				masterViewVisible: boolean;

				/**
				 * Determines the width of the `masterView` in portrait mode.
				 */
				portraitSplit: number;

				/**
				 * Determines whether to show the master view in portrait orientation.
				 */
				showMasterInPortrait: boolean;

				/**
				 * Boolean value indicating if the user should be able to close a window using a swipe gesture.
				 */
				swipeToClose: never;

				/**
				 * Use a transition animation when opening or closing windows in a
				 * <Titanium.UI.NavigationWindow> or <Titanium.UI.Tab>.
				 */
				transitionAnimation: never;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof SplitWindowEventMap>(name: K, callback: (this: Titanium.UI.iOS.SplitWindow, event: SplitWindowEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof SplitWindowEventMap>(name: K, event?: SplitWindowEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof SplitWindowEventMap>(name: K, callback: (this: Titanium.UI.iOS.SplitWindow, event: SplitWindowEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Sets the value of the [masterIsOverlayed](Titanium.UI.iOS.SplitWindow.masterIsOverlayed) property.
				 */
				setMasterIsOverlayed(masterIsOverlayed: boolean, options?: AnimatedOptions): void;

				/**
				 * Sets the value of the [showMasterInPortrait](Titanium.UI.iOS.SplitWindow.showMasterInPortrait) property.
				 */
				setShowMasterInPortrait(showMasterInPortrait: boolean, options?: AnimatedOptions): void;

				/**
				 * Sets the array of items to show in the window's toolbar.
				 */
				setToolbar: never;

			}
		}
	}
}
