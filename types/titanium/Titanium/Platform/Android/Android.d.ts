declare namespace Titanium {
	namespace Platform {
		/**
		 * The Android-specific Platform module, used to access the device's platform-related functionality.
		 */
		class Android extends Titanium.Module {
			/**
			 * Android API level identifier of the Operating System.
			 */
			static readonly API_LEVEL: number;

			/**
			 * Constant to indicate that the physical size category of the current device/emulator is large
			 */
			static readonly PHYSICAL_SIZE_CATEGORY_LARGE: number;

			/**
			 * Constant to indicate that the physical size category of the current device/emulator is normal
			 */
			static readonly PHYSICAL_SIZE_CATEGORY_NORMAL: number;

			/**
			 * Constant to indicate that the physical size category of the current device/emulator is small
			 */
			static readonly PHYSICAL_SIZE_CATEGORY_SMALL: number;

			/**
			 * Constant to indicate that the physical size category of the current device/emulator is undefined
			 */
			static readonly PHYSICAL_SIZE_CATEGORY_UNDEFINED: number;

			/**
			 * Constant to indicate that the physical size category of the current device/emulator is extra large
			 */
			static readonly PHYSICAL_SIZE_CATEGORY_XLARGE: number;

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
			 * The physical size category of the Android device or emulator.
			 */
			static readonly physicalSizeCategory: number;

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
			static fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
