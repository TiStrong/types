declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.TableView
		 */
		interface TableViewBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.TableView;

		}
		/**
		 * Fired when a table row is clicked by the user.
		 */
		interface TableView_click_Event extends TableViewBaseEvent {
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
			 * Properties of the row.
			 * When the row is created implicitly using a JavaScript dictionary object,
			 * use this property rather than `row` to access any custom row properties.
			 * Here's an example of creating a row implicitly, which is not the recommended way.
			 * ``` js
			 * var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];
			 * var table = Ti.UI.createTableView({data: data});
			 * ```
			 */
			rowData: Dictionary<Titanium.UI.TableViewRow>;

			/**
			 * Indicates whether the table is in search mode.
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
		interface TableView_dblclick_Event extends TableViewBaseEvent {
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
		 * Fired when the device detects a double tap against this view.
		 */
		interface TableView_doubletap_Event extends TableViewBaseEvent {
			/**
			 * Row index.
			 */
			index: number;

			/**
			 * Table view row object.
			 */
			row: Titanium.UI.TableViewRow;

			/**
			 * Properties of the row.
			 * When the row is created implicitly using a JavaScript dictionary object,
			 * use this property rather than `row` to access any custom row properties.
			 * Here's an example of creating a row implicitly, which is not the recommended way.
			 * ``` js
			 * var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];
			 * var table = Ti.UI.createTableView({data: data});
			 * ```
			 */
			rowData: Dictionary<Titanium.UI.TableViewRow>;

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
		interface TableView_focus_Event extends TableViewBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface TableView_keypressed_Event extends TableViewBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface TableView_longclick_Event extends TableViewBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface TableView_longpress_Event extends TableViewBaseEvent {
			/**
			 * Row index.
			 */
			index: number;

			/**
			 * Table view row object.
			 */
			row: Titanium.UI.TableViewRow;

			/**
			 * Properties of the row.
			 * When the row is created implicitly using a JavaScript dictionary object,
			 * use this property rather than `row` to access any custom row properties.
			 * Here's an example of creating a row implicitly, which is not the recommended way.
			 * ``` js
			 * var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];
			 * var table = Ti.UI.createTableView({data: data});
			 * ```
			 */
			rowData: Dictionary<Titanium.UI.TableViewRow>;

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
		interface TableView_pinch_Event extends TableViewBaseEvent {
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
		interface TableView_postlayout_Event extends TableViewBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface TableView_singletap_Event extends TableViewBaseEvent {
			/**
			 * Row index.
			 */
			index: number;

			/**
			 * Table view row object.
			 */
			row: Titanium.UI.TableViewRow;

			/**
			 * Properties of the row.
			 * When the row is created implicitly using a JavaScript dictionary object,
			 * use this property rather than `row` to access any custom row properties.
			 * Here's an example of creating a row implicitly, which is not the recommended way.
			 *     var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];
			 *     var table = Ti.UI.createTableView({data: data});
			 */
			rowData: Dictionary<Titanium.UI.TableViewRow>;

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
		 * Fired when the device detects a swipe gesture (left or right) against the view.
		 */
		interface TableView_swipe_Event extends TableViewBaseEvent {
			/**
			 * Direction of the swipe, either `left` or `right`.
			 */
			direction: string;

			/**
			 * Row index.
			 */
			index: number;

			/**
			 * Table view row object.
			 */
			row: Titanium.UI.TableViewRow;

			/**
			 * Properties of the row.
			 * When the row is created implicitly using a JavaScript dictionary object,
			 * use this property rather than `row` to access any custom row properties.
			 * Here's an example of creating a row implicitly, which is not the recommended way.
			 * ``` js
			 * var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];
			 * var table = Ti.UI.createTableView({data: data});
			 * ```
			 */
			rowData: Dictionary<Titanium.UI.TableViewRow>;

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
		interface TableView_touchcancel_Event extends TableViewBaseEvent {
			/**
			 * A value which indicates the stylus angle on the screen. If the stylus is perpendicular to the screen or no stylus is
			 * being used, the value will be Pi/2. If the stylus is parallel to the screen, the value will be 0.
			 * Note: This property is only available for iOS devices that support 3D-Touch and are 9.1 or later.
			 */
			altitudeAngle: number;

			/**
			 * The current force value of the touch event.
			 * Note: This property only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			force: number;

			/**
			 * Maximum possible value of the force property.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			maximumPossibleForce: number;

			/**
			 * The time (in seconds) when the touch was used in correlation with the system start up.
			 *  Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
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
		 * Fired when a touch gesture is complete.
		 */
		interface TableView_touchend_Event extends TableViewBaseEvent {
			/**
			 * A value which indicates the stylus angle on the screen. If the stylus is perpendicular to the screen or no stylus is
			 * being used, the value will be Pi/2. If the stylus is parallel to the screen, the value will be 0.
			 * Note: This property is only available for iOS devices that support 3D-Touch and are 9.1 or later.
			 */
			altitudeAngle: number;

			/**
			 * The current force value of the touch event.
			 * Note: This property only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			force: number;

			/**
			 * Row index.
			 */
			index: number;

			/**
			 * Maximum possible value of the force property.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			maximumPossibleForce: number;

			/**
			 * Table view row object.
			 */
			row: Titanium.UI.TableViewRow;

			/**
			 * Properties of the row.
			 * When the row is created implicitly using a JavaScript dictionary object,
			 * use this property rather than `row` to access any custom row properties.
			 * Here's an example of creating a row implicitly, which is not the recommended way.
			 * ``` js
			 * var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];
			 * var table = Ti.UI.createTableView({data: data});
			 * ```
			 */
			rowData: Dictionary<Titanium.UI.TableViewRow>;

			/**
			 * The time (in seconds) when the touch was used in correlation with the system start up.
			 *  Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
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
		interface TableView_touchmove_Event extends TableViewBaseEvent {
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
		interface TableView_touchstart_Event extends TableViewBaseEvent {
			/**
			 * A value which indicates the stylus angle on the screen. If the stylus is perpendicular to the screen or no stylus is
			 * being used, the value will be Pi/2. If the stylus is parallel to the screen, the value will be 0.
			 * Note: This property is only available for iOS devices that support 3D-Touch and are 9.1 or later.
			 */
			altitudeAngle: number;

			/**
			 * The current force value of the touch event.
			 * Note: This property only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			force: number;

			/**
			 * Row index.
			 */
			index: number;

			/**
			 * Maximum possible value of the force property.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			maximumPossibleForce: number;

			/**
			 * Table view row object.
			 */
			row: Titanium.UI.TableViewRow;

			/**
			 * Properties of the row.
			 * When the row is created implicitly using a JavaScript dictionary object,
			 * use this property rather than `row` to access any custom row properties.
			 * Here's an example of creating a row implicitly, which is not the recommended way.
			 * ``` js
			 * var data = [{title:'Row 1', hasChild:true, color:'red', selectedColor:'#fff', special:'special 1'},];
			 * var table = Ti.UI.createTableView({data: data});
			 * ```
			 */
			rowData: Dictionary<Titanium.UI.TableViewRow>;

			/**
			 * The time (in seconds) when the touch was used in correlation with the system start up.
			 *  Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
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
		interface TableView_twofingertap_Event extends TableViewBaseEvent {
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
		 * Fired when user stops two-pan gesture interaction for selecting multiple rows.
		 * It is used in conjunction with <Titanium.UI.TableView.allowsMultipleSelectionInteraction>.
		 */
		interface TableView_rowsselected_Event extends TableViewBaseEvent {
			/**
			 * List of rows selected by user.
			 */
			selectedRows: SelectedRowObject[];

			/**
			 * First row selected when user started interaction.
			 */
			startingRow: SelectedRowObject;

		}
		/**
		 * Fired when a table row is deleted by the user.
		 */
		interface TableView_delete_Event extends TableViewBaseEvent {
			/**
			 * Indicates whether the delete button was clicked. Always `false` for this event.
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
			 * Properties of the row. Use this property rather than `row` to access any custom row
			 * properties.
			 */
			rowData: Dictionary<Titanium.UI.TableViewRow>;

			/**
			 * Indicates whether the table is in search mode. Always `false` for this event.
			 */
			searchMode: boolean;

			/**
			 * Table view section object, if the deleted row is contained in a section.
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
		 * Fired when the index bar is clicked by the user.
		 */
		interface TableView_indexclick_Event extends TableViewBaseEvent {
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
		 * Fired when a table row is moved by the user.
		 */
		interface TableView_move_Event extends TableViewBaseEvent {
			/**
			 * Boolean to indicate if the right area was clicked. Always `false` for this event.
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
			 * Properties of the row. Use this property rather than `row` to access any custom row
			 * properties.
			 */
			rowData: Dictionary<Titanium.UI.TableViewRow>;

			/**
			 * Boolean to indicate if the table is in search mode. Always `false` for this event.
			 */
			searchMode: boolean;

			/**
			 * Table view section object, if the deleted row is contained in a section.
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
		 * Fired when the table view is scrolled.
		 */
		interface TableView_scroll_Event extends TableViewBaseEvent {
			/**
			 * Dictionary with `x` and `y` properties containing the content offset.
			 */
			contentOffset: Point;

			/**
			 * Dictionary with `width` and `height` properties containing the size of the content
			 * (regardless of the display size in the case of scrolling).
			 */
			contentSize: Size;

			/**
			 * Row index of the topmost visible row in the view.
			 */
			firstVisibleItem: number;

			/**
			 * Dictionary with `width` and `height` properties containing the size of the visible
			 * table view
			 */
			size: Size;

			/**
			 * Total number of rows in the view.
			 */
			totalItemCount: number;

			/**
			 * Number of rows currently visible in the view.
			 */
			visibleItemCount: number;

		}
		/**
		 * Fired when the table view stops scrolling.
		 */
		interface TableView_scrollend_Event extends TableViewBaseEvent {
			/**
			 * Dictionary with `x` and `y` properties containing the content offset.
			 */
			contentOffset: Point;

			/**
			 * Dictionary with `width` and `height` properties containing the size of the content
			 * (regardless of the display size in the case of scrolling).
			 */
			contentSize: Size;

			/**
			 * Dictionary with `width` and `height` properties containing the size of the visible
			 * table view.
			 */
			size: Size;

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
		 * Fired when the scrollable region starts being dragged.
		 */
		interface TableView_dragstart_Event extends TableViewBaseEvent {
		}
		/**
		 * Fired when the scrollable region stops being dragged.
		 */
		interface TableView_dragend_Event extends TableViewBaseEvent {
			/**
			 * Indicates whether scrolling will continue but decelerate, now that the drag gesture has
			 * been released by the touch. If `false`, scrolling will stop immediately.
			 */
			decelerate: boolean;

		}
		interface TableViewEventMap extends ProxyEventMap {
			click: TableView_click_Event;

			dblclick: TableView_dblclick_Event;

			delete: TableView_delete_Event;

			doubletap: TableView_doubletap_Event;

			dragend: TableView_dragend_Event;

			dragstart: TableView_dragstart_Event;

			focus: TableView_focus_Event;

			indexclick: TableView_indexclick_Event;

			keypressed: TableView_keypressed_Event;

			longclick: TableView_longclick_Event;

			longpress: TableView_longpress_Event;

			move: TableView_move_Event;

			pinch: TableView_pinch_Event;

			postlayout: TableView_postlayout_Event;

			rowsselected: TableView_rowsselected_Event;

			scroll: TableView_scroll_Event;

			scrollend: TableView_scrollend_Event;

			singletap: TableView_singletap_Event;

			swipe: TableView_swipe_Event;

			touchcancel: TableView_touchcancel_Event;

			touchend: TableView_touchend_Event;

			touchmove: TableView_touchmove_Event;

			touchstart: TableView_touchstart_Event;

			twofingertap: TableView_twofingertap_Event;

		}
		/**
		 * A table view is used to present information, organized in sections and rows, in a
		 * vertically-scrolling view.
		 */
		class TableView extends Titanium.UI.View {
			/**
			 * Determines whether multiple items of this table view can be selected at the same time while editing the table.
			 */
			allowsMultipleSelectionDuringEditing: boolean;

			/**
			 * Allows a two-finger pan gesture to automatically transition the table view into editing mode and start selecting rows.
			 */
			allowsMultipleSelectionInteraction: boolean;

			/**
			 * Determines whether this table's rows can be selected.
			 */
			allowsSelection: boolean;

			/**
			 * Determines whether this table's rows can be selected while editing the table.
			 */
			allowsSelectionDuringEditing: boolean;

			/**
			 * Background color of the view, as a color name or hex triplet.
			 */
			backgroundColor: string | Titanium.UI.Color;

			/**
			 * Selected background color of the view, as a color name or hex triplet.
			 */
			backgroundSelectedColor: never;

			/**
			 * Selected background image url for the view, specified as a local file path or URL.
			 */
			backgroundSelectedImage: never;

			/**
			 * Array of this view's child views.
			 */
			readonly children: never;

			/**
			 * Rows of the table view.
			 */
			data: Titanium.UI.TableViewRow[] | Titanium.UI.TableViewSection[];

			/**
			 * A Boolean indicating whether the underlying content is dimmed during a search.
			 */
			dimBackgroundForSearch: boolean;

			/**
			 * Determines the rows' default editable behavior, which allows them to be deleted by the user
			 * when the table is in `editing` or `moving` mode.
			 */
			editable: boolean;

			/**
			 * Determines whether row editing mode is active.
			 */
			editing: boolean;

			/**
			 * Determines whether the search is limited to the start of the string
			 */
			filterAnchored: boolean;

			/**
			 * Filter attribute to be used when searching.
			 */
			filterAttribute: string;

			/**
			 * Determines whether the search is case insensitive.
			 */
			filterCaseInsensitive: boolean;

			/**
			 * When set to false, the ListView will not draw the divider before the footer view.
			 */
			footerDividersEnabled: boolean;

			/**
			 * Table view footer title.
			 */
			footerTitle: string;

			/**
			 * Table view footer as a view that will be rendered instead of a label.
			 */
			footerView: Titanium.UI.View;

			/**
			 * When set to false, the ListView will not draw the divider after the header view.
			 */
			headerDividersEnabled: boolean;

			/**
			 * View positioned above the first row that is only revealed when the user drags the table
			 * contents down.
			 */
			headerPullView: Titanium.UI.View;

			/**
			 * Table view header title.
			 */
			headerTitle: string;

			/**
			 * Table view header as a view that will be rendered instead of a label.
			 */
			headerView: Titanium.UI.View;

			/**
			 * Determines whether the search field should hide on completion.
			 */
			hideSearchOnSelection: boolean;

			/**
			 * Array of objects (with `title` and `index` properties) to control the table view index.
			 */
			index: TableViewIndexEntry[];

			/**
			 * Max number of row class names.
			 */
			maxClassname: number;

			/**
			 * Maximum row height for table view rows.
			 */
			maxRowHeight: number;

			/**
			 * Minimum row height for table view rows.
			 */
			minRowHeight: number;

			/**
			 * Determines the rows' default moveable behavior, which allows them to be re-ordered by the
			 * user when the table is in `editing` or `moving` mode.
			 */
			moveable: boolean;

			/**
			 * Determines whether row moving mode is active.
			 */
			moving: boolean;

			/**
			 * Determines the behavior when the user overscrolls the view.
			 */
			overScrollMode: number;

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
			 * Default row height for table view rows.
			 */
			rowHeight: number;

			/**
			 * The insets for table view cells (applies to all cells).
			 */
			rowSeparatorInsets: HorizontalInsets;

			/**
			 * Style of the scrollbar.
			 */
			scrollIndicatorStyle: number;

			/**
			 * If `true`, the tableview can be scrolled.
			 */
			scrollable: boolean;

			/**
			 * Controls whether the scroll-to-top gesture is effective.
			 */
			scrollsToTop: boolean;

			/**
			 * Search field to use for the table view.
			 */
			search: Titanium.UI.SearchBar | Titanium.UI.Android.SearchView;

			/**
			 * Determines whether the [SearchBar](Titanium.UI.SearchBar) or [SearchView](Titanium.UI.Android.SearchView) appears as part of the TableView.
			 */
			searchAsChild: boolean;

			/**
			 * Determines whether the search field is visible.
			 */
			searchHidden: boolean;

			/**
			 * Number of sections in this table view.
			 */
			readonly sectionCount: number;

			/**
			 * Padding above each section header.
			 */
			sectionHeaderTopPadding: number;

			/**
			 * Sections of this table.
			 */
			sections: Titanium.UI.TableViewSection[];

			/**
			 * Separator line color between rows, as a color name or hex triplet.
			 */
			separatorColor: string | Titanium.UI.Color;

			/**
			 * The insets for table view separators (applies to all cells).
			 * @deprecated Use [Titanium.UI.TableView.tableSeparatorInsets](Titanium.UI.TableView.tableSeparatorInsets) instead.
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
			 * Determines whether the selection checkmark is displayed on selected rows.
			 */
			showSelectionCheck: boolean;

			/**
			 * Determines whether this table view displays a vertical scroll indicator.
			 */
			showVerticalScrollIndicator: boolean;

			/**
			 * Style of the table view, specified using one of the constants from
			 * <Titanium.UI.iOS.TableViewStyle>.
			 */
			style: number;

			/**
			 * The insets for the table view header and footer.
			 */
			tableSeparatorInsets: HorizontalInsets;

			/**
			 * A material design visual construct that provides an instantaneous visual confirmation of touch point.
			 */
			touchFeedback: boolean;

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add: never;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof TableViewEventMap>(name: K, callback: (this: Titanium.UI.TableView, event: TableViewEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Appends a single row or an array of rows to the end of the table.
			 */
			appendRow(row: Titanium.UI.TableViewRow | Dictionary<Titanium.UI.TableViewRow> | Titanium.UI.TableViewRow[] | Array<Dictionary<Titanium.UI.TableViewRow>>, animation?: TableViewAnimationProperties): void;

			/**
			 * Appends a single section or an array of sections to the end of the table.
			 */
			appendSection(section: Titanium.UI.TableViewSection | Dictionary<Titanium.UI.TableViewSection> | Titanium.UI.TableViewSection[] | Array<Dictionary<Titanium.UI.TableViewSection>>, animation?: TableViewAnimationProperties): void;

			/**
			 * Deletes an existing row.
			 */
			deleteRow(row: number | Titanium.UI.TableViewRow, animation?: TableViewAnimationProperties): void;

			/**
			 * Deletes an existing section.
			 */
			deleteSection(section: number, animation?: TableViewAnimationProperties): void;

			/**
			 * Programmatically deselects a row.
			 */
			deselectRow(row: number): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof TableViewEventMap>(name: K, event?: TableViewEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Inserts a row after another row.
			 */
			insertRowAfter(index: number, row: Titanium.UI.TableViewRow | Dictionary<Titanium.UI.TableViewRow>, animation?: TableViewAnimationProperties): void;

			/**
			 * Inserts a row before another row.
			 */
			insertRowBefore(index: number, row: Titanium.UI.TableViewRow | Dictionary<Titanium.UI.TableViewRow>, animation?: TableViewAnimationProperties): void;

			/**
			 * Inserts a section after another section.
			 */
			insertSectionAfter(index: number, section: Titanium.UI.TableViewSection | Dictionary<Titanium.UI.TableViewSection>, animation?: TableViewAnimationProperties): void;

			/**
			 * Inserts a section before another section.
			 */
			insertSectionBefore(index: number, section: Titanium.UI.TableViewSection | Dictionary<Titanium.UI.TableViewSection>, animation?: TableViewAnimationProperties): void;

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
			removeEventListener<K extends keyof TableViewEventMap>(name: K, callback: (this: Titanium.UI.TableView, event: TableViewEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt: never;

			/**
			 * Scrolls the table view to ensure that the specified row is on screen.
			 */
			scrollToIndex(index: number, animation?: TableViewAnimationProperties): void;

			/**
			 * Scrolls the table to a specific top position where 0 is the topmost y position in the
			 * table view.
			 */
			scrollToTop(top: number, animation?: TableViewAnimationProperties): void;

			/**
			 * Programmatically selects a row. In Android, it sets the currently selected item. If in touch mode,
			 * the item will not be selected but it will still be positioned appropriately. If the specified
			 * selection position is less than 0, then the item at position 0 will be selected.
			 */
			selectRow(row: number): void;

			/**
			 * Sets this tableview's content insets.
			 */
			setContentInsets(edgeInsets: Padding, options?: AnimatedWithDurationOptions): void;

			/**
			 * Sets the value of the content offset of the table view without animation by default.
			 */
			setContentOffset(contentOffset: Point, options?: AnimatedOptions): void;

			/**
			 * Sets the data in the table.
			 */
			setData(data: Titanium.UI.TableViewRow[] | Array<Dictionary<Titanium.UI.TableViewRow>> | Titanium.UI.TableViewSection[], animation?: TableViewAnimationProperties): void;

			/**
			 * Sets the value of the [Titanium.UI.TableView.headerPullView] property.
			 * @deprecated Use the <Titanium.UI.TableView.headerPullView> property instead.
			 */
			setHeaderPullView: never;

			/**
			 * Updates an existing row, optionally with animation.
			 */
			updateRow(index: number, row: Titanium.UI.TableViewRow, animation: TableViewAnimationProperties): void;

			/**
			 * Updates an existing section, optionally with animation.
			 */
			updateSection(index: number, section: Titanium.UI.TableViewSection, animation: TableViewAnimationProperties): void;

		}
	}
}
/**
 * The arguments for the <Titanium.UI.TableView.rowsselected> event.
 */
interface SelectedRowObject {
	/**
	 * Row index.
	 */
	index?: number;

	/**
	 * Table view row object.
	 */
	row?: Titanium.UI.TableViewRow;

	/**
	 * Properties of the row. Use this property rather than `row` to access any custom row properties.
	 */
	rowData?: Dictionary<Titanium.UI.TableViewRow>;

	/**
	 * Table view section object, if the clicked row is contained in a section.
	 */
	section?: Titanium.UI.TableViewSection;

}
/**
 * A simple object for specifying the animation properties to use when inserting or deleting rows, or scrolling the table.
 */
interface TableViewAnimationProperties {
	/**
	 * Whether this table change should be animated. Ignored if any `animationStyle` value is specified.
	 */
	animated?: boolean;

	/**
	 * Type of animation to use for row insertions and deletions.
	 */
	animationStyle?: number;

	/**
	 * Specifies what position to scroll the selected row to.
	 */
	position?: number;

}
/**
 * A simple object that represents an index entry in a `TableView`.
 */
interface TableViewIndexEntry {
	/**
	 * Row index associated with this item.
	 */
	index?: number;

	/**
	 * Title to display in the index bar for this item.
	 */
	title?: string;

}
