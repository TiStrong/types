/// <reference path="./CardView.d.ts" />
/// <reference path="./DrawerLayout.d.ts" />
/// <reference path="./ProgressIndicator.d.ts" />
/// <reference path="./SearchView.d.ts" />
declare namespace Titanium {
	namespace UI {
		/**
		 * The Android-specific UI capabilities. All properties, methods and events in this namespace will
		 * only work on Android systems.
		 * #### Drawer Layout
		 * The drawer-layout components acts as a top-level container for window content that allows
		 * for interactive "drawer" views to be pulled out from one or both vertical edges of the window.
		 * It is represented by a `centerView` and optional `leftView` and `rightView` components that
		 * can be swiped in and out with additional configuration and transitions. Learn more about
		 * drawer-layouts in it's dedicated <Titanium.UI.Android.DrawerLayout> docs.
		 */
		namespace Android {
			/**
			 * Flag allowing window to extend into the status bar and navigation bar.
			 */
			const FLAG_LAYOUT_NO_LIMITS: number;

			/**
			 * Window flag which makes the Android system's navigation bar semi-transparent.
			 */
			const FLAG_TRANSLUCENT_NAVIGATION: number;

			/**
			 * Window flag which makes the Android system's top status bar semi-transparent.
			 */
			const FLAG_TRANSLUCENT_STATUS: number;

			/**
			 * Raw bit controlling whether the right/bottom edge is clipped to its container, based on the gravity direction being applied.
			 */
			const GRAVITY_AXIS_CLIP: number;

			/**
			 * Raw bit controlling how the right/bottom edge is placed.
			 */
			const GRAVITY_AXIS_PULL_AFTER: number;

			/**
			 * Raw bit controlling how the left/top edge is placed.
			 */
			const GRAVITY_AXIS_PULL_BEFORE: number;

			/**
			 * Raw bit indicating the gravity for an axis has been specified.
			 */
			const GRAVITY_AXIS_SPECIFIED: number;

			/**
			 * Bits defining the horizontal axis.
			 */
			const GRAVITY_AXIS_X_SHIFT: number;

			/**
			 * Bits defining the vertical axis.
			 */
			const GRAVITY_AXIS_Y_SHIFT: number;

			/**
			 * Push object to the bottom of its container, not changing its size.
			 */
			const GRAVITY_BOTTOM: number;

			/**
			 * Place the object in the center of its container in both the vertical and horizontal axis, not changing its size.
			 */
			const GRAVITY_CENTER: number;

			/**
			 * Place object in the horizontal center of its container, not changing its size.
			 */
			const GRAVITY_CENTER_HORIZONTAL: number;

			/**
			 * Place object in the vertical center of its container, not changing its size.
			 */
			const GRAVITY_CENTER_VERTICAL: number;

			/**
			 * Flag to clip the edges of the object to its container along the horizontal axis.
			 */
			const GRAVITY_CLIP_HORIZONTAL: number;

			/**
			 * Flag to clip the edges of the object to its container along the vertical axis.
			 */
			const GRAVITY_CLIP_VERTICAL: number;

			/**
			 * Special constant to enable clipping to an overall display along the horizontal dimension.
			 */
			const GRAVITY_DISPLAY_CLIP_HORIZONTAL: number;

			/**
			 * Special constant to enable clipping to an overall display along the vertical dimension.
			 */
			const GRAVITY_DISPLAY_CLIP_VERTICAL: number;

			/**
			 * Push object to x-axis position at the end of its container, not changing its size.
			 */
			const GRAVITY_END: number;

			/**
			 * Grow the horizontal and vertical size of the object if needed so it completely fills its container.
			 */
			const GRAVITY_FILL: number;

			/**
			 * Grow the horizontal size of the object if needed so it completely fills its container.
			 */
			const GRAVITY_FILL_HORIZONTAL: number;

			/**
			 * Grow the vertical size of the object if needed so it completely fills its container.
			 */
			const GRAVITY_FILL_VERTICAL: number;

			/**
			 * Binary mask to get the absolute horizontal gravity of a gravity.
			 */
			const GRAVITY_HORIZONTAL_GRAVITY_MASK: number;

			/**
			 * Push object to the left of its container, not changing its size.
			 */
			const GRAVITY_LEFT: number;

			/**
			 * Constant indicating that no gravity has been set
			 */
			const GRAVITY_NO_GRAVITY: number;

