declare namespace Titanium {
	namespace Android {
		/**
		 * Base event for class Titanium.Android.Activity
		 */
		interface ActivityBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.Android.Activity;

		}
		/**
		 * Fired when the activity is already running and an intent different than the one that launched it was received.
		 */
		interface Activity_newintent_Event extends ActivityBaseEvent {
			/**
			 * The `Intent` passed to the native `onNewIntent` method.
			 */
			intent: Titanium.Android.Intent;

		}
		/**
		 * Fired when the activity is launched.
		 */
		interface Activity_onIntent_Event extends ActivityBaseEvent {
			/**
			 * The `Intent` used to launch the Activity.
			 */
			intent: Titanium.Android.Intent;

		}
		/**
		 * Fired when the activity is about to go into the background as a result of user choice.
		 */
		interface Activity_userleavehint_Event extends ActivityBaseEvent {
		}
		/**
		 * Called whenever a key, touch, or trackball event is dispatched to the activity.
		 */
		interface Activity_userinteraction_Event extends ActivityBaseEvent {
		}
		interface ActivityEventMap extends ProxyEventMap {
			newintent: Activity_newintent_Event;

			onIntent: Activity_onIntent_Event;

			userinteraction: Activity_userinteraction_Event;

			userleavehint: Activity_userleavehint_Event;

		}
		/**
		 * The Titanium binding of an Android Activity.
		 */
		class Activity extends Titanium.Proxy {
			/**
			 * The action bar for this activity.
			 */
			readonly actionBar: Titanium.Android.ActionBar;

			/**
			 * The last `Intent` received by this activity.
			 */
			readonly intent: Titanium.Android.Intent;

			/**
			 * Callback function called when the Android activity is created.
			 */
			onCreate: (param0: ActivityLifecycleCallbackObject) => void;

			/**
			 * Callback function called to initially create an Android options menu
			 * for this Activity when the user presses the **Menu** button.
			 */
			onCreateOptionsMenu: (param0: OptionsMenuCallbackObject) => void;

			/**
			 * Callback function called when the Android activity is destroyed.
			 */
			onDestroy: (param0: ActivityLifecycleCallbackObject) => void;

			/**
			 * Callback function called when the Android activity is paused.
			 */
			onPause: (param0: ActivityLifecycleCallbackObject) => void;

			/**
			 * Callback function called to prepare an options menu for display when the user presses
			 * the **Menu** button.
			 */
			onPrepareOptionsMenu: (param0: OptionsMenuCallbackObject) => void;

			/**
			 * Callback function called when the Android activity is restarted.
			 */
			onRestart: (param0: ActivityLifecycleCallbackObject) => void;

			/**
			 * Callback function called when the Android activity is resumed.
			 */
			onResume: (param0: ActivityLifecycleCallbackObject) => void;

			/**
			 * Callback function called when the Android activity is started.
			 */
			onStart: (param0: ActivityLifecycleCallbackObject) => void;

			/**
			 * Callback function called when the Android activity is stopped.
			 */
			onStop: (param0: ActivityLifecycleCallbackObject) => void;

			/**
			 * Specifies a specific orientation for this activity.
			 */
			requestedOrientation: number;

			/**
			 * Toolbar instance that serves as ActionBar
			 */
			supportToolbar: Titanium.UI.Toolbar;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof ActivityEventMap>(name: K, callback: (this: Titanium.Android.Activity, event: ActivityEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Closes this activity.
			 */
			finish(): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof ActivityEventMap>(name: K, event?: ActivityEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Gets an Android or Application string using the specified Resource ID and optional format arguments.
			 */
			getString(resourceId: number, ...format: any[]): string;

			/**
			 * Declares that the option menu has changed and should be recreated.
			 */
			invalidateOptionsMenu(): void;

			/**
			 * Programmatically opens the options menu.
			 */
			openOptionsMenu(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof ActivityEventMap>(name: K, callback: (this: Titanium.Android.Activity, event: ActivityEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Broadcast the passed in `Intent` to all `BroadcastReceiver`s.
			 */
			sendBroadcast(intent: Titanium.Android.Intent): void;

			/**
			 * Broadcast the passed in `Intent` to all `BroadcastReceiver`s with an optional permission.
			 */
			sendBroadcastWithPermission(intent: Titanium.Android.Intent, receiverPermission?: string): void;

			/**
			 * Sets the requested Activity orientation.
			 * @deprecated Use the <Titanium.Android.requestedOrientation> property instead
			 */
			setRequestedOrientation: never;

			/**
			 * Sets the result of this activity using an `Intent`.
			 */
			setResult(resultCode: number, intent?: Titanium.Android.Intent): void;

			/**
			 * Sets a toolbar instance to be used as an ActionBar.
			 */
			setSupportActionBar(toolbar: Titanium.UI.Toolbar): void;

			/**
			 * Starts a new activity, using the passed in `Intent` as the description.
			 */
			startActivity(intent: Titanium.Android.Intent): void;

			/**
			 * The same as `startActivity`, but also accepts a callback function for handling the result of the started Activity.
			 */
			startActivityForResult(intent: Titanium.Android.Intent, callback: (param0: ActivityResult) => void): void;

		}
	}
}
/**
 * Simple object passed to the <Titanium.Android.Activity> callbacks for
 * onCreate, onDestroy, onPause, onResume, onStart, onStop, onRestart.
 * Additional properties may be set on the Object.
 */
interface ActivityLifecycleCallbackObject {
	/**
	 * The Activity firing the callback.
	 */
	source?: Titanium.Android.Activity;

}
/**
 * Simple object passed to the
 * [startActivityForResult](Titanium.Android.Activity.startActivityForResult) callback.
 */
interface ActivityResult {
	/**
	 * Intent that can contain data returned to the caller. Data can be attached to
	 * the intent as "extras").
	 */
	intent?: Titanium.Android.Intent;

	/**
	 * Unique, automatically generated integer request code.
	 */
	requestCode?: number;

	/**
	 * Integer result code that the started activity passed to
	 * [setResult](Titanium.Android.Activity.setResult).
	 */
	resultCode?: number;

}
/**
 * Simple object passed to the <Titanium.Android.Activity> callbacks for
 * onPrepareOptionsMenu and onCreateOptionsMenu.
 * Additional properties may be set on the Object.
 */
interface OptionsMenuCallbackObject {
	/**
	 * The relevant Menu.
	 */
	menu?: Titanium.Android.Menu;

}
