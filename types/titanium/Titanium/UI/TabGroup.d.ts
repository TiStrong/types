declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.TabGroup
		 */
		interface TabGroupBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.TabGroup;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface TabGroup_click_Event extends TabGroupBaseEvent {
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
		interface TabGroup_dblclick_Event extends TabGroupBaseEvent {
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
		interface TabGroup_doubletap_Event extends TabGroupBaseEvent {
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
		 * Fired when this tab group gains focus. On Android, fired when a tab in this tab group
		 * gains focus.
		 */
		interface TabGroup_focus_Event extends TabGroupBaseEvent {
			/**
			 * Index of the current active tab.
			 */
			index: number;

			/**
			 * Index of the previous active tab.
			 */
			previousIndex: number;

			/**
			 * Previous active tab.
			 */
			previousTab: Titanium.UI.Tab;

			/**
			 * Active tab.
			 */
			tab: Titanium.UI.Tab;

		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface TabGroup_keypressed_Event extends TabGroupBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface TabGroup_longclick_Event extends TabGroupBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface TabGroup_longpress_Event extends TabGroupBaseEvent {
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
		interface TabGroup_pinch_Event extends TabGroupBaseEvent {
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
		interface TabGroup_postlayout_Event extends TabGroupBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface TabGroup_singletap_Event extends TabGroupBaseEvent {
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
		interface TabGroup_swipe_Event extends TabGroupBaseEvent {
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
		interface TabGroup_touchcancel_Event extends TabGroupBaseEvent {
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
		interface TabGroup_touchend_Event extends TabGroupBaseEvent {
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
		interface TabGroup_touchmove_Event extends TabGroupBaseEvent {
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
		interface TabGroup_touchstart_Event extends TabGroupBaseEvent {
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
		interface TabGroup_twofingertap_Event extends TabGroupBaseEvent {
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
		interface TabGroup_androidback_Event extends TabGroupBaseEvent {
		}
		/**
		 * Fired when the Camera button is released.
		 */
		interface TabGroup_androidcamera_Event extends TabGroupBaseEvent {
		}
		/**
		 * Fired when the Camera button is half-pressed then released.
		 */
		interface TabGroup_androidfocus_Event extends TabGroupBaseEvent {
		}
		/**
		 * Fired when the Search button is released.
		 */
		interface TabGroup_androidsearch_Event extends TabGroupBaseEvent {
		}
		/**
		 * Fired when the volume down button is released.
		 */
		interface TabGroup_androidvoldown_Event extends TabGroupBaseEvent {
		}
		/**
		 * Fired when the volume up button is released.
		 */
		interface TabGroup_androidvolup_Event extends TabGroupBaseEvent {
		}
		/**
		 * Fired when this tab group loses focus. On Android, fired when a tab in this tab group
		 * loses focus.
		 */
		interface TabGroup_blur_Event extends TabGroupBaseEvent {
			/**
			 * Index of the current active tab. On iOS, a value of `undefined` indicates that the
			 * **More** tab was the active tab.
			 */
			index: number;

			/**
			 * Index of the previous active tab. On iOS, a value of `undefined` indicates that the
			 * **More** tab was the previous tab.
			 */
			previousIndex: number;

			/**
			 * Previous active tab. On iOS, a value of `undefined` indicates that the **More** tab was
			 * the previous tab.
			 */
			previousTab: Titanium.UI.Tab;

			/**
			 * Active tab.
			 */
			tab: Titanium.UI.Tab;

		}
		/**
		 * Fired when the tab group is closed.
		 */
		interface TabGroup_close_Event extends TabGroupBaseEvent {
		}
		/**
		 * Fired when the tab group is opened.
		 */
		interface TabGroup_open_Event extends TabGroupBaseEvent {
		}
		interface TabGroupEventMap extends ProxyEventMap {
			androidback: TabGroup_androidback_Event;

			androidcamera: TabGroup_androidcamera_Event;

			androidfocus: TabGroup_androidfocus_Event;

			androidsearch: TabGroup_androidsearch_Event;

			androidvoldown: TabGroup_androidvoldown_Event;

			androidvolup: TabGroup_androidvolup_Event;

			blur: TabGroup_blur_Event;

			click: TabGroup_click_Event;

			close: TabGroup_close_Event;

			dblclick: TabGroup_dblclick_Event;

			doubletap: TabGroup_doubletap_Event;

			focus: TabGroup_focus_Event;

			keypressed: TabGroup_keypressed_Event;

			longclick: TabGroup_longclick_Event;

			longpress: TabGroup_longpress_Event;

			open: TabGroup_open_Event;

			pinch: TabGroup_pinch_Event;

			postlayout: TabGroup_postlayout_Event;

			singletap: TabGroup_singletap_Event;

			swipe: TabGroup_swipe_Event;

			touchcancel: TabGroup_touchcancel_Event;

			touchend: TabGroup_touchend_Event;

			touchmove: TabGroup_touchmove_Event;

			touchstart: TabGroup_touchstart_Event;

			twofingertap: TabGroup_twofingertap_Event;

		}
		/**
		 * A tabbed group of windows.
		 */
		class TabGroup extends Titanium.UI.Window {
			/**
			 * Whether the view should be "hidden" from (i.e., ignored by) the accessibility service.
			 */
			accessibilityHidden: never;

			/**
			 * Briefly describes what performing an action (such as a click) on the view will do.
			 */
			accessibilityHint: never;

			/**
			 * A succint label identifying the view for the device's accessibility service.
			 */
			accessibilityLabel: never;

			/**
			 * A string describing the value (if any) of the view for the device's accessibility service.
			 */
			accessibilityValue: never;

			/**
			 * Active tab.
			 */
			activeTab: number | Titanium.UI.Tab;

			/**
			 * Default background image for the active tab.
			 */
			activeTabBackgroundImage: string;

			/**
			 * Color applied to active tabs icons, as a color name or hex triplet, where the tab's activeIcon was not defined.
			 * @deprecated Deprecated in favor of [Titanium.UI.TabGroup.activeTintColor](Titanium.UI.TabGroup.activeTintColor) or alternatively [Titanium.UI.Tab.activeTintColor](Titanium.UI.Tab.activeTintColor).
			 */
			activeTabIconTint: string | Titanium.UI.Color;

			/**
			 * The activeTintColor to apply to tabs.
			 */
			activeTintColor: string;

			/**
			 * Defines the color of the title of tab when it's active.
			 */
			activeTitleColor: string | Titanium.UI.Color;

			/**
			 * Reference to the Android Activity object associated with this tab group.
			 */
			readonly activity: Titanium.Android.Activity;

			/**
			 * Allow the user to reorder tabs in the tab group using the **Edit** button on the **More**
			 * tab.
			 */
			allowUserCustomization: boolean;

			/**
			 * Coordinate of the view about which to pivot an animation.
			 */
			anchorPoint: never;

			/**
			 * Current position of the view during an animation.
			 */
			readonly animatedCenter: never;

			/**
			 * Disabled background color of the view, as a color name or hex triplet.
			 */
			backgroundDisabledColor: never;

			/**
			 * Disabled background image for the view, specified as a local file path or URL.
			 */
			backgroundDisabledImage: never;

			/**
			 * Focused background color of the view, as a color name or hex triplet.
			 */
			backgroundFocusedColor: never;

			/**
			 * Focused background image for the view, specified as a local file path or URL.
			 */
			backgroundFocusedImage: never;

			/**
			 * A background gradient for the view.
			 */
			backgroundGradient: never;

			/**
			 * Background image for the view, specified as a local file path or URL.
			 */
			backgroundImage: never;

			/**
			 * Size of the left end cap.
			 */
			backgroundLeftCap: never;

			/**
			 * Determines whether to tile a background across a view.
			 */
			backgroundRepeat: never;

			/**
			 * Selected background color of the view, as a color name or hex triplet.
			 */
			backgroundSelectedColor: never;

			/**
			 * Selected background image url for the view, specified as a local file path or URL.
			 */
			backgroundSelectedImage: never;

			/**
			 * Size of the top end cap.
			 */
			backgroundTopCap: never;

			/**
			 * Default navigation bar color (typically for the **More** tab), as a color name or hex triplet.
			 */
			barColor: string | Titanium.UI.Color;

			/**
			 * Border color of the view, as a color name or hex triplet.
			 */
			borderColor: never;

			/**
			 * Radius for the rounded corners of the view's border.
			 */
			borderRadius: never;

			/**
			 * Border width of the view.
			 */
			borderWidth: never;

			/**
			 * Window's bottom position, in platform-specific units.
			 */
			bottom: never;

			/**
			 * Array of this view's child views.
			 */
			readonly children: never;

			/**
			 * Title for the edit button on the **More** tab.
			 */
			editButtonTitle: string;

			/**
			 * Boolean value indicating if the application should exit when closing the tab group, whether via Android
			 * back button or the [close](Titanium.UI.TabGroup.close) method.
			 */
			exitOnClose: boolean;

			/**
			 * Whether view should be focusable while navigating with the trackball.
			 */
			focusable: never;

			/**
			 * View height, in platform-specific units.
			 */
			height: never;

			/**
			 * Determines whether the layout has wrapping behavior.
			 */
			horizontalWrap: never;

			/**
			 * Specifies how the view positions its children.
			 * One of: 'composite', 'vertical', or 'horizontal'.
			 */
			layout: never;

			/**
			 * Window's left position, in platform-specific units.
			 */
			left: never;

			/**
			 * The tintColor to apply to the navigation bar (typically for the **More** tab).
			 */
			navTintColor: string | Titanium.UI.Color;

			/**
			 * The opacity from 0.0-1.0.
			 */
			opacity: never;

			/**
			 * Bottom padding of bottom navigation
			 */
			paddingBottom: number | string;

			/**
			 * Left padding of bottom navigation
			 */
			paddingLeft: number | string;

			/**
			 * Right padding of bottom navigation
			 */
			paddingRight: number | string;

			/**
			 * Window's right position, in platform-specific units.
			 */
			right: never;

			/**
			 * Image of the shadow placed between the tab bar and the content area.
			 */
			shadowImage: string;

			/**
			 * Determines whether the [TABS_STYLE_BOTTOM_NAVIGATION](Titanium.UI.Android.TABS_STYLE_BOTTOM_NAVIGATION) uses shiftMode.
			 */
			shiftMode: boolean;

			/**
			 * Boolean value indicating if changing pages by tab clicks is animated.
			 */
			smoothScrollOnTabClick: boolean;

			/**
			 * Determines keyboard behavior when this view is focused. Defaults to <Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS>.
			 */
			softKeyboardOnFocus: never;

			/**
			 * Property defining which style for the TabGroup to be used.
			 */
			style: number;

			/**
			 * Boolean value indicating if tab navigation can be done by swipes, in addition to tab clicks.
			 */
			swipeable: boolean;

			/**
			 * Tabs managed by the tab group.
			 */
			tabs: Titanium.UI.Tab[];

			/**
			 * Default background color for inactive tabs, as a color name or hex triplet.
			 */
			tabsBackgroundColor: string | Titanium.UI.Color;

			/**
			 * Default background image for tabs.
			 */
			tabsBackgroundImage: string;

			/**
			 * Default background selected color for tabs, as a color name or hex triplet.
			 */
			tabsBackgroundSelectedColor: string;

			/**
			 * The tintColor to apply to the tabs.
			 * @deprecated Deprecated in favor of [Titanium.UI.TabGroup.tintColor](Titanium.UI.TabGroup.tintColor) or alternatively [Titanium.UI.Tab.tintColor](Titanium.UI.Tab.tintColor).
			 */
			tabsTintColor: string | Titanium.UI.Color;

			/**
			 * A Boolean value that indicates whether the tab bar is translucent.
			 */
			tabsTranslucent: boolean;

			/**
			 * The tintColor to apply to tabs.
			 */
			tintColor: string;

			/**
			 * Title for this tabGroup.
			 */
			title: string;

			/**
			 * Title text attributes of the window to be applied on the **More** tab.
			 */
			titleAttributes: titleAttributesParams;

			/**
			 * Defines the color of the title of tab when it's inactive.
			 */
			titleColor: string | Titanium.UI.Color;

			/**
			 * Window's top position, in platform-specific units.
			 */
			top: never;

			/**
			 * Transformation matrix to apply to the view.
			 */
			transform: never;

			/**
			 * Boolean value indicating if the nav bar (typically for the **More** tab), is translucent.
			 */
			translucent: boolean;

			/**
			 * Unselected items in this tab group will be tinted with this color. Setting this value to null
			 * indicates that the tab group should use its default value instead.
			 * @deprecated Deprecated in favor of [Titanium.UI.TabGroup.tintColor](Titanium.UI.TabGroup.tintColor) or alternatively [Titanium.UI.Tab.tintColor](Titanium.UI.Tab.tintColor).
			 */
			unselectedItemTintColor: string | Titanium.UI.Color;

			/**
			 * View's width, in platform-specific units.
			 */
			width: never;

			/**
			 * Determines how the tab group is treated when a soft input method (such as a virtual keyboard)
			 * is displayed.
			 */
			windowSoftInputMode: number;

			/**
			 * Z-index stack order position, relative to other sibling views.
			 */
			zIndex: never;

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add: never;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof TabGroupEventMap>(name: K, callback: (this: Titanium.UI.TabGroup, event: TabGroupEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Adds a tab to the tab group.
			 */
			addTab(tab: Titanium.UI.Tab): void;

			/**
			 * Closes the tab group and removes it from the UI.
			 */
			close(params?: Titanium.UI.Animation | Dictionary<Titanium.UI.Animation> | closeWindowParams): Promise<any>;

			/**
			 * Disable (or re-enable) tab navigation. If tab navigation is disabled, the tabs are hidden and
			 * the last selected tab window is shown.
			 */
			disableTabNavigation(disable: boolean): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof TabGroupEventMap>(name: K, event?: TabGroupEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Gets the currently-active tab.
			 * @deprecated Use the <Titanium.UI.TabGroup.activeTab> property instead.
			 */
			getActiveTab: never;

			/**
			 * Gets all tabs that are managed by the tab group.
			 * @deprecated Use the <Titanium.UI.TabGroup.tabs> property instead.
			 */
			getTabs: never;

			/**
			 * Opens the tab group and makes it visible.
			 */
			open(params?: openWindowParams): Promise<any>;

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
			removeEventListener<K extends keyof TabGroupEventMap>(name: K, callback: (this: Titanium.UI.TabGroup, event: TabGroupEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Removes a tab from the tab group.
			 */
			removeTab(tab: Titanium.UI.Tab): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt: never;

			/**
			 * Selects the currently active tab in a tab group.
			 * @deprecated Use the <Titanium.UI.TabGroup.activeTab> property instead.
			 */
			setActiveTab: never;

			/**
			 * Sets the array of items to show in the window's toolbar.
			 */
			setToolbar: never;

		}
	}
}
