// Type definitions for non-npm package @titanium-sdk/ti.map 4.5
// Project: https://github.com/appcelerator-modules/ti.map
// Definitions by: Sergey Volkov <https://github.com/drauggres>
// Definitions: https://github.com/TiStrong/types
// TypeScript Version: 3.0

/// <reference types="titanium" />

// to shut off automatic exporting
export {};

type _Omit<T, K extends keyof any | undefined> = Pick<T, Exclude<keyof T, K>>;
type FunctionPropertyNames<T> = {
	// tslint:disable-next-line:ban-types
	[K in keyof T]: T[K] extends Function ? K : never
}[keyof T];
type Dictionary<T> = Partial<_Omit<T, FunctionPropertyNames<Ti.Proxy>>>;
interface ProxyEventMap {}

/**
 * Simple object used to control camera animations.
 */
interface CameraAnimationParams {
	/**
	 * <Map.Camera> to be animated to.
	 */
	camera: Map.Annotation;

	/**
	 * Animation curve or easing function to apply to the animation.
	 */
	curve?: number;

	/**
	 * The amount of time (in milliseconds) that the animation will last.
	 */
	duration?: number;

}
/**
 * Simple object used to create cluster annotation view.
 */
interface ClusterAnnotationParams {
	/**
	 * <Map.Annotation> instance, which you want to show as clustered annotation. There is no
	 * need to provide latitude and longitude as clustered annotation decides its location itself.
	 */
	annotation?: Map.Annotation;

	/**
	 * Array of Map.Annotation, which is recieved in event 'clusteringstarted' as
	 * memberAnnotations.
	 */
	memberAnnotations?: Map.Annotation[];

}
/**
 * An object representing the bound coordinates on the map.
 */
interface MapBoundsCoordinateType {
	/**
	 * An object with longitude and latitude values.
	 */
	bottomRight?: MapPointType;

	/**
	 * An object with longitude and latitude values.
	 */
	topLeft?: MapPointType;

}
/**
 * Simple object used as an argument to [setLocation](Map.View.setLocation).
 */
interface MapLocationTypeV2 {
	/**
	 * Set to `true` to animate the move to the new location.
	 */
	animate?: boolean;

	/**
	 * Latitude value for the center point of the map, in decimal degrees.
	 */
	latitude?: number;

	/**
	 * The amount of north-to-south distance displayed on the map, measured in decimal degrees.
	 */
	latitudeDelta?: number;

	/**
	 * Longitude value for the center point of the map, in decimal degrees.
	 */
	longitude?: number;

	/**
	 * The amount of east-to-west distance displayed on the map, measured in decimal degrees.
	 */
	longitudeDelta?: number;

}
/**
 * An object representing a point on the map.
 */
interface MapPointType {
	/**
	 * Latitude value of the map point, in decimal degrees.
	 */
	latitude?: number;

	/**
	 * Longitude value of the map point, in decimal degrees.
	 */
	longitude?: number;

}
/**
 * Simple object representing a map location and zoom level.
 */
interface MapRegionTypev2 {
	/**
	 * The direction in which a vertical line on the map points, measured in degrees clockwise from north.
	 */
	bearing?: number;

	/**
	 * Latitude value for the center point of the map, in decimal degrees.
	 */
	latitude?: number;

	/**
	 * The amount of north-to-south distance displayed on the map, measured in decimal degrees.
	 */
	latitudeDelta?: number;

	/**
	 * Longitude value for the center point of the map, in decimal degrees.
	 */
	longitude?: number;

	/**
	 * The amount of east-to-west distance displayed on the map, measured in decimal degrees.
	 */
	longitudeDelta?: number;

	/**
	 * The camera's position on an arc between directly over the map's center position and the surface of the Earth, measured in degrees from the nadir.
	 */
	tilt?: number;

	/**
	 * The zoom level of the map.
	 */
	zoom?: number;

}
/**
 * The padding applied to the map view using <Map.View.padding>.
 */
interface MapViewPadding {
	/**
	 * Bottom padding of the map view.
	 */
	bottom?: number;

	/**
	 * Left padding of the map view.
	 */
	left?: number;

	/**
	 * Right padding of the map view.
	 */
	right?: number;

	/**
	 * Top padding of the map view.
	 */
	top?: number;

}

export = Map;

	/**
	 * Add-on Map module
	 */
declare namespace Map {
	/**
	 * Color constant used to set a map annotation to azure via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_AZURE: number;

	/**
	 * Color constant used to set a map annotation to blue via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_BLUE: number;

	/**
	 * Color constant used to set a map annotation to cyan via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_CYAN: number;

	/**
	 * Used in the [pinchangedragstate](Map.View.pinchangedragstate) event
	 * to indicate that the user finished moving the annotation.
	 */
	const ANNOTATION_DRAG_STATE_END: number;

	/**
	 * Used in the [pinchangedragstate](Map.View.pinchangedragstate) event
	 * to indicate that the user started dragging the annotation.
	 */
	const ANNOTATION_DRAG_STATE_START: number;

	/**
	 * Color constant used to set a map annotation to green via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_GREEN: number;

	/**
	 * Color constant used to set a map annotation to magenta via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_MAGENTA: number;

	/**
	 * Color constant used to set a map annotation to orange via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_ORANGE: number;

	/**
	 * Color constant used to set a map annotation to purple via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_PURPLE: number;

	/**
	 * Color constant used to set a map annotation to red via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_RED: number;

	/**
	 * Color constant used to set a map annotation to rose via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_ROSE: number;

	/**
	 * Constant indicating that a circle inscribed in the collision frame rectangle should
	 * be used to determine collisions.
	 */
	const ANNOTATION_VIEW_COLLISION_MODE_CIRCLE: number;

	/**
	 * Constant indicating that the full collision frame rectangle should be used for
	 * detecting collisions.
	 */
	const ANNOTATION_VIEW_COLLISION_MODE_RECTANGLE: number;

	/**
	 * Color constant used to set a map annotation to violet via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_VIOLET: number;

	/**
	 * Color constant used to set a map annotation to yellow via the
	 * <Map.Annotation.pincolor> property.
	 */
	const ANNOTATION_YELLOW: number;

	/**
	 * Constant indicating that the item's display priority is high.
	 */
	const FEATURE_DISPLAY_PRIORITY_DEFAULT_HIGH: number;

	/**
	 * Constant indicating that the item's display priority is low.
	 */
	const FEATURE_DISPLAY_PRIORITY_DEFAULT_LOW: number;

	/**
	 * Constant indicating that the item is required.
	 */
	const FEATURE_DISPLAY_PRIORITY_REQUIRED: number;

	/**
	 * Constant indicating that title text adapts to the current map state.
	 */
	const FEATURE_VISIBILITY_ADAPTIVE: number;

	/**
	 * Constant indicating that title text is always hidden.
	 */
	const FEATURE_VISIBILITY_HIDDEN: number;

	/**
	 * Constant indicating that title text is always visible.
	 */
	const FEATURE_VISIBILITY_VISIBLE: number;

	/**
	 * Used with [mapType](Map.View.mapType) to display a satellite flyover image of the area with road and road name information layered on top. Available in iOS 9.0 and later.
	 */
	const HYBRID_FLYOVER_TYPE: number;

	/**
	 * Used with [mapType](Map.View.mapType) to display a satellite image of the area with road and road name information layered on top.
	 */
	const HYBRID_TYPE: number;

	/**
	 * Used with [mapType](Map.View.mapType) to display a street map where your data is emphasized over
	 * the underlying map details. Available in iOS 11.0 and later. On Android it is mapped to `NORMAL_TYPE`.
	 */
	const MUTED_STANDARD_TYPE: number;

