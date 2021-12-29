declare namespace Titanium {
	namespace Android {
		/**
		 * Helper object for generating large-format notifications that include a large image attachment.
		 */
		class BigPictureStyle extends Titanium.Proxy {
			/**
			 * Overrides <Titanium.Android.Notification.contentTitle> in the big form of the notification. This defaults to the value passed to <Titanium.Android.Notification.contentTitle>.
			 */
			bigContentTitle: string;

			/**
			 * Override the <Titanium.Android.Notification.largeIcon> when the big notification is shown.
			 */
			bigLargeIcon: number | string;

			/**
			 * Provide the bitmap to be used as the payload for the BigPicture notification.
			 */
			bigPicture: number | string | Titanium.Blob | Titanium.Filesystem.File;

			/**
			 * Number of times to retry decoding the bitmap at bigPicture URL.
			 */
			decodeRetries: number;

			/**
			 * Set the first line of text after the detail section in the big form of the notification.
			 */
			summaryText: string;

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
