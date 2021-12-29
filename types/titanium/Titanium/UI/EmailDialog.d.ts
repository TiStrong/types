declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.EmailDialog
		 */
		interface EmailDialogBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.EmailDialog;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface EmailDialog_click_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_dblclick_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_doubletap_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_focus_Event extends EmailDialogBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface EmailDialog_keypressed_Event extends EmailDialogBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface EmailDialog_longclick_Event extends EmailDialogBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface EmailDialog_longpress_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_pinch_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_postlayout_Event extends EmailDialogBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface EmailDialog_singletap_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_swipe_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_touchcancel_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_touchend_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_touchmove_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_touchstart_Event extends EmailDialogBaseEvent {
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
		interface EmailDialog_twofingertap_Event extends EmailDialogBaseEvent {
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
		 * Fired when this email dialog has completed sending an email.
		 */
		interface EmailDialog_complete_Event extends EmailDialogBaseEvent {
			/**
			 * Error code.
			 * Error code will be 0 if `success` is `true`, nonzero otherwise. If the error
			 * was generated by the operating system, that system's error value is used.
			 * Otherwise, this value will be -1.
			 */
			code: number;

			/**
			 * Error message, if any returned. Will be undefined if `success` is `true`.
			 */
			error: string;

			/**
			 * Status of the email send process.
			 * The `SAVED` and `CANCELLED` constants are iOS only.
			 * On Android, this property will return `SENT` when the user discards or saves
			 * a message.
			 */
			result: number;

			/**
			 * Indicates if the email was handled successfully.
			 * Returns `true` if request succeeded, `false` otherwise. Note that emails being
			 * deleted or saved for later do count as success.
			 */
			success: boolean;

		}
		interface EmailDialogEventMap extends ProxyEventMap {
			click: EmailDialog_click_Event;

			complete: EmailDialog_complete_Event;

			dblclick: EmailDialog_dblclick_Event;

			doubletap: EmailDialog_doubletap_Event;

			focus: EmailDialog_focus_Event;

			keypressed: EmailDialog_keypressed_Event;

			longclick: EmailDialog_longclick_Event;

			longpress: EmailDialog_longpress_Event;

			pinch: EmailDialog_pinch_Event;

			postlayout: EmailDialog_postlayout_Event;

			singletap: EmailDialog_singletap_Event;

			swipe: EmailDialog_swipe_Event;

			touchcancel: EmailDialog_touchcancel_Event;

			touchend: EmailDialog_touchend_Event;

			touchmove: EmailDialog_touchmove_Event;

			touchstart: EmailDialog_touchstart_Event;

			twofingertap: EmailDialog_twofingertap_Event;

		}
		/**
		 * An email dialog is a modal window that allows users to compose and send an email.
		 */
		class EmailDialog extends Titanium.UI.View {
			/**
			 * Constant for the `CANCELLED` status result. On Android, this property exists but is not used.
			 */
			readonly CANCELLED: number;

			/**
			 * Constant for the `FAILED` status result.
			 */
			readonly FAILED: number;

			/**
			 * Constant for the `SAVED` status result. On Android, this property exists but is not used.
			 */
			readonly SAVED: number;

			/**
			 * Constant for the `SENT` status result.
			 */
			readonly SENT: number;

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
			 * Bar color of the email dialog window, as a color name or hex triplet.
			 */
			barColor: string | Titanium.UI.Color;

			/**
			 * Recipients of the email included via the `BCC` (Blind Carbon Copy) field.
			 */
			bccRecipients: string[];

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
			 * Recipients of the email included via the `CC` (Carbon Copy) field.
			 */
			ccRecipients: string[];

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
			 * Determines whether the email message, specifically the contents of
			 * [messageBody](Titanium.UI.EmailDialog.messageBody), should be sent as HTML content type
			 * rather than plain text.
			 */
			html: boolean;

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
			 * Email message body.
			 */
			messageBody: string;

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
			 * Subject line for the email.
			 */
			subject: string;

			/**
			 * The view's tintColor
			 */
			tintColor: never;

			/**
			 * Recipients of the email included via the main `TO` field.
			 */
			toRecipients: string[];

			/**
			 * The view's top position.
			 */
			top: never;

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
			 * View's width, in platform-specific units.
			 */
			width: never;

			/**
			 * Z-index stack order position, relative to other sibling views.
			 */
			zIndex: never;

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add: never;

			/**
			 * Adds an attachment.
			 */
			addAttachment(attachment: Titanium.Blob | Titanium.Filesystem.File): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof EmailDialogEventMap>(name: K, callback: (this: Titanium.UI.EmailDialog, event: EmailDialogEventMap[K]) => void): void;

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
			fireEvent<K extends keyof EmailDialogEventMap>(name: K, event?: EmailDialogEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Indicates whether sending email is supported by the system.
			 */
			isSupported(): boolean;

			/**
			 * Opens this email dialog.
			 */
			open(options?: AnimatedOptions): void;

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
			removeEventListener<K extends keyof EmailDialogEventMap>(name: K, callback: (this: Titanium.UI.EmailDialog, event: EmailDialogEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Returns an image of the rendered view, as a Blob.
			 */
			toImage: never;

		}
	}
}
