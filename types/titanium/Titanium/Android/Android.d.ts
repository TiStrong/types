/// <reference path="./ActionBar.d.ts" />
/// <reference path="./Activity.d.ts" />
/// <reference path="./BigPictureStyle.d.ts" />
/// <reference path="./BigTextStyle.d.ts" />
/// <reference path="./BroadcastReceiver.d.ts" />
/// <reference path="./Intent.d.ts" />
/// <reference path="./Menu.d.ts" />
/// <reference path="./MenuItem.d.ts" />
/// <reference path="./Notification.d.ts" />
/// <reference path="./NotificationChannel.d.ts" />
/// <reference path="./NotificationManager/NotificationManager.d.ts" />
/// <reference path="./PendingIntent.d.ts" />
/// <reference path="./QuickSettingsService.d.ts" />
/// <reference path="./R.d.ts" />
/// <reference path="./RemoteViews.d.ts" />
/// <reference path="./Service.d.ts" />
declare namespace Titanium {
	/**
	 * The top-level Android module.
	 */
	namespace Android {
		/**
		 * User switched airplane mode on or off.
		 */
		const ACTION_AIRPLANE_MODE_CHANGED: string;

		/**
		 * List all applications.
		 */
		const ACTION_ALL_APPS: string;

		/**
		 * Handle an incoming phone call.
		 */
		const ACTION_ANSWER: string;

		/**
		 * Used to indicate that the data is an attachment.
		 */
		const ACTION_ATTACH_DATA: string;

		/**
		 * Listen to battery state change status.
		 */
		const ACTION_BATTERY_CHANGED: string;

		/**
		 * Indicates low battery condition on the device.
		 */
		const ACTION_BATTERY_LOW: string;

		/**
		 * Inidicates the battery is now okay after being low.
		 */
		const ACTION_BATTERY_OKAY: string;

		/**
		 * Indicates the system has finished booting.
		 */
		const ACTION_BOOT_COMPLETED: string;

		/**
		 * Show activity for reporting a bug.
		 */
		const ACTION_BUG_REPORT: string;

		/**
		 * Perform a call to someone specified by the `data` property.
		 */
		const ACTION_CALL: string;

		/**
		 * User pressed the call button.
		 */
		const ACTION_CALL_BUTTON: string;

		/**
		 * The camera button was pressed.
		 */
		const ACTION_CAMERA_BUTTON: string;

		/**
		 * Display an activity chooser.
		 */
		const ACTION_CHOOSER: string;

		/**
		 * User dismissed a temporary system dialog, such as the notification drawer or recent-app drawer.
		 */
		const ACTION_CLOSE_SYSTEM_DIALOGS: string;

		/**
		 * The device's configuration changed.
		 */
		const ACTION_CONFIGURATION_CHANGED: string;

		/**
		 * Create a shortcut.
		 */
		const ACTION_CREATE_SHORTCUT: string;

		/**
		 * Date changed.
		 */
		const ACTION_DATE_CHANGED: string;

		/**
		 * Default action, which is `Titanium.Android.ACTION_VIEW`
		 */
		const ACTION_DEFAULT: string;

		/**
		 * Delete the data specified by the Intent's `data` property.
		 */
		const ACTION_DELETE: string;

		/**
		 * Indicates a low memory condition on the device.
		 */
		const ACTION_DEVICE_STORAGE_LOW: string;

		/**
		 * Dial a number specified by the Intent's `data` property.
		 */
		const ACTION_DIAL: string;

		/**
		 * Provide editable access to the data specified by the Intent's `data` property.
		 */
		const ACTION_EDIT: string;

		/**
		 * Allow the user to select a particular kind of data specified by the Intent's `type` property.
		 */
		const ACTION_GET_CONTENT: string;

		/**
		 * GTalk connection has been established.
		 */
		const ACTION_GTALK_SERVICE_CONNECTED: string;

		/**
		 * GTalk connection has been disconnected.
		 */
		const ACTION_GTALK_SERVICE_DISCONNECTED: string;

		/**
		 * A wired headset has been plugged in or unplugged.
		 */
		const ACTION_HEADSET_PLUG: string;

		/**
		 * An input method has been changed.
		 */
		const ACTION_INPUT_METHOD_CHANGED: string;

		/**
		 * Insert an empty item into the given container.
		 */
		const ACTION_INSERT: string;

		/**
		 * Pick an existing item or insert an empty item, then edit it.
		 */
		const ACTION_INSERT_OR_EDIT: string;

		/**
		 * Start as the main entry point.
		 */
		const ACTION_MAIN: string;

