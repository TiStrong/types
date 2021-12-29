/**
 * Simple object passed to <Titanium.UI.create2DMatrix> to initialize a matrix.
 */
interface MatrixCreationDict {
	/**
	 * Point to rotate around, specified as a dictionary object with `x` and `y`
	 * properties, where { x: 0.5, y: 0.5 } represents the center of whatever is being
	 * rotated.
	 */
	anchorPoint?: Point;

	/**
	 * Rotation angle, in degrees. See the [rotate](Titanium.UI.2DMatrix.rotate) method
	 * for a discussion of rotation.
	 */
	rotate?: number;

	/**
	 * Scale the matrix by the specified scaling factor. The same scaling factor is used
	 * for both horizontal and vertical scaling.
	 */
	scale?: number;

}
