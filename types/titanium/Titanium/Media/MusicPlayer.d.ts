declare namespace Titanium {
	namespace Media {
		/**
		 * Base event for class Titanium.Media.MusicPlayer
		 */
		interface MusicPlayerBaseEvent extends Ti.Event {
			/**
			 * Source object that fired the event.
			 */
			source: Titanium.Media.MusicPlayer;

		}
		/**
		 * Fired when the currently playing media item changes.
		 */
		interface MusicPlayer_playingchange_Event extends MusicPlayerBaseEvent {
		}
		/**
		 * Fired when the music player's playback state changes.
		 */
		interface MusicPlayer_statechange_Event extends MusicPlayerBaseEvent {
		}
		interface MusicPlayerEventMap extends ProxyEventMap {
			playingchange: MusicPlayer_playingchange_Event;

			statechange: MusicPlayer_statechange_Event;

		}
		/**
		 * This object represents a music controller.
		 */
		class MusicPlayer extends Titanium.Proxy {
			/**
			 * Current point in song playback, in seconds.
			 */
			currentPlaybackTime: number;

			/**
			 * An `Item` object representing the currently playing media item.
			 */
			readonly nowPlaying: Titanium.Media.Item;

			/**
			 * Playback state.
			 */
			readonly playbackState: number;

			/**
			 * Repeat setting.
			 */
			repeatMode: number;

			/**
			 * Shuffle setting.
			 */
			shuffleMode: number;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener<K extends keyof MusicPlayerEventMap>(name: K, callback: (this: Titanium.Media.MusicPlayer, event: MusicPlayerEventMap[K]) => void): void;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent<K extends keyof MusicPlayerEventMap>(name: K, event?: MusicPlayerEventMap[K]): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Pauses playback of the current media item.
			 */
			pause(): void;

			/**
			 * Begins playback of the current media item.
			 */
			play(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener<K extends keyof MusicPlayerEventMap>(name: K, callback: (this: Titanium.Media.MusicPlayer, event: MusicPlayerEventMap[K]) => void): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Begins seeking backward in the currently playing media.
			 */
			seekBackward(): void;

			/**
			 * Begins seeking forward in the currently playing media item.
			 */
			seekForward(): void;

			/**
			 * Sets the media queue.
			 */
			setQueue(queue: Titanium.Media.Item | Titanium.Media.Item[] | string): void;

			/**
			 * Skips to the beginning of the currently playing media item.
			 */
			skipToBeginning(): void;

			/**
			 * Skips to the next media item in the queue.
			 */
			skipToNext(): void;

			/**
			 * Skips to the previous media item in the queue.
			 */
			skipToPrevious(): void;

			/**
			 * Stops playback of the current media queue.
			 */
			stop(): void;

			/**
			 * Ends a seek operation and returns to the previous playback state.
			 * See also: [seekForward](Titanium.Media.MusicPlayer.seekForward) and
			 * [seekBackward](Titanium.Media.MusicPlayer.seekBackward).
			 */
			stopSeeking(): void;

		}
	}
}
