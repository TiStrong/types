declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Base event for class Titanium.UI.iOS.DocumentViewer
			 */
			interface DocumentViewerBaseEvent extends Ti.Event {
				/**
				 * Source object that fired the event.
				 */
				source: Titanium.UI.iOS.DocumentViewer;

			}
			/**
			 * Fires when the document is previewed.
			 */
			interface DocumentViewer_load_Event extends DocumentViewerBaseEvent {
			}
			/**
			 * Fires when the options menu appears before the document is previewed.
			 */
			interface DocumentViewer_menu_Event extends DocumentViewerBaseEvent {
			}
			/**
			 * Fires when the document is dismissed.
			 */
			interface DocumentViewer_unload_Event extends DocumentViewerBaseEvent {
			}
			interface DocumentViewerEventMap extends ProxyEventMap {
				load: DocumentViewer_load_Event;

				menu: DocumentViewer_menu_Event;

				unload: DocumentViewer_unload_Event;

			}
			/**
			 * A DocumentViewer provides in-app support for managing user interactions with files on the
			 * local system.
			 */
			class DocumentViewer extends Titanium.Proxy {
				/**
				 * Custom property list information for the target file.
				 */
				annotation: any;

				/**
				 * Name of the file (without the path).
				 */
				readonly name: string;

				/**
				 * URL of the document being previewed.
				 */
				url: string;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener<K extends keyof DocumentViewerEventMap>(name: K, callback: (this: Titanium.UI.iOS.DocumentViewer, event: DocumentViewerEventMap[K]) => void): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent<K extends keyof DocumentViewerEventMap>(name: K, event?: DocumentViewerEventMap[K]): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Dismisses the document viewer.
				 */
				hide(options?: DocumentViewerOptions): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener<K extends keyof DocumentViewerEventMap>(name: K, callback: (this: Titanium.UI.iOS.DocumentViewer, event: DocumentViewerEventMap[K]) => void): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Displays the document viewer over the current view.
				 */
				show(options?: DocumentViewerOptions): void;

			}
		}
	}
}
/**
 * A simple object for specifying options when showing or dismissing a <Titanium.UI.iOS.DocumentViewer>.
 */
interface DocumentViewerOptions {
	/**
	 * Indicates whether to animate the transition.
	 */
	animated?: boolean;

	/**
	 * Anchors the options menu to the specified view.
	 */
	view?: Titanium.UI.View;

}
