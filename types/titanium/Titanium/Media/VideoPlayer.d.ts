declare namespace Titanium {
	namespace Media {
		/**
		 * Base event for class Titanium.Media.VideoPlayer
		 */
		interface VideoPlayerBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.Media.VideoPlayer;

		}
		/**
		 * Fired when the device detects a click against the view.
		 */
		interface VideoPlayer_click_Event extends VideoPlayerBaseEvent {
			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the device detects a double click against the view.
		 */
		interface VideoPlayer_dblclick_Event extends VideoPlayerBaseEvent {
			/**
			 * Returns `true` if the double click passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the device detects a double tap against the view.
		 */
		interface VideoPlayer_doubletap_Event extends VideoPlayerBaseEvent {
			/**
			 * Returns `true` if the double tap passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the view element gains focus.
		 */
		interface VideoPlayer_focus_Event extends VideoPlayerBaseEvent {
		}
		/**
		 * Fired when a hardware key is pressed in the view.
		 */
		interface VideoPlayer_keypressed_Event extends VideoPlayerBaseEvent {
			/**
			 * The code for the physical key that was pressed. For more details, see [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html). This API is experimental and subject to change.
			 */
			keyCode: number;

		}
		/**
		 * Fired when the device detects a long click.
		 */
		interface VideoPlayer_longclick_Event extends VideoPlayerBaseEvent {
		}
		/**
		 * Fired when the device detects a long press.
		 */
		interface VideoPlayer_longpress_Event extends VideoPlayerBaseEvent {
			/**
			 * Returns `true` if the long press passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the device detects a pinch gesture.
		 */
		interface VideoPlayer_pinch_Event extends VideoPlayerBaseEvent {
			/**
			 * The average distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			currentSpan: number;

			/**
			 * The average X distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			currentSpanX: number;

			/**
			 * The average Y distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			currentSpanY: number;

			/**
			 * The X coordinate of the current gesture's focal point.
			 */
			focusX: number;

			/**
			 * The Y coordinate of the current gesture's focal point.
			 */
			focusY: number;

			/**
			 * Returns `true` if a scale gesture is in progress, `false` otherwise.
			 */
			inProgress: boolean;

			/**
			 * The previous average distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			previousSpan: number;

			/**
			 * The previous average X distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			previousSpanX: number;

			/**
			 * The previous average Y distance between each of the pointers forming the gesture in progress through
			 * the focal point.
			 */
			previousSpanY: number;

			/**
			 * The scale factor relative to the points of the two touches in screen coordinates.
			 */
			scale: number;

			/**
			 * The event time of the current event being processed.
			 */
			time: number;

			/**
			 * The time difference in milliseconds between the previous accepted scaling event and the
			 * current scaling event.
			 */
			timeDelta: number;

			/**
			 * The velocity of the pinch in scale factor per second.
			 */
			velocity: number;

		}
		/**
		 * Fired when a layout cycle is finished.
		 */
		interface VideoPlayer_postlayout_Event extends VideoPlayerBaseEvent {
		}
		/**
		 * Fired when the device detects a single tap against the view.
		 */
		interface VideoPlayer_singletap_Event extends VideoPlayerBaseEvent {
			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the device detects a swipe gesture against the view.
		 */
		interface VideoPlayer_swipe_Event extends VideoPlayerBaseEvent {
			/**
			 * Direction of the swipe--either 'left', 'right', 'up', or 'down'.
			 */
			direction: string;

			/**
			 * Returns `true` if the swipe passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event's endpoint from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event's endpoint from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when a touch event is interrupted by the device.
		 */
		interface VideoPlayer_touchcancel_Event extends VideoPlayerBaseEvent {
			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when a touch event is completed.
		 */
		interface VideoPlayer_touchend_Event extends VideoPlayerBaseEvent {
			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired as soon as the device detects movement of a touch.
		 */
		interface VideoPlayer_touchmove_Event extends VideoPlayerBaseEvent {
			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired as soon as the device detects a touch gesture.
		 */
		interface VideoPlayer_touchstart_Event extends VideoPlayerBaseEvent {
			/**
			 * A value which indicates the stylus angle on the screen. If the stylus is perpendicular to the screen or no stylus is
			 * being used, the value will be Pi/2. If the stylus is parallel to the screen, the value will be 0.
			 * Note: This property is only available for iOS devices that support 3D-Touch and are 9.1 or later.
			 */
			altitudeAngle: number;

			/**
			 * The x value of the unit vector that points in the direction of the azimuth of the stylus.
			 * Note: This property is only available for iOS devices that support the Apple Pencil and are 9.1 or later.
			 */
			azimuthUnitVectorInViewX: number;

			/**
			 * The y value of the unit vector that points in the direction of the azimuth of the stylus.
			 * Note: This property is only available for iOS devices that support the Apple Pencil and are 9.1 or later.
			 */
			azimuthUnitVectorInViewY: number;

			/**
			 * The current force value of the touch event.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later and on some Android devices.
			 */
			force: number;

			/**
			 * Maximum possible value of the force property.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			maximumPossibleForce: number;

			/**
			 * Returns `true` if the touch passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * The current size of the touch area. Note: This property is only available on some Android devices.
			 */
			size: number;

			/**
			 * The time (in seconds) when the touch was used in correlation with the system start up.
			 * Note: This property is only available for iOS devices that support 3D-Touch and run 9.0 or later.
			 */
			timestamp: number;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when the device detects a two-finger tap against the view.
		 */
		interface VideoPlayer_twofingertap_Event extends VideoPlayerBaseEvent {
			/**
			 * Returns `true` if the tap passed through an overlapping window belonging to another app.
			 * This is a security feature to protect an app from "tapjacking", where a malicious app can use a
			 * system overlay to intercept touch events in your app or to trick the end-user to tap on UI
			 * in your app intended for the overlay.
			 */
			obscured: boolean;

			/**
			 * X coordinate of the event from the `source` view's coordinate system.
			 */
			x: number;

			/**
			 * Y coordinate of the event from the `source` view's coordinate system.
			 */
			y: number;

		}
		/**
		 * Fired when movie playback ends or a user exits playback.
		 */
		interface VideoPlayer_complete_Event extends VideoPlayerBaseEvent {
			/**
			 * Error code.
			 * Error code will be 0 if `success` is `true`, nonzero otherwise. If the error
			 * was generated by the operating system, that system's error value is used.
			 * Otherwise, this value will be -1.
			 */
			code: number;

			/**
			 * Error message, if any returned. Will be undefined if `success` is `true`.
			 */
			error: string;

			/**
			 * Reason that playback ended.
			 */
			reason: number;

			/**
			 * Indicates if the video was played successfully. User exit counts as a success.
			 * Returns `true` if `reason` is not
			 * [VIDEO_FINISH_REASON_PLAYBACK_ERROR](Titanium.Media.VIDEO_FINISH_REASON_PLAYBACK_ERROR),
			 * `false` otherwise.
			 */
			success: boolean;

		}
		/**
		 * Fired when the video duration is available.
		 */
		interface VideoPlayer_durationavailable_Event extends VideoPlayerBaseEvent {
			/**
			 * Video duration, in milliseconds.
			 */
			duration: number;

		}
		/**
		 * Fired when movie playback encounters an error.
		 */
		interface VideoPlayer_error_Event extends VideoPlayerBaseEvent {
			/**
			 * Error code.
			 * If the error was generated by the operating system, that system's error value
			 * is used. Otherwise, this value will be `-1`.
			 */
			code: number;

			/**
			 * Error message, if any returned. May be `undefined`.
			 */
			error: string;

			/**
			 * Reason for error as a string.
			 * @deprecated Use `error` property instead
			 */
			message: never;

			/**
			 * Indicates a successful operation. Returns `false`.
			 */
			success: boolean;

		}
		/**
		 * Fired when the movie play loads.
		 */
		interface VideoPlayer_load_Event extends VideoPlayerBaseEvent {
		}
		/**
		 * Fired when the network [loadState](Titanium.Media.VideoPlayer.loadState) changes.
		 */
		interface VideoPlayer_loadstate_Event extends VideoPlayerBaseEvent {
			/**
			 * Current value of the [loadState](Titanium.Media.VideoPlayer.loadState) property.
			 */
			loadState: number;

		}
		/**
		 * Fired when the natural size of the current movie is determined.
		 */
		interface VideoPlayer_naturalsizeavailable_Event extends VideoPlayerBaseEvent {
			/**
			 * Current value of the [naturalSize](Titanium.Media.VideoPlayer.naturalSize) property.
			 */
			naturalSize: number;

		}
		/**
		 * Fired when the [playbackState](Titanium.Media.VideoPlayer.playbackState) changes.
		 */
		interface VideoPlayer_playbackstate_Event extends VideoPlayerBaseEvent {
			/**
			 * Current value of the [playbackState](Titanium.Media.VideoPlayer.playbackState) property.
			 */
			playbackState: number;

		}
		/**
		 * Fired when the currently playing movie changes.
		 */
		interface VideoPlayer_playing_Event extends VideoPlayerBaseEvent {
			/**
			 * URL of the media.
			 */
			url: string;

		}
		/**
		 * Fired when the movie has preloaded and is ready to play.
		 */
		interface VideoPlayer_preload_Event extends VideoPlayerBaseEvent {
		}
		/**
		 * Fired when the movie player is resized.
		 */
		interface VideoPlayer_resize_Event extends VideoPlayerBaseEvent {
		}
		interface VideoPlayerEventMap extends ProxyEventMap {
			click: VideoPlayer_click_Event;

			complete: VideoPlayer_complete_Event;

			dblclick: VideoPlayer_dblclick_Event;

			doubletap: VideoPlayer_doubletap_Event;

			durationavailable: VideoPlayer_durationavailable_Event;

			error: VideoPlayer_error_Event;

			focus: VideoPlayer_focus_Event;

			keypressed: VideoPlayer_keypressed_Event;

			load: VideoPlayer_load_Event;

			loadstate: VideoPlayer_loadstate_Event;

			longclick: VideoPlayer_longclick_Event;

			longpress: VideoPlayer_longpress_Event;

			naturalsizeavailable: VideoPlayer_naturalsizeavailable_Event;

			pinch: VideoPlayer_pinch_Event;

			playbackstate: VideoPlayer_playbackstate_Event;

			playing: VideoPlayer_playing_Event;

			postlayout: VideoPlayer_postlayout_Event;

			preload: VideoPlayer_preload_Event;

			resize: VideoPlayer_resize_Event;

			singletap: VideoPlayer_singletap_Event;

			swipe: VideoPlayer_swipe_Event;

			touchcancel: VideoPlayer_touchcancel_Event;

			touchend: VideoPlayer_touchend_Event;

			touchmove: VideoPlayer_touchmove_Event;

			touchstart: VideoPlayer_touchstart_Event;

			twofingertap: VideoPlayer_twofingertap_Event;

		}
		/**
		 * A native control for playing videos.
		 */
		class VideoPlayer extends Titanium.UI.View {
			/**
			 * Whether or not the current movie can be played on a remote device.
			 */
			allowsAirPlay: boolean;

			/**
			 * Indicates if a movie should automatically start playback.
			 */
			autoplay: boolean;

			/**
			 * Sets the background view for customization which is always displayed behind movie content.
			 * @deprecated Use [Titanium.Media.VideoPlayer.overlayView](Titanium.Media.VideoPlayer.overlayView) instead.
			 */
			backgroundView: Titanium.UI.View;

			/**
			 * Current playback time of the current movie in milliseconds.
			 */
			currentPlaybackTime: number;

			/**
			 * The duration of the current movie in milliseconds, or 0.0 if not known.
			 */
			duration: number;

			/**
			 * The end time of movie playback, in milliseconds.
			 */
			endPlaybackTime: number;

			/**
			 * Determines if the movie is presented in the entire screen (obscuring all other application content).
			 * @deprecated This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple.
			 */
			fullscreen: boolean;

			/**
			 * The start time of movie playback, in milliseconds.
			 */
			initialPlaybackTime: number;

			/**
			 * Returns the network load state of the movie player.
			 * @deprecated On iOS, use [Titanium.Media.VideoPlayer.moviePlayerStatus](Titanium.Media.VideoPlayer.moviePlayerStatus) instead.
			 */
			readonly loadState: number;

			/**
			 * Media object to play, as either a `Ti.Filesystem.File`, a `Ti.Blob`, or an URL `String`.
			 */
			media: Titanium.Blob | Titanium.Filesystem.File | string;

			/**
			 * The style of the playback controls.
			 * @deprecated Use [Titanium.Media.VideoPlayer.showsControls](Titanium.Media.VideoPlayer.showsControls) instead.
			 */
			mediaControlStyle: number;

			/**
			 * The type of media in the player's current item first track.
			 */
			readonly mediaTypes: string;

			/**
			 * Returns the status of the movie player.
			 */
			readonly moviePlayerStatus: number;

			/**
			 * Returns the natural size of the movie.
			 */
			naturalSize: MovieSize;

			/**
			 * Use the overlay view to add additional custom views between the video content and the controls.
			 */
			overlayView: Titanium.UI.View;

			/**
			 * Whether or not the receiver allows Picture in Picture playback.
			 */
			pictureInPictureEnabled: boolean;

			/**
			 * Currently playable duration of the movie, in milliseconds, for progressively
			 * downloaded network content, or 0.0 if not known.
			 */
			readonly playableDuration: number;

			/**
			 * Current playback state of the video player.
			 */
			readonly playbackState: number;

			/**
			 * Boolean to indicate if the player has started playing.
			 */
			readonly playing: boolean;

			/**
			 * Determines how the movie player repeats when reaching the end of playback.
			 */
			repeatMode: number;

			/**
			 * Determines how the content scales to fit the view.
			 */
			scalingMode: number;

			/**
			 * Whether or not the receiver shows playback controls. Default is true.
			 */
			showsControls: boolean;

			/**
			 * URL of the media to play.
			 */
			url: string;

			/**
			 * Volume of the audio portion of the video.
			 */
			volume: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof VideoPlayerEventMap>(name: K, callback: (this: Titanium.Media.VideoPlayer, event: VideoPlayerEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Cancels all pending asynchronous thumbnail requests.
			 */
			cancelAllThumbnailImageRequests(): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof VideoPlayerEventMap>(name: K, event?: VideoPlayerEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Pauses playing the video.
			 */
			pause(): void;

			/**
			 * Starts playing the video.
			 */
			play(): void;

			/**
			 * Releases the internal video resources immediately.
			 */
			release(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof VideoPlayerEventMap>(name: K, callback: (this: Titanium.Media.VideoPlayer, event: VideoPlayerEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Asynchronously request thumbnail images for one or more points in time in the video.
			 */
			requestThumbnailImagesAtTimes(times: ReadonlyArray<number>, option: number, callback: (param0: ThumbnailResponse) => void): void;

			/**
			 * Stops playing the video.
			 */
			stop(): void;

		}
	}
}
/**
 * Simple object used to describe the size of a movie.
 */
interface MovieSize {
	/**
	 * Height of the movie.
	 */
	height?: number;

	/**
	 * Width of the movie.
	 */
	width?: number;

}
/**
 * Simple object passed to the thumbnail callback in response to the
 * [requestThumbnailImagesAtTimes](Titanium.Media.VideoPlayer.requestThumbnailImagesAtTimes)
 * method.
 */
interface ThumbnailResponse extends ErrorResponse {
	/**
	 * Error code. Returns `0` if `success` is `true`.
	 */
	code?: number;

	/**
	 * Thumbnail image, as a `Blob`.
	 */
	image?: Titanium.Blob;

	/**
	 * Time offset for the thumbnail, in seconds.
	 */
	time?: number;

}
