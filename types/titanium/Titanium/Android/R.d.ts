declare namespace Titanium {
	namespace Android {
		/**
		 * The Titanium binding of the native Android `R` class, giving access to
		 * Android system-wide resources or application resources.
		 */
		interface R extends Titanium.Proxy {
			/**
			 * Animation resources. See
			 * [R.anim](https://developer.android.com/reference/android/R.anim.html)
			 * in the Android Developer Reference.
			 */
			readonly anim: any;

			/**
			 * Animator resources. See
			 * [R.animator](https://developer.android.com/reference/android/R.animator.html)
			 * in the Android Developer Reference.
			 */
			readonly animator: any;

			/**
			 * Array resources. See [R.array](https://developer.android.com/reference/android/R.array.html)
			 * in the Android Developer Reference.
			 */
			readonly array: any;

			/**
			 * Attribute resources. See
			 * [R.attr](https://developer.android.com/reference/android/R.attr.html)
			 * in the Android Developer Reference.
			 */
			readonly attr: any;

			/**
			 * Boolean resources. See
			 * [R.bool](https://developer.android.com/reference/android/R.bool.html)
			 * in the Android Developer Reference.
			 */
			readonly bool: any;

			/**
			 * Color resources. See
			 * [R.color](https://developer.android.com/reference/android/R.color.html)
			 * in the Android Developer Reference.
			 */
			readonly color: any;

			/**
			 * Dimension resources.  See
			 * [https://developer.android.com/reference/android/R.dimen.html](https://developer.android.com/reference/android/R.dimen.html)
			 * in the Android Developer Reference.
			 */
			readonly dimen: any;

			/**
			 * Drawable resources. See
			 * [R.drawable](https://developer.android.com/reference/android/R.drawable.html)
			 * in the Android Developer Reference.
			 */
			readonly drawable: any;

			/**
			 * Fraction resources. See
			 * [R.fraction](https://developer.android.com/reference/android/R.fraction.html)
			 * in the Android Developer Reference.
			 */
			readonly fraction: any;

			/**
			 * ID resources.  See
			 * [R.id](https://developer.android.com/reference/android/R.id.html)
			 * in the Android Developer Reference.
			 */
			readonly id: any;

			/**
			 * Integer resources. See
			 * [R.integer](https://developer.android.com/reference/android/R.integer.html)
			 * in the Android Developer Reference.
			 */
			readonly integer: any;

			/**
			 * Interpolator resources. See
			 * [R.fraction](https://developer.android.com/reference/android/R.interpolator.html)
			 * in the Android Developer Reference.
			 */
			readonly interpolator: any;

			/**
			 * Layout resources. See
			 * [R.layout](https://developer.android.com/reference/android/R.layout.html)
			 * in the Android Developer Reference.
			 */
			readonly layout: any;

			/**
			 * Menu resources. See
			 * [R.menu](https://developer.android.com/reference/android/R.menu.html)
			 * in the Android Developer Reference.
			 */
			readonly menu: any;

			/**
			 * Mipmap resources. See
			 * [R.mipmap](https://developer.android.com/reference/android/R.mipmap.html)
			 * in the Android Developer Reference.
			 */
			readonly mipmap: any;

			/**
			 * Plurals resources. See
			 * [R.plurals](https://developer.android.com/reference/android/R.plurals.html)
			 * in the Android Developer Reference.
			 */
			readonly plurals: any;

			/**
			 * Raw resources. See
			 * [R.raw](https://developer.android.com/reference/android/R.raw.html)
			 * in the Android Developer Reference.
			 */
			readonly raw: any;

			/**
			 * String resources. See
			 * [R.string](https://developer.android.com/reference/android/R.string.html)
			 * in the Android Developer Reference.
			 */
			readonly string: any;

			/**
			 * Style resources. See
			 * [R.style](https://developer.android.com/reference/android/R.style.html)
			 * in the Android Developer Reference.
			 */
			readonly style: any;

			/**
			 * Styleable resources. See
			 * [R.styleable](https://developer.android.com/reference/android/R.styleable.html)
			 * in the Android Developer Reference.
			 */
			readonly styleable: any;

			/**
			 * Transition resources. See
			 * [R.transition](https://developer.android.com/reference/android/R.transition.html)
			 * in the Android Developer Reference.
			 */
			readonly transition: any;

			/**
			 * XML resources. See
			 * [R.xml](https://developer.android.com/reference/android/R.xml.html)
			 * in the Android Developer Reference.
			 */
			readonly xml: any;

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
