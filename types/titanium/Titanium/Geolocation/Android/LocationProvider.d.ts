declare namespace Titanium {
	namespace Geolocation {
		namespace Android {
			/**
			 * Represents a source of location information, such as GPS.
			 */
			class LocationProvider extends Titanium.Proxy {
				/**
				 * Don't send a location update unless the location has changed at least `minUpdateDistance`
				 * meters since the previous update.
				 */
				minUpdateDistance: number;

				/**
				 * Limits the frequency of location updates to no more than one per `minUpdateTime` seconds.
				 */
				minUpdateTime: number;

				/**
				 * Type of location provider: [PROVIDER_GPS](Titanium.Geolocation.Android.PROVIDER_GPS),
				 * [PROVIDER_NETWORK](Titanium.Geolocation.Android.PROVIDER_NETWORK), or
				 * [PROVIDER_PASSIVE](Titanium.Geolocation.Android.PROVIDER_PASSIVE).
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
