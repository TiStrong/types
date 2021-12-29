declare namespace Titanium {
	namespace Calendar {
		/**
		 * An object that represents a single reminder for an event in a calendar.
		 */
		class Reminder extends Titanium.Proxy {
			/**
			 * Identifier of this reminder.
			 */
			readonly id: string;

			/**
			 * Method by which this reminder will be delivered.
			 */
			readonly method: number;

			/**
			 * Reminder notice period in minutes, that determines how long prior to the event this reminder
			 * should trigger.
			 */
			readonly minutes: number;

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
