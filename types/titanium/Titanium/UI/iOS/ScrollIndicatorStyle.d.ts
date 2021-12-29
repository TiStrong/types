declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the styles available for scrollbars used with <Titanium.UI.ScrollView.scrollIndicatorStyle> and <Titanium.UI.TableView.scrollIndicatorStyle> properties.
			 */
			namespace ScrollIndicatorStyle {
				/**
				 * A style of indicator which is black smaller than the default style. This style is good
				 * against a white content background.
				 */
				const BLACK: number;

				/**
				 * The default style of scroll indicator, which is black with a white border. This style is
				 * good against any content background.
				 */
				const DEFAULT: number;

				/**
				 * A style of indicator is white and smaller than the default style. This style is good against
				 * a black content background.
				 */
				const WHITE: number;

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
