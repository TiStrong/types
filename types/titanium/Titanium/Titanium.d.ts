/// <reference path="./API/API.d.ts" />
/// <reference path="./Accelerometer/Accelerometer.d.ts" />
/// <reference path="./Analytics/Analytics.d.ts" />
/// <reference path="./Android/Android.d.ts" />
/// <reference path="./App/App.d.ts" />
/// <reference path="./Blob.d.ts" />
/// <reference path="./BlobStream.d.ts" />
/// <reference path="./Buffer.d.ts" />
/// <reference path="./BufferStream.d.ts" />
/// <reference path="./Calendar/Calendar.d.ts" />
/// <reference path="./Codec/Codec.d.ts" />
/// <reference path="./Contacts/Contacts.d.ts" />
/// <reference path="./Database/Database.d.ts" />
/// <reference path="./Event.d.ts" />
/// <reference path="./Filesystem/Filesystem.d.ts" />
/// <reference path="./Geolocation/Geolocation.d.ts" />
/// <reference path="./Gesture/Gesture.d.ts" />
/// <reference path="./IOStream.d.ts" />
/// <reference path="./Locale/Locale.d.ts" />
/// <reference path="./Media/Media.d.ts" />
/// <reference path="./Module.d.ts" />
/// <reference path="./Network/Network.d.ts" />
/// <reference path="./Platform/Platform.d.ts" />
/// <reference path="./Proxy.d.ts" />
/// <reference path="./Stream/Stream.d.ts" />
/// <reference path="./UI/UI.d.ts" />
/// <reference path="./Utils/Utils.d.ts" />
/// <reference path="./WatchSession/WatchSession.d.ts" />
/// <reference path="./XML/XML.d.ts" />
/// <reference path="./Yahoo/Yahoo.d.ts" />
/**
 * Arguments to be passed to createBuffer
 */
interface CreateBufferArgs {
	/**
	 * The byte order of this buffer.
	 */
	byteOrder?: number;

	/**
	 * The length of the buffer.
	 */
	length?: number;

	/**
	 * The type of data encoding to use with `value`.
	 */
	type?: string;

	/**
	 * An initial value which will be encoded and placed in the buffer. If value is a Number, type must also be set. (this is simply a convenient way of calling <Titanium.Codec.encodeString> or <Titanium.Codec.encodeNumber> and placing the encoded value in the returned buffer.)
	 */
	value?: string | number;

}
/**
 * The top-level Titanium module.
 */
declare namespace Titanium {
	/**
	 * Date of the Titanium build.
	 */
	const buildDate: string;

	/**
	 * Git hash of the Titanium build.
	 */
	const buildHash: string;

	/**
	 * User-agent string used by Titanium.
	 */
	let userAgent: string;

	/**
	 * Version of Titanium that is executing.
	 */
	const version: string;

	/**
	 * Adds the specified callback as an event listener for the named event.
	 */
	function addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

	/**
	 * Creates a new buffer based on the params.
	 */
	function createBuffer(params: CreateBufferArgs): Titanium.Buffer;

	/**
	 * Fires a synthesized event to any registered listeners.
	 */
	function fireEvent(name: string, event?: any): void;

	/**
	 * Removes the specified callback as an event listener for the named event.
	 */
	function removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

}
