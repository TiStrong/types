/// <reference path="./Android/Android.d.ts" />
/// <reference path="./AudioPlayer.d.ts" />
/// <reference path="./AudioRecorder.d.ts" />
/// <reference path="./Item.d.ts" />
/// <reference path="./MusicPlayer.d.ts" />
/// <reference path="./Sound.d.ts" />
/// <reference path="./SystemAlert.d.ts" />
/// <reference path="./VideoPlayer.d.ts" />
declare namespace Titanium {
	/**
	 * The top-level Media module.
	 */
	namespace Media {
		/**
		 * Audio file format 3GPP2.
		 */
		const AUDIO_FILEFORMAT_3GP2: number;

		/**
		 * Audio file format 3GPP.
		 */
		const AUDIO_FILEFORMAT_3GPP: number;

		/**
		 * Audio file format Audio Interchange File Format (AIFF).
		 */
		const AUDIO_FILEFORMAT_AIFF: number;

		/**
		 * Audio file format Adaptive Multi-Rate (AMR).
		 */
		const AUDIO_FILEFORMAT_AMR: number;

		/**
		 * Audio file format Apple Compressed Audio Format (CAF).
		 */
		const AUDIO_FILEFORMAT_CAF: number;

		/**
		 * Audio file format MP3.
		 */
		const AUDIO_FILEFORMAT_MP3: number;

		/**
		 * Audio file format MP4.
		 */
		const AUDIO_FILEFORMAT_MP4: number;

		/**
		 * Audio file format MP4A.
		 */
		const AUDIO_FILEFORMAT_MP4A: number;

		/**
		 * Audio file format WAVE.
		 */
		const AUDIO_FILEFORMAT_WAVE: number;

		/**
		 * Audio format MPEG4 AAC encoding.
		 */
		const AUDIO_FORMAT_AAC: number;

		/**
		 * Audio format 8-bit [aLaw encoding](https://en.wikipedia.org/wiki/A-law_algorithm).
		 */
		const AUDIO_FORMAT_ALAW: number;

		/**
		 * Audio format Apple lossless encoding.
		 */
		const AUDIO_FORMAT_APPLE_LOSSLESS: number;

		/**
		 * Audio format [iLBC encoding](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec).
		 */
		const AUDIO_FORMAT_ILBC: number;

		/**
		 * Audio format Apple IMA4 encoding.
		 */
		const AUDIO_FORMAT_IMA4: number;

		/**
		 * Audio format 16-bit, [linear PCM encoding](https://en.wikipedia.org/wiki/Pulse-code_modulation).
		 */
		const AUDIO_FORMAT_LINEAR_PCM: number;

		/**
		 * Audio format 8-bit [muLaw encoding](https://en.wikipedia.org/wiki/M-law_algorithm).
		 */
		const AUDIO_FORMAT_ULAW: number;

		/**
		 * For long-duration sounds such as rain, car engine noise, and so on.
		 */
		const AUDIO_SESSION_CATEGORY_AMBIENT: string;

		/**
		 * Session mode for playing recorded music or other sounds that are central to the successful use of your application.
		 */
		const AUDIO_SESSION_CATEGORY_PLAYBACK: string;

		/**
		 * Session mode for recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) application.
		 */
		const AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD: string;

		/**
		 * Session mode for recording audio; it silences playback audio.
		 */
		const AUDIO_SESSION_CATEGORY_RECORD: string;

		/**
		 * Session mode for long-duration sounds such as rain, car engine noise, and so on.
		 */
		const AUDIO_SESSION_CATEGORY_SOLO_AMBIENT: string;

		/**
		 * Constant that specifies audio should output to the default audio route. See <Titanium.Media.setOverrideAudioRoute> for more information.
		 */
		const AUDIO_SESSION_OVERRIDE_ROUTE_NONE: number;

		/**
		 * Constant that specifies audio should output to the speaker. See <Titanium.Media.setOverrideAudioRoute> for more information.
		 */
		const AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER: number;

		/**
		 * Constant for output on a remote Air Play device. This is an output port.
		 */
		const AUDIO_SESSION_PORT_AIRPLAY: string;

		/**
		 * Constant for output on a Bluetooth A2DP device. This is an output port.
		 */
		const AUDIO_SESSION_PORT_BLUETOOTHA2DP: string;

		/**
		 * Constant for input or output on a Bluetooth Hands-Free Profile device. This can be both an input and output port.
		 */
		const AUDIO_SESSION_PORT_BLUETOOTHHFP: string;

		/**
		 * Constant for output on a Bluetooth Low Energy device. This is an output port. This is available on iOS7 and later.
		 */
		const AUDIO_SESSION_PORT_BLUETOOTHLE: string;

		/**
		 * Constant for built-in microphone on an iOS device. This is an input port.
		 */
		const AUDIO_SESSION_PORT_BUILTINMIC: string;

		/**
		 * Constant for the speaker you hold to your ear when on a phone call. This is an output port.
		 */
		const AUDIO_SESSION_PORT_BUILTINRECEIVER: string;

		/**
		 * Constant for built-in speaker on an iOS device. This is an output port.
		 */
		const AUDIO_SESSION_PORT_BUILTINSPEAKER: string;

		/**
		 * Constant for Input or output via Car Audio. This can be both an input and output port. This is available on iOS7 and later.
		 */
		const AUDIO_SESSION_PORT_CARAUDIO: string;

