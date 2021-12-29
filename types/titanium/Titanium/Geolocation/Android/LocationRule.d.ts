declare namespace Titanium {
	namespace Geolocation {
		namespace Android {
			/**
			 * A location rule to filter the results returned by location providers.
			 */
			class LocationRule extends Titanium.Proxy {
				/**
				 * Minimum accuracy required for a location update.
				 */
				accuracy: number;

				/**
				 * Controls the freshness of location updates. Do not forward an update
				 * unless it is newer than `maxAge` milliseconds.
				 */
				maxAge: number;

				/**
				 * Controls the frequency of location updates.
				 */
				minAge: number;

				/**
				 * If specified, this rule only applies to updates generated
				 * by the specified provider. If `null`, this rule applies to all updates.
				 */
				name: string;

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
}
