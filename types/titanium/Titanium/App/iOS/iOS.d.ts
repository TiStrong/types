/// <reference path="./BackgroundService.d.ts" />
/// <reference path="./LocalNotification.d.ts" />
/// <reference path="./SearchQuery.d.ts" />
/// <reference path="./SearchableIndex.d.ts" />
/// <reference path="./SearchableItem.d.ts" />
/// <reference path="./SearchableItemAttributeSet.d.ts" />
/// <reference path="./UserActivity.d.ts" />
/// <reference path="./UserDefaults.d.ts" />
/// <reference path="./UserNotificationAction.d.ts" />
/// <reference path="./UserNotificationCategory.d.ts" />
/// <reference path="./UserNotificationCenter.d.ts" />
declare namespace Titanium {
	namespace App {
		/**
		 * The top-level App iOS module, available only to iOS devices, that includes the facilities to
		 * create and manage local notifications and background services.
		 */
		namespace iOS {
			/**
			 * Use with [setMinimumBackgroundFetchInterval](Titanium.App.iOS.setMinimumBackgroundFetchInterval) method.
			 * Specifies the smallest fetch interval supported by the system.
			 */
			const BACKGROUNDFETCHINTERVAL_MIN: number;

			/**
			 * Use with [setMinimumBackgroundFetchInterval](Titanium.App.iOS.setMinimumBackgroundFetchInterval) method.
			 * Used to specify a fetch interval large enough to prevent fetch operations from occurring.
			 */
			const BACKGROUNDFETCHINTERVAL_NEVER: number;

			/**
			 * Convenience constant for system event "accessibilitylayoutchanged".
			 */
			const EVENT_ACCESSIBILITY_LAYOUT_CHANGED: string;

			/**
			 * Convenience constant for system event "accessibilityscreenchanged".
			 */
			const EVENT_ACCESSIBILITY_SCREEN_CHANGED: string;

			/**
			 * A dark interface style.
			 * @deprecated Use <Titanium.UI.USER_INTERFACE_STYLE_DARK> instead, which is supported cross-platform.
			 */
			const USER_INTERFACE_STYLE_DARK: number;

			/**
			 * A light interface style.
			 * @deprecated Use <Titanium.UI.USER_INTERFACE_STYLE_LIGHT> instead, which is supported cross-platform.
			 */
			const USER_INTERFACE_STYLE_LIGHT: number;

			/**
			 * An unspecified interface style.
			 * @deprecated Use <Titanium.UI.USER_INTERFACE_STYLE_UNSPECIFIED> instead, which is supported cross-platform.
			 */
			const USER_INTERFACE_STYLE_UNSPECIFIED: number;

			/**
			 * The action will execute in background. Use with the
			 * [activationMode](Titanium.App.iOS.UserNotificationAction.activationMode) property.
			 */
			const USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND: number;

			/**
			 * The action will launch the application and execute in the foreground.
			 * Use with the [activationMode](Titanium.App.iOS.UserNotificationAction.activationMode) property.
			 */
			const USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND: number;

			/**
			 * A alert dialog is presented when the notification is received.
			 */
			const USER_NOTIFICATION_ALERT_STYLE_ALERT: number;

			/**
			 * A banner is presented when the notification is received.
			 */
			const USER_NOTIFICATION_ALERT_STYLE_BANNER: number;

			/**
			 * No banner or alert dialog is presented when the notification is received.
			 */
			const USER_NOTIFICATION_ALERT_STYLE_NONE: number;

			/**
			 * The application is authorized to post user notifications.
			 */
			const USER_NOTIFICATION_AUTHORIZATION_STATUS_AUTHORIZED: number;

			/**
			 * The application is not authorized to post user notifications.
			 */
			const USER_NOTIFICATION_AUTHORIZATION_STATUS_DENIED: number;

			/**
			 * The user has not yet made a choice regarding whether the application may post
			 * user notifications.
			 */
			const USER_NOTIFICATION_AUTHORIZATION_STATUS_NOT_DETERMINED: number;

			/**
			 * The application is provisionally authorized to post non-interruptive user notifications.
			 */
			const USER_NOTIFICATION_AUTHORIZATION_STATUS_PROVISIONAL: number;

