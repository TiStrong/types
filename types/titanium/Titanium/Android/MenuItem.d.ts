declare namespace Titanium {
	namespace Android {
		/**
		 * Base event for class Titanium.Android.MenuItem
		 */
		interface MenuItemBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.Android.MenuItem;

		}
		/**
		 * Fired when the user clicks the menu item.
		 */
		interface MenuItem_click_Event extends MenuItemBaseEvent {
		}
		/**
		 * Fired when the action view has been expanded.
		 */
		interface MenuItem_expand_Event extends MenuItemBaseEvent {
		}
		/**
		 * Fired when the action view has been collapsed.
		 */
		interface MenuItem_collapse_Event extends MenuItemBaseEvent {
		}
		interface MenuItemEventMap extends ProxyEventMap {
			click: MenuItem_click_Event;

			collapse: MenuItem_collapse_Event;

			expand: MenuItem_expand_Event;

		}
		/**
		 * The Titanium binding of an Android menu item.
		 */
		class MenuItem extends Titanium.Proxy {
			/**
			 * Briefly describes what performing an action (such as a click) on the view will do.
			 */
			accessibilityHint: string;

			/**
			 * A succint label identifying the view for the device's accessibility service.
			 */
			accessibilityLabel: string;

			/**
			 * A string describing the value (if any) of the view for the device's accessibility service.
			 */
			accessibilityValue: string;

			/**
			 * Custom view that replaces the default menu item button.
			 */
			actionView: Titanium.UI.View;

			/**
			 * True if this menu item's action view has been expanded.
			 */
			readonly actionViewExpanded: boolean;

			/**
			 * Determines if the item can be checked.
			 */
			checkable: boolean;

			/**
			 * Determines if the item is checked.
			 */
			checked: boolean;

			/**
			 * Determines if the item is enabled.
			 */
			enabled: boolean;

			/**
			 * Group ID for this item.
			 */
			readonly groupId: number;

			/**
			 * Icon to display for the this menu item.
			 */
			icon: number | string;

			/**
			 * Item ID for this item.
			 */
			readonly itemId: number;

			/**
			 * Integer used for controlling the category and sort order for menu items.
			 */
			readonly order: number;

			/**
			 * A set of flags that controls how this item appears in the action bar.
			 */
			showAsAction: number;

			/**
			 * Title of the item.
			 */
			title: string;

			/**
			 * Shortened version of the item's title.
			 */
			titleCondensed: string;

			/**
			 * Determines whether the menu item is visible.
			 */
			visible: boolean;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof MenuItemEventMap>(name: K, callback: (this: Titanium.Android.MenuItem, event: MenuItemEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Collapse the action view associated with this menu item.
			 */
			collapseActionView(): void;

			/**
			 * Expand the action view associated with this menu item.
			 */
			expandActionView(): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof MenuItemEventMap>(name: K, event?: MenuItemEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Returns the [actionViewExpanded](Titanium.Android.MenuItem.actionViewExpanded) state of the menu item.
			 * @deprecated Use the <Titanium.Android.MenuItem.actionViewExpanded> property instead.
			 */
			isActionViewExpanded(): boolean;

			/**
			 * Returns the [checkable](Titanium.Android.MenuItem.checkable) state of the menu item.
			 * @deprecated Use the <Titanium.Android.MenuItem.checkable> property instead.
			 */
			isCheckable(): boolean;

			/**
			 * Returns the [checked](Titanium.Android.MenuItem.checked) state of the menu item.
			 * @deprecated Use the <Titanium.Android.MenuItem.checked> property instead.
			 */
			isChecked(): boolean;

			/**
			 * Returns the [enabled](Titanium.Android.MenuItem.enabled) state of the menu item.
			 * @deprecated Use the <Titanium.Android.MenuItem.enabled> property instead.
			 */
			isEnabled(): boolean;

			/**
			 * Returns the [visible](Titanium.Android.MenuItem.visible) state of the menu item.
			 * @deprecated Use the <Titanium.Android.MenuItem.visible> property instead.
			 */
			isVisible(): boolean;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof MenuItemEventMap>(name: K, callback: (this: Titanium.Android.MenuItem, event: MenuItemEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Sets the [checkable](Titanium.Android.MenuItem.checkable) state of the menu item.
			 * @deprecated Use the <Titanium.Android.MenuItem.checkable> property instead.
			 */
			setCheckable: never;

			/**
			 * Sets the [checked](Titanium.Android.MenuItem.checked) state of the menu item.
			 * @deprecated Use the <Titanium.Android.MenuItem.checked> property instead.
			 */
			setChecked: never;

			/**
			 * Sets the [enabled](Titanium.Android.MenuItem.enabled) state of the menu item.
			 * @deprecated Use the <Titanium.Android.MenuItem.enabled> property instead.
			 */
			setEnabled: never;

			/**
			 * Sets the [visible](Titanium.Android.MenuItem.visible) state of the menu item.
			 * @deprecated Use the <Titanium.Android.MenuItem.visible> property instead.
			 */
			setVisible: never;

		}
	}
}