		/**
		 * Indicates low memory condition notification acknowledged by user and package management should be started.
		 */
		const ACTION_MANAGE_PACKAGE_STORAGE: string;

		/**
		 * External media was removed from SD card slot, but mount point was not unmounted.
		 */
		const ACTION_MEDIA_BAD_REMOVAL: string;

		/**
		 * The media button was pressed.
		 */
		const ACTION_MEDIA_BUTTON: string;

		/**
		 * External media is present and being disk-checked.
		 */
		const ACTION_MEDIA_CHECKING: string;

		/**
		 * User has expressed the desire to remove the external storage media.
		 */
		const ACTION_MEDIA_EJECT: string;

		/**
		 * External media is present and mounted at its mount point.
		 */
		const ACTION_MEDIA_MOUNTED: string;

		/**
		 * External media is present, but is using an incompatible filesystem or is blank.
		 */
		const ACTION_MEDIA_NOFS: string;

		/**
		 * External media has been removed.
		 */
		const ACTION_MEDIA_REMOVED: string;

		/**
		 * The media scanner has finished scanning a directory.
		 */
		const ACTION_MEDIA_SCANNER_FINISHED: string;

		/**
		 * Request the media scanner to scan a file and add it to the media database.
		 */
		const ACTION_MEDIA_SCANNER_SCAN_FILE: string;

		/**
		 * The media scanner has started scanning a directory.
		 */
		const ACTION_MEDIA_SCANNER_STARTED: string;

		/**
		 * External media is unmounted because it is being shared via USB mass storage.
		 */
		const ACTION_MEDIA_SHARED: string;

		/**
		 * Corresponds to the Android `Intent.ACTION_MEDIA_UNMOUNTABLE` constant.
		 */
		const ACTION_MEDIA_UNMOUNTABLE: string;

		/**
		 * External media is present, but not mounted at its mount point.
		 */
		const ACTION_MEDIA_UNMOUNTED: string;

		/**
		 * An outgoing call is about to be placed.
		 */
		const ACTION_NEW_OUTGOING_CALL: string;

		/**
		 * A new application package has been installed on the device.
		 */
		const ACTION_PACKAGE_ADDED: string;

		/**
		 * An existing application package has been changed.
		 */
		const ACTION_PACKAGE_CHANGED: string;

		/**
		 * The user has cleared the data of a package.
		 */
		const ACTION_PACKAGE_DATA_CLEARED: string;

		/**
		 * An existing application package has been removed from the device.
		 */
		const ACTION_PACKAGE_REMOVED: string;

		/**
		 * A new version of an application package has been installed, replacing an existing version that was previously installed.
		 */
		const ACTION_PACKAGE_REPLACED: string;

		/**
		 * The user has restarted a package, and all of its processes have been killed.
		 */
		const ACTION_PACKAGE_RESTARTED: string;

		/**
		 * Pick an item from the directory indicated by the Intent's `data` property.
		 */
		const ACTION_PICK: string;

		/**
		 * Pick an activity given an intent.
		 */
		const ACTION_PICK_ACTIVITY: string;

		/**
		 * External power has been connected to the device.
		 */
		const ACTION_POWER_CONNECTED: string;

		/**
		 * External power has been disconnected from the device.
		 */
		const ACTION_POWER_DISCONNECTED: string;

		/**
		 * Show power usage information to the user.
		 */
		const ACTION_POWER_USAGE_SUMMARY: string;

		/**
		 * Content provider published new events or items.
		 */
		const ACTION_PROVIDER_CHANGED: string;

		/**
		 * Device rebooted.
		 */
		const ACTION_REBOOT: string;

		/**
		 * Run the data.
		 */
		const ACTION_RUN: string;

		/**
		 * Sent when the device goes to sleep and becomes non-interactive.
		 */
		const ACTION_SCREEN_OFF: string;

		/**
		 * Sent when the device wakes up and becomes interactive.
		 */
		const ACTION_SCREEN_ON: string;

		/**
		 * Perform a search.
		 */
		const ACTION_SEARCH: string;

		/**
		 * Start action associated with long pressing on the search key.
		 */
		const ACTION_SEARCH_LONG_PRESS: string;

		/**
		 * Deliver data to another activity.
		 */
		const ACTION_SEND: string;

		/**
		 * Deliver data to the recipient specified by the Intent's `data` property.
		 */
		const ACTION_SENDTO: string;

		/**
		 * Deliver multiple data to another activity.
		 */
		const ACTION_SEND_MULTIPLE: string;

