declare namespace Titanium {
	namespace Calendar {
		/**
		 * An object that represents a single alert for an event in an calendar.
		 */
		class Alert extends Titanium.Proxy {
			/**
			 * The absolute date for the alarm.
			 */
			absoluteDate: Date;

			/**
			 * Date/time at which this alert alarm is set to trigger.
			 */
			readonly alarmTime: Date;

			/**
			 * Start date/time for the corresponding event.
			 */
			readonly begin: Date;

			/**
			 * End date/time for the corresponding event.
			 */
			readonly end: Date;

			/**
			 * Identifier of the event for which this alert is set.
			 */
			readonly eventId: number;

			/**
			 * Identifier of this alert.
			 */
			readonly id: string;

			/**
			 * Reminder notice period in minutes, that determines how long prior to the event this alert
			 * should trigger.
			 */
			readonly minutes: number;

			/**
			 * The offset from the start of an event, at which the alarm fires.
			 */
			relativeOffset: number;

			/**
			 * The current state of the alert.
			 */
			readonly state: number;

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
