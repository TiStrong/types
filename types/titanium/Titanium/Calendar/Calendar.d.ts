/// <reference path="./Alert.d.ts" />
/// <reference path="./Attendee.d.ts" />
/// <reference path="./CalendarProxy.d.ts" />
/// <reference path="./Event.d.ts" />
/// <reference path="./RecurrenceRule.d.ts" />
/// <reference path="./Reminder.d.ts" />
declare namespace Titanium {
	/**
	 * The Calendar module provides an API for accessing the native calendar functionality.
	 */
	namespace Calendar {
		/**
		 * Attendee role is chair.
		 */
		const ATTENDEE_ROLE_CHAIR: number;

		/**
		 * Attendee is not a participant.
		 */
		const ATTENDEE_ROLE_NON_PARTICIPANT: number;

		/**
		 * Attendee role is optional.
		 */
		const ATTENDEE_ROLE_OPTIONAL: number;

		/**
		 * Attendee role is required.
		 */
		const ATTENDEE_ROLE_REQUIRED: number;

		/**
		 * Attendee role is unknown.
		 */
		const ATTENDEE_ROLE_UNKNOWN: number;

		/**
		 * Attendee status is accepted.
		 */
		const ATTENDEE_STATUS_ACCEPTED: number;

		/**
		 * Attendee status is declined.
		 */
		const ATTENDEE_STATUS_DECLINED: number;

		/**
		 * Attendee status is delegated.
		 */
		const ATTENDEE_STATUS_DELEGATED: number;

		/**
		 * Attendee status is invited.
		 */
		const ATTENDEE_STATUS_INVITED: number;

		/**
		 * Attendee status is in process.
		 */
		const ATTENDEE_STATUS_IN_PROCESS: number;

		/**
		 * There is no Attendee status.
		 */
		const ATTENDEE_STATUS_NONE: number;

		/**
		 * Attendee status is pending.
		 */
		const ATTENDEE_STATUS_PENDING: number;

		/**
		 * Attendee status is tentative.
		 */
		const ATTENDEE_STATUS_TENTATIVE: number;

		/**
		 * Attendee status is unknown.
		 */
		const ATTENDEE_STATUS_UNKNOWN: number;

		/**
		 * Attendee type is group.
		 */
		const ATTENDEE_TYPE_GROUP: number;

		/**
		 * There is not attendee type.
		 */
		const ATTENDEE_TYPE_NONE: number;

		/**
		 * Attendee type is person.
		 */
		const ATTENDEE_TYPE_PERSON: number;

		/**
		 * Attendee type is required.
		 */
		const ATTENDEE_TYPE_REQUIRED: number;

		/**
		 * Attendee type is resource.
		 */
		const ATTENDEE_TYPE_RESOURCE: number;

		/**
		 * Attendee type is room.
		 */
		const ATTENDEE_TYPE_ROOM: number;

		/**
		 * Attendee type is unknown.
		 */
		const ATTENDEE_TYPE_UNKNOWN: number;

		/**
		 * An [calendarAuthorization](Titanium.Calendar.calendarAuthorization) value
		 * indicating that the application is authorized to use events in the Calendar.
		 */
		const AUTHORIZATION_AUTHORIZED: number;

		/**
		 * An [calendarAuthorization](Titanium.Calendar.calendarAuthorization) value
		 * indicating that the application is not authorized to use events in the Calendar.
		 */
		const AUTHORIZATION_DENIED: number;

		/**
		 * An [calendarAuthorization](Titanium.Calendar.calendarAuthorization) value
		 * indicating that the application is not authorized to use events in the Calendar.
		 * the user cannot change this application's status.
		 */
		const AUTHORIZATION_RESTRICTED: number;

		/**
		 * An [calendarAuthorization](Titanium.Calendar.calendarAuthorization) value
		 * indicating that the authorization state is unknown.
		 */
		const AUTHORIZATION_UNKNOWN: number;

		/**
		 * Event has a busy availability setting.
		 */
		const AVAILABILITY_BUSY: number;

		/**
		 * Event has a free availability setting.
		 */
		const AVAILABILITY_FREE: number;

		/**
		 * Availability settings are not supported by the event's calendar.
		 */
		const AVAILABILITY_NOTSUPPORTED: number;

		/**
		 * Event has a tentative availability setting.
		 */
		const AVAILABILITY_TENTATIVE: number;

		/**
		 * Event has a tentative availability setting.
		 */
		const AVAILABILITY_UNAVAILABLE: number;

		/**
		 * Reminder alert delivery method.
		 */
		const METHOD_ALERT: number;

		/**
		 * Reminder default delivery method.
		 */
		const METHOD_DEFAULT: number;

		/**
		 * Reminder email delivery method.
		 */
		const METHOD_EMAIL: number;

		/**
		 * Reminder SMS delivery method.
		 */
		const METHOD_SMS: number;

		/**
		 * Indicates a daily recurrence rule for a events reccurance frequency.
		 */
		const RECURRENCEFREQUENCY_DAILY: number;

		/**
		 * Indicates a monthly recurrence rule for a events reccurance frequency.
		 */
		const RECURRENCEFREQUENCY_MONTHLY: number;

		/**
		 * Indicates a weekly recurrence rule for a events reccurance frequency.
		 */
		const RECURRENCEFREQUENCY_WEEKLY: number;

		/**
		 * Indicates a yearly recurrence rule for a events reccurance frequency.
		 */
		const RECURRENCEFREQUENCY_YEARLY: number;

		/**
		 * Relationship is attendee.
		 */
		const RELATIONSHIP_ATTENDEE: number;

