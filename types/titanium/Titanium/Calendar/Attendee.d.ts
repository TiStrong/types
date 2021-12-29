declare namespace Titanium {
	namespace Calendar {
		/**
		 * An object that represents a single attendee of an event.
		 */
		class Attendee extends Titanium.Proxy {
			/**
			 * The attendee email.
			 */
			readonly email: string;

			/**
			 * Indicates whether this attendee is the event organizer.
			 */
			readonly isOrganizer: boolean;

			/**
			 * The attendee name.
			 */
			readonly name: string;

			/**
			 * The role of the attendee.
			 */
			readonly role: number;

			/**
			 * The status of the attendee.
			 */
			readonly status: number;

			/**
			 * The type of the attendee.
			 */
			readonly type: number;

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