	/**
	 * Used with [mapType](Map.View.mapType) to display a street map that shows the position of all roads and some road names.
	 */
	const NORMAL_TYPE: number;

	/**
	 * Place the overlay above roadways but below map labels, shields, or point-of-interest icons. Available in iOS 7.0 and later.
	 */
	const OVERLAY_LEVEL_ABOVE_LABELS: number;

	/**
	 * Place the overlay above map labels, shields, or point-of-interest icons but below annotations and 3D projections of buildings.
	 * Available in iOS 7.0 and later.
	 */
	const OVERLAY_LEVEL_ABOVE_ROADS: number;

	/**
	 * Polyline type constant used to display a dashed polyline via <Map.Polyline.pattern> property.
	 */
	const POLYLINE_PATTERN_DASHED: number;

	/**
	 * Polyline type constant used to display a dotted polyline via <Map.Polyline.pattern> property.
	 */
	const POLYLINE_PATTERN_DOTTED: number;

	/**
	 * Used in the [regionwillchange](Map.View.regionwillchange) event. The animation was initiated in response to the user actions.
	 */
	const REASON_API_ANIMATION: number;

	/**
	 * Used in the [regionwillchange](Map.View.regionwillchange) event. The camera moved in response to a request from the application.
	 */
	const REASON_DEVELOPER_ANIMATION: number;

	/**
	 * Used in the [regionwillchange](Map.View.regionwillchange) event. The camera moved in response to the user gestures on the map.
	 */
	const REASON_GESTURE: number;

	/**
	 * Used with [mapType](Map.View.mapType) to display satellite flyover imagery of the area. Available in iOS 9.0 and later.
	 */
	const SATELLITE_FLYOVER_TYPE: number;

	/**
	 * Used with [mapType](Map.View.mapType) to display satellite imagery of the area.
	 */
	const SATELLITE_TYPE: number;

	/**
	 * Code returned from <Map.isGooglePlayServicesAvailable>. Google Play services has been disabled on this device.
	 */
	const SERVICE_DISABLED: number;

	/**
	 * Code returned from <Map.isGooglePlayServicesAvailable>. The version of Google Play services installed on this device is not authentic.
	 */
	const SERVICE_INVALID: number;

	/**
	 * Code returned from <Map.isGooglePlayServicesAvailable>. Google Play services is not installed on the device.
	 */
	const SERVICE_MISSING: number;

	/**
	 * Code returned from <Map.isGooglePlayServicesAvailable>. Google Play services is out of date.
	 */
	const SERVICE_VERSION_UPDATE_REQUIRED: number;

	/**
	 * Code returned from <Map.isGooglePlayServicesAvailable>. Google Play services is available, and the connection is successful.
	 */
	const SUCCESS: number;

	/**
	 * Used with [mapType](Map.View.mapType) to display the terrain that shows the position of all roads and some road names.
	 */
	const TERRAIN_TYPE: number;

	/**
	 * Represents a labeled point of interest on the map that the user can click on.
	 */
	class Annotation extends Titanium.Proxy {
		/**
		 * The display priority of this annotation view.
		 */
		annotationDisplayPriority: number;

		/**
		 * Defines whether the annotation view is able to display extra information in a callout bubble.
		 */
		canShowCallout: boolean;

		/**
		 * Defines a center offset point for the annotation.
		 */
		centerOffset: Point;

		/**
		 * An identifier that determines whether the annotation view participates in clustering.
		 */
		clusterIdentifier: string;

		/**
		 * The collision mode to use when interpreting the collision frame rectangle.
		 */
		collisionMode: number;

		/**
		 * Defines a custom view to be used by the annotation.
		 */
		customView: Titanium.UI.View;

		/**
		 * Determines whether the pin can be dragged by the user.
		 */
		draggable: boolean;

		/**
		 * Determines whether the annotation is hidden or not.
		 */
		hidden: boolean;

		/**
		 * Image to use for the the pin.
		 */
		image: string | Titanium.Blob;

		/**
		 * Latitude of the annotation, in decimal degrees.
		 */
		latitude: number;

		/**
		 * Left button image on the annotation, specified as an image URL.
		 */
		leftButton: string;

		/**
		 * Left view that is displayed on the annotation.
		 */
		leftView: Titanium.UI.View;

		/**
		 * Longitude of the annotation, in decimal degrees.
		 */
		longitude: number;

		/**
		 * Boolean indicating whether the marker animates into position onscreen.
		 */
		markerAnimatesWhenAdded: boolean;

		/**
		 * The background color of the marker balloon.
		 */
		markerColor: string;

		/**
		 * The color to apply to the glyph text or image.
		 */
		markerGlyphColor: string;

		/**
		 * The image displayed in the marker balloon.
		 */
		markerGlyphImage: string | Titanium.Blob;

		/**
		 * The text to display in the marker balloon.
		 */
		markerGlyphText: string;

		/**
		 * The image to display when the marker is selected.
		 */
		markerSelectedGlyphImage: string | Titanium.Blob;

		/**
		 * The visibility of the subtitle text rendered below the marker balloon.
		 */
		markerSubtitleVisibility: number;

		/**
		 * The visibility of the title text rendered below the marker balloon.
		 */
		markerTitleVisibility: number;

		/**
		 * The color of the pin-annotation. Use the `ANNOTATION_*` constants for pre-
		 * defined colors, e.g `ANNOTATION_GREEN`.
		 * Note for iOS: Apps running iOS 9 and later can also specify a non-constant
		 * value, e.g. "blue", "rgb(0, 0, 255 ,1)" or "#0000ff".
		 */
		pincolor: number | string;

		/**
		 * The preview context used in the 3D-Touch feature "Peek and Pop".
		 */
		previewContext: Titanium.UI.iOS.PreviewContext;

		/**
		 * Right button image on the annotation, specified as an image URL.
		 */
		rightButton: string;

		/**
		 * Right view that is displayed on the annotation.
		 */
		rightView: Titanium.UI.View;

		/**
		 * Boolean to show an annotation view that displays a balloon-shaped
		 * marker at the designated location.
		 */
		showAsMarker: boolean;

		/**
		 * Show or hide the view that is displayed on the annotation when clicked.
		 */
		showInfoWindow: boolean;

		/**
		 * Secondary title of the annotation view.
		 */
		subtitle: string;

		/**
		 * Key in the locale file to use for the subtitle property.
		 */
		subtitleid: string;

		/**
		 * Primary title of the annotation view.
		 */
		title: string;

		/**
		 * Key in the locale file to use for the title property.
		 */
		titleid: string;

		/**
		 * Gets the value of the <Map.Annotation.annotationDisplayPriority> property.
		 */
		getAnnotationDisplayPriority: never;

		/**
		 * Gets the value of the <Map.Annotation.canShowCallout> property.
		 */
		getCanShowCallout: never;

		/**
		 * Gets the value of the <Map.Annotation.centerOffset> property.
		 */
		getCenterOffset: never;

		/**
		 * Gets the value of the <Map.Annotation.clusterIdentifier> property.
		 */
		getClusterIdentifier: never;

		/**
		 * Gets the value of the <Map.Annotation.collisionMode> property.
		 */
		getCollisionMode: never;

		/**
		 * Gets the value of the <Map.Annotation.customView> property.
		 */
		getCustomView: never;

		/**
		 * Gets the value of the <Map.Annotation.draggable> property.
		 */
		getDraggable: never;

		/**
		 * Gets the value of the <Map.Annotation.hidden> property.
		 */
		getHidden: never;

		/**
		 * Gets the value of the <Map.Annotation.image> property.
		 */
		getImage: never;