		/**
		 * Constant for output via High-Definition Multimedia Interface. This is an output port
		 */
		const AUDIO_SESSION_PORT_HDMI: string;

		/**
		 * Constant for headphone or headset output. This is an output port.
		 */
		const AUDIO_SESSION_PORT_HEADPHONES: string;

		/**
		 * Constant for microphone on a wired headset. This is an input port.
		 */
		const AUDIO_SESSION_PORT_HEADSETMIC: string;

		/**
		 * Constant for line level input on a dock connector. This is an input port.
		 */
		const AUDIO_SESSION_PORT_LINEIN: string;

		/**
		 * Constant for line level output on a dock connector. This is an output port.
		 */
		const AUDIO_SESSION_PORT_LINEOUT: string;

		/**
		 * Constant for input or output on a Universal Serial Bus device. This can be both an input and output port.
		 */
		const AUDIO_SESSION_PORT_USBAUDIO: string;

		/**
		 * Audio data is being buffered from the network.
		 */
		const AUDIO_STATE_BUFFERING: number;

		/**
		 * Audio playback is being initialized.
		 */
		const AUDIO_STATE_INITIALIZED: number;

		/**
		 * Playback is paused.
		 */
		const AUDIO_STATE_PAUSED: number;

		/**
		 * Audio playback is active.
		 */
		const AUDIO_STATE_PLAYING: number;

		/**
		 * Audio playback is starting.
		 */
		const AUDIO_STATE_STARTING: number;

		/**
		 * Audio playback is stopped.
		 */
		const AUDIO_STATE_STOPPED: number;

		/**
		 * Audio playback is stopping.
		 */
		const AUDIO_STATE_STOPPING: number;

		/**
		 * Player is waiting for audio data from the network.
		 */
		const AUDIO_STATE_WAITING_FOR_DATA: number;

		/**
		 * Player is waiting for audio data to fill the queue.
		 */
		const AUDIO_STATE_WAITING_FOR_QUEUE: number;

		/**
		 * Constant specifying that app is authorized to use camera. This is available on iOS7 and later.
		 */
		const CAMERA_AUTHORIZATION_AUTHORIZED: number;

		/**
		 * Constant specifying that app is denied usage of camera. This is available on iOS7 and later.
		 */
		const CAMERA_AUTHORIZATION_DENIED: number;

		/**
		 * Constant specifying that app is restricted from using camera. This is available on iOS7 and later.
		 */
		const CAMERA_AUTHORIZATION_RESTRICTED: number;

		/**
		 * Constant specifying that app is not yet authorized to use camera. This is available on iOS7 and later.
		 */
		const CAMERA_AUTHORIZATION_UNKNOWN: number;

		/**
		 * Constant specifying to have the device determine to use the flash or not.
		 */
		const CAMERA_FLASH_AUTO: number;

		/**
		 * Constant specifying to never fire the flash.
		 */
		const CAMERA_FLASH_OFF: number;

		/**
		 * Constant specifying to always fire the flash.
		 */
		const CAMERA_FLASH_ON: number;

		/**
		 * Constant specifying the front camera.
		 */
		const CAMERA_FRONT: number;

		/**
		 * Constant indicating the rear camera.
		 */
		const CAMERA_REAR: number;

		/**
		 * Constant for media device busy error.
		 */
		const DEVICE_BUSY: number;

		/**
		 * Crops the image proportionally causing its content to be clipped either horizontally or vertically.
		 */
		const IMAGE_SCALING_ASPECT_FILL: number;

		/**
		 * Letterbox or pillarbox scales the image proportionally to fit the container.
		 */
		const IMAGE_SCALING_ASPECT_FIT: number;

		/**
		 * Scales the image depending on how the view container is sized.
		 */
		const IMAGE_SCALING_AUTO: number;

		/**
		 * Stretches the image disproportionally to completely fill the container's bounds.
		 */
		const IMAGE_SCALING_FILL: number;

		/**
		 * Disables scaling and displays the image as-is.
		 */
		const IMAGE_SCALING_NONE: number;

		/**
		 * Media type constant for live photo media.
		 */
		const MEDIA_TYPE_LIVEPHOTO: string;

		/**
		 * Media type constant for photo media.
		 */
		const MEDIA_TYPE_PHOTO: string;

		/**
		 * Media type constant for video media.
		 */
		const MEDIA_TYPE_VIDEO: string;

		/**
		 * Constant for grouping query results by album.
		 */
		const MUSIC_MEDIA_GROUP_ALBUM: number;

		/**
		 * Constant for grouping query results by album and artist.
		 */
		const MUSIC_MEDIA_GROUP_ALBUM_ARTIST: number;

		/**
		 * Constant for grouping query results by artist.
		 */
		const MUSIC_MEDIA_GROUP_ARTIST: number;

		/**
		 * Constant for grouping query results by composer.
		 */
		const MUSIC_MEDIA_GROUP_COMPOSER: number;

		/**
		 * Constant for grouping query results by genre.
		 */
		const MUSIC_MEDIA_GROUP_GENRE: number;

		/**
		 * Constant for grouping query results by playlist.
		 */
		const MUSIC_MEDIA_GROUP_PLAYLIST: number;

		/**
		 * Constant for grouping query results by podcast title.
		 */
		const MUSIC_MEDIA_GROUP_PODCAST_TITLE: number;

