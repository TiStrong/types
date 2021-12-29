declare namespace Titanium {
	namespace UI {
		/**
		 * A table view section is a container within a table used to organize table view rows.
		 */
		class TableViewSection extends Titanium.Proxy {
			/**
			 * Title of this section footer.
			 */
			footerTitle: string;

			/**
			 * View to use for this section footer.
			 */
			footerView: Titanium.UI.View;

			/**
			 * Title of this section header.
			 */
			headerTitle: string;

			/**
			 * View to use for this section header.
			 */
			headerView: Titanium.UI.View;

			/**
			 * Number of rows in this section.
			 */
			readonly rowCount: number;

			/**
			 * Rows in this section.
			 */
			readonly rows: Titanium.UI.TableViewRow[];

			/**
			 * Adds a table view row to this section.
			 */
			add(row: Titanium.UI.TableViewRow): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes a table view row from this section.
			 */
			remove(row: Titanium.UI.TableViewRow): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Returns a row in this section.
			 */
			rowAtIndex(index: number): Titanium.UI.TableViewRow;

		}
	}
}
