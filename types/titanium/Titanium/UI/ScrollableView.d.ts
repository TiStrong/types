declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.ScrollableView
		 */
		interface ScrollableViewBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.ScrollableView;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface ScrollableView_click_Event extends ScrollableViewBaseEvent {
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
		interface ScrollableView_dblclick_Event extends ScrollableViewBaseEvent {
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
		 * Fired when the device detects a double tap against this page.
		 */
		interface ScrollableView_doubletap_Event extends ScrollableViewBaseEvent {
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
		interface ScrollableView_focus_Event extends ScrollableViewBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface ScrollableView_keypressed_Event extends ScrollableViewBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface ScrollableView_longclick_Event extends ScrollableViewBaseEvent {
		}
		/**
		 * Fired when the device detects a long press against this view.
		 */
		interface ScrollableView_longpress_Event extends ScrollableViewBaseEvent {
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
		interface ScrollableView_pinch_Event extends ScrollableViewBaseEvent {
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
		interface ScrollableView_postlayout_Event extends ScrollableViewBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against this view.
		 */
		interface ScrollableView_singletap_Event extends ScrollableViewBaseEvent {
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
		interface ScrollableView_swipe_Event extends ScrollableViewBaseEvent {
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
		 * Fired when a touch gesture is interrupted by the device.
		 */
		interface ScrollableView_touchcancel_Event extends ScrollableViewBaseEvent {
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
		interface ScrollableView_touchend_Event extends ScrollableViewBaseEvent {
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
		interface ScrollableView_touchmove_Event extends ScrollableViewBaseEvent {
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
		 * Fired as soon as the device detects a touch gesture against this view.
		 */
		interface ScrollableView_touchstart_Event extends ScrollableViewBaseEvent {
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
		interface ScrollableView_twofingertap_Event extends ScrollableViewBaseEvent {
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
		 * Fired repeatedly as the view is being scrolled.
		 */
		interface ScrollableView_scroll_Event extends ScrollableViewBaseEvent {
			/**
			 * Index of the currently visible view of <Titanium.UI.ScrollableView.views>.
			 */
			currentPage: number;

			/**
			 * Current page index that the view is scrolled to as a float. For
			 * example, if the user is holding the `ScrollableView` in between
			 * the first and second page, this will have a value of 0.5.
			 */
			currentPageAsFloat: number;

			/**
			 * The currently visible view.
			 */
			view: Titanium.UI.View;

		}
		/**
		 * Fired when the view has stopped moving completely.
		 */
		interface ScrollableView_scrollend_Event extends ScrollableViewBaseEvent {
			/**
			 * Index of the currently visible view of <Titanium.UI.ScrollableView.views>.
			 */
			currentPage: number;

			/**
			 * The currently visible view.
			 */
			view: Titanium.UI.View;

		}
		/**
		 * Fired when the scrolling drag gesture on the view has been completed.
		 */
		interface ScrollableView_dragend_Event extends ScrollableViewBaseEvent {
			/**
			 * Index of the currently visible view of <Titanium.UI.ScrollableView.views>.
			 */
			currentPage: number;

			/**
			 * The currently visible view.
			 */
			view: Titanium.UI.View;

		}
		interface ScrollableViewEventMap extends ProxyEventMap {
			click: ScrollableView_click_Event;

			dblclick: ScrollableView_dblclick_Event;

			doubletap: ScrollableView_doubletap_Event;

			dragend: ScrollableView_dragend_Event;

			focus: ScrollableView_focus_Event;

			keypressed: ScrollableView_keypressed_Event;

			longclick: ScrollableView_longclick_Event;

			longpress: ScrollableView_longpress_Event;

			pinch: ScrollableView_pinch_Event;

			postlayout: ScrollableView_postlayout_Event;

			scroll: ScrollableView_scroll_Event;

			scrollend: ScrollableView_scrollend_Event;

			singletap: ScrollableView_singletap_Event;

			swipe: ScrollableView_swipe_Event;

			touchcancel: ScrollableView_touchcancel_Event;

			touchend: ScrollableView_touchend_Event;

			touchmove: ScrollableView_touchmove_Event;

			touchstart: ScrollableView_touchstart_Event;

			twofingertap: ScrollableView_twofingertap_Event;

		}
		/**
		 * A view that encapsulates a horizontally-scrolling set of child views, known as pages, navigable
		 * using its built-in horizontal swipe gestures.
		 */
		class ScrollableView extends Titanium.UI.View {
			/**
			 * Number of pages to cache (pre-render).
			 */
			cacheSize: number;

			/**
			 * Array of this view's child views.
			 */
			readonly children: never;

			/**
			 * Determines whether the previous and next pages are clipped, so that they are not visible
			 * adjacent to the current page.
			 */
			clipViews: boolean;

			/**
			 * Index of the active page.
			 */
			currentPage: number;

			/**
			 * Color for the current page of the paging control, as a color name or hex triplet.
			 */
			currentPageIndicatorColor: string | Titanium.UI.Color;

			/**
			 * Determines whether page bouncing effect is disabled.
			 */
			disableBounce: boolean;

			/**
			 * Sets the region where this view responds to gestures.
			 */
			hitRect: Dimension;

			/**
			 * Determines the behavior when the user overscolls the view.
			 */
			overScrollMode: number;

			/**
			 * Determines whether the paging control is added as an overlay to the view.
			 */
			overlayEnabled: boolean;

			/**
			 * The padding applied to the scrollable view.
			 */
			padding: Padding;

			/**
			 * Color of the paging control, as a color name or hex triplet.
			 */
			pageIndicatorColor: string | Titanium.UI.Color;

			/**
			 * Alpha value of the paging control.
			 */
			pagingControlAlpha: number;

			/**
			 * Color of the paging control, as a color name or hex triplet.
			 */
			pagingControlColor: string | Titanium.UI.Color;

			/**
			 * Height of the paging control, in pixels.
			 */
			pagingControlHeight: number;

			/**
			 * Determines whether the paging control is displayed at the top or bottom of the view.
			 */
			pagingControlOnTop: boolean;

			/**
			 * Number of milliseconds to wait before hiding the paging control.
			 */
			pagingControlTimeout: number;

			/**
			 * The preferred image for indicators, defined using a local filesystem path, or a `Blob` object containing image data.
			 */
			preferredIndicatorImage: string | Titanium.Blob;

			/**
			 * Determines whether scrolling is enabled for the view.
			 */
			scrollingEnabled: boolean;

			/**
			 * Determines whether the paging control is visible.
			 */
			showPagingControl: boolean;

			/**
			 * Sets the pages within this Scrollable View.
			 */
			views: Titanium.UI.View[];

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add: never;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof ScrollableViewEventMap>(name: K, callback: (this: Titanium.UI.ScrollableView, event: ScrollableViewEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Adds a new page to this Scrollable View.
			 */
			addView(view: Titanium.UI.View): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof ScrollableViewEventMap>(name: K, event?: ScrollableViewEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Inserts views at the specified position in the [views](Titanium.UI.ScrollableView.views) array.
			 */
			insertViewsAt(position: number, views: ReadonlyArray<Titanium.UI.View>): void;

			/**
			 * Sets the current page to the next consecutive page in <Titanium.UI.ScrollableView.views>.
			 */
			moveNext(): void;

			/**
			 * Sets the current page to the previous consecutive page in <Titanium.UI.ScrollableView.views>.
			 */
			movePrevious(): void;

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
			removeEventListener<K extends keyof ScrollableViewEventMap>(name: K, callback: (this: Titanium.UI.ScrollableView, event: ScrollableViewEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Removes an existing page from this Scrollable View.
			 */
			removeView(view: number | Titanium.UI.View): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt: never;

			/**
			 * Scrolls to the specified page in <Titanium.UI.ScrollableView.views>.
			 */
			scrollToView(view: number | Titanium.UI.View): void;

			/**
			 * Sets the indicator image for the specified page.
			 */
			setIndicatorImageForPage(image: string | Titanium.Blob, pageNo: number): void;

		}
	}
}