			/**
			 * Default action behavior with no additional action support.
			 */
			const USER_NOTIFICATION_BEHAVIOR_DEFAULT: number;

			/**
			 * Provides a textfield with the notification for the user to enter a text response.
			 */
			const USER_NOTIFICATION_BEHAVIOR_TEXTINPUT: number;

			/**
			 * Allow CarPlay to display notifications of this type.
			 */
			const USER_NOTIFICATION_CATEGORY_OPTION_ALLOW_IN_CARPLAY: number;

			/**
			 * Send dismiss actions to the UNUserNotificationCenter object's delegate for handling.
			 */
			const USER_NOTIFICATION_CATEGORY_OPTION_CUSTOM_DISMISS_ACTION: number;

			/**
			 * Show the notification's subtitle, even if the user has disabled notification previews for the app.
			 */
			const USER_NOTIFICATION_CATEGORY_OPTION_HIDDEN_PREVIEWS_SHOW_SUBTITLE: number;

			/**
			 * Show the notification's title, even if the user has disabled notification previews for the app.
			 */
			const USER_NOTIFICATION_CATEGORY_OPTION_HIDDEN_PREVIEWS_SHOW_TITLE: number;

			/**
			 * No options.
			 */
			const USER_NOTIFICATION_CATEGORY_OPTION_NONE: number;

			/**
			 * The notification setting is turned off.
			 */
			const USER_NOTIFICATION_SETTING_DISABLED: number;

			/**
			 * The notification setting is turned on.
			 */
			const USER_NOTIFICATION_SETTING_ENABLED: number;

			/**
			 * The application does not support this notification type.
			 */
			const USER_NOTIFICATION_SETTING_NOT_SUPPORTED: number;

			/**
			 * The application may display an alert upon a notification being received.
			 * Use with the [types](UserNotificationSettings.types) property.
			 */
			const USER_NOTIFICATION_TYPE_ALERT: number;

			/**
			 * The application may badge its icon upon a notification being received.
			 * Use with the [types](UserNotificationSettings.types) property.
			 */
			const USER_NOTIFICATION_TYPE_BADGE: number;

			/**
			 * The ability to play sounds for critical alerts.
			 * Use with the [types](UserNotificationSettings.types) property.
			 */
			const USER_NOTIFICATION_TYPE_CRITICAL_ALERT: number;

			/**
			 * The application may not present any UI upon a notification being received.
			 * Use with the [types](UserNotificationSettings.types) property.
			 */
			const USER_NOTIFICATION_TYPE_NONE: number;

			/**
			 * An option indicating the system should display a button for in-app notification settings.
			 * Use with the [types](UserNotificationSettings.types) property.
			 */
			const USER_NOTIFICATION_TYPE_PROVIDES_APP_NOTIFICATION_SETTINGS: number;

			/**
			 * The ability to post non-interrupting notifications provisionally to the Notification Center.
			 * Use with the [types](UserNotificationSettings.types) property.
			 */
			const USER_NOTIFICATION_TYPE_PROVISIONAL: number;

			/**
			 * The application may play a sound upon a notification being received.
			 * Use with the [types](UserNotificationSettings.types) property.
			 */
			const USER_NOTIFICATION_TYPE_SOUND: number;

			/**
			 * Uniform type identifier for Mac OS icon images.
			 */
			const UTTYPE_APPLE_ICNS: string;

			/**
			 * Uniform type identifier for protected MPEG-4 audio (iTunes music store format).
			 */
			const UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO: string;

			/**
			 * Uniform type identifier for all audio content.
			 */
			const UTTYPE_AUDIO: string;

			/**
			 * Uniform type identifier for Windows bitmap images.
			 */
			const UTTYPE_BMP: string;

			/**
			 * Uniform type identifier for Rich Text with content embedding, pasteboard format.
			 */
			const UTTYPE_FLAT_RTFD: string;

			/**
			 * Uniform type identifier for GIF images.
			 */
			const UTTYPE_GIF: string;

			/**
			 * Uniform type identifier for HTML.
			 */
			const UTTYPE_HTML: string;