		/**
		 * Gets the value of the <Map.Annotation.latitude> property.
		 */
		getLatitude: never;

		/**
		 * Gets the value of the <Map.Annotation.leftButton> property.
		 */
		getLeftButton: never;

		/**
		 * Gets the value of the <Map.Annotation.leftView> property.
		 */
		getLeftView: never;

		/**
		 * Gets the value of the <Map.Annotation.longitude> property.
		 */
		getLongitude: never;

		/**
		 * Gets the value of the <Map.Annotation.markerAnimatesWhenAdded> property.
		 */
		getMarkerAnimatesWhenAdded: never;

		/**
		 * Gets the value of the <Map.Annotation.markerColor> property.
		 */
		getMarkerColor: never;

		/**
		 * Gets the value of the <Map.Annotation.markerGlyphColor> property.
		 */
		getMarkerGlyphColor: never;

		/**
		 * Gets the value of the <Map.Annotation.markerGlyphImage> property.
		 */
		getMarkerGlyphImage: never;

		/**
		 * Gets the value of the <Map.Annotation.markerGlyphText> property.
		 */
		getMarkerGlyphText: never;

		/**
		 * Gets the value of the <Map.Annotation.markerSelectedGlyphImage> property.
		 */
		getMarkerSelectedGlyphImage: never;

		/**
		 * Gets the value of the <Map.Annotation.markerSubtitleVisibility> property.
		 */
		getMarkerSubtitleVisibility: never;

		/**
		 * Gets the value of the <Map.Annotation.markerTitleVisibility> property.
		 */
		getMarkerTitleVisibility: never;

		/**
		 * Gets the value of the <Map.Annotation.pincolor> property.
		 */
		getPincolor: never;

		/**
		 * Gets the value of the <Map.Annotation.previewContext> property.
		 */
		getPreviewContext: never;

		/**
		 * Gets the value of the <Map.Annotation.rightButton> property.
		 */
		getRightButton: never;

		/**
		 * Gets the value of the <Map.Annotation.rightView> property.
		 */
		getRightView: never;

		/**
		 * Gets the value of the <Map.Annotation.showAsMarker> property.
		 */
		getShowAsMarker: never;

		/**
		 * Gets the value of the <Map.Annotation.showInfoWindow> property.
		 */
		getShowInfoWindow: never;

		/**
		 * Gets the value of the <Map.Annotation.subtitle> property.
		 */
		getSubtitle: never;

		/**
		 * Gets the value of the <Map.Annotation.subtitleid> property.
		 */
		getSubtitleid: never;

		/**
		 * Gets the value of the <Map.Annotation.title> property.
		 */
		getTitle: never;

		/**
		 * Gets the value of the <Map.Annotation.titleid> property.
		 */
		getTitleid: never;

		/**
		 * Sets the value of the <Map.Annotation.annotationDisplayPriority> property.
		 */
		setAnnotationDisplayPriority: never;

		/**
		 * Sets the value of the <Map.Annotation.canShowCallout> property.
		 */
		setCanShowCallout: never;

		/**
		 * Sets the value of the <Map.Annotation.centerOffset> property.
		 */
		setCenterOffset: never;

		/**
		 * Sets the value of the <Map.Annotation.clusterIdentifier> property.
		 */
		setClusterIdentifier: never;

		/**
		 * Sets the value of the <Map.Annotation.collisionMode> property.
		 */
		setCollisionMode: never;

		/**
		 * Sets the value of the <Map.Annotation.customView> property.
		 */
		setCustomView: never;

		/**
		 * Sets the value of the <Map.Annotation.draggable> property.
		 */
		setDraggable: never;

		/**
		 * Sets the value of the <Map.Annotation.hidden> property.
		 */
		setHidden: never;

		/**
		 * Sets the value of the <Map.Annotation.image> property.
		 */
		setImage: never;

		/**
		 * Sets the value of the <Map.Annotation.latitude> property.
		 */
		setLatitude: never;

		/**
		 * Sets the value of the <Map.Annotation.leftButton> property.
		 */
		setLeftButton: never;

		/**
		 * Sets the value of the <Map.Annotation.leftView> property.
		 */
		setLeftView: never;

		/**
		 * Sets the value of the <Map.Annotation.longitude> property.
		 */
		setLongitude: never;

		/**
		 * Sets the value of the <Map.Annotation.markerAnimatesWhenAdded> property.
		 */
		setMarkerAnimatesWhenAdded: never;

		/**
		 * Sets the value of the <Map.Annotation.markerColor> property.
		 */
		setMarkerColor: never;

		/**
		 * Sets the value of the <Map.Annotation.markerGlyphColor> property.
		 */
		setMarkerGlyphColor: never;

		/**
		 * Sets the value of the <Map.Annotation.markerGlyphImage> property.
		 */
		setMarkerGlyphImage: never;

		/**
		 * Sets the value of the <Map.Annotation.markerGlyphText> property.
		 */
		setMarkerGlyphText: never;

		/**
		 * Sets the value of the <Map.Annotation.markerSelectedGlyphImage> property.
		 */
		setMarkerSelectedGlyphImage: never;

		/**
		 * Sets the value of the <Map.Annotation.markerSubtitleVisibility> property.
		 */
		setMarkerSubtitleVisibility: never;

		/**
		 * Sets the value of the <Map.Annotation.markerTitleVisibility> property.
		 */
		setMarkerTitleVisibility: never;

		/**
		 * Sets the value of the <Map.Annotation.pincolor> property.
		 */
		setPincolor: never;

		/**
		 * Sets the value of the <Map.Annotation.previewContext> property.
		 */
		setPreviewContext: never;

		/**
		 * Sets the value of the <Map.Annotation.rightButton> property.
		 */
		setRightButton: never;

		/**
		 * Sets the value of the <Map.Annotation.rightView> property.
		 */
		setRightView: never;

		/**
		 * Sets the value of the <Map.Annotation.showAsMarker> property.
		 */
		setShowAsMarker: never;

		/**
		 * Sets the value of the <Map.Annotation.showInfoWindow> property.
		 */
		setShowInfoWindow: never;

		/**
		 * Sets the value of the <Map.Annotation.subtitle> property.
		 */
		setSubtitle: never;

		/**
		 * Sets the value of the <Map.Annotation.subtitleid> property.
		 */
		setSubtitleid: never;

		/**
		 * Sets the value of the <Map.Annotation.title> property.
		 */
		setTitle: never;

		/**
		 * Sets the value of the <Map.Annotation.titleid> property.
		 */
		setTitleid: never;

	}
	/**
	 * A camera object defines a point above the map's surface from which to view the map. Available in iOS 7.0 and later.
	 */
	class Camera extends Titanium.Proxy {
		/**
		 * The altitude above the ground, measured in meters.
		 */
		altitude: number;

		/**
		 * The coordinate point on which the map should be centered.
		 */
		centerCoordinate: MapPointType;

		/**
		 * The coordinate point at which to place the camera. Only used on creation when `altitude`
		 * and `centerCoordinate` are also provided. Setting this property at anytime other time will
		 * have no effect.
		 */
		eyeCoordinate: MapPointType;

		/**
		 * The heading of the camera (measured in degrees) relative to true north.
		 */
		heading: number;

		/**
		 * The viewing angle of the camera, measured in degrees.
		 */
		pitch: number;

		/**
		 * Gets the value of the <Map.Camera.altitude> property.
		 */
		getAltitude: never;

		/**
		 * Gets the value of the <Map.Camera.centerCoordinate> property.
		 */
		getCenterCoordinate: never;

		/**
		 * Gets the value of the <Map.Camera.eyeCoordinate> property.
		 */
		getEyeCoordinate: never;

