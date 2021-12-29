declare namespace Titanium {
	namespace Android {
		/**
		 * Message objects passed between Android application components.
		 */
		class Intent extends Titanium.Proxy {
			/**
			 * The action associated with this intent.
			 */
			action: string;

			/**
			 * The Java class name of the activity associated with this intent
			 * ([packageName](Titanium.Android.Intent.packageName) must also be set).
			 */
			className: string;

			/**
			 * The Intent's Data URI.
			 */
			readonly data: string;

			/**
			 * Intent flags.
			 */
			flags: number;

			/**
			 * The fully-qualified Java package name of the activity.
			 */
			packageName: string;

			/**
			 * The MIME type for this Intent.
			 */
			readonly type: string;

			/**
			 * The URL to a Titanium JavaScript Activity.
			 */
			url: string;

			/**
			 * Adds a category to this Intent.
			 */
			addCategory(name: string): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Adds to the existing flags on the `Intent`.
			 */
			addFlags(flags: number): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Get a <Titanium.Blob> property from this `Intent`.
			 */
			getBlobExtra(name: string): Titanium.Blob;

			/**
			 * Get a boolean property from this Intent.
			 */
			getBooleanExtra(name: string, defaultValue: boolean): boolean;

			/**
			 * Get the Data URI from this `Intent`.
			 * @deprecated Use the <Titanium.Android.Intent.data> property instead.
			 */
			getData: never;

			/**
			 * Get a double property from this `Intent`.
			 */
			getDoubleExtra(name: string, defaultValue: number): number;

			/**
			 * Get an integer property from this `Intent`.
			 */
			getIntExtra(name: string, defaultValue: number): number;

			/**
			 * Get a long property from this `Intent`.
			 */
			getLongExtra(name: string, defaultValue: number): number;

			/**
			 * Get a string property from this `Intent`.
			 */
			getStringExtra(name: string): string;

			/**
			 * Returns `true` if this `Intent` has the specified property.
			 */
			hasExtra(name: string): boolean;

			/**
			 * Puts an extra property on this `Intent`.
			 */
			putExtra(name: string, value: any): void;

			/**
			 * Put a URI property on this `Intent` (useful for <Titanium.Android.EXTRA_STREAM>).
			 */
			putExtraUri(name: string, value: string | string[]): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
