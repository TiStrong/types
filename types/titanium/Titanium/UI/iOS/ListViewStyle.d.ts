declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the style that can be used for the `style` property of
			 * <Titanium.UI.ListView>.
			 */
			namespace ListViewStyle {
				/**
				 * A list view whose sections present distinct groups of rows. The section headers and footers
				 * do not float.
				 */
				const GROUPED: number;

				/**
				 * A list view whose sections present distinct groups of rows  and grouped sections are inset with rounded corners.
				 * The section headers and footers do not float.
				 */
				const INSET_GROUPED: number;

				/**
				 * A plain list view. Any section headers or footers are displayed as inline separators and
				 * float when the list view is scrolled.
				 */
				const PLAIN: number;

			}
		}
	}
}
