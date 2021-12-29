declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the position value that can be used for the `position` property of
			 * <ListViewAnimationProperties> when invoking the ListView's `scrollToItem`, `appendSection`,
			 * `deleteSectionAt`, `insertSectionAt` and `replaceSectionAt` methods.
			 */
			namespace ListViewScrollPosition {
				/**
				 * The list view scrolls the row of interest to the bottom of the visible list view.
				 */
				const BOTTOM: number;

				/**
				 * The list view scrolls the row of interest to the middle of the list table view.
				 */
				const MIDDLE: number;

				/**
				 * The table view scrolls the row of interest to be fully visible with a minimal movement.
				 * If the row is already fully visible, no scrolling occurs. For example, if the row is above the
				 * visible area, the behavior is identical to that specified by `TOP`. This is the default.
				 */
				const NONE: number;

				/**
				 * The list view scrolls the row of interest to the top of the visible list view.
				 */
				const TOP: number;

			}
		}
	}
}
