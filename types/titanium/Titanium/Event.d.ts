declare namespace Titanium {
	/**
	 * The base type for all Titanium events.
	 */
	interface Event {
		/**
		 * True if the event will try to bubble up if possible.
		 */
		readonly bubbles: boolean;

		/**
		 * Set to true to stop the event from bubbling.
		 */
		cancelBubble: boolean;

		/**
		 * Source object that fired the event.
		 */
		readonly source: any;

		/**
		 * Name of the event fired.
		 */
		readonly type: string;

	}
}
