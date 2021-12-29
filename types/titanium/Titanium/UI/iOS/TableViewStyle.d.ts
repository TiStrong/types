declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the style that can be used for the `style` property of
			 * <Titanium.UI.TableView> and <Titanium.UI.ListView>.
			 */
			namespace TableViewStyle {
				/**
				 * A table view whose sections present distinct groups of rows. The section headers and footers
				 * do not float.
				 */
				const GROUPED: number;

				/**
				 * A table view whose sections present distinct groups of rows  and grouped sections are inset with rounded corners.
				 * The section headers and footers do not float.
				 */
				const INSET_GROUPED: number;

				/**
				 * A plain table view. Any section headers or footers are displayed as inline separators and
				 * float when the table view is scrolled.
				 */
				const PLAIN: number;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				function addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				function fireEvent(name: string, event?: any): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				function removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