		/**
		 * Constant for grouping query results by title.
		 */
		const MUSIC_MEDIA_GROUP_TITLE: number;

		/**
		 * Music library media containing any type of content.
		 */
		const MUSIC_MEDIA_TYPE_ALL: number;

		/**
		 * Music library media containing any type of audio content.
		 */
		const MUSIC_MEDIA_TYPE_ANY_AUDIO: number;

		/**
		 * Music library media containing audiobook content.
		 */
		const MUSIC_MEDIA_TYPE_AUDIOBOOK: number;

		/**
		 * Music library media containing music content.
		 */
		const MUSIC_MEDIA_TYPE_MUSIC: number;

		/**
		 * Music library media containing podcast content.
		 */
		const MUSIC_MEDIA_TYPE_PODCAST: number;

		/**
		 * Constant for "Repeat All" setting.
		 */
		const MUSIC_PLAYER_REPEAT_ALL: number;

		/**
		 * Constant for user's default repeat setting.
		 */
		const MUSIC_PLAYER_REPEAT_DEFAULT: number;

		/**
		 * Constant for "No Repeat" setting.
		 */
		const MUSIC_PLAYER_REPEAT_NONE: number;

		/**
		 * Constant for "Repeat one item" setting.
		 */
		const MUSIC_PLAYER_REPEAT_ONE: number;

		/**
		 * Constant for shuffling complete albums setting.
		 */
		const MUSIC_PLAYER_SHUFFLE_ALBUMS: number;

		/**
		 * Constant for user's default shuffle setting.
		 */
		const MUSIC_PLAYER_SHUFFLE_DEFAULT: number;

		/**
		 * Constant for "no shuffle" setting.
		 */
		const MUSIC_PLAYER_SHUFFLE_NONE: number;

		/**
		 * Constant for shuffling songs setting.
		 */
		const MUSIC_PLAYER_SHUFFLE_SONGS: number;

		/**
		 * Constant for interrupted state.
		 */
		const MUSIC_PLAYER_STATE_INTERRUPTED: number;

		/**
		 * Constant for paused state.
		 */
		const MUSIC_PLAYER_STATE_PAUSED: number;

		/**
		 * Constant for playing state.
		 */
		const MUSIC_PLAYER_STATE_PLAYING: number;

		/**
		 * Constant for backward seek state.
		 */
		const MUSIC_PLAYER_STATE_SEEK_BACKWARD: number;

		/**
		 * Constant for forward seek state.
		 */
		const MUSIC_PLAYER_STATE_SEEK_FORWARD: number;

		/**
		 * Constant for stopped state.
		 */
		const MUSIC_PLAYER_STATE_STOPPED: number;

		/**
		 * Constant for media no camera error.
		 */
		const NO_CAMERA: number;

		/**
		 * Constant for media no video error.
		 */
		const NO_VIDEO: number;

		/**
		 * Media type constant for high-quality video recording.
		 */
		const QUALITY_HIGH: number;

		/**
		 * Media type constant for low-quality video recording.
		 */
		const QUALITY_LOW: number;

		/**
		 * Media type constant for medium-quality video recording.
		 */
		const QUALITY_MEDIUM: number;

		/**
		 * Constant for unknown media error.
		 */
		const UNKNOWN_ERROR: number;

		/**
		 * Constant for default video controls.
		 * @deprecated This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple.
		 */
		const VIDEO_CONTROL_DEFAULT: number;

		/**
		 * Constant for video controls for an embedded view.
		 * @deprecated This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple.
		 */
		const VIDEO_CONTROL_EMBEDDED: number;

		/**
		 * Constant for fullscreen video controls.
		 * @deprecated This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple.
		 */
		const VIDEO_CONTROL_FULLSCREEN: number;

		/**
		 * Constant for video controls hidden.
		 * @deprecated This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple.
		 */
		const VIDEO_CONTROL_HIDDEN: number;

		/**
		 * Constant for no video controls.
		 * @deprecated This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple.
		 */
		const VIDEO_CONTROL_NONE: number;

		/**
		 * Video playback ended normally.
		 */
		const VIDEO_FINISH_REASON_PLAYBACK_ENDED: number;

		/**
		 * Video playback ended abnormally.
		 */
		const VIDEO_FINISH_REASON_PLAYBACK_ERROR: number;

		/**
		 * Video playback ended by user action (such as clicking the `Done` button).
		 */
		const VIDEO_FINISH_REASON_USER_EXITED: number;

		/**
		 * Indicates that the player can no longer play media items because of an error.
		 */
		const VIDEO_LOAD_STATE_FAILED: number;

		/**
		 * Current media is playable.
		 */
		const VIDEO_LOAD_STATE_PLAYABLE: number;

		/**
		 * Current load state is not known.
		 */
		const VIDEO_LOAD_STATE_UNKNOWN: number;

		/**
		 * The media contains audio media.
		 */
		const VIDEO_MEDIA_TYPE_AUDIO: string;

		/**
		 * The media contains closed-caption content.
		 */
		const VIDEO_MEDIA_TYPE_CLOSED_CAPTION: string;

		/**
		 * The media contains depth data.
		 */
		const VIDEO_MEDIA_TYPE_DEPTH_DATA: string;

		/**
		 * The media contains metadata.
		 */
		const VIDEO_MEDIA_TYPE_METADATA: string;

