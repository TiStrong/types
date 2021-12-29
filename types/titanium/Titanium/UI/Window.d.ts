declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.Window
		 */
		interface WindowBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.Window;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface Window_click_Event extends WindowBaseEvent {
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
		interface Window_dblclick_Event extends WindowBaseEvent {
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
		interface Window_doubletap_Event extends WindowBaseEvent {
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
		interface Window_focus_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface Window_keypressed_Event extends WindowBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface Window_longclick_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface Window_longpress_Event extends WindowBaseEvent {
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
		interface Window_pinch_Event extends WindowBaseEvent {
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
		interface Window_postlayout_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface Window_singletap_Event extends WindowBaseEvent {
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
		interface Window_swipe_Event extends WindowBaseEvent {
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
		interface Window_touchcancel_Event extends WindowBaseEvent {
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
		interface Window_touchend_Event extends WindowBaseEvent {
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
		interface Window_touchmove_Event extends WindowBaseEvent {
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
		interface Window_touchstart_Event extends WindowBaseEvent {
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
		interface Window_twofingertap_Event extends WindowBaseEvent {
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
		interface Window_androidback_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when the Camera button is released.
		 */
		interface Window_androidcamera_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when the Camera button is half-pressed then released.
		 */
		interface Window_androidfocus_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when the Search button is released.
		 */
		interface Window_androidsearch_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when the volume down button is released.
		 */
		interface Window_androidvoldown_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when the volume up button is released.
		 */
		interface Window_androidvolup_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when the window loses focus.
		 */
		interface Window_blur_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when the window is closed.
		 */
		interface Window_close_Event extends WindowBaseEvent {
		}
		/**
		 * Fired when the window is opened.
		 */
		interface Window_open_Event extends WindowBaseEvent {
		}
		interface WindowEventMap extends ProxyEventMap {
			androidback: Window_androidback_Event;

			androidcamera: Window_androidcamera_Event;

			androidfocus: Window_androidfocus_Event;

			androidsearch: Window_androidsearch_Event;

			androidvoldown: Window_androidvoldown_Event;

			androidvolup: Window_androidvolup_Event;

			blur: Window_blur_Event;

			click: Window_click_Event;

			close: Window_close_Event;

			dblclick: Window_dblclick_Event;

			doubletap: Window_doubletap_Event;

			focus: Window_focus_Event;

			keypressed: Window_keypressed_Event;

			longclick: Window_longclick_Event;

			longpress: Window_longpress_Event;

			open: Window_open_Event;

			pinch: Window_pinch_Event;

			postlayout: Window_postlayout_Event;

			singletap: Window_singletap_Event;

			swipe: Window_swipe_Event;

			touchcancel: Window_touchcancel_Event;

			touchend: Window_touchend_Event;

			touchmove: Window_touchmove_Event;

			touchstart: Window_touchstart_Event;

			twofingertap: Window_twofingertap_Event;

		}
		/**
		 * The Window is an empty drawing surface or container.
		 */
		class Window extends Titanium.UI.View {
			/**
			 * Contains a reference to the Android Activity object associated with this window.
			 */
			readonly activity: Titanium.Android.Activity;

			/**
			 * The type of transition used when activity is entering.
			 */
			activityEnterTransition: number;

			/**
			 * The type of transition used when activity is exiting.
			 */
			activityExitTransition: number;

			/**
			 * The type of transition used when reentering to a previously started activity.
			 */
			activityReenterTransition: number;

			/**
			 * The type of transition used when returning from a previously started activity.
			 */
			activityReturnTransition: number;

			/**
			 * The type of enter transition used when animating shared elements between two activities.
			 */
			activitySharedElementEnterTransition: number;

			/**
			 * The type of exit transition used when animating shared elements between two activities.
			 */
			activitySharedElementExitTransition: number;

			/**
			 * The type of reenter transition used when animating shared elements between two activities.
			 */
			activitySharedElementReenterTransition: number;

			/**
			 * The type of return transition used when animating shared elements between two activities.
			 */
			activitySharedElementReturnTransition: number;

			/**
			 * Specifies whether or not the view controller should automatically adjust its scroll view insets.
			 */
			autoAdjustScrollViewInsets: boolean;

			/**
			 * Title for the back button. This is only valid when the window is a child of a tab.
			 */
			backButtonTitle: string;

			/**
			 * The image to show as the back button. This is only valid when the window is a child of a tab.
			 */
			backButtonTitleImage: string | Titanium.Blob;

			/**
			 * Background color of the window, as a color name or hex triplet.
			 */
			backgroundColor: string | Titanium.UI.Color;

			/**
			 * Background color for the nav bar, as a color name or hex triplet.
			 */
			barColor: string | Titanium.UI.Color;

			/**
			 * Background image for the nav bar, specified as a URL to a local image.
			 */
			barImage: string;

			/**
			 * Window's bottom position, in platform-specific units.
			 */
			bottom: number | string;

			/**
			 * Determines whether this Window is closed.
			 */
			readonly closed: boolean;

			/**
			 * Boolean value indicating if the application should exit when the Android
			 * Back button is pressed while the window is being shown or when the window
			 * is closed programmatically.
			 */
			exitOnClose: boolean;

			/**
			 * An array of supported values specified using the EXTEND_EDGE constants in <Titanium.UI>.
			 */
			extendEdges: number[];

			/**
			 * Specifies whether the screen insets/notches are allowed to overlap the window's content or not.
			 */
			extendSafeArea: boolean;

			/**
			 * Treat the content of the window as secure, preventing it from appearing in screenshots or from being viewed on non-secure displays.
			 */
			flagSecure: boolean;

			/**
			 * Determines whether this TextArea has focus.
			 */
			readonly focused: boolean;

			/**
			 * Boolean value indicating if the window is fullscreen.
			 */
			fullscreen: boolean;

			/**
			 * Set this to true to hide the shadow image of the navigation bar.
			 */
			hideShadow: boolean;

			/**
			 * Set this to true to hide the back button of navigation bar.
			 */
			hidesBackButton: boolean;

			/**
			 * Set this to true to hide the navigation bar on swipe.
			 */
			hidesBarsOnSwipe: boolean;

			/**
			 * Set this to true to hide the navigation bar on tap.
			 */
			hidesBarsOnTap: boolean;

			/**
			 * Set this to true to hide the navigation bar when the keyboard appears.
			 */
			hidesBarsWhenKeyboardAppears: boolean;

			/**
			 * A Boolean value indicating whether the integrated search bar is hidden when scrolling any underlying content.
			 */
			hidesSearchBarWhenScrolling: boolean;

			/**
			 * Boolean value indicating whether the system is allowed to hide the visual indicator for returning to the Home screen.
			 */
			homeIndicatorAutoHidden: boolean;

			/**
			 * Specifies if the edges should extend beyond opaque bars (navigation bar, tab bar, toolbar).
			 */
			includeOpaqueBars: boolean;

			/**
			 * The mode to use when displaying the title of the navigation bar.
			 */
			largeTitleDisplayMode: number;

			/**
			 * A Boolean value indicating whether the title should be displayed in a large format.
			 */
			largeTitleEnabled: boolean;

			/**
			 * Window's left position, in platform-specific units.
			 */
			left: number | string;

			/**
			 * View to show in the left nav bar area.
			 */
			leftNavButton: Titanium.UI.View;

			/**
			 * An Array of views to show in the left nav bar area.
			 */
			leftNavButtons: Titanium.UI.View[];

			/**
			 * Indicates to open a modal window or not.
			 */
			modal: boolean;

			/**
			 * Hides the navigation bar (`true`) or shows the navigation bar (`false`).
			 */
			navBarHidden: boolean;

			/**
			 * The tintColor to apply to the navigation bar.
			 */
			navTintColor: string | Titanium.UI.Color;

			/**
			 * The <Titanium.UI.NavigationWindow> instance hosting this window.
			 */
			readonly navigationWindow: Titanium.UI.NavigationWindow;

			/**
			 * Callback function that overrides the default behavior when the user presses the **Back**
			 * button.
			 */
			onBack: () => void;

			/**
			 * The opacity from 0.0-1.0.
			 */
			opacity: number;

			/**
			 * Current orientation of the window.
			 */
			readonly orientation: number;

			/**
			 * Array of supported orientation modes, specified using the orientation
			 * constants defined in <Titanium.UI>.
			 */
			orientationModes: number[];

			/**
			 * Window's right position, in platform-specific units.
			 */
			right: number | string;

			/**
			 * View to show in the right nav bar area.
			 */
			rightNavButton: Titanium.UI.View;

			/**
			 * An Array of views to show in the right nav bar area.
			 */
			rightNavButtons: Titanium.UI.View[];

			/**
			 * The padding needed to safely display content without it being overlapped by the screen insets and notches.
			 */
			readonly safeAreaPadding: Padding;

			/**
			 * Shadow image for the navigation bar, specified as a URL to a local image..
			 */
			shadowImage: string;

			/**
			 * Boolean value to enable split action bar.
			 * @deprecated Deprecated in AppCompat theme. The same behaviour can be achived by using Toolbar.
			 */
			splitActionBar: boolean;

			/**
			 * The status bar style associated with this window.
			 */
			statusBarStyle: number;

			/**
			 * Maintain a sustainable level of performance.
			 */
			sustainedPerformanceMode: boolean;

			/**
			 * Boolean value indicating if the user should be able to close a window using a swipe gesture.
			 */
			swipeToClose: boolean;

			/**
			 * Boolean value indicating if the tab bar should be hidden.
			 */
			tabBarHidden: boolean;

			/**
			 * Name of the theme to apply to the window.
			 */
			theme: string;

			/**
			 * Title of the window.
			 */
			title: string;

			/**
			 * Title text attributes of the window.
			 */
			titleAttributes: titleAttributesParams;

			/**
			 * View to show in the title area of the nav bar.
			 */
			titleControl: Titanium.UI.View;

			/**
			 * Image to show in the title area of the nav bar, specified as a local file path or URL.
			 */
			titleImage: string;

			/**
			 * Title prompt for the window.
			 */
			titlePrompt: string;

			/**
			 * Key identifying a string from the locale file to use for the window title.
			 */
			titleid: string;

			/**
			 * Key identifying a string from the locale file to use for the window title prompt.
			 */
			titlepromptid: string;

			/**
			 * Array of button objects to show in the window's toolbar.
			 */
			toolbar: Titanium.UI.View[];

			/**
			 * Window's top position, in platform-specific units.
			 */
			top: number | string;

			/**
			 * Use a transition animation when opening or closing windows in a
			 * <Titanium.UI.NavigationWindow> or <Titanium.UI.Tab>.
			 */
			transitionAnimation: Titanium.Proxy;

			/**
			 * Boolean value indicating if the nav bar is translucent.
			 */
			translucent: boolean;

			/**
			 * Additional flags to set on the Activity Window.
			 */
			windowFlags: number;

			/**
			 * Set the pixel format for the Activity's Window.
			 */
			windowPixelFormat: number;

			/**
			 * Determines whether a window's soft input area (ie software keyboard) is visible
			 * as it receives focus and how the window behaves in order to accomodate it while keeping its
			 * contents in view.
			 */
			windowSoftInputMode: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof WindowEventMap>(name: K, callback: (this: Titanium.UI.Window, event: WindowEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Adds a common UI element to participate in window transition animation.
			 */
			addSharedElement(view: Titanium.UI.View, transitionName: string): void;

			/**
			 * Closes the window.
			 */
			close(params?: Titanium.UI.Animation | Dictionary<Titanium.UI.Animation> | closeWindowParams): Promise<any>;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof WindowEventMap>(name: K, event?: WindowEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Hides the navigation bar.
			 */
			hideNavBar(options?: AnimatedOptions): void;

			/**
			 * Hides the tab bar. Must be called before opening the window.
			 */
			hideTabBar(): void;

			/**
			 * Makes the bottom toolbar invisible.
			 */
			hideToolbar(options?: AnimatedOptions): void;

			/**
			 * Opens the window.
			 */
			open(params?: openWindowParams): Promise<any>;

			/**
			 * Removes all child views from this view's hierarchy.
			 */
			removeAllChildren: never;

			/**
			 * Clears all added shared elements.
			 */
			removeAllSharedElements(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof WindowEventMap>(name: K, callback: (this: Titanium.UI.Window, event: WindowEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Sets the array of items to show in the window's toolbar.
			 */
			setToolbar(items: ReadonlyArray<any>, params?: windowToolbarParam): void;

			/**
			 * Makes the navigation bar visible.
			 */
			showNavBar(options?: AnimatedOptions): void;

			/**
			 * Makes the bottom toolbar visible.
			 */
			showToolbar(options?: AnimatedOptions): void;

		}
	}
}
/**
 * Dictionary of options for the <Titanium.UI.Window.close> method.
 */
interface closeWindowParams {
	/**
	 * Animation resource to use for the incoming activity.
	 */
	activityEnterAnimation?: number;

	/**
	 * Animation resource to use for the outgoing activity.
	 */
	activityExitAnimation?: number;

	/**
	 * Determines whether to use an animated effect when the window is closed. Defaults to `true` on Android, `false` on iOS.
	 */
	animated?: boolean;

	/**
	 * duration of the animation in milliseconds
	 */
	animationDuration?: number;

	/**
	 * Transition type to use during a transition animation.
	 */
	animationStyle?: number;

}
/**
 * Dictionary of options for the <Titanium.UI.Window.open> method.
 */
interface openWindowParams {
	/**
	 * Animation resource to run on the activity being opened.
	 */
	activityEnterAnimation?: number;

	/**
	 * Animation resource to run on the activity that is being put in background as a window is being opened above it.
	 */
	activityExitAnimation?: number;

	/**
	 * Determines whether to use an animated effect when the window is shown.
	 */
	animated?: boolean;

	/**
	 * Window's bottom position, in platform-specific units.
	 */
	bottom?: number | string;

	/**
	 * Indicates whether the window enforces modal behaviour.
	 */
	forceModal?: boolean;

	/**
	 * Determines if the window is fullscreen.
	 */
	fullscreen?: boolean;

	/**
	 * Window's height, in platform-specific units.
	 */
	height?: number | string;

	/**
	 * Window's left position, in platform-specific units.
	 */
	left?: number | string;

	/**
	 * Determines whether to open the window modal in front of other windows.
	 */
	modal?: boolean;

	/**
	 * Presentation style of this modal window.
	 */
	modalStyle?: number;

	/**
	 * Transition style of this modal window.
	 */
	modalTransitionStyle?: number;

	/**
	 * For modal windows, hides the nav bar (`true`) or shows the nav bar (`false`).
	 */
	navBarHidden?: boolean;

	/**
	 * Window's right position, in platform-specific units.
	 */
	right?: number | string;

	/**
	 * Window's top position, in platform-specific units.
	 */
	top?: number | string;

	/**
	 * Transition style of this non-modal window.
	 */
	transition?: number;

	/**
	 * Window's width, in platform-specific units.
	 */
	width?: number | string;

}
/**
 * Dictionary describing the shadow effect for text.
 */
interface shadowDict {
	/**
	 * Specifies the blur radius of the shadow.
	 */
	blurRadius?: number;

	/**
	 * Color name or hex triplet specifying the color of the shadow.
	 */
	color?: string | Titanium.UI.Color;

	/**
	 * <Size> with the properties `width` and `height` used as the horizontal
	 * and vertical offset of the shadow, respectively.
	 */
	offset?: Size;

}
/**
 * Dictionary of options for the <Titanium.UI.Window.titleAttributes> property.
 */
interface titleAttributesParams {
	/**
	 * Color of the window title, as a color name or hex triplet.
	 */
	color?: string | Titanium.UI.Color;

	/**
	 * Font to use for the window title.
	 */
	font?: Font;

	/**
	 * Shadow color and offset for the window title.
	 */
	shadow?: shadowDict;

}
/**
 * Dictionary of options for the <Titanium.UI.Window.setToolbar> method.
 */
interface windowToolbarParam {
	/**
	 * Defines if the toolbar appearance is animated.
	 */
	animated?: boolean;

	/**
	 * Background color for the toolbar, as a color name or hex triplet.
	 */
	barColor?: string | Titanium.UI.Color;

	/**
	 * The tintColor to apply to the tool bar.
	 */
	tintColor?: string | Titanium.UI.Color;

	/**
	 * Defines if the toolbar is translucent.
	 */
	translucent?: boolean;

}
