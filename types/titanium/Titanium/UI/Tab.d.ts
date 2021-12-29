declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.Tab
		 */
		interface TabBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.Tab;

		}
		/**
		 * Fired when this tab is clicked in the tab group.
		 */
		interface Tab_click_Event extends TabBaseEvent {
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
		interface Tab_dblclick_Event extends TabBaseEvent {
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
		interface Tab_doubletap_Event extends TabBaseEvent {
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
		 * Fired when a hardware key is pressed in the view.
		 */
		interface Tab_keypressed_Event extends TabBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface Tab_longclick_Event extends TabBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface Tab_longpress_Event extends TabBaseEvent {
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
		interface Tab_pinch_Event extends TabBaseEvent {
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
		interface Tab_postlayout_Event extends TabBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface Tab_singletap_Event extends TabBaseEvent {
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
		interface Tab_swipe_Event extends TabBaseEvent {
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
		interface Tab_touchcancel_Event extends TabBaseEvent {
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
		interface Tab_touchend_Event extends TabBaseEvent {
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
		interface Tab_touchmove_Event extends TabBaseEvent {
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
		interface Tab_touchstart_Event extends TabBaseEvent {
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
		interface Tab_twofingertap_Event extends TabBaseEvent {
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
		 * Fired when the tab is no longer selected.
		 */
		interface Tab_unselected_Event extends TabBaseEvent {
			/**
			 * Index of the current active tab.
			 */
			index: number;

			/**
			 * Index of the previous active tab.
			 */
			previousIndex: number;

			/**
			 * Previous active tab object.
			 */
			previousTab: Titanium.UI.Tab;

			/**
			 * Current active tab object.
			 */
			tab: Titanium.UI.Tab;

		}
		/**
		 * Fired when the tab is selected.
		 */
		interface Tab_selected_Event extends TabBaseEvent {
			/**
			 * Index of the current active tab.
			 */
			index: number;

			/**
			 * Index of the previous active tab.
			 */
			previousIndex: number;

			/**
			 * Previous active tab object.
			 */
			previousTab: Titanium.UI.Tab;

			/**
			 * Current active tab object.
			 */
			tab: Titanium.UI.Tab;

		}
		interface TabEventMap extends ProxyEventMap {
			click: Tab_click_Event;

			dblclick: Tab_dblclick_Event;

			doubletap: Tab_doubletap_Event;

			keypressed: Tab_keypressed_Event;

			longclick: Tab_longclick_Event;

			longpress: Tab_longpress_Event;

			pinch: Tab_pinch_Event;

			postlayout: Tab_postlayout_Event;

			selected: Tab_selected_Event;

			singletap: Tab_singletap_Event;

			swipe: Tab_swipe_Event;

			touchcancel: Tab_touchcancel_Event;

			touchend: Tab_touchend_Event;

			touchmove: Tab_touchmove_Event;

			touchstart: Tab_touchstart_Event;

			twofingertap: Tab_twofingertap_Event;

			unselected: Tab_unselected_Event;

		}
		/**
		 * A tab instance for a [TabGroup](Titanium.UI.TabGroup).
		 */
		class Tab extends Titanium.UI.View {
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
			 * `true` if this tab is active, `false` if it is not.
			 */
			active: boolean;

			/**
			 * Icon URL for this tab when active.
			 */
			activeIcon: string;

			/**
			 * Defines if the active icon property of the tab must be used as a mask.
			 */
			activeIconIsMask: boolean;

			/**
			 * Defines the color of the tab icon when it is active.
			 */
			activeTintColor: string;

			/**
			 * Defines the color of the title of tab when it's active.
			 */
			activeTitleColor: string | Titanium.UI.Color;

			/**
			 * Coordinate of the view about which to pivot an animation.
			 */
			anchorPoint: never;

			/**
			 * Current position of the view during an animation.
			 */
			readonly animatedCenter: never;

			/**
			 * Sets the color of the tab when it is inactive.
			 */
			backgroundColor: string | Titanium.UI.Color;

			/**
			 * Sets the color of the tab when it is focused.
			 */
			backgroundFocusedColor: string;

			/**
			 * A background gradient for the view.
			 */
			backgroundGradient: never;

			/**
			 * Size of the left end cap.
			 */
			backgroundLeftCap: never;

			/**
			 * Determines whether to tile a background across a view.
			 */
			backgroundRepeat: never;

			/**
			 * Size of the top end cap.
			 */
			backgroundTopCap: never;

			/**
			 * Badge value for this tab. `null` indicates no badge.
			 */
			badge: string;

			/**
			 * If this item displays a badge, this color will be used for the badge's background.
			 * If set to null, the default background color will be used instead.
			 */
			badgeColor: string | Titanium.UI.Color;

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
			 * View's bottom position, in platform-specific units.
			 */
			bottom: never;

			/**
			 * View's center position, in the parent view's coordinates.
			 */
			center: never;

			/**
			 * Array of this view's child views.
			 */
			readonly children: never;

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
			 * Icon URL for this tab.
			 */
			icon: string;

			/**
			 * The icon inset or outset for each edge.
			 */
			iconInsets: TabIconInsets;

			/**
			 * Defines if the icon property of the tab must be used as a mask.
			 */
			iconIsMask: boolean;

			/**
			 * Determines whether to keep the device screen on.
			 */
			keepScreenOn: never;

			/**
			 * Specifies how the view positions its children.
			 * One of: 'composite', 'vertical', or 'horizontal'.
			 */
			layout: never;

			/**
			 * View's left position, in platform-specific units.
			 */
			left: never;

			/**
			 * Opacity of this view, from 0.0 (transparent) to 1.0 (opaque). Defaults to 1.0 (opaque).
			 */
			opacity: never;

			/**
			 * The bounding box of the view relative to its parent, in system units.
			 */
			readonly rect: never;

			/**
			 * View's right position, in platform-specific units.
			 */
			right: never;

			/**
			 * The size of the view in system units.
			 */
			readonly size: never;

			/**
			 * Determines keyboard behavior when this view is focused. Defaults to <Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS>.
			 */
			softKeyboardOnFocus: never;

			/**
			 * Defines the color of the tab icon.
			 */
			tintColor: string;

			/**
			 * Title for this tab.
			 */
			title: string;

			/**
			 * Defines the color of the title of tab when it's inactive.
			 */
			titleColor: string | Titanium.UI.Color;

			/**
			 * Key identifying a string from the locale file to use for the tab title. Only one of `title` or `titleid` should be specified.
			 */
			titleid: string;

			/**
			 * The view's top position.
			 */
			top: never;

			/**
			 * Transformation matrix to apply to the view.
			 */
			transform: never;

			/**
			 * Determines whether the view is visible.
			 */
			visible: never;

			/**
			 * View's width, in platform-specific units.
			 */
			width: never;

			/**
			 * Root-level tab window.  All tabs must have at least one root-level tab window.
			 */
			window: Titanium.UI.Window;

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
			addEventListener<K extends keyof TabEventMap>(name: K, callback: (this: Titanium.UI.Tab, event: TabEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Animates this view.
			 */
			animate: never;

			/**
			 * Closes the top-level window for this tab.
			 */
			close(window: Titanium.UI.Window, options?: any): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof TabEventMap>(name: K, event?: TabEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Hides this view.
			 */
			hide: never;

			/**
			 * Opens a new window.
			 */
			open(window: Titanium.UI.Window, options?: openWindowParams): void;

			/**
			 * Closes all windows that are currently opened inside the tab.
			 */
			popToRootWindow(options?: AnimatedOptions): void;

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
			removeEventListener<K extends keyof TabEventMap>(name: K, callback: (this: Titanium.UI.Tab, event: TabEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt: never;

			/**
			 * Sets the root window that appears in the tab.
			 * @deprecated Set the value of the [window](Titanium.UI.Tab.window) property directly.
			 */
			setWindow(window: Titanium.UI.Window): void;

			/**
			 * Makes this view visible.
			 */
			show: never;

		}
	}
}
/**
 * Dictionary to specify edge insets for <Titanium.UI.Tab.iconInsets>. Difference from typical <Padding> is that `right` and `bottom` are ignored and calculated internally from `top`/`left` values.
 */
interface TabIconInsets extends Padding {
	/**
	 * Bottom padding/inset
	 */
	bottom: never;

	/**
	 * Left inset.
	 */
	left?: number;

	/**
	 * Right padding/inset
	 */
	right: never;

	/**
	 * Top inset.
	 */
	top?: number;

}
