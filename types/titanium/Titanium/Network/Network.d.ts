/// <reference path="./BonjourBrowser.d.ts" />
/// <reference path="./BonjourService.d.ts" />
/// <reference path="./Cookie.d.ts" />
/// <reference path="./HTTPClient.d.ts" />
/// <reference path="./Socket/Socket.d.ts" />
/// <reference path="./TCPSocket.d.ts" />
declare namespace Titanium {
	/**
	 * The top level network module.
	 */
	namespace Network {
		/**
		 * Special hostname value for listening sockets, representing all
		 * locally available network interfaces.
		 * @deprecated
		 */
		const INADDR_ANY: never;

		/**
		 * A [networkType](Titanium.Network.networkType) value indicating that the device is
		 * communicating over a local-area network.
		 */
		const NETWORK_LAN: number;

		/**
		 * A [networkType](Titanium.Network.networkType) value indicating that the device is
		 * communicating over a mobile network.
		 */
		const NETWORK_MOBILE: number;

		/**
		 * A [networkType](Titanium.Network.networkType) value indicating that no
		 * network is available.
		 */
		const NETWORK_NONE: number;

		/**
		 * A [networkType](Titanium.Network.networkType) value indicating that the
		 * current network type is unknown.
		 */
		const NETWORK_UNKNOWN: number;

		/**
		 * A [networkType](Titanium.Network.networkType) value indicating that the
		 * device is communicating over a WiFi network.
		 */
		const NETWORK_WIFI: number;

		/**
		 * Constant value for an Alert style push notification.
		 */
		const NOTIFICATION_TYPE_ALERT: number;

		/**
		 * Constant value for a Badge style push notification.
		 */
		const NOTIFICATION_TYPE_BADGE: number;

		/**
		 * Constant value for a Newsstand style push notification. Only available on iOS5 and later
		 */
		const NOTIFICATION_TYPE_NEWSSTAND: number;

		/**
		 * Constant value for a Sound style push notification.
		 */
		const NOTIFICATION_TYPE_SOUND: number;

		/**
		 * Constant value specifying that the progress of a download can not be calculated.
		 */
		const PROGRESS_UNKNOWN: number;

		/**
		 * Constant value specifying read-only mode for sockets.
		 * @deprecated Used with the deprecated [Titanium.Network.TCPSocket](Titanium.Network.TCPSocket) only.
		 * See [Socket](Titanium.Network.Socket) for constants used with
		 * [TCP](Titanium.Network.Socket.TCP) sockets.
		 *
		 */
		const READ_MODE: never;

		/**
		 * Constant value specifying read-write mode for sockets.
		 * @deprecated Used with the deprecated [Titanium.Network.TCPSocket](Titanium.Network.TCPSocket) only.
		 * See [Socket](Titanium.Network.Socket) for constants used with
		 * [TCP](Titanium.Network.Socket.TCP) sockets.
		 *
		 */
		const READ_WRITE_MODE: never;

		/**
		 * Constant value representing a socket in the LISTENING state.
		 * @deprecated Used with the deprecated [Titanium.Network.TCPSocket](Titanium.Network.TCPSocket) only.
		 * See [Socket](Titanium.Network.Socket) for constants used with
		 * [TCP](Titanium.Network.Socket.TCP) sockets.
		 *
		 */
		const SOCKET_LISTENING: never;

		/**
		 * Constant value specifying TLS version 1.0 for SSL.
		 */
		const TLS_VERSION_1_0: number;

		/**
		 * Constant value specifying TLS version 1.1 for SSL.
		 */
		const TLS_VERSION_1_1: number;

		/**
		 * Constant value specifying TLS version 1.2 for SSL.
		 */
		const TLS_VERSION_1_2: number;

		/**
		 * Constant value specifying TLS version 1.3 for SSL.
		 */
		const TLS_VERSION_1_3: number;