		/**
		 * The media contains metadata objects.
		 */
		const VIDEO_MEDIA_TYPE_METADATA_OBJECT: string;

		/**
		 * The media contains muxed media.
		 */
		const VIDEO_MEDIA_TYPE_MUXED: string;

		/**
		 * The media contains subtitles.
		 */
		const VIDEO_MEDIA_TYPE_SUBTITLE: string;

		/**
		 * The media contains text.
		 */
		const VIDEO_MEDIA_TYPE_TEXT: string;

		/**
		 * The media contains a time code.
		 */
		const VIDEO_MEDIA_TYPE_TIMECODE: string;

		/**
		 * The media contains video.
		 */
		const VIDEO_MEDIA_TYPE_VIDEO: string;

		/**
		 * Video playback has been interrupted.
		 */
		const VIDEO_PLAYBACK_STATE_INTERRUPTED: number;

		/**
		 * Video playback is paused.
		 */
		const VIDEO_PLAYBACK_STATE_PAUSED: number;

		/**
		 * Video is being played.
		 */
		const VIDEO_PLAYBACK_STATE_PLAYING: number;

		/**
		 * Video playback is rewinding.
		 */
		const VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD: number;

		/**
		 * Video playback is seeking forward.
		 */
		const VIDEO_PLAYBACK_STATE_SEEKING_FORWARD: number;

		/**
		 * Video playback is stopped.
		 */
		const VIDEO_PLAYBACK_STATE_STOPPED: number;

		/**
		 * Constant for disabling repeat on video playback.
		 */
		const VIDEO_REPEAT_MODE_NONE: number;

		/**
		 * Constant for repeating one video (i.e., the one video will repeat constantly) during playback.
		 */
		const VIDEO_REPEAT_MODE_ONE: number;

		/**
		 * Scale video to fill the screen, clipping edges if necessary.
		 * @deprecated Use <Titanium.Media.VIDEO_SCALING_RESIZE_ASPECT_FILL> instead.
		 * This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple.
		 *
		 */
		const VIDEO_SCALING_ASPECT_FILL: number;

		/**
		 * Scale video to fit the screen, letterboxing if necessary.
		 * @deprecated Use <Titanium.Media.VIDEO_SCALING_RESIZE_ASPECT> instead.
		 * This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple.
		 *
		 */
		const VIDEO_SCALING_ASPECT_FIT: number;

		/**
		 * Video is scaled until both dimensions fit the screen exactly, stretching if necessary.
		 * @deprecated Use <Titanium.Media.VIDEO_SCALING_MODE_RESIZE> instead.
		 * This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple.
		 *
		 */
		const VIDEO_SCALING_MODE_FILL: number;

		/**
		 * Video scaling is disabled.
		 * @deprecated This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple.
		 */
		const VIDEO_SCALING_NONE: number;

		/**
		 * Specifies that the video should be stretched to fill the bounds of layer.
		 */
		const VIDEO_SCALING_RESIZE: string | number;

		/**
		 * Specifies that the player should preserve the aspect ratio of video and fit the video within the bounds of layer.
		 */
		const VIDEO_SCALING_RESIZE_ASPECT: string | number;

		/**
		 * Specifies that the player should preserve the aspect ratio of video and fill the bounds of layer.
		 */
		const VIDEO_SCALING_RESIZE_ASPECT_FILL: string | number;

		/**
		 * Use the closest sync (or key) frame at given the time.
		 */
		const VIDEO_TIME_OPTION_CLOSEST_SYNC: number;

		/**
		 * Use the exact time.
		 */
		const VIDEO_TIME_OPTION_EXACT: number;

		/**
		 * Use the closest keyframe in the time.
		 */
		const VIDEO_TIME_OPTION_NEAREST_KEYFRAME: number;

		/**
		 * Use the sync (or key) frame located right after or at given the time.
		 */
		const VIDEO_TIME_OPTION_NEXT_SYNC: number;

