/**
 * A simple object consisting of the position and size measurements. Effectively combines <Size> and <Point> but ensures numeric x/y values.
 */
interface Dimension extends Size {
	/**
	 * The x-axis coordinate of the position. When returned by <Titanium.UI.View.rect> the position is relative to it's parent.
	 */
	x?: number;

	/**
	 * The y-axis coordinate of the position. When returned by <Titanium.UI.View.rect> the position is relative to it's parent.
	 */
	y?: number;

}
/**
 * An extension of <Dimension> where Android returns additional absolute X/Y values/properties for <Titanium.UI.View.rect>
 */
interface DimensionWithAbsolutes extends Dimension {
	/**
	 * The x-axis coordinate of the position relative to the main window.
	 */
	absoluteX?: number;

	/**
	 * The y-axis coordinate of the position relative to the main window.
	 */
	absoluteY?: number;

}