		/**
		 * Show settings for choosing the system wallpaper.
		 */
		const ACTION_SET_WALLPAPER: string;

		/**
		 * Device is shutting down.
		 */
		const ACTION_SHUTDOWN: string;

		/**
		 * Perform data synchronization.
		 */
		const ACTION_SYNC: string;

		/**
		 * Start the platform-defined tutorial.
		 */
		const ACTION_SYSTEM_TUTORIAL: string;

		/**
		 * The time was set.
		 */
		const ACTION_TIME_CHANGED: string;

		/**
		 * The current time changed.  Sent every minute.
		 */
		const ACTION_TIME_TICK: string;

		/**
		 * A user ID was removed from the system.
		 */
		const ACTION_UID_REMOVED: string;

		/**
		 * Sent when the user is present after device wakes up.
		 */
		const ACTION_USER_PRESENT: string;

		/**
		 * Display data to the user.
		 */
		const ACTION_VIEW: string;

		/**
		 * Start voice command.
		 */
		const ACTION_VOICE_COMMAND: string;

		/**
		 * The current system wallpaper has changed.
		 */
		const ACTION_WALLPAPER_CHANGED: string;

		/**
		 * Perform a web search.
		 */
		const ACTION_WEB_SEARCH: string;

		/**
		 * Notification category indicating an alarm or timer.
		 */
		const CATEGORY_ALARM: string;

		/**
		 * Set if the activity should be considered as an alternative action to the data the user is currently viewing.
		 */
		const CATEGORY_ALTERNATIVE: string;

		/**
		 * Activity can browse the Internet.
		 */
		const CATEGORY_BROWSABLE: string;

		/**
		 * Notification category indicating an incoming call (voice or video) or similar synchronous
		 * communication request.
		 */
		const CATEGORY_CALL: string;

		/**
		 * Activity should be used as the default action to perform on a piece of data.
		 */
		const CATEGORY_DEFAULT: string;

		/**
		 * Activity is in the development preference panel.
		 */
		const CATEGORY_DEVELOPMENT_PREFERENCE: string;

		/**
		 * Notification category indicating an asynchronous bulk message (email).
		 */
		const CATEGORY_EMAIL: string;

		/**
		 * Activity can run inside a parent activity.
		 */
		const CATEGORY_EMBED: string;

		/**
		 * Notification category indicating an error in background operation or authentication status.
		 */
		const CATEGORY_ERROR: string;

		/**
		 * Notification category indicating a calendar event.
		 */
		const CATEGORY_EVENT: string;

		/**
		 * To be used as test code for framework instrumentation tests.
		 */
		const CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST: string;

		/**
		 * Home activity, the first activity that is displayed when the device boots.
		 */
		const CATEGORY_HOME: string;

		/**
		 * Provides information about the package it is in.
		 */
		const CATEGORY_INFO: string;

		/**
		 * Activity is in the device's launcher.
		 */
		const CATEGORY_LAUNCHER: string;

		/**
		 * Notification category indicating an incoming direct message (SMS, instant message, etc.).
		 */
		const CATEGORY_MESSAGE: string;

		/**
		 * This activity may be exercised by the monkey or other automated test tools.
		 */
		const CATEGORY_MONKEY: string;

		/**
		 * Activity can open raw `file://` or `scheme://` URIs.
		 */
		const CATEGORY_OPENABLE: string;

		/**
		 * This activity is a preference panel.
		 */
		const CATEGORY_PREFERENCE: string;

		/**
		 * Notification category indicating the progress of a long-running background operation.
		 */
		const CATEGORY_PROGRESS: string;

		/**
		 * Notification category indicating a promotion or advertisement.
		 */
		const CATEGORY_PROMO: string;

		/**
		 * Notification category indicating a specific, timely recommendation for a single thing.
		 */
		const CATEGORY_RECOMMENDATION: string;

		/**
		 * To be used as a sample code example (not part of the normal user experience).
		 */
		const CATEGORY_SAMPLE_CODE: string;

		/**
		 * Activity should be considered as an alternative selection action to the data the user
		 * has currently selected.
		 */
		const CATEGORY_SELECTED_ALTERNATIVE: string;

		/**
		 * Notification category for a running background service.
		 */
		const CATEGORY_SERVICE: string;

		/**
		 * Notification category for a social network or sharing update.
		 */
		const CATEGORY_SOCIAL: string;

		/**
		 * Notification category indicating ongoing information about device or contextual status.
		 */
		const CATEGORY_STATUS: string;

		/**
		 * Activity to be used in a tab activity.
		 */
		const CATEGORY_TAB: string;

