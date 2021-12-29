declare namespace Titanium {
	namespace Media {
		/**
		 * Android-specific media-related functionality.
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

			/**
			 * Scans newly created or downloaded media files to make them available to other
			 * Android media providers, such as the Gallery.
			 */
			static scanMediaFiles(paths: ReadonlyArray<string>, mimeTypes: ReadonlyArray<string>, callback: (param0: MediaScannerResponse) => void): void;

			/**
			 * Set the system homescreen wallpaper.
			 */
			static setSystemWallpaper(image: Titanium.Blob, scale: boolean): void;

		}
	}
}
/**
 * Simple object passed to the [scanMediaFiles](Titanium.Media.Android.scanMediaFiles) callback.
 */
interface MediaScannerResponse {
	/**
	 * Path to the media file that was scanned.
	 */
	path?: string;

	/**
	 * URI to the file if it was scanned and added to the media library, or `null`
	 * if the file was not added.
	 */
	uri?: string;

}
