declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.TableViewRow
		 */
		interface TableViewRowBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.TableViewRow;

		}
		/**
		 * Fired when a table row is clicked by the user.
		 */
		interface TableViewRow_click_Event extends TableViewRowBaseEvent {
			/**
			 * Indicates whether the detail button was clicked. Only `true` if `row.hasDetail` is
			 * `true` and the detail button was clicked.
			 */
			detail: boolean;

			/**
			 * Row index.
			 */
			index: number;

			/**
			 * Table view row object.
			 */
			row: Titanium.UI.TableViewRow;

			/**
			 * Dictionary containing the properties set on the row.
			 */
			rowData: Dictionary<Titanium.UI.TableViewRow>;

			/**
			 * Boolean to indicate if the table is in search mode.
			 */
			searchMode: boolean;

			/**
			 * Table view section object, if the clicked row is contained in a section.
			 */
			section: Titanium.UI.TableViewSection;

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
		interface TableViewRow_dblclick_Event extends TableViewRowBaseEvent {
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
		interface TableViewRow_doubletap_Event extends TableViewRowBaseEvent {
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
		interface TableViewRow_focus_Event extends TableViewRowBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface TableViewRow_keypressed_Event extends TableViewRowBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface TableViewRow_longclick_Event extends TableViewRowBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface TableViewRow_longpress_Event extends TableViewRowBaseEvent {
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
		interface TableViewRow_pinch_Event extends TableViewRowBaseEvent {
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
		interface TableViewRow_postlayout_Event extends TableViewRowBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface TableViewRow_singletap_Event extends TableViewRowBaseEvent {
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
		interface TableViewRow_swipe_Event extends TableViewRowBaseEvent {
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
		interface TableViewRow_touchcancel_Event extends TableViewRowBaseEvent {
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
		 * Fired when a touch gesture is complete.
		 */
		interface TableViewRow_touchend_Event extends TableViewRowBaseEvent {
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
		 * Fired as soon as the device detects movement of a touch..
		 */
		interface TableViewRow_touchmove_Event extends TableViewRowBaseEvent {
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
		interface TableViewRow_touchstart_Event extends TableViewRowBaseEvent {
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
		interface TableViewRow_twofingertap_Event extends TableViewRowBaseEvent {
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
		interface TableViewRowEventMap extends ProxyEventMap {
			click: TableViewRow_click_Event;

			dblclick: TableViewRow_dblclick_Event;

			doubletap: TableViewRow_doubletap_Event;

			focus: TableViewRow_focus_Event;

			keypressed: TableViewRow_keypressed_Event;

			longclick: TableViewRow_longclick_Event;

			longpress: TableViewRow_longpress_Event;

			pinch: TableViewRow_pinch_Event;

			postlayout: TableViewRow_postlayout_Event;

			singletap: TableViewRow_singletap_Event;

			swipe: TableViewRow_swipe_Event;

			touchcancel: TableViewRow_touchcancel_Event;

			touchend: TableViewRow_touchend_Event;

			touchmove: TableViewRow_touchmove_Event;

			touchstart: TableViewRow_touchstart_Event;

			twofingertap: TableViewRow_twofingertap_Event;

		}
		/**
		 * A table view row is an individual item in a table, organized into table view sections.
		 */
		class TableViewRow extends Titanium.UI.View {
			/**
			 * A succint label associated with the table row for the device's accessibility service.
			 */
			accessibilityLabel: string;

			/**
			 * Background color to render when the row is selected, as a color name or hex triplet.
			 */
			backgroundSelectedColor: string | Titanium.UI.Color;

			/**
			 * Background image to render when the row is selected.
			 */
			backgroundSelectedImage: string;

			/**
			 * Class name for the row.
			 */
			className: string;

			/**
			 * Default text color of the row when not selected, as a color name or hex triplet.
			 */
			color: string | Titanium.UI.Color;

			/**
			 * Text to display on the delete button when editable is enabled
			 */
			deleteButtonTitle: string;

			/**
			 * Determines the rows' editable behavior, which allows them to be deleted by the user when the
			 * table is in `editing` or `moving` mode.
			 */
			editable: boolean;

			/**
			 * Font to use for the row title.
			 */
			font: Font;

			/**
			 * The footer title of the row.
			 * @deprecated Use the <Titanium.UI.TableViewRow.footerTitle> property instead.
			 */
			footer: string;

			/**
			 * The footer title of the row.
			 */
			footerTitle: string;

			/**
			 * Determines whether a system-provided checkmark is displayed on the right-hand side of
			 * the row.
			 */
			hasCheck: boolean;

			/**
			 * Determines whether a system-provided arrow is displayed on the right-hand side of the row.
			 */
			hasChild: boolean;

			/**
			 * Determines whether a system-provided detail disclosure button is displayed on the right-hand
			 * side of the row.
			 */
			hasDetail: boolean;

			/**
			 * The header title of the row.
			 * @deprecated Use the <Titanium.UI.TableViewRow.headerTitle> property instead.
			 */
			header: string;

			/**
			 * The header title of the row.
			 */
			headerTitle: string;

			/**
			 * Indention level for the row.
			 */
			indentionLevel: number;

			/**
			 * Image to render in the left image area of the row, specified as a local path or URL.
			 */
			leftImage: string;

			/**
			 * Determines the rows' moveable behavior, which allows them to be re-ordered by the user when
			 * the table is in `editing` or `moving` mode.
			 */
			moveable: boolean;

			/**
			 * Opacity of this view, from 0.0 (transparent) to 1.0 (opaque). Defaults to 1.0 (opaque).
			 */
			opacity: number;

			/**
			 * Image to render in the right image area of the row, specified as a local path or URL.
			 */
			rightImage: string;

			/**
			 * Background color to render when the row is selected, as a color name or hex triplet.
			 * @deprecated This property has been deprecated in favor of <Titanium.UI.TableViewRow.backgroundSelectedColor>.
			 */
			selectedBackgroundColor: string | Titanium.UI.Color;

			/**
			 * Background image to render when the row is selected.
			 * @deprecated This property has been deprecated in favor of <Titanium.UI.TableViewRow.backgroundSelectedImage>.
			 */
			selectedBackgroundImage: string;

			/**
			 * Color of the row text when the row is selected, as a color name or hex triplet.
			 */
			selectedColor: string | Titanium.UI.Color;

			/**
			 * Selection style constant to control the selection color.
			 */
			selectionStyle: number;

			/**
			 * Text to display on the row.
			 */
			title: string;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof TableViewRowEventMap>(name: K, callback: (this: Titanium.UI.TableViewRow, event: TableViewRowEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Animates this view.
			 */
			animate: never;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof TableViewRowEventMap>(name: K, event?: TableViewRowEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof TableViewRowEventMap>(name: K, callback: (this: Titanium.UI.TableViewRow, event: TableViewRowEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
