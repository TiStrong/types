declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * Base event for class Titanium.App.iOS.UserActivity
			 */
			interface UserActivityBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.App.iOS.UserActivity;

			}
			/**
			 * Fired if the activity context needs to be saved before being continued on another device.
			 * To fire the event, set the UserActiviy object's `needsSave ` property to `true`.
			 * The receiver should update the activity with current activity state.
			 * After the event is fired, iOS will reset the `needsSave` property to false.
			 */
			interface UserActivity_useractivitywillsave_Event extends UserActivityBaseEvent {
				/**
				 * The activityType of the User Activity triggering the event.
				 */
				activityType: string;

				/**
				 * The title of the User Activity if defined.
				 */
				title: string;

				/**
				 * Dictionary object containing the userInfo data of the User Activity.
				 */
				userInfo: any;

				/**
				 * The webpageURL of the User Activity if defined.
				 */
				webpageURL: string;

			}
			/**
			 * Fired when the user activity was continued on another device.
			 */
			interface UserActivity_useractivitywascontinued_Event extends UserActivityBaseEvent {
				/**
				 * The activityType of the User Activity triggering the event.
				 */
				activityType: string;

				/**
				 * The title of the User Activity if defined.
				 */
				title: string;

				/**
				 * Dictionary object containing the userInfo data of the User Activity.
				 */
				userInfo: any;

				/**
				 * The webpageURL of the User Activity if defined.
				 */
				webpageURL: string;

			}
			/**
			 * Fired when the user activity get deleted using the <Titanium.App.iOS.UserActivity.deleteAllSavedUserActivities> or
			 * <Titanium.App.iOS.UserActivity.deleteSavedUserActivitiesForPersistentIdentifiers> methods.
			 */
			interface UserActivity_useractivitydeleted_Event extends UserActivityBaseEvent {
			}
			interface UserActivityEventMap extends ProxyEventMap {
				useractivitydeleted: UserActivity_useractivitydeleted_Event;

				useractivitywascontinued: UserActivity_useractivitywascontinued_Event;

				useractivitywillsave: UserActivity_useractivitywillsave_Event;

			}
			/**
			 * The UserActivity module is used to enable device Handoff and to create User Activities.
			 */
			class UserActivity extends Titanium.Proxy {
				/**
				 * Name of the activity type.
				 */
				activityType: string;

				/**
				 * Set to true if this user activity should be eligible to be handed off to another device
				 */
				eligibleForHandoff: boolean;

				/**
				 * A Boolean value that determines whether Siri can suggest the user activity as a shortcut to the user.
				 */
				eligibleForPrediction: boolean;

				/**
				 * Set to `true` if the user activity can be publicly accessed by all iOS users.
				 */
				eligibleForPublicIndexing: boolean;

				/**
				 * Set to true if the user activity should be added to the on-device index.
				 */
				eligibleForSearch: boolean;

				/**
				 * Absolute date after which the activity is no longer eligible to be indexed or handed off.
				 */
				expirationDate: string;

				/**
				 * An array of string keywords representing words or phrases that might help the user to find the activity in the application history.
				 */
				keywords: string[];

				/**
				 * Set to true everytime you have updated the user activity and need the changes to be saved before handing it off to another device.
				 */
				needsSave: boolean;

				/**
				 * A value used to identify the user activity.
				 */
				persistentIdentifier: string;

				/**
				 * An array of String keys from the userInfo property which represent the minimal information about the user activity that should be stored for later restoration.
				 */
				requiredUserInfoKeys: string[];

				/**
				 * Determines if user activities are supported (`true`) or not (`false`) by the device.
				 * @deprecated Use [Titanium.App.iOS.UserActivity.isSupported](Titanium.App.iOS.UserActivity.isSupported) instead.
				 */
				supported: boolean;

				/**
				 * An optional, user-visible title for this activity such as a document name or web page title.
				 */
				title: string;

				/**
				 * The userInfo dictionary contains application-specific state needed to continue an activity on another device.
				 */
				userInfo: any;

				/**
				 * When no suitable application is installed on a resuming device and the `webpageURL` property is set,
				 * the user activity will instead be continued in a web browser by loading the specified URL.
				 */
				webpageURL: string;

				/**
				 * Adds a Titanium.App.iOS.SearchableItemAttributeSet to the user activity.
				 */
				addContentAttributeSet(contentAttributeSet: Titanium.App.iOS.SearchableItemAttributeSet): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof UserActivityEventMap>(name: K, callback: (this: Titanium.App.iOS.UserActivity, event: UserActivityEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Marks the activity as currently in use by the user.
				 */
				becomeCurrent(): void;

				/**
				 * Deletes all user activities created by your app.
				 */
				deleteAllSavedUserActivities(): void;

				/**
				 * Deletes user activities created by your app that have the specified persistent identifiers.
				 */
				deleteSavedUserActivitiesForPersistentIdentifiers(persistentIdentifiers: ReadonlyArray<string>): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof UserActivityEventMap>(name: K, event?: UserActivityEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Invalidates an activity when it is no longer eligible for continuation.
				 */
				invalidate(): void;

				/**
				 * Determines if user activities are supported (`true`) or not (`false`) by the device.
				 */
				isSupported(): boolean;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof UserActivityEventMap>(name: K, callback: (this: Titanium.App.iOS.UserActivity, event: UserActivityEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Marks the activity as currently **not** in use and ineligible to be continued.
				 */
				resignCurrent(): void;

			}
		}
	}
}