			/**
			 * Binary mask for the horizontal gravity and script specific direction bit.
			 */
			const GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK: number;

			/**
			 * Raw bit controlling whether the layout direction is relative or not (GRAVITY_START/GRAVITY_END instead of absolute GRAVITY_LEFT/GRAVITY_RIGHT).
			 */
			const GRAVITY_RELATIVE_LAYOUT_DIRECTION: number;

			/**
			 * Push object to the right of its container, not changing its size.
			 */
			const GRAVITY_RIGHT: number;

			/**
			 * Push object to x-axis position at the start of its container, not changing its size.
			 */
			const GRAVITY_START: number;

			/**
			 * Push object to the top of its container, not changing its size.
			 */
			const GRAVITY_TOP: number;

			/**
			 * Binary mask to get the vertical gravity of a gravity.
			 */
			const GRAVITY_VERTICAL_GRAVITY_MASK: number;

			/**
			 * Converts all detectable types of data into clickable links.
			 * @deprecated Use [Titanium.UI.AUTOLINK_ALL](Titanium.UI.AUTOLINK_ALL) instead.
			 */
			const LINKIFY_ALL: never;

			/**
			 * Converts strings formatted as email addresses into clickable links.
			 * @deprecated Use [Titanium.UI.AUTOLINK_EMAIL_ADDRESSES](Titanium.UI.AUTOLINK_EMAIL_ADDRESSES) instead.
			 */
			const LINKIFY_EMAIL_ADDRESSES: never;

			/**
			 * Converts strings formatted as addresses into clickable links.
			 * @deprecated Use [Titanium.UI.AUTOLINK_MAP_ADDRESSES](Titanium.UI.AUTOLINK_MAP_ADDRESSES) instead.
			 */
			const LINKIFY_MAP_ADDRESSES: never;

			/**
			 * Converts strings formatted as phone numbers into clickable links.
			 * @deprecated Use [Titanium.UI.AUTOLINK_PHONE_NUMBERS](Titanium.UI.AUTOLINK_PHONE_NUMBERS) instead.
			 */
			const LINKIFY_PHONE_NUMBERS: never;

			/**
			 * Converts strings formatted as URLs into clickable links.
			 * @deprecated Use [Titanium.UI.AUTOLINK_URLS](Titanium.UI.AUTOLINK_URLS) instead.
			 */
			const LINKIFY_WEB_URLS: never;

			/**
			 * Always allow a user to over-scroll this view, provided it is a view that can scroll.
			 */
			const OVER_SCROLL_ALWAYS: number;

			/**
			 * Allow a user to over-scroll this view only if the content is large enough to meaningfully scroll, provided it is a view that can scroll.
			 */
			const OVER_SCROLL_IF_CONTENT_SCROLLS: number;

			/**
			 * Never allow a user to over-scroll this view.
			 */
			const OVER_SCROLL_NEVER: number;

			/**
			 * Android A_8 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_A_8: number;

			/**
			 * Android LA_88 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_LA_88: number;

			/**
			 * Android L_8 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_L_8: number;

			/**
			 * Android OPAQUE pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_OPAQUE: number;

			/**
			 * Android RGBA_4444 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_RGBA_4444: number;

			/**
			 * Android RGBA_5551 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_RGBA_5551: number;

			/**
			 * Android RGBA_8888 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_RGBA_8888: number;

			/**
			 * Android RGBX_8888 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_RGBX_8888: number;

			/**
			 * Android RGB_332 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_RGB_332: number;

			/**
			 * Android RGB_565 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_RGB_565: number;

			/**
			 * Android RGB_888 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_RGB_888: number;

			/**
			 * Android TRANSLUCENT pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_TRANSLUCENT: number;

			/**
			 * Android A_8 pixel format for <Titanium.UI.Window>. Selecting the correct pixel format can
			 * improve image clarity and performance.
			 */
			const PIXEL_FORMAT_TRANSPARENT: number;

			/**
			 * Android UNKNOWN pixel format for <Titanium.UI.Window>. Selecting the correct pixel format
			 * can improve image clarity and performance.
			 */
			const PIXEL_FORMAT_UNKNOWN: number;

			/**
			 * Used with the <Titanium.UI.Android.ProgressIndicator.type> property to indicate an ongoing
			 * activity of determinate length.
			 */
			const PROGRESS_INDICATOR_DETERMINANT: number;

			/**
			 * Display <Titanium.UI.Android.ProgressIndicator> as a modal dialog. (default)
			 */
			const PROGRESS_INDICATOR_DIALOG: number;

