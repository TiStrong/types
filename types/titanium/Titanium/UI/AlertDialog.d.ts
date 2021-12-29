declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.AlertDialog
		 */
		interface AlertDialogBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.AlertDialog;

		}
		/**
		 * Fired when a button in the dialog is clicked.
		 */
		interface AlertDialog_click_Event extends AlertDialogBaseEvent {
			/**
			 * Boolean type on Android; Number on iOS.
			 * On Android, indicates whether the cancel button was clicked, in which
			 * case returns `true`.
			 * On iOS, the value of the [cancel](Titanium.UI.AlertDialog.cancel) property is
			 * returned, if defined, or `-1` otherwise. Also note that the cancel button may not be
			 * used on the iPad, because iOS will internally decide whether or not to show it in
			 * the current context (e.g. in a popover).
			 * See the `Three-button Alert Dialog` example for a cross-platform workaround for this
			 * parity issue.
			 */
			cancel: boolean | number;

			/**
			 * Index of the button that was clicked.
			 */
			index: number;

			/**
			 * Value of login field if dialog `style` property is defined as
			 * <Titanium.UI.iOS.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT>.
			 */
			login: string;

			/**
			 * Value of password field if dialog `style` property is defined as
			 * <Titanium.UI.iOS.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT>.
			 */
			password: string;

			/**
			 * Value of text field if dialog `style` property is defined as
			 * <Titanium.UI.iOS.AlertDialogStyle.PLAIN_TEXT_INPUT> or
			 * <Titanium.UI.iOS.AlertDialogStyle.SECURE_TEXT_INPUT>.
			 */
			text: string;

		}
		/**
		 * Fired when the device detects a double click against the view.
		 */
		interface AlertDialog_dblclick_Event extends AlertDialogBaseEvent {
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
		interface AlertDialog_doubletap_Event extends AlertDialogBaseEvent {
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
		interface AlertDialog_focus_Event extends AlertDialogBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface AlertDialog_keypressed_Event extends AlertDialogBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface AlertDialog_longclick_Event extends AlertDialogBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface AlertDialog_longpress_Event extends AlertDialogBaseEvent {
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
		interface AlertDialog_pinch_Event extends AlertDialogBaseEvent {
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
		interface AlertDialog_postlayout_Event extends AlertDialogBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface AlertDialog_singletap_Event extends AlertDialogBaseEvent {
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
		interface AlertDialog_swipe_Event extends AlertDialogBaseEvent {
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
		interface AlertDialog_touchcancel_Event extends AlertDialogBaseEvent {
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
		interface AlertDialog_touchend_Event extends AlertDialogBaseEvent {
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
		interface AlertDialog_touchmove_Event extends AlertDialogBaseEvent {
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
		interface AlertDialog_touchstart_Event extends AlertDialogBaseEvent {
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
		interface AlertDialog_twofingertap_Event extends AlertDialogBaseEvent {
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
		interface AlertDialogEventMap extends ProxyEventMap {
			click: AlertDialog_click_Event;

			dblclick: AlertDialog_dblclick_Event;

			doubletap: AlertDialog_doubletap_Event;

			focus: AlertDialog_focus_Event;

			keypressed: AlertDialog_keypressed_Event;

			longclick: AlertDialog_longclick_Event;

			longpress: AlertDialog_longpress_Event;

			pinch: AlertDialog_pinch_Event;

			postlayout: AlertDialog_postlayout_Event;

			singletap: AlertDialog_singletap_Event;

			swipe: AlertDialog_swipe_Event;

			touchcancel: AlertDialog_touchcancel_Event;

			touchend: AlertDialog_touchend_Event;

			touchmove: AlertDialog_touchmove_Event;

			touchstart: AlertDialog_touchstart_Event;

			twofingertap: AlertDialog_twofingertap_Event;

		}
		/**
		 * An alert dialog is a modal view that includes an optional title, a message and buttons,
		 * positioned in the middle of the display.
		 */
		class AlertDialog extends Titanium.UI.View {
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
			 * View to load inside the message area, to create a custom layout.
			 */
			androidView: Titanium.UI.View;

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
			 * View's bottom position, in platform-specific units.
			 */
			bottom: never;

			/**
			 * Setting this to true requires the end-user to click a dialog button to close the dialog.
			 */
			buttonClickRequired: boolean;

			/**
			 * Name of each button to create.
			 */
			buttonNames: string[];

			/**
			 * Index to define the cancel button.
			 */
			cancel: number;

			/**
			 * When this is set to `true`, the dialog is canceled when touched outside the window's bounds.
			 */
			canceledOnTouchOutside: boolean;

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
			 * Index to define the destructive button.
			 */
			destructive: number;

			/**
			 * Whether view should be focusable while navigating with the trackball.
			 */
			focusable: never;

			/**
			 * View height, in platform-specific units.
			 */
			height: never;

			/**
			 * Hint text of the text field inside the dialog.
			 */
			hintText: string;

			/**
			 * Key identifying a string from the locale file to use for the
			 * [hintText](Titanium.UI.AlertDialog.hintText) property.
			 */
			hinttextid: string;

			/**
			 * Determines whether the layout has wrapping behavior.
			 */
			horizontalWrap: never;

			/**
			 * Determines whether to keep the device screen on.
			 */
			keepScreenOn: never;

			/**
			 * Keyboard appearance to be displayed when the text field inside the dialog is focused.
			 */
			keyboardAppearance: number;

			/**
			 * Keyboard type to display when this text field inside the dialog is focused.
			 */
			keyboardType: number;

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
			 * Hint text of the login text field inside the dialog.
			 */
			loginHintText: string;

			/**
			 * Keyboard type to display when this text field inside the dialog is focused.
			 */
			loginKeyboardType: number;

			/**
			 * Placeholder of the login text field inside the dialog.
			 * @deprecated Use [Titanium.UI.AlertDialog.loginHintText](Titanium.UI.AlertDialog.loginHintText) instead.
			 */
			loginPlaceholder: string;

			/**
			 * Specifies the text to display on the keyboard `Return` key when this field is focused.
			 */
			loginReturnKeyType: number;

			/**
			 * Value of the login text field inside the dialog.
			 */
			loginValue: string;

			/**
			 * Key identifying a string from the locale file to use for the
			 * [loginHintText](Titanium.UI.AlertDialog.loginHintText) property.
			 */
			loginhinttextid: string;

			/**
			 * Dialog message.
			 */
			message: string;

			/**
			 * Key identifying a string in the locale file to use for the message text.
			 */
			messageid: string;

			/**
			 * Text for the `OK` button.
			 */
			ok: string;

			/**
			 * Key identifying a string in the locale file to use for the `ok` text.
			 */
			okid: string;

			/**
			 * Opacity of this view, from 0.0 (transparent) to 1.0 (opaque). Defaults to 1.0 (opaque).
			 */
			opacity: never;

			/**
			 * When on, animate call overrides current animation if applicable.
			 */
			overrideCurrentAnimation: never;

			/**
			 * Hint text of the password text field inside the dialog.
			 */
			passwordHintText: string;

			/**
			 * Keyboard type to display when this text field inside the dialog is focused.
			 */
			passwordKeyboardType: number;

			/**
			 * Placeholder of the password text field inside the dialog.
			 * @deprecated Use [Titanium.UI.AlertDialog.passwordHintText](Titanium.UI.AlertDialog.passwordHintText) instead.
			 */
			passwordPlaceholder: string;

			/**
			 * Specifies the text to display on the keyboard `Return` key when this field is focused.
			 */
			passwordReturnKeyType: number;

			/**
			 * Value of the password text field inside the dialog.
			 */
			passwordValue: string;

			/**
			 * Key identifying a string from the locale file to use for the
			 * [passwordHintText](Titanium.UI.AlertDialog.passwordHintText) property.
			 */
			passwordhinttextid: string;

			/**
			 * Boolean value indicating if the alert dialog should only be cancelled by user gesture or by hide method.
			 */
			persistent: boolean;

			/**
			 * Placeholder of the text field inside the dialog.
			 * @deprecated Use [Titanium.UI.AlertDialog.hintText](Titanium.UI.AlertDialog.hintText) instead.
			 */
			placeholder: string;

			/**
			 * Index to define the preferred button.
			 */
			preferred: number;

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
			 * Specifies the text to display on the keyboard `Return` key when this field is focused.
			 */
			returnKeyType: number;

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
			 * The style for the alert dialog.
			 */
			style: number;

			/**
			 * The tint-color of the dialog.
			 */
			tintColor: string | Titanium.UI.Color;

			/**
			 * Title of the dialog.
			 */
			title: string;

			/**
			 * Key identifying a string in the locale file to use for the title text.
			 */
			titleid: string;

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
			 * Value of the text field inside the dialog.
			 */
			value: string;

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
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof AlertDialogEventMap>(name: K, callback: (this: Titanium.UI.AlertDialog, event: AlertDialogEventMap[K]) => void): void;

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
			fireEvent<K extends keyof AlertDialogEventMap>(name: K, event?: AlertDialogEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Hides this dialog.
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
			removeEventListener<K extends keyof AlertDialogEventMap>(name: K, callback: (this: Titanium.UI.AlertDialog, event: AlertDialogEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Shows this dialog.
			 */
			show(options?: AnimatedOptions): void;

			/**
			 * Returns an image of the rendered view, as a Blob.
			 */
			toImage: never;

		}
	}
}
