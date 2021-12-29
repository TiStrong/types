declare namespace Titanium {
	namespace UI {
		/**
		 * A list section is a container within a list view used to organize list items.
		 */
		class ListSection extends Titanium.Proxy {
			/**
			 * Indicates if the proxy will bubble an event to its parent.
			 */
			bubbleParent: never;

			/**
			 * Returns the item count of the section, also incorporating the search filter if active.
			 */
			readonly filteredItemCount: number;

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
			 * Returns the item count of the section.
			 */
			readonly itemCount: number;

			/**
			 * Items of this list section.
			 */
			items: ListDataItem[];

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener: never;

			/**
			 * Appends the data entries to the end of the list section.
			 */
			appendItems(dataItems: ReadonlyArray<ListDataItem>, animation?: ListViewAnimationProperties): void;

			/**
			 * Removes count entries from the list section at the specified index.
			 */
			deleteItemsAt(itemIndex: number, count: number, animation?: ListViewAnimationProperties): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent: never;

			/**
			 * Returns the item entry from the list view at the specified index.
			 */
			getItemAt(itemIndex: number): ListDataItem;

			/**
			 * Inserts data entries to the list section at the specified index.
			 */
			insertItemsAt(itemIndex: number, dataItems: ReadonlyArray<ListDataItem>, animation?: ListViewAnimationProperties): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener: never;

			/**
			 * Removes count entries from the list section at the specified index,
			 * then inserts data entries to the list section at the same index.
			 */
			replaceItemsAt(index: number, count: number, dataItems: ReadonlyArray<ListDataItem>, animation?: ListViewAnimationProperties): void;

			/**
			 * Sets the data entries in the list section.
			 */
			setItems(dataItems: ReadonlyArray<ListDataItem>, animation?: ListViewAnimationProperties): void;

			/**
			 * Updates an item at the specified index.
			 */
			updateItemAt(index: number, dataItem: ListDataItem, animation?: ListViewAnimationProperties): void;

		}
	}
}
