declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.TextField
		 */
		interface TextFieldBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.TextField;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface TextField_click_Event extends TextFieldBaseEvent {
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
		interface TextField_dblclick_Event extends TextFieldBaseEvent {
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
		interface TextField_doubletap_Event extends TextFieldBaseEvent {
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
		 * Fired when the field gains focus.
		 */
		interface TextField_focus_Event extends TextFieldBaseEvent {
			/**
			 * Value of the field.
			 */
			value: string;

		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface TextField_keypressed_Event extends TextFieldBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface TextField_longclick_Event extends TextFieldBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface TextField_longpress_Event extends TextFieldBaseEvent {
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
		interface TextField_pinch_Event extends TextFieldBaseEvent {
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
		interface TextField_postlayout_Event extends TextFieldBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface TextField_singletap_Event extends TextFieldBaseEvent {
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
		interface TextField_swipe_Event extends TextFieldBaseEvent {
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
		interface TextField_touchcancel_Event extends TextFieldBaseEvent {
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
		interface TextField_touchend_Event extends TextFieldBaseEvent {
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
		interface TextField_touchmove_Event extends TextFieldBaseEvent {
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
		interface TextField_touchstart_Event extends TextFieldBaseEvent {
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
		interface TextField_twofingertap_Event extends TextFieldBaseEvent {
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
		 * Fired when the field loses focus.
		 */
		interface TextField_blur_Event extends TextFieldBaseEvent {
			/**
			 * Value of the field.
			 */
			value: string;

		}
		/**
		 * Fired when the field value changes.
		 */
		interface TextField_change_Event extends TextFieldBaseEvent {
			/**
			 * New value of the field.
			 */
			value: string;

		}
		/**
		 * Fired when the return key is pressed on the keyboard.
		 */
		interface TextField_return_Event extends TextFieldBaseEvent {
			/**
			 * Value of this text area.
			 */
			value: string;

		}
		interface TextFieldEventMap extends ProxyEventMap {
			blur: TextField_blur_Event;

			change: TextField_change_Event;

			click: TextField_click_Event;

			dblclick: TextField_dblclick_Event;

			doubletap: TextField_doubletap_Event;

			focus: TextField_focus_Event;

			keypressed: TextField_keypressed_Event;

			longclick: TextField_longclick_Event;

			longpress: TextField_longpress_Event;

			pinch: TextField_pinch_Event;

			postlayout: TextField_postlayout_Event;

			return: TextField_return_Event;

			singletap: TextField_singletap_Event;

			swipe: TextField_swipe_Event;

			touchcancel: TextField_touchcancel_Event;

			touchend: TextField_touchend_Event;

			touchmove: TextField_touchmove_Event;

			touchstart: TextField_touchstart_Event;

			twofingertap: TextField_twofingertap_Event;

		}
		/**
		 * A single line text field.
		 */
		class TextField extends Titanium.UI.View {
			/**
			 * Determines the appearance of the keyboard displayed when this field is focused.
			 * @deprecated Use [Titanium.UI.TextField.keyboardAppearance](Titanium.UI.TextField.keyboardAppearance) instead.
			 */
			appearance: never;

			/**
			 * Hint text attributed string.
			 */
			attributedHintText: Titanium.UI.AttributedString;

			/**
			 * TextField attributed string.
			 */
			attributedString: Titanium.UI.AttributedString;

			/**
			 * Automatically convert text to clickable links.
			 */
			autoLink: number;

			/**
			 * Determines how text is capitalized during typing.
			 */
			autocapitalization: number;

			/**
			 * Determines whether to automatically correct text entered into this text field.
			 */
			autocorrect: boolean;

			/**
			 * Sets the autofill type for the text field.
			 */
			autofillType: string;

			/**
			 * Border style for the field.
			 */
			borderStyle: number;

			/**
			 * Array of this view's child views.
			 */
			readonly children: never;

			/**
			 * Determines when the clear button is displayed.
			 */
			clearButtonMode: number;

			/**
			 * Determines whether the value of this text field should be cleared when it is focused.
			 */
			clearOnEdit: boolean;

			/**
			 * Color of the text in this text field, as a color name or hex triplet.
			 */
			color: string | Titanium.UI.Color;

			/**
			 * Determines whether this field can be edited.
			 */
			editable: boolean;

			/**
			 * Determines whether an ellipsis (`...`) should be used to indicate truncated text.
			 */
			ellipsize: boolean;

			/**
			 * Determines if user can copy or cut text from the text field.
			 */
			enableCopy: boolean;

			/**
			 * Determines whether the return key is enabled automatically when there is text in this text
			 * field.
			 */
			enableReturnKey: boolean;

			/**
			 * Determines whether this TextField has focus.
			 */
			readonly focused: boolean;

			/**
			 * Font to use for text.
			 */
			font: Font;

			/**
			 * Leave some space above the keyboard in landscape mode or not.
			 */
			fullscreen: boolean;

			/**
			 * Hint text to display when the field is empty.
			 */
			hintText: string;

			/**
			 * Hint text color to display when the field is empty.
			 */
			hintTextColor: string | Titanium.UI.Color;

			/**
			 * Hint type to display on the text field.
			 */
			hintType: number;

			/**
			 * Key identifying a string from the locale file to use for the
			 * [hintText](Titanium.UI.TextField.hintText) property.
			 */
			hinttextid: string;

			/**
			 * Input type to accept in the text field. Also influences the Keyboard type to display.
			 */
			inputType: number[];

			/**
			 * Determines the appearance of the keyboard displayed when this field is focused.
			 */
			keyboardAppearance: number;

			/**
			 * Array of toolbar button objects or a [toolbar](Titanium.UI.Toolbar) to be used when the
			 * keyboard is displayed.
			 */
			keyboardToolbar: Titanium.UI.View[] | Titanium.UI.Toolbar;

			/**
			 * Color of the keyboard toolbar if keyboardToolbar is an array, as a color name or hex triplet.
			 */
			keyboardToolbarColor: string | Titanium.UI.Color;

			/**
			 * Height of the keyboard toolbar if keyboardToolbar is an array.
			 */
			keyboardToolbarHeight: number;

			/**
			 * Keyboard type to display when this text field is focused.
			 */
			keyboardType: number;

			/**
			 * Left button view to display in the `TextField`.
			 */
			leftButton: Titanium.UI.View;

			/**
			 * Determines when to display the left button view.
			 */
			leftButtonMode: number;

			/**
			 * Padding between the left button and the edge of the field.
			 */
			leftButtonPadding: number;

			/**
			 * Maximum length of text field input.
			 */
			maxLength: number;

			/**
			 * Minimum size of the font when the font is sized based on the contents.  Enables font
			 * scaling to fit.
			 */
			minimumFontSize: number;

			/**
			 * Sets the padding of this text field.
			 */
			padding: TextFieldPadding;

			/**
			 * Left padding of this text field.
			 * @deprecated Use [Titanium.UI.TextField.padding](Titanium.UI.TextField.padding) for parity instead.
			 */
			paddingLeft: never;

			/**
			 * Right padding of this text field.
			 * @deprecated Use [Titanium.UI.TextField.padding](Titanium.UI.TextField.padding) for parity instead.
			 */
			paddingRight: never;

			/**
			 * Obscure the input text from the user.
			 */
			passwordMask: boolean;

			/**
			 * Set password rules that should be used for this text field.
			 */
			passwordRules: string;

			/**
			 * Specifies the text to display on the keyboard `Return` key when this field is focused.
			 */
			returnKeyType: number;

			/**
			 * Right button view.
			 */
			rightButton: Titanium.UI.View;

			/**
			 * Determines when to display the right button view.
			 */
			rightButtonMode: number;

			/**
			 * Padding between the right button and the edge of the field.
			 */
			rightButtonPadding: number;

			/**
			 * Returns the currently selected text of the text field.
			 */
			readonly selection: textFieldSelectedParams;

			/**
			 * Determinates if the undo and redo buttons on the left side of the keyboard should be displayed or not. Only valid on iOS9 and above.
			 */
			showUndoRedoActions: boolean;

			/**
			 * Determines whether the return key should be suppressed during entry.
			 */
			suppressReturn: boolean;

			/**
			 * Text alignment within this text field.
			 * This has no effect on `hintText` when `hintType` is Ti.UI.HINT_TYPE_ANIMATED.
			 */
			textAlign: string | number;

			/**
			 * Value of this text field, which may be set programmatically and modified by the user.
			 */
			value: string;

			/**
			 * Vertical alignment within this text field.
			 */
			verticalAlign: number | string;

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add: never;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof TextFieldEventMap>(name: K, callback: (this: Titanium.UI.TextField, event: TextFieldEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Forces the field to lose focus.
			 */
			blur(): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof TextFieldEventMap>(name: K, event?: TextFieldEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Forces the field to gain focus.
			 */
			focus(): void;

			/**
			 * Returns `true` if this text field contains text.
			 */
			hasText(): boolean;

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
			removeEventListener<K extends keyof TextFieldEventMap>(name: K, callback: (this: Titanium.UI.TextField, event: TextFieldEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt: never;

			/**
			 * Selects the text in range (start, end).
			 */
			setSelection(start: number, end: number): void;

		}
	}
}
/**
 * Dictionary object of parameters for the <Titanium.UI.TextField.padding> that describes the padding. Most notable difference from typical <Padding> is that `top`/`bottom` are only supported on Android.
 */
interface TextFieldPadding extends Padding {
	/**
	 * Bottom padding (Android only, since 6.1.0)
	 */
	bottom?: number;

	/**
	 * Left padding
	 */
	left?: number;

	/**
	 * Right padding
	 */
	right?: number;

	/**
	 * Top padding (Android only, since 6.1.0)
	 */
	top?: number;

}
/**
 * Dictionary object of parameters for the <Titanium.UI.TextField.selection> property that describes
 * position and length of the selected text.
 */
interface textFieldSelectedParams {
	/**
	 * Number of characters selected.
	 */
	length?: number;

	/**
	 * Starting position of selected text.
	 */
	location?: number;

}
