declare namespace Titanium {
	namespace Filesystem {
		/**
		 * Object representing a path to a file or directory in the device's persistent storage.
		 */
		class File extends Titanium.Proxy {
			/**
			 * `true` if the file is executable.
			 */
			readonly executable: boolean;

			/**
			 * Set to `true` if the file is hidden.
			 */
			hidden: boolean;

			/**
			 * Name of the file.
			 */
			readonly name: string;

			/**
			 * Native path associated with this file object, as a file URL.
			 */
			readonly nativePath: string;

			/**
			 * A `File` object representing the parent directory of the file identified by this object.
			 */
			readonly parent: Titanium.Filesystem.File;

			/**
			 * `true` if the file identified by this object is read-only.
			 */
			readonly readonly: boolean;

			/**
			 * Value indicating whether or not to back up to a cloud service.
			 */
			remoteBackup: boolean;

			/**
			 * Size, in bytes, of the file identified by this object.
			 */
			readonly size: number;

			/**
			 * `true` if the file identified by this object is a symbolic link.
			 */
			readonly symbolicLink: boolean;

			/**
			 * `true` if the file identified by this object is writable.
			 */
			readonly writable: boolean;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Appends data to the file identified by this file object.
			 */
			append(data: string | Titanium.Blob | Titanium.Filesystem.File): boolean;

			/**
			 * Copies the file identified by this file object to a new path.
			 */
			copy(destinationPath: string): boolean;

			/**
			 * Creates a directory at the path identified by this file object.
			 */
			createDirectory(recursive?: boolean): boolean;

			/**
			 * Creates a file at the path identified by this file object.
			 */
			createFile(): boolean;

			/**
			 * Returns the creation timestamp for the file identified by this file object.
			 * @deprecated Use [createdAt](Titanium.Filesystem.File.createdAt) instead.
			 */
			createTimestamp(): number;

			/**
			 * Returns the creation Date for the file identified by this file object.
			 */
			createdAt(): Date;

			/**
			 * Deletes the directory identified by this file object.
			 */
			deleteDirectory(recursive?: boolean): boolean;

			/**
			 * Deletes the file identified by this file object.
			 */
			deleteFile(): boolean;

			/**
			 * Returns `true` if the file or directory identified by this file object exists on the device.
			 */
			exists(): boolean;

			/**
			 * Returns the extension for the file identified by this file object.
			 */
			extension(): string;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Returns a listing of the directory identified by this file object, or `null`
			 * if this object doesn't identify a directory.
			 */
			getDirectoryListing(): string[];

			/**
			 * Returns the path of the parent directory holding the file identified by this
			 * file object, as a String (deprecated) **or** as a `File` object.
			 * @deprecated Use the [Titanium.Filesystem.File.parent](Titanium.Filesystem.File.parent) property to receive a `File`
			 * reference instead. If you wish to receive the path, use the `nativePath`
			 * property of that reference instead.
			 *
			 */
			getParent(): string | Titanium.Filesystem.File;

			/**
			 * Returns the protection key value of this file object.
			 * Returns `null` if there's an error.
			 */
			getProtectionKey(): string;

			/**
			 * Returns `true` if this file object represents a directory.
			 */
			isDirectory(): boolean;

			/**
			 * Returns `true` if this file object represents an ordinary file.
			 */
			isFile(): boolean;

			/**
			 * Returns the last modification time for this file.
			 * @deprecated Use [Titanium.Filesystem.File.modifiedAt](Titanium.Filesystem.File.modifiedAt) instead.
			 */
			modificationTimestamp(): number;

			/**
			 * Returns the last modification Date for the file identified by this file object.
			 */
			modifiedAt(): Date;

			/**
			 * Moves the file identified by this file object to another path.
			 */
			move(newpath: string): boolean;

			/**
			 * Opens the file identified by this file object for random access.
			 */
			open(mode: number): Titanium.Filesystem.FileStream;

			/**
			 * Returns the contents of the file identified by this file object as a `Blob`.
			 */
			read(): Titanium.Blob;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Renames the file identified by this file object.
			 */
			rename(newname: string): boolean;

			/**
			 * Returns the fully-resolved native path associated with this file object.
			 */
			resolve(): string;

			/**
			 * Sets the protection key as an attribute to the file identified by this file object.
			 */
			setProtectionKey(fileProtectionType: string): boolean;

			/**
			 * Returns the amount of free space available on the device where the file identified by this file object is stored.
			 */
			spaceAvailable(): number;

			/**
			 * Writes the specified data to the file identified by this file object.
			 */
			write(data: string | Titanium.Filesystem.File | Titanium.Blob, append?: boolean): boolean;

		}
	}
}
