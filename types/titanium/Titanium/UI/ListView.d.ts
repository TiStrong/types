declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.ListView
		 */
		interface ListViewBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.ListView;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface ListView_click_Event extends ListViewBaseEvent {
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
		interface ListView_dblclick_Event extends ListViewBaseEvent {
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
		interface ListView_doubletap_Event extends ListViewBaseEvent {
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
		interface ListView_focus_Event extends ListViewBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface ListView_keypressed_Event extends ListViewBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface ListView_longclick_Event extends ListViewBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface ListView_longpress_Event extends ListViewBaseEvent {
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
		interface ListView_pinch_Event extends ListViewBaseEvent {
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
		interface ListView_postlayout_Event extends ListViewBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface ListView_singletap_Event extends ListViewBaseEvent {
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
		interface ListView_swipe_Event extends ListViewBaseEvent {
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
		interface ListView_touchcancel_Event extends ListViewBaseEvent {
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
		interface ListView_touchend_Event extends ListViewBaseEvent {
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
		interface ListView_touchmove_Event extends ListViewBaseEvent {
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
		interface ListView_touchstart_Event extends ListViewBaseEvent {
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
		interface ListView_twofingertap_Event extends ListViewBaseEvent {
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
		 * Fired when the index bar is clicked by the user.
		 */
		interface ListView_indexclick_Event extends ListViewBaseEvent {
			/**
			 * The index number clicked.
			 */
			index: number;

			/**
			 * The title of the index clicked.
			 */
			title: string;

		}
		/**
		 * Fired when a list row is clicked by the user.
		 */
		interface ListView_itemclick_Event extends ListViewBaseEvent {
			/**
			 * Returns `true` if the detail button is clicked else returns `false`.
			 * Only returns `true` if the `accessoryType` property is set to
			 * <Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL>.  All other accessories return `false` if
			 * clicked.
			 */
			accessoryClicked: boolean;

			/**
			 * The bind ID of the control that generated this event, if one exists.
			 */
			bindId: string;

			/**
			 * The item ID bound to the list item that generated the event.
			 */
			itemId: string;

			/**
			 * Item index.
			 */
			itemIndex: number;

			/**
			 * List section if the item is contained in a list section.
			 */
			section: Titanium.UI.ListSection;

			/**
			 * Section index.
			 */
			sectionIndex: number;

		}
		/**
		 * Fired when user stops two-pan gesture interaction for selecting multiple items.
		 * It is used with <Titanium.UI.ListView.allowsMultipleSelectionInteraction>.
		 */
		interface ListView_itemsselected_Event extends ListViewBaseEvent {
			/**
			 * List of items selected by user.
			 */
			selectedItems: SelectedItem[];

			/**
			 * First item selected when user started interaction.
			 */
			startingItem: SelectedItem;

		}
		/**
		 * Fired when a list row is deleted by the user.
		 */
		interface ListView_delete_Event extends ListViewBaseEvent {
			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

			/**
			 * The item ID bound to the list item that generated the event.
			 */
			itemId: string;

			/**
			 * Item index.
			 */
			itemIndex: number;

			/**
			 * List section from which the item is deleted.
			 */
			section: Titanium.UI.ListSection;

			/**
			 * Section index.
			 */
			sectionIndex: number;

		}
		/**
		 * Fired when a list row is inserted by the user.
		 */
		interface ListView_insert_Event extends ListViewBaseEvent {
			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

			/**
			 * The item ID bound to the list item that generated the event.
			 */
			itemId: string;

			/**
			 * Item index.
			 */
			itemIndex: number;

			/**
			 * List section from which the item is deleted.
			 */
			section: Titanium.UI.ListSection;

			/**
			 * Section index.
			 */
			sectionIndex: number;

		}
		/**
		 * Fired when the user starts dragging the list view.
		 */
		interface ListView_dragstart_Event extends ListViewBaseEvent {
			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

		}
		/**
		 * Fired when the user stops dragging the list view.
		 */
		interface ListView_dragend_Event extends ListViewBaseEvent {
			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

		}
		/**
		 * Fired when the list view displays the reference item.
		 */
		interface ListView_marker_Event extends ListViewBaseEvent {
			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

			/**
			 * section item index of the reference item.
			 */
			itemIndex: number;

			/**
			 * section index of the reference item.
			 */
			sectionIndex: number;

		}
		/**
		 * Fired when a list row is moved to a different location by the user.
		 */
		interface ListView_move_Event extends ListViewBaseEvent {
			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

			/**
			 * The item ID bound to the list item that generated the event.
			 */
			itemId: string;

			/**
			 * Item index.
			 */
			itemIndex: number;

			/**
			 * List section from which the item is moved.
			 */
			section: Titanium.UI.ListSection;

			/**
			 * Section index.
			 */
			sectionIndex: number;

			/**
			 * Position within the `targetSection`.
			 */
			targetItemIndex: number;

			/**
			 * List section to which the item is moved. Might be the same as `section` property.
			 */
			targetSection: Titanium.UI.ListSection;

			/**
			 * Section index.
			 */
			targetSectionIndex: number;

		}
		/**
		 * Fired when the search using either [searchView](Titanium.UI.ListView.searchView) or [searchText](Titanium.UI.ListView.searchText) has no results.
		 */
		interface ListView_noresults_Event extends ListViewBaseEvent {
			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

		}
		/**
		 * Fired when the user drags the list view past the top edge of the [pullView](Titanium.UI.ListView.pullView).
		 */
		interface ListView_pull_Event extends ListViewBaseEvent {
			/**
			 * Determines if the `pullView` is completely visible (true) or partially hidden (false).
			 */
			active: boolean;

			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

		}
		/**
		 * Fired when new list items are prefetched. The items are ordered ascending by geometric distance
		 * from the list view. Note that this event is only available on iOS 10 and later.
		 */
		interface ListView_prefetch_Event extends ListViewBaseEvent {
			/**
			 * An array of prefetched items.
			 */
			prefetchedItems: ListItemEventType[];

		}
		/**
		 * Fired when list items that previously were considered as candidates for pre-fetching were not
		 * actually used. Note that this event is only available on iOS 10 and later
		 */
		interface ListView_cancelprefetch_Event extends ListViewBaseEvent {
			/**
			 * An array of prefetched items.
			 */
			prefetchedItems: ListItemEventType[];

		}
		/**
		 * Fired when the user stops dragging the list view and the [pullView](Titanium.UI.ListView.pullView) is completely visible.
		 */
		interface ListView_pullend_Event extends ListViewBaseEvent {
			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

		}
		/**
		 * Fired when the user interacts with one of the custom edit actions defined by <Titanium.UI.ListItem.editActions>.
		 */
		interface ListView_editaction_Event extends ListViewBaseEvent {
			/**
			 * The [title](RowActionType.title) as defined in the row action object.
			 */
			action: string;

			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

			/**
			 * The [identifier](RowActionType. identifier) of the row action. Only included in the event
			 * if previously defined. Available in Titanium 6.0.0 and later.
			 */
			identifier: string;

			/**
			 * The item ID bound to the list item that generated the event.
			 */
			itemId: string;

			/**
			 * Item index.
			 */
			itemIndex: number;

			/**
			 * List section from which the event was generated.
			 */
			section: Titanium.UI.ListSection;

			/**
			 * Section index.
			 */
			sectionIndex: number;

		}
		/**
		 * Fires when the list view starts scrolling by user interaction. Calling the `scrollTo` methods will not fire this event
		 */
		interface ListView_scrollstart_Event extends ListViewBaseEvent {
			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

			/**
			 * The first visible item in the list view when the event fires; this item might not be fully visible. May be -1 on iOS.
			 */
			firstVisibleItem: any;

			/**
			 * The index of the first visible item in the list view when the event fires; this item might not be fully visible.
			 * Note: The index is `-1` when there are no items in the <Titanium.UI.ListView>.
			 */
			firstVisibleItemIndex: number;

			/**
			 * The first visible section in the list view when the event fires.
			 */
			firstVisibleSection: Titanium.UI.ListSection;

			/**
			 * The index of the first visible section in the list view when the event fires.
			 * Note: The index is `-1` when there are no items in the <Titanium.UI.ListView>.
			 */
			firstVisibleSectionIndex: number;

			/**
			 * The number of visible items in the list view when the event fires.
			 */
			visibleItemCount: number;

		}
		/**
		 * Fires when the list view ends scrolling. Calling the `scrollTo` methods will not fire this event
		 */
		interface ListView_scrollend_Event extends ListViewBaseEvent {
			/**
			 * false. This event does not bubble.
			 */
			bubbles: boolean;

			/**
			 * The first visible item in the list view when the event fires; this item might not be fully visible. May be -1 on iOS.
			 */
			firstVisibleItem: any;

			/**
			 * The index of the first visible item in the list view when the event fires; this item might not be fully visible.
			 */
			firstVisibleItemIndex: number;

			/**
			 * The first visible section in the list view when the event fires.
			 */
			firstVisibleSection: Titanium.UI.ListSection;

			/**
			 * The index of the first visible section in the list view when the event fires.
			 */
			firstVisibleSectionIndex: number;

			/**
			 * The number of visible items in the list view when the event fires.
			 */
			visibleItemCount: number;

		}
		/**
		 * Fires when the list view is scrolling. Calling the `scrollTo` methods will not fire this event
		 */
		interface ListView_scrolling_Event extends ListViewBaseEvent {
			/**
			 * Direction of the scroll either 'up', or 'down'.
			 */
			direction: string;

			/**
			 * The expected y axis offset when the scrolling action decelerates to a stop.
			 */
			targetContentOffset: number;

			/**
			 * The velocity of the scroll in scale factor per second
			 */
			velocity: number;

		}
		interface ListViewEventMap extends ProxyEventMap {
			cancelprefetch: ListView_cancelprefetch_Event;

			click: ListView_click_Event;

			dblclick: ListView_dblclick_Event;

			delete: ListView_delete_Event;

			doubletap: ListView_doubletap_Event;

			dragend: ListView_dragend_Event;

			dragstart: ListView_dragstart_Event;

			editaction: ListView_editaction_Event;

			focus: ListView_focus_Event;

			indexclick: ListView_indexclick_Event;

			insert: ListView_insert_Event;

			itemclick: ListView_itemclick_Event;

			itemsselected: ListView_itemsselected_Event;

			keypressed: ListView_keypressed_Event;

			longclick: ListView_longclick_Event;

			longpress: ListView_longpress_Event;

			marker: ListView_marker_Event;

			move: ListView_move_Event;

			noresults: ListView_noresults_Event;

			pinch: ListView_pinch_Event;

			postlayout: ListView_postlayout_Event;

			prefetch: ListView_prefetch_Event;

			pull: ListView_pull_Event;

			pullend: ListView_pullend_Event;

			scrollend: ListView_scrollend_Event;

			scrolling: ListView_scrolling_Event;

			scrollstart: ListView_scrollstart_Event;

			singletap: ListView_singletap_Event;

			swipe: ListView_swipe_Event;

			touchcancel: ListView_touchcancel_Event;

			touchend: ListView_touchend_Event;

			touchmove: ListView_touchmove_Event;

			touchstart: ListView_touchstart_Event;

			twofingertap: ListView_twofingertap_Event;

		}
		/**
		 * A list view is used to present information, organized in to sections and items,
		 * in a vertically-scrolling view.
		 */
		class ListView extends Titanium.UI.View {
			/**
			 * Determines whether multiple items of this list view can be selected at the same time while editing the table.
			 */
			allowsMultipleSelectionDuringEditing: boolean;

			/**
			 * Allows a two-finger pan gesture to automatically transition the table view into editing mode and start selecting rows.
			 */
			allowsMultipleSelectionInteraction: boolean;

			/**
			 * Determines whether this item can be selected.
			 */
			allowsSelection: boolean;

			/**
			 * Determines whether this list view items can be selected while editing the table.
			 */
			allowsSelectionDuringEditing: boolean;

			/**
			 * Selected background color of the view, as a color name or hex triplet.
			 */
			backgroundSelectedColor: never;

			/**
			 * Selected background image url for the view, specified as a local file path or URL.
			 */
			backgroundSelectedImage: never;

			/**
			 * Determines if the list view can scroll in response to user actions.
			 */
			canScroll: boolean;

			/**
			 * Determines if the search performed is case insensitive.
			 */
			caseInsensitiveSearch: boolean;

			/**
			 * Array of this view's child views.
			 */
			readonly children: never;

			/**
			 * Sets the default template for list data items that do not specify the `template` property.
			 */
			defaultItemTemplate: string | number;

			/**
			 * A Boolean indicating whether the underlying content is dimmed during a search.
			 */
			dimBackgroundForSearch: boolean;

			/**
			 * Determines whether the scroll-bounce of the list view should be disabled.
			 */
			disableBounce: boolean;

			/**
			 * Determines if the list view is currently in editing mode.
			 */
			editing: boolean;

			/**
			 * Sets the fastScroll mode on Android ListViews.
			 */
			fastScroll: boolean;

			/**
			 * When set to false, the ListView will not draw the divider before the footer view.
			 */
			footerDividersEnabled: boolean;

			/**
			 * List view footer title.
			 */
			footerTitle: string;

			/**
			 * List view footer as a view that will be rendered instead of a label.
			 */
			footerView: Titanium.UI.View;

			/**
			 * When set to false, the ListView will not draw the divider after the header view.
			 */
			headerDividersEnabled: boolean;

			/**
			 * List view header title.
			 */
			headerTitle: string;

			/**
			 * List view header as a view that will be rendered instead of a label.
			 */
			headerView: Titanium.UI.View;

			/**
			 * Determines if the section information is displayed in the search results when using the `searchText` property.
			 */
			keepSectionsInSearch: boolean;

			/**
			 * The manner in which the keyboard is dismissed when a drag begins in the list view.
			 */
			keyboardDismissMode: number;

			/**
			 * Determines if the list view should use lazy loading to load remote images.
			 */
			lazyLoadingEnabled: boolean;

			/**
			 * The insets for the list view header and footer.
			 */
			listSeparatorInsets: HorizontalInsets;

			/**
			 * Determines if empty sections are retained when the user completes editing the list view.
			 */
			pruneSectionsOnEdit: boolean;

			/**
			 * View positioned above the first row that is only revealed when the user drags the list view contents down.
			 */
			pullView: Titanium.UI.View;

			/**
			 * View positioned above the first row that is only revealed when the user drags the list view contents down.
			 */
			refreshControl: Titanium.UI.RefreshControl;

			/**
			 * The background color of the search results (iOS-only).
			 */
			resultsBackgroundColor: string | Titanium.UI.Color;

			/**
			 * Separator line color between rows inside search results,
			 * as a color name or hex triplet (iOS-only).
			 */
			resultsSeparatorColor: string | Titanium.UI.Color;

			/**
			 * The insets for search results separators (applies to all cells & iOS-only).
			 */
			resultsSeparatorInsets: HorizontalInsets;

			/**
			 * The separator style of the search results (iOS-only).
			 */
			resultsSeparatorStyle: number;

			/**
			 * The insets for list view cells (applies to all cells).
			 */
			rowSeparatorInsets: HorizontalInsets;

			/**
			 * Style of the scrollbar.
			 */
			scrollIndicatorStyle: number;

			/**
			 * The string to use as the search parameter.
			 */
			searchText: string;

			/**
			 * Search field to use for the list view.
			 */
			searchView: Titanium.UI.SearchBar | Titanium.UI.Android.SearchView;

			/**
			 * Number of sections in this list view.
			 */
			readonly sectionCount: number;

			/**
			 * Padding above each section header.
			 */
			sectionHeaderTopPadding: number;

			/**
			 * Array of objects (with `title` and `index` properties) to control the list view index.
			 */
			sectionIndexTitles: ListViewIndexEntry[];

			/**
			 * Sections of this list.
			 */
			sections: Titanium.UI.ListSection[];

			/**
			 * Returns the selected list view items.
			 */
			selectedItems: ListItemEventType[];

			/**
			 * Separator line color between items, as a color name or hex triplet.
			 */
			separatorColor: string | Titanium.UI.Color;

			/**
			 * height of the ListView separator.
			 */
			separatorHeight: string | number;

			/**
			 * The insets for list view separators (applies to all cells).
			 * @deprecated Use [Titanium.UI.ListView.listSeparatorInsets](Titanium.UI.ListView.listSeparatorInsets) instead.
			 */
			separatorInsets: HorizontalInsets;

			/**
			 * Separator style constant.
			 */
			separatorStyle: number;

			/**
			 * A Boolean indicating whether search bar will be in navigation bar.
			 */
			showSearchBarInNavBar: boolean;

			/**
			 * Determines whether the selection checkmark is displayed on selected items.
			 */
			showSelectionCheck: boolean;

			/**
			 * Determines whether this list view displays a vertical scroll indicator.
			 */
			showVerticalScrollIndicator: boolean;

			/**
			 * Style of the list view.
			 */
			style: number;

			/**
			 * The insets for the table view header and footer.
			 * @deprecated Use [Titanium.UI.ListView.listSeparatorInsets](Titanium.UI.ListView.listSeparatorInsets) instead.
			 */
			tableSeparatorInsets: HorizontalInsets;

			/**
			 * Contain key-value pairs mapping a style name (key) to an <ItemTemplate> (value).
			 */
			templates: any;

			/**
			 * A material design visual construct that provides an instantaneous visual confirmation of touch point.
			 */
			touchFeedback: boolean;

			/**
			 * Controls the scroll-to-top gesture.
			 */
			willScrollOnStatusTap: boolean;

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add: never;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof ListViewEventMap>(name: K, callback: (this: Titanium.UI.ListView, event: ListViewEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Adds a reference item in the list view.
			 */
			addMarker(markerProps: ListViewMarkerProps): void;

			/**
			 * Appends a single section or an array of sections to the end of the list.
			 */
			appendSection(section: Titanium.UI.ListSection | Titanium.UI.ListSection[], animation?: ListViewAnimationProperties): void;

			/**
			 * Deletes an existing section.
			 */
			deleteSectionAt(sectionIndex: number, animation?: ListViewAnimationProperties): void;

			/**
			 * Deselects a specific item.
			 */
			deselectItem(sectionIndex: number, itemIndex: number): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof ListViewEventMap>(name: K, event?: ListViewEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Inserts a section or an array of sections at a specific index.
			 */
			insertSectionAt(sectionIndex: number, section: Titanium.UI.ListSection | Titanium.UI.ListSection[], animation?: ListViewAnimationProperties): void;

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
			removeEventListener<K extends keyof ListViewEventMap>(name: K, callback: (this: Titanium.UI.ListView, event: ListViewEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt: never;

			/**
			 * Replaces an existing section.
			 */
			replaceSectionAt(sectionIndex: number, section: Titanium.UI.ListSection, animation?: ListViewAnimationProperties): void;

			/**
			 * Scrolls to a specific item.
			 */
			scrollToItem(sectionIndex: number, itemIndex: number, animation?: ListViewAnimationProperties): void;

			/**
			 * Selects an item in the list using the specified item and section indices.
			 */
			selectItem(sectionIndex: number, itemIndex: number): void;

			/**
			 * Sets this list view's content insets.
			 */
			setContentInsets(edgeInsets: Padding, options?: AnimatedWithDurationOptions): void;

			/**
			 * Sets the value of the content offset of the list view without animation by default.
			 */
			setContentOffset(contentOffset: Point, options?: AnimatedOptions): void;

			/**
			 * Sets a reference item in the list view.
			 */
			setMarker(markerProps: ListViewMarkerProps): void;

		}
	}
}
/**
 * The arguments for the <Titanium.UI.ListView.prefetch> and <Titanium.UI.ListView.cancelprefetch> events.
 */
interface ListItemEventType {
	/**
	 * The item ID bound to the list item that generated the event.
	 */
	itemId?: string;

	/**
	 * Item index.
	 */
	itemIndex?: number;

	/**
	 * List section if the item is contained in a list section.
	 */
	section?: Titanium.UI.ListSection;

	/**
	 * Section index.
	 */
	sectionIndex?: number;

}
/**
 * A simple object for specifying the animation properties to use when inserting or deleting
 * sections or cells, or scrolling the list.
 */
interface ListViewAnimationProperties {
	/**
	 * Whether this list change should be animated. Ignored if any `animationStyle` value is specified.
	 */
	animated?: boolean;

	/**
	 * Type of animation to use for cell insertions and deletions.
	 */
	animationStyle?: number;

	/**
	 * Specifies what position to scroll the selected cell to.
	 */
	position?: number;

}
/**
 * A simple object that represents an index entry in a `ListView`.
 */
interface ListViewIndexEntry {
	/**
	 * Section index associated with this title.
	 */
	index?: number;

	/**
	 * Title to display in the index bar.
	 */
	title?: string;

}
/**
 * The parameter for [setMarker](Titanium.UI.ListView.setMarker) and [addMarker](Titanium.UI.ListView.addMarker) methods.
 */
interface ListViewMarkerProps {
	/**
	 * The itemIndex of the reference item.
	 */
	itemIndex?: number;

	/**
	 * The sectionIndex of the reference item.
	 */
	sectionIndex?: number;

}
/**
 * The arguments for the <Titanium.UI.ListView.itemsselected> event.
 */
interface SelectedItem {
	/**
	 * Item index.
	 */
	itemIndex?: number;

	/**
	 * List section if the item is contained in a list section.
	 */
	section?: Titanium.UI.ListSection;

	/**
	 * Section index.
	 */
	sectionIndex?: number;

}
