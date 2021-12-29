declare namespace Titanium {
	namespace UI {
		/**
		 * A list item is an individual item in a list section.
		 */
		class ListItem extends Titanium.Proxy {
			/**
			 * Sets an accessory on the right side of an item.
			 */
			accessoryType: number;

			/**
			 * Background color of the view, as a color name or hex triplet.
			 */
			backgroundColor: string | Titanium.UI.Color;

			/**
			 * Background gradient to render when the item is not selected.
			 */
			backgroundGradient: Gradient;

			/**
			 * Background image to render when the item is not selected.
			 */
			backgroundImage: string;

			/**
			 * Background color of the view, as a color name or hex triplet when item is selected.
			 */
			backgroundSelectedColor: string | Titanium.UI.Color;

			/**
			 * Background gradient to render when the item is selected.
			 */
			backgroundSelectedGradient: Gradient;

			/**
			 * Background image to render when the item is selected.
			 */
			backgroundSelectedImage: string;

			/**
			 * Indicates if the proxy will bubble an event to its parent.
			 */
			bubbleParent: never;

			/**
			 * Specifies if the item can be deleted by a user initiated action.
			 */
			canEdit: boolean;

			/**
			 * Specifies if the item can be inserted by a user initiated action.
			 */
			canInsert: boolean;

			/**
			 * Specifies if the item can be reordered within the list view by a user initiated action.
			 */
			canMove: boolean;

			/**
			 * Default text color of the item when not selected, as a color name or hex triplet.
			 */
			color: string | Titanium.UI.Color;

			/**
			 * Specifies custom action items to be shown when when a list item is edited.
			 */
			editActions: RowActionType[];

			/**
			 * Font to use for the item title.
			 */
			font: Font;

			/**
			 * Row height in platform-specific units.
			 */
			height: number | string;

			/**
			 * Image to render in the image area of the item, specified as a local path or URL.
			 */
			image: string;

			/**
			 * A user defined string that gets passed to events.
			 */
			itemId: string;

			/**
			 * The text to match against when the [ListView](Titanium.UI.ListView) is performing a search.
			 */
			searchableText: string;

			/**
			 * Background color of the view, as a color name or hex triplet when item is selected.
			 * @deprecated This property has been deprecated in favor of <Titanium.UI.ListItem.backgroundSelectedColor>.
			 */
			selectedBackgroundColor: string | Titanium.UI.Color;

			/**
			 * Background gradient to render when the item is selected.
			 * @deprecated This property has been deprecated in favor of <Titanium.UI.ListItem.backgroundSelectedGradient>.
			 */
			selectedBackgroundGradient: Gradient;

			/**
			 * Background image to render when the item is selected.
			 * @deprecated This property has been deprecated in favor of <Titanium.UI.ListItem.backgroundSelectedImage>.
			 */
			selectedBackgroundImage: string;

			/**
			 * Color to use for the item title when the item is selected, as a color name or hex triplet.
			 */
			selectedColor: string | Titanium.UI.Color;

			/**
			 * Color to use for the item subtitle when the item is selected, as a color name or hex triplet.
			 */
			selectedSubtitleColor: string | Titanium.UI.Color;

			/**
			 * Selection style constant to control the selection color.
			 */
			selectionStyle: number;

			/**
			 * Subtitle to set in the text area of the item.
			 */
			subtitle: string;

			/**
			 * Default text color of the subtitle, as a color name or hex triplet.
			 */
			subtitleColor: string | Titanium.UI.Color;

			/**
			 * Title to set in the text area of the item.
			 */
			title: string;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener: never;

			/**
			 * Applies the properties to the proxy.
			 */
			applyProperties: never;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent: never;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener: never;

		}
	}
}
/**
 * Template that represents the basic appearance of a list item.
 */
interface ItemTemplate {
	/**
	 * Contains an array of subview templates to be added (in order) as children to this view.
	 */
	childTemplates?: ViewTemplate[];

	/**
	 * Contains key-value pairs of view events and their listeners that are applied to the ListItem.
	 */
	events?: any;

	/**
	 * Contains key-value pairs of view properties and their values that are applied to the ListItem.
	 */
	properties?: Dictionary<Titanium.UI.ListItem>;

}
/**
 * Represents displayed item data.
 */
interface ListDataItem {
	/**
	 * Contains key-value pairs of view properties and their values that are applied to the
	 * `ListItem`.
	 */
	properties?: Dictionary<Titanium.UI.ListItem>;

	/**
	 * Template ID configured with the <Titanium.UI.ListView.templates> property or
	 * <Titanium.UI.LIST_ITEM_TEMPLATE_DEFAULT>.
	 */
	template?: string | number;

	[index: string]: any;
}
/**
 * Represents the custom edit action for a ListItem.
 */
interface RowActionType {
	/**
	 * The background color of the row action.
	 */
	color?: string;

	/**
	 * The [identifier](RowActionType. identifier) of the row action. Only included in the event
	 * if previously defined. Available in Titanium 6.0.0 and later.
	 */
	identifier?: string;

	/**
	 * The style of the row action.
	 */
	style: number;

	/**
	 * The title of the row action.
	 */
	title: string;

}
/**
 * Template that represents a view subcomponent of an <ItemTemplate>.
 */
interface ViewTemplate {
	/**
	 * View's ID (or set of IDs) used for data binding. This value must be unique.
	 */
	bindId?: string;

	/**
	 * Contains an array of subview templates to be added (in order) as children to this view.
	 */
	childTemplates?: ViewTemplate[];

	/**
	 * Contains key-value pairs of view events and their listeners that are applied to this view component.
	 */
	events?: any;

	/**
	 * Contains key-value pairs of view properties and their values that are applied to this view component.
	 */
	properties?: any;

	/**
	 * View's class name, for example, `Ti.UI.Button`.
	 */
	type: string;

}
