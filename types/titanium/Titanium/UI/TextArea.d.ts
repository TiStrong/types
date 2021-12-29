declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.TextArea
		 */
		interface TextAreaBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.TextArea;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface TextArea_click_Event extends TextAreaBaseEvent {
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
		interface TextArea_dblclick_Event extends TextAreaBaseEvent {
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
		interface TextArea_doubletap_Event extends TextAreaBaseEvent {
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
		 * Fired when this text area gains focus.
		 */
		interface TextArea_focus_Event extends TextAreaBaseEvent {
			/**
			 * Value of this text area.
			 */
			value: string;

		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface TextArea_keypressed_Event extends TextAreaBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface TextArea_longclick_Event extends TextAreaBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface TextArea_longpress_Event extends TextAreaBaseEvent {
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
		interface TextArea_pinch_Event extends TextAreaBaseEvent {
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
		interface TextArea_postlayout_Event extends TextAreaBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface TextArea_singletap_Event extends TextAreaBaseEvent {
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
		interface TextArea_swipe_Event extends TextAreaBaseEvent {
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
		interface TextArea_touchcancel_Event extends TextAreaBaseEvent {
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
		interface TextArea_touchend_Event extends TextAreaBaseEvent {
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
		interface TextArea_touchmove_Event extends TextAreaBaseEvent {
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
		interface TextArea_touchstart_Event extends TextAreaBaseEvent {
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
		interface TextArea_twofingertap_Event extends TextAreaBaseEvent {
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
		 * Fired when this text area loses focus.
		 */
		interface TextArea_blur_Event extends TextAreaBaseEvent {
			/**
			 * Value of this text area.
			 */
			value: string;

		}
		/**
		 * Fired when this text area value changes.
		 */
		interface TextArea_change_Event extends TextAreaBaseEvent {
			/**
			 * New value of this text area.
			 */
			value: string;

		}
		/**
		 * Fired when user interacts with a URL in the text area. See [handleLinks](Titanium.UI.TextArea.handleLinks).
		 */
		interface TextArea_link_Event extends TextAreaBaseEvent {
			/**
			 * This is false. This event does not bubble.
			 */
			bubbles: boolean;

			/**
			 * An array of two numbers [location, length] describing the character range of the text associated with this URL.
			 */
			range: any[];

			/**
			 * The URL that is associated with this event.
			 */
			url: string;

		}
		/**
		 * Fired when the return key is pressed on the keyboard.
		 */
		interface TextArea_return_Event extends TextAreaBaseEvent {
			/**
			 * Value of this text area.
			 */
			value: string;

		}
		/**
		 * Fired when text in this text area is selected.
		 */
		interface TextArea_selected_Event extends TextAreaBaseEvent {
			/**
			 * Dictionary that describes the position and length of the selected text.
			 */
			range: textAreaSelectedParams;

		}
		interface TextAreaEventMap extends ProxyEventMap {
			blur: TextArea_blur_Event;

			change: TextArea_change_Event;

			click: TextArea_click_Event;

			dblclick: TextArea_dblclick_Event;

			doubletap: TextArea_doubletap_Event;

			focus: TextArea_focus_Event;

			keypressed: TextArea_keypressed_Event;

			link: TextArea_link_Event;

			longclick: TextArea_longclick_Event;

			longpress: TextArea_longpress_Event;

			pinch: TextArea_pinch_Event;

			postlayout: TextArea_postlayout_Event;

			return: TextArea_return_Event;

			selected: TextArea_selected_Event;

			singletap: TextArea_singletap_Event;

			swipe: TextArea_swipe_Event;

			touchcancel: TextArea_touchcancel_Event;

			touchend: TextArea_touchend_Event;

			touchmove: TextArea_touchmove_Event;

			touchstart: TextArea_touchstart_Event;

			twofingertap: TextArea_twofingertap_Event;

		}
		/**
		 * A multiline text field that supports editing and scrolling.
		 */
		class TextArea extends Titanium.UI.View {
			/**
			 * Determines the appearance of the keyboard displayed when this text area is focused.
			 * @deprecated Use [Titanium.UI.TextArea.keyboardAppearance](Titanium.UI.TextArea.keyboardAppearance) instead.
			 */
			appearance: never;

			/**
			 * Hint text attributed string.
			 */
			attributedHintText: Titanium.UI.AttributedString;

			/**
			 * TextArea attributed string.
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
			 * Determines whether to automatically correct text entered into this text area.
			 */
			autocorrect: boolean;

			/**
			 * Sets the autofill type for the text area.
			 */
			autofillType: string;

			/**
			 * Border style for the text area.
			 */
			borderStyle: number;

			/**
			 * Array of this view's child views.
			 */
			readonly children: never;

			/**
			 * Determines whether the value of this text area should be cleared when it is focused.
			 */
			clearOnEdit: boolean;

			/**
			 * Color of the text in this text area, as a color name or hex triplet.
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
			 * Determines if user can copy or cut text from the text area.
			 */
			enableCopy: boolean;

			/**
			 * Determines whether the return key is enabled automatically when there is text in this text
			 * area.
			 */
			enableReturnKey: boolean;

			/**
			 * Determines whether this TextArea has focus.
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
			 * Specifies if the text area should allow user interaction with the given URL in the given range of text.
			 */
			handleLinks: boolean;

			/**
			 * Hint text to display when the field is empty.
			 */
			hintText: string;

			/**
			 * Color of hint text that displays when field is empty.
			 */
			hintTextColor: string;

			/**
			 * Hint type to display on the text field.
			 */
			hintType: number;

			/**
			 * Determines the appearance of the keyboard displayed when this text area is focused.
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
			 * Keyboard type to display when this text area is focused.
			 */
			keyboardType: number;

			/**
			 * Number of lines tall the text area height will be, if set.
			 */
			lines: number;

			/**
			 * Maximum length of text field input.
			 */
			maxLength: number;

			/**
			 * Maximum line count of text field input.
			 */
			maxLines: number;

			/**
			 * Sets the left and right padding of this TextArea. The text will always be vertically centered.
			 */
			padding: Padding;

			/**
			 * Specifies the text to display on the keyboard `Return` key when this text area is focused.
			 */
			returnKeyType: number;

			/**
			 * Determines whether this text area can be scrolled.
			 */
			scrollable: boolean;

			/**
			 * Controls whether the scroll-to-top gesture is effective.
			 */
			scrollsToTop: boolean;

			/**
			 * Returns the currently selected text of the text area.
			 */
			readonly selection: textAreaSelectedParams;

			/**
			 * Determinates if the undo and redo buttons on the left side of the keyboard should be displayed or not. Only valid on iOS9 and above. This property can only be set upon creation.
			 */
			showUndoRedoActions: boolean;

			/**
			 * Determines if the return key should be suppressed during text entry.
			 */
			suppressReturn: boolean;

			/**
			 * Text alignment within this text area.
			 * This has no effect on `hintText` when `hintType` is Ti.UI.HINT_TYPE_ANIMATED.
			 */
			textAlign: string | number;

			/**
			 * Value of this text area, which may be set programmatically and modified by the user.
			 */
			value: string;

			/**
			 * Vertical alignment within this text area.
			 */
			verticalAlign: number | string;

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add: never;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof TextAreaEventMap>(name: K, callback: (this: Titanium.UI.TextArea, event: TextAreaEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Forces this text area to lose focus.
			 */
			blur(): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof TextAreaEventMap>(name: K, event?: TextAreaEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Forces this text area to gain focus.
			 */
			focus(): void;

			/**
			 * Returns `true` if this text area contains text.
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
			removeEventListener<K extends keyof TextAreaEventMap>(name: K, callback: (this: Titanium.UI.TextArea, event: TextAreaEventMap[K]) => void): void;

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
 * Dictionary object of parameters for the <Titanium.UI.TextArea.selected> event and <Titanium.UI.TextArea.selection> property that describes
 * position and length of the selected text.
 */
interface textAreaSelectedParams {
	/**
	 * Number of characters selected.
	 */
	length?: number;

	/**
	 * Starting position of selected text.
	 */
	location?: number;

}
