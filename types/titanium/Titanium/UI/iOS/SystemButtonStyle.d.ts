declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the system button styles that can be used for the button `style` property.
			 */
			namespace SystemButtonStyle {
				/**
				 * A simple button style with a border.
				 * @deprecated Use the <Titanium.UI.BUTTON_STYLE_OPTION_NEUTRAL> instead.
				 */
				const BORDERED: number;

				/**
				 * The style for a **Done** button--for example, a button that completes some task and returns
				 * to the previous view.
				 * @deprecated Use the <Titanium.UI.BUTTON_STYLE_OPTION_POSITIVE> instead.
				 */
				const DONE: number;

				/**
				 * Specifies a borderless button, the default style for toolbars, button bars, and tabbed bars.
				 * @deprecated Use the <Titanium.UI.BUTTON_STYLE_OPTION_NEUTRAL> instead.
				 */
				const PLAIN: number;

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