		/**
		 * Gets the value of the <Map.Camera.heading> property.
		 */
		getHeading: never;

		/**
		 * Gets the value of the <Map.Camera.pitch> property.
		 */
		getPitch: never;

		/**
		 * Sets the value of the <Map.Camera.altitude> property.
		 */
		setAltitude: never;

		/**
		 * Sets the value of the <Map.Camera.centerCoordinate> property.
		 */
		setCenterCoordinate: never;

		/**
		 * Sets the value of the <Map.Camera.eyeCoordinate> property.
		 */
		setEyeCoordinate: never;

		/**
		 * Sets the value of the <Map.Camera.heading> property.
		 */
		setHeading: never;

		/**
		 * Sets the value of the <Map.Camera.pitch> property.
		 */
		setPitch: never;

	}
	/**
	 * Represents a bounded area on the map.
	 */
	class Circle extends Titanium.Proxy {
		/**
		 * An object with longitude and latitude values. Can also be an array with longitude (index 0), latitude (index 1) touples.
		 */
		center: MapPointType;

		/**
		 * Color to use when shading the circle, as a color name or hex triplet.
		 */
		fillColor: string;

		/**
		 * Opacity of this map circle, from 0.0 (transparent) to 1.0 (opaque).
		 */
		opacity: number;

		/**
		 * The radius of the circle, specified in meters. It should be zero or greater.
		 */
		radius?: number;

		/**
		 * Color to use for the border of the circle, as a color name or hex triplet.
		 */
		strokeColor: string;

		/**
		 * Line width in pixels to use when drawing the circle.
		 */
		strokeWidth: number;

		/**
		 * Determines whether view should receive touch events.
		 */
		touchEnabled: boolean;

		/**
		 * The order (depth) in which to display the circles.
		 */
		zIndex: number;

		/**
		 * Gets the value of the <Map.Circle.center> property.
		 */
		getCenter: never;

		/**
		 * Gets the value of the <Map.Circle.fillColor> property.
		 */
		getFillColor: never;

		/**
		 * Gets the value of the <Map.Circle.opacity> property.
		 */
		getOpacity: never;

		/**
		 * Gets the value of the <Map.Circle.radius> property.
		 */
		getRadius: never;

		/**
		 * Gets the value of the <Map.Circle.strokeColor> property.
		 */
		getStrokeColor: never;

		/**
		 * Gets the value of the <Map.Circle.strokeWidth> property.
		 */
		getStrokeWidth: never;

		/**
		 * Gets the value of the <Map.Circle.touchEnabled> property.
		 */
		getTouchEnabled: never;

		/**
		 * Gets the value of the <Map.Circle.zIndex> property.
		 */
		getZIndex: never;

		/**
		 * Sets the value of the <Map.Circle.center> property.
		 */
		setCenter: never;

		/**
		 * Sets the value of the <Map.Circle.fillColor> property.
		 */
		setFillColor: never;

		/**
		 * Sets the value of the <Map.Circle.opacity> property.
		 */
		setOpacity: never;

		/**
		 * Sets the value of the <Map.Circle.radius> property.
		 */
		setRadius: never;

		/**
		 * Sets the value of the <Map.Circle.strokeColor> property.
		 */
		setStrokeColor: never;

		/**
		 * Sets the value of the <Map.Circle.strokeWidth> property.
		 */
		setStrokeWidth: never;

		/**
		 * Sets the value of the <Map.Circle.touchEnabled> property.
		 */
		setTouchEnabled: never;

		/**
		 * Sets the value of the <Map.Circle.zIndex> property.
		 */
		setZIndex: never;

	}
	/**
	 * Represents a bounded area on the map that has an image overlay.
	 */
	class ImageOverlay extends Titanium.Proxy {
		/**
		 * An object representing diagonal coordinates (`topLeft` and `bottomRight`) on the map.
		 */
		boundsCoordinate: MapBoundsCoordinateType;

		/**
		 * The image that is shown as an overlay on the map.
		 */
		image: string | Titanium.Blob;

		/**
		 * Gets the value of the <Map.ImageOverlay.boundsCoordinate> property.
		 */
		getBoundsCoordinate: never;

		/**
		 * Gets the value of the <Map.ImageOverlay.image> property.
		 */
		getImage: never;

		/**
		 * Sets the value of the <Map.ImageOverlay.boundsCoordinate> property.
		 */
		setBoundsCoordinate: never;

		/**
		 * Sets the value of the <Map.ImageOverlay.image> property.
		 */
		setImage: never;

	}
	/**
	 * Represents a bounded area on the map.
	 */
	class Polygon extends Titanium.Proxy {
		/**
		 * Color to use when shading the polygon, as a color name or hex triplet.
		 */
		fillColor: string;

		/**
		 * Array of points arrays that define holes in the polygon.
		 */
		holes?: MapPointType[][];

		/**
		 * Array of map points making up the polygon. Can also be an array of longitude (index 0), latitude (index 1) touples.
		 */
		points: MapPointType[];

		/**
		 * Color to use for the border of the polygon, as a color name or hex triplet.
		 */
		strokeColor: string;

		/**
		 * Line width in pixels to use when drawing the polygon.
		 */
		strokeWidth: number;

		/**
		 * Determines whether view should receive touch events.
		 */
		touchEnabled: boolean;

		/**
		 * The order (depth) in which to display the polygons.
		 */
		zIndex: number;

		/**
		 * Gets the value of the <Map.Polygon.fillColor> property.
		 */
		getFillColor: never;

		/**
		 * Gets the value of the <Map.Polygon.holes> property.
		 */
		getHoles: never;

		/**
		 * Gets the value of the <Map.Polygon.points> property.
		 */
		getPoints: never;

		/**
		 * Gets the value of the <Map.Polygon.strokeColor> property.
		 */
		getStrokeColor: never;

		/**
		 * Gets the value of the <Map.Polygon.strokeWidth> property.
		 */
		getStrokeWidth: never;

		/**
		 * Gets the value of the <Map.Polygon.touchEnabled> property.
		 */
		getTouchEnabled: never;

		/**
		 * Gets the value of the <Map.Polygon.zIndex> property.
		 */
		getZIndex: never;

		/**
		 * Sets the value of the <Map.Polygon.fillColor> property.
		 */
		setFillColor: never;

		/**
		 * Sets the value of the <Map.Polygon.holes> property.
		 */
		setHoles: never;

		/**
		 * Sets the value of the <Map.Polygon.points> property.
		 */
		setPoints: never;

		/**
		 * Sets the value of the <Map.Polygon.strokeColor> property.
		 */
		setStrokeColor: never;

		/**
		 * Sets the value of the <Map.Polygon.strokeWidth> property.
		 */
		setStrokeWidth: never;

		/**
		 * Sets the value of the <Map.Polygon.touchEnabled> property.
		 */
		setTouchEnabled: never;

		/**
		 * Sets the value of the <Map.Polygon.zIndex> property.
		 */
		setZIndex: never;

	}
	/**
	 * Represents a bounded area on the map.
	 */
	class Polyline extends Titanium.Proxy {
		/**
		 * Pattern used to draw the polylines.
		 */
		pattern: any;

		/**
		 * Array of map points making up the polyline. Can also be an array of longitude (index 0), latitude (index 1) touples.
		 */
		points: MapPointType[];

		/**
		 * Color to use for the the polyline, as a color name or hex triplet.
		 */
		strokeColor: string;

		/**
		 * Line width in pixels to use when drawing the polyline.
		 */
		strokeWidth: number;

		/**
		 * Determines whether view should receive touch events.
		 */
		touchEnabled: boolean;