			/**
			 * Used with the <Titanium.UI.Android.ProgressIndicator.type> property to indicate an ongoing
			 * activity of indeterminate length. (default)
			 */
			const PROGRESS_INDICATOR_INDETERMINANT: number;

			/**
			 * Display <Titanium.UI.Android.ProgressIndicator> as a horizontal progress bar in the title of
			 * the window.
			 */
			const PROGRESS_INDICATOR_STATUS_BAR: number;

			/**
			 * Pan the current heavyweight window when the input method (ie software keyboard) is shown, to
			 * ensure that its contents are not obscured.
			 */
			const SOFT_INPUT_ADJUST_PAN: number;

			/**
			 * Resize the current heavyweight window when the input method (ie software keyboard) is shown,
			 * to ensure that its contents are not obscured.
			 */
			const SOFT_INPUT_ADJUST_RESIZE: number;

			/**
			 * Use the system-default behavior to determine how the soft input area (ie software keyboard)
			 * is accomodated by the current heavyweight window when it receives focus (default.)
			 */
			const SOFT_INPUT_ADJUST_UNSPECIFIED: number;

			/**
			 * Always hide the soft input area (ie software keyboard) when the current heavyweight window
			 * receives focus.
			 */
			const SOFT_INPUT_STATE_ALWAYS_HIDDEN: number;

			/**
			 * Always show the soft input area (ie software keyboard) when the current heavyweight window
			 * receives focus.
			 */
			const SOFT_INPUT_STATE_ALWAYS_VISIBLE: number;

			/**
			 * Attempt to hide the soft input area (ie software keyboard) when the current heavyweight
			 * window receives focus.
			 */
			const SOFT_INPUT_STATE_HIDDEN: number;

			/**
			 * Use the system-default behavior to determine whether to show the soft input area
			 * (ie software keyboard) when the current heavyweight window receives focus.
			 */
			const SOFT_INPUT_STATE_UNSPECIFIED: number;

			/**
			 * Attempt to show the soft input area (ie software keyboard) when the current heavyweight
			 * window receives focus.
			 */
			const SOFT_INPUT_STATE_VISIBLE: number;

			/**
			 * Use Android default behavior to handle keyboard visibility when a view receives focus.
			 * (default)
			 */
			const SOFT_KEYBOARD_DEFAULT_ON_FOCUS: number;

			/**
			 * Attempt to hide the soft keyboard when a view receives focus. Note: system can override
			 * request.
			 */
			const SOFT_KEYBOARD_HIDE_ON_FOCUS: number;

			/**
			 * Attempt to show the soft keyboard when a view receives focus. Note: system can override
			 * request.
			 */
			const SOFT_KEYBOARD_SHOW_ON_FOCUS: number;

			/**
			 * Display a checkbox.
			 * @deprecated Use <Titanium.UI.SWITCH_STYLE_CHECKBOX> instead.
			 */
			const SWITCH_STYLE_CHECKBOX: number;

			/**
			 * Display a switch.
			 * @deprecated Use <Titanium.UI.SWITCH_STYLE_SLIDER> instead.
			 */
			const SWITCH_STYLE_SWITCH: number;

			/**
			 * Display a toggle button.
			 * @deprecated Use <Titanium.UI.SWITCH_STYLE_TOGGLE_BUTTON> instead.
			 */
			const SWITCH_STYLE_TOGGLEBUTTON: number;

			/**
			 * TabGroup style taking advantage of a bottom navigation controller for switching between tabs.
			 */
			const TABS_STYLE_BOTTOM_NAVIGATION: number;

			/**
			 * The default TabGroup style that places the Tabs bellow the ActionBar and above the Window content.
			 */
			const TABS_STYLE_DEFAULT: number;

			/**
			 * Captures layout bounds of target views before and after the scene change and animates those changes during the transition.
			 */
			const TRANSITION_CHANGE_BOUNDS: number;

			/**
			 * Captures the clip bounds before and after the scene change and animates those changes during the transition.
			 */
			const TRANSITION_CHANGE_CLIP_BOUNDS: number;

			/**
			 * Captures an ImageView's matrix before and after the scene change and animates it during the transition.
			 */
			const TRANSITION_CHANGE_IMAGE_TRANSFORM: number;

			/**
			 * Captures scale and rotation for Views before and after the scene change and animates those changes during the transition.
			 */
			const TRANSITION_CHANGE_TRANSFORM: number;

