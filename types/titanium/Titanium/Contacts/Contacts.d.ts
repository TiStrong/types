/// <reference path="./Group.d.ts" />
/// <reference path="./Person.d.ts" />
declare namespace Titanium {
	/**
	 * The top-level Contacts module, used for accessing and modifying the system contacts address book.
	 */
	namespace Contacts {
		/**
		 * A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value
		 * indicating that the application is authorized to use the address book.
		 */
		const AUTHORIZATION_AUTHORIZED: number;

		/**
		 * A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value
		 * indicating that the application is not authorized to use the address book.
		 */
		const AUTHORIZATION_DENIED: number;

		/**
		 * A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value
		 * indicating that the application is not authorized to use the address book *and*
		 * the user cannot change this application's status.
		 * @deprecated iOS 9 and later does not use this constant anymore. Use the other available `AUTHORIZATION_*` constants instead.
		 */
		const AUTHORIZATION_RESTRICTED: never;

		/**
		 * A [contactsAuthorization](Titanium.Contacts.contactsAuthorization) value
		 * indicating that the authorization state is unknown.
		 */
		const AUTHORIZATION_UNKNOWN: number;

		/**
		 * Specifies that a contact is an organization.
		 */
		const CONTACTS_KIND_ORGANIZATION: number;

		/**
		 * Specifies that a contact is a person.
		 */
		const CONTACTS_KIND_PERSON: number;

		/**
		 * Specifies that group members will be sorted by first name.
		 */
		const CONTACTS_SORT_FIRST_NAME: number;

		/**
		 * Specifies that group members will be sorted by last name.
		 */
		const CONTACTS_SORT_LAST_NAME: number;

	}
	/**
	 * Base event for class Titanium.Contacts
	 */
	interface ContactsBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.Contacts;

	}
	/**
	 * Fired when the database backing the contacts module is modified externally.
	 */
	interface Contacts_reload_Event extends ContactsBaseEvent {
	}
	interface ContactsEventMap extends ProxyEventMap {
		reload: Contacts_reload_Event;

	}
	/**
	 * The top-level Contacts module, used for accessing and modifying the system contacts address book.
	 */
	class Contacts extends Titanium.Module {
		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * Returns an authorization constant indicating if the application has access to the address book.
		 */
		static readonly contactsAuthorization: number;

		/**
		 * A boolean value that indicates whether to fetch the notes stored in contacts or not.
		 */
		static includeNote: boolean;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof ContactsEventMap>(name: K, callback: (this: Titanium.Contacts, event: ContactsEventMap[K]) => void): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Creates and returns an instance of <Titanium.Contacts.Group>.
		 */
		static createGroup(parameters?: Dictionary<Titanium.Contacts.Group>): Titanium.Contacts.Group;

		/**
		 * Creates and returns an instance of <Titanium.Contacts.Person>, and commits all pending
		 * changes to the underlying contacts database.
		 */
		static createPerson(parameters?: Dictionary<Titanium.Contacts.Person>): Titanium.Contacts.Person;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent<K extends keyof ContactsEventMap>(name: K, event?: ContactsEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Gets all groups.
		 */
		static getAllGroups(): Titanium.Contacts.Group[];

		/**
		 * Gets all people, unless a limit is specified.
		 */
		static getAllPeople(limit: number): Titanium.Contacts.Person[];

		/**
		 * Gets the group with the specified identifier.
		 * @deprecated Use the [Titanium.Contacts.getGroupByIdentifier](Titanium.Contacts.getGroupByIdentifier) method instead.
		 */
		static getGroupByID: never;

		/**
		 * Gets the group with the specified identifier.
		 */
		static getGroupByIdentifier(id: string): Titanium.Contacts.Group;

		/**
		 * Gets people with a `firstName`, `middleName` or `lastName` field, or a combination
		 * of these fields, that match the specified name.
		 */
		static getPeopleWithName(name: string): Titanium.Contacts.Person[];

		/**
		 * Gets the person with the specified identifier.
		 * @deprecated Use the [Titanium.Contacts.getPersonByIdentifier](Titanium.Contacts.getPersonByIdentifier) method instead.
		 */
		static getPersonByID: never;

		/**
		 * Gets the person with the specified identifier.
		 */
		static getPersonByIdentifier(id: number): Titanium.Contacts.Person;

		/**
		 * Returns `true` if the app has contacts access.
		 */
		static hasContactsPermissions(): boolean;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof ContactsEventMap>(name: K, callback: (this: Titanium.Contacts, event: ContactsEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Removes a group from the address book.
		 */
		static removeGroup(group: Titanium.Contacts.Group): void;

		/**
		 * Removes a contact from the address book.
		 */
		static removePerson(person: Titanium.Contacts.Person): void;

		/**
		 * If authorization is unknown, will bring up a dialog requesting permission.
		 * @deprecated Use the [Titanium.Contacts.requestContactsPermissions](Titanium.Contacts.requestContactsPermissions) method instead.
		 */
		static requestAuthorization: never;

		/**
		 * Requests for contacts access.
		 */
		static requestContactsPermissions(callback?: (param0: ContactsAuthorizationResponse) => void): Promise<ContactsAuthorizationResponse>;

		/**
		 * Reverts all changes made by the previous save to the address book. Deprecated for >= iOS9.
		 */
		static revert(): void;

		/**
		 * Commits all pending changes to the underlying contacts database.
		 */
		static save(contacts: ReadonlyArray<Titanium.Contacts.Person>): void;

		/**
		 * Displays a picker that allows a person to be selected.
		 */
		static showContacts(params: showContactsParams): void;

	}
}
/**
 * Argument passed to the callback when a request finishes successfully or erroneously.
 */
interface ContactsAuthorizationResponse extends ErrorResponse {
}
/**
 * Dictionary of options for the <Titanium.Contacts.showContacts> method.
 */
interface showContactsParams {
	/**
	 * Determines whether to animate the show/hide of the contacts picker (iPhone, iPad only.)
	 */
	animated?: boolean;

	/**
	 * Function to call when selection is canceled.
	 */
	cancel?: (param0: any) => void;

	/**
	 * Field names to show when selecting properties. By default, shows all available.
	 */
	fields?: string[];

	/**
	 * Function to call when a person is selected. Must not be used with `selectedProperty` property.
	 */
	selectedPerson?: (param0: any) => void;

	/**
	 * Function to call when a property is selected. Must not be used with `selectedPerson`
	 * property.
	 * Note: If ringtone or texttone is selected, null values are returned, since these are unsupported
	 * by Apple.
	 * Since iOS 9.0, there is a native apple issue whereby it may return null if the birthday property
	 * is selected on certain device models.
	 * The callback contains the selected property and a 'person' object of type <Titanium.Contacts.Person>.
	 * Since iOS 9.0, apple only returns the person object with partial information. Currently it is known to
	 * at least contain the selected property and fullName.
	 */
	selectedProperty?: (param0: any) => void;

}
