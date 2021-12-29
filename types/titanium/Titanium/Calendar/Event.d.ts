declare namespace Titanium {
	namespace Calendar {
		/**
		 * An object that represents a single event in a calendar.
		 */
		class Event extends Titanium.Proxy {
			/**
			 * Alarms associated with the calendar item, as an array of <Titanium.Calendar.Alert> objects.
			 */
			alerts: Titanium.Calendar.Alert[];

			/**
			 * Indicates whether this event is all day.
			 */
			allDay: boolean;

			/**
			 * The list of event attendees. This list will be empty if the event has no attendees.
			 */
			readonly attendees: Titanium.Calendar.Attendee[];

			/**
			 * Availability of this event.
			 */
			availability: number;

			/**
			 * Start date/time of this event.
			 */
			begin: Date;

			/**
			 * Description of this event.
			 */
			readonly description: string;

			/**
			 * End date/time of this event.
			 */
			end: Date;

			/**
			 * Extended properties of this event.
			 */
			readonly extendedProperties: any;

			/**
			 * Indicates whether an alarm is scheduled for this event.
			 */
			readonly hasAlarm: boolean;

			/**
			 * Identifier of this event.
			 */
			readonly id: string;

			/**
			 * Boolean value that indicates whether an event is a detached instance of a
			 * repeating event.
			 */
			readonly isDetached: boolean;

			/**
			 * Location of this event.
			 */
			location: string;

			/**
			 * Notes for this event.
			 */
			notes: string;

			/**
			 * The recurrence rules for the calendar item.
			 */
			recurrenceRules: Titanium.Calendar.RecurrenceRule[];

			/**
			 * Existing reminders for this event.
			 */
			readonly reminders: Titanium.Calendar.Reminder[];

			/**
			 * Status of this event.
			 */
			readonly status: number;

			/**
			 * Title of this event.
			 */
			title: string;

			/**
			 * Visibility of this event.
			 */
			readonly visibility: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Adds a recurrence rule to the recurrence rule array.
			 */
			addRecurrenceRule(rule: Titanium.Calendar.RecurrenceRule): void;

			/**
			 * Creates an alert for this event.
			 */
			createAlert(data: Dictionary<Titanium.Calendar.Alert>): Titanium.Calendar.Alert;

			/**
			 * Creates an recurrence pattern for a recurring event.
			 * All of the properties for the recurrence rule must be set during creation.
			 * The recurrence rule properties cannot be modified.
			 */
			createRecurrenceRule(data: Dictionary<Titanium.Calendar.RecurrenceRule>): Titanium.Calendar.RecurrenceRule;

			/**
			 * Creates a reminder for this event.
			 */
			createReminder(data: Dictionary<Titanium.Calendar.Reminder>): Titanium.Calendar.Reminder;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Gets the value of the specified extended property.
			 */
			getExtendedProperty(name: string): string;

			/**
			 * Updates the event's data with the current information in the Calendar database.
			 */
			refresh(): boolean;

			/**
			 * Removes an event from the event store.
			 */
			remove(span: number): boolean;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Removes a recurrence rule to the recurrence rule array.
			 */
			removeRecurrenceRule(rule: Titanium.Calendar.RecurrenceRule): void;

			/**
			 * Saves changes to an event permanently.
			 */
			save(span: number): boolean;

			/**
			 * Sets the value of the specified extended property.
			 */
			setExtendedProperty(name: string, value: string): void;

		}
	}
}
