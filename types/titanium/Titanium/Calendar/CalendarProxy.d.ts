declare namespace Titanium {
	namespace Calendar {
		/**
		 * An object that represents a single calendar.
		 */
		class Calendar extends Titanium.Proxy {
			/**
			 * Indicates whether this calendar can be edited or deleted.
			 */
			readonly hidden: boolean;

			/**
			 * Identifier of this calendar.
			 */
			readonly id: string;

			/**
			 * Display name of this calendar.
			 */
			readonly name: string;

			/**
			 * Indicates whether the calendar is selected.
			 */
			readonly selected: boolean;

			/**
			 * Displays the source identifier.
			 */
			readonly sourceIdentifier: string;

			/**
			 * Displays the source title.
			 */
			readonly sourceTitle: string;

			/**
			 * Displays the source type.
			 */
			readonly sourceType: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Creates an event in this calendar.
			 */
			createEvent(properties: Dictionary<Titanium.Calendar.Event>): Titanium.Calendar.Event;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Gets the event with the specified identifier.
			 */
			getEventById(id: string): Titanium.Calendar.Event;

			/**
			 * Gets events that occur between two dates.
			 */
			getEventsBetweenDates(date1: Date | string, date2: Date | string): Titanium.Calendar.Event[];

			/**
			 * Gets events that occur on a specified date.
			 * @deprecated Use [Titanium.Calendar.Calendar.getEventsBetweenDates](Titanium.Calendar.Calendar.getEventsBetweenDates) instead.
			 */
			getEventsInDate(year: number, month: number, day: number): Titanium.Calendar.Event[];

			/**
			 * Gets events that occur during a specified month.
			 * @deprecated Use [Titanium.Calendar.Calendar.getEventsBetweenDates](Titanium.Calendar.Calendar.getEventsBetweenDates) instead.
			 */
			getEventsInMonth(year: number, month: number): Titanium.Calendar.Event[];

			/**
			 * Gets all events that occur during a specified year.
			 * @deprecated Use [Titanium.Calendar.Calendar.getEventsBetweenDates](Titanium.Calendar.Calendar.getEventsBetweenDates) instead.
			 */
			getEventsInYear(year: number): Titanium.Calendar.Event[];

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
