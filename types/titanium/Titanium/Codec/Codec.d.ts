declare namespace Titanium {
	/**
	 * A module for translating between primitive types and raw byte streams.
	 */
	class Codec extends Titanium.Module {
		/**
		 * Big endian (network) byte order -- that is, the most significant byte first.
		 */
		static readonly BIG_ENDIAN: number;

		/**
		 * ASCII character encoding..
		 */
		static readonly CHARSET_ASCII: string;

		/**
		 * ISO 8859-1 (Latin-1) character encoding.
		 */
		static readonly CHARSET_ISO_LATIN_1: string;

		/**
		 * UTF-16 character encoding with default byte order.
		 */
		static readonly CHARSET_UTF16: string;

		/**
		 * UTF-16 character encoding with big endian byte order.
		 */
		static readonly CHARSET_UTF16BE: string;

		/**
		 * UTF-16 character encoding with little endian byte order.
		 */
		static readonly CHARSET_UTF16LE: string;

		/**
		 * UTF-8 character encoding.
		 */
		static readonly CHARSET_UTF8: string;

		/**
		 * Little endian byte order -- that is, the least significant byte first.
		 */
		static readonly LITTLE_ENDIAN: number;

		/**
		 * 8-bit integer encoding type.
		 */
		static readonly TYPE_BYTE: string;

		/**
		 * 64-bit double precision floating-point type.
		 */
		static readonly TYPE_DOUBLE: string;

		/**
		 * 32-bit single precision floating-point type.
		 */
		static readonly TYPE_FLOAT: string;

		/**
		 * 32-bit integer encoding type.
		 */
		static readonly TYPE_INT: string;

		/**
		 * 64-bit integer encoding type.
		 */
		static readonly TYPE_LONG: string;

		/**
		 * 16-bit integer encoding type.
		 */
		static readonly TYPE_SHORT: string;

		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Decodes a number from the `source` buffer using the specified data type.
		 */
		static decodeNumber(options: DecodeNumberDict): number;

		/**
		 * Decodes the source buffer into a String using the supplied character set.
		 */
		static decodeString(options: DecodeStringDict): string;

		/**
		 * Encodes a number and writes it to a buffer.
		 */
		static encodeNumber(options: EncodeNumberDict): number;

		/**
		 * Encodes a string into a series of bytes in a buffer using the specified character set.
		 */
		static encodeString(options: Dictionary<EncodeStringDict>): number;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Get the OS native byte order (either <Titanium.Codec.BIG_ENDIAN> or
		 * <Titanium.Codec.LITTLE_ENDIAN>).
		 */
		static getNativeByteOrder(): number;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

	}
}
/**
 * Named parameters for <Titanium.Codec.decodeNumber>.
 */
interface DecodeNumberDict {
	/**
	 * byte order to decode with.
	 */
	byteOrder?: number;

	/**
	 * Index in the `source` buffer of the first byte of data to decode.
	 */
	position?: number;

	/**
	 * Buffer to decode.
	 */
	source: Titanium.Buffer;

	/**
	 * The encoding type to use.
	 */
	type: string;

}
/**
 * Named parameters for <Titanium.Codec.decodeString>.
 */
interface DecodeStringDict {
	/**
	 * Character set to use when encoding this string to bytes.
	 */
	charset?: string;

	/**
	 * Number of bytes to decode.
	 */
	length?: number;

	/**
	 * Index in the `source` buffer of the first byte of data to decode.
	 */
	position?: number;

	/**
	 * Buffer to decode.
	 */
	source: Titanium.Buffer;

}
/**
 * Named parameters for <Titanium.Codec.encodeNumber>.
 */
interface EncodeNumberDict {
	/**
	 * Byte order to encode with.
	 */
	byteOrder?: number;

	/**
	 * Destination buffer.
	 */
	dest: Titanium.Buffer;

	/**
	 * Index in the `dest` buffer of the first byte of encoded data.
	 */
	position?: number;

	/**
	 * Number to encode.
	 */
	source: number;

	/**
	 * Encoding type to use.
	 */
	type: string;

}
/**
 * Named parameters for <Titanium.Codec.encodeString>.
 */
interface EncodeStringDict {
	/**
	 * Character encoding to use when encoding this string to bytes.
	 */
	charset?: string;

	/**
	 * Destination buffer.
	 */
	dest: Titanium.Buffer;

	/**
	 * Index in the `dest` buffer of the first byte of the encoded string.
	 */
	destPosition?: number;

	/**
	 * Source string to encode.
	 */
	source: string;

	/**
	 * Number of characters in `source` to encode.
	 */
	sourceLength?: number;

	/**
	 * Position in `source` to start encoding.
	 */
	sourcePosition?: number;

}