		/**
		 * To be used as a test (not part of the normal user experience).
		 */
		const CATEGORY_TEST: string;

		/**
		 * Notification category indicating media transport control for playback.
		 */
		const CATEGORY_TRANSPORT: string;

		/**
		 * To be used as a unit test (run through the Test Harness).
		 */
		const CATEGORY_UNIT_TEST: string;

		/**
		 * Use all default settings for a notification; see
		 * [Notification.defaults](Titanium.Android.Notification.defaults).
		 */
		const DEFAULT_ALL: number;

		/**
		 * Use the default light settings for a notification; see
		 * [Notification.defaults](Titanium.Android.Notification.defaults).
		 */
		const DEFAULT_LIGHTS: number;

		/**
		 * Use the default sound settings for a notification; see
		 * [Notification.defaults](Titanium.Android.Notification.defaults).
		 */
		const DEFAULT_SOUND: number;

		/**
		 * Use the default vibration settings for a notification; see
		 * [Notification.defaults](Titanium.Android.Notification.defaults).
		 */
		const DEFAULT_VIBRATE: number;

		/**
		 * Integer indicating how many pending alarms are being delivered with the intent.
		 */
		const EXTRA_ALARM_COUNT: string;

		/**
		 * String array containing e-mail addresses for blind carbon copying.
		 */
		const EXTRA_BCC: string;

		/**
		 * String array containing e-mail addresses for carbon copying.
		 */
		const EXTRA_CC: string;

		/**
		 * Boolean indicating full uninstall (true) or partial uninstall (false).
		 */
		const EXTRA_DATA_REMOVED: string;

		/**
		 * Boolean indicating to restart the application or not.
		 */
		const EXTRA_DONT_KILL_APP: string;

		/**
		 * String array containing e-mail addresses.
		 */
		const EXTRA_EMAIL: string;

		/**
		 * An Intent describing the choices you would like shown.
		 */
		const EXTRA_INTENT: string;

		/**
		 * A KeyEvent object containing the event that triggered the creation of the Intent it is in.
		 */
		const EXTRA_KEY_EVENT: string;

		/**
		 * String holding the phone number to call or number that was called.
		 */
		const EXTRA_PHONE_NUMBER: string;

		/**
		 * Boolean indicating if the package is being replaced.
		 */
		const EXTRA_REPLACING: string;

		/**
		 * Bitmap icon.
		 */
		const EXTRA_SHORTCUT_ICON: string;

		/**
		 * Resource of the shortcut.
		 */
		const EXTRA_SHORTCUT_ICON_RESOURCE: string;

		/**
		 * Intent of a shortcut.
		 */
		const EXTRA_SHORTCUT_INTENT: string;

		/**
		 * Name of the shortcut.
		 */
		const EXTRA_SHORTCUT_NAME: string;

		/**
		 * URI containing the stream data.
		 */
		const EXTRA_STREAM: string;

		/**
		 * Subject line of a message.
		 */
		const EXTRA_SUBJECT: string;

		/**
		 * Initial data to place in a newly created record.
		 */
		const EXTRA_TEMPLATE: string;

		/**
		 * Corresponds to the Android `Intent.EXTRA_TEXT` constant.
		 */
		const EXTRA_TEXT: string;

		/**
		 * Corresponds to the Android `Intent.EXTRA_TITLE` constant.
		 */
		const EXTRA_TITLE: string;

		/**
		 * UID of the assigned packaged.
		 */
		const EXTRA_UID: string;

		/**
		 * Not used.
		 */
		const FILL_IN_ACTION: number;

		/**
		 * Not used.
		 */
		const FILL_IN_CATEGORIES: number;

		/**
		 * Not used.
		 */
		const FILL_IN_COMPONENT: number;

		/**
		 * Not used.
		 */
		const FILL_IN_DATA: number;

		/**
		 * Not used.
		 */
		const FILL_IN_PACKAGE: number;

		/**
		 * If activity is already running, bring it to the foreground.
		 */
		const FLAG_ACTIVITY_BROUGHT_TO_FRONT: number;

		/**
		 * If the activity is present, removes any activities on top of it to make it the foreground activity.
		 */
		const FLAG_ACTIVITY_CLEAR_TOP: number;

		/**
		 * Corresponds to the Android `Intent.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET` constant.
		 */
		const FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET: number;

		/**
		 * Exclude the activity from recently launched activities.
		 */
		const FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS: number;

		/**
		 * Return result to the original calling activity.
		 */
		const FLAG_ACTIVITY_FORWARD_RESULT: number;

