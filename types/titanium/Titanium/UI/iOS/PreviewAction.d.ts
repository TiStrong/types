declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Base event for class Titanium.UI.iOS.PreviewAction
			 */
			interface PreviewActionBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.UI.iOS.PreviewAction;

			}
			/**
			 * Fired when the device detects a click against a preview action.
			 */
			interface PreviewAction_click_Event extends PreviewActionBaseEvent {
				/**
				 * The index of the clicked action.
				 */
				index: number;

				/**
				 * The item ID of cell, if the `previewContext` property of the <Titanium.UI.iOS.PreviewContext>
				 * is a <Titanium.UI.ListView>.
				 */
				itemId: string;

				/**
				 * The index of the clicked row, if the `previewContext` property of the <Titanium.UI.iOS.PreviewContext>
				 * is a <Titanium.UI.ListView>.
				 */
				itemIndex: number;

				/**
				 * The index of the clicked section, if the `previewContext` property of the <Titanium.UI.iOS.PreviewContext>
				 * is a <Titanium.UI.ListView>.
				 */
				sectionIndex: number;

			}
			interface PreviewActionEventMap extends ProxyEventMap {
				click: PreviewAction_click_Event;

			}
			/**
			 * A PreviewAction provides options to configure actions used by the iOS 9 3D-Touch "Peek and Pop"
			 * feature.
			 */
			class PreviewAction extends Titanium.Proxy {
				/**
				 * The style of the action.
				 */
				style: number;

				/**
				 * The title of the action.
				 */
				title: string;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof PreviewActionEventMap>(name: K, callback: (this: Titanium.UI.iOS.PreviewAction, event: PreviewActionEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof PreviewActionEventMap>(name: K, event?: PreviewActionEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof PreviewActionEventMap>(name: K, callback: (this: Titanium.UI.iOS.PreviewAction, event: PreviewActionEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
