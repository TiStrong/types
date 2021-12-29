declare namespace Titanium {
	namespace Android {
		/**
		 * UI notifications that can be sent while the application is in the background.
		 */
		class Notification extends Titanium.Proxy {
			/**
			 * The audio stream type to use when playing the sound.
			 */
			audioStreamType: number;

			/**
			 * Sets the notification's category.
			 */
			category: string;

			/**
			 * The channel id specified for the notification.
			 */
			channelId: string;

			/**
			 * Accent color used behind icon.
			 */
			color: string;

			/**
			 * The `PendingIntent` to execute when the expanded status entry is clicked.
			 */
			contentIntent: Titanium.Android.PendingIntent;

			/**
			 * Description text of the notification.
			 */
			contentText: string;

			/**
			 * Title of the notification.
			 */
			contentTitle: string;

			/**
			 * Custom layout to display in the notification.
			 */
			contentView: Titanium.Android.RemoteViews;

			/**
			 * Specifies which values should be taken from the defaults.
			 */
			defaults: number;

			/**
			 * The `PendingIntent` to execute when the status entry is deleted by the user with the "Clear All Notifications" button.
			 */
			deleteIntent: Titanium.Android.PendingIntent;

			/**
			 * Set of flags for the notification.
			 */
			flags: number;

			/**
			 * The group key that the notification will belong to.
			 */
			groupKey: string;

			/**
			 * Specifies if this is a group summary notification.
			 */
			groupSummary: boolean;

			/**
			 * Notification icon, specified as an Android resource ID, or a local URL to a density-specific image.
			 */
			icon: number | string;

			/**
			 * Add a large icon to the notification (and the ticker on some devices) specified as an Android resource ID, or a local URL to a density-specific image.
			 */
			largeIcon: number | string;

			/**
			 * The color for the LED to blink.
			 */
			ledARGB: number;

			/**
			 * The number of milliseconds for the LED to be off while it's flashing.
			 */
			ledOffMS: number;

			/**
			 * The number of milliseconds for the LED to be on while it's flashing.
			 */
			ledOnMS: number;

			/**
			 * The number of events that this notification represents.
			 */
			number: number;

			/**
			 * Sets the priority of the notification.
			 */
			priority: number;

			/**
			 * A URL to the sound to play.
			 */
			sound: string;

			/**
			 * Style object that can apply a rich notification style.
			 */
			style: Titanium.Android.BigTextStyle | Titanium.Android.BigPictureStyle;

			/**
			 * Text to scroll across the screen when this item is added to the status bar.
			 */
			tickerText: string;

			/**
			 * Allows user to conceal private information of the notification on the lockscreen.
			 */
			visibility: number;

			/**
			 * Will wake up the device for the given time (in milliseconds) when the notification is shown.
			 * The application needs to also set the `android.permission.WAKE_LOCK` permission
			 * in the Android manifest section of the `tiapp.xml` file.
			 * ``` xml
			 * <ti:app>
			 *     <android>
			 *         <manifest>
			 *             <uses-permission android:name="android.permission.WAKE_LOCK" />
			 *         </manifest>
			 *     </android>
			 * </ti:app>
			 * ```
			 */
			wakeLock: wakeLockOptions;

			/**
			 * The timestamp for the notification (defaults to the current time).
			 */
			when: Date | number;

			/**
			 * Add an action button to the notification
			 */
			addAction(icon: number | string, title: string, intent: Titanium.Android.PendingIntent): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Sets the latest event info using the built-in notification view for this notification.
			 */
			setLatestEventInfo(contentTitle: string, contentText: string, contentIntent: Titanium.Android.PendingIntent): void;

			/**
			 * Set the progress this notification represents.
			 */
			setProgress(max: number, progress: number, indeterminate: boolean): void;

		}
	}
}
/**
 * Parameter for wakeLock
 */
interface wakeLockOptions {
	/**
	 * Wake lock level and flag. See [PowerManager.newWakeLock in the Android API Reference](https://developer.android.com/reference/android/os/PowerManager.html#newWakeLock(int,%20java.lang.String))
	 */
	flags?: number;

	/**
	 * Minimum time the device will be switched on (plus device switch-off time)
	 */
	time?: number;

}
