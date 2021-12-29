declare namespace Titanium {
	namespace UI {
		namespace iOS {
			/**
			 * The Home screen quick actions API is for adding shortcuts to your app icon that anticipate and accelerate a
			 * user's interaction with your app.
			 * @deprecated Use [Titanium.UI.Shortcut](Titanium.UI.Shortcut) instead.
			 */
			class ApplicationShortcuts extends Titanium.Proxy {
				/**
				 * Creates a new dynamic application shortcut item.
				 */
				addDynamicShortcut(params: ShortcutParams): void;

				/**
				 * Adds the specified callback as an event listener for the named event.
				 */
				addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

				/**
				 * Returns true or false depending if the provided shortcut object already exists.
				 */
				dynamicShortcutExists(identifier: string): boolean;

				/**
				 * Fires a synthesized event to any registered listeners.
				 */
				fireEvent(name: string, event?: any): void;

				/**
				 * Gets the dynamic application shortcut item identified by the `identifier`.
				 */
				getDynamicShortcut(identifier: string): ShortcutParams;

				/**
				 * Returns an array of the application shortcuts created dynamically.
				 */
				listDynamicShortcuts(): ShortcutParams[];

				/**
				 * Returns an array of the application shortcuts listed in your tiapp.xml file.
				 */
				listStaticShortcuts(): ShortcutParams[];

				/**
				 * Removes all dynamically created application shortcuts.
				 */
				removeAllDynamicShortcuts(): void;

				/**
				 * Removes the dynamic application shortcut item identified by the `identifier`.
				 */
				removeDynamicShortcut(identifier: string): void;

				/**
				 * Removes the specified callback as an event listener for the named event.
				 */
				removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			}
		}
	}
}
/**
 * Object of options for <Titanium.UI.iOS.ApplicationShortcuts.addDynamicShortcut>.
 */
interface ShortcutParams {
	/**
	 * The icon to be displayed on the application shortcut. You can either use one of the constants like
	 * <Titanium.UI.iOS.SHORTCUT_ICON_TYPE_COMPOSE>, a local image specified by the image path or a reference to a
	 * <Titanium.Contacts.Person>.
	 */
	icon?: number | string | Titanium.Contacts.Person;

	/**
	 * The unique key for the application shortcut. Equates to the underlying `UIApplicationShortcutItemIconType` key
	 */
	identifier: string;

	/**
	 * The subtitle displayed on the application shortcut.
	 */
	subtitle?: string;

	/**
	 * The title of the application shortcut.
	 */
	title: string;

	/**
	 * The userInfo of the application shortcut.
	 */
	userInfo?: any;

}
