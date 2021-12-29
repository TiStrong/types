declare namespace Titanium {
	namespace App {
		namespace iOS {
			/**
			 * The SearchableItemAttributeSet module defines metadata properties for SearchItem and UserActivity objects.
			 */
			class SearchableItemAttributeSet extends Titanium.Proxy {
				/**
				 * The date that the item was moved into the current location.
				 */
				addedDate: string;

				/**
				 * The title for a collection of media.
				 */
				album: string;

				/**
				 * An array of localized strings of alternate display names for this item.
				 */
				alternateNames: string[];

				/**
				 * The artist for the media.
				 */
				artist: string;

				/**
				 * A class of entity for whom the resource is intended or useful.
				 */
				audiences: string[];

				/**
				 * The audio bit rate.
				 */
				audioBitRate: number;

				/**
				 * The number of channels in the audio data contained in the file.
				 */
				audioChannelCount: number;

				/**
				 * The name of the application that encoded the data contained in the audio file.
				 */
				audioEncodingApplication: string;

				/**
				 * The sample rate of the audio data contained in the file.
				 */
				audioSampleRate: number;

				/**
				 * The track number of a song/composition when it is part of an album.
				 */
				audioTrackNumber: number;

				/**
				 * The codecs used to encode/decode the media.
				 */
				codecs: string[];

				/**
				 * Comment related to a file.
				 */
				comment: string;

				/**
				 * The composer of the song/composition contained in the audio file.
				 */
				composer: string;

				/**
				 * A list of contacts that are somehow associated with this document beyond what is captured as Author.
				 */
				contactKeywords: string[];

				/**
				 * Display of the search container
				 */
				containerDisplayName: string;

				/**
				 * Identifier for the search container
				 */
				containerIdentifier: string;

				/**
				 * Order the search container is displayed.
				 */
				containerOrder: number;

				/**
				 * Title displayed in the search container
				 */
				containerTitle: string;

				/**
				 * The date that the contents of the item were created.
				 */
				contentCreationDate: string;

				/**
				 * An account of the content of the resource.
				 */
				contentDescription: string;

				/**
				 * The date that the contents of the item were last modified.
				 */
				contentModificationDate: string;

				/**
				 * Whether or not the item has explicit content. Set to `1` for explicit or `0` for clean.
				 */
				contentRating: number;

				/**
				 * Used to indicate where the item was obtained from.
				 */
				contentSources: string[];

				/**
				 * UTI Type pedigree for an item.
				 */
				contentType: string;

				/**
				 * Array of strings related to the content tree of the item.
				 */
				contentTypeTree: string[];

				/**
				 * File URL representing the content to be indexed.
				 */
				contentURL: string;

				/**
				 * Used to designate the entity responsible for making contributions to the content of the resource.
				 */
				contributors: string[];

				/**
				 * Copyright of the content.
				 */
				copyright: string;

				/**
				 * Used to designate the extent or scope of the content of the resource.
				 */
				coverage: string[];

				/**
				 * Application used to create the document content (e.g. "Word","Framemaker", etc.).
				 */
				creator: string;

				/**
				 * The delivery type of the item.  Set to `0` for fast start and `1` for RTSP.
				 */
				deliveryType: number;

				/**
				 * Director of the item, for example, the movie director.
				 */
				director: string;

				/**
				 * A localized string to be displayed in the UI for this item.
				 */
				displayName: string;

				/**
				 * The date that the file was last downloaded / received.
				 */
				downloadedDate: string;

				/**
				 * Duration in seconds of the content of the item (if appropriate).
				 */
				duration: number;

				/**
				 * The list of editor/editors that have worked on this item.
				 */
				editors: string[];

				/**
				 * Software used to convert the original content into a PDF stream.
				 */
				encodingApplications: string[];

				/**
				 * Size of the document in MB.
				 */
				fileSize: number;

				/**
				 * Array of font names used in the item.
				 */
				fontNames: string[];

				/**
				 * The fully formatted address of the item (obtained from MapKit).
				 */
				fullyFormattedAddress: string;

				/**
				 * Used to indicates whether the MIDI sequence contained in the file is setup for use with a General MIDI device.
				 */
				generalMIDISequence: number;

				/**
				 * Genre of the item, for example, movie genre.
				 */
				genre: string;

				/**
				 * Used to reference to the resource within a given context.
				 */
				identifier: string;

				/**
				 * Information about the item.
				 */
				information: string;

				/**
				 * Content type of the attribute set.
				 */
				itemContentType: string;

				/**
				 * The musical key of the song/composition contained in an audio file.
				 */
				keySignature: string;

				/**
				 * Represents keywords associated with this particular item. Example keywords might be Birthday etc.
				 */
				keywords: string[];

				/**
				 * Kind that the item represents.
				 */
				kind: string;

				/**
				 * Used to designate the languages of the intellectual content of the resource.
				 */
				languages: string[];

				/**
				 * The date that the item was last used.
				 */
				lastUsedDate: string;

				/**
				 * Whether or not the item is local. Set to `1` if true and `0` otherwise.
				 */
				local: number;

				/**
				 * The lyricist/text writer for song/composition contained in the audio file.
				 */
				lyricist: string;

				/**
				 * Media types present in the content.
				 */
				mediaTypes: string[];

				/**
				 * The date that the last metadata attribute was changed.
				 */
				metadataModificationDate: string;

				/**
				 * The musical genre of the song/composition contained in the audio file.
				 */
				musicalGenre: string;

				/**
				 * Metadata attribute that stores the category of instrument.
				 */
				musicalInstrumentCategory: string;

				/**
				 * Metadata attribute that stores the name of instrument.
				 */
				musicalInstrumentName: string;

				/**
				 * Used to indicate company/Organization that created the document.
				 */
				organizations: string[];

				/**
				 * Original format of the movie.
				 */
				originalFormat: string;

				/**
				 * Original source of the movie.
				 */
				originalSource: string;

				/**
				 * Number of pages in the item.
				 */
				pageCount: number;

				/**
				 * Height in points (72 points per inch) of the document page.
				 */
				pageHeight: number;

				/**
				 * Width in points (72 points per inch) of the document page.
				 */
				pageWidth: number;

				/**
				 * The list of people who are visible in an image or movie or written about in a document.
				 */
				participants: string[];

				/**
				 * The complete path to the item.
				 */
				path: string;

				/**
				 * Performers in the movie.
				 */
				performers: string[];

				/**
				 * User play count of this item.
				 */
				playCount: number;

				/**
				 * The postal code for the item according to guidelines established by the provider.
				 */
				postalCode: string;

				/**
				 * Producer of the content.
				 */
				producer: string;

				/**
				 * The list of projects that this item is part of.
				 */
				projects: string[];

				/**
				 * Used to designate the entity responsible for making the resource available.
				 */
				publishers: string[];

				/**
				 * User rating of this item out of 5 stars.
				 */
				rating: number;

				/**
				 * A description of the rating, for example, the number of reviewers.
				 */
				ratingDescription: string;

				/**
				 * The recording date of the song/composition.
				 */
				recordingDate: string;

				/**
				 * For activities this is the unique identifier for the item this activity is related to.
				 */
				relatedUniqueIdentifier: string;

				/**
				 * Used to provide a link to information about rights held in and over resource.
				 */
				rights: string[];

				/**
				 * Used to indicate the role of the document creator.
				 */
				role: string;

				/**
				 * Security (encryption) method used in the file.
				 */
				securityMethod: string;

				/**
				 * Whether the content is prepared for streaming.  Set to `0` for not streamable and `1` for streamable.
				 */
				streamable: number;

				/**
				 * The sub-location (e.g., street number) for the item according to guidelines established by the provider.
				 */
				subThoroughfare: string;

				/**
				 * Subject of the the item.
				 */
				subject: string;

				/**
				 * Used to determine if navigation is supported.
				 */
				supportsNavigation: number;

				/**
				 * Used to indicate that using the phone number is appropriate.
				 */
				supportsPhoneCall: number;

				/**
				 * The tempo of the music contained in the audio file in Beats Per Minute.
				 */
				tempo: number;

				/**
				 * Theme of the the item.
				 */
				theme: string;

				/**
				 * The location (e.g., street name) for the item according to guidelines established by the provider.
				 */
				thoroughfare: string;

				/**
				 * Image data for thumbnail for this item.
				 */
				thumbnailData: string | Titanium.Blob;

				/**
				 * File URL pointing to a thumbnail image for this item.
				 */
				thumbnailURL: string;

				/**
				 * The time signature of the musical composition contained in the audio/MIDI file.
				 */
				timeSignature: string;

				/**
				 * The title of the particular item.
				 */
				title: string;

				/**
				 * The total bit rate (audio and video combined) of the media.
				 */
				totalBitRate: number;

				/**
				 * URL of the item.
				 */
				url: string;

				/**
				 * A version specifier for this item.
				 */
				version: string;

				/**
				 * The video bit rate.
				 */
				videoBitRate: number;

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
}
