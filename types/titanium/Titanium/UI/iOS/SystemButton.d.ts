declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for creating standard iOS system buttons.
			 */
			namespace SystemButton {
				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Action** button.
				 */
				const ACTION: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to create an activity indicator that
				 * can be used in navigation bars and toolbars.
				 */
				const ACTIVITY: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Add** button.
				 */
				const ADD: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Bookmarks** button.
				 */
				const BOOKMARKS: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Camera** button.
				 */
				const CAMERA: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Cancel** button.
				 */
				const CANCEL: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Compose** button.
				 */
				const COMPOSE: number;

				/**
				 * Use with [Button.style](Titanium.UI.Button.style) to specify a **ContactAdd** button.
				 */
				const CONTACT_ADD: number;

				/**
				 * Use with [Button.style](Titanium.UI.Button.style) to specify a **Disclosure** button.
				 */
				const DISCLOSURE: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Done** button.
				 */
				const DONE: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Edit** button.
				 */
				const EDIT: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Fast Forward** button.
				 */
				const FAST_FORWARD: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to create a fixed-width blank space
				 * for spacing items in toolbars.
				 */
				const FIXED_SPACE: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to create a flexible blank space
				 * for spacing items in toolbars.
				 */
				const FLEXIBLE_SPACE: number;

				/**
				 * Use with [Button.style](Titanium.UI.Button.style) to specify a dark-colored **Info** button.
				 */
				const INFO_DARK: number;

				/**
				 * Use with [Button.style](Titanium.UI.Button.style) to specify a light-colored **Info** button.
				 */
				const INFO_LIGHT: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify an **Organize** button.
				 */
				const ORGANIZE: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Pause** button.
				 */
				const PAUSE: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Play** button.
				 */
				const PLAY: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Refresh** button.
				 */
				const REFRESH: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Reply** button.
				 */
				const REPLY: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Rewind** button.
				 */
				const REWIND: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Save** button.
				 */
				const SAVE: number;

				/**
				 * Identical to [ACTIVITY](Titanium.UI.iOS.SystemButton.ACTIVITY).
				 */
				const SPINNER: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Stop** button.
				 */
				const STOP: number;

				/**
				 * Use with [Button.systemButton](Titanium.UI.Button.systemButton) to specify a **Trash** button.
				 */
				const TRASH: number;

			}
			/**
			 * A set of constants for creating standard iOS system buttons.
			 */
			class SystemButton extends Titanium.Proxy {
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
}
