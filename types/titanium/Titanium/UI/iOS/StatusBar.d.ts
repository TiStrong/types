declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A set of constants for the status bar style.
			 */
			namespace StatusBar {
				/**
				 * Fade animation style, when the status bar is hidden or shown.
				 */
				const ANIMATION_STYLE_FADE: number;

				/**
				 * No animation style, when the status bar is hidden or shown.
				 */
				const ANIMATION_STYLE_NONE: number;

				/**
				 * Slide animation style, when the status bar is hidden or shown.
				 */
				const ANIMATION_STYLE_SLIDE: number;

				/**
				 * Status bar style to use with light backgrounds.
				 */
				const DARK_CONTENT: number;

				/**
				 * Default status bar style.
				 */
				const DEFAULT: number;

				/**
				 * Gray-colored status bar style.
				 * @deprecated Use [Titanium.UI.iOS.StatusBar.DEFAULT](Titanium.UI.iOS.StatusBar.DEFAULT) instead.
				 */
				const GRAY: number;

				/**
				 * Gray-colored status bar style.
				 * @deprecated Use [Titanium.UI.iOS.StatusBar.DEFAULT](Titanium.UI.iOS.StatusBar.DEFAULT) instead.
				 */
				const GREY: number;

				/**
				 * Status bar style to use with dark backgrounds.
				 */
				const LIGHT_CONTENT: number;

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
