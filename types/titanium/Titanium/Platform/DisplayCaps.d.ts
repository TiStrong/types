declare namespace Titanium {
	namespace Platform {
		/**
		 * The Display Caps object returned by the <Titanium.Platform.displayCaps> property.
		 */
		class DisplayCaps extends Titanium.Proxy {
			/**
			 * Logical density of the display.
			 */
			readonly density: string;

			/**
			 * Display density expressed as dots-per-inch.
			 */
			readonly dpi: number;

			/**
			 * Logical density of the display, as a scaling factor for the Density Independent Pixel (dip)
			 * unit.
			 */
			readonly logicalDensityFactor: number;

			/**
			 * Absolute height of the display in relation to UI orientation. Measured in platform-specific
			 * units; pixels on Android and density-independent pixels (dip) on iOS.
			 */
			readonly platformHeight: number;

			/**
			 * Absolute width of the display in relation to UI orientation. Measured in platform-specific
			 * units; pixels on Android and density-independent pixels (dip) on iOS.
			 */
			readonly platformWidth: number;

			/**
			 * Physical pixels per inch of the display in the X dimension.
			 */
			readonly xdpi: number;

			/**
			 * Physical pixels per inch of the display in the Y dimension.
			 */
			readonly ydpi: number;

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