		/**
		 * Activity was launched from history.
		 */
		const FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY: number;

		/**
		 * Start the activity as a new task even if it exists.
		 */
		const FLAG_ACTIVITY_MULTIPLE_TASK: number;

		/**
		 * Activity will be the start of a new task (collection of activities).
		 */
		const FLAG_ACTIVITY_NEW_TASK: number;

		/**
		 * Prevent transition animation.
		 */
		const FLAG_ACTIVITY_NO_ANIMATION: number;

		/**
		 * Do not keep the activity in the history stack.
		 */
		const FLAG_ACTIVITY_NO_HISTORY: number;

		/**
		 * Disables the [onUserLeaveHint()](https://developer.android.com/reference/android/app/Activity.html#onUserLeaveHint()) callback.
		 */
		const FLAG_ACTIVITY_NO_USER_ACTION: number;

		/**
		 * Corresponds to the Android `Intent.FLAG_ACTIVITY_PREVIOUS_IS_TOP` constant.
		 */
		const FLAG_ACTIVITY_PREVIOUS_IS_TOP: number;

		/**
		 * If the activity already exists, place it at the top of the history stack.
		 */
		const FLAG_ACTIVITY_REORDER_TO_FRONT: number;

		/**
		 * If the task already exists, resets the task to its initial state.
		 */
		const FLAG_ACTIVITY_RESET_TASK_IF_NEEDED: number;

		/**
		 * Do not launch the activity if it is already running.
		 */
		const FLAG_ACTIVITY_SINGLE_TOP: number;

		/**
		 * Cancel the notification when it is clicked by the user.
		 */
		const FLAG_AUTO_CANCEL: number;

		/**
		 * Cancel the current pending intent before creating a new one.
		 */
		const FLAG_CANCEL_CURRENT: number;

		/**
		 * Enable a log message to print out the resolution of the intent.
		 */
		const FLAG_DEBUG_LOG_RESOLUTION: number;

		/**
		 * Indicates the intent is coming from a background operation.
		 */
		const FLAG_FROM_BACKGROUND: number;

		/**
		 * Grant read permission on the URI in the Intent's data or clipboard.
		 */
		const FLAG_GRANT_READ_URI_PERMISSION: number;

		/**
		 * Grants write permission on the URI in the Intent's data or clipboard.
		 */
		const FLAG_GRANT_WRITE_URI_PERMISSION: number;

		/**
		 * Pending intent should be immutable.
		 */
		const FLAG_IMMUTABLE: number;

		/**
		 * Repeat audio until the notification is cancelled or the notification window
		 * is opened.
		 */
		const FLAG_INSISTENT: number;

		/**
		 * Pending intent should be mutable.
		 */
		const FLAG_MUTABLE: number;

		/**
		 * Do not cancel the notification when the user clicks the Clear All button.
		 */
		const FLAG_NO_CLEAR: number;

		/**
		 * If the current intent does not exist, do not create it.
		 */
		const FLAG_NO_CREATE: number;

		/**
		 * The pending intent can only be used once.
		 */
		const FLAG_ONE_SHOT: number;

		/**
		 * Specifies that a notification is in reference to something that is ongoing, like a phone call.
		 */
		const FLAG_ONGOING_EVENT: number;

		/**
		 * Play an alert (sound, lights, and/or vibration) once each time the notification is sent, even if it has not been canceled before that.
		 */
		const FLAG_ONLY_ALERT_ONCE: number;

		/**
		 * When sending a broadcast, only registered receivers will be called.
		 */
		const FLAG_RECEIVER_REGISTERED_ONLY: number;

		/**
		 * Use LED lights to alert the user to the notification.
		 */
		const FLAG_SHOW_LIGHTS: number;

		/**
		 * If the current pending intent already exists, only update the current intent's extra data.
		 */
		const FLAG_UPDATE_CURRENT: number;

		/**
		 * Allows the camera to be used while the app is in the background.
		 */
		const FOREGROUND_SERVICE_TYPE_CAMERA: number;

		/**
		 * Allows connecting to Android Auto, bluetooth, TV or other devices while app is in the background.
		 */
		const FOREGROUND_SERVICE_TYPE_CONNECTED_DEVICE: number;

		/**
		 * Allows accessing location from the GPS, map, etc. while the app is in the background.
		 */
		const FOREGROUND_SERVICE_TYPE_LOCATION: number;

		/**
		 * A special value indicates to use all types set in manifest file.
		 */
		const FOREGROUND_SERVICE_TYPE_MANIFEST: number;

		/**
		 * Allows music, video, news or other media playback while the app is in the background.
		 */
		const FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK: number;

