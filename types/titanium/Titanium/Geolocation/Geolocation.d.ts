/// <reference path="./Android/Android.d.ts" />
declare namespace Titanium {
	/**
	 * The top level Geolocation module. The Geolocation module is used for accessing device location based information.
	 */
	namespace Geolocation {
		/**
		 * The user authorized the app to access location data with full accuracy.
		 */
		const ACCURACY_AUTHORIZATION_FULL: number;

		/**
		 * The user authorized the app to access location data with reduced accuracy.
		 */
		const ACCURACY_AUTHORIZATION_REDUCED: number;

		/**
		 * Use with [accuracy](Titanium.Geolocation.accuracy) to request the best
		 * accuracy available.
		 */
		const ACCURACY_BEST: number;

		/**
		 * Use with [accuracy](Titanium.Geolocation.accuracy) to request highest possible
		 * accuracy and combine it with additional sensor data.
		 */
		const ACCURACY_BEST_FOR_NAVIGATION: number;

		/**
		 * Use with [accuracy](Titanium.Geolocation.accuracy) to request more
		 * accurate location updates with higher battery usage.
		 */
		const ACCURACY_HIGH: number;

		/**
		 * Use with [accuracy](Titanium.Geolocation.accuracy) to request location
		 * updates accurate to the nearest 100 meters.
		 */
		const ACCURACY_HUNDRED_METERS: number;

		/**
		 * Use with [accuracy](Titanium.Geolocation.accuracy) to request location
		 * updates accurate to the nearest kilometer.
		 */
		const ACCURACY_KILOMETER: number;

		/**
		 * Use with [accuracy](Titanium.Geolocation.accuracy) to request less
		 * accurate location updates with lower battery usage.
		 */
		const ACCURACY_LOW: number;

		/**
		 * Use with [accuracy](Titanium.Geolocation.accuracy) to request location
		 * updates accurate to the nearest 10 meters.
		 */
		const ACCURACY_NEAREST_TEN_METERS: number;

		/**
		 * The level of accuracy used when an app isn’t authorized for full accuracy location data.
		 */
		const ACCURACY_REDUCED: number;

		/**
		 * Use with [accuracy](Titanium.Geolocation.accuracy) to request location
		 * updates accurate to the nearest three kilometers.
		 */
		const ACCURACY_THREE_KILOMETERS: number;

		/**
		 * The location data is used for tracking location changes to the automobile specifically during vehicular navigation.
		 */
		const ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION: string;

		/**
		 * The location data is used for tracking any pedestrian-related activity.
		 */
		const ACTIVITYTYPE_FITNESS: string;

		/**
		 * The location data is being used for an unknown activity.
		 */
		const ACTIVITYTYPE_OTHER: string;

		/**
		 * The location data is used for tracking movements of other types of vehicular
		 * navigation that are not automobile related.
		 */
		const ACTIVITYTYPE_OTHER_NAVIGATION: string;

		/**
		 * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value
		 * indicating that the application is authorized to start location services at any time. This authorization
		 * includes the use of all location services, including monitoring regions and significant location changes.
		 */
		const AUTHORIZATION_ALWAYS: number;

		/**
		 * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value
		 * indicating that the application is authorized to use location services.
		 * @deprecated Use [Titanium.Geolocation.AUTHORIZATION_ALWAYS](Titanium.Geolocation.AUTHORIZATION_ALWAYS) as advised by Apple.
		 */
		const AUTHORIZATION_AUTHORIZED: number;

		/**
		 * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value
		 * indicating that the application is not authorized to use location services, *or*
		 * location services are disabled.
		 */
		const AUTHORIZATION_DENIED: number;

		/**
		 * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value
		 * indicating that the application is not authorized to use location servies *and*
		 * the user cannot change this application's status.
		 */
		const AUTHORIZATION_RESTRICTED: number;

		/**
		 * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value
		 * indicating that the authorization state is unknown.
		 */
		const AUTHORIZATION_UNKNOWN: number;

		/**
		 * A [locationServicesAuthorization](Titanium.Geolocation.locationServicesAuthorization) value
		 * indicating that the application is authorized to start most location services only while running in the foreground.
		 */
		const AUTHORIZATION_WHEN_IN_USE: number;

		/**
		 * Error code indicating that the user denied access to the location service.
		 */
		const ERROR_DENIED: number;

		/**
		 * Error code indicating that the heading could not be determined.
		 */
		const ERROR_HEADING_FAILURE: number;

		/**
		 * Error code indicating that the user's location could not be determined.
		 */
		const ERROR_LOCATION_UNKNOWN: number;

		/**
		 * Error code indicating that the network was unavailable.
		 */
		const ERROR_NETWORK: number;

