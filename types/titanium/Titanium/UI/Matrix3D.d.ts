declare namespace Titanium {
	namespace UI {
		/**
		 * The 3D Matrix is an object for holding values for a 3D affine transform.
		 */
		class Matrix3D extends Titanium.Proxy {
			/**
			 * The entry at position [1,1] in the matrix.
			 */
			m11: number;

			/**
			 * The entry at position [1,2] in the matrix.
			 */
			m12: number;

			/**
			 * The entry at position [1,3] in the matrix.
			 */
			m13: number;

			/**
			 * The entry at position [1,4] in the matrix.
			 */
			m14: number;

			/**
			 * The entry at position [2,1] in the matrix.
			 */
			m21: number;

			/**
			 * The entry at position [2,2] in the matrix.
			 */
			m22: number;

			/**
			 * The entry at position [2,3] in the matrix.
			 */
			m23: number;

			/**
			 * The entry at position [2,4] in the matrix.
			 */
			m24: number;

			/**
			 * The entry at position [3,1] in the matrix.
			 */
			m31: number;

			/**
			 * The entry at position [3,2] in the matrix.
			 */
			m32: number;

			/**
			 * The entry at position [3,3] in the matrix.
			 */
			m33: number;

			/**
			 * The entry at position [3,4] in the matrix.
			 */
			m34: number;

			/**
			 * The entry at position [4,1] in the matrix.
			 */
			m41: number;

			/**
			 * The entry at position [4,2] in the matrix.
			 */
			m42: number;

			/**
			 * The entry at position [4,3] in the matrix.
			 */
			m43: number;

			/**
			 * The entry at position [4,4] in the matrix.
			 */
			m44: number;

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
			invert(): Titanium.UI.Matrix3D;

			/**
			 * Returns a matrix constructed by combining two existing matrix.
			 */
			multiply(t2: Titanium.UI.Matrix3D): Titanium.UI.Matrix3D;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Returns a matrix constructed by rotating this matrix.
			 */
			rotate(angle: number, x: number, y: number, z: number): Titanium.UI.Matrix3D;

			/**
			 * Returns a matrix constructed by scaling this matrix.
			 */
			scale(sx: number, sy: number, sz: number): Titanium.UI.Matrix3D;

			/**
			 * Returns a matrix constructed by translating an existing matrix.
			 */
			translate(tx: number, ty: number, tz: number): Titanium.UI.Matrix3D;

		}
	}
}
/**
 * Simple object passed to <Titanium.UI.createMatrix3D> to initialize a matrix.
 */
interface Matrix3DCreationDict {
	/**
	 * Scale the matrix by the specified scaling factor.
	 */
	scale?: number;

}