			/**
			 * Uniform type identifier for Windows icon images.
			 */
			const UTTYPE_ICO: string;

			/**
			 * Uniform type identifier for all image types.
			 */
			const UTTYPE_IMAGE: string;

			/**
			 * Uniform type identifier for JPEG images.
			 */
			const UTTYPE_JPEG: string;

			/**
			 * Uniform type identifier for JPEG 2000 images.
			 */
			const UTTYPE_JPEG2000: string;

			/**
			 * Uniform type identifier for all audiovisual content.
			 */
			const UTTYPE_MOVIE: string;

			/**
			 * Uniform type identifier for MP3 audio.
			 */
			const UTTYPE_MP3: string;

			/**
			 * Uniform type identifier for MPEG-1 and MPEG-2 content.
			 */
			const UTTYPE_MPEG: string;

			/**
			 * Uniform type identifier for MPEG-4 content.
			 */
			const UTTYPE_MPEG4: string;

			/**
			 * Uniform type identifier for MPEG-4 audio.
			 */
			const UTTYPE_MPEG4_AUDIO: string;

			/**
			 * Uniform type identifier for PDF data.
			 */
			const UTTYPE_PDF: string;

			/**
			 * Uniform type identifier for PICT images.
			 */
			const UTTYPE_PICT: string;

			/**
			 * Uniform type identifier for a plain text type, equivalent to MIME type text/plain.
			 */
			const UTTYPE_PLAIN_TEXT: string;

			/**
			 * Uniform type identifier for PNG images.
			 */
			const UTTYPE_PNG: string;

			/**
			 * Uniform type identifier for QuickTime images.
			 */
			const UTTYPE_QUICKTIME_IMAGE: string;

			/**
			 * Uniform type identifier for QuickTime movies.
			 */
			const UTTYPE_QUICKTIME_MOVIE: string;

			/**
			 * Uniform type identifier for Rich Text.
			 */
			const UTTYPE_RTF: string;

			/**
			 * Uniform type identifier for Rich Text Format Directory, that is, Rich Text with content embedding, on-disk format.
			 */
			const UTTYPE_RTFD: string;

			/**
			 * Uniform type identifier for all text types.
			 */
			const UTTYPE_TEXT: string;

			/**
			 * Uniform type identifier for TIFF images.
			 */
			const UTTYPE_TIFF: string;

			/**
			 * Uniform type identifier for MLTE (Textension) format for mixed text and multimedia data.
			 */
			const UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA: string;

			/**
			 * Uniform type identifier for Unicode-16 with byte-order mark (BOM), or if BOM is not present,
			 * an external representation byte order (big-endian).
			 */
			const UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT: string;

			/**
			 * Uniform type identifier for Unicode-16, native byte order, with an optional byte-order mark (BOM).
			 */
			const UTTYPE_UTF16_PLAIN_TEXT: string;

			/**
			 * Uniform type identifier for Unicode-8 plain text type.
			 */
			const UTTYPE_UTF8_PLAIN_TEXT: string;

			/**
			 * Uniform type identifier for all video content without audio.
			 */
			const UTTYPE_VIDEO: string;

			/**
			 * Uniform type identifier for WebKit webarchive format.
			 */
			const UTTYPE_WEB_ARCHIVE: string;

			/**
			 * Uniform type identifier for XML.
			 */
			const UTTYPE_XML: string;

		}
		/**
		 * Base event for class Titanium.App.iOS
		 */
		interface iOSBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.App.iOS;

		}
		/**
		 * Fired when a local notification is received by the application.
		 */
		interface iOS_notification_Event extends iOSBaseEvent {
			/**
			 * Alert button text ('View', by default) or slider text ('slide to unlock...', by default).
			 */
			alertAction: string;

			/**
			 * Alert message.
			 */
			alertBody: string;

			/**
			 * Image displayed instead of `Default.png` when launching the application.
			 */
			alertLaunchImage: string;

			/**
			 * Application badge value.
			 */
			badge: number;

			/**
			 * The identifier of the app-defined [category object](Titanium.App.iOS.UserNotificationCategory). Available in Titanium SDK 7.5.0+ and iOS 10+.
			 */
			category: string;

