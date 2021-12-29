declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * A collection of properties used to initialize a web view.
			 */
			class WebViewConfiguration extends Titanium.Proxy {
				/**
				 * A Boolean value indicating whether AirPlay is allowed.
				 */
				allowsAirPlayMediaPlayback: boolean;

				/**
				 * A Boolean value indicating whether HTML5 videos play inline or use the native full-screen controller.
				 */
				allowsInlineMediaPlayback: boolean;

				/**
				 * A Boolean value indicating whether HTML5 videos can play picture-in-picture.
				 */
				allowsPictureInPictureMediaPlayback: boolean;

				/**
				 * Determines which media types require a user gesture to begin playing.
				 */
				mediaTypesRequiringUserActionForPlayback: number;

				/**
				 * The preference settings to be used by the web view.
				 */
				preferences: WebViewPreferencesObject;

				/**
				 * The process pool from which to obtain the  Web Content process of view.
				 */
				processPool: Titanium.UI.iOS.WebViewProcessPool;

				/**
				 * The level of granularity with which the user can interactively select content in the web view.
				 */
				selectionGranularity: number;

				/**
				 * A Boolean value indicating whether the web view suppresses content rendering until it is fully
				 * loaded into memory.
				 */
				suppressesIncrementalRendering: boolean;

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
}
/**
 * The parameter passed to the <Titanium.UI.iOS.WebViewConfiguration.preferences> method.
 */
interface WebViewPreferencesObject {
	/**
	 * A Boolean value indicating whether JavaScript can open windows without user interaction.
	 */
	javaScriptCanOpenWindowsAutomatically?: boolean;

	/**
	 * A Boolean value indicating whether JavaScript is enabled.
	 */
	javaScriptEnabled?: boolean;

	/**
	 * The minimum font size in points.
	 */
	minimumFontSize?: number;

}
