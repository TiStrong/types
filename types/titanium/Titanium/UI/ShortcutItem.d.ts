declare namespace Titanium {
	namespace UI {
		/**
		 * An application shortcut item.
		 */
		class ShortcutItem extends Titanium.Proxy {
			/**
			 * Shortcut data.
			 */
			data: any;

			/**
			 * Description of the shortcut.
			 */
			description: string;

			/**
			 * Shortcut icon.
			 */
			icon: string | number;

			/**
			 * Determines shortcut id.
			 */
			id: string;

			/**
			 * Title of the shortcut.
			 */
			title: string;

			/**
			 * Shortcut visibility.
			 * @deprecated Use [Titanium.UI.Shortcut.items](Titanium.UI.Shortcut.items) to determine if shortcut is active.
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
			 * Hide the shortcut.
			 * @deprecated Use [Titanium.UI.Shortcut.remove](Titanium.UI.Shortcut.remove) instead.
			 */
			hide(): void;

			/**
			 * Pin shortcut to launcher.
			 */
			pin(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Allow the shortcut to show.
			 * @deprecated Use [Titanium.UI.Shortcut.add](Titanium.UI.Shortcut.add) instead.
			 */
			show(): void;

		}
	}
}