			/**
			 * Date and time when the notification was configured to fire.
			 */
			date: Date;

			/**
			 * Boolean indicating if notification was received while app was in background. Available in Titanium SDK 6.2.0.
			 * On iOS 10+ this is no longer available since this event will only fire if the app is in foreground.
			 */
			inBackground: boolean;

			/**
			 * Name of the sound file configured to play when the notification was fired.
			 */
			sound: string;

			/**
			 * The unique identifier for the thread or conversation related to this notification request.
			 * It will be used to visually group notifications together. Available in Titanium SDK 7.5.0+ and iOS 10+.
			 */
			threadIdentifier: string;

			/**
			 * Timezone of the date when the notification was configured to fire. Available in Titanium SDK 7.4.0+.
			 */
			timezone: string;

			/**
			 * Custom data object.
			 */
			userInfo: any;

		}
		/**
		 * Fired when a user selects an action for an interactive local notification.
		 */
		interface iOS_localnotificationaction_Event extends iOSBaseEvent {
			/**
			 * Alert button text ('Open', by default) or slider text ('slide to unlock...', by default).
			 */
			alertAction: string;

			/**
			 * Alert message.
			 */
			alertBody: string;

			/**
			 * Image displayed instead of `Default.png` when launching the application.
			 */
			alertLaunchImage: string;

			/**
			 * Application badge value.
			 */
			badge: number;

			/**
			 * The identifier of the app-defined [category object](Titanium.App.iOS.UserNotificationCategory). Available in Titanium SDK 7.5.0+ and iOS 10+.
			 */
			category: string;

			/**
			 * Date and time when the notification was configured to fire.
			 */
			date: Date;

			/**
			 * Identifier of the action that was selected of the interactive notification.
			 */
			identifier: string;

			/**
			 * Boolean indicating if notification was received while app was in background (since Titanium SDK 6.2.0).
			 * On iOS 10+ this is no longer available since the event will only fire when opening the app after interacting
			 * with a notification from the iOS notification center (which means the app was in background when the
			 * notification was received).
			 */
			inBackground: boolean;

			/**
			 * Path to the sound file configured to play when the notification was fired.
			 */
			sound: string;

			/**
			 * The unique identifier for the thread or conversation related to this notification request.
			 * It will be used to visually group notifications together. Available in Titanium SDK 7.5.0+ and iOS 10+.
			 */
			threadIdentifier: string;

			/**
			 * Timezone of the date when the notification was configured to fire.
			 */
			timezone: string;

			/**
			 * User input if the notification used the `USER_NOTIFICATION_BEHAVIOR_TEXTINPUT` behavior.
			 */
			typedText: string;

			/**
			 * Custom data object.
			 */
			userInfo: any;

		}
		/**
		 * Fired when a user selects an action for an interactive remote notification.
		 */
		interface iOS_remotenotificationaction_Event extends iOSBaseEvent {
			/**
			 * Identifier of the category of the interactive notification.
			 */
			category: string;

			/**
			 * The payload passed to the Apple Push Notification Service.
			 */
			data: any;

			/**
			 * Identifier of the action that was selected of the interactive notification.
			 */
			identifier: string;

		}
		/**
		 * Fired when the application is woken up for a fetch operation. Available only on iOS 7 and later.
		 */
		interface iOS_backgroundfetch_Event extends iOSBaseEvent {
			/**
			 * Unique string identifier for the `backgroundfetch` event. This identifier should be passed as the argument
			 * to the [endBackgroundHandler](Titanium.App.iOS.endBackgroundHandler) method.
			 */
			handlerId: string;

		}
		/**
		 * Fired when the application is woken up by a silent remote notification. Available only on iOS 7 and later.
		 */
		interface iOS_silentpush_Event extends iOSBaseEvent {
			/**
			 * Unique string identifier for the `silentpush` event. This identifier should be passed as the argument
			 * to the [endBackgroundHandler](Titanium.App.iOS.endBackgroundHandler) method.
			 */
			handlerId: string;

		}
		/**
		 * Fired when the events related to a [urlSession](Modules.URLSession) are waiting to be processed.
		 * Available only on iOS 7 and later.
		 */
		interface iOS_backgroundtransfer_Event extends iOSBaseEvent {
			/**
			 * Unique string identifier for the `backgroundtransfer` event. This identifier should be passed as the argument
			 * to the [endBackgroundHandler](Titanium.App.iOS.endBackgroundHandler) method.
			 */
			handlerId: string;