			/**
			 * Moves views in or out from the edges of the scene.
			 */
			const TRANSITION_EXPLODE: number;

			/**
			 * Fades in the views.
			 */
			const TRANSITION_FADE_IN: number;

			/**
			 * Fades out the views.
			 */
			const TRANSITION_FADE_OUT: number;

			/**
			 * Resets transition to platform default.
			 */
			const TRANSITION_NONE: number;

			/**
			 * Moves views to bottom.
			 */
			const TRANSITION_SLIDE_BOTTOM: number;

			/**
			 * Moves views to left.
			 */
			const TRANSITION_SLIDE_LEFT: number;

			/**
			 * Moves views to right.
			 */
			const TRANSITION_SLIDE_RIGHT: number;

			/**
			 * Moves views to top.
			 */
			const TRANSITION_SLIDE_TOP: number;

			/**
			 * Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.
			 */
			const WEBVIEW_LOAD_CACHE_ELSE_NETWORK: number;

			/**
			 * Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.
			 */
			const WEBVIEW_LOAD_CACHE_ONLY: number;

			/**
			 * Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.
			 */
			const WEBVIEW_LOAD_DEFAULT: number;

			/**
			 * Use with [WebView.cacheMode](Titanium.UI.WebView.cacheMode) to override how the cache is used in a web view.
			 */
			const WEBVIEW_LOAD_NO_CACHE: number;

			/**
			 * Use with [WebView.pluginState](Titanium.UI.WebView.pluginState) to disable plugins in a web view.
			 */
			const WEBVIEW_PLUGINS_OFF: number;

			/**
			 * Use with [WebView.pluginState](Titanium.UI.WebView.pluginState) to enable plugins in a web view.
			 */
			const WEBVIEW_PLUGINS_ON: number;

			/**
			 * Display a placeholder and only load plugins when user selects it.
			 */
			const WEBVIEW_PLUGINS_ON_DEMAND: number;

		}
		/**
		 * The Android-specific UI capabilities. All properties, methods and events in this namespace will
		 * only work on Android systems.
		 * #### Drawer Layout
		 * The drawer-layout components acts as a top-level container for window content that allows
		 * for interactive "drawer" views to be pulled out from one or both vertical edges of the window.
		 * It is represented by a `centerView` and optional `leftView` and `rightView` components that
		 * can be swiped in and out with additional configuration and transitions. Learn more about
		 * drawer-layouts in it's dedicated <Titanium.UI.Android.DrawerLayout> docs.
		 */
		class Android extends Titanium.Module {
			/**
			 * The name of the API that this proxy corresponds to.
			 */
			static readonly apiName: string;

			/**
			 * Indicates if the proxy will bubble an event to its parent.
			 */
			static bubbleParent: boolean;

			/**
			 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
			 */
			static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Applies the properties to the proxy.
			 */
			static applyProperties(props: any): void;

			/**
			 * Creates and returns an instance of <Titanium.UI.Android.CardView>.
			 */
			static createCardView(parameters?: Dictionary<Titanium.UI.Android.CardView>): Titanium.UI.Android.CardView;

			/**
			 * Creates and returns an instance of <Titanium.UI.Android.DrawerLayout>.
			 */
			static createDrawerLayout(parameters?: Dictionary<Titanium.UI.Android.DrawerLayout>): Titanium.UI.Android.DrawerLayout;

			/**
			 * Creates and returns an instance of <Titanium.UI.Android.ProgressIndicator>.
			 */
			static createProgressIndicator(parameters?: Dictionary<Titanium.UI.Android.ProgressIndicator>): Titanium.UI.Android.ProgressIndicator;

			/**
			 * Creates and returns an instance of <Titanium.UI.Android.SearchView>.
			 */
			static createSearchView(parameters?: Dictionary<Titanium.UI.Android.SearchView>): Titanium.UI.Android.SearchView;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent(name: string, event?: any): void;

			/**
			 * Returns a <Ti.Color> instance for a color defined by the system or user resources (colors.xml)
			 */
			static getColorResource(resourceIdOrColorName: number | string): Titanium.UI.Color;

			/**
			 * Hides the soft keyboard.
			 */
			static hideSoftKeyboard(): void;

			/**
			 * Opens an application preferences dialog, using the native Android system settings interface,
			 * defined by the platform-specific `preferences.xml` and `array.xml` files.
			 */
			static openPreferences(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
