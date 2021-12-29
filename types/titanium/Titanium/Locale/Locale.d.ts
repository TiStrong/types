declare namespace Titanium {
	/**
	 * Base event for class Titanium.Locale
	 */
	interface LocaleBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.Locale;

	}
	/**
	 * Fired when the device locale changes.
	 */
	interface Locale_change_Event extends LocaleBaseEvent {
	}
	interface LocaleEventMap extends ProxyEventMap {
		change: Locale_change_Event;

	}
	/**
	 * The top level Locale module.
	 */
	class Locale extends Titanium.Module {
		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * Country of the current system locale, as an ISO 2-letter code.
		 */
		static readonly currentCountry: string;

		/**
		 * Language of the current system locale, as an ISO 2-letter code.
		 */
		static readonly currentLanguage: string;

		/**
		 * Current system locale, as a combination of ISO 2-letter language and country codes.
		 */
		static readonly currentLocale: string;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof LocaleEventMap>(name: K, callback: (this: Titanium.Locale, event: LocaleEventMap[K]) => void): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent<K extends keyof LocaleEventMap>(name: K, event?: LocaleEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Formats a telephone number according to the current system locale.
		 */
		static formatTelephoneNumber(number: string): string;

		/**
		 * Returns the ISO 3-letter currency code for the specified locale.
		 */
		static getCurrencyCode(locale: string): string;

		/**
		 * Returns the currency symbol for the specified currency code.
		 */
		static getCurrencySymbol(currencyCode: string): string;

		/**
		 * Returns the currency symbol for the specified locale.
		 */
		static getLocaleCurrencySymbol(locale: string): string;

		/**
		 * Returns a string, localized according to the current system locale using the appropriate
		 * `/i18n/LANG/strings.xml` localization file.
		 */
		static getString(key: string, hint?: string): string;

		/**
		 * Parses a number from the given string using the current or given locale.
		 */
		static parseDecimal(text: string, locale?: string): number;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof LocaleEventMap>(name: K, callback: (this: Titanium.Locale, event: LocaleEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Sets the current language of the application.
		 */
		static setLanguage(language: string): void;

	}
}
