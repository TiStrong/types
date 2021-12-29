/**
 * Dictionary object of parameters for horizontal-only insets applied to [Table](Titanium.UI.TableView) and [List](Titanium.UI.ListView) views. Only `left` and `right` properties are used (see <Padding>).
 */
interface HorizontalInsets {
	/**
	 * Left padding/inset
	 */
	left?: number;

	/**
	 * Right padding/inset
	 */
	right?: number;

}
/**
 * Dictionary object of parameters for the padding/insets applied to all kinds of views.
 */
interface Padding extends HorizontalInsets {
	/**
	 * Bottom padding/inset
	 */
	bottom?: number;

	/**
	 * Top padding/inset
	 */
	top?: number;

}
