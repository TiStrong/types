declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A button bar that maintains a selected state.
			 * @deprecated Use [Titanium.UI.TabbedBar](Titanium.UI.TabbedBar) instead.
			 */
			const TabbedBar: never;
		}
	}
}
/**
 * Object describing a button bar or tabbed bar item.
 */
interface BarItemType {
	/**
	 * A succint label associated with the bar item for the device's accessibility service.
	 */
	accessibilityLabel?: string;

	/**
	 * Whether the button is enabled initially.
	 */
	enabled?: boolean;

	/**
	 * Button icon. If specified, takes precedence over `title`.
	 */
	image?: string | Titanium.Blob | Titanium.Filesystem.File;

	/**
	 * Button title, used if no `image` is specified.
	 */
	title?: string;

	/**
	 * Width for this button.
	 */
	width?: number;

}
