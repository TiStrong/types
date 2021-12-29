declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * The top-level App iOS Notification Center module. It is used to control scheduled notifications
			 * and receive details about the system-wide notification settings.
			 */
			class UserNotificationCenter extends Titanium.Module {
				/**
				 * The name of the API that this proxy corresponds to.
				 */
				static readonly apiName: string;

				/**
				 * Indicates if the proxy will bubble an event to its parent.
				 */
				static bubbleParent: never;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				static addEventListener: never;

				/**
				 * Applies the properties to the proxy.
				 */
				static applyProperties: never;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				static fireEvent: never;

				/**
				 * Fetches the delivered notifications asynchronously.
				 */
				static getDeliveredNotifications(callback: (param0: UserNotificationCallbackResponse) => void): void;

				/**
				 * Fetches the pending notifications asynchronously.
				 */
				static getPendingNotifications(callback: (param0: UserNotificationCallbackResponse) => void): void;

				/**
				 * Removes the specified delivered notifications from the notification-center.
				 * If no notifications are specified, all delivered notifications will be removed.
				 */
				static removeDeliveredNotifications(notifications: ReadonlyArray<UserNotificationDictionary>): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				static removeEventListener: never;

				/**
				 * Removes the specified pending notifications to prevent them from being triggered.
				 * If no notifications are specified, all pending notifications will be removed.
				 */
				static removePendingNotifications(notifications: ReadonlyArray<UserNotificationDictionary>): void;

				/**
				 * Notification types and user notification categories the application is registered to use.
				 */
				static requestUserNotificationSettings(callback: (param0: GetUserNotificationSettings) => void): void;

			}
		}
	}
}
/**
 * Dictionary object of parameters used to register the application with local notifications using
 * the <Titanium.App.iOS.registerUserNotificationSettings> method.
 */
interface GetUserNotificationSettings {
	/**
	 * The current alert settings.
	 */
	alertSetting?: number;

	/**
	 * The current alert style used to display notifications.
	 */
	alertStyle?: number;

	/**
	 * The current authorization status for using notifications.
	 */
	authorizationStatus?: number;

	/**
	 * The current badge settings.
	 */
	badgeSetting?: number;

	/**
	 * The current CarPlay settings.
	 */
	carPlaySetting?: number;

	/**
	 * Set of categories of user notification actions required by the applicaiton to use.
	 */
	categories?: Titanium.App.iOS.UserNotificationCategory[];

	/**
	 * The authorization status to play sounds for critical alerts.
	 * Available in Titanium SDK 7.4.0 and later.
	 */
	criticalAlertSetting?: number;

	/**
	 * The current lock-screen settings.
	 */
	lockScreenSetting?: number;

	/**
	 * The current notication-center settings.
	 */
	notificationCenterSetting?: number;

	/**
	 * A Boolean value indicating the system displays a button for in-app notification settings.
	 * Available in Titanium SDK 7.4.0 and later.
	 */
	providesAppNotificationSettings?: number;

	/**
	 * The current sound settings.
	 */
	soundSetting?: number;

	/**
	 * Notification types to use.
	 */
	types?: number[];

}
/**
 * Response when receiving pending or local notifications
 * in <Titanium.App.iOS.UserNotificationCenter.getPendingNotifications> and
 * <Titanium.App.iOS.UserNotificationCenter.getDeliveredNotifications>.
 */
interface UserNotificationCallbackResponse {
	/**
	 * An array of identifiers used to create notifications.
	 */
	notifications?: UserNotificationDictionary[];

}
/**
 * Dictionary of notification data used in the array of `notifications`
 * when receiving pending or local notifications in
 * <Titanium.App.iOS.UserNotificationCenter.getPendingNotifications> and
 * <Titanium.App.iOS.UserNotificationCenter.getDeliveredNotifications>.
 */
interface UserNotificationDictionary {
	/**
	 * Alert button text ('Open', by default) or home text ('Press Home to unlock', by default)
	 * type: String
	 */
	alertAction?: string;

	/**
	 * Alert message.
	 */
	alertBody?: string;

	/**
	 * Image displayed instead of `Default.png` when launching the application.
	 */
	alertLaunchImage?: string;

	/**
	 * Subtitle of the notification.
	 */
	alertSubtitle?: string;

	/**
	 * Title of the notification.
	 */
	alertTitle?: string;

	/**
	 * Application badge value.
	 */
	badge?: number;

	/**
	 * Category identifier of the notification.
	 */
	category?: string;

	/**
	 * Date and time when the notification was configured to fire.
	 */
	date?: Date;

	/**
	 * The notification identifier.
	 */
	identifier: string;

	/**
	 * Region of the notification.
	 */
	region?: any;

	/**
	 * Path to the sound file configured to play when the notification was fired.
	 */
	sound?: string;

	/**
	 * Timezone of the date when the notification was configured to fire.
	 */
	timezone?: string;

	/**
	 * Custom data object.
	 */
	userInfo?: any;

}
