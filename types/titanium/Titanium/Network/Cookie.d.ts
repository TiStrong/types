declare namespace Titanium {
	namespace Network {
		/**
		 * Cookie object used to manage the system cookie store and HTTP client cookie store.
		 */
		class Cookie extends Titanium.Proxy {
			/**
			 * The comment describing the purpose of this cookie
			 */
			comment: string;

			/**
			 * The domain attribute of the cookie.
			 */
			domain: string;

			/**
			 * The expiration Date of the cookie.
			 */
			expiryDate: string;

			/**
			 * The httponly attribute of the cookie.
			 */
			httponly: boolean;

			/**
			 * Sets the Max-Age attribute of a Cookie, in delta-seconds.
			 */
			maxAge: number;

			/**
			 * The name of the cookie.
			 */
			readonly name: string;

			/**
			 * The origual url attribute of the cookie.
			 */
			originalUrl: string;

			/**
			 * The path attribute of the cookie.
			 */
			path: string;

			/**
			 * The secure attribute of the cookie.
			 */
			secure: boolean;

			/**
			 * The value of the cookie.
			 */
			value: string;

			/**
			 * The version of the cookie specification to which this cookie conforms.
			 */
			version: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Returns true if the cookie is valid.
			 */
			isValid(): boolean;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