		/**
		 * The order (depth) in which to display the polylines.
		 */
		zIndex: number;

		/**
		 * Gets the value of the <Map.Polyline.pattern> property.
		 */
		getPattern: never;

		/**
		 * Gets the value of the <Map.Polyline.points> property.
		 */
		getPoints: never;

		/**
		 * Gets the value of the <Map.Polyline.strokeColor> property.
		 */
		getStrokeColor: never;

		/**
		 * Gets the value of the <Map.Polyline.strokeWidth> property.
		 */
		getStrokeWidth: never;

		/**
		 * Gets the value of the <Map.Polyline.touchEnabled> property.
		 */
		getTouchEnabled: never;

		/**
		 * Gets the value of the <Map.Polyline.zIndex> property.
		 */
		getZIndex: never;

		/**
		 * Sets the value of the <Map.Polyline.pattern> property.
		 */
		setPattern: never;

		/**
		 * Sets the value of the <Map.Polyline.points> property.
		 */
		setPoints: never;

		/**
		 * Sets the value of the <Map.Polyline.strokeColor> property.
		 */
		setStrokeColor: never;

		/**
		 * Sets the value of the <Map.Polyline.strokeWidth> property.
		 */
		setStrokeWidth: never;

		/**
		 * Sets the value of the <Map.Polyline.touchEnabled> property.
		 */
		setTouchEnabled: never;

		/**
		 * Sets the value of the <Map.Polyline.zIndex> property.
		 */
		setZIndex: never;

	}
	/**
	 * Represents a path between two or more points of interest.
	 */
	class Route extends Titanium.Proxy {
		/**
		 * Color to use when drawing the route, as a color name or hex triplet.
		 */
		color: string;

		/**
		 * The map level at which to place the route. Available in iOS 7.0 and later.
		 */
		level: number;

		/**
		 * Array of map points making up the route.
		 */
		points: MapPointType[];

		/**
		 * Line width in pixels to use when drawing the route.
		 */
		width: number;

		/**
		 * Gets the value of the <Map.Route.color> property.
		 */
		getColor: never;

		/**
		 * Gets the value of the <Map.Route.level> property.
		 */
		getLevel: never;

		/**
		 * Gets the value of the <Map.Route.points> property.
		 */
		getPoints: never;

		/**
		 * Gets the value of the <Map.Route.width> property.
		 */
		getWidth: never;

		/**
		 * Sets the value of the <Map.Route.color> property.
		 */
		setColor: never;

		/**
		 * Sets the value of the <Map.Route.level> property.
		 */
		setLevel: never;

		/**
		 * Sets the value of the <Map.Route.points> property.
		 */
		setPoints: never;

		/**
		 * Sets the value of the <Map.Route.width> property.
		 */
		setWidth: never;

	}
	/**
	 * Snapshotter is used to allow screen shots to be taken of a specified region or a mapview.
	 */
	class Snapshotter extends Titanium.Proxy {
		/**
		 * Map type constant, either <Map.NORMAL_TYPE>, <Map.SATELLITE_TYPE>,
		 * <Map.TERRAIN_TYPE>, <Map.HYBRID_TYPE>, <Map.HYBRID_FLYOVER_TYPE> or
		 * <Map.SATELLITE_FLYOVER_TYPE>.
		 */
		mapType: number;

		/**
		 * A dictionary specifying the location and zoom level of the map.
		 */
		region: MapRegionTypev2;

		/**
		 * Determines whether building will be shown on the map. The mapType property must be set
		 * to <Map.STANDARD_TYPE> for extruded buildings to be displayed.
		 */
		showsBuildings: boolean;

		/**
		 * When this property is set to YES, the map displays icons and labels for
		 * restaurants, schools, and other relevant points of interest.
		 */
		showsPointsOfInterest: boolean;

		/**
		 * A dictionary specifying the width and height of the snapshot.
		 */
		size: SnapshotSize;

		/**
		 * Gets the value of the <Map.Snapshotter.mapType> property.
		 */
		getMapType: never;

		/**
		 * Gets the value of the <Map.Snapshotter.region> property.
		 */
		getRegion: never;

		/**
		 * Gets the value of the <Map.Snapshotter.showsBuildings> property.
		 */
		getShowsBuildings: never;

		/**
		 * Gets the value of the <Map.Snapshotter.showsPointsOfInterest> property.
		 */
		getShowsPointsOfInterest: never;

		/**
		 * Gets the value of the <Map.Snapshotter.size> property.
		 */
		getSize: never;

		/**
		 * Sets the value of the <Map.Snapshotter.mapType> property.
		 */
		setMapType: never;

		/**
		 * Sets the value of the <Map.Snapshotter.region> property.
		 */
		setRegion: never;

		/**
		 * Sets the value of the <Map.Snapshotter.showsBuildings> property.
		 */
		setShowsBuildings: never;

		/**
		 * Sets the value of the <Map.Snapshotter.showsPointsOfInterest> property.
		 */
		setShowsPointsOfInterest: never;

		/**
		 * Sets the value of the <Map.Snapshotter.size> property.
		 */
		setSize: never;

		/**
		 * Takes a snap shot of of the map corresponding to the region property or a snap of the mapView if
		 * passed in as a second parameter.
		 */
		takeSnapshot(success: (param0: Titanium.Blob) => void, error: (...args: any[]) => void): Titanium.Blob;

	}
	/**
	 * Provides panoramic 360-degree views from designated roads throughout its coverage area.
	 */
	class StreetViewPanorama extends Titanium.UI.View {
		/**
		 * Determines whether the user is able to re-orient the camera by dragging.
		 */
		panning: boolean;

		/**
		 * A dictionary specifying the position of the street view.
		 */
		position: StreetViewPosition;

		/**
		 * Determines whether the user is able to see street names displayed.
		 */
		streetNames: boolean;

		/**
		 * Determines whether the user is able to move to a different panorama.
		 */
		userNavigation: boolean;

		/**
		 * Determines whether the user is able to pinch to zoom.
		 */
		zoom: boolean;

		/**
		 * Gets the value of the <Map.StreetViewPanorama.panning> property.
		 */
		getPanning: never;

		/**
		 * Gets the value of the <Map.StreetViewPanorama.position> property.
		 */
		getPosition: never;

		/**
		 * Gets the value of the <Map.StreetViewPanorama.streetNames> property.
		 */
		getStreetNames: never;

		/**
		 * Gets the value of the <Map.StreetViewPanorama.userNavigation> property.
		 */
		getUserNavigation: never;

		/**
		 * Gets the value of the <Map.StreetViewPanorama.zoom> property.
		 */
		getZoom: never;

		/**
		 * Sets the value of the <Map.StreetViewPanorama.panning> property.
		 */
		setPanning: never;

		/**
		 * Sets the value of the <Map.StreetViewPanorama.position> property.
		 */
		setPosition: never;

		/**
		 * Sets the value of the <Map.StreetViewPanorama.streetNames> property.
		 */
		setStreetNames: never;

		/**
		 * Sets the value of the <Map.StreetViewPanorama.userNavigation> property.
		 */
		setUserNavigation: never;