		/**
		 * Use the sync (or key) frame located right before or at given the time.
		 */
		const VIDEO_TIME_OPTION_PREVIOUS_SYNC: number;

	}
	/**
	 * Base event for class Titanium.Media
	 */
	interface MediaBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.Media;

	}
	/**
	 * Fires when the camera overlay is ready to take pictures.
	 */
	interface Media_cameraready_Event extends MediaBaseEvent {
	}
	/**
	 * Fired when an audio line type change is detected.
	 */
	interface Media_routechange_Event extends MediaBaseEvent {
		/**
		 * Returns a description of the current route, consisting of zero or more input ports and zero or more output ports.
		 */
		currentRoute: RouteDescription;

		/**
		 * Returns a description of the old route, consisting of zero or more input ports and zero or more output ports.
		 */
		oldRoute: RouteDescription;

		/**
		 * The reason for route change.
		 */
		reason: string;

	}
	/**
	 * Fired when the volume output changes.
	 */
	interface Media_volume_Event extends MediaBaseEvent {
		/**
		 * New volume level in dB.
		 */
		volume: number;

	}
	interface MediaEventMap extends ProxyEventMap {
		cameraready: Media_cameraready_Event;

		routechange: Media_routechange_Event;

		volume: Media_volume_Event;

	}
	/**
	 * The top-level Media module.
	 */
	class Media extends Titanium.Module {
		/**
		 * Media type constant for medium-quality video recording.
		 */
		static readonly QUALITY_640x480: number;

		/**
		 * Media type constant for medium-quality video recording.
		 */
		static readonly QUALITY_IFRAME_1280x720: number;

		/**
		 * Media type constant for medium-quality video recording.
		 */
		static readonly QUALITY_IFRAME_960x540: number;

		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * An instance of <Titanium.Media.MusicPlayer> representing the app-specific music player.
		 */
		static readonly appMusicPlayer: Titanium.Media.MusicPlayer;

		/**
		 * Returns `true` if the device is playing audio.
		 */
		static readonly audioPlaying: boolean;

		/**
		 * A constant for the audio session category to be used.
		 */
		static audioSessionCategory: string;

		/**
		 * Array of media type constants supported for the camera.
		 */
		static availableCameraMediaTypes: string[];

		/**
		 * Array indicating which cameras are available, `CAMERA_FRONT`, `CAMERA_REAR` or both.
		 */
		static readonly availableCameras: number[];

		/**
		 * Array of media type constants supported for saving to the device's camera roll or saved images album.
		 */
		static availablePhotoGalleryMediaTypes: string[];

		/**
		 * Array of media type constants supported for the photo library.
		 */
		static availablePhotoMediaTypes: string[];

		/**
		 * Current average microphone level in dB or -1 if microphone monitoring is disabled.
		 */
		static averageMicrophonePower: number;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * Returns the authorization status for the camera.
		 */
		static readonly cameraAuthorization: number;

		/**
		 * Determines how the flash is fired when using the device's camera.
		 */
		static cameraFlashMode: number;

		/**
		 * `true` if the device has a recording input device available.
		 */
		static readonly canRecord: boolean;

		/**
		 * Returns a description of the current route, consisting of zero or more input ports and zero or more output ports.
		 */
		static readonly currentRoute: RouteDescription;

		/**
		 * `true` if the device has camera support.
		 */
		static readonly isCameraSupported: boolean;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Current microphone level peak power in dB or -1 if microphone monitoring is disabled.
		 */
		static readonly peakMicrophonePower: number;

		/**
		 * An instance of <Titanium.Media.MusicPlayer> representing the system-wide music player.
		 */
		static readonly systemMusicPlayer: Titanium.Media.MusicPlayer;

		/**
		 * Current volume of the playback device.
		 */
		static readonly volume: number;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof MediaEventMap>(name: K, callback: (this: Titanium.Media, event: MediaEventMap[K]) => void): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Plays a device beep notification.
		 */
		static beep(): void;

		/**
		 * Creates and returns an instance of <Titanium.Media.AudioPlayer>.
		 */
		static createAudioPlayer(parameters?: Dictionary<Titanium.Media.AudioPlayer>): Titanium.Media.AudioPlayer;

		/**
		 * Creates and returns an instance of <Titanium.Media.AudioRecorder>.
		 */
		static createAudioRecorder(parameters?: Dictionary<Titanium.Media.AudioRecorder>): Titanium.Media.AudioRecorder;

		/**
		 * Creates and returns an instance of <Titanium.Media.Sound>.
		 */
		static createSound(parameters?: Dictionary<Titanium.Media.Sound>): Titanium.Media.Sound;

		/**
		 * Creates and returns an instance of <Titanium.Media.SystemAlert>.
		 * @deprecated This iOS-only API has been deprecated and moved to the [Ti.SystemAlert](https://github.com/appcelerator-modules/ti.systemalert) module in 8.0.0.
		 */
		static createSystemAlert(parameters?: Dictionary<Titanium.Media.SystemAlert>): Titanium.Media.SystemAlert;

		/**
		 * Creates and returns an instance of <Titanium.Media.VideoPlayer>.
		 */
		static createVideoPlayer(parameters?: Dictionary<Titanium.Media.VideoPlayer>): Titanium.Media.VideoPlayer;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent<K extends keyof MediaEventMap>(name: K, event?: MediaEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Returns `true` if the app has audio permissions.
		 * @deprecated Use [Titanium.Media.hasAudioRecorderPermissions](Titanium.Media.hasAudioRecorderPermissions) instead.
		 */
		static hasAudioPermissions: never;

		/**
		 * Returns `true` if the app has audio permissions.
		 */
		static hasAudioRecorderPermissions(): boolean;

		/**
		 * Returns `true` if the app has camera access.
		 */
		static hasCameraPermissions(): boolean;

		/**
		 * Returns `true` if the app has music library access.
		 */
		static hasMusicLibraryPermissions(): boolean;

		/**
		 * Returns `true` if the app has photo gallery permissions.
		 */
		static hasPhotoGalleryPermissions(): boolean;

		/**
		 * Hides the device camera UI.
		 */
		static hideCamera(): void;

		/**
		 * Hides the music library.
		 */
		static hideMusicLibrary(): void;

		/**
		 * Returns `true` if the source supports the specified media type.
		 */
		static isMediaTypeSupported(source: string, type: string): boolean;

		/**
		 * Shows the music library and allows the user to select one or more tracks.
		 */
		static openMusicLibrary(options: MusicLibraryOptionsType): void;

		/**
		 * Opens the photo gallery image picker.
		 */
		static openPhotoGallery(options: PhotoGalleryOptionsType): void;

		/**
		 * Displays the given image.
		 */
		static previewImage(options: Dictionary<PreviewImageOptions>): void;

		/**
		 * Searches the music library for items matching the specified search predicates.
		 */
		static queryMusicLibrary(query: MediaQueryType): Titanium.Media.Item[];

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof MediaEventMap>(name: K, callback: (this: Titanium.Media, event: MediaEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Request the user's permission for audio recording.
		 * @deprecated Use the [Titanium.Media.requestAudioRecorderPermissions](Titanium.Media.requestAudioRecorderPermissions) method instead.
		 */
		static requestAudioPermissions: never;

		/**
		 * Request the user's permission for audio recording.
		 */
		static requestAudioRecorderPermissions(callback?: (param0: MediaAuthorizationResponse) => void): Promise<MediaAuthorizationResponse>;

		/**
		 * Request the user's permission for audio recording.
		 * @deprecated Use the [Titanium.Media.requestAudioRecorderPermissions](Titanium.Media.requestAudioRecorderPermissions) method instead.
		 */
		static requestAuthorization: never;

		/**
		 * Requests for camera access.
		 * @deprecated Please use the [Titanium.Media.requestCameraPermissions](Titanium.Media.requestCameraPermissions) method instead.
		 */
		static requestCameraAccess: never;

		/**
		 * Requests for camera access.
		 */
		static requestCameraPermissions(callback?: (param0: RequestCameraAccessResult) => void): Promise<RequestCameraAccessResult>;

		/**
		 * Request permissions for the native music-library.
		 */
		static requestMusicLibraryPermissions(callback: (param0: RequestMusicLibraryAccessResult) => void): void;

		/**
		 * Requests for photo gallery permissions.
		 */
		static requestPhotoGalleryPermissions(callback?: (param0: RequestPhotoGalleryAccessResult) => void): Promise<RequestPhotoGalleryAccessResult>;

		/**
		 * Saves media to the device's photo gallery / camera roll.
		 */
		static saveToPhotoGallery(media: Titanium.Blob | Titanium.Filesystem.File, callbacks: any): void;

		/**
		 * Overrides the default audio route when using the <Titanium.Media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD> session mode.
		 */
		static setOverrideAudioRoute(route: number): void;

		/**
		 * Shows the camera.
		 */
		static showCamera(options: CameraOptionsType): void;

		/**
		 * Starts monitoring the microphone sound level.
		 */
		static startMicrophoneMonitor(): void;

		/**
		 * Starts video capture using the camera specified.
		 */
		static startVideoCapture(): void;

		/**
		 * Stops monitoring the microphone sound level.
		 */
		static stopMicrophoneMonitor(): void;

		/**
		 * Stops video capture using the camera specified.
		 */
		static stopVideoCapture(): void;

		/**
		 * Switches between front and rear-facing cameras. Make sure to set one of the below constants to determine
		 * the camera you want to switch to.
		 */
		static switchCamera(camera: number): void;

		/**
		 * Uses the device camera to capture a photo.
		 */
		static takePicture(): void;

		/**
		 * Takes a screen shot of the visible UI on the device.
		 */
		static takeScreenshot(callback: (param0: ScreenshotResult) => void): void;

		/**
		 * Makes the device vibrate.
		 */
		static vibrate(pattern?: ReadonlyArray<number>): void;

	}
}
/**
 * A media object from the camera or photo gallery.
 */
interface CameraMediaItemType extends SuccessResponse {
	/**
	 * Error code. Returns 0.
	 */
	code?: number;

	/**
	 * Simple object defining the user's selected crop rectangle, or `null` if the user has not edited the photo. `width`/`height` values are assumed to be in pixels.
	 */
	cropRect?: Dimension;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * The live photo object, as a <Titanium.UI.iOS.LivePhoto> and
	 * `undefined` if no live photo is selected.
	 */
	livePhoto?: Titanium.UI.iOS.LivePhoto;

	/**
	 * The media object, as a [Blob](Titanium.Blob).
	 */
	media?: Titanium.Blob;

	/**
	 * The type of media, either `MEDIA_TYPE_PHOTO`, `MEDIA_TYPE_LIVEPHOTO` or `MEDIA_TYPE_VIDEO` defined in <Titanium.Media>.
	 */
	mediaType?: string;

	/**
	 * Simple object defining the preview image size. This will be undefined when custom camera overlay is not used. Values are assumed to be in pixels.
	 */
	previewRect?: Size;

	/**
	 * Indicates if the operation succeeded. Returns `true`.
	 */
	success?: boolean;

}
/**
 * A media object from photo gallery when <Titanium.Media.allowMultiple> is `true`.
 */
interface CameraMediaMultipleItemsType extends SuccessResponse {
	/**
	 * The list of selected images.
	 */
	images?: CameraMediaItemType[];

	/**
	 * The list of selected live photo objects.
	 */
	livePhotos?: Titanium.UI.iOS.LivePhoto[];

	/**
	 * The list of selected videos.
	 */
	videos?: CameraMediaItemType[];

}
/**
 * Simple object for specifying options to [showCamera](Titanium.Media.showCamera).
 */
interface CameraOptionsType {
	/**
	 * Specifies if the media should be editable after capture/selection.
	 */
	allowEditing?: boolean;

	/**
	 * Function to call if the user presses the back button.
	 */
	androidback?: (param0: FailureResponse) => void;

	/**
	 * Specifies if the dialog should be animated upon showing and hiding.
	 */
	animated?: boolean;

	/**
	 * Controls the type of arrow and position of the popover.
	 */
	arrowDirection?: number;

	/**
	 * Specifies if the camera should be hidden automatically after the media capture is completed.
	 */
	autohide?: boolean;

	/**
	 * Determines if the camera preview should rotate or not.
	 */
	autorotate?: boolean;

	/**
	 * Function to call if the user presses the cancel button.
	 */
	cancel?: (param0: FailureResponse) => void;

	/**
	 * Function to call upon receiving an error.
	 */
	error?: (param0: FailureResponse) => void;

	/**
	 * Show the camera in a popover.
	 */
	inPopOver?: boolean;

	/**
	 * Array of media type constants to allow. Note: If you want to select live photos, iOS only  allows
	 * you to select existing live photos from the gallery, capturing new live photos is not supported by
	 * iOS public API, yet.
	 */
	mediaTypes?: string[];

	/**
	 * View to added as an overlay to the camera UI (on top).
	 */
	overlay?: Titanium.UI.View;

	/**
	 * View to position the camera or photo gallery popover on top of.
	 */
	popoverView?: Titanium.UI.View;

	/**
	 * Specifies if the media should be saved to the photo gallery upon successful capture.
	 */
	saveToPhotoGallery?: boolean;

	/**
	 * Indicates if the built-in camera controls should be displayed.
	 */
	showControls?: boolean;

	/**
	 * Function to call when the camera is closed after a successful capture/selection.
	 */
	success?: (param0: CameraMediaItemType) => void;

	/**
	 * Transformation matrix to apply to the camera or photogallery view.
	 */
	transform?: Titanium.UI.Matrix2D;

	/**
	 * Maximum duration (in milliseconds) to allow video capture before completing.
	 */
	videoMaximumDuration?: number;

	/**
	 * Constant to indicate the video quality during capture.
	 */
	videoQuality?: number;

	/**
	 * Opens the camera with the specified camera direction.
	 */
	whichCamera?: number;

}
/**
 * Argument passed to the callback when a request finishes successfully or erroneously.
 */
interface MediaAuthorizationResponse extends ErrorResponse {
}
/**
 * A full query descriptor for a filtering predicate.
 */
interface MediaQueryInfoType {
	/**
	 * Whether or not the predicate is for an exact match.  The default is `true`.
	 */
	exact?: boolean;

	/**
	 * The value for the given predicate. See the descriptions in <MediaQueryType> for information about which properties require which values.
	 */
	value?: number | string | boolean;

}
/**
 * A specifier for a media library query. By default, filters perform an exact match.
 */
interface MediaQueryType {
	/**
	 * The album artist to filter on. Value should be a String.
	 */
	albumArtist?: MediaQueryInfoType | string;

	/**
	 * The album artist persistent ID to filter on. Value should be a Number.
	 */
	albumArtistPersistentID?: MediaQueryInfoType | number;

	/**
	 * The album persistent ID to filter on. Value should be a Number.
	 */
	albumPersistentID?: MediaQueryInfoType | number;

	/**
	 * The album title to filter on. Value should be a String.
	 */
	albumTitle?: MediaQueryInfoType | string;

	/**
	 * The artist to filter on. Value should be a String.
	 */
	artist?: MediaQueryInfoType | string;

	/**
	 * The composer to filter on. Value should be a String.
	 */
	composer?: MediaQueryInfoType | string;

	/**
	 * The composer persistent ID to filter on. Value should be a Number.
	 */
	composerPersistentID?: MediaQueryInfoType | number;

	/**
	 * The genre to filter on. Value should be a String.
	 */
	genre?: MediaQueryInfoType | string;

	/**
	 * The genre persistent ID to filter on. Value should be a Number.
	 */
	genrePersistentID?: MediaQueryInfoType | number;

	/**
	 * A constant that specifies the ordering of the result array.
	 */
	grouping?: number;

	/**
	 * Filter by whether or not the item is a protected asset.
	 * Value should be a Boolean.
	 */
	hasProtectedAsset?: MediaQueryInfoType | boolean;

	/**
	 * Filter by whether or not the item is a cloud item.
	 * Value should be a Boolean.
	 */
	isCloudItem?: MediaQueryInfoType | boolean;

	/**
	 * Filter by whether or not the item is a compilation.
	 * The value should be a Boolean.
	 */
	isCompilation?: MediaQueryInfoType | boolean;

	/**
	 * The media type to filter on.
	 */
	mediaType?: MediaQueryInfoType | number;

	/**
	 * The persistent ID to filter on. Value should be a Number.
	 */
	persistentID?: MediaQueryInfoType | number;

	/**
	 * The play count to filter on. Value should be a Number.
	 */
	playCount?: MediaQueryInfoType | number;

	/**
	 * The podcast persistent ID to filter on. Value should be a Number.
	 */
	podcastPersistentID?: MediaQueryInfoType | number;

	/**
	 * The podcast title to filter on. Value should be a String.
	 */
	podcastTitle?: MediaQueryInfoType | string;

	/**
	 * The title to filter on. Value should be a String.
	 */
	title?: MediaQueryInfoType | string;

}
/**
 * Simple object for specifying options to [openMusicLibrary](Titanium.Media.openMusicLibrary).
 */
interface MusicLibraryOptionsType {
	/**
	 * Set to `true` to allow the user to select multiple items from the library.
	 */
	allowMultipleSelections?: boolean;

	/**
	 * Boolean if the dialog should be animated when showing and hiding.
	 */
	animated?: boolean;

	/**
	 * Specifies that the library should be hidden automatically after media selection is completed.
	 */
	autohide?: boolean;

	/**
	 * Function to call if the user presses the cancel button.
	 */
	cancel?: (param0: FailureResponse) => void;

	/**
	 * Function to call upon receiving an error.
	 */
	error?: (param0: FailureResponse) => void;

	/**
	 * An array of media type constants defining selectable media.
	 */
	mediaTypes?: number | number[];

	/**
	 * Function to call when the music library selection is made.
	 */
	success?: (param0: MusicLibraryResponseType) => void;

}
/**
 * Simple object passed to the [openMusicLibrary](Titanium.Media.openMusicLibrary)
 * `success` callback function.
 */
interface MusicLibraryResponseType {
	/**
	 * A list of all the items chosen by the user.
	 */
	items?: Titanium.Media.Item[];

	/**
	 * A single representative of the selected items.
	 */
	representative?: Titanium.Media.Item;

	/**
	 * Media types in this collection, represented as the bitwise OR of the media type
	 * values for all media types represented in `items`.
	 */
	types?: number;

}
/**
 * Simple object for specifying options to
 * [openPhotoGallery](Titanium.Media.openPhotoGallery).
 */
interface PhotoGalleryOptionsType {
	/**
	 * Specifies if the media should be editable after capture/selection.
	 */
	allowEditing?: boolean;

	/**
	 * Specifies if the user should be able to select multiple photos.
	 */
	allowMultiple?: boolean;

	/**
	 * Specifies if the video should be transcoded (using highest quality preset) . If set to false no video transcoding will be performed.
	 */
	allowTranscoding?: boolean;

	/**
	 * Specifies if the dialog should be animated upon showing and hiding.
	 */
	animated?: boolean;

	/**
	 * Controls the type of arrow and position of the popover.
	 */
	arrowDirection?: number;

	/**
	 * Specifies if the photo gallery should be hidden automatically after the media
	 * selection is completed.
	 */
	autohide?: boolean;

	/**
	 * Function to call if the user presses the cancel button.
	 */
	cancel?: (param0: FailureResponse) => void;

	/**
	 * Function to call upon receiving an error.
	 */
	error?: (param0: FailureResponse) => void;

	/**
	 * Array of media type constants to allow.
	 * Live photos is only supported on the iOS platform, starting with iOS 9.1. If you want
	 * to allow live photos with <Titanium.Media.MEDIA_TYPE_LIVEPHOTO>, you also need to specify
	 * at least <Titanium.Media.MEDIA_TYPE_PHOTO> as a fallback. If you do not allow live
	 * photos, they still can be selected, but will be represented as a normal static photo.
	 */
	mediaTypes?: string[];

	/**
	 * View to position the photo gallery popover on top of.
	 */
	popoverView?: Titanium.UI.View;

	/**
	 * Specifies number of media item that can be selected.
	 */
	selectionLimit?: boolean;

	/**
	 * Function to call when the photo gallery is closed after a successful selection.
	 */
	success?: ((param0: CameraMediaItemType) => void) | ((param0: CameraMediaMultipleItemsType) => void);

}
/**
 * The parameter passed to the `error` callback of <PreviewImageOptions>.
 */
interface PreviewImageError extends FailureResponse {
	/**
	 * Error code, if applicable.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Description of the error.
	 * @deprecated Use `error` property instead
	 */
	message: never;

	/**
	 * Indicates if the operation succeeded. Returns `false`.
	 */
	success?: boolean;

}
/**
 * Options passed to <Titanium.Media.previewImage>.
 */
interface PreviewImageOptions {
	/**
	 * Function called back if the preview fails. Check the `message` property of passed back parameter.
	 */
	error?: (param0: PreviewImageError) => void;

	/**
	 * The image to preview. Must be a blob based on a file, such as from <Titanium.Filesystem.File.read>.
	 */
	image?: Titanium.Blob;

	/**
	 * Function to be called back if the preview succeeds. No info is passed.
	 */
	success?: (param0: SuccessResponse) => void;

}
/**
 * Argument passed to the callback when a request finishes successfully or erroneously.
 */
interface RequestCameraAccessResult extends ErrorResponse {
}
/**
 * Argument passed to the callback when a request finishes successfully or erroneously.
 */
interface RequestMusicLibraryAccessResult extends ErrorResponse {
}
/**
 * Argument passed to the callback when a request finishes successfully or erroneously.
 */
interface RequestPhotoGalleryAccessResult extends ErrorResponse {
}
/**
 * An Object describing the current audio route.
 */
interface RouteDescription {
	/**
	 * An Array of current input ports for the session. See the `AUDIO_SESSION_PORT` constants.
	 */
	inputs?: string[];

	/**
	 * An Array of current output ports for the session. See the `AUDIO_SESSION_PORT` constants.
	 */
	outputs?: string[];

}
/**
 * The parameter passed to the <Titanium.Media.takeScreenshot> callback.
 */
interface ScreenshotResult {
	/**
	 * The screenshot image.
	 */
	media?: Titanium.Blob;

}