			/**
			 * The identifier of the URL session requiring attention. If your app was just launched,
			 * you can use this identifier to create a new `urlSession` object that can receive the events.
			 */
			sessionId: string;

		}
		/**
		 * Fired periodically to inform the app about the download's progress of a [urlSession](Modules.URLSession).
		 * Available only on iOS 7 and later.
		 */
		interface iOS_downloadprogress_Event extends iOSBaseEvent {
			/**
			 * The number of bytes transferred since the last time this event was fired.
			 */
			bytesWritten: number;

			/**
			 * The `urlSession` session identifier. If it does not exist, this property is not provided.
			 * This property is available since Titanium Mobile 5.4.0.GA.
			 */
			sessionIdentifier: string;

			/**
			 * The `urlSession` download task's identifier.
			 */
			taskIdentifier: number;

			/**
			 * The expected length of the file, as provided by the Content-Length header. If this
			 * header was not provided, the value is zero.
			 */
			totalBytesExpectedToWrite: number;

			/**
			 * The total number of bytes transferred so far.
			 */
			totalBytesWritten: number;

		}
		/**
		 * Fired periodically to inform the app about the upload's progress of a [urlSession](Modules.URLSession).
		 * Available only on iOS 7 and later.
		 */
		interface iOS_uploadprogress_Event extends iOSBaseEvent {
			/**
			 * The number of bytes transferred since the last time this event was fired.
			 */
			bytesSent: number;

			/**
			 * The `urlSession` session identifier. If it does not exist, this property is not provided.
			 * This property is available since Titanium Mobile 5.4.0.GA.
			 */
			sessionIdentifier: string;

			/**
			 * The `urlSession` upload task's identifier.
			 */
			taskIdentifier: number;

			/**
			 * The expected length of the file, as provided by the Content-Length header. If this
			 * header was not provided, the value is zero.
			 */
			totalBytesExpectedToSend: number;

			/**
			 * The total number of bytes transferred so far.
			 */
			totalBytesSent: number;

		}
		/**
		 * Fired to indicate that a [urlSession's](Modules.URLSession) download task has finished downloading.
		 * Available only on iOS 7 and later.
		 */
		interface iOS_downloadcompleted_Event extends iOSBaseEvent {
			/**
			 * The downloaded data as a Titanium.Blob object.
			 */
			data: Titanium.Blob;

			/**
			 * The `urlSession` session identifier. If it does not exist, this property is not provided.
			 * This property is available since Titanium Mobile 5.4.0.GA.
			 */
			sessionIdentifier: string;

			/**
			 * The `urlSession` download task's identifier.
			 */
			taskIdentifier: number;

		}
		/**
		 * Fired to indicate that a [urlSession](Modules.URLSession) task finished transferring data.
		 * Available only on iOS 7 and later.
		 */
		interface iOS_sessioncompleted_Event extends iOSBaseEvent {
			/**
			 * The error code of the error, if any (potentially system-dependent).
			 */
			errorCode: number;

			/**
			 * A string containing the localized description of the error.
			 * This property does not exhist if errorCode is 0, which means there is no error.
			 */
			message: string;

			/**
			 * The response text for [task](Modules.URLSession.task) and [uploadTask](Modules.URLSession.uploadTask).
			 * This property does not exhist for download task. For download task response,
			 * use [downloadcompleted](Titanium.App.iOS.downloadcompleted) event.
			 */
			responseText: string;

			/**
			 * The `urlSession` session identifier. If it does not exist, this property is not provided.
			 * This property is available since Titanium Mobile 5.4.0.GA.
			 */
			sessionIdentifier: string;

			/**
			 * The response status code for tasks.
			 */
			statusCode: number;

			/**
			 * Indicates if the operation succeeded. Returns true if download succeeded, false otherwise.
			 */
			success: boolean;