		/**
		 * Allows managing a media projection session for screen recording or taking screenshots
		 * while app is in the background.
		 */
		const FOREGROUND_SERVICE_TYPE_MEDIA_PROJECTION: number;

		/**
		 * Allows the microphone to be used while the app is in the background.
		 */
		const FOREGROUND_SERVICE_TYPE_MICROPHONE: number;

		/**
		 * The default foreground service type.
		 */
		const FOREGROUND_SERVICE_TYPE_NONE: number;

		/**
		 * Allows ongoing phone call or video conferencing access while the app is in the background.
		 */
		const FOREGROUND_SERVICE_TYPE_PHONE_CALL: number;

		/**
		 * Used with [NotificationChannel](Titanium.Android.NotificationChannel) to specify an importance level.
		 */
		const IMPORTANCE_DEFAULT: number;

		/**
		 * Used with [NotificationChannel](Titanium.Android.NotificationChannel) to specify an importance level.
		 */
		const IMPORTANCE_HIGH: number;

		/**
		 * Used with [NotificationChannel](Titanium.Android.NotificationChannel) to specify an importance level.
		 */
		const IMPORTANCE_LOW: number;

		/**
		 * Used with [NotificationChannel](Titanium.Android.NotificationChannel) to specify an importance level.
		 */
		const IMPORTANCE_MAX: number;

		/**
		 * Used with [NotificationChannel](Titanium.Android.NotificationChannel) to specify an importance level.
		 */
		const IMPORTANCE_MIN: number;

		/**
		 * Used with [NotificationChannel](Titanium.Android.NotificationChannel) to specify an importance level.
		 */
		const IMPORTANCE_NONE: number;

		/**
		 * Used with [NotificationChannel](Titanium.Android.NotificationChannel) to specify an importance level.
		 */
		const IMPORTANCE_UNSPECIFIED: number;

		/**
		 * Standard Action Bar navigation mode.
		 */
		const NAVIGATION_MODE_STANDARD: number;

		/**
		 * Action Bar tab navigation mode.
		 */
		const NAVIGATION_MODE_TABS: number;

		/**
		 * Not used.
		 * @deprecated
		 */
		const PENDING_INTENT_FOR_ACTIVITY: never;

		/**
		 * Not used.
		 * @deprecated
		 */
		const PENDING_INTENT_FOR_BROADCAST: never;

		/**
		 * Not used.
		 * @deprecated
		 */
		const PENDING_INTENT_FOR_SERVICE: never;

		/**
		 * Not used.
		 * @deprecated
		 */
		const PENDING_INTENT_MAX_VALUE: never;

		/**
		 * Default priority if it does not fit into another priority category.
		 */
		const PRIORITY_DEFAULT: number;

		/**
		 * Use for high priority notifications like real-time chat messages.
		 */
		const PRIORITY_HIGH: number;

		/**
		 * Use for low priority notifications like software updates.
		 */
		const PRIORITY_LOW: number;

		/**
		 * Use for urgent or time-critical notifications, for example, turn-by-turn directions or
		 * emergency alerts.
		 */
		const PRIORITY_MAX: number;

		/**
		 * Use for expired events.
		 */
		const PRIORITY_MIN: number;

		/**
		 * Accessor for Android system resources.
		 */
		const R: Titanium.Android.R;

		/**
		 * Used with [setResult](Titanium.Android.Activity.setResult) to specify that
		 * an activity was canceled.
		 */
		const RESULT_CANCELED: number;

		/**
		 * Used with [setResult](Titanium.Android.Activity.setResult) to specify a
		 * user-defined result.
		 */
		const RESULT_FIRST_USER: number;

		/**
		 * Used with [setResult](Titanium.Android.Activity.setResult) to specify that
		 * an activity succeeded.
		 */
		const RESULT_OK: number;

		/**
		 * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to
		 * specify the activity should run in the same orientation as the activity behind it
		 * in the activity stack.
		 */
		const SCREEN_ORIENTATION_BEHIND: number;

		/**
		 * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to
		 * specify a landscape screen orientation.
		 */
		const SCREEN_ORIENTATION_LANDSCAPE: number;

		/**
		 * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to
		 * specify that the sensor should be ignored and the display should not rotate.
		 */
		const SCREEN_ORIENTATION_NOSENSOR: number;

		/**
		 * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to
		 * specify a portrait screen orientation.
		 */
		const SCREEN_ORIENTATION_PORTRAIT: number;

