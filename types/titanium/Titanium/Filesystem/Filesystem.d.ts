/// <reference path="./File.d.ts" />
/// <reference path="./FileStream.d.ts" />
declare namespace Titanium {
	/**
	 * The top level filesystem module, used to access files and directories on the device.
	 */
	namespace Filesystem {
		/**
		 * Constant used to set protection key to NSFileProtectionComplete in file attributes.
		 */
		const IOS_FILE_PROTECTION_COMPLETE: string;

		/**
		 * Constant used to set protection key to NSFileProtectionCompleteUnlessOpen in file attributes.
		 */
		const IOS_FILE_PROTECTION_COMPLETE_UNLESS_OPEN: string;

		/**
		 * Constant used to set protection key to NSFileProtectionCompleteUntilFirstUserAuthentication in file attributes.
		 */
		const IOS_FILE_PROTECTION_COMPLETE_UNTIL_FIRST_USER_AUTHENTICATION: string;

		/**
		 * Constant used to set protection key to NSFileProtectionNone in file attributes.
		 */
		const IOS_FILE_PROTECTION_NONE: string;

		/**
		 * Constant for append mode for file operations.
		 */
		const MODE_APPEND: number;

		/**
		 * Constant for read mode for file operations.
		 */
		const MODE_READ: number;

		/**
		 * Constant for write mode for file operations.
		 */
		const MODE_WRITE: number;

	}
	/**
	 * The top level filesystem module, used to access files and directories on the device.
	 */
	class Filesystem extends Titanium.Module {
		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Path to the application's internal cache directory.
		 */
		static readonly applicationCacheDirectory: string;

		/**
		 * Path to the application's data directory.
		 */
		static readonly applicationDataDirectory: string;

		/**
		 * Path to the iOS application directory.
		 */
		static readonly applicationDirectory: string;

		/**
		 * Path to the application support directory.
		 */
		static readonly applicationSupportDirectory: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * Path to the app's sandboxed cache folder on removable storage, such as SD card.
		 */
		static readonly externalCacheDirectory: string;

		/**
		 * Path to the app's sandboxed folder on removable storage, such as SD card.
		 */
		static readonly externalStorageDirectory: string;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Platform-specific line ending constant.
		 */
		static readonly lineEnding: string;

		/**
		 * Path to the application's raw resource directory.
		 */
		static readonly resRawDirectory: string;

		/**
		 * Path to the application's resource directory.
		 */
		static readonly resourcesDirectory: string;

		/**
		 * Platform-specific path separator constant.
		 */
		static readonly separator: string;

		/**
		 * Path for the application's temporary directory.
		 */
		static readonly tempDirectory: string;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Creates a temporary directory and returns a [File](Titanium.Filesystem.File) object representing the new directory.
		 */
		static createTempDirectory(): Titanium.Filesystem.File;

		/**
		 * Creates a temporary file and returns a [File](Titanium.Filesystem.File) object representing the new file.
		 */
		static createTempFile(): Titanium.Filesystem.File;

		/**
		 * Returns the path to the container directory associated with the specified security application group ID.
		 */
		static directoryForSuite(suiteName: string): string;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Returns a `Blob` object representing the asset catalog image identified by the path arguments.
		 */
		static getAsset(...path: string[]): Titanium.Blob;

		/**
		 * Returns a `File` object representing the file identified by the path arguments.
		 */
		static getFile(...path: string[]): Titanium.Filesystem.File;

		/**
		 * Returns a `File` object representing the file identified by the path arguments.
		 */
		static getFile(path: ReadonlyArray<string>): Titanium.Filesystem.File;

		/**
		 * Returns `true` if the app has storage permissions.
		 */
		static hasStoragePermissions(): boolean;

		/**
		 * Returns `true` if the device supports external storage *and* the external storage device is mounted.
		 */
		static isExternalStoragePresent(): boolean;

		/**
		 * Opens file using the <Titanium.IOStream> interface.
		 */
		static openStream(mode: number, path: string): Titanium.Filesystem.FileStream;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Requests for storage permissions
		 */
		static requestStoragePermissions(callback?: (param0: RequestStorageAccessResult) => void): Promise<RequestStorageAccessResult>;

	}
}
/**
 * Argument passed to the callback when a request finishes successfully or erroneously.
 */
interface RequestStorageAccessResult extends ErrorResponse {
}
