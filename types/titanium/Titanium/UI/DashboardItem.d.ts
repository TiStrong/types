declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.DashboardItem
		 */
		interface DashboardItemBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.DashboardItem;

		}
		/**
		 * Fired when a click is detected against the view.
		 */
		interface DashboardItem_click_Event extends DashboardItemBaseEvent {
			/**
			 * Item that was clicked.
			 */
			item: Titanium.UI.DashboardItem;

			/**
			 * Coordinates `x` and `y` of the event from the parent view's coordinate system.
			 */
			location: Point;

		}
		/**
		 * Fired when an item is deleted during editing mode.
		 */
		interface DashboardItem_delete_Event extends DashboardItemBaseEvent {
			/**
			 * Item that was deleted.
			 */
			item: Titanium.UI.DashboardItem;

		}
		/**
		 * Fired when an item is moved during editing mode.
		 */
		interface DashboardItem_move_Event extends DashboardItemBaseEvent {
			/**
			 * Item that was moved.
			 */
			item: Titanium.UI.DashboardItem;

			/**
			 * List of items to be committed, possibly in new order, when edit mode ends.
			 */
			items: Titanium.UI.DashboardItem[];

		}
		interface DashboardItemEventMap extends ProxyEventMap {
			click: DashboardItem_click_Event;

			delete: DashboardItem_delete_Event;

			move: DashboardItem_move_Event;

		}
		/**
		 * A dashboard item is a view that is displayed as an icon in a <Titanium.UI.DashboardView>.
		 */
		class DashboardItem extends Titanium.Proxy {
			/**
			 * Integer value displayed in a badge.
			 */
			badge: number;

			/**
			 * Determines whether this item can be deleted when it edit mode.
			 */
			canDelete: boolean;

			/**
			 * Image or path to image to display in the item by default.
			 */
			image: string | Titanium.Blob;

			/**
			 * Image or path to image to display in the item as it is selected.
			 */
			selectedImage: string | Titanium.Blob;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof DashboardItemEventMap>(name: K, callback: (this: Titanium.UI.DashboardItem, event: DashboardItemEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof DashboardItemEventMap>(name: K, event?: DashboardItemEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof DashboardItemEventMap>(name: K, callback: (this: Titanium.UI.DashboardItem, event: DashboardItemEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
