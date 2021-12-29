declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.View
		 */
		interface ViewBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.View;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface View_click_Event extends ViewBaseEvent {
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
		interface View_dblclick_Event extends ViewBaseEvent {
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
		interface View_doubletap_Event extends ViewBaseEvent {
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
		interface View_focus_Event extends ViewBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface View_keypressed_Event extends ViewBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface View_longclick_Event extends ViewBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface View_longpress_Event extends ViewBaseEvent {
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
		interface View_pinch_Event extends ViewBaseEvent {
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
		interface View_postlayout_Event extends ViewBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface View_singletap_Event extends ViewBaseEvent {
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
		interface View_swipe_Event extends ViewBaseEvent {
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
		interface View_touchcancel_Event extends ViewBaseEvent {
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
		interface View_touchend_Event extends ViewBaseEvent {
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
		interface View_touchmove_Event extends ViewBaseEvent {
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
		interface View_touchstart_Event extends ViewBaseEvent {
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
		interface View_twofingertap_Event extends ViewBaseEvent {
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
		interface ViewEventMap extends ProxyEventMap {
			click: View_click_Event;

			dblclick: View_dblclick_Event;

			doubletap: View_doubletap_Event;

			focus: View_focus_Event;

			keypressed: View_keypressed_Event;

			longclick: View_longclick_Event;

			longpress: View_longpress_Event;

			pinch: View_pinch_Event;

			postlayout: View_postlayout_Event;

			singletap: View_singletap_Event;

			swipe: View_swipe_Event;

			touchcancel: View_touchcancel_Event;

			touchend: View_touchend_Event;

			touchmove: View_touchmove_Event;

			touchstart: View_touchstart_Event;

			twofingertap: View_twofingertap_Event;

		}
		/**
		 * An empty drawing surface or container
		 */
		class View extends Titanium.Proxy {
			/**
			 * Whether the view should be "hidden" from (i.e., ignored by) the accessibility service.
			 */
			accessibilityHidden: boolean;

			/**
			 * Briefly describes what performing an action (such as a click) on the view will do.
			 */
			accessibilityHint: string;

			/**
			 * A succint label identifying the view for the device's accessibility service.
			 */
			accessibilityLabel: string;

			/**
			 * A string describing the value (if any) of the view for the device's accessibility service.
			 */
			accessibilityValue: string;

			/**
			 * Coordinate of the view about which to pivot an animation.
			 */
			anchorPoint: Point;

			/**
			 * Current position of the view during an animation.
			 */
			readonly animatedCenter: Point;

			/**
			 * Background color of the view, as a color name or hex triplet.
			 */
			backgroundColor: string | Titanium.UI.Color;

			/**
			 * Disabled background color of the view, as a color name or hex triplet.
			 */
			backgroundDisabledColor: string;

			/**
			 * Disabled background image for the view, specified as a local file path or URL.
			 */
			backgroundDisabledImage: string;

			/**
			 * Focused background color of the view, as a color name or hex triplet.
			 */
			backgroundFocusedColor: string;

			/**
			 * Focused background image for the view, specified as a local file path or URL.
			 */
			backgroundFocusedImage: string;

			/**
			 * A background gradient for the view.
			 */
			backgroundGradient: Gradient;

			/**
			 * Background image for the view, specified as a local file path or URL.
			 */
			backgroundImage: string;

			/**
			 * Size of the left end cap.
			 */
			backgroundLeftCap: number;

			/**
			 * Determines whether to tile a background across a view.
			 */
			backgroundRepeat: boolean;

			/**
			 * Selected background color of the view, as a color name or hex triplet.
			 */
			backgroundSelectedColor: string | Titanium.UI.Color;

			/**
			 * Selected background image url for the view, specified as a local file path or URL.
			 */
			backgroundSelectedImage: string;

			/**
			 * Size of the top end cap.
			 */
			backgroundTopCap: number;

			/**
			 * Border color of the view, as a color name or hex triplet.
			 */
			borderColor: string | Titanium.UI.Color;

			/**
			 * Radius for the rounded corners of the view's border.
			 */
			borderRadius: number | string | number[] | string[];

			/**
			 * Border width of the view.
			 */
			borderWidth: number;

			/**
			 * View's bottom position, in platform-specific units.
			 */
			bottom: number | string;

			/**
			 * View's center position, in the parent view's coordinates.
			 */
			center: Point;

			/**
			 * Array of this view's child views.
			 */
			readonly children: Titanium.UI.View[];

			/**
			 * View's clipping behavior.
			 */
			clipMode: number;

			/**
			 * Base elevation of the view relative to its parent in pixels.
			 */
			elevation: number;

			/**
			 * Discards touch related events if another app's system overlay covers the view.
			 */
			filterTouchesWhenObscured: boolean;

			/**
			 * Whether view should be focusable while navigating with the trackball.
			 */
			focusable: boolean;

			/**
			 * View height, in platform-specific units.
			 */
			height: number | string;

			/**
			 * Sets the behavior when hiding an object to release or keep the free space
			 */
			hiddenBehavior: number;

			/**
			 * Adds a horizontal parallax effect to the view
			 */
			horizontalMotionEffect: MinMaxOptions;

			/**
			 * Determines whether the layout has wrapping behavior.
			 */
			horizontalWrap: boolean;

			/**
			 * View's identifier.
			 */
			id?: string;

			/**
			 * Determines whether to keep the device screen on.
			 */
			keepScreenOn: boolean;

			/**
			 * Specifies how the view positions its children.
			 * One of: 'composite', 'vertical', or 'horizontal'.
			 */
			layout: string;

			/**
			 * View's left position, in platform-specific units.
			 */
			left: number | string;

			/**
			 * Opacity of this view, from 0.0 (transparent) to 1.0 (opaque). Defaults to 1.0 (opaque).
			 */
			opacity: number;

			/**
			 * When on, animate call overrides current animation if applicable.
			 */
			overrideCurrentAnimation: boolean;

			/**
			 * The preview context used in the 3D-Touch feature "Peek and Pop".
			 */
			previewContext: Titanium.UI.iOS.PreviewContext;

			/**
			 * Background color of the wrapper view when this view is used as either <Titanium.UI.ListView.pullView> or <Titanium.UI.TableView.headerPullView>.
			 * Defaults to `undefined`. Results in a light grey background color on the wrapper view.
			 */
			pullBackgroundColor: string | Titanium.UI.Color;

			/**
			 * The bounding box of the view relative to its parent, in system units.
			 */
			readonly rect: DimensionWithAbsolutes;

			/**
			 * View's right position, in platform-specific units.
			 */
			right: number | string;

			/**
			 * Clockwise 2D rotation of the view in degrees.
			 */
			rotation: number;

			/**
			 * Clockwise rotation of the view in degrees (x-axis).
			 */
			rotationX: number;

			/**
			 * Clockwise rotation of the view in degrees (y-axis).
			 */
			rotationY: number;

			/**
			 * Scaling of the view in x-axis in pixels.
			 */
			scaleX: number;

			/**
			 * Scaling of the view in y-axis in pixels.
			 */
			scaleY: number;

			/**
			 * The size of the view in system units.
			 */
			readonly size: Dimension;

			/**
			 * Determines keyboard behavior when this view is focused. Defaults to <Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS>.
			 */
			softKeyboardOnFocus: number;

			/**
			 * The view's tintColor
			 */
			tintColor: string | Titanium.UI.Color;

			/**
			 * The view's top position.
			 */
			top: number | string;

			/**
			 * Determines whether view should receive touch events.
			 */
			touchEnabled: boolean;

			/**
			 * A material design visual construct that provides an instantaneous visual confirmation of touch point.
			 */
			touchFeedback: boolean;

			/**
			 * Optional touch feedback ripple color. This has no effect unless `touchFeedback` is true.
			 */
			touchFeedbackColor: string;

			/**
			 * Transformation matrix to apply to the view.
			 */
			transform: Titanium.UI.Matrix2D | Titanium.UI.Matrix3D;

			/**
			 * A name to identify this view in activity transition.
			 */
			transitionName: string;

			/**
			 * Horizontal location of the view relative to its left position in pixels.
			 */
			translationX: number;

			/**
			 * Vertical location of the view relative to its top position in pixels.
			 */
			translationY: number;

			/**
			 * Depth of the view relative to its elevation in pixels.
			 */
			translationZ: number;

			/**
			 * Adds a vertical parallax effect to the view
			 */
			verticalMotionEffect: MinMaxOptions;

			/**
			 * Determines the color of the shadow.
			 */
			viewShadowColor: string | Titanium.UI.Color;

			/**
			 * Determines the offset for the shadow of the view.
			 */
			viewShadowOffset: Point;

			/**
			 * Determines the blur radius used to create the shadow.
			 */
			viewShadowRadius: number | string;

			/**
			 * Determines whether the view is visible.
			 */
			visible: boolean;

			/**
			 * View's width, in platform-specific units.
			 */
			width: number | string;

			/**
			 * Z-index stack order position, relative to other sibling views.
			 */
			zIndex: number;

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add(view: Titanium.UI.View | Titanium.UI.View[]): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof ViewEventMap>(name: K, callback: (this: Titanium.UI.View, event: ViewEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Animates this view.
			 */
			animate(animation: Titanium.UI.Animation | Dictionary<Titanium.UI.Animation>, callback?: (param0: any) => void): void;

			/**
			 * Removes all previously added motion effects.
			 */
			clearMotionEffects(): void;

			/**
			 * Translates a point from this view's coordinate system to another view's coordinate system.
			 */
			convertPointToView(point: Point, destinationView: Titanium.UI.View): Point;

			/**
			 * Finishes a batch update of the View's layout properties and schedules a layout pass of the
			 * view tree.
			 * @deprecated Use the [applyProperties](Titanium.Proxy.applyProperties) method to batch-update layout properties.
			 */
			finishLayout: never;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof ViewEventMap>(name: K, event?: ViewEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Returns the matching view of a given view ID.
			 */
			getViewById(id: string): Titanium.UI.View;

			/**
			 * Hides this view.
			 */
			hide(options?: AnimatedOptions): void;

			/**
			 * Inserts a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			insertAt(params: ViewPositionOptions): void;

			/**
			 * Removes a child view from this view's hierarchy.
			 */
			remove(view: Titanium.UI.View): void;

			/**
			 * Removes all child views from this view's hierarchy.
			 */
			removeAllChildren(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof ViewEventMap>(name: K, callback: (this: Titanium.UI.View, event: ViewEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt(params: ViewPositionOptions): void;

			/**
			 * Makes this view visible.
			 */
			show(options?: AnimatedOptions): void;

			/**
			 * Starts a batch update of this view's layout properties.
			 * @deprecated Use the [Titanium.Proxy.applyProperties](Titanium.Proxy.applyProperties) method to batch-update layout properties.
			 */
			startLayout: never;

			/**
			 * Returns an image of the rendered view, as a Blob.
			 */
			toImage(callback?: (param0: Titanium.Blob) => void, honorScaleFactor?: boolean): Titanium.Blob;

			/**
			 * Performs a batch update of all supplied layout properties and schedules a layout pass after
			 * they have been updated.
			 * @deprecated Use the [Titanium.Proxy.applyProperties](Titanium.Proxy.applyProperties) method to batch-update layout properties.
			 */
			updateLayout: never;

		}
	}
}
/**
 * A simple object defining a color gradient.
 */
interface Gradient {
	/**
	 * Set to `true` to continue filling with the final color beyond the `endPoint`.
	 */
	backfillEnd?: boolean;

	/**
	 * Set to `true` to continue filling with the starting color beyond the `startPoint`.
	 */
	backfillStart?: boolean;

	/**
	 * An array of colors, as a color name or hex triplet.
	 */
	colors?: string[] | GradientColorRef[];

	/**
	 * End point for the gradient.
	 */
	endPoint?: Point;

	/**
	 * For a radial gradient, the radius at the `endPoint`.
	 */
	endRadius?: number;

	/**
	 * Start point for the gradient.
	 */
	startPoint?: Point;

	/**
	 * For a radial gradient, the radius at the `startPoint`.
	 */
	startRadius?: number;

	/**
	 * Type of gradient, either 'linear' or 'radial'.
	 */
	type?: string;

}
/**
 * A simple object consisting of a color and an offset.
 */
interface GradientColorRef {
	/**
	 * Color value at this point in the gradient, as a color name or hex triplet.
	 */
	color?: string | Titanium.UI.Color;

	/**
	 * The color's normalized position within the gradient, ranging from 0 (start) to 1 (end).
	 */
	offset?: number;

}
/**
 * An object for setting `min`/`max` value pairs.
 */
interface MinMaxOptions {
	/**
	 * Maximum value
	 */
	max?: number;

	/**
	 * Minimum value
	 */
	min?: number;

}
/**
 * A pair of coordinates used to describe the location of a <Titanium.UI.View>.
 */
interface Point {
	/**
	 * The x-axis coordinate of this point.
	 */
	x?: number | string;

	/**
	 * The y-axis coordinate of this point.
	 */
	y?: number | string;

}
/**
 * Pass an object with the following key-value pairs:
 *   * `view` (Titanium.UI.View): View to insert
 *   * `position` (Number): Position in the [children](Titanium.UI.View.children) array of
 *     the view elment to replace.
 */
interface ViewPositionOptions {
	/**
	 * Position in the [children](Titanium.UI.View.children) array of the view element to replace.
	 */
	position?: number;

	/**
	 * View to insert. Required.
	 */
	view: Titanium.UI.View;

}
