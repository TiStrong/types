declare namespace Titanium {
	namespace Database {
		/**
		 * The `Database` instance returned by <Titanium.Database.open> or <Titanium.Database.install>.
		 */
		class DB extends Titanium.Proxy {
			/**
			 * A `File` object representing the file where this database is stored. Must only be used for
			 * setting file properties.
			 */
			readonly file: Titanium.Filesystem.File;

			/**
			 * The identifier of the last populated row.
			 */
			readonly lastInsertRowId: number;

			/**
			 * The name of the database.
			 */
			readonly name: string;

			/**
			 * The number of rows affected by the last query.
			 */
			readonly rowsAffected: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Closes the database and releases resources from memory. Once closed, this instance is no
			 * longer valid and should not be used. On iOS, also closes all <Titanium.Database.ResultSet>
			 * instances that exist.
			 */
			close(): void;

			/**
			 * Executes an SQL statement against the database and returns a `ResultSet`.
			 */
			execute(sql: string, ...vararg: string[]): Titanium.Database.ResultSet;

			/**
			 * Executes an SQL statement against the database and returns a `ResultSet`.
			 */
			execute(sql: string, vararg?: ReadonlyArray<string>): Titanium.Database.ResultSet;

			/**
			 * Executes an SQL statement against the database and returns a `ResultSet`.
			 */
			execute(sql: string, ...vararg: any[]): Titanium.Database.ResultSet;

			/**
			 * Executes an SQL statement against the database and returns a `ResultSet`.
			 */
			execute(sql: string, vararg?: ReadonlyArray<any>): Titanium.Database.ResultSet;

			/**
			 * Synchronously executes an array of SQL statements against the database and returns an array of `ResultSet`.
			 * On failure, this will throw an [Error](BatchQueryError) that reports the failed index and partial results
			 */
			executeAll(queries: ReadonlyArray<string>): Titanium.Database.ResultSet[];

			/**
			 * Asynchronously executes an array of SQL statements against the database and fires a callback with a possible Error, and an array of `ResultSet`.
			 * On failure, this will call the callback with an [Error](PossibleBatchQueryError) that reports the failed `index`, and a second argument with the partial `results`.
			 */
			executeAllAsync(queries: ReadonlyArray<string>, callback?: (param0: PossibleBatchQueryError, param1: Titanium.Database.ResultSet[]) => void): Promise<Titanium.Database.ResultSet[]>;

			/**
			 * Asynchronously executes an SQL statement against the database and fires a callback with a possible `Error` argument, and a second argument holding a possible `ResultSet`.
			 */
			executeAsync(query: string, vararg?: any, callback?: (param0: any, param1: Titanium.Database.ResultSet) => void): Promise<Titanium.Database.ResultSet>;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes the database files for this instance from disk. WARNING: this is a destructive
			 * operation and cannot be reversed. All data in the database will be lost; use with caution.
			 */
			remove(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
/**
 * Simple `Error` instance thrown from the
 * [executeAll](Titanium.Database.DB.executeAll) method in case of failure
 */
interface BatchQueryError {
	/**
	 * Index of the failed query
	 */
	index?: number;

	/**
	 * partial `ResultSet`s of any successful queries before the failure
	 */
	results?: Titanium.Database.ResultSet[];

}
/**
 * Simple `Error` argument provided to the callback from the
 * [executeAllAsync](Titanium.Database.DB.executeAllAsync) method in case of failure
 */
interface PossibleBatchQueryError {
	/**
	 * Index of the failed query
	 */
	index?: number;

}
