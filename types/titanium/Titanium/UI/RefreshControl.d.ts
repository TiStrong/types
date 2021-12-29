declare namespace Titanium {
	namespace UI {
		/**
		 * Base event for class Titanium.UI.RefreshControl
		 */
		interface RefreshControlBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.UI.RefreshControl;

		}
		/**
		 * Fired in response to a user initiated an action to refresh the contents of the
		 * table view, list view or scroll view.
		 */
		interface RefreshControl_refreshstart_Event extends RefreshControlBaseEvent {
			/**
			 * This is false. This event does not bubble
			 */
			bubbles: boolean;

		}
		/**
		 * Fired in response to a user finished action to refresh the contents of the
		 * table view, list view or scroll view.
		 */
		interface RefreshControl_refreshend_Event extends RefreshControlBaseEvent {
			/**
			 * This is false. This event does not bubble
			 */
			bubbles: boolean;

		}
		interface RefreshControlEventMap extends ProxyEventMap {
			refreshend: RefreshControl_refreshend_Event;

			refreshstart: RefreshControl_refreshstart_Event;

		}
		/**
		 * The RefreshControl is a representation of the native iOS
		 * [UIRefreshControl](https://developer.apple.com/documentation/uikit/uirefreshcontrol)
		 * and Android [SwipeRefreshLayout](https://developer.android.com/reference/android/support/v4/widget/SwipeRefreshLayout.html).
		 */
		class RefreshControl extends Titanium.Proxy {
			/**
			 * The tint color for the refresh control, as a color name or hex triplet.
			 */
			tintColor: string | Titanium.UI.Color;

			/**
			 * The attributed title of the control.
			 */
			title: Titanium.UI.AttributedString;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof RefreshControlEventMap>(name: K, callback: (this: Titanium.UI.RefreshControl, event: RefreshControlEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Tells the control that a refresh operation was started programmatically.
			 */
			beginRefreshing(): void;

			/**
			 * Tells the control that a refresh operation has ended.
			 */
			endRefreshing(): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof RefreshControlEventMap>(name: K, event?: RefreshControlEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof RefreshControlEventMap>(name: K, callback: (this: Titanium.UI.RefreshControl, event: RefreshControlEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
