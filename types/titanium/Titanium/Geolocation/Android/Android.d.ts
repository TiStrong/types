/// <reference path="./LocationProvider.d.ts" />
/// <reference path="./LocationRule.d.ts" />
declare namespace Titanium {
	namespace Geolocation {
		/**
		 * Module for Android-specific geolocation functionality.
		 */
		namespace Android {
			/**
			 * Specifies the GPS location provider.
			 */
			const PROVIDER_GPS: string;

			/**
			 * Specifies the network location provider.
			 */
			const PROVIDER_NETWORK: string;

			/**
			 * Specifies the passive location provider.
			 */
			const PROVIDER_PASSIVE: string;

		}
		/**
		 * Module for Android-specific geolocation functionality.
		 */
		class Android extends Titanium.Module {
			/**
			 * The name of the API that this proxy corresponds to.
			 */
			static readonly apiName: string;

			/**
			 * Indicates if the proxy will bubble an event to its parent.
			 */
			static bubbleParent: boolean;

			/**
			 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
			 */
			static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

			/**
			 * Set to `true` to enable manual configuration of location updates through this module.
			 */
			static manualMode: boolean;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Adds and enables the specified location provider, possibly replacing an existing one.
			 */
			static addLocationProvider(provider: Titanium.Geolocation.Android.LocationProvider): void;

			/**
			 * Adds and enables the specified location rule.
			 */
			static addLocationRule(rule: Titanium.Geolocation.Android.LocationRule): void;

			/**
			 * Applies the properties to the proxy.
			 */
			static applyProperties(props: any): void;

			/**
			 * Creates and returns an instance of <Titanium.Geolocation.Android.LocationProvider>.
			 */
			static createLocationProvider(parameters?: Dictionary<Titanium.Geolocation.Android.LocationProvider>): Titanium.Geolocation.Android.LocationProvider;

			/**
			 * Creates and returns an instance of <Titanium.Geolocation.Android.LocationRule>.
			 */
			static createLocationRule(parameters?: Dictionary<Titanium.Geolocation.Android.LocationRule>): Titanium.Geolocation.Android.LocationRule;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Disables and removes the specified location provider.
			 */
			static removeLocationProvider(provider: Titanium.Geolocation.Android.LocationProvider): void;

			/**
			 * Disables and removes the specified location rule.
			 */
			static removeLocationRule(rule: Titanium.Geolocation.Android.LocationRule): void;

		}
	}
}
