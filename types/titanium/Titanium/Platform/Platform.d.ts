/// <reference path="./Android/Android.d.ts" />
/// <reference path="./DisplayCaps.d.ts" />
declare namespace Titanium {
	/**
	 * The top-level Platform module.  The Platform module is used to access the device's platform-related
	 * functionality.
	 */
	namespace Platform {
		/**
		 * Constant to indicate that the system is plugged in and currently being charged.
		 */
		const BATTERY_STATE_CHARGING: number;

		/**
		 * Constant to indicate that the battery is fully charged.
		 */
		const BATTERY_STATE_FULL: number;

		/**
		 * Constant to indicate that the battery state is not known or monitoring is disabled.
		 */
		const BATTERY_STATE_UNKNOWN: number;

		/**
		 * Constant to indicate that the system is unplugged.
		 */
		const BATTERY_STATE_UNPLUGGED: number;

	}
	/**
	 * Base event for class Titanium.Platform
	 */
	interface PlatformBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.Platform;

	}
	/**
	 * Fired when the battery state changes. This is measured in 5% increments on iPhone/iPad.
	 */
	interface Platform_battery_Event extends PlatformBaseEvent {
		/**
		 * Percentage battery power level.
		 */
		level: number;

		/**
		 * The battery state.
		 */
		state: number;

	}
	interface PlatformEventMap extends ProxyEventMap {
		battery: Platform_battery_Event;

	}
	/**
	 * The top-level Platform module.  The Platform module is used to access the device's platform-related
	 * functionality.
	 */
	class Platform extends Titanium.Module {
		/**
		 * System's WIFI IP address. No other network types are supported.
		 */
		static readonly address: string;

		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * System's processor architecture.
		 */
		static readonly architecture: string;

		/**
		 * System's unused memory, measured in bytes.
		 */
		static readonly availableMemory: number;

		/**
		 * Battery level in percent, accessible only when `batteryMonitoring` is enabled. Measured
		 * in 5% increments on iPhone/iPad.
		 */
		static readonly batteryLevel: number;

		/**
		 * Determines whether battery monitoring is enabled.
		 */
		static batteryMonitoring: boolean;

		/**
		 * Indicates the state of the battery. Accessible only when `batteryMonitoring` is enabled.
		 */
		static readonly batteryState: number;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * Returns the DisplayCaps object.
		 */
		static readonly displayCaps: Titanium.Platform.DisplayCaps;

		/**
		 * Applications's globally-unique ID (UUID).
		 */
		static readonly id: string;

		/**
		 * An alphanumeric string unique to each device, used only for serving advertisements.
		 */
		static identifierForAdvertising: string;

		/**
		 * An alphanumeric string that uniquely identifies a device to the app's vendor.
		 */
		static readonly identifierForVendor: string;

		/**
		 * A Boolean value that indicates whether the user has limited ad tracking.
		 */
		static readonly isAdvertisingTrackingEnabled: boolean;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * System's default language.
		 */
		static readonly locale: string;

		/**
		 * System's network interface mac address, or app UUID.
		 */
		static readonly macaddress: string;

		/**
		 * Manufacturer of the device.
		 */
		static readonly manufacturer: string;

		/**
		 * Model of the device.
		 */
		static readonly model: string;

		/**
		 * Name of the platform. Returns `android` for the Android platform, `iPhone OS` for the iOS
		 * platform (iPhone, iPad, or iPod Touch), and `windows` for the Windows platform.
		 * Since iOS 10 this property returns `iOS` for for the iOS platform (iPhone, iPad, or iPod Touch).
		 */
		static readonly name: string;

		/**
		 * System's WIFI network mask. No other network types are supported.
		 */
		static readonly netmask: string;

		/**
		 * Short name of the system's Operating System. Returns `android` for the Android platfrom,
		 * `iphone` for the iPhone or iPod Touch, `ipad` for the iPad, `windowsphone` for Windows Phone, and `windowsstore` for Windows Store
		 * platform.
		 */
		static readonly osname: string;

		/**
		 * Operating System architecture. On Android, this is `32bit`.
		 */
		static readonly ostype: string;

		/**
		 * Number of logical processing cores.
		 */
		static readonly processorCount: number;

		/**
		 * Short name of the JavaScript runtime in use.
		 */
		static readonly runtime: string;

		/**
		 * System's total memory, measured in bytes.
		 */
		static readonly totalMemory: number;

		/**
		 * System uptime since last boot in seconds.
		 */
		static readonly uptime: number;

		/**
		 * System name, if set. On iOS, this can be found in Settings > General > About > Name.
		 */
		static readonly username: string;

		/**
		 * The operating system's version string.
		 */
		static readonly version: string;

		/**
		 * The operating system's major version number.
		 */
		static readonly versionMajor: number;

		/**
		 * The operating system's minor version number.
		 */
		static readonly versionMinor: number;

		/**
		 * The operating system's patch version number.
		 */
		static readonly versionPatch: number;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof PlatformEventMap>(name: K, callback: (this: Titanium.Platform, event: PlatformEventMap[K]) => void): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Returns whether the system is configured with a default application to handle the URL's protocol/scheme.
		 */
		static canOpenURL(url: string): boolean;

		/**
		 * Returns an array of basic cpu information for all logical processors
		 */
		static cpus(): CPU[];

		/**
		 * Creates a globally-unique identifier.
		 */
		static createUUID(): string;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent<K extends keyof PlatformEventMap>(name: K, event?: PlatformEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Returns whether the system settings are configured to show times in 24-hour format.
		 */
		static is24HourTimeFormat(): boolean;

		/**
		 * Opens this URL using the system's default application for its protocol/scheme.
		 */
		static openURL(url: string, options?: OpenURLOptions, callback?: (...args: any[]) => void): boolean;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof PlatformEventMap>(name: K, callback: (this: Titanium.Platform, event: PlatformEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

	}
}
/**
 * Simple object holding the data for a logical cpu.
 */
interface CPU {
	/**
	 * General description of the CPU
	 */
	model?: string;

	/**
	 * Speed of the CPU in MHz
	 */
	speed?: number;

	/**
	 * A collection of timings for this logical CPU.
	 */
	times?: CPUTimes;

}
/**
 * Simple object holding the data for a logical cpu execution times.
 */
interface CPUTimes {
	/**
	 * The number of milliseconds the CPU has spent in idle mode.
	 */
	idle?: number;

	/**
	 * The number of milliseconds the CPU has spent in irq mode.
	 */
	irq?: number;

	/**
	 * The number of milliseconds the CPU has spent in nice mode.
	 */
	nice?: number;

	/**
	 * The number of milliseconds the CPU has spent in sys mode.
	 */
	sys?: number;

	/**
	 * The number of milliseconds the CPU has spent in user mode.
	 */
	user?: number;

}
/**
 * The optional options to pass to the URL handling (iOS 10+). Pass a
 * dictionary with one or more of the following string-keys:
 *     * `UIApplicationOpenURLOptionsSourceApplicationKey` (String value)
 *     * `UIApplicationOpenURLOptionsAnnotationKey` (Array value)
 *     * `UIApplicationOpenURLOptionsOpenInPlaceKey` (Boolean value)
 *     * `UIApplicationOpenURLOptionUniversalLinksOnly` (Boolean value)
 * Read more about the available keys in the [Apple documentation](https://developer.apple.com/documentation/uikit/uiapplicationopenurloptionskey?language=objc).
 */
interface OpenURLOptions {
	/**
	 * When you include this key in the options dictionary, the method opens the URL only if the URL is a valid universal link and there is an installed app capable of opening that URL.
	 */
	UIApplicationOpenURLOptionUniversalLinksOnly?: boolean;

	/**
	 * contains the information passed to a document interaction controller object's annotation property.
	 */
	UIApplicationOpenURLOptionsAnnotationKey?: any[];

	/**
	 * When the value of this property is `false`, you must copy the document to maintain access to it. If the flag is not set, you also must copy the document before you can use it.
	 */
	UIApplicationOpenURLOptionsOpenInPlaceKey?: boolean;

	/**
	 * The value of this key is an String containing the bundle ID of the app that made the request. If the request originated from another app belonging to your team, UIKit sets the value of this key to the ID of that app. If the team identifier of the originating app is different than the team identifier of the current app, the value of the key is nil.
	 */
	UIApplicationOpenURLOptionsSourceApplicationKey?: string;

}