			/**
			 * The `urlSession` download task's identifier.
			 */
			taskIdentifier: number;

		}
		/**
		 * Fired to indicate that all messages enqueued for a [urlSession](Modules.URLSession) have been delivered.
		 * Available only on iOS 7 and later.
		 */
		interface iOS_sessioneventscompleted_Event extends iOSBaseEvent {
			/**
			 * The `urlSession` session identifier. If it does not exist, this property is not provided.
			 * This property is available since Titanium Mobile 5.4.0.GA.
			 */
			sessionIdentifier: string;

		}
		/**
		 * Fired when the user notification settings are registered.
		 */
		interface iOS_usernotificationsettings_Event extends iOSBaseEvent {
			/**
			 * Set of categories of user notification actions the application is registered to use.
			 */
			categories: Titanium.App.iOS.UserNotificationCategory[];

			/**
			 * Notification types the application is registered to use.
			 */
			types: number[];

		}
		/**
		 * Fired when openParentApplication:reply is called from a WatchKit extension. Available only on iOS 8.2 and later.
		 */
		interface iOS_watchkitextensionrequest_Event extends iOSBaseEvent {
			/**
			 * Unique string identifier for the `watchkitextensionrequest` event. This identifier should be passed an argument
			 * to the [sendWatchExtensionReply](Titanium.App.iOS.sendWatchExtensionReply) method.
			 */
			handlerId: string;

			/**
			 * The payload passed to the `openParentApplication:reply` method from the WatchKit extension.
			 */
			userInfo: any;

		}
		/**
		 * Fired when iOS continueactivity calls `continueUserActivity`.
		 */
		interface iOS_continueactivity_Event extends iOSBaseEvent {
			/**
			 * Unique string identifier for the handoff user activity. The identifier must be defined in your `tiapp.xml` file.
			 */
			activityType: string;

			/**
			 * With field will contain the searchable Unique Identifier if the continueactivity is fired from a Core Spotlight searh result.
			 */
			searchableItemActivityIdentifier: string;

			/**
			 * The optional title provided to the user activity or search item.
			 */
			title: string;

			/**
			 * The optional userInfo provided to the user activity. The userInfo is a custom dictionary and can contain any information needed
			 * to create your handoff or Core Spotlight session.
			 */
			userInfo: any;

			/**
			 * The optional webpageURL provided to the user activity.
			 */
			webpageURL: string;

		}
		/**
		 * Fired when a user taps the Application Shortcut.
		 */
		interface iOS_shortcutitemclick_Event extends iOSBaseEvent {
			/**
			 * The unique identifier for the application shortcut.
			 */
			itemtype: string;

			/**
			 * The subtitle of the application shortcut.
			 */
			subtitle: string;

			/**
			 * The title of the application shortcut.
			 */
			title: string;

			/**
			 * The payload passed by the application shortcut.
			 */
			userInfo: any;

		}
		/**
		 * Fired when a new URL is handled by the application.
		 */
		interface iOS_handleurl_Event extends iOSBaseEvent {
			/**
			 * The launch options that are related to opening the URL.
			 */
			launchOptions: LaunchOptionsType;

		}
		/**
		 * Fired when the trait collection of the device changes, e.g. the user interface style.
		 */
		interface iOS_traitcollectionchange_Event extends iOSBaseEvent {
		}
		/**
		 * Fired after the user takes a screenshot, e.g. by pressing both the home and lock screen buttons.
		 */
		interface iOS_screenshotcaptured_Event extends iOSBaseEvent {
		}
		interface iOSEventMap extends ProxyEventMap {
			backgroundfetch: iOS_backgroundfetch_Event;

			backgroundtransfer: iOS_backgroundtransfer_Event;

			continueactivity: iOS_continueactivity_Event;

			downloadcompleted: iOS_downloadcompleted_Event;

			downloadprogress: iOS_downloadprogress_Event;

			handleurl: iOS_handleurl_Event;

			localnotificationaction: iOS_localnotificationaction_Event;

			notification: iOS_notification_Event;

			remotenotificationaction: iOS_remotenotificationaction_Event;

			screenshotcaptured: iOS_screenshotcaptured_Event;

