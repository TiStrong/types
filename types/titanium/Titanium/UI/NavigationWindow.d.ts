declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.NavigationWindow
		 */
		interface NavigationWindowBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.NavigationWindow;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface NavigationWindow_click_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_dblclick_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_doubletap_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_focus_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface NavigationWindow_keypressed_Event extends NavigationWindowBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface NavigationWindow_longclick_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface NavigationWindow_longpress_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_pinch_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_postlayout_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface NavigationWindow_singletap_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_swipe_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_touchcancel_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_touchend_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_touchmove_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_touchstart_Event extends NavigationWindowBaseEvent {
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
		interface NavigationWindow_twofingertap_Event extends NavigationWindowBaseEvent {
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
		 * Fired when the back button is pressed by the user.
		 */
		interface NavigationWindow_androidback_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when the Camera button is released.
		 */
		interface NavigationWindow_androidcamera_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when the Camera button is half-pressed then released.
		 */
		interface NavigationWindow_androidfocus_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when the Search button is released.
		 */
		interface NavigationWindow_androidsearch_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when the volume down button is released.
		 */
		interface NavigationWindow_androidvoldown_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when the volume up button is released.
		 */
		interface NavigationWindow_androidvolup_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when the window loses focus.
		 */
		interface NavigationWindow_blur_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when the window is closed.
		 */
		interface NavigationWindow_close_Event extends NavigationWindowBaseEvent {
		}
		/**
		 * Fired when the window is opened.
		 */
		interface NavigationWindow_open_Event extends NavigationWindowBaseEvent {
		}
		interface NavigationWindowEventMap extends ProxyEventMap {
			androidback: NavigationWindow_androidback_Event;

			androidcamera: NavigationWindow_androidcamera_Event;

			androidfocus: NavigationWindow_androidfocus_Event;

			androidsearch: NavigationWindow_androidsearch_Event;

			androidvoldown: NavigationWindow_androidvoldown_Event;

			androidvolup: NavigationWindow_androidvolup_Event;

			blur: NavigationWindow_blur_Event;

			click: NavigationWindow_click_Event;

			close: NavigationWindow_close_Event;

			dblclick: NavigationWindow_dblclick_Event;

			doubletap: NavigationWindow_doubletap_Event;

			focus: NavigationWindow_focus_Event;

			keypressed: NavigationWindow_keypressed_Event;

			longclick: NavigationWindow_longclick_Event;

			longpress: NavigationWindow_longpress_Event;

			open: NavigationWindow_open_Event;

			pinch: NavigationWindow_pinch_Event;

			postlayout: NavigationWindow_postlayout_Event;

			singletap: NavigationWindow_singletap_Event;

			swipe: NavigationWindow_swipe_Event;

			touchcancel: NavigationWindow_touchcancel_Event;

			touchend: NavigationWindow_touchend_Event;

			touchmove: NavigationWindow_touchmove_Event;

			touchstart: NavigationWindow_touchstart_Event;

			twofingertap: NavigationWindow_twofingertap_Event;

		}
		/**
		 * A `NavigationWindow` implements a specialized view that manages the navigation of hierarchical
		 * content.
		 */
		class NavigationWindow extends Titanium.UI.Window {
			/**
			 * Title for the back button. This is only valid when the window is a child of a tab.
			 */
			backButtonTitle: never;

			/**
			 * The image to show as the back button. This is only valid when the window is a child of a tab.
			 */
			backButtonTitleImage: never;

			/**
			 * Background color for the nav bar, as a color name or hex triplet.
			 */
			barColor: never;

			/**
			 * Background image for the nav bar, specified as a URL to a local image.
			 */
			barImage: never;

			/**
			 * Set this to true to hide the shadow image of the navigation bar.
			 */
			hideShadow: never;

			/**
			 * View to show in the left nav bar area.
			 */
			leftNavButton: never;

			/**
			 * Hides the navigation bar (`true`) or shows the navigation bar (`false`).
			 */
			navBarHidden: never;

			/**
			 * The tintColor to apply to the navigation bar.
			 */
			navTintColor: never;

			/**
			 * View to show in the right nav bar area.
			 */
			rightNavButton: never;

			/**
			 * Shadow image for the navigation bar, specified as a URL to a local image..
			 */
			shadowImage: never;

			/**
			 * Boolean value indicating if the user should be able to close a window using a swipe gesture.
			 */
			swipeToClose: never;

			/**
			 * Boolean value indicating if the tab bar should be hidden.
			 */
			tabBarHidden: never;

			/**
			 * Title of the window.
			 */
			title: never;

			/**
			 * View to show in the title area of the nav bar.
			 */
			titleControl: never;

			/**
			 * Image to show in the title area of the nav bar, specified as a local file path or URL.
			 */
			titleImage: never;

			/**
			 * Title prompt for the window.
			 */
			titlePrompt: never;

			/**
			 * Key identifying a string from the locale file to use for the window title.
			 */
			titleid: never;

			/**
			 * Key identifying a string from the locale file to use for the window title prompt.
			 */
			titlepromptid: never;

			/**
			 * Array of button objects to show in the window's toolbar.
			 */
			toolbar: never;

			/**
			 * Use a transition animation when opening or closing windows in a
			 * <Titanium.UI.NavigationWindow> or <Titanium.UI.Tab>.
			 */
			transitionAnimation: never;

			/**
			 * Boolean value indicating if the nav bar is translucent.
			 */
			translucent: never;

			/**
			 * Window to add to this navigation window.
			 */
			window: Titanium.UI.Window;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof NavigationWindowEventMap>(name: K, callback: (this: Titanium.UI.NavigationWindow, event: NavigationWindowEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Closes a window and removes it from the navigation window.
			 */
			closeWindow(window: Titanium.UI.Window, options: any): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof NavigationWindowEventMap>(name: K, event?: NavigationWindowEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Hides the tab bar. Must be called before opening the window.
			 */
			hideTabBar: never;

			/**
			 * Opens a window within the navigation window.
			 */
			openWindow(window: Titanium.UI.Window, options?: AnimatedOptions): void;

			/**
			 * Closes all windows that are currently opened inside the navigation window.
			 */
			popToRootWindow(options?: AnimatedOptions): void;

			/**
			 * Removes all child views from this view's hierarchy.
			 */
			removeAllChildren: never;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof NavigationWindowEventMap>(name: K, callback: (this: Titanium.UI.NavigationWindow, event: NavigationWindowEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Sets the array of items to show in the window's toolbar.
			 */
			setToolbar: never;

		}
	}
}