		/**
		 * Sets the value of the <Map.StreetViewPanorama.zoom> property.
		 */
		setZoom: never;

	}
	/**
	 * Base event for class Map.View
	 */
	interface ViewBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Map.View;

	}
	/**
	 * Fired when a collision between annotations occures.
	 */
	interface View_clusterstart_Event extends ViewBaseEvent {
		/**
		 * This map view.
		 */
		map: Map.View;

		/**
		 * Array of annotations participating in clustering.
		 */
		memberAnnotations: Map.Annotation[];

	}
	/**
	 * Fired when the snapshot is ready after [snapshot](Map.View.snapshot) is invoked.
	 */
	interface View_onsnapshotready_Event extends ViewBaseEvent {
		/**
		 * snapshot of the current map
		 */
		snapshot: Titanium.Blob;

	}
	/**
	 * Fired when the user interacts with a draggable annotation.
	 */
	interface View_pinchangedragstate_Event extends ViewBaseEvent {
		/**
		 * Annotation being dragged.
		 */
		annotation: Map.Annotation;

		/**
		 * This map view.
		 */
		map: Map.View;

		/**
		 * New drag state for the annotation, one of
		 * [ANNOTATION_DRAG_STATE_NONE](Titanium.Map.ANNOTATION_DRAG_STATE_NONE),
		 * [ANNOTATION_DRAG_STATE_START](Titanium.Map.ANNOTATION_DRAG_STATE_START),
		 * [ANNOTATION_DRAG_STATE_DRAG](Titanium.Map.ANNOTATION_DRAG_STATE_DRAG),
		 * [ANNOTATION_DRAG_STATE_CANCEL](Titanium.Map.ANNOTATION_DRAG_STATE_CANCEL) or
		 * [ANNOTATION_DRAG_STATE_END](Titanium.Map.ANNOTATION_DRAG_STATE_END).
		 */
		newState: number;

		/**
		 * Previous drag state for the annotation, one of
		 * [ANNOTATION_DRAG_STATE_NONE](Titanium.Map.ANNOTATION_DRAG_STATE_NONE),
		 * [ANNOTATION_DRAG_STATE_START](Titanium.Map.ANNOTATION_DRAG_STATE_START),
		 * [ANNOTATION_DRAG_STATE_DRAG](Titanium.Map.ANNOTATION_DRAG_STATE_DRAG),
		 * [ANNOTATION_DRAG_STATE_CANCEL](Titanium.Map.ANNOTATION_DRAG_STATE_CANCEL) or
		 * [ANNOTATION_DRAG_STATE_END](Titanium.Map.ANNOTATION_DRAG_STATE_END).
		 */
		oldState: number;

		/**
		 * Annotation title.
		 */
		title: string;

	}
	/**
	 * Fired when the user selects or deselects an annotation, a polygon, a polyline or a circle.
	 */
	interface View_click_Event extends ViewBaseEvent {
		/**
		 * Annotation source object.
		 */
		annotation: Map.Annotation;

		/**
		 * Source of the click event. Can be one of `pin`, `leftPane`, `rightPane`, `infoWindow` or `null`.
		 * If it's a shape, it can be one of `polygon`, `polyline`, or `circle`. On Android, this also applies
		 * for `title` and `subtitle`.
		 */
		clicksource: string;

		/**
		 * Will show if the annotation was selected (false) or deselected (true)
		 */
		deselected: boolean;

		/**
		 * Latitude of the clicked annotation or the point clicked in the polygon, polyline and circle.
		 */
		latitude: number;

		/**
		 * Longitude of the clicked annotation or the point clicked in the polygon, polyline and circle.
		 */
		longitude: number;

		/**
		 * The map view instance.
		 */
		map: Map.View;

		/**
		 * Subtitle of the annotation.
		 */
		subtitle: string;

		/**
		 * Title of the annotation.
		 */
		title: string;

	}
	/**
	 * Fired when the map completes loading.
	 */
	interface View_complete_Event extends ViewBaseEvent {
	}
	/**
	 * Fired when the user clicks on the map
	 */
	interface View_mapclick_Event extends ViewBaseEvent {
		/**
		 * Latitude of the clicked position.
		 */
		latitude: number;

		/**
		 * Longitude of the clicked position.
		 */
		longitude: number;

		/**
		 * The map view instance.
		 */
		map: Map.View;

	}
	/**
	 * Fired when the mapping region will change.
	 */
	interface View_regionwillchange_Event extends ViewBaseEvent {
		/**
		 * The regionwillchange event was caused by an `animation`, such as a animating the camera.
		 */
		animated: boolean;

		/**
		 * Latitude value for the center point of the map, in decimal degrees.
		 */
		latitude: number;

		/**
		 * The amount of north-to-south distance displayed on the map, measured in decimal degrees.
		 */
		latitudeDelta: number;

		/**
		 * Longitude value for the center point of the map, in decimal degrees.
		 */
		longitude: number;

		/**
		 * The amount of east-to-west distance displayed on the map, measured in decimal degrees.
		 */
		longitudeDelta: number;

		/**
		 * The reason for the camera change, either <Map.REASON_API_ANIMATION>,
		 * <Map.REASON_DEVELOPER_ANIMATION> or <Map.REASON_GESTURE>.
		 */
		reason: number;

	}
	/**
	 * Fired when the mapping region finished changing.
	 */
	interface View_regionchanged_Event extends ViewBaseEvent {
		/**
		 * The regionchanged event was caused by an `animation`, such as a animating the camera.
		 */
		animated: boolean;

		/**
		 * Latitude value for the center point of the map, in decimal degrees.
		 */
		latitude: number;

		/**
		 * The amount of north-to-south distance displayed on the map, measured in decimal degrees.
		 */
		latitudeDelta: number;

		/**
		 * Longitude value for the center point of the map, in decimal degrees.
		 */
		longitude: number;

		/**
		 * The amount of east-to-west distance displayed on the map, measured in decimal degrees.
		 */
		longitudeDelta: number;

	}
	/**
	 * Fired when the user makes a long-press gesture on the map.
	 */
	interface View_longclick_Event extends ViewBaseEvent {
		/**
		 * latitude of the point on the ground that was pressed.
		 */
		latitude: number;

		/**
		 * longitude of the point on the ground that was pressed.
		 */
		longitude: number;

		/**
		 * The map view instance.
		 */
		map: Map.View;

	}
	/**
	 * Fired when the user changes on the map.
	 */
	interface View_userLocation_Event extends ViewBaseEvent {
		/**
		 * latitude of the point on the ground that was pressed.
		 */
		latitude: number;

		/**
		 * longitude of the point on the ground that was pressed.
		 */
		longitude: number;

	}
	interface ViewEventMap extends ProxyEventMap {
		click: View_click_Event;

		clusterstart: View_clusterstart_Event;

		complete: View_complete_Event;

		longclick: View_longclick_Event;

		mapclick: View_mapclick_Event;

		onsnapshotready: View_onsnapshotready_Event;

		pinchangedragstate: View_pinchangedragstate_Event;

		regionchanged: View_regionchanged_Event;

		regionwillchange: View_regionwillchange_Event;

		userLocation: View_userLocation_Event;

	}
	/**
	 * Map view is used for embedding native mapping capabilities as a view in your application.
	 */
	class View extends Titanium.UI.View {
		/**
		 * Indicates if changes to the mapping region should be animated.
		 */
		// Incompatible member override.
		// animate: boolean;

		/**
		 * An array of annotations to add to the map.
		 */
		annotations: Map.Annotation[];

		/**
		 * The camera used for determining the appearance of the map.
		 */
		camera: Map.Camera;

		/**
		 * Enable or disables the compass button.
		 */
		compassEnabled: boolean;

		/**
		 * Enables or disables the built-in zoom controls.
		 */
		enableZoomControls: boolean;

		/**
		 * A Boolean value indicating whether the indoor mapping is enabled.
		 */
		indoorEnabled: boolean;

		/**
		 * Enable or disables the map toolbar.
		 */
		mapToolbarEnabled: boolean;

		/**
		 * Map type constant, either <Map.NORMAL_TYPE>, <Map.SATELLITE_TYPE>,
		 * <Map.TERRAIN_TYPE>, <Map.HYBRID_TYPE>, <Map.HYBRID_FLYOVER_TYPE> or
		 * <Map.SATELLITE_FLYOVER_TYPE>.
		 */
		mapType: number;

		/**
		 * Returns the maximum zoom level available at the current camera position.
		 */
		readonly maxZoomLevel: number;

		/**
		 * Returns the minimum zoom level available at the current camera position.
		 */
		readonly minZoomLevel: number;

		/**
		 * Sets the distance between each edges of the view to the map controls.
		 */
		padding: MapViewPadding;

		/**
		 * A Boolean value indicating whether the map camera's pitch information is used.
		 */
		pitchEnabled: boolean;

		/**
		 * A dictionary specifying the location and zoom level of the map.
		 */
		region: MapRegionTypev2;

		/**
		 * A Boolean value indicating whether the map camera's heading information is used.
		 */
		rotateEnabled: boolean;

		/**
		 * A Boolean value indicating whether the map can be scrolled by dragging gesture.
		 */
		scrollEnabled: boolean;

		/**
		 * A Boolean indicating whether the map displays extruded building information.
		 */
		showsBuildings: boolean;

		/**
		 * A Boolean indicating whether the map displays a compass control.
		 */
		showsCompass: boolean;

		/**
		 * A Boolean indicating whether the map displays point-of-interest information.
		 */
		showsPointsOfInterest: boolean;

		/**
		 * A Boolean indicating whether the map shows scale information.
		 */
		showsScale: boolean;

		/**
		 * A Boolean value indicating whether the map displays traffic information.
		 */
		showsTraffic: boolean;

		/**
		 * JSON String to style the Map.
		 */
		style: string;

		/**
		 * Toggles the traffic layer on or off.
		 */
		traffic: boolean;

		/**
		 * Boolean indicating if the user's current device location should be shown on the
		 * map.
		 */
		userLocation: boolean;

		/**
		 * Enable or disables the My Location button. If the button is enabled, it is only shown when `userLocation`
		 * is enabled.
		 */
		userLocationButton: boolean;

		/**
		 * Controls wether the map view's surface is placed on top of its window.
		 */
		zOrderOnTop: boolean;

		/**
		 * Returns the current zoom level from the current camera position.
		 */
		readonly zoom: number;

		/**
		 * A Boolean value indicating whether the map can be zoomed by pinching or tapping.
		 */
		zoomEnabled: boolean;

		/**
		 * Adds a new annotation to the map.
		 */
		addAnnotation(annotation: Map.Annotation): void;

		/**
		 * Adds one or more new annotations to the map.
		 */
		addAnnotations(annotations: ReadonlyArray<Map.Annotation>): void;

		/**
		 * Adds a new circle to the map.
		 */
		addCircle(circle: Map.Circle): void;

		/**
		 * Adds one or more new circles to the map.
		 */
		addCircles(circles: ReadonlyArray<Map.Circle>): void;

        /**
         * Adds the specified callback as an event listener for the named event.
         */
        addEventListener<K extends keyof ViewEventMap>(name: K, callback: (this: Map.View, event: ViewEventMap[K]) => void): void;

		/**
		 * Adds a new image overlay to the map.
		 */
		addImageOverlay(imageOverlay: Map.ImageOverlay): void;

		/**
		 * Adds one or more new image overlays to the map.
		 */
		addImageOverlays(imageOverlays: ReadonlyArray<Map.ImageOverlay>): void;

		/**
		 * Adds a new polygon to the map.
		 */
		addPolygon(polygon: Map.Polygon): void;

		/**
		 * Adds one or more new polygons to the map.
		 */
		addPolygons(polygons: ReadonlyArray<Map.Polygon>): void;

		/**
		 * Adds a new polylines to the map.
		 */
		addPolyline(polygon: Map.Polyline): void;

		/**
		 * Adds one or more new polylines to the map.
		 */
		addPolylines(polylines: ReadonlyArray<Map.Polyline>): void;

		/**
		 * Adds a route to the map.
		 */
		addRoute(route: Map.Route): void;

		/**
		 * Changes the camera used for determining the map's viewing parameters and animates the change.
		 */
		animateCamera(animationParams: CameraAnimationParams, callback: (param0: any) => void): void;

		/**
		 * Deselects the specified annotation, so the main annotation is hidden and only
		 * a pin image is shown.
		 */
		deselectAnnotation(annotation: string | Map.Annotation): void;

        /**
         * Fires a synthesized event to any registered listeners.
         */
        fireEvent<K extends keyof ViewEventMap>(name: K, event?: ViewEventMap[K]): void;

		/**
		 * Gets the value of the <Map.View.animate> property.
		 */
		getAnimate: never;

		/**
		 * Gets the value of the <Map.View.annotations> property.
		 */
		getAnnotations: never;

		/**
		 * Gets the value of the <Map.View.camera> property.
		 */
		getCamera: never;

		/**
		 * Gets the value of the <Map.View.compassEnabled> property.
		 */
		getCompassEnabled: never;

		/**
		 * Gets the value of the <Map.View.enableZoomControls> property.
		 */
		getEnableZoomControls: never;

		/**
		 * Gets the value of the <Map.View.indoorEnabled> property.
		 */
		getIndoorEnabled: never;

		/**
		 * Gets the value of the <Map.View.mapToolbarEnabled> property.
		 */
		getMapToolbarEnabled: never;

		/**
		 * Gets the value of the <Map.View.mapType> property.
		 */
		getMapType: never;

		/**
		 * Gets the value of the <Map.View.maxZoomLevel> property.
		 */
		getMaxZoomLevel: never;

		/**
		 * Gets the value of the <Map.View.minZoomLevel> property.
		 */
		getMinZoomLevel: never;

		/**
		 * Gets the value of the <Map.View.padding> property.
		 */
		getPadding: never;

		/**
		 * Gets the value of the <Map.View.pitchEnabled> property.
		 */
		getPitchEnabled: never;

		/**
		 * Gets the value of the <Map.View.region> property.
		 */
		getRegion: never;

		/**
		 * Gets the value of the <Map.View.rotateEnabled> property.
		 */
		getRotateEnabled: never;

		/**
		 * Gets the value of the <Map.View.scrollEnabled> property.
		 */
		getScrollEnabled: never;

		/**
		 * Gets the value of the <Map.View.showsBuildings> property.
		 */
		getShowsBuildings: never;

		/**
		 * Gets the value of the <Map.View.showsCompass> property.
		 */
		getShowsCompass: never;

		/**
		 * Gets the value of the <Map.View.showsPointsOfInterest> property.
		 */
		getShowsPointsOfInterest: never;

		/**
		 * Gets the value of the <Map.View.showsScale> property.
		 */
		getShowsScale: never;

		/**
		 * Gets the value of the <Map.View.showsTraffic> property.
		 */
		getShowsTraffic: never;

		/**
		 * Gets the value of the <Map.View.style> property.
		 */
		getStyle: never;

		/**
		 * Gets the value of the <Map.View.traffic> property.
		 */
		getTraffic: never;

		/**
		 * Gets the value of the <Map.View.userLocation> property.
		 */
		getUserLocation: never;

		/**
		 * Gets the value of the <Map.View.userLocationButton> property.
		 */
		getUserLocationButton: never;

		/**
		 * Gets the value of the <Map.View.zOrderOnTop> property.
		 */
		getZOrderOnTop: never;

		/**
		 * Gets the value of the <Map.View.zoom> property.
		 */
		getZoom: never;

		/**
		 * Gets the value of the <Map.View.zoomEnabled> property.
		 */
		getZoomEnabled: never;

		/**
		 * Removes all annotations from the map.
		 */
		removeAllAnnotations(): void;

		/**
		 * Remove all circles from the map.
		 */
		removeAllCircles(): void;

		/**
		 * Remove all image overlays from the map.
		 */
		removeAllImageOverlays(): void;

		/**
		 * Remove all polygons from the map.
		 */
		removeAllPolygons(): void;

		/**
		 * Remove all polylines from the map.
		 */
		removeAllPolylines(): void;

		/**
		 * Removes an existing annotation from the map.
		 */
		removeAnnotation(annotation: string | Map.Annotation): void;

		/**
		 * Removes one or more existing annotations from the map.
		 */
		removeAnnotations(annotations: string[] | Map.Annotation[]): void;

		/**
		 * Remove a circle from the map.
		 */
		removeCircle(circle: Map.Circle): void;

        /**
         * Removes the specified callback as an event listener for the named event.
         */
        removeEventListener<K extends keyof ViewEventMap>(name: K, callback: (this: Map.View, event: ViewEventMap[K]) => void): void;

		/**
		 * Remove an image overlay from the map.
		 */
		removeImageOverlay(imageOverlay: Map.ImageOverlay): void;

		/**
		 * Remove a polygon from the map.
		 */
		removePolygon(polygon: Map.Polygon): void;

		/**
		 * Remove a polyline from the map.
		 */
		removePolyline(polyline: Map.Polyline): void;

		/**
		 * Remove a previously added route.
		 */
		removeRoute(route: Map.Route): void;

		/**
		 * Selects the annotation, showing the full annotation.
		 */
		selectAnnotation(annotation: string | Map.Annotation): void;

		/**
		 * Sets the value of the <Map.View.animate> property.
		 */
		setAnimate: never;

		/**
		 * Sets the value of the <Map.View.annotations> property.
		 */
		setAnnotations: never;

		/**
		 * Sets the value of the <Map.View.camera> property.
		 */
		setCamera: never;

		/**
		 * Set new cluster annotation for the clustered annotation.
		 */
		setClusterAnnotation(clusterAnnotationParam: ClusterAnnotationParams): void;

		/**
		 * Sets the value of the <Map.View.compassEnabled> property.
		 */
		setCompassEnabled: never;

		/**
		 * Sets the value of the <Map.View.enableZoomControls> property.
		 */
		setEnableZoomControls: never;

		/**
		 * Sets the value of the <Map.View.indoorEnabled> property.
		 */
		setIndoorEnabled: never;

		/**
		 * Sets the map location and zoom level.
		 */
		setLocation(location: MapLocationTypeV2): void;

		/**
		 * Sets the value of the <Map.View.mapToolbarEnabled> property.
		 */
		setMapToolbarEnabled: never;

		/**
		 * Sets the type of map (satellite, normal, or terrain).
		 */
		setMapType(mapType: number): void;

		/**
		 * Sets the value of the <Map.View.padding> property.
		 */
		setPadding: never;

		/**
		 * Sets the value of the <Map.View.pitchEnabled> property.
		 */
		setPitchEnabled: never;

		/**
		 * Sets the value of the <Map.View.region> property.
		 */
		setRegion: never;

		/**
		 * Sets the value of the <Map.View.rotateEnabled> property.
		 */
		setRotateEnabled: never;

		/**
		 * Sets the value of the <Map.View.scrollEnabled> property.
		 */
		setScrollEnabled: never;

		/**
		 * Sets the value of the <Map.View.showsBuildings> property.
		 */
		setShowsBuildings: never;

		/**
		 * Sets the value of the <Map.View.showsCompass> property.
		 */
		setShowsCompass: never;

		/**
		 * Sets the value of the <Map.View.showsPointsOfInterest> property.
		 */
		setShowsPointsOfInterest: never;

		/**
		 * Sets the value of the <Map.View.showsScale> property.
		 */
		setShowsScale: never;

		/**
		 * Sets the value of the <Map.View.showsTraffic> property.
		 */
		setShowsTraffic: never;

		/**
		 * Sets the value of the <Map.View.style> property.
		 */
		setStyle: never;

		/**
		 * Sets the value of the <Map.View.traffic> property.
		 */
		setTraffic: never;

		/**
		 * Sets the value of the <Map.View.userLocation> property.
		 */
		setUserLocation: never;

		/**
		 * Sets the value of the <Map.View.userLocationButton> property.
		 */
		setUserLocationButton: never;

		/**
		 * Sets the value of the <Map.View.zOrderOnTop> property.
		 */
		setZOrderOnTop: never;

		/**
		 * Sets the value of the <Map.View.zoomEnabled> property.
		 */
		setZoomEnabled: never;

		/**
		 * Sets the visible region so that the map displays the specified annotations. If no array is passed
		 * annotations on the map will be shown. The default padding of 20px is applied and can be changed by
		 * using the <Map.View.padding> property.
		 */
		showAnnotations(annotations?: ReadonlyArray<Map.Annotation>): void;

		/**
		 * Takes a snapshot of the map
		 */
		snapshot(): void;

	}
	}
	/**
	 * Add-on Map module
	 */