			sessioncompleted: iOS_sessioncompleted_Event;

			sessioneventscompleted: iOS_sessioneventscompleted_Event;

			shortcutitemclick: iOS_shortcutitemclick_Event;

			silentpush: iOS_silentpush_Event;

			traitcollectionchange: iOS_traitcollectionchange_Event;

			uploadprogress: iOS_uploadprogress_Event;

			usernotificationsettings: iOS_usernotificationsettings_Event;

			watchkitextensionrequest: iOS_watchkitextensionrequest_Event;

		}
		/**
		 * The top-level App iOS module, available only to iOS devices, that includes the facilities to
		 * create and manage local notifications and background services.
		 */
		class iOS extends Titanium.Module {
			/**
			 * The name of the API that this proxy corresponds to.
			 */
			static readonly apiName: string;

			/**
			 * Returns a URL to open the app's settings.
			 */
			static readonly applicationOpenSettingsURL: string;

			/**
			 * Indicates if the proxy will bubble an event to its parent.
			 */
			static bubbleParent: boolean;

			/**
			 * Notification types and user notification categories the application is registered to use.
			 * @deprecated Use [Titanium.App.iOS.UserNotificationCenter.requestUserNotificationSettings](Titanium.App.iOS.UserNotificationCenter.requestUserNotificationSettings) instead.
			 */
			static readonly currentUserNotificationSettings: UserNotificationSettings;

			/**
			 * Provides an Array of the NSUserActivityTypes keys defined within your Titanium project.
			 */
			static readonly supportedUserActivityTypes: string[];

