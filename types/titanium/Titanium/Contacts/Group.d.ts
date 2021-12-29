declare namespace Titanium {
	namespace Contacts {
		/**
		 * An object which represents a group in the system contacts address book.
		 */
		class Group extends Titanium.Proxy {
			/**
			 * Identifier of the group.
			 */
			readonly identifier: string;

			/**
			 * Name of this group.
			 */
			name: string;

			/**
			 * Record identifier of the group. Single value. Deprecated for iOS 9 and later.
			 */
			recordId: number;

			/**
			 * Adds a person to this group.
			 */
			add(person: Titanium.Contacts.Person): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Gets people that are members of this group.
			 */
			members(): Titanium.Contacts.Person[];

			/**
			 * Removes a person from this group. For >= iOS9, it is not
			 * required to call <Titanium.Contacts.save> after calling this method.
			 */
			remove(person: Titanium.Contacts.Person): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Gets people that are members of this group, sorted in the specified order.
			 */
			sortedMembers(sortBy: number): Titanium.Contacts.Person[];

		}
	}
}
