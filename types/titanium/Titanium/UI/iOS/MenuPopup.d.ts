declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Base event for class Titanium.UI.iOS.MenuPopup
			 */
			interface MenuPopupBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.UI.iOS.MenuPopup;

			}
			/**
			 * Fired when the user clicks at one of the menu popup items.
			 */
			interface MenuPopup_click_Event extends MenuPopupBaseEvent {
				/**
				 * The index of the clicked item.
				 */
				index: number;

				/**
				 * The title of the clicked item.
				 */
				title: string;

			}
			interface MenuPopupEventMap extends ProxyEventMap {
				click: MenuPopup_click_Event;

			}
			/**
			 * A menu popup provides the ability to create custom tooltip options using the `items` property
			 * covering the native `UIMenuController` class.
			 * See also:
			 * * [iOS Developer Library: UIMenuController](https://developer.apple.com/documentation/uikit/uimenucontroller)
			 */
			class MenuPopup extends Titanium.Proxy {
				/**
				 * The items of the menu popup.
				 */
				items: string[];

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof MenuPopupEventMap>(name: K, callback: (this: Titanium.UI.iOS.MenuPopup, event: MenuPopupEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof MenuPopupEventMap>(name: K, event?: MenuPopupEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Hides the menu popup.
				 */
				hide(options?: AnimatedOptions): void;

				/**
				 * Indicates whether the menu popup is currently visible.
				 */
				isVisible(): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof MenuPopupEventMap>(name: K, callback: (this: Titanium.UI.iOS.MenuPopup, event: MenuPopupEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Shows the menu popup.
				 */
				show(options: MenuPopupShowParams): void;

			}
		}
	}
}
/**
 * Dictionary of options for showing a menu popup with <Titanium.UI.iOS.MenuPopup.show>.
 */
interface MenuPopupShowParams {
	/**
	 * Determines whether the menu popup should be opened or closed animated.
	 */
	animated?: boolean;

	/**
	 * Indicates the arrow direction of the menu popup.
	 */
	arrowDirection?: number;

	/**
	 * The view where the menu pop is shown at.
	 */
	view: Titanium.UI.View;

}
