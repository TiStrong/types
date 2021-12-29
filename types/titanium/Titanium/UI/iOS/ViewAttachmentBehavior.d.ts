declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * Dynamic behavior to support connections between two items.
			 */
			class ViewAttachmentBehavior extends Titanium.Proxy {
				/**
				 * Item to use as the anchor in this behavior.
				 */
				anchorItem: Titanium.UI.View;

				/**
				 * Offset from the center point of the anchor item for the attachment.
				 */
				anchorOffset: Point;

				/**
				 * Amount of damping to apply to the attachment behavior.
				 */
				damping: number;

				/**
				 * Distance, in points, between the two attachment points.
				 */
				distance: number;

				/**
				 * Frequency of oscillation for the behavior.
				 */
				frequency: number;

				/**
				 * Item to connect to use the attachment behavior.
				 */
				item: Titanium.UI.View;

				/**
				 * Offset from the center point of the item for the attachment.
				 */
				itemOffset: Point;

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
