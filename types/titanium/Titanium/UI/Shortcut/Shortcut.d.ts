declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.Shortcut
		 */
		interface ShortcutBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.Shortcut;

		}
		/**
		 * Fired when a <Titanium.UI.ShortcutItem> was clicked on.
		 */
		interface Shortcut_click_Event extends ShortcutBaseEvent {
			/**
			 * The shortcut item clicked.
			 */
			item: Titanium.UI.ShortcutItem;

		}
		interface ShortcutEventMap extends ProxyEventMap {
			click: Shortcut_click_Event;

		}
		/**
		 * Manage application shortcuts.
		 */
		class Shortcut extends Titanium.Proxy {
			/**
			 * List dynamic shortcuts.
			 */
			readonly items: Titanium.UI.ShortcutItem[];

			/**
			 * List current pinned/static shortcuts.
			 */
			readonly staticItems: Titanium.UI.ShortcutItem[];

			/**
			 * Adds a shortcut item to the application.
			 */
			add(item: Titanium.UI.ShortcutItem): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof ShortcutEventMap>(name: K, callback: (this: Titanium.UI.Shortcut, event: ShortcutEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof ShortcutEventMap>(name: K, event?: ShortcutEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Fetches a shortcut item by its unique string identifier.
			 */
			getById(id: string): Titanium.UI.ShortcutItem;

			/**
			 * Removes the given shortcut item from the application.
			 */
			remove(item: Titanium.UI.ShortcutItem): void;

			/**
			 * Removes all shortcut items from the application.
			 */
			removeAll(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof ShortcutEventMap>(name: K, callback: (this: Titanium.UI.Shortcut, event: ShortcutEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
