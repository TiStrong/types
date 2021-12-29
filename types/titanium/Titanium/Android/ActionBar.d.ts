declare namespace Titanium {
	namespace Android {
		/**
		 * An action bar is a window feature that identifies the application and user location,
		 * and provides user actions and navigation modes.
		 */
		class ActionBar extends Titanium.Proxy {
			/**
			 * The background image for the action bar, specified as a local file path or URL.
			 */
			backgroundImage: string;

			/**
			 * Sets a view to be used for a custom navigation mode.
			 */
			customView: Titanium.UI.View;

			/**
			 * Displays an "up" affordance on the "home" area of the action bar.
			 */
			displayHomeAsUp: boolean;

			/**
			 * Sets a custom icon for the "home" button in the corner of the action bar.
			 */
			homeAsUpIndicator: string | number | Titanium.Blob;

			/**
			 * Enable or disable the "home" button in the corner of the action bar.
			 */
			homeButtonEnabled: boolean;

			/**
			 * Sets the application icon displayed in the "home" area of the action bar.
			 */
			icon: string | number | Titanium.Blob;

			/**
			 * Sets the application logo displayed in the "home" area of the action bar.
			 */
			logo: string | number | Titanium.Blob;

			/**
			 * Controls the navigation mode.
			 */
			navigationMode: number;

			/**
			 * Callback function called when the home icon is clicked.
			 */
			onHomeIconItemSelected: (...args: any[]) => void;

			/**
			 * Sets the subtitle of the action bar.
			 */
			subtitle: string;

			/**
			 * Sets the title of the action bar.
			 */
			title: string;

			/**
			 * Gets or sets the action bar visibility state.
			 */
			visible: boolean;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Hides the action bar if it is currently showing.
			 */
			hide(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Shows or hides the action bar home icon
			 */
			setDisplayShowHomeEnabled(show: boolean): void;

			/**
			 * Shows or hides the action bar title/subtitle
			 */
			setDisplayShowTitleEnabled(show: boolean): void;

			/**
			 * Shows the action bar if it is currently hidden.
			 */
			show(): void;

		}
	}
}