		/**
		 * Error code indicating that region monitoring is delayed.
		 */
		const ERROR_REGION_MONITORING_DELAYED: number;

		/**
		 * Error code indicating that region monitoring is denied.
		 */
		const ERROR_REGION_MONITORING_DENIED: number;

		/**
		 * Error code indicating a region monitoring failure.
		 */
		const ERROR_REGION_MONITORING_FAILURE: number;

	}
	/**
	 * Base event for class Titanium.Geolocation
	 */
	interface GeolocationBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.Geolocation;

	}
	/**
	 * Fired when the device detects interface and requires calibration.
	 */
	interface Geolocation_calibration_Event extends GeolocationBaseEvent {
	}
	/**
	 * Fired when an heading update is received.
	 */
	interface Geolocation_heading_Event extends GeolocationBaseEvent {
		/**
		 * If `success` is `false`, the error code is available.
		 */
		code: number;

		/**
		 * If `success` is false, a string describing the error.
		 */
		error: string;

		/**
		 * Dictionary object containing the heading data.
		 */
		heading: HeadingData;

		/**
		 * Indicate if the heading event was successfully received. Android returns this since SDK 7.5.0.
		 */
		success: boolean;

	}
	/**
	 * Fired when a location update is received.
	 */
	interface Geolocation_location_Event extends GeolocationBaseEvent {
		/**
		 * if `success` is false, the error code if available.
		 */
		code: number;

		/**
		 * If `success` is true, actual location data for this update.
		 */
		coords: LocationCoordinates;

		/**
		 * If `success` is false, a string describing the error.
		 */
		error: string;

		/**
		 * If `success` is true, object describing the location provider generating this update.
		 */
		provider: LocationProviderDict;

		/**
		 * Indicates if location data was successfully retrieved.
		 */
		success: boolean;

	}
	/**
	 * Fired when location updates are paused by the OS.
	 */
	interface Geolocation_locationupdatepaused_Event extends GeolocationBaseEvent {
	}
	/**
	 * Fired when location manager is resumed by the OS.
	 */
	interface Geolocation_locationupdateresumed_Event extends GeolocationBaseEvent {
	}
	/**
	 * Fired when changes are made to the authorization status for location services.
	 */
	interface Geolocation_authorization_Event extends GeolocationBaseEvent {
		/**
		 * New authorization status for the application.
		 */
		authorizationStatus: number;

	}
	interface GeolocationEventMap extends ProxyEventMap {
		authorization: Geolocation_authorization_Event;

		calibration: Geolocation_calibration_Event;

		heading: Geolocation_heading_Event;

		location: Geolocation_location_Event;

		locationupdatepaused: Geolocation_locationupdatepaused_Event;

		locationupdateresumed: Geolocation_locationupdateresumed_Event;

	}
	/**
	 * The top level Geolocation module. The Geolocation module is used for accessing device location based information.
	 */
	class Geolocation extends Titanium.Module {
		/**
		 * Specifies the requested accuracy for location updates.
		 */
		static accuracy: number;

		/**
		 * The type of user activity to be associated with the location updates.
		 */
		static activityType: number;

		/**
		 * Determines if the app can do background location updates.
		 */
		static allowsBackgroundLocationUpdates: boolean;

		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * The minimum change of position (in meters) before a 'location' event is fired.
		 */
		static distanceFilter: number;

		/**
		 * Requested frequency for location updates, in milliseconds.
		 * @deprecated Android legacy mode operation is deprecated. For new development, use
		 * either simple mode or manual mode. See "Configurating Location Updates on Android"
		 * in the main description of this class for more information.
		 *
		 */
		static frequency: never;

		/**
		 * Indicates whether the current device supports a compass.
		 */
		static readonly hasCompass: boolean;

		/**
		 * Minimum heading change (in degrees) before a `heading` event is fired.
		 */
		static headingFilter: number;

		/**
		 * JSON representation of the last geolocation received.
		 */
		static readonly lastGeolocation: string;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * A value that indicates the level of location accuracy the app has permission to use.
		 */
		static readonly locationAccuracyAuthorization: number;

		/**
		 * Returns an authorization constant indicating if the application has access to location services.
		 */
		static readonly locationServicesAuthorization: number;

		/**
		 * Indicates if the user has enabled or disabled location services for the device (not the application).
		 */
		static readonly locationServicesEnabled: boolean;

		/**
		 * Indicates whether the location updates may be paused.
		 */
		static pauseLocationUpdateAutomatically: boolean;

		/**
		 * Determines the preferred location provider.
		 * @deprecated Android legacy mode operation is deprecated. For new development, use
		 * either simple mode or manual mode. See "Configurating Location Updates on Android"
		 * in the main description of this class for more information.
		 *
		 */
		static preferredProvider: never;

		/**
		 * Specifies that an indicator be shown when the app makes use of continuous
		 * background location updates.
		 */
		static showBackgroundLocationIndicator: boolean;

		/**
		 * Determines whether the compass calibration UI is shown if needed.
		 */
		static showCalibration: boolean;

		/**
		 * Indicates if the location changes should be updated only when a significant change
		 * in location occurs.
		 */
		static trackSignificantLocationChange: boolean;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof GeolocationEventMap>(name: K, callback: (this: Titanium.Geolocation, event: GeolocationEventMap[K]) => void): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent<K extends keyof GeolocationEventMap>(name: K, event?: GeolocationEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Resolves an address to a location.
		 */
		static forwardGeocoder(address: string, callback?: (param0: ForwardGeocodeResponse) => void): Promise<ForwardGeocodeResponse>;

		/**
		 * Retrieves the current compass heading.
		 */
		static getCurrentHeading(callback?: (param0: HeadingResponse) => void): Promise<HeadingResponse>;

		/**
		 * Retrieves the last known location from the device.
		 */
		static getCurrentPosition(callback?: (param0: LocationResults) => void): Promise<LocationResults>;

		/**
		 * Returns `true` if the app has location access.
		 */
		static hasLocationPermissions(authorizationType: number): boolean;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof GeolocationEventMap>(name: K, callback: (this: Titanium.Geolocation, event: GeolocationEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Requests for location access.
		 */
		static requestLocationPermissions(authorizationType: number, callback?: (param0: LocationAuthorizationResponse) => void): Promise<LocationAuthorizationResponse>;

		/**
		 * Requests the user's permission to temporarily use location services with full accuracy.
		 */
		static requestTemporaryFullAccuracyAuthorization(purposeKey: string, callback: (param0: LocationAccuracyAuthorizationResponse) => void): void;

		/**
		 * Tries to resolve a location to an address.
		 */
		static reverseGeocoder(latitude: number, longitude: number, callback?: (param0: ReverseGeocodeResponse) => void): Promise<ReverseGeocodeResponse>;

	}
}
/**
 * Simple object returned in the callback from the
 * [forwardGeocoder](Titanium.Geolocation.forwardGeocoder) method.
 * Note that Android includes a number of extra fields.
 */
interface ForwardGeocodeResponse extends ErrorResponse {
	/**
	 * Estimated accuracy of the geocoding, in meters.
	 */
	accuracy?: number;

	/**
	 * Full address.
	 */
	address?: string;

	/**
	 * City name.
	 */
	city?: string;

	/**
	 * Error code. Returns 0 if `success` is `true`.
	 */
	code?: number;

	/**
	 * Country name.
	 */
	country?: string;

	/**
	 * Country code.
	 */
	countryCode?: string;

	/**
	 * Country code. Same as `countryCode`.
	 */
	country_code?: string;

	/**
	 * Display address. Identical to `address`.
	 */
	displayAddress?: string;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Latitude of the geocoded address.
	 */
	latitude?: string;

	/**
	 * Longitude of the geocoded address.
	 */
	longitude?: string;

	/**
	 * Postal code.
	 */
	postalCode?: string;

	/**
	 * First line of region.
	 */
	region1?: string;

	/**
	 * Not used.
	 */
	region2?: string;

	/**
	 * Street name, without street address.
	 */
	street?: string;

	/**
	 * Street name.
	 */
	street1?: string;

	/**
	 * Indicates if the operation succeeded.
	 */
	success?: boolean;

}
/**
 * Simple object representing a place, returned in the callback from the
 * [reverseGeocoder](Titanium.Geolocation.reverseGeocoder) method.
 */
interface GeocodedAddress {
	/**
	 * Full address.
	 */
	address?: string;

	/**
	 * City name.
	 */
	city?: string;

	/**
	 * Country name.
	 */
	country?: string;

	/**
	 * Country code.
	 */
	countryCode?: string;

	/**
	 * Country code. To be replaced by `countryCode`.
	 * @deprecated Use the `countryCode` property for parity.
	 */
	country_code: never;

	/**
	 * Display address. Identical to `address`.
	 * @deprecated Use the `address` property for parity.
	 */
	displayAddress: never;

	/**
	 * Latitude of the geocoded point.
	 */
	latitude?: number;

	/**
	 * Longitude of the geocoded point.
	 */
	longitude?: number;

	/**
	 * Postal code
	 */
	postalCode?: string;

	/**
	 * First line of region.
	 */
	region1?: string;

	/**
	 * Not used.
	 */
	region2?: string;

	/**
	 * State name.
	 */
	state?: string;

	/**
	 * Street name, without street address.
	 */
	street?: string;

	/**
	 * Street name.
	 */
	street1?: string;

	/**
	 * Postal code. To be replaced by `postalCode`
	 * @deprecated Use the `postalCode` property for parity.
	 */
	zipcode: never;

}
/**
 * Simple object holding compass heading data.
 */
interface HeadingData {
	/**
	 * Accuracy of the compass heading, in platform-specific units.
	 */
	accuracy?: number;

	/**
	 * Declination in degrees from magnetic North.
	 */
	magneticHeading?: number;

	/**
	 * Timestamp for the heading data, in milliseconds.
	 */
	timestamp?: number;

	/**
	 * Declination in degrees from true North.
	 */
	trueHeading?: number;

	/**
	 * Raw geomagnetic data for the X axis.
	 */
	x?: number;

	/**
	 * Raw geomagnetic data for the Y axis.
	 */
	y?: number;

	/**
	 * Raw geomagnetic data for the Z axis.
	 */
	z?: number;

}
/**
 * Argument passed to the [getCurrentHeading](Titanium.Geolocation.getCurrentHeading) callback.
 */
interface HeadingResponse extends ErrorResponse {
	/**
	 * Error code.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * If `success` is true, the actual heading data.
	 */
	heading?: HeadingData;

	/**
	 * Indicates a successful operation.
	 */
	success?: boolean;

}
/**
 * Argument passed to the callback when a request finishes successfully or erroneously.
 */
interface LocationAccuracyAuthorizationResponse extends ErrorResponse {
	/**
	 * The level of location accuracy the app has granted.
	 */
	accuracyAuthorization?: number;

}
/**
 * Argument passed to the callback when a request finishes successfully or erroneously.
 */
interface LocationAuthorizationResponse extends ErrorResponse {
}
/**
 * Simple object holding the data for a location update.
 */
interface LocationCoordinates {
	/**
	 * Accuracy of the location update, in meters.
	 */
	accuracy?: number;

	/**
	 * Altitude of the location update, in meters.
	 */
	altitude?: number;

	/**
	 * Vertical accuracy of the location update, in meters.
	 */
	altitudeAccuracy?: number;

	/**
	 * The floor of the building on which the user is located.
	 */
	floor?: LocationCoordinatesFloor;

	/**
	 * Compass heading, in degrees. May be unknown if device is not moving. On
	 * iOS, a negative value indicates that the heading data is not valid.
	 */
	heading?: number;

	/**
	 * Latitude of the location update, in decimal degrees.
	 */
	latitude?: number;

	/**
	 * Longitude of the location update, in decimal degrees.
	 */
	longitude?: number;

	/**
	 * Current speed in meters/second. On iOS, a negative value indicates that the
	 * heading data is not valid or the accuracy is configured incorrectly.
	 * Note: Due to the Apple Geolocation API, set the <Titanium.Geolocation.accuracy>
	 * property to <Titanium.Geolocation.ACCURACY_BEST_FOR_NAVIGATION> in order to properly
	 * measure speed changes and prevent the app from returning negative values.
	 */
	speed?: number;

	/**
	 * Timestamp for this location update, in milliseconds.
	 */
	timestamp?: number;

}
/**
 * Simple object holding floor of the building on which the user is located.
 */
interface LocationCoordinatesFloor {
	/**
	 * The logical floor of the building.
	 */
	level?: number;

}
/**
 * Simple object describing a location provider.
 */
interface LocationProviderDict {
	/**
	 * Accuracy of the location provider, either fine (1) or coarse (2).
	 */
	accuracy?: number;

	/**
	 * Name of the location provider.
	 */
	name?: string;

	/**
	 * Power consumption for this provider, either low (1), medium (2), or high (3).
	 */
	power?: number;

}
/**
 * Argument passed to the [getCurrentPosition](Titanium.Geolocation.getCurrentPosition) callback.
 */
interface LocationResults extends ErrorResponse {
	/**
	 * If `success` is true, actual location data for this update.
	 */
	coords?: LocationCoordinates;

	/**
	 * If `success` is true, object describing the location provider generating this update.
	 */
	provider?: LocationProviderDict;

}
/**
 * Simple object returned in the callback from the
 * [reverseGeocoder](Titanium.Geolocation.reverseGeocoder) method.
 */
interface ReverseGeocodeResponse extends ErrorResponse {
	/**
	 * Error code. Returns 0 if `success` is `true`.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * An array of reverse-geocoded addresses matching the requested location.
	 */
	places?: GeocodedAddress[];

}
