declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * Base event for class Titanium.App.iOS.UserDefaults
			 */
			interface UserDefaultsBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.App.iOS.UserDefaults;

			}
			/**
			 * Fired when a property is changed.
			 */
			interface UserDefaults_change_Event extends UserDefaultsBaseEvent {
			}
			interface UserDefaultsEventMap extends ProxyEventMap {
				change: UserDefaults_change_Event;

			}
			/**
			 * The UserDefaults module is used for storing application-related data in property/value pairs
			 * that persist beyond application sessions and device power cycles. UserDefaults allows the suiteName
			 * of the UserDefaults to be specified at creation time.
			 */
			interface UserDefaults extends Titanium.App.Properties {
				/**
				 * Sets the name of the suite to be used to access UserDefaults.
				 */
				suiteName: string;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof UserDefaultsEventMap>(name: K, callback: (this: Titanium.App.iOS.UserDefaults, event: UserDefaultsEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof UserDefaultsEventMap>(name: K, event?: UserDefaultsEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof UserDefaultsEventMap>(name: K, callback: (this: Titanium.App.iOS.UserDefaults, event: UserDefaultsEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