		/**
		 * There is no relationship.
		 */
		const RELATIONSHIP_NONE: number;

		/**
		 * Attendee is organizer.
		 */
		const RELATIONSHIP_ORGANIZER: number;

		/**
		 * Attendee is performer.
		 */
		const RELATIONSHIP_PERFORMER: number;

		/**
		 * Attendee is speaker.
		 */
		const RELATIONSHIP_SPEAKER: number;

		/**
		 * Relationship is unknown.
		 */
		const RELATIONSHIP_UNKNOWN: number;

		/**
		 * A birthday calendar source.
		 */
		const SOURCE_TYPE_BIRTHDAYS: number;

		/**
		 * A calDev calendar source.
		 */
		const SOURCE_TYPE_CALDAV: number;

		/**
		 * A microsoft exchange calendar source.
		 */
		const SOURCE_TYPE_EXCHANGE: number;

		/**
		 * A local calendar source.
		 */
		const SOURCE_TYPE_LOCAL: number;

		/**
		 * A mobileMe calendar source.
		 */
		const SOURCE_TYPE_MOBILEME: number;

		/**
		 * A subscribed calendar source.
		 */
		const SOURCE_TYPE_SUBSCRIBED: number;

		/**
		 * A [save](Titanium.Calendar.Event.save)/[remove](Titanium.Calendar.Event.remove) event value,
		 * indicating modifications to this event instance should also affect future instances of this event.
		 */
		const SPAN_FUTUREEVENTS: number;

		/**
		 * A [save](Titanium.Calendar.Event.save)/[remove](Titanium.Calendar.Event.remove) event value,
		 * indicating modifications to this event instance should affect only this instance.
		 */
		const SPAN_THISEVENT: number;

		/**
		 * Alert dismissed state.
		 */
		const STATE_DISMISSED: number;

		/**
		 * Alert fired state.
		 */
		const STATE_FIRED: number;

		/**
		 * Alert scheduled status.
		 */
		const STATE_SCHEDULED: number;

		/**
		 * Event canceled status.
		 */
		const STATUS_CANCELED: number;

		/**
		 * Event confirmed status.
		 */
		const STATUS_CONFIRMED: number;

		/**
		 * Event has no status.
		 */
		const STATUS_NONE: number;

		/**
		 * Event tentative status.
		 */
		const STATUS_TENTATIVE: number;

		/**
		 * Event confidential visibility.
		 */
		const VISIBILITY_CONFIDENTIAL: number;

		/**
		 * Event default visibility.
		 */
		const VISIBILITY_DEFAULT: number;

		/**
		 * Event private visibility.
		 */
		const VISIBILITY_PRIVATE: number;

		/**
		 * Event public visibility.
		 */
		const VISIBILITY_PUBLIC: number;

	}
	/**
	 * Base event for class Titanium.Calendar
	 */
	interface CalendarBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.Calendar;

	}
	/**
	 * Fired when the database backing the EventKit module is modified.
	 */
	interface Calendar_change_Event extends CalendarBaseEvent {
	}
	interface CalendarEventMap extends ProxyEventMap {
		change: Calendar_change_Event;

	}
	/**
	 * The Calendar module provides an API for accessing the native calendar functionality.
	 */
	class Calendar extends Titanium.Module {
		/**
		 * All alerts in selected calendars.
		 */
		static readonly allAlerts: Titanium.Calendar.Alert[];

		/**
		 * All calendars known to the native calendar app.
		 */
		static readonly allCalendars: Titanium.Calendar.Calendar[];

		/**
		 * All calendars known to the native calendar app that can add, edit, and
		 * delete items in the calendar.
		 */
		static readonly allEditableCalendars: Titanium.Calendar.Calendar[];

		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * Returns an authorization constant indicating if the application has access to the events in the EventKit.
		 */
		static readonly calendarAuthorization: number;

		/**
		 * Calendar that events are added to by default, as specified by user settings.
		 */
		static readonly defaultCalendar: Titanium.Calendar.Calendar;

		/**
		 * Returns an authorization constant indicating if the application has access to the events in the EventKit.
		 * @deprecated Use the [Titanium.Calendar.calendarAuthorization](Titanium.Calendar.calendarAuthorization) property instead.
		 */
		static readonly eventsAuthorization: never;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * All calendars selected within the native calendar app, which may be a subset of `allCalendars`.
		 */
		static readonly selectableCalendars: Titanium.Calendar.Calendar[];

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof CalendarEventMap>(name: K, callback: (this: Titanium.Calendar, event: CalendarEventMap[K]) => void): void;

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
		static fireEvent<K extends keyof CalendarEventMap>(name: K, event?: CalendarEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Gets the calendar with the specified identifier.
		 */
		static getCalendarById(id: string): Titanium.Calendar.Calendar;

		/**
		 * Returns `true` if the app has calendar access.
		 */
		static hasCalendarPermissions(): boolean;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof CalendarEventMap>(name: K, callback: (this: Titanium.Calendar, event: CalendarEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Requests for calendar access.
		 */
		static requestCalendarPermissions(callback?: (param0: EventsAuthorizationResponse) => void): Promise<EventsAuthorizationResponse>;

		/**
		 * If authorization is unknown, the system will bring up a dialog requesting permission.
		 * @deprecated Use [Titanium.Calendar.requestCalendarPermissions](Titanium.Calendar.requestCalendarPermissions) instead.
		 */
		static requestEventsAuthorization: never;

	}
}
/**
 * Argument passed to the callback when a request finishes successfully or erroneously.
 */
interface EventsAuthorizationResponse {
	/**
	 * Error code, if any returned.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Indicates whether the request succeeded.
	 */
	success?: boolean;

}
