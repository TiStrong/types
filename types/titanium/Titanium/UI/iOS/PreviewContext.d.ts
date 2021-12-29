declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Base event for class Titanium.UI.iOS.PreviewContext
			 */
			interface PreviewContextBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.UI.iOS.PreviewContext;

			}
			/**
			 * Fired when the user peeks the preview. You can configure the preview
			 */
			interface PreviewContext_peek_Event extends PreviewContextBaseEvent {
				/**
				 * The item ID bound to the list item that generated the event.
				 */
				itemId: string;

				/**
				 * The item index of the ListView to identify the selected item.
				 * Note: This property is only available if the preview context is assigned to a <Titanium.UI.ListView>.
				 */
				itemIndex: number;

				/**
				 * The view to be previewed.
				 */
				preview: Titanium.UI.View;

				/**
				 * The section index of the ListView to identify the selected section.
				 * Note: This property is only available if the preview context is assigned to a <Titanium.UI.ListView>.
				 */
				sectionIndex: number;

			}
			/**
			 * Fired when the user pop the preview. You will most likely open a fullscreen window here.
			 */
			interface PreviewContext_pop_Event extends PreviewContextBaseEvent {
				/**
				 * The item ID bound to the list item that generated the event.
				 */
				itemId: string;

				/**
				 * The item index of the ListView to identify the selected item.
				 * Note: This property is only available if the preview context is assigned to a <Titanium.UI.ListView>.
				 */
				itemIndex: number;

				/**
				 * The view to be previewed.
				 */
				preview: Titanium.UI.View;

				/**
				 * The section index of the ListView to identify the selected section.
				 * Note: This property is only available if the preview context is assigned to a <Titanium.UI.ListView>.
				 */
				sectionIndex: number;

			}
			interface PreviewContextEventMap extends ProxyEventMap {
				peek: PreviewContext_peek_Event;

				pop: PreviewContext_pop_Event;

			}
			/**
			 * A PreviewContext provides options to configure the iOS 9 3D-Touch "Peek and Pop" feature.
			 */
			class PreviewContext extends Titanium.Proxy {
				/**
				 * The preview actions and preview action groups.
				 */
				actions: Titanium.UI.iOS.PreviewAction[];

				/**
				 * The height of the preview.
				 */
				contentHeight: number;

				/**
				 * The preview view.
				 */
				preview: Titanium.UI.View;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof PreviewContextEventMap>(name: K, callback: (this: Titanium.UI.iOS.PreviewContext, event: PreviewContextEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof PreviewContextEventMap>(name: K, event?: PreviewContextEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof PreviewContextEventMap>(name: K, callback: (this: Titanium.UI.iOS.PreviewContext, event: PreviewContextEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
