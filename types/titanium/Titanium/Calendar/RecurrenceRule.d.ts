declare namespace Titanium {
	namespace Calendar {
		/**
		 * An object that is used to describe the recurrence pattern for a recurring event.
		 */
		class RecurrenceRule extends Titanium.Proxy {
			/**
			 * Identifier for the recurrence rule's calendar.
			 */
			readonly calendarID: string;

			/**
			 * The days of the month that the event occurs, as an array of number objects.
			 * Values can be from 1 to 31 and from -1 to -31. This parameter is only valid for
			 * recurrence rules of type
			 * [RECURRENCEFREQUENCY_MONTHLY](Titanium.Calendar.RECURRENCEFREQUENCY_MONTHLY).
			 */
			readonly daysOfTheMonth: number[];

			/**
			 * The days of the week that the event occurs, as an array of objects `daysOfWeek` and `Week`.
			 */
			readonly daysOfTheWeek: daysOfTheWeekDictionary[];

			/**
			 * The days of the year that the event occurs, as an array of number objects.
			 * Values can be from 1 to 366 and from -1 to -366. This parameter is only valid for
			 * recurrence rules of type [RECURRENCEFREQUENCY_YEARLY](Titanium.Calendar.RECURRENCEFREQUENCY_YEARLY).
			 */
			readonly daysOfTheYear: number[];

			/**
			 * End of a recurrence rule.
			 */
			readonly end: recurrenceEndDictionary;

			/**
			 * Frequency of the recurrence rule.
			 */
			readonly frequency: number;

			/**
			 * The interval between instances of this recurrence. For example, a weekly
			 * recurrence rule with an interval of 2 occurs every other week. Must be greater than 0.
			 */
			readonly interval: number;

			/**
			 * The months of the year that the event occurs, as an array of Number objects.
			 * Values can be from 1 to 12. This parameter is only valid for recurrence rules of
			 * type [RECURRENCEFREQUENCY_YEARLY](Titanium.Calendar.RECURRENCEFREQUENCY_YEARLY).
			 */
			readonly monthsOfTheYear: number[];

			/**
			 * An array of ordinal numbers that filters which recurrences to include in the
			 * recurrence rule's frequency. For example, a yearly recurrence rule that has a
			 * [daysOfTheWeek](Titanium.Calendar.RecurrenceRule.daysOfTheWeek) value that specifies
			 * Monday through Friday, and a `setPositions` array containing 2 and -1, occurs only
			 * on the second weekday and last weekday of every year.
			 */
			readonly setPositions: number[];

			/**
			 * The weeks of the year that the event occurs, as an array of number objects.
			 * Values can be from 1 to 53 and from -1 to -53. This parameter is only valid for
			 * recurrence rules of type [RECURRENCEFREQUENCY_YEARLY](Titanium.Calendar.RECURRENCEFREQUENCY_YEARLY).
			 */
			readonly weeksOfTheYear: number[];

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
/**
 * Dictionary containing `daysOfWeek` and `week`.
 */
interface daysOfTheWeekDictionary {
	/**
	 * The day of the week. Values are from 1 to 7, with Sunday being 1.
	 */
	daysOfWeek?: number;

	/**
	 * The week number of the day of the week.
	 * Values range from -53 to 53. A negative value indicates a value from the end of
	 * the range. 0 indicates the week number is irrelevant.
	 */
	week?: number;

}
/**
 * Dictionary containing either `endDate` or `occurrenceCount` property.
 */
interface recurrenceEndDictionary {
	/**
	 * End date of the recurrence end, or undefined if the recurrence end is count-based.
	 */
	endDate?: Date;

	/**
	 * Occurrence count of the recurrence end, or 0 if the recurrence end is date-based.
	 */
	occurrenceCount?: number;

}
