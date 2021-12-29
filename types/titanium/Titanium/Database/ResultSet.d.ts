declare namespace Titanium {
	namespace Database {
		/**
		 * The ResultSet instance returned by <Titanium.Database.DB.execute>.
		 */
		class ResultSet extends Titanium.Proxy {
			/**
			 * The number of columns in this result set.
			 */
			readonly fieldCount: number;

			/**
			 * The number of rows in this result set.
			 */
			readonly rowCount: number;

			/**
			 * Indicates whether the current row is valid.
			 */
			readonly validRow: boolean;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Closes this result set and release resources. Once closed, the result set must no longer
			 * be used.
			 */
			close(): void;

			/**
			 * Retrieves the value for the specified field in the current row,
			 * and casts it to the specified type (String, Integer, Float or Double.)
			 */
			field(index: number, type?: number): string | number | Titanium.Blob;

			/**
			 * Retrieves the value for the specified field in the current row,
			 * and casts it to the specified type (String, Integer, Float or Double.)
			 */
			fieldByName(name: string, type?: number): string | number | Titanium.Blob;

			/**
			 * Returns the field name for the specified field index.
			 */
			fieldName(index: number): string;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Returns the field name for the specified field index.
			 */
			getFieldName(index: number): string;

			/**
			 * Returns whether the current row is valid.
			 */
			isValidRow(): boolean;

			/**
			 * Advances to the next row in the result set and returns `true` if one exists,
			 * or `false` otherwise.
			 */
			next(): boolean;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