declare class Map extends Titanium.Module {
	/**
	 * Creates and returns an instance of <Map.Annotation>.
	 */
	static createAnnotation(parameters?: Dictionary<Map.Annotation>): Map.Annotation;

	/**
	 * Creates and returns an instance of <Map.Camera>.
	 */
	static createCamera(parameters?: Dictionary<Map.Camera>): Map.Camera;

	/**
	 * Creates and returns an instance of <Map.Circle>.
	 */
	static createCircle(parameters?: Dictionary<Map.Circle>): Map.Circle;

	/**
	 * Creates and returns an instance of <Map.ImageOverlay>.
	 */
	static createImageOverlay(parameters?: Dictionary<Map.ImageOverlay>): Map.ImageOverlay;

	/**
	 * Creates and returns an instance of <Map.Polygon>.
	 */
	static createPolygon(parameters?: Dictionary<Map.Polygon>): Map.Polygon;

	/**
	 * Creates and returns an instance of <Map.Polyline>.
	 */
	static createPolyline(parameters?: Dictionary<Map.Polyline>): Map.Polyline;

	/**
	 * Creates and returns an instance of <Map.Route>.
	 */
	static createRoute(parameters?: Dictionary<Map.Route>): Map.Route;

	/**
	 * Creates and returns an instance of <Map.Snapshotter>.
	 */
	static createSnapshotter(parameters?: Dictionary<Map.Snapshotter>): Map.Snapshotter;

	/**
	 * Creates and returns an instance of <Map.StreetViewPanorama>.
	 */
	static createStreetViewPanorama(parameters?: Dictionary<Map.StreetViewPanorama>): Map.StreetViewPanorama;

	/**
	 * Creates and returns an instance of <Map.View>.
	 */
	static createView(parameters?: Dictionary<Map.View>): Map.View;

	/**
	 * Returns a code to indicate whether Google Play Services is available on the device.
	 */
	static isGooglePlayServicesAvailable(): number;

	}
/**
 * Simple dictionary used as an argument to [setSize](Map.Snapshotter.setSize).
 */
interface SnapshotSize {
	/**
	 * The height the be used for the snapshot.
	 */
	height?: number;

	/**
	 * The height the be used for the snapshot.
	 */
	width?: number;

}
/**
 * Simple object representing a street view coordinates.
 */
interface StreetViewPosition {
	/**
	 * Latitude value for the center point of the view, in decimal degrees.
	 */
	latitude?: number;

	/**
	 * Longitude value for the center point of the view, in decimal degrees.
	 */
	longitude?: number;

}
