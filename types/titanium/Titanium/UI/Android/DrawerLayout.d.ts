declare namespace Titanium {
	namespace UI {
		namespace Android {
			/**
			 * Base event for class Titanium.UI.Android.DrawerLayout
			 */
			interface DrawerLayoutBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.UI.Android.DrawerLayout;

			}
			/**
			 * Fired when the device detects a click against the view.
			 */
			interface DrawerLayout_click_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_dblclick_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_doubletap_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_focus_Event extends DrawerLayoutBaseEvent {
			}
			/**
			 * Fired when a hardware key is pressed in the view.
			 */
			interface DrawerLayout_keypressed_Event extends DrawerLayoutBaseEvent {
				/**
				 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
				 */
				keyCode: number;

			}
			/**
			 * Fired when the device detects a long click.
			 */
			interface DrawerLayout_longclick_Event extends DrawerLayoutBaseEvent {
			}
			/**
			 * Fired when the device detects a long press.
			 */
			interface DrawerLayout_longpress_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_pinch_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_postlayout_Event extends DrawerLayoutBaseEvent {
			}
			/**
			 * Fired when the device detects a single tap against the view.
			 */
			interface DrawerLayout_singletap_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_swipe_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_touchcancel_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_touchend_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_touchmove_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_touchstart_Event extends DrawerLayoutBaseEvent {
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
			interface DrawerLayout_twofingertap_Event extends DrawerLayoutBaseEvent {
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
			 * Fired when the drawer view is opened.
			 */
			interface DrawerLayout_open_Event extends DrawerLayoutBaseEvent {
				/**
				 * Contains the drawer frame type. Either `left` or `right`.
				 */
				drawer: string;

			}
			/**
			 * Fired when the drawer view is closed.
			 */
			interface DrawerLayout_close_Event extends DrawerLayoutBaseEvent {
				/**
				 * Contains the drawer frame type. Either `left` or `right`.
				 */
				drawer: string;

			}
			/**
			 * Fired when the motion state of the drawer view changes.
			 */
			interface DrawerLayout_change_Event extends DrawerLayoutBaseEvent {
				/**
				 * Whether or not the drawer is currently dragging.
				 */
				dragging: boolean;

				/**
				 * Contains the drawer frame type. Either `left` or `right`.
				 */
				drawer: string;

				/**
				 * Whether or not the drawer is currently idle.
				 */
				idle: boolean;

				/**
				 * Whether or not the drawer is currently settling.
				 */
				settling: boolean;

				/**
				 * The current drawer state.
				 */
				state: number;

			}
			/**
			 * Fired when the drawer view changes it's position.
			 */
			interface DrawerLayout_slide_Event extends DrawerLayoutBaseEvent {
				/**
				 * Contains the drawer frame type. Either `left` or `right`.
				 */
				drawer: string;

				/**
				 * The current drawer offset.
				 */
				offset: number;

			}
			interface DrawerLayoutEventMap extends ProxyEventMap {
				change: DrawerLayout_change_Event;

				click: DrawerLayout_click_Event;

				close: DrawerLayout_close_Event;

				dblclick: DrawerLayout_dblclick_Event;

				doubletap: DrawerLayout_doubletap_Event;

				focus: DrawerLayout_focus_Event;

				keypressed: DrawerLayout_keypressed_Event;

				longclick: DrawerLayout_longclick_Event;

				longpress: DrawerLayout_longpress_Event;

				open: DrawerLayout_open_Event;

				pinch: DrawerLayout_pinch_Event;

				postlayout: DrawerLayout_postlayout_Event;

				singletap: DrawerLayout_singletap_Event;

				slide: DrawerLayout_slide_Event;

				swipe: DrawerLayout_swipe_Event;

				touchcancel: DrawerLayout_touchcancel_Event;

				touchend: DrawerLayout_touchend_Event;

				touchmove: DrawerLayout_touchmove_Event;

				touchstart: DrawerLayout_touchstart_Event;

				twofingertap: DrawerLayout_twofingertap_Event;

			}
			/**
			 * A panel that displays the app's main navigation options on the left edge of the screen.
			 */
			class DrawerLayout extends Titanium.UI.View {
				/**
				 * Use with [DrawerLayout.drawerLockMode](Titanium.UI.Android.DrawerLayout.drawerLockMode) to specify the drawer is locked closed.
				 */
				readonly LOCK_MODE_LOCKED_CLOSED: number;

				/**
				 * Use with [DrawerLayout.drawerLockMode](Titanium.UI.Android.DrawerLayout.drawerLockMode) to specify the drawer is locked opened.
				 */
				readonly LOCK_MODE_LOCKED_OPEN: number;

				/**
				 * Use with [DrawerLayout.drawerLockMode](Titanium.UI.Android.DrawerLayout.drawerLockMode) to specify the drawer is reset to default lock state.
				 */
				readonly LOCK_MODE_UNDEFINED: number;

				/**
				 * Use with [DrawerLayout.drawerLockMode](Titanium.UI.Android.DrawerLayout.drawerLockMode) to specify the drawer is unlocked.
				 */
				readonly LOCK_MODE_UNLOCKED: number;

				/**
				 * Get or set the center view
				 */
				centerView: Titanium.UI.View;

				/**
				 * Determine the drawer indicator status
				 */
				drawerIndicatorEnabled: boolean;

				/**
				 * Get or set the drawerLockMode
				 */
				drawerLockMode: number;

				/**
				 * Determine whether the left drawer is open
				 */
				isLeftOpen: boolean;

				/**
				 * Determine whether the left drawer is visible
				 */
				isLeftVisible: boolean;

				/**
				 * Determine whether the right drawer is open
				 */
				isRightOpen: boolean;

				/**
				 * Determine whether the right drawer is visible
				 */
				isRightVisible: boolean;

				/**
				 * Get or set lock mode for the left drawer
				 */
				leftDrawerLockMode: number;

				/**
				 * Get or set the view of the left drawer
				 */
				leftView: Titanium.UI.View;

				/**
				 * Get or set the width of the left drawer
				 */
				leftWidth: number;

				/**
				 * Get or set lock mode for the right drawer
				 */
				rightDrawerLockMode: number;

				/**
				 * Get or set the view of the right drawer
				 */
				rightView: Titanium.UI.View;

				/**
				 * Get or set the width of the right drawer
				 */
				rightWidth: number;

				/**
				 * A Toolbar instance to use as a toolbar.
				 */
				toolbar: Titanium.UI.Toolbar;

				/**
				 * Determine whether to enable the toolbar.
				 */
				toolbarEnabled: boolean;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof DrawerLayoutEventMap>(name: K, callback: (this: Titanium.UI.Android.DrawerLayout, event: DrawerLayoutEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Close the left view.
				 */
				closeLeft(): void;

				/**
				 * Close the right view.
				 */
				closeRight(): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof DrawerLayoutEventMap>(name: K, event?: DrawerLayoutEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Disallow touch events on a specific view.
				 */
				interceptTouchEvent(view: Titanium.UI.View, disallowIntercept: boolean): void;

				/**
				 * Open the left view.
				 */
				openLeft(): void;

				/**
				 * Open the right view.
				 */
				openRight(): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof DrawerLayoutEventMap>(name: K, callback: (this: Titanium.UI.Android.DrawerLayout, event: DrawerLayoutEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Toggle the visibility of the left view.
				 */
				toggleLeft(): void;

				/**
				 * Toggle the visibility of the right view.
				 */
				toggleRight(): void;

			}
		}
	}
}
