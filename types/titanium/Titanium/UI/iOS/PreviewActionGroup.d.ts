declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A PreviewActionGroup provides options to configure a group of actions used by the iOS9 3D-Touch
			 * feature "Peek and Pop".
			 */
			class PreviewActionGroup extends Titanium.Proxy {
				/**
				 * The preview actions assigned to this preview action group.
				 */
				actions: Titanium.UI.iOS.PreviewAction[];

				/**
				 * The style of the action group.
				 */
				style: number;

				/**
				 * The title of the action group.
				 */
				title: string;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