			/**
			 * The style associated with the user interface.
			 * @deprecated Use <Titanium.UI.userInterfaceStyle> instead, which is supported cross-platform.
			 */
			static readonly userInterfaceStyle: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			static addEventListener<K extends keyof iOSEventMap>(name: K, callback: (this: Titanium.App.iOS, event: iOSEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Applies the properties to the proxy.
			 */
			static applyProperties(props: any): void;

			/**
			 * Cancels all scheduled local notifications.
			 * @deprecated Use [Titanium.App.iOS.UserNotificationCenter.removePendingNotifications](Titanium.App.iOS.UserNotificationCenter.removePendingNotifications) instead.
			 */
			static cancelAllLocalNotifications(): void;

			/**
			 * Cancels a local notification.
			 * @deprecated Use [Titanium.App.iOS.UserNotificationCenter.removePendingNotifications](Titanium.App.iOS.UserNotificationCenter.removePendingNotifications) instead.
			 */
			static cancelLocalNotification(id: number | string): void;

			/**
			 * Creates and returns an instance of Titanium.App.iOS.UserDefaults.
			 */
			static createUserDefaults(parameters: Dictionary<Titanium.App.iOS.UserDefaults>): Titanium.App.iOS.UserDefaults;

			/**
			 * Creates and returns an instance of <Titanium.App.iOS.UserNotificationAction>.
			 */
			static createUserNotificationAction(parameters?: Dictionary<Titanium.App.iOS.UserNotificationAction>): Titanium.App.iOS.UserNotificationAction;

			/**
			 * Creates and returns an instance of <Titanium.App.iOS.UserNotificationCategory>.
			 */
			static createUserNotificationCategory(parameters?: Dictionary<Titanium.App.iOS.UserNotificationCategory>): Titanium.App.iOS.UserNotificationCategory;

			/**
			 * Marks the end of the app execution after initiating the download operation. Available only on iOS 7 and later.
			 */
			static endBackgroundHandler(handlerID: string): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent<K extends keyof iOSEventMap>(name: K, event?: iOSEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent(name: string, event?: any): void;

			/**
			 * Registers a service to run when the application is placed in the background.
			 */
			static registerBackgroundService(params: any): Titanium.App.iOS.BackgroundService;

			/**
			 * Registers the application to use the requested notification types and categories.
			 */
			static registerUserNotificationSettings(params: UserNotificationSettings): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener<K extends keyof iOSEventMap>(name: K, callback: (this: Titanium.App.iOS, event: iOSEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Schedule a local notification.
			 */
			static scheduleLocalNotification(params: NotificationParams): Titanium.App.iOS.LocalNotification;

			/**
			 * Marks the end of an `openParentApplication:reply` execution by a WatchKit extension.
			 * @deprecated Use [Titanium.WatchSession](Titanium.WatchSession) instead, which is supported on iOS 9 and later.
			 *
			 */
			static sendWatchExtensionReply(handlerId: string, userInfo: any): void;

			/**
			 * Specifies the minimum amount of time that must elapse between background fetch operations.
			 * Available only on iOS 7 and later.
			 */
			static setMinimumBackgroundFetchInterval(fetchInterval: number): void;

		}
	}
}
/**
 * Dictionary object of parameters used to identify an incoming URL that is handled
 * by the application.
 */
interface LaunchOptionsType {
	/**
	 * The application or service that triggered the handled URL.
	 */
	source?: string;

	/**
	 * The url that was triggered by the application or service.
	 */
	url?: string;

}
/**
 * Dictionary object of parameters used to create a notification using
 * <Titanium.App.iOS.scheduleLocalNotification>.
 */
interface NotificationParams {
	/**
	 * Alert button text ('Open', by default) or home text ('Press Home to unlock', by default)
	 * to display.
	 */
	alertAction?: string;

	/**
	 * Alert message to display.
	 */
	alertBody?: string;

	/**
	 * Image to display instead of `Default.png` when launching the application.
	 */
	alertLaunchImage?: string;

	/**
	 * Alert subtitle to display.
	 */
	alertSubtitle?: string;

	/**
	 * Alert title to display.
	 */
	alertTitle?: string;

	/**
	 * Notification attachments to display.
	 */
	attachments?: UserNotificationAttachment[];

	/**
	 * Application badge value.
	 */
	badge?: number;

	/**
	 * String identifier of category of actions to be displayed for an interactive notification.
	 */
	category?: string;

	/**
	 * Date and time for the notification to occur.
	 */
	date?: Date;

	/**
	 * The notification identifier.
	 */
	identifier: string;

	/**
	 * Region the notification will be triggered in. Allowed parameter are:
	 * - `latitude`: Latitude of the location center, in decimal degrees (required).
	 * - `longitude`: Longitude of the location center, in decimal degrees (required).
	 * - `triggersOnce`: Whether or not the notification will only fire once (optional, default: true).
	 */
	region?: any;

	/**
	 * Interval to repeat the notification. One of `weekly`, `daily`, `yearly,` `monthly`.
	 */
	repeat?: string;

	/**
	 * Path to the sound file to play when notification occurs, relative to the `Resources` folder.
	 */
	sound?: string;

	/**
	 * The string the notification adds to the category's summary format string.
	 */
	summaryArgument?: string;

	/**
	 * The number of items the notification adds to the category's summary format string.
	 */
	summaryArgumentCount?: string;

	/**
	 * Timezone of the date configured for the notification. If not set, the system timezone is used.
	 */
	timezone?: string;

	/**
	 * Data to pass to the application with the notification event.
	 */
	userInfo?: any;

}
/**
 * Provide at least the property `identifier` and `url` property to identify a local
 * image, sound or video. If your media is invalid, the API will throw an error log and
 * skip the invalid attachment.
 */
interface UserNotificationAttachment {
	/**
	 * The identifier of this attachment.
	 */
	identifier: string;

	/**
	 * An additional dictionary of options to provide.
	 */
	options?: any;

	/**
	 * The URL to the attachment's data. If you have obtained this attachment from
	 * the notification-center then the URL will be security-scoped.
	 */
	url: string;

}
/**
 * Dictionary object of parameters used to register the application with local notifications using
 * the <Titanium.App.iOS.registerUserNotificationSettings> method.
 * To retrieve the current notification settings, use the
 * <Titanium.App.iOS.UserNotificationCenter.requestUserNotificationSettings> method.
 */
interface UserNotificationSettings {
	/**
	 * Set of categories of user notification actions required by the applicaiton to use.
	 */
	categories?: Titanium.App.iOS.UserNotificationCategory[];

	/**
	 * Notification types to use.
	 */
	types?: number[];

}