		/**
		 * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to
		 * specify that orientation should be determined by the orientation sensor.
		 */
		const SCREEN_ORIENTATION_SENSOR: number;

		/**
		 * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to
		 * specify that the system should use its default rules for determining the best
		 * orientation.
		 */
		const SCREEN_ORIENTATION_UNSPECIFIED: number;

		/**
		 * Use with [requestedOrientation](Titanium.Android.Activity.requestedOrientation) to
		 * specify that the system should use the user's preferred orientation.
		 */
		const SCREEN_ORIENTATION_USER: number;

		/**
		 * Always show this item as an action button in the action bar.
		 */
		const SHOW_AS_ACTION_ALWAYS: number;

		/**
		 * The action view can collapse to a normal menu item.
		 */
		const SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: number;

		/**
		 * Show this item as an action button if the system decides there is room for it.
		 */
		const SHOW_AS_ACTION_IF_ROOM: number;

		/**
		 * Never display this item as an action button in the action bar.
		 */
		const SHOW_AS_ACTION_NEVER: number;

		/**
		 * When this item is in the action bar, always show it with a text label.
		 */
		const SHOW_AS_ACTION_WITH_TEXT: number;

		/**
		 * A Service start mode indicating that if the host application is stopped by Android, the service should not be restarted automatically.
		 */
		const START_NOT_STICKY: number;

		/**
		 * A Service start mode indicating that if the host application is stopped by Android, the service should be restarted automatically and the original Intent re-sent.
		 */
		const START_REDELIVER_INTENT: number;

		/**
		 * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to
		 * request that the alarm stream type for notifications be used.
		 */
		const STREAM_ALARM: number;

		/**
		 * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that the
		 * default stream type for notifications be used.
		 */
		const STREAM_DEFAULT: number;

		/**
		 * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to
		 * request that the music stream type for notifications be used.
		 */
		const STREAM_MUSIC: number;

		/**
		 * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that the
		 * notification stream type for notifications be used.
		 */
		const STREAM_NOTIFICATION: number;

		/**
		 * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that the
		 * ring stream type for notifications be used.
		 */
		const STREAM_RING: number;

		/**
		 * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that the
		 * system stream type for notifications be used.
		 */
		const STREAM_SYSTEM: number;

		/**
		 * Use with [audioStreamType](Titanium.Android.Notification.audioStreamType) to request that the
		 * voice call stream type for notifications be used.
		 */
		const STREAM_VOICE_CALL: number;

		/**
		 * QuickSettings tile is active.
		 */
		const TILE_STATE_ACTIVE: number;

		/**
		 * QuickSettings tile is inactive.
		 */
		const TILE_STATE_INACTIVE: number;

		/**
		 * QuickSettings tile is unavailble.
		 */
		const TILE_STATE_UNAVAILABLE: number;

		/**
		 * The URI scheme used for intent URIs.
		 */
		const URI_INTENT_SCHEME: number;

		/**
		 * Shows basic information about the notification.
		 */
		const VISIBILITY_PRIVATE: number;

		/**
		 * Shows the notification's full content on the lockscreen. This is the system default if visibility is left unspecified.
		 */
		const VISIBILITY_PUBLIC: number;

		/**
		 * Shows the most minimal information of the notification on the lockscreen.
		 */
		const VISIBILITY_SECRET: number;

		/**
		 * Turn the screen on when the wake lock is acquired.
		 */
		const WAKE_LOCK_ACQUIRE_CAUSES_WAKEUP: number;

		/**
		 * Ensures that the screen and keyboard backlight are on at full brightness.
		 */
		const WAKE_LOCK_FULL: number;

		/**
		 * When this wake lock is released, poke the user activity timer so the screen stays on for a little longer.
		 */
		const WAKE_LOCK_ON_AFTER_RELEASE: number;

		/**
		 * Ensures that the CPU is running; the screen and keyboard backlight will be allowed to go off.
		 */
		const WAKE_LOCK_PARTIAL: number;

		/**
		 * Ensures that the screen is on at full brightness; the keyboard backlight will be allowed to go off.
		 */
		const WAKE_LOCK_SCREEN_BRIGHT: number;

		/**
		 * Ensures that the screen is on (but may be dimmed); the keyboard backlight will be allowed to go off.
		 */
		const WAKE_LOCK_SCREEN_DIM: number;

	}
	/**
	 * The top-level Android module.
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
		 * References the top-most window's activity.
		 */
		static readonly currentActivity: Titanium.Android.Activity;

