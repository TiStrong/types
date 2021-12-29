declare namespace Titanium {
	namespace Network {
		/**
		 * HTTP client object that (mostly) implements the XMLHttpRequest specification.
		 */
		class HTTPClient extends Titanium.Proxy {
			/**
			 * Ready state constant indicating that the request is complete.
			 */
			readonly DONE: number;

			/**
			 * Ready state constant indicating that response headers have been received.
			 */
			readonly HEADERS_RECEIVED: number;

			/**
			 * Ready state constant indicating that response data is being received from the remote server.
			 */
			readonly LOADING: number;

			/**
			 * Ready state constant indicating that the connection has been opened, but the request has
			 * not yet been sent.
			 */
			readonly OPENED: number;

			/**
			 * Ready state constant indicating that HTTPClient request has not been opened or sent.
			 */
			readonly UNSENT: number;

			/**
			 * All of the response headers.
			 */
			readonly allResponseHeaders: string;

			/**
			 * Determines whether automatic encoding is enabled for the specified URL.
			 */
			autoEncodeUrl: boolean;

			/**
			 * Determines whether automatic automatic handling of HTTP redirects is enabled.
			 */
			autoRedirect: boolean;

			/**
			 * Determines whether HTTP responses are cached.
			 */
			cache: boolean;

			/**
			 * Indicates whether the response was successful.
			 */
			readonly connected: boolean;

			/**
			 * Connection type, normally either `GET`, `POST` or `PATCH`.
			 */
			readonly connectionType: string;

			/**
			 * Sets the domain parameter for authentication credentials.
			 */
			domain: string;

			/**
			 * Determines whether the client should attempt to keep a persistent connection.
			 */
			enableKeepAlive: boolean;

			/**
			 * Target local file or file path to receive data.
			 */
			file: string | Titanium.Filesystem.File;

			/**
			 * Absolute URL of the request.
			 */
			readonly location: string;

			/**
			 * Function to be called at regular intervals as the request data is being received.
			 */
			ondatastream: (param0: any) => void;

			/**
			 * Function to be called upon a error response.
			 */
			onerror: (param0: FailureResponse) => void;

			/**
			 * Function to be called upon a successful response.
			 */
			onload: (param0: SuccessResponse) => void;

			/**
			 * Function to be called for each [readyState](Titanium.Network.HTTPClient.readyState) change.
			 */
			onreadystatechange: (param0: any) => void;

			/**
			 * Function to be called at regular intervals as the request data is being transmitted.
			 */
			onsendstream: (param0: any) => void;

			/**
			 * Sets the password parameter for authentication credentials.
			 */
			password: string;

			/**
			 * The current ready state of this HTTP request.
			 */
			readonly readyState: number;

			/**
			 * Response data as a `Blob` object.
			 */
			readonly responseData: Titanium.Blob;

			/**
			 * Returns all the response headers returned with the request.
			 */
			readonly responseHeaders: any;

			/**
			 * Response as text.
			 */
			readonly responseText: string;

			/**
			 * Response object as an XML DOM Document object.
			 */
			readonly responseXML: Titanium.XML.Document;

			/**
			 * The Security Manager for this client.
			 */
			securityManager: SecurityManagerProtocol;

			/**
			 * Response HTTP status code.
			 */
			readonly status: number;

			/**
			 * Human-readable status message associated with the status code.
			 */
			readonly statusText: string;

			/**
			 * Timeout in milliseconds when the connection should be aborted.
			 */
			timeout: number;

			/**
			 * The maximum amount of time (in milliseconds) that a resource request should be allowed to take.
			 */
			timeoutForResource: number;

			/**
			 * Sets the TLS version to use for handshakes.
			 */
			tlsVersion: number;

			/**
			 * Sets the username parameter for authentication credentials.
			 */
			username: string;

			/**
			 * Determines how SSL certification validation is performed on connection.
			 */
			validatesSecureCertificate: boolean;

			/**
			 * A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
			 */
			waitsForConnectivity: boolean;

			/**
			 * Cancels a pending request.
			 */
			abort(): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Clears any cookies stored for the host.
			 */
			clearCookies(host: string): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * All of the response headers.
			 */
			getAllResponseHeaders(): string;

			/**
			 * Returns the value of the specified response header.
			 */
			getResponseHeader(name: string): string;

			/**
			 * Opens the request and prepares the connection.
			 */
			open(method: string, url: string, async?: boolean): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Sends the request.
			 */
			send(data?: any): void;

			/**
			 * Sets the value for the specified request header. Must be called after `open` but before `send`.
			 */
			setRequestHeader(name: string, value: string): void;

			/**
			 * Sets the request timeout.
			 * @deprecated Use the <Titanium.Network.HTTPClient.timeout> property instead.
			 */
			setTimeout: never;

		}
	}
}
/**
 * An extension of the [NSURLConnectionDelegate](https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLConnectionDelegate_Protocol/Reference/Reference.html#//apple_ref/occ/intf/NSURLConnectionDelegate) protocol to allow users to participate in authentication and resource management for this HTTPClient.
 */
interface APSConnectionDelegate {
}
/**
 * An Object describing the current ready state. See [onreadystatechange](Titanium.Network.HTTPClient.onreadystatechange) for more information.
 */
interface ReadyStatePayload {
	/**
	 * The state for which `onreadystatechange` was invoked. Set to one of `Titanium.Network.HTTPClient` ready-state constants
	 */
	readyState?: number;

}
/**
 * The protocol that the <Titanium.Network.HTTPClient.securityManager> must implement.
 */
interface SecurityManagerProtocol {
	/**
	 * The <APSConnectionDelegate> for this connection.
	 */
	connectionDelegateForUrl(url: any): APSConnectionDelegate;

	/**
	 * Returns an array of objects implementing the [X509KeyManager](https://developer.android.com/reference/javax/net/ssl/X509KeyManager.html) protocol for the SSL Context.
	 */
	getKeyManagers(proxy: any): any[];

	/**
	 * Returns an array of objects implementing the [X509TrustManager](https://developer.android.com/reference/javax/net/ssl/X509TrustManager.html) protocol for the SSL Context.
	 */
	getTrustManagers(proxy: any): any[];

	/**
	 * Returns if the security manager will participate in authentication of this end point.
	 */
	willHandleURL(url: any): boolean;

}
