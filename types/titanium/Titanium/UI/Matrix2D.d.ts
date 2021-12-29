declare namespace Titanium {
	namespace UI {
		/**
		 * The 2D Matrix is an object for holding values for an affine transformation matrix.
		 */
		class Matrix2D extends Titanium.Proxy {
			/**
			 * The entry at position [1,1] in the matrix.
			 */
			a: number;

			/**
			 * The entry at position [1,2] in the matrix.
			 */
			b: number;

			/**
			 * The entry at position [2,1] in the matrix.
			 */
			c: number;

			/**
			 * The entry at position [2,2] in the matrix.
			 */
			d: number;

			/**
			 * The entry at position [3,1] in the matrix.
			 */
			tx: number;

			/**
			 * The entry at position [3,2] in the matrix.
			 */
			ty: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Returns a matrix constructed by inverting this matrix.
			 */
			invert(): Titanium.UI.Matrix2D;

			/**
			 * Returns a matrix constructed by combining two existing matrices.
			 */
			multiply(t2: Titanium.UI.Matrix2D): Titanium.UI.Matrix2D;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Returns a matrix constructed by rotating this matrix.
			 */
			rotate(angle: number, toAngle?: number): Titanium.UI.Matrix2D;

			/**
			 * Returns a `Matrix2D` object that specifies a scaling animation from one scale to another.
			 */
			scale(sx: number, sy: number, toSx?: number, toSy?: number): Titanium.UI.Matrix2D;

			/**
			 * Returns a matrix constructed by applying a translation transform to this matrix.
			 */
			translate(tx: number, ty: number): Titanium.UI.Matrix2D;

		}
	}
}
/**
 * Simple object passed to <Titanium.UI.createMatrix2D> to initialize a matrix.
 */
interface Matrix2DCreationDict {
	/**
	 * Point to rotate around, specified as a dictionary object with `x` and `y`
	 * properties, where { x: 0.5, y: 0.5 } represents the center of whatever is being
	 * rotated.
	 */
	anchorPoint?: Point;

	/**
	 * Rotation angle, in degrees. See the [rotate](Titanium.UI.Matrix2D.rotate) method
	 * for a discussion of rotation.
	 */
	rotate?: number;

	/**
	 * Scale the matrix by the specified scaling factor. The same scaling factor is used
	 * for both horizontal and vertical scaling.
	 */
	scale?: number;

}
