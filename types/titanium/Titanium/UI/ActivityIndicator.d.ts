declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.ActivityIndicator
		 */
		interface ActivityIndicatorBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.ActivityIndicator;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface ActivityIndicator_click_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_dblclick_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_doubletap_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_focus_Event extends ActivityIndicatorBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface ActivityIndicator_keypressed_Event extends ActivityIndicatorBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface ActivityIndicator_longclick_Event extends ActivityIndicatorBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface ActivityIndicator_longpress_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_pinch_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_postlayout_Event extends ActivityIndicatorBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface ActivityIndicator_singletap_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_swipe_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_touchcancel_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_touchend_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_touchmove_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_touchstart_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicator_twofingertap_Event extends ActivityIndicatorBaseEvent {
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
		interface ActivityIndicatorEventMap extends ProxyEventMap {
			click: ActivityIndicator_click_Event;

			dblclick: ActivityIndicator_dblclick_Event;

			doubletap: ActivityIndicator_doubletap_Event;

			focus: ActivityIndicator_focus_Event;

			keypressed: ActivityIndicator_keypressed_Event;

			longclick: ActivityIndicator_longclick_Event;

			longpress: ActivityIndicator_longpress_Event;

			pinch: ActivityIndicator_pinch_Event;

			postlayout: ActivityIndicator_postlayout_Event;

			singletap: ActivityIndicator_singletap_Event;

			swipe: ActivityIndicator_swipe_Event;

			touchcancel: ActivityIndicator_touchcancel_Event;

			touchend: ActivityIndicator_touchend_Event;

			touchmove: ActivityIndicator_touchmove_Event;

			touchstart: ActivityIndicator_touchstart_Event;

			twofingertap: ActivityIndicator_twofingertap_Event;

		}
		/**
		 * An activity indicator that lets the user know an action is taking place.
		 */
		class ActivityIndicator extends Titanium.UI.View {
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
			 * Coordinate of the view about which to pivot an animation.
			 */
			anchorPoint: never;

			/**
			 * Current position of the view during an animation.
			 */
			readonly animatedCenter: never;

			/**
			 * Background color of the view, as a color name or hex triplet.
			 */
			backgroundColor: never;

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
			 * Bottom position of the view.
			 */
			bottom: number | string;

			/**
			 * View's center position, in the parent view's coordinates.
			 */
			center: never;

			/**
			 * Array of this view's child views.
			 */
			readonly children: never;

			/**
			 * View's clipping behavior.
			 */
			clipMode: never;

			/**
			 * Color of the message text, as a color name or hex triplet.
			 */
			color: string | Titanium.UI.Color;

			/**
			 * Whether view should be focusable while navigating with the trackball.
			 */
			focusable: never;

			/**
			 * Font used for the message text.
			 */
			font: Font;

			/**
			 * Width of the view. Only accepts value of <Titanium.UI.SIZE>, which must be explicitly set in order to
			 * display the message and to position the view correctly.
			 */
			height: string;

			/**
			 * Determines whether the layout has wrapping behavior.
			 */
			horizontalWrap: never;

			/**
			 * Color of the animated indicator.
			 */
			indicatorColor: string | Titanium.UI.Color;

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
			 * Left position of the view.
			 */
			left: number | string;

			/**
			 * Message text.
			 */
			message: string;

			/**
			 * Key identifying a string in the locale file to use for the message text.
			 */
			messageid: string;

			/**
			 * Opacity of this view, from 0.0 (transparent) to 1.0 (opaque). Defaults to 1.0 (opaque).
			 */
			opacity: never;

			/**
			 * When on, animate call overrides current animation if applicable.
			 */
			overrideCurrentAnimation: never;

			/**
			 * Background color of the wrapper view when this view is used as either <Titanium.UI.ListView.pullView> or <Titanium.UI.TableView.headerPullView>.
			 * Defaults to `undefined`. Results in a light grey background color on the wrapper view.
			 */
			pullBackgroundColor: never;

			/**
			 * The bounding box of the view relative to its parent, in system units.
			 */
			readonly rect: never;

			/**
			 * Right position of the view.
			 */
			right: number | string;

			/**
			 * The size of the view in system units.
			 */
			readonly size: never;

			/**
			 * Determines keyboard behavior when this view is focused. Defaults to <Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS>.
			 */
			softKeyboardOnFocus: never;

			/**
			 * The style for the activity indicator.
			 */
			style: number;

			/**
			 * The view's tintColor
			 */
			tintColor: never;

			/**
			 * Top position of the view.
			 */
			top: number | string;

			/**
			 * Determines whether view should receive touch events.
			 */
			touchEnabled: never;

			/**
			 * Transformation matrix to apply to the view.
			 */
			transform: never;

			/**
			 * Determines the color of the shadow.
			 */
			viewShadowColor: never;

			/**
			 * Determines the offset for the shadow of the view.
			 */
			viewShadowOffset: never;

			/**
			 * Determines the blur radius used to create the shadow.
			 */
			viewShadowRadius: never;

			/**
			 * Determines whether the view is visible.
			 */
			visible: never;

			/**
			 * Width of the view. Only accepts value of <Titanium.UI.SIZE>, which must be explicitly set in order to
			 * display the message and to position the view correctly.
			 */
			width: string;

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
			addEventListener<K extends keyof ActivityIndicatorEventMap>(name: K, callback: (this: Titanium.UI.ActivityIndicator, event: ActivityIndicatorEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Animates this view.
			 */
			animate: never;

			/**
			 * Translates a point from this view's coordinate system to another view's coordinate system.
			 */
			convertPointToView: never;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof ActivityIndicatorEventMap>(name: K, event?: ActivityIndicatorEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Hides the activity indicator and stops the animation.
			 */
			hide(options?: AnimatedOptions): void;

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
			removeEventListener<K extends keyof ActivityIndicatorEventMap>(name: K, callback: (this: Titanium.UI.ActivityIndicator, event: ActivityIndicatorEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt: never;

			/**
			 * Shows the activity indicator and starts the animation.
			 */
			show(options?: AnimatedOptions): void;

			/**
			 * Returns an image of the rendered view, as a Blob.
			 */
			toImage: never;

		}
	}
}
