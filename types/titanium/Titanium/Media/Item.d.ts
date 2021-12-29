declare namespace Titanium {
	namespace Media {
		/**
		 * A representation of a media item returned by [openMusicLibrary](Titanium.Media.openMusicLibrary) or [queryMusicLibrary](Titanium.Media.queryMusicLibrary).
		 */
		class Item extends Titanium.Proxy {
			/**
			 * Artist credited for the album containing this item.
			 */
			readonly albumArtist: string;

			/**
			 * The persistent identifier for an album artist.
			 */
			readonly albumArtistPersistentID: number;

			/**
			 * The key for the persistent identifier for an album.
			 */
			readonly albumPersistentID: number;

			/**
			 * Title of the album containing this item.
			 */
			readonly albumTitle: string;

			/**
			 * Number of tracks for the album containing this item.
			 */
			readonly albumTrackCount: number;

			/**
			 * Track number for this item.
			 */
			readonly albumTrackNumber: number;

			/**
			 * Artist credited for this item.
			 */
			readonly artist: string;

			/**
			 * Image for the item's artwork as a `Blob` object,  or `null` if no artwork is
			 * available.
			 */
			readonly artwork: Titanium.Blob;

			/**
			 * A URL pointing to the media item.
			 */
			readonly assetURL: string;

			/**
			 * The number of musical beats per minute for the media item, corresponding
			 * to the "BPM" field in the Info tab in the "Get Info" dialog in iTunes.
			 */
			readonly beatsPerMinute: number;

			/**
			 * The user's place in the media item the most recent time it was played.
			 */
			readonly bookmarkTime: string;

			/**
			 * Textual information about the media item, corresponding to the "Comments"
			 * field in in the Info tab in the Get Info dialog in iTunes.
			 */
			readonly comments: string;

			/**
			 * Composer of this item.
			 */
			readonly composer: string;

			/**
			 * Date when the item was added to the music library.
			 */
			readonly dateAdded: Date;

			/**
			 * Total number of discs for the album containing this item.
			 */
			readonly discCount: number;

			/**
			 * Disc number for this item in the album.
			 */
			readonly discNumber: number;

			/**
			 * Genre of this item.
			 */
			readonly genre: string;

			/**
			 * The persistent identifier for a genre.
			 */
			readonly genrePersistentID: number;

			/**
			 * True if the item represents a protected asset.
			 */
			readonly hasProtectedAsset: boolean;

			/**
			 * True if the media item is an iCloud item.
			 */
			readonly isCloudItem: boolean;

			/**
			 * True if this item is part of a compilation album.
			 */
			readonly isCompilation: boolean;

			/**
			 * True if this item is marked as "Explicit".
			 */
			readonly isExplicit: boolean;

			/**
			 * The most recent calendar date on which the user played the media item.
			 */
			readonly lastPlayedDate: Date;

			/**
			 * Lyrics for this item.
			 */
			readonly lyrics: string;

			/**
			 * The type of the media.
			 */
			readonly mediaType: number;

			/**
			 * The key for the persistent identifier for the media item.
			 */
			readonly persistentID: string;

			/**
			 * Number of times the item has been played.
			 */
			readonly playCount: number;

			/**
			 * Length (in seconds) of this item.
			 */
			readonly playbackDuration: number;

			/**
			 * Used to enqueue store tracks by their ID.
			 */
			readonly playbackStoreID: number;

			/**
			 * The persistent identifier for an audio podcast.
			 */
			readonly podcastPersistentID: number;

			/**
			 * Title of a podcast item.
			 */
			readonly podcastTitle: string;

			/**
			 * Rating for this item.
			 */
			readonly rating: number;

			/**
			 * Date when this this item was released.
			 */
			readonly releaseDate: Date;

			/**
			 * Number of times this item has been skipped.
			 */
			readonly skipCount: number;

			/**
			 * Title of this item.
			 */
			readonly title: string;

			/**
			 * Corresponds to the "Grouping" field in the Info tab in the "Get Info"
			 * dialog in iTunes.
			 */
			readonly userGrouping: string;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		}
	}
}
