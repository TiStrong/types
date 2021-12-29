declare namespace Titanium {
	namespace Android {
		/**
		 * The Titanium binding of an Android Options Menu.
		 */
		class Menu extends Titanium.Proxy {
			/**
			 * Array of menu items in this menu.
			 */
			readonly items: Titanium.Android.MenuItem[];

			/**
			 * Creates a <Titanium.Android.MenuItem> from the passed creation options.
			 */
			add(options: any): Titanium.Android.MenuItem;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Clears all items from this menu.
			 */
			clear(): void;

			/**
			 * Closes the menu, if visible.
			 */
			close(): void;

			/**
			 * Locates a [MenuItem](Titanium.Android.MenuItem) in this menu, by item ID or reference.
			 */
			findItem(item: number | Titanium.Android.MenuItem): Titanium.Android.MenuItem;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Returns the [MenuItem](Titanium.Android.MenuItem) at a specific index.
			 */
			getItem(index: number): Titanium.Android.MenuItem;

			/**
			 * Returns `true` if this menu has visible items.
			 */
			hasVisibleItems(): boolean;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Removes all menu items with the specified
			 * [groupId](Titanium.Android.MenuItem.groupId).
			 */
			removeGroup(groupId: number): void;

			/**
			 * Removes a specific [MenuItem](Titanium.Android.MenuItem) identified by its
			 * [itemId](Titanium.Android.MenuItem.itemId).
			 */
			removeItem(itemId: number): void;

			/**
			 * Enables or disables a group of menu items identified by a
			 * [groupId](Titanium.Android.MenuItem.groupId).
			 */
			setGroupEnabled(groupId: number, enabled: boolean): void;

			/**
			 * Shows or hides a group of menu items identified by a
			 * [groupId](Titanium.Android.MenuItem.groupId).
			 */
			setGroupVisible(groupId: number, visible: boolean): void;

			/**
			 * Number of items in this menu.
			 */
			size(): number;

		}
	}
}
