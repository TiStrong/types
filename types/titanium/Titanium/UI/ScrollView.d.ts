declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.ScrollView
		 */
		interface ScrollViewBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.ScrollView;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface ScrollView_click_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_dblclick_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_doubletap_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_focus_Event extends ScrollViewBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface ScrollView_keypressed_Event extends ScrollViewBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface ScrollView_longclick_Event extends ScrollViewBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface ScrollView_longpress_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_pinch_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_postlayout_Event extends ScrollViewBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface ScrollView_singletap_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_swipe_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_touchcancel_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_touchend_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_touchmove_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_touchstart_Event extends ScrollViewBaseEvent {
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
		interface ScrollView_twofingertap_Event extends ScrollViewBaseEvent {
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
		 * Fired when the zoom scale factor changes.
		 */
		interface ScrollView_scale_Event extends ScrollViewBaseEvent {
			/**
			 * New scaling factor as a float.
			 */
			scale: number;

		}
		/**
		 * Fired when the scrollable region is scrolled.
		 */
		interface ScrollView_scroll_Event extends ScrollViewBaseEvent {
			/**
			 * The current content size of the scroll view defined by its `width` and `height` properties.
			 */
			contentSize: Size;

			/**
			 * The current scaling factor of the scroll view content. This might not be equal to
			 * the `zoomScale` property or be within the range specified by `minZoomScale` and `maxZoomScale`.
			 * This is only available from Release 3.2.3 of the Titanium Mobile SDK.
			 */
			curZoomScale: number;

			/**
			 * Indicates whether the scroll is decelerating.
			 */
			decelerating: boolean;

			/**
			 * Indicates whether the event was fired during a dragging gesture, where the touch
			 * remained in contact with the display to physically drag the view, as opposed to it being
			 * the result of scrolling momentum.
			 */
			dragging: boolean;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

			/**
			 * Indicates whether the event was fired during a zooming operation. This is only available
			 * from Release 3.2.3 of the Titanium Mobile SDK.
			 */
			zooming: boolean;

		}
		/**
		 * Fired when the scrollable region starts being dragged.
		 */
		interface ScrollView_dragStart_Event extends ScrollViewBaseEvent {
		}
		/**
		 * Fired when the scrollable region stops being dragged.
		 */
		interface ScrollView_dragEnd_Event extends ScrollViewBaseEvent {
			/**
			 * Indicates whether scrolling will continue but decelerate, now that the drag gesture has
			 * been released by the touch. If `false`, scrolling will stop immediately.
			 */
			decelerate: boolean;

		}
		/**
		 * Fired when the scrollable region starts being dragged.
		 */
		interface ScrollView_dragstart_Event extends ScrollViewBaseEvent {
		}
		/**
		 * Fired when the scrollable region stops being dragged.
		 */
		interface ScrollView_dragend_Event extends ScrollViewBaseEvent {
			/**
			 * Indicates whether scrolling will continue but decelerate, now that the drag gesture has
			 * been released by the touch. If `false`, scrolling will stop immediately.
			 * Is always `true` on Android.
			 */
			decelerate: boolean;

		}
		interface ScrollViewEventMap extends ProxyEventMap {
			click: ScrollView_click_Event;

			dblclick: ScrollView_dblclick_Event;

			doubletap: ScrollView_doubletap_Event;

			dragEnd: ScrollView_dragEnd_Event;

			dragStart: ScrollView_dragStart_Event;

			dragend: ScrollView_dragend_Event;

			dragstart: ScrollView_dragstart_Event;

			focus: ScrollView_focus_Event;

			keypressed: ScrollView_keypressed_Event;

			longclick: ScrollView_longclick_Event;

			longpress: ScrollView_longpress_Event;

			pinch: ScrollView_pinch_Event;

			postlayout: ScrollView_postlayout_Event;

			scale: ScrollView_scale_Event;

			scroll: ScrollView_scroll_Event;

			singletap: ScrollView_singletap_Event;

			swipe: ScrollView_swipe_Event;

			touchcancel: ScrollView_touchcancel_Event;

			touchend: ScrollView_touchend_Event;

			touchmove: ScrollView_touchmove_Event;

			touchstart: ScrollView_touchstart_Event;

			twofingertap: ScrollView_twofingertap_Event;

		}
		/**
		 * A view that contains a horizontally and/or vertically-scrollable region of content.
		 */
		class ScrollView extends Titanium.UI.View {
			/**
			 * Determines whether this scroll view can cancel subview touches in order to scroll instead.
			 */
			canCancelEvents: boolean;

			/**
			 * Height of the scrollable region.
			 */
			contentHeight: number | string;

			/**
			 * X and Y coordinates to which to reposition the top-left point of the scrollable region.
			 */
			contentOffset: Point;

			/**
			 * Width of the scrollable region.
			 */
			contentWidth: number | string;

			/**
			 * The deceleration rate of the ScrollView.
			 */
			decelerationRate: number;

			/**
			 * Determines whether scroll bounce of the scrollable region is enabled.
			 */
			disableBounce: boolean;

			/**
			 * Determines whether horizontal scroll bounce of the scrollable region is enabled.
			 */
			horizontalBounce: boolean;

			/**
			 * The manner in which the keyboard is dismissed when a drag begins in the scroll view.
			 */
			keyboardDismissMode: number;

			/**
			 * Maximum scaling factor of the scrollable region and its content.
			 */
			maxZoomScale: number;

			/**
			 * Minimum scaling factor of the scrollable region and its content.
			 */
			minZoomScale: number;

			/**
			 * Determines the behavior when the user overscolls the view.
			 */
			overScrollMode: number;

			/**
			 * View positioned above the first row that is only revealed when the user drags the scroll view contents down.
			 */
			refreshControl: Titanium.UI.RefreshControl;

			/**
			 * Style of the scrollbar.
			 */
			scrollIndicatorStyle: number;

			/**
			 * Limits the direction of the scrollable region, overriding the deduced setting. Set to
			 * `horizontal` or `vertical`.
			 */
			scrollType: string;

			/**
			 * Determines whether scrolling is enabled for the view.
			 */
			scrollingEnabled: boolean;

			/**
			 * Controls whether the scroll-to-top gesture is effective.
			 */
			scrollsToTop: boolean;

			/**
			 * Determines whether the horizontal scroll indicator is visible.
			 */
			showHorizontalScrollIndicator: boolean;

			/**
			 * Determines whether the vertical scroll indicator is visible.
			 */
			showVerticalScrollIndicator: boolean;

			/**
			 * Determines whether vertical scroll bounce of the scrollable region is enabled.
			 */
			verticalBounce: boolean;

			/**
			 * Scaling factor of the scroll view's content.
			 */
			zoomScale: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof ScrollViewEventMap>(name: K, callback: (this: Titanium.UI.ScrollView, event: ScrollViewEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof ScrollViewEventMap>(name: K, event?: ScrollViewEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof ScrollViewEventMap>(name: K, callback: (this: Titanium.UI.ScrollView, event: ScrollViewEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Moves the specified coordinate of the scrollable region into the viewable area.
			 */
			scrollTo(x: number, y: number, options?: AnimatedOptions): void;

			/**
			 * Moves the end of the scrollable region into the viewable area.
			 */
			scrollToBottom(): void;

			/**
			 * Moves the top of the scrollable region into the viewable area.
			 */
			scrollToTop(): void;

			/**
			 * Sets the value of the [contentOffset](Titanium.UI.ScrollView.contentOffset) property.
			 */
			setContentOffset(contentOffsetXY: Point, animated?: AnimatedOptions): void;

			/**
			 * Sets the value of the [zoomScale](Titanium.UI.ScrollView.zoomScale) property.
			 */
			setZoomScale(zoomScale: number, options?: AnimatedOptions): void;

		}
	}
}
