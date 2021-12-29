declare namespace Titanium {
	namespace Android {
		/**
		 * Module for managing notifications.
		 */
		class NotificationManager extends Titanium.Module {
			/**
			 * Use <Titanium.Android.DEFAULT_ALL> instead.
			 */
			static readonly DEFAULT_ALL: number;

			/**
			 * Use <Titanium.Android.DEFAULT_LIGHTS> instead.
			 */
			static readonly DEFAULT_LIGHTS: number;

			/**
			 * Use <Titanium.Android.DEFAULT_SOUND> instead.
			 */
			static readonly DEFAULT_SOUND: number;

			/**
			 * Use <Titanium.Android.DEFAULT_VIBRATE> instead.
			 */
			static readonly DEFAULT_VIBRATE: number;

			/**
			 * Use <Titanium.Android.FLAG_AUTO_CANCEL> instead.
			 */
			static readonly FLAG_AUTO_CANCEL: number;

			/**
			 * Use <Titanium.Android.FLAG_INSISTENT> instead.
			 */
			static readonly FLAG_INSISTENT: number;

			/**
			 * Use <Titanium.Android.FLAG_NO_CLEAR> instead.
			 */
			static readonly FLAG_NO_CLEAR: number;

			/**
			 * Use <Titanium.Android.FLAG_ONGOING_EVENT> instead.
			 */
			static readonly FLAG_ONGOING_EVENT: number;

			/**
			 * Use <Titanium.Android.FLAG_ONLY_ALERT_ONCE> instead.
			 */
			static readonly FLAG_ONLY_ALERT_ONCE: number;

			/**
			 * Use <Titanium.Android.FLAG_SHOW_LIGHTS> instead.
			 */
			static readonly FLAG_SHOW_LIGHTS: number;

			/**
			 * Use <Titanium.Android.STREAM_DEFAULT> instead.
			 */
			static readonly STREAM_DEFAULT: number;

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
			 * Returns whether showing notifications is enabled for the application.
			 */
			static areNotificationsEnabled(): boolean;

			/**
			 * Cancels a previously displayed notification.
			 */
			static cancel(id: number): void;

			/**
			 * Cancels all previously displayed notifications.
			 */
			static cancelAll(): void;

			/**
			 * Create a notification channel.
			 */
			static createNotificationChannel(parameters: Dictionary<Titanium.Android.NotificationChannel>): Titanium.Android.NotificationChannel;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent(name: string, event?: any): void;

			/**
			 * Adds a persistent notification to the status bar.
			 */
			static notify(id: number, notification: Titanium.Android.Notification): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