		/**
		 * Service in the active context.
		 */
		static readonly currentService: Titanium.Android.Service;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * The first activity launched by the application.
		 */
		static readonly rootActivity: Titanium.Android.Activity;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Creates and returns an instance of <Titanium.Android.BigPictureStyle>.
		 */
		static createBigPictureStyle(parameters?: Dictionary<Titanium.Android.BigPictureStyle>): Titanium.Android.BigPictureStyle;

		/**
		 * Creates and returns an instance of <Titanium.Android.BigTextStyle>.
		 */
		static createBigTextStyle(parameters?: Dictionary<Titanium.Android.BigTextStyle>): Titanium.Android.BigTextStyle;

		/**
		 * Create an `Intent` to be used in a broadcast.
		 */
		static createBroadcastIntent(parameters?: Dictionary<Titanium.Android.Intent>): Titanium.Android.Intent;

		/**
		 * Creates and returns an instance of <Titanium.Android.BroadcastReceiver>.
		 */
		static createBroadcastReceiver(parameters?: Dictionary<Titanium.Android.BroadcastReceiver>): Titanium.Android.BroadcastReceiver;

		/**
		 * Creates and returns an instance of <Titanium.Android.Intent>.
		 */
		static createIntent(parameters?: Dictionary<Titanium.Android.Intent>): Titanium.Android.Intent;

		/**
		 * Creates an activity chooser intent, used to allow the user to select a target activity
		 * for an intent.
		 */
		static createIntentChooser(intent: Titanium.Android.Intent, title: string): Titanium.Android.Intent;

		/**
		 * Creates and returns an instance of <Titanium.Android.Notification>.
		 */
		static createNotification(parameters?: Dictionary<Titanium.Android.Notification>): Titanium.Android.Notification;

		/**
		 * Creates and returns an instance of <Titanium.Android.NotificationChannel>.
		 */
		static createNotificationChannel(parameters?: Dictionary<Titanium.Android.NotificationChannel>): Titanium.Android.NotificationChannel;

		/**
		 * Creates a [PendingIntent](Titanium.Android.PendingIntent) to be used inside a
		 * [Notification](Titanium.Android.Notification).
		 */
		static createPendingIntent(parameters?: Dictionary<Titanium.Android.PendingIntent>): Titanium.Android.PendingIntent;

		/**
		 * Creates and returns an instance of <Titanium.Android.QuickSettingsService>.
		 */
		static createQuickSettingsService(parameters?: Dictionary<Titanium.Android.QuickSettingsService>): Titanium.Android.QuickSettingsService;

		/**
		 * Creates and returns an instance of <Titanium.Android.RemoteViews>.
		 */
		static createRemoteViews(parameters?: Dictionary<Titanium.Android.RemoteViews>): Titanium.Android.RemoteViews;

		/**
		 * Create a <Titanium.Android.Service> so you can start/stop it and listen for events from it.
		 */
		static createService(intent: Titanium.Android.Intent): Titanium.Android.Service;

		/**
		 * Create an `Intent` to be used to start a service.
		 */
		static createServiceIntent(options: ServiceIntentOptions): Titanium.Android.Intent;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Returns `true` if the app has permission access.
		 */
		static hasPermission(permission: string | string[]): boolean;

		/**
		 * Check on state of Service.
		 */
		static isServiceRunning(intent: Titanium.Android.Intent): boolean;

		/**
		 * Registers broadcast receiver for the given actions.
		 */
		static registerBroadcastReceiver(broadcastReceiver: Titanium.Android.BroadcastReceiver, actions: ReadonlyArray<string>): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Request for permission access.
		 */
		static requestPermissions(permissions: string | string[], callback?: (param0: RequestPermissionAccessResult) => void): Promise<RequestPermissionAccessResult>;

		/**
		 * Starts a simple service.
		 */
		static startService(intent: Titanium.Android.Intent): void;

		/**
		 * Stop a simple service that was started with `startService`.
		 */
		static stopService(intent: Titanium.Android.Intent): void;

		/**
		 * Unregisters a broadcast receiver.
		 */
		static unregisterBroadcastReceiver(broadcastReceiver: Titanium.Android.BroadcastReceiver): void;

	}
}
/**
 * Argument passed to the callback when a request finishes successfully or erroneously.
 */
interface RequestPermissionAccessResult extends ErrorResponse {
}
/**
 * Options passed to <Titanium.Android.createServiceIntent>.
 */
interface ServiceIntentOptions {
	/**
	 * One of the `START_*` constants from <Titanium.Android> to specify the "stickiness" of the Service when Android shuts down the host application.
	 */
	startMode?: number;

	/**
	 * URL for the service's JavaScript.
	 */
	url?: string;

}
