declare namespace Titanium {
	namespace Contacts {
		/**
		 * An object that represents a contact record for a person or organization in the system contacts
		 * address book.
		 */
		class Person extends Titanium.Proxy {
			/**
			 * Addresses for the person. Multi-value. Read-only on Android.
			 */
			address: any;

			/**
			 * Alternate birthday of the person. Single Dictionary.
			 */
			alternateBirthday: any;

			/**
			 * Date of birth of the person. Single value.
			 */
			birthday: string;

			/**
			 * Date and time that the person record was created. Single value. Deprecated since iOS 9.
			 */
			readonly created: string;

			/**
			 * Dates associated with the person. Multi-value.
			 */
			date: any;

			/**
			 * Department of the person. Single value.
			 */
			department: string;

			/**
			 * Email addresses for the person. Multi-value. Read-only on Android.
			 */
			email: any;

			/**
			 * First name of the person. Single value.
			 */
			firstName: string;

			/**
			 * Phonetic first name of the person.  Single value.
			 */
			firstPhonetic: string;

			/**
			 * Localized full name of the person. Single value. Read-only on Android.
			 */
			readonly fullName: string;

			/**
			 * Record identifier of the person. Single value.
			 */
			readonly id: number;

			/**
			 * Identifier of the person.
			 */
			readonly identifier: string;

			/**
			 * Image for the person. Single value. Read-only for >= iOS9
			 */
			image: Titanium.Blob;

			/**
			 * Instant messenger information of the person. Multi-value.
			 */
			instantMessage: any;

			/**
			 * Job title of the person. Single value.
			 */
			jobTitle: string;

			/**
			 * Determines the type of information the person record contains; either person or organization.
			 * Read-only on Android.
			 */
			kind: number;

			/**
			 * Last name of the person. Single value.
			 */
			lastName: string;

			/**
			 * Phonetic last name of the person. Single value.
			 */
			lastPhonetic: string;

			/**
			 * Middle name of the person. Single value.
			 */
			middleName: string;

			/**
			 * Phonetic middle name of the person. Single value.
			 */
			middlePhonetic: string;

			/**
			 * Date and time that the person record was last modified. Single value. Deprecated since iOS 9.
			 */
			readonly modified: string;

			/**
			 * Nickname of the person. Single value.
			 */
			nickname: string;

			/**
			 * Notes for the person. Single value.
			 */
			note: string;

			/**
			 * Organization to which the person belongs. Single value.
			 */
			organization: string;

			/**
			 * Phone numbers for the person. Multi-value. Read-only on Android.
			 */
			phone: any;

			/**
			 * Prefix for the person. Single value.
			 */
			readonly prefix: string;

			/**
			 * Record identifier of the person. Single value. Deprecated since iOS 9.
			 */
			recordId: number;

			/**
			 * Names of people to which the person is related. Multi-value.
			 */
			relatedNames: any;

			/**
			 * Social profile information of the person. Multi-value.
			 */
			socialProfile: any;

			/**
			 * Suffix for the person. Single value.
			 */
			readonly suffix: string;

			/**
			 * URLs of webpages associated with the person. Multi-value.
			 */
			url: any;

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
