declare namespace Titanium {
	namespace Android {
		/**
		 * Base event for class Titanium.Android.QuickSettingsService
		 */
		interface QuickSettingsServiceBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.Android.QuickSettingsService;

		}
		/**
		 * For Javascript-based services that you create, `pause` fires after each time the JavaScript
		 * code executes.
		 */
		interface QuickSettingsService_pause_Event extends QuickSettingsServiceBaseEvent {
			/**
			 * Incrementing integer indicating which iteration of an interval-based Service is pausing.
			 * For example, if you have an interval-based Service running every 10 seconds, iteration
			 * 3 would occur at about 30 seconds after you start the instance (assuming your service
			 * code runs quickly).
			 */
			iteration: number;

		}
		/**
		 * For JavaScript-based Services which you create, `resume` fires each time the JavaScript
		 * code executes.
		 */
		interface QuickSettingsService_resume_Event extends QuickSettingsServiceBaseEvent {
			/**
			 * Incrementing integer indicating which iteration of an interval-based Service is pausing.
			 * For example, if you have an interval-based Service running every 10 seconds, iteration
			 * 3 would occur at about 30 seconds after you start the instance (assuming your service
			 * code runs quickly).
			 */
			iteration: number;

		}
		/**
		 * Fired when the bound service instance starts.
		 */
		interface QuickSettingsService_start_Event extends QuickSettingsServiceBaseEvent {
		}
		/**
		 * Fired when the bound service instance stops.
		 */
		interface QuickSettingsService_stop_Event extends QuickSettingsServiceBaseEvent {
		}
		/**
		 * Fired when the task that comes from the service's application has been removed.
		 */
		interface QuickSettingsService_taskremoved_Event extends QuickSettingsServiceBaseEvent {
		}
		/**
		 * Tile is listening for events.
		 */
		interface QuickSettingsService_startlistening_Event extends QuickSettingsServiceBaseEvent {
		}
		/**
		 * Tile has stopped listening for events.
		 */
		interface QuickSettingsService_stoplistening_Event extends QuickSettingsServiceBaseEvent {
		}
		/**
		 * The Tile has been added in the quick menu.
		 */
		interface QuickSettingsService_tileadded_Event extends QuickSettingsServiceBaseEvent {
		}
		/**
		 * The Tile has been removed from the quick menu.
		 */
		interface QuickSettingsService_tileremoved_Event extends QuickSettingsServiceBaseEvent {
		}
		/**
		 * An item from the signle choice menu has been selected.
		 */
		interface QuickSettingsService_tiledialogoptionselected_Event extends QuickSettingsServiceBaseEvent {
			/**
			 * Index of the selected item from the single choice menu in the dialog.
			 */
			itemIndex: number;

		}
		/**
		 * Dispatched when the alert dialog has been cancelled.
		 */
		interface QuickSettingsService_tiledialogcancelled_Event extends QuickSettingsServiceBaseEvent {
		}
		/**
		 * Dispatched when the positive (index 0) button has been clicked.
		 */
		interface QuickSettingsService_tiledialogpositive_Event extends QuickSettingsServiceBaseEvent {
		}
		/**
		 * Dispatched when the neutral (index 1) button has been clicked.
		 */
		interface QuickSettingsService_tiledialogneutral_Event extends QuickSettingsServiceBaseEvent {
		}
		/**
		 * Dispatched when the negative (index 2) button has been clicked.
		 */
		interface QuickSettingsService_tiledialognegative_Event extends QuickSettingsServiceBaseEvent {
		}
		interface QuickSettingsServiceEventMap extends ProxyEventMap {
			pause: QuickSettingsService_pause_Event;

			resume: QuickSettingsService_resume_Event;

			start: QuickSettingsService_start_Event;

			startlistening: QuickSettingsService_startlistening_Event;

			stop: QuickSettingsService_stop_Event;

			stoplistening: QuickSettingsService_stoplistening_Event;

			taskremoved: QuickSettingsService_taskremoved_Event;

			tileadded: QuickSettingsService_tileadded_Event;

			tiledialogcancelled: QuickSettingsService_tiledialogcancelled_Event;

			tiledialognegative: QuickSettingsService_tiledialognegative_Event;

			tiledialogneutral: QuickSettingsService_tiledialogneutral_Event;

			tiledialogoptionselected: QuickSettingsService_tiledialogoptionselected_Event;

			tiledialogpositive: QuickSettingsService_tiledialogpositive_Event;

			tileremoved: QuickSettingsService_tileremoved_Event;

		}
		/**
		 * Android service for creating custom quick settings tiles and handling user's interaction with them.
		 */
		class QuickSettingsService extends Titanium.Android.Service {
			/**
			 * Changes the Tile's icon.
			 */
			icon: string | Titanium.Blob | Titanium.Filesystem.File;

			/**
			 * The Tile's label.
			 */
			label: string;

			/**
			 * Sets the state of the Tile.
			 */
			state: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof QuickSettingsServiceEventMap>(name: K, callback: (this: Titanium.Android.QuickSettingsService, event: QuickSettingsServiceEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof QuickSettingsServiceEventMap>(name: K, event?: QuickSettingsServiceEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Returns the Tile's current icon.
			 * @deprecated Please use the [icon](Titanium.Android.QuickSettingsService.icon) property to get/set the value.
			 */
			getIcon(): string | Titanium.Blob | Titanium.Filesystem.File;

			/**
			 * Returns the Tile's current label.
			 * @deprecated Please use the [label](Titanium.Android.QuickSettingsService.label) property to get/set the value.
			 */
			getLabel(): string;

			/**
			 * Returns the Tile's current state.
			 * @deprecated Please use the [state](Titanium.Android.QuickSettingsService.state) property to get/set the value.
			 */
			getState(): number;

			/**
			 * Returns 'true' if the device is currently locked, 'false' otherwise.
			 */
			isLocked(): boolean;

			/**
			 * Returns 'true' if the device is in secure state, 'false' otherwise.
			 */
			isSecure(): boolean;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof QuickSettingsServiceEventMap>(name: K, callback: (this: Titanium.Android.QuickSettingsService, event: QuickSettingsServiceEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Changes the Tile's icon.
			 * @deprecated Please use the [icon](Titanium.Android.QuickSettingsService.icon) property to get/set the value.
			 */
			setIcon(icon: string | Titanium.Blob | Titanium.Filesystem.File): void;

			/**
			 * Changes the Tile's label.
			 * @deprecated Please use the [label](Titanium.Android.QuickSettingsService.label) property to get/set the value.
			 */
			setLabel(label: string): void;

			/**
			 * Sets the state of the Tile.
			 * @deprecated Please use the [state](Titanium.Android.QuickSettingsService.state) property to get/set the value.
			 */
			setState(state: number): void;

			/**
			 * Opens an Alert dialog.
			 */
			showDialog(options: showParams): void;

			/**
			 * Colapses the quick settings menu and starts an activity for the passed Intent.
			 */
			startActivityAndCollapse(intent: Titanium.Android.Intent): void;

			/**
			 * Prompts the user to unlock the device and runs the JS code.
			 */
			unlockAndRun(jsCode: string): void;

			/**
			 * Applies current tile's properties.
			 */
			updateTile(): void;

		}
	}
}
