/**
 * A JavaScript object holding an `animated` property. Used for many UI methods as a means of specifying some transition should be animated.
 */
interface AnimatedOptions {
	/**
	 * If `true`, animate a transition for the method/value change.
	 * Note that for most uses cases the default is assumed to be `false`. The exceptions tend to be <Titanium.UI.Window> methods.
	 */
	animated?: boolean;

}
/**
 * A JavaScript object holding `animated` and `duration` properties. Used on iOS For [TablewView](Titanium.UI.TableView) and [ListView](Titanium.UI.ListView) content offset transitions.
 */
interface AnimatedWithDurationOptions extends AnimatedOptions {
	/**
	 * The duration in `milliseconds` for animation
	 */
	duration?: number;

}