		/**
		 * Constant value specifying write-only mode for sockets.
		 * @deprecated Used with the deprecated [Titanium.Network.TCPSocket](Titanium.Network.TCPSocket) only.
		 * See [Socket](Titanium.Network.Socket) for constants used with
		 * [TCP](Titanium.Network.Socket.TCP) sockets.
		 *
		 */
		const WRITE_MODE: never;

	}
	/**
	 * Base event for class Titanium.Network
	 */
	interface NetworkBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.Network;

	}
	/**
	 * Fired when network connectivity changes.
	 */
	interface Network_change_Event extends NetworkBaseEvent {
		/**
		 * New network type
		 */
		networkType: number;

		/**
		 * New network type as a string.
		 */
		networkTypeName: string;

		/**
		 * Boolean indicating if the device is connected to the network.
		 */
		online: boolean;

		/**
		 * Human-readable text describing the reason for the change.
		 */
		reason: string;

	}
	interface NetworkEventMap extends ProxyEventMap {
		change: Network_change_Event;

	}
	/**
	 * The top level network module.
	 */
	class Network extends Titanium.Module {
		/**
		 * A list of all cookies in the cookie storage.
		 */
		static readonly allHTTPCookies: Titanium.Network.Cookie[];

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
		 * Network type value as a constant.
		 */
		static readonly networkType: number;

		/**
		 * Network type as a String. Returns one of `NONE`, `WIFI`, `LAN`, `MOBILE`, or `UNKNOWN`.
		 */
		static readonly networkTypeName: string;

		/**
		 * Boolean value indicating if the device is connected to the network.
		 */
		static readonly online: boolean;

		/**
		 * Remote device UUID if the device is registered with the Apple Push Notification
		 * Service, or null if it is not registered.
		 */
		static readonly remoteDeviceUUID: string;

		/**
		 * Array of push notification type constants enabled for the application.
		 */
		static readonly remoteNotificationTypes: number[];

		/**
		 * Indicates whether push  notifications have been enabled using
		 * [registerForPushNotifications](Titanium.Network.registerForPushNotifications).
		 */
		static readonly remoteNotificationsEnabled: boolean;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof NetworkEventMap>(name: K, callback: (this: Titanium.Network, event: NetworkEventMap[K]) => void): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Adds a cookie to the HTTP client cookie store.
		 */
		static addHTTPCookie(cookie: Titanium.Network.Cookie): void;

		/**
		 * Adds a cookie to the system cookie store.
		 */
		static addSystemCookie(cookie: Titanium.Network.Cookie): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Creates and returns a `BonjourBrowser` object.
		 */
		static createBonjourBrowser(serviceType: string, domain: string, parameters?: Dictionary<Titanium.Network.BonjourBrowser>): Titanium.Network.BonjourBrowser;

		/**
		 * Creates and returns a `BonjourService` object.
		 */
		static createBonjourService(name: string, type: string, domain: string, parameters?: Dictionary<Titanium.Network.BonjourService>): Titanium.Network.BonjourService;

		/**
		 * Creates and returns an instance of <Titanium.Network.Cookie>.
		 */
		static createCookie(parameters?: Dictionary<Titanium.Network.Cookie>): Titanium.Network.Cookie;

		/**
		 * Creates and returns an instance of <Titanium.Network.HTTPClient>.
		 */
		static createHTTPClient(parameters?: Dictionary<Titanium.Network.HTTPClient>): Titanium.Network.HTTPClient;

		/**
		 * Legacy method to create and return an instance of <Titanium.Network.TCPSocket>.
		 * @deprecated Use [Titanium.Network.Socket.createTCP](Titanium.Network.Socket.createTCP) instead.
		 */
		static createTCPSocket: never;

		/**
		 * Returns a decoded version of a URI encoded value.
		 */
		static decodeURIComponent(value: string): string;

		/**
		 * Returns a URI encoded version of the specified URI component.
		 */
		static encodeURIComponent(value: string): string;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent<K extends keyof NetworkEventMap>(name: K, event?: NetworkEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Gets all the cookies with the domain, path and name matched with the given values from the HTTP client cookie store.
		 */
		static getHTTPCookies(domain: string, path: string, name: string): Titanium.Network.Cookie[];

		/**
		 * Gets all the cookies with the domain matched with the given values from the HTTP client cookie store.
		 */
		static getHTTPCookiesForDomain(domain: string): Titanium.Network.Cookie[];

		/**
		 * Gets all the cookies with the domain, path and name matched with the given values from the system cookie store.
		 */
		static getSystemCookies(domain: string, path: string, name: string): Titanium.Network.Cookie[];

		/**
		 * Registers for push notifications with the Apple Push Notification Service.
		 */
		static registerForPushNotifications(config: PushNotificationConfig): void;

		/**
		 * Removes all the cookies from the HTTP client cookie store.
		 */
		static removeAllHTTPCookies(): void;

		/**
		 * Removes all the cookie from the system client cookie store.
		 */
		static removeAllSystemCookies(): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof NetworkEventMap>(name: K, callback: (this: Titanium.Network, event: NetworkEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Removes the cookie with the domain, path and name exactly the same as the given values from the HTTP client cookie store.
		 */
		static removeHTTPCookie(domain: string, path: string, name: string): void;

		/**
		 * Removes the cookies with the domain matched with the given values from the HTTP client cookie store.
		 */
		static removeHTTPCookiesForDomain(domain: string): void;

		/**
		 * Removes the cookie with the domain, path and name exactly the same as the given values from the system cookie store.
		 */
		static removeSystemCookie(domain: string, path: string, name: string): void;

		/**
		 * Unregisters the application for push notifications.
		 */
		static unregisterForPushNotifications(): void;

	}
}
/**
 * Simple object for specifying push notification options to
 * [registerForPushNotifications](Titanium.Network.registerForPushNotifications).
 */
interface PushNotificationConfig {
	/**
	 * Callback function invoked upon receiving a new push notification.
	 */
	callback?: (param0: PushNotificationData) => void;

	/**
	 * Callback function called when an error occurs during registration.
	 */
	error?: (param0: PushNotificationErrorArg) => void;

	/**
	 * Callback function called when the push registration is successfully completed.
	 */
	success?: (param0: PushNotificationSuccessArg) => void;

	/**
	 * Array of `NOTIFICATION_TYPE` constants that the application would like to receive.
	 */
	types?: number[];

}
/**
 * A simple object representing a push notification.
 */
interface PushNotificationData {
	/**
	 * The `userinfo` dictionary passed to the Apple Push Notification Service.
	 */
	data?: any;

	/**
	 * Boolean indicating if notification was received while app was in background.
	 */
	inBackground?: boolean;

}
/**
 * A simple object passed to the
 * [registerForPushNotifications](Titanium.Network.registerForPushNotifications) error callback.
 */
interface PushNotificationErrorArg extends FailureResponse {
	/**
	 * Error code. Returns a non-zero value.
	 */
	code?: number;

	/**
	 * Indicates if the operation succeeded. Returns `false`.
	 */
	success?: boolean;

	/**
	 * The value of this string is always "remote".
	 */
	type?: string;

}
/**
 * A simple object passed to the
 * [registerForPushNotifications](Titanium.Network.registerForPushNotifications) success callback.
 */
interface PushNotificationSuccessArg extends SuccessResponse {
	/**
	 * Error code. Returns 0.
	 */
	code?: number;

	/**
	 * The device token which this device was registered for.
	 */
	deviceToken?: string;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Indicates if the operation succeeded. Returns `true`.
	 */
	success?: boolean;

	/**
	 * The value of this string is always "remote".
	 */
	type?: string;

}
