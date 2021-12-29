declare namespace Titanium {
	/**
	 * The top-level Utils module, containing a set of JavaScript methods that are often useful when
	 * building applications.
	 */
	class Utils extends Titanium.Module {
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
		 * Returns the specified data decoded from Base64.
		 */
		static base64decode(obj: string | Titanium.Blob | Titanium.Filesystem.File): Titanium.Blob;

		/**
		 * Returns the specified data encoded to Base64.
		 */
		static base64encode(obj: string | Titanium.Blob | Titanium.Filesystem.File): Titanium.Blob;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Returns a MD5 digest of the specified data as a hex-based String.
		 */
		static md5HexDigest(obj: string | Titanium.Blob): string;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Returns a SHA-1 hash of the specified data as a hex-based String.
		 */
		static sha1(obj: string | Titanium.Blob): string;

		/**
		 * Returns a SHA-256 hash of the specified data as a hex-based String.
		 */
		static sha256(obj: string | Titanium.Blob): string;

	}
}
