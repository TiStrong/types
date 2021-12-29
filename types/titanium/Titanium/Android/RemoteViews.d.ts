declare namespace Titanium {
	namespace Android {
		/**
		 * The Titanium binding of [Android RemoteViews](https://developer.android.com/reference/android/widget/RemoteViews.html).
		 */
		class RemoteViews extends Titanium.Proxy {
			/**
			 * Android layout resource ID for the view to display. Required.
			 */
			layoutId: number;

			/**
			 * Package name that the resource ID lives in. Optional.
			 */
			packageName: string;

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

			/**
			 * Calls a method taking a single `boolean` argument on a view in the remote view
			 * hierarchy.  See Android's documentation for
			 * [setBoolean](https://developer.android.com/reference/android/widget/RemoteViews.html#setBoolean(int, java.lang.String, boolean)).
			 */
			setBoolean(viewId: number, methodName: string, value: boolean): void;

			/**
			 * Sets the base time, format string, and started flag for a chronometer
			 * in the remote view hierarchy.
			 */
			setChronometer(viewId: number, base: Date, format: string, started: boolean): void;

			/**
			 * Calls a method taking a single `double` argument on a view in the remote view
			 * hierarchy.
			 */
			setDouble(viewId: number, methodName: string, value: number): void;

			/**
			 * Sets the image for an image view in the remote view hierarchy using an Android drawable resource.
			 */
			setImageViewResource(viewId: number, srcId: number): void;

			/**
			 * Sets the image for an image view in the remote view hierarchy using a URI.
			 */
			setImageViewUri(viewId: number, uri: string): void;

			/**
			 * Calls a method taking a single `int` argument on a view in the remote view hierarchy.
			 */
			setInt(viewId: number, methodName: string, value: number): void;

			/**
			 * Launches a <Titanium.Android.PendingIntent> when the specified view is clicked.
			 */
			setOnClickPendingIntent(viewId: number, pendingIntent: Titanium.Android.PendingIntent): void;

			/**
			 * Sets the progress, max value, and indeterminate flag of a progress bar in the
			 * remote view hierarchy.
			 */
			setProgressBar(viewId: number, max: number, progress: number, indeterminate: boolean): void;

			/**
			 * Calls a method taking a single String argument on a view in the remote view
			 * hierarchy.
			 */
			setString(viewId: number, methodName: string, value: string): void;

			/**
			 * Sets the text color of a view in the remote view hierarchy.
			 */
			setTextColor(viewId: number, color: number): void;

			/**
			 * Sets the text of a text view in the remote view hierarchy.
			 */
			setTextViewText(viewId: number, text: string): void;

			/**
			 * Calls a method taking one URI on a view in the remote view hierarchy.
			 */
			setUri(viewId: number, methodName: string, value: string): void;

			/**
			 * Sets the visibility of a view in the remote view hierarchy.
			 */
			setViewVisibility(viewId: number, visibility: number): void;

		}
	}
}
