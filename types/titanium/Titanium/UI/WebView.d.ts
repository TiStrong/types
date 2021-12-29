declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.WebView
		 */
		interface WebViewBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.WebView;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface WebView_click_Event extends WebViewBaseEvent {
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
		interface WebView_dblclick_Event extends WebViewBaseEvent {
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
		interface WebView_doubletap_Event extends WebViewBaseEvent {
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
		interface WebView_focus_Event extends WebViewBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface WebView_keypressed_Event extends WebViewBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface WebView_longclick_Event extends WebViewBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface WebView_longpress_Event extends WebViewBaseEvent {
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
		interface WebView_pinch_Event extends WebViewBaseEvent {
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
		interface WebView_postlayout_Event extends WebViewBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface WebView_singletap_Event extends WebViewBaseEvent {
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
		interface WebView_swipe_Event extends WebViewBaseEvent {
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
		interface WebView_touchcancel_Event extends WebViewBaseEvent {
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
		interface WebView_touchend_Event extends WebViewBaseEvent {
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
		interface WebView_touchmove_Event extends WebViewBaseEvent {
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
		interface WebView_touchstart_Event extends WebViewBaseEvent {
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
		interface WebView_twofingertap_Event extends WebViewBaseEvent {
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
		 * Fired before the web view starts loading its content.
		 */
		interface WebView_beforeload_Event extends WebViewBaseEvent {
			/**
			 * Indicate if the event was generated from the main page or an iframe.
			 */
			isMainFrame: boolean;

			/**
			 * Constant indicating the user's action.
			 */
			navigationType: number;

			/**
			 * URL of the web document being loaded.
			 */
			url: string;

		}
		/**
		 * Fired when the web view cannot load the content.
		 */
		interface WebView_error_Event extends WebViewBaseEvent {
			/**
			 * Error code.
			 * If the error was generated by the operating system, that system's error value
			 * is used. Otherwise, this value will be -1.
			 */
			code: number;

			/**
			 * Error message, if any returned. May be undefined.
			 */
			error: string;

			/**
			 * A constant or underlying platform specific error code. Use code instead.
			 * @deprecated Use the `code` property instead. Removed on ios in 8.0.0. Removed on android in 9.0.0.
			 */
			errorCode: never;

			/**
			 * Error message. Use error instead.
			 * @deprecated Use the `error` property instead. Removed on ios in 8.0.0. Removed on android in 9.0.0.
			 */
			message: never;

			/**
			 * Indicates a successful operation. Returns `false`.
			 */
			success: boolean;

			/**
			 * URL of the web document.
			 */
			url: string;

		}
		/**
		 * Fired when the web view content is loaded.
		 */
		interface WebView_load_Event extends WebViewBaseEvent {
			/**
			 * URL of the web document.
			 */
			url: string;

		}
		/**
		 * Fired when loading resource.
		 */
		interface WebView_onLoadResource_Event extends WebViewBaseEvent {
			/**
			 * The url of the resource that will load.
			 */
			url: string;

		}
		/**
		 * Fired when an SSL error occurred.
		 */
		interface WebView_sslerror_Event extends WebViewBaseEvent {
			/**
			 * SSL error code.
			 */
			code: number;

		}
		/**
		 * Fired when a blacklisted URL is stopped.
		 */
		interface WebView_blacklisturl_Event extends WebViewBaseEvent {
			/**
			 * The URL of the web document that is stopped.
			 */
			url: string;

		}
		/**
		 * Fired when a URL has been blocked from loading.
		 */
		interface WebView_blockedurl_Event extends WebViewBaseEvent {
			/**
			 * The URL of the web document that has been blocked from loading.
			 */
			url: string;

		}
		/**
		 * Fired when a script message is received from a webpage.
		 */
		interface WebView_message_Event extends WebViewBaseEvent {
			/**
			 * The body of the message sent from webview.
			 */
			body: string;

			/**
			 * A Boolean value indicating whether the frame is the web site's main frame or a subframe.
			 */
			isMainFrame: boolean;

			/**
			 * The name of the message handler to which the message is sent.
			 */
			name: string;

			/**
			 * URL of the web document being loaded.
			 */
			url: string;

		}
		/**
		 * Fired when webpage download progresses.
		 */
		interface WebView_progress_Event extends WebViewBaseEvent {
			/**
			 * URL of the web document being loaded.
			 */
			url: string;

			/**
			 * An estimate of what fraction of the current navigation has been loaded.
			 */
			value: number;

		}
		/**
		 * Fired when a web view receives a server redirect.
		 */
		interface WebView_redirect_Event extends WebViewBaseEvent {
			/**
			 * Page title of webpage.
			 */
			title: string;

			/**
			 * URL of the web document being loaded.
			 */
			url: string;

		}
		/**
		 * Fired when <Titanium.UI.WebView.allowedURLSchemes> contains scheme of opening url.
		 */
		interface WebView_handleurl_Event extends WebViewBaseEvent {
			/**
			 * Handler <Titanium.UI.iOS.WebViewDecisionHandler>.
			 */
			handler: string;

			/**
			 * URL of the web document being loaded.
			 */
			url: string;

		}
		interface WebViewEventMap extends ProxyEventMap {
			beforeload: WebView_beforeload_Event;

			blacklisturl: WebView_blacklisturl_Event;

			blockedurl: WebView_blockedurl_Event;

			click: WebView_click_Event;

			dblclick: WebView_dblclick_Event;

			doubletap: WebView_doubletap_Event;

			error: WebView_error_Event;

			focus: WebView_focus_Event;

			handleurl: WebView_handleurl_Event;

			keypressed: WebView_keypressed_Event;

			load: WebView_load_Event;

			longclick: WebView_longclick_Event;

			longpress: WebView_longpress_Event;

			message: WebView_message_Event;

			onLoadResource: WebView_onLoadResource_Event;

			pinch: WebView_pinch_Event;

			postlayout: WebView_postlayout_Event;

			progress: WebView_progress_Event;

			redirect: WebView_redirect_Event;

			singletap: WebView_singletap_Event;

			sslerror: WebView_sslerror_Event;

			swipe: WebView_swipe_Event;

			touchcancel: WebView_touchcancel_Event;

			touchend: WebView_touchend_Event;

			touchmove: WebView_touchmove_Event;

			touchstart: WebView_touchstart_Event;

			twofingertap: WebView_twofingertap_Event;

		}
		/**
		 * The web view allows you to open an HTML5 based view which can load either local or remote content.
		 */
		class WebView extends Titanium.UI.View {
			/**
			 * List of allowed URL schemes for the web view.
			 */
			allowedURLSchemes: string[];

			/**
			 * A Boolean value indicating whether horizontal swipe gestures will trigger back-forward list navigations.
			 */
			allowsBackForwardNavigationGestures: boolean;

			/**
			 * A Boolean value that determines whether pressing on a link displays a preview of the
			 * destination for the link.
			 */
			allowsLinkPreview: boolean;

			/**
			 * Path of file or directory to allow read access by the WebView.
			 */
			assetsDirectory: string;

			/**
			 * An array of url strings to blacklist.
			 * @deprecated Use the <Titanium.UI.WebView.blockedURLs> property instead.
			 */
			blacklistedURLs: string[];

			/**
			 * An array of url strings to be blocked.
			 */
			blockedURLs: string[];

			/**
			 * Determines how a cache is used in this web view.
			 */
			cacheMode: number;

			/**
			 * The cache policy for the request.
			 */
			cachePolicy: number;

			/**
			 * Array of this view's child views.
			 */
			readonly children: never;

			/**
			 * The configuration for the new web view.
			 */
			configuration: Titanium.UI.iOS.WebViewConfiguration;

			/**
			 * Web content to load.
			 */
			data: Titanium.Blob | Titanium.Filesystem.File;

			/**
			 * Determines whether the view will bounce when scrolling to the edge of the scrollable region.
			 */
			disableBounce: boolean;

			/**
			 * Determines whether or not the webview should not be able to display the context menu.
			 */
			disableContextMenu: boolean;

			/**
			 * Enable adding javascript interfaces internally to webview prior to JELLY_BEAN_MR1 (Android 4.2)
			 */
			enableJavascriptInterface: boolean;

			/**
			 * If `true`, zoom controls are enabled.
			 */
			enableZoomControls: boolean;

			/**
			 * Lets the webview handle platform supported urls
			 * @deprecated This property in no more supported in Titanium SDK 8.0.0+. Use property <Titanium.UI.WebView.allowedURLSchemes>
			 * in conjuction with <Titanium.UI.WebView.handleurl>. See the example section
			 * "Usage of allowedURLSchemes and handleurl in iOS".
			 *
			 */
			handlePlatformUrl: boolean;

			/**
			 * Hides activity indicator when loading remote URL.
			 */
			hideLoadIndicator: boolean;

			/**
			 * HTML content of this web view.
			 */
			html: string;

			/**
			 * Controls whether to ignore invalid SSL certificates or not.
			 */
			ignoreSslError: boolean;

			/**
			 * A Boolean value indicating whether web content can programmatically display the keyboard.
			 */
			keyboardDisplayRequiresUserAction: boolean;

			/**
			 * Enables using light touches to make a selection and activate mouseovers.
			 */
			lightTouchEnabled: boolean;

			/**
			 * Indicates if the webview is loading content.
			 */
			loading: boolean;

			/**
			 * If `true`, allows the loading of insecure resources from a secure origin.
			 */
			mixedContentMode: boolean;

			/**
			 * Callback function called when there is a request for the application to create a new window
			 * to host new content.
			 */
			onCreateWindow: (param0: any) => void;

			/**
			 * Fired before navigating to a link.
			 */
			onlink: (param0: OnLinkURLResponse) => void;

			/**
			 * Determines the behavior when the user overscrolls the view.
			 */
			overScrollMode: number;

			/**
			 * Determines how to treat content that requires plugins in this web view.
			 */
			pluginState: number;

			/**
			 * An estimate of what fraction of the current navigation has been loaded.
			 */
			readonly progress: number;

			/**
			 * Sets extra request headers for this web view to use on subsequent URL requests.
			 */
			requestHeaders: any;

			/**
			 * If `true`, scale contents to fit the web view.
			 */
			scalesPageToFit: boolean;

			/**
			 * Controls whether the scroll-to-top gesture is effective.
			 */
			scrollsToTop: boolean;

			/**
			 * A Boolean value indicating whether all resources on the page have been loaded through
			 * securely encrypted connections.
			 */
			readonly secure: boolean;

			/**
			 * The level of granularity with which the user can interactively select content in the web view.
			 */
			readonly selectionGranularity: number;

			/**
			 * The timeout interval for the request, in seconds.
			 */
			timeout: number;

			/**
			 * Returns page title of webpage.
			 */
			readonly title: string;

			/**
			 * URL to the web document.
			 */
			url: string;

			/**
			 * The User-Agent header used by the web view when requesting content.
			 */
			userAgent: string;

			/**
			 * Explicitly specifies if this web view handles touches.
			 */
			willHandleTouches: boolean;

			/**
			 * Manage the zoom-level of the current page.
			 */
			zoomLevel: number;

			/**
			 * Adds a child to this view's hierarchy.
			 */
			add: never;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof WebViewEventMap>(name: K, callback: (this: Titanium.UI.WebView, event: WebViewEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Adds a script message handler.
			 */
			addScriptMessageHandler(handlerName: string): void;

			/**
			 * Adds a user script.
			 */
			addUserScript(params: UserScriptParams): void;

			/**
			 * An object which maintains a list of visited pages used to go back and forward to the most recent page.
			 */
			backForwardList(): BackForwardList;

			/**
			 * Returns `true` if the web view can go back in its history list.
			 */
			canGoBack(): boolean;

			/**
			 * Returns `true` if the web view can go forward in its history list.
			 */
			canGoForward(): boolean;

			/**
			 * Create a PDF document representation from the web page currently displayed in the WebView.
			 */
			createPDF(callback: (param0: DataCreationResult) => void): void;

			/**
			 * Create WebKit web archive data representing the current web content of the WebView.
			 */
			createWebArchive(callback: (param0: DataCreationResult) => void): void;

			/**
			 * Evaluates a JavaScript expression inside the context of the web view and
			 * optionally, returns a result. If a callback function is passed in as second argument,
			 * the evaluation will take place asynchronously and the the callback function will be called with the result.
			 */
			evalJS(code: string, callback?: (param0: string) => void): string;

			/**
			 * Searches the page contents for the given string.
			 */
			findString(searchString: string, options?: StringSearchOptions, callback?: (param0: SearchResult) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof WebViewEventMap>(name: K, event?: WebViewEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Goes back one entry in the web view's history list, to the previous page.
			 */
			goBack(): void;

			/**
			 * Goes forward one entry in this web view's history list, if possible.
			 */
			goForward(): void;

			/**
			 * Pauses native webview plugins.
			 */
			pause(): void;

			/**
			 * Releases memory when the web view is no longer needed.
			 */
			release(): void;

			/**
			 * Reloads the current webpage.
			 */
			reload(): void;

			/**
			 * Removes a child view from this view's hierarchy.
			 */
			remove: never;

			/**
			 * Removes all child views from this view's hierarchy.
			 */
			removeAllChildren: never;

			/**
			 * Removes all associated user scripts.
			 */
			removeAllUserScripts(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof WebViewEventMap>(name: K, callback: (this: Titanium.UI.WebView, event: WebViewEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Removes a script message handler.
			 */
			removeScriptMessageHandler(name: string): void;

			/**
			 * Forces the web view to repaint its contents.
			 */
			repaint(): void;

			/**
			 * Replaces a view at the specified position in the [children](Titanium.UI.View.children) array.
			 */
			replaceAt: never;

			/**
			 * Resume native webview plugins.
			 */
			resume(): void;

			/**
			 * Sets the basic authentication for this web view to use on subsequent URL requests.
			 */
			setBasicAuthentication(username: string, password: string, persistence: number): void;

			/**
			 * Sets the value of [html](Titanium.UI.WebView.html) property.
			 */
			setHtml(html: string, options?: setHtmlOptions): void;

			/**
			 * Add native properties for observing for change.
			 */
			startListeningToProperties(propertyList: ReadonlyArray<string>): void;

			/**
			 * Remove native properties from observing.
			 */
			stopListeningToProperties(propertyList: ReadonlyArray<string>): void;

			/**
			 * Stops loading a currently loading page.
			 */
			stopLoading(): void;

			/**
			 * Takes a snapshot of the view's visible viewport.
			 */
			takeSnapshot(callback: (param0: SnapshotResult) => void): void;

		}
	}
}
/**
 * The object returned to the <Titanium.UI.WebView.backForwardList> method.
 */
interface BackForwardList {
	/**
	 * The item immediately preceding the current item.
	 */
	backItem?: BackForwardListItem;

	/**
	 * The portion of the list preceding the current item.
	 */
	backList?: BackForwardListItem[];

	/**
	 * The current item.
	 */
	currentItem?: BackForwardListItem;

	/**
	 * The item immediately following the current item.
	 */
	forwardItem?: BackForwardListItem;

	/**
	 * The portion of the list following the current item.
	 */
	forwardList?: BackForwardListItem[];

}
/**
 * The object represents a webpage in the back-forward of a web view.
 */
interface BackForwardListItem {
	/**
	 * The URL of the initial request that created this item.
	 */
	initialUrl?: string;

	/**
	 * The title of the webpage represented by this item.
	 */
	title?: string;

	/**
	 * The URL of the webpage represented by this item.
	 */
	url?: string;

}
/**
 * The parameter passed to the <Titanium.UI.WebView.createPDF> or <Titanium.UI.WebView.createWebArchive>callback.
 */
interface DataCreationResult {
	/**
	 * The created data.
	 */
	data?: Titanium.Blob;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Indicates if the data creation successful or not.
	 */
	success?: boolean;

}
/**
 * An object returned when the <Titanium.UI.WebView.onlink> callback is fired.
 */
interface OnLinkURLResponse {
	/**
	 * The url of the link that should be navigated to.
	 */
	url?: string;

}
/**
 * The parameter passed to the <Titanium.UI.WebView.findString>.
 */
interface SearchResult {
	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Indicates if string found or not.
	 */
	success?: boolean;

}
/**
 * The parameter passed to the <Titanium.UI.WebView.takeSnapshot> callback.
 */
interface SnapshotResult {
	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * The snapshot image.
	 */
	snapshot?: Titanium.Blob;

	/**
	 * Indicates if the snapshot taken.
	 */
	success?: boolean;

}
/**
 * The optional options to pass to the <Titanium.UI.WebView.findString>. Pass a
 * dictionary with one or more of the following string-keys:
 *     * `caseSensitive` (Boolean value)
 *     * `backward` (Boolean value)
 *     * `wraps` (Boolean value)
 */
interface StringSearchOptions {
	/**
	 * The direction to search from the current selection. The search will respect the writing direction of the document
	 */
	backward?: boolean;

	/**
	 * Whether or not the search should be case sensitive.
	 */
	caseSensitive?: boolean;

	/**
	 * Whether the search should start at the beginning of the document once it reaches the end.
	 */
	wraps?: boolean;

}
/**
 * Dictionary of options for the <Titanium.UI.WebView.addUserScript> method.
 */
interface UserScriptParams {
	/**
	 * The time when the script should be injected into the webpage.
	 */
	injectionTime?: number;

	/**
	 * A Boolean value indicating whether the script should be injected only into the
	 * main frame (true) or into all frames (false).
	 */
	mainFrameOnly?: boolean;

	/**
	 * A script that can be injected into a webpage.
	 */
	source?: string;

}
/**
 * Options used by <Titanium.UI.WebView.setHtml>
 */
interface setHtmlOptions {
	/**
	 * Sets the URL that the web content's paths will be relative to.
	 */
	baseURL?: string;

	/**
	 * Sets the MIME type for the content. Defaults to "text/html" if not specified.
	 */
	mimeType?: string;

}
