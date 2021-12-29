/// <reference path="./Popover.d.ts" />
declare namespace Titanium {
	namespace UI {
		/**
		 * iPad specific UI capabilities.
		 */
		namespace iPad {
			/**
			 * An arrow that points in any direction.
			 */
			const POPOVER_ARROW_DIRECTION_ANY: number;

			/**
			 * An arrow that points downward.
			 */
			const POPOVER_ARROW_DIRECTION_DOWN: number;

			/**
			 * An arrow that points toward the left.
			 */
			const POPOVER_ARROW_DIRECTION_LEFT: number;

			/**
			 * An arrow that points toward the right.
			 */
			const POPOVER_ARROW_DIRECTION_RIGHT: number;

			/**
			 * The status of the arrow is currently unknown.
			 */
			const POPOVER_ARROW_DIRECTION_UNKNOWN: number;

			/**
			 * An arrow that points upward.
			 */
			const POPOVER_ARROW_DIRECTION_UP: number;

		}
		/**
		 * iPad specific UI capabilities.
		 */
		class iPad extends Titanium.Module {
			/**
			 * The name of the API that this proxy corresponds to.
			 */
			static readonly apiName: string;

			/**
			 * Indicates if the proxy will bubble an event to its parent.
			 */
			static bubbleParent: boolean;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Applies the properties to the proxy.
			 */
			static applyProperties(props: any): void;

			/**
			 * Creates and returns an instance of <Titanium.UI.iPad.Popover>.
			 */
			static createPopover(parameters?: Dictionary<Titanium.UI.iPad.Popover>): Titanium.UI.iPad.Popover;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
