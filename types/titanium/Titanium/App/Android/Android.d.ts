declare namespace Titanium {
	namespace App {
		/**
		 * Base event for class Titanium.App.Android
		 */
		interface AndroidBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.App.Android;

		}
		/**
		 * Fired when a <Titanium.UI.ShortcutItem> is clicked.
		 */
		interface Android_shortcutitemclick_Event extends AndroidBaseEvent {
			/**
			 * Identifier of the clicked shortcut item.
			 */
			id: string;

		}
		interface AndroidEventMap extends ProxyEventMap {
			shortcutitemclick: Android_shortcutitemclick_Event;

		}
		/**
		 * A module used to access Android application resources.
		 */
		class Android extends Titanium.Module {
			/**
			 * The `R` namespace for application resources.
			 */
			static readonly R: Titanium.Android.R;

			/**
			 * The name of the API that this proxy corresponds to.
			 */
			static readonly apiName: string;

			/**
			 * The version number of the application.
			 */
			static readonly appVersionCode: number;

			/**
			 * The version name of the application.
			 */
			static readonly appVersionName: string;

			/**
			 * Indicates if the proxy will bubble an event to its parent.
			 */
			static bubbleParent: boolean;

			/**
			 * Return the intent that was used to launch the application.
			 */
			static readonly launchIntent: Titanium.Android.Intent;

			/**
			 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
			 */
			static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			static addEventListener<K extends keyof AndroidEventMap>(name: K, callback: (this: Titanium.App.Android, event: AndroidEventMap[K]) => void): void;

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
			static fireEvent<K extends keyof AndroidEventMap>(name: K, event?: AndroidEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener<K extends keyof AndroidEventMap>(name: K, callback: (this: Titanium.App.Android, event: AndroidEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
