/// <reference path="./DB.d.ts" />
/// <reference path="./ResultSet.d.ts" />
declare namespace Titanium {
	/**
	 * The top-level `Database` module, used for creating and accessing the
	 * in-application SQLite database.
	 */
	namespace Database {
		/**
		 * Constant for requesting a column's value returned in double form.
		 */
		const FIELD_TYPE_DOUBLE: number;

		/**
		 * Constant for requesting a column's value returned in float form.
		 */
		const FIELD_TYPE_FLOAT: number;

		/**
		 * Constant for requesting a column's value returned in integer form.
		 */
		const FIELD_TYPE_INT: number;

		/**
		 * Constant for requesting a column's value returned in string form.
		 */
		const FIELD_TYPE_STRING: number;

	}
	/**
	 * The top-level `Database` module, used for creating and accessing the
	 * in-application SQLite database.
	 */
	class Database extends Titanium.Module {
		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

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
		static fireEvent(name: string, event?: any): void;

		/**
		 * Installs an SQLite database to device's internal storage.
		 */
		static install(path: string, dbName: string): Titanium.Database.DB;

		/**
		 * Opens an SQLite database.
		 */
		static open(dbName: string): Titanium.Database.DB;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

	}
}
