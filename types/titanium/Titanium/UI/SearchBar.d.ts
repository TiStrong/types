declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.SearchBar
		 */
		interface SearchBarBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.SearchBar;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface SearchBar_click_Event extends SearchBarBaseEvent {
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
		interface SearchBar_dblclick_Event extends SearchBarBaseEvent {
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
		interface SearchBar_doubletap_Event extends SearchBarBaseEvent {
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
		 * Fired when the search bar gains focus.
		 */
		interface SearchBar_focus_Event extends SearchBarBaseEvent {
			/**
			 * Value of the search bar.
			 */
			value: string;

		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface SearchBar_keypressed_Event extends SearchBarBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface SearchBar_longclick_Event extends SearchBarBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface SearchBar_longpress_Event extends SearchBarBaseEvent {
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
		interface SearchBar_pinch_Event extends SearchBarBaseEvent {
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
		interface SearchBar_postlayout_Event extends SearchBarBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface SearchBar_singletap_Event extends SearchBarBaseEvent {
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
		interface SearchBar_swipe_Event extends SearchBarBaseEvent {
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
		interface SearchBar_touchcancel_Event extends SearchBarBaseEvent {
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
		interface SearchBar_touchend_Event extends SearchBarBaseEvent {
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
		interface SearchBar_touchmove_Event extends SearchBarBaseEvent {
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
		interface SearchBar_touchstart_Event extends SearchBarBaseEvent {
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
		interface SearchBar_twofingertap_Event extends SearchBarBaseEvent {
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
		 * Fired when the search bar loses focus.
		 */
		interface SearchBar_blur_Event extends SearchBarBaseEvent {
			/**
			 * Value of the search bar.
			 */
			value: string;

		}
		/**
		 * Fired when the bookmark button is pressed.
		 */
		interface SearchBar_bookmark_Event extends SearchBarBaseEvent {
			/**
			 * Value of the search bar.
			 */
			value: string;

		}
		/**
		 * Fired when the cancel button is pressed.
		 */
		interface SearchBar_cancel_Event extends SearchBarBaseEvent {
			/**
			 * Value of the search bar.
			 */
			value: string;

		}
		/**
		 * Fired when the value of the search bar changes.
		 */
		interface SearchBar_change_Event extends SearchBarBaseEvent {
			/**
			 * Value of the search bar.
			 */
			value: string;

		}
		/**
		 * Fired when keyboard search button is pressed.
		 */
		interface SearchBar_return_Event extends SearchBarBaseEvent {
			/**
			 * Value of the search bar.
			 */
			value: string;

		}
		interface SearchBarEventMap extends ProxyEventMap {
			blur: SearchBar_blur_Event;

			bookmark: SearchBar_bookmark_Event;

			cancel: SearchBar_cancel_Event;

			change: SearchBar_change_Event;

			click: SearchBar_click_Event;

			dblclick: SearchBar_dblclick_Event;

			doubletap: SearchBar_doubletap_Event;

			focus: SearchBar_focus_Event;

			keypressed: SearchBar_keypressed_Event;

			longclick: SearchBar_longclick_Event;

			longpress: SearchBar_longpress_Event;

			pinch: SearchBar_pinch_Event;

			postlayout: SearchBar_postlayout_Event;

			return: SearchBar_return_Event;

			singletap: SearchBar_singletap_Event;

			swipe: SearchBar_swipe_Event;

			touchcancel: SearchBar_touchcancel_Event;

			touchend: SearchBar_touchend_Event;

			touchmove: SearchBar_touchmove_Event;

			touchstart: SearchBar_touchstart_Event;

			twofingertap: SearchBar_twofingertap_Event;

		}
		/**
		 * A specialized text field for entering search text.
		 */
		class SearchBar extends Titanium.UI.View {
			/**
			 * Determines how text is capitalized during typing.
			 */
			autocapitalization: number;

			/**
			 * Determines whether the text in the search bar is autocorrected during typing.
			 */
			autocorrect: boolean;

			/**
			 * Bar color of the search bar view, as a color name or hex triplet.
			 */
			barColor: string | Titanium.UI.Color;

			/**
			 * The title of the cancel button when the search bar field is focused.
			 */
			cancelButtonTitle: string;

			/**
			 * Color of the text in this text field, as a color name or hex triplet.
			 */
			color: string | Titanium.UI.Color;

			/**
			 * Background image of the text field in disabled state, specified as a local file path or URL.
			 */
			fieldBackgroundDisabledImage: string;

			/**
			 * Background image of the text field, specified as a local file path or URL.
			 */
			fieldBackgroundImage: string;

			/**
			 * Determines whether this SearchBar has focus.
			 */
			readonly focused: boolean;

			/**
			 * Text to show when the search bar field is not focused.
			 */
			hintText: string;

			/**
			 * Hint text color to display when the field is empty.
			 */
			hintTextColor: string | Titanium.UI.Color;

			/**
			 * Key identifying a string from the locale file to use for the
			 * [hintText](Titanium.UI.SearchBar.hintText) property.
			 */
			hinttextid: string;

			/**
			 * Collapses/expands the search view to/from a search icon.
			 */
			iconified: boolean;

			/**
			 * Set true show as a search icon that expands to a search view when tapped on.
			 */
			iconifiedByDefault: boolean;

			/**
			 * Determines the appearance of the keyboard to be displayed the field is focused.
			 */
			keyboardAppearance: number;

			/**
			 * Keyboard type constant to use when the field is focused.
			 */
			keyboardType: number;

			/**
			 * Single line of text displayed at the top of the search bar.
			 */
			prompt: string;

			/**
			 * Key identifying a string from the locale file to use for the
			 * [prompt](Titanium.UI.SearchBar.prompt) property.
			 */
			promptid: string;

			/**
			 * Determines whether the bookmark button is displayed.
			 */
			showBookmark: boolean;

			/**
			 * Determines whether the cancel button is displayed.
			 */
			showCancel: boolean;

			/**
			 * Determines the style of the search bar.
			 */
			style: number;

			/**
			 * The token of a search text field
			 */
			tokens: string[];

			/**
			 * Value of the search bar.
			 */
			value: string;

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add: never;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof SearchBarEventMap>(name: K, callback: (this: Titanium.UI.SearchBar, event: SearchBarEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Causes the search bar to lose focus.
			 */
			blur(): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof SearchBarEventMap>(name: K, event?: SearchBarEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Causes the search bar to gain focus.
			 */
			focus(): void;

			/**
			 * Inserts a new search token at the specified index.
			 */
			insertTokenAtIndex(token: SearchBarToken, index: number): void;

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
			removeEventListener<K extends keyof SearchBarEventMap>(name: K, callback: (this: Titanium.UI.SearchBar, event: SearchBarEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Removes an existing token at the specified index.
			 */
			removeTokenAtIndex(index: number): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt: never;

			/**
			 * Shows or hides the cancel button.
			 */
			setShowCancel(showCancel: boolean, options?: AnimatedOptions): void;

		}
	}
}
/**
 * The search bar token for the <Titanium.UI.SearchBar.insertTokenAtIndex> method.
 */
interface SearchBarToken {
	/**
	 * The identifier of the search bar token.
	 */
	identifier: string;

	/**
	 * The image of the search bar token.
	 */
	image?: string;

	/**
	 * The text of the search bar token (displayed in the search bar).
	 */
	text: string;

}
