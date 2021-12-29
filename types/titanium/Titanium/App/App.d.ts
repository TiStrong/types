/// <reference path="./Android/Android.d.ts" />
/// <reference path="./Properties/Properties.d.ts" />
/// <reference path="./iOS/iOS.d.ts" />
declare namespace Titanium {
	/**
	 * The top-level App module is mainly used for accessing information about the
	 * application at runtime, and for sending or listening for system events.
	 */
	namespace App {
		/**
		 * Convenience constant for system event "accessibilityannouncement".
		 */
		const EVENT_ACCESSIBILITY_ANNOUNCEMENT: string;

		/**
		 * Convenience constant for system event "accessibilitychanged".
		 */
		const EVENT_ACCESSIBILITY_CHANGED: string;

	}
	/**
	 * Base event for class Titanium.App
	 */
	interface AppBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.App;

	}
	/**
	 * Fired by the system when the device's accessibility service is turned on or off.
	 */
	interface App_accessibilitychanged_Event extends AppBaseEvent {
		/**
		 * Whether accessibility is now enabled or disabled.
		 */
		enabled: boolean;

	}
	/**
	 * Fired by the system when the application is about to be terminated.
	 */
	interface App_close_Event extends AppBaseEvent {
	}
	/**
	 * Fired when the app receives a warning from the operating system about low memory availability.
	 */
	interface App_memorywarning_Event extends AppBaseEvent {
	}
	/**
	 * Fired when the application transitions from active to inactive state on a multitasked system.
	 */
	interface App_pause_Event extends AppBaseEvent {
	}
	/**
	 * Fired when the application transitions to the background on a multitasked system.
	 */
	interface App_paused_Event extends AppBaseEvent {
	}
	/**
	 * Fired when the proximity sensor changes state.
	 */
	interface App_proximity_Event extends AppBaseEvent {
		/**
		 * Proximity state value.
		 */
		state: boolean;

	}
	/**
	 * Fired when an uncaught JavaScript exception occurs.
	 */
	interface App_uncaughtException_Event extends AppBaseEvent {
		/**
		 * The backtrace of function calls when the error occurred.
		 * @deprecated Use the `stack` property instead.
		 */
		backtrace: never;

		/**
		 * The column offset on the line where the error occured.
		 */
		column: number;

		/**
		 * The java stack trace of the exception. (Deprecated since 9.0.0. Use `nativeStack` instead.)
		 * @deprecated Use `nativeStack` property for cross-platform parity.
		 */
		javaStack: string;

		/**
		 * The javascript stack trace of the exception. (Deprecated since 9.0.0. Use `stack` instead.)
		 * @deprecated Use `stack` property for cross-platform parity.
		 */
		javascriptStack: string;

		/**
		 * The line where the error occurred.
		 */
		line: number;

		/**
		 * The offset on the line where the error occurred. (Deprecated since 9.0.0. Use `column` instead.)
		 * @deprecated Use `column` property for cross-platform parity.
		 */
		lineOffset: number;

		/**
		 * The line source reference.
		 */
		lineSource: string;

		/**
		 * The error message.
		 */
		message: string;

		/**
		 * The native platform stack trace of the exception.
		 */
		nativeStack: string;

		/**
		 * A unique identification for the source file.
		 */
		sourceId: number;

		/**
		 * The name of the source file.
		 */
		sourceName: string;

		/**
		 * The URL to the source file.
		 */
		sourceURL: string;

		/**
		 * The javascript stack trace of the exception.
		 */
		stack: string;

		/**
		 * The title for the error.
		 */
		title: string;

		/**
		 * The type of error.
		 */
		type: string;

	}
	/**
	 * Fired when the application returns to the foreground on a multitasked system.
	 */
	interface App_resume_Event extends AppBaseEvent {
	}
	/**
	 * Fired when the application returns to the foreground.
	 */
	interface App_resumed_Event extends AppBaseEvent {
	}
	/**
	 * Fired after the "app.js" or "alloy.js" gets executed during application startup.
	 */
	interface App_started_Event extends AppBaseEvent {
	}
	/**
	 * Fired when the soft keyboard is presented, on and off the screen.
	 */
	interface App_keyboardframechanged_Event extends AppBaseEvent {
		/**
		 * The duration of the keyboard animation. This parameter is only available on Titanium SDK 4.0.0 and later.
		 */
		animationDuration: number;

		/**
		 * A dictionary with keys x, y, width and height representing the frame of keyboard on screen.
		 */
		keyboardFrame: Dimension;

	}
	/**
	 * Fired when there is a significant change in the time.
	 */
	interface App_significanttimechange_Event extends AppBaseEvent {
	}
	/**
	 * Fired when a <Titanium.UI.ShortcutItem> is clicked.
	 */
	interface App_shortcutitemclick_Event extends AppBaseEvent {
		/**
		 * Identifier of the clicked shortcut item.
		 */
		id: string;

	}
	/**
	 * Called whenever an interaction with the window occurred. To be used together with the <Titanium.App.trackUserInteraction> property.
	 */
	interface App_userinteraction_Event extends AppBaseEvent {
	}
	interface AppEventMap extends ProxyEventMap {
		accessibilitychanged: App_accessibilitychanged_Event;

		close: App_close_Event;

		keyboardframechanged: App_keyboardframechanged_Event;

		memorywarning: App_memorywarning_Event;

		pause: App_pause_Event;

		paused: App_paused_Event;

		proximity: App_proximity_Event;

		resume: App_resume_Event;

		resumed: App_resumed_Event;

		shortcutitemclick: App_shortcutitemclick_Event;

		significanttimechange: App_significanttimechange_Event;

		started: App_started_Event;

		uncaughtException: App_uncaughtException_Event;

		userinteraction: App_userinteraction_Event;

	}
	/**
	 * The top-level App module is mainly used for accessing information about the
	 * application at runtime, and for sending or listening for system events.
	 */
	class App extends Titanium.Module {
		/**
		 * Indicates whether Accessibility is enabled by the system.
		 */
		static readonly accessibilityEnabled: boolean;

		/**
		 * Indicates whether Analytics is enabled, determined by `tiapp.xml`.
		 */
		static readonly analytics: boolean;

		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * The arguments passed to the application on startup.
		 */
		static arguments: launchOptions;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * Application copyright statement, determined by `tiapp.xml`.
		 */
		static readonly copyright: string;

		/**
		 * A reference to the currnet background service running when the application is placed in the background.
		 */
		static readonly currentService: Titanium.App.iOS.BackgroundService;

		/**
		 * Build type that reflects how the application was packaged.
		 * Returns one of the following values:
		 * * `development` (Simulator)
		 * * `test` (Device)
		 * * `production` (App Store / Adhoc)
		 */
		static readonly deployType: string;

		/**
		 * Application description, determined by `tiapp.xml`.
		 */
		static readonly description: string;

		/**
		 * Prevents network activity indicator from being displayed.
		 */
		static disableNetworkActivityIndicator: boolean;

		/**
		 * Shows the application's splash screen on app resume.
		 */
		static forceSplashAsSnapshot: boolean;

		/**
		 * Application globally-unique ID, determined by `tiapp.xml`.
		 */
		static readonly guid: string;

		/**
		 * Application ID, from `tiapp.xml`.
		 */
		static readonly id: string;

		/**
		 * Determines whether the screen is locked when the device is idle.
		 */
		static idleTimerDisabled: boolean;

		/**
		 * The install ID for this application.
		 */
		static readonly installId: string;

		/**
		 * Indicates whether or not the soft keyboard is visible.
		 */
		static readonly keyboardVisible: boolean;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Application name, determined by `tiapp.xml`.
		 */
		static readonly name: string;

		/**
		 * Determines whether proximity detection is enabled.
		 */
		static proximityDetection: boolean;

		/**
		 * Indicates the state of the device's proximity sensor, according to the
		 * <Titanium.App.proximity> event.
		 */
		static readonly proximityState: boolean;

		/**
		 * Application publisher, from `tiapp.xml`.
		 */
		static readonly publisher: string;

		/**
		 * Unique session identifier for the current continuous run of the application.
		 */
		static readonly sessionId: string;

		/**
		 * Indicates whether or not the user interaction shoud be tracked.
		 */
		static trackUserInteraction: boolean;

		/**
		 * Application URL, from `tiapp.xml`.
		 */
		static readonly url: string;

		/**
		 * Application version, from `tiapp.xml`.
		 */
		static readonly version: string;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof AppEventMap>(name: K, callback: (this: Titanium.App, event: AppEventMap[K]) => void): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent<K extends keyof AppEventMap>(name: K, event?: AppEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Fire a system-level event such as <Titanium.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT>.
		 */
		static fireSystemEvent(eventName: string, param?: string): void;

		/**
		 * Returns the arguments passed to the application on startup.
		 * @deprecated Use the <Titanium.App.arguments> property instead
		 */
		static getArguments(): launchOptions;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof AppEventMap>(name: K, callback: (this: Titanium.App, event: AppEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

	}
}
/**
 * Dictionary describing the arguments passed to the application on startup.
 * Use the [getArguments](Titanium.App.getArguments) method to retrieve the launch options.
 */
interface launchOptions {
	/**
	 * If set to `true`, this key indicates that the application was launched in response to an
	 * incoming location event.
	 */
	launchOptionsLocationKey?: boolean;

	/**
	 * This key indicates that the application was launched by another
	 * application with the specified bundle ID.
	 */
	source?: string;

	/**
	 * This key indicates that the application was launched in order to open
	 * the specified URL.
	 */
	url?: string;

}
