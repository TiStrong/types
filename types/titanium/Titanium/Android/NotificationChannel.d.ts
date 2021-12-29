declare namespace Titanium {
	namespace Android {
		/**
		 * Module for notification channels.
		 */
		class NotificationChannel extends Titanium.Proxy {
			/**
			 * Whether or not notifications posted to this channel can interrupt the user.
			 */
			bypassDnd: boolean;

			/**
			 * User visible description of this channel.
			 */
			description: string;

			/**
			 * Whether notifications posted to this channel should display notification lights
			 */
			enableLights: boolean;

			/**
			 * Whether notification posted to this channel should vibrate.
			 */
			enableVibration: boolean;

			/**
			 * Group id this channel belongs to.
			 */
			groupId: string;

			/**
			 * The channel id specified for the notification channel.
			 */
			id: string;

			/**
			 * The audio stream type to use when playing the sound.
			 */
			importance: number;

			/**
			 * The notification light color for notifications posted to this channel.
			 */
			lightColor: number;

			/**
			 * Whether or not notifications posted to this channel are shown on the lockscreen in full or redacted form.
			 */
			lockscreenVisibility: number;

			/**
			 * The visible name of this channel.
			 * The recommended maximum length is 40 characters; the value may be truncated if it is too long.
			 */
			name: string;

			/**
			 * Whether notifications posted to this channel can appear as application icon badges in a Launcher.
			 */
			showBadge: boolean;

			/**
			 * A URL to the sound to play.
			 */
			sound: string;

			/**
			 * The vibration pattern for notifications posted to this channel.
			 */
			vibratePattern: number[];

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

		}
	}
}
