/// <reference path="./Console/Console.d.ts" />
/// <reference path="./String/String.d.ts" />
/**
 * The APIs that reside in the global scope, which may be called without a namespace prefix.
 */
/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value, based on whether build target is `'dist-adhoc'`.
 */
declare const DIST_ADHOC: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value, based on whether build target is `'dist-appstore'` or `'dist-playstore'`.
 */
declare const DIST_STORE: boolean;

/**
 * Alias for <Global.ENV_DEVELOPMENT>
 */
declare const ENV_DEV: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value, based on whether deploy type is `'development'`. Typically true for simulator/emulator builds.
 */
declare const ENV_DEVELOPMENT: boolean;

/**
 * Alias for <Global.ENV_PRODUCTION>
 */
declare const ENV_PROD: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value, based on whether deploy type is `'production'`. Typically true for app store/ad-hoc builds.
 */
declare const ENV_PRODUCTION: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value, based on whether deploy type is `'test'`. Typically true for device builds.
 */
declare const ENV_TEST: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value.
 */
declare const OS_ANDROID: boolean;

/**
 * A special constant that is replaced during the app build with a boolean `true`/`false` value.
 */
declare const OS_IOS: boolean;

/**
 * The operation system's major version number.
 */
declare const OS_VERSION_MAJOR: number;

/**
 * The operating system's minor version number.
 */
declare const OS_VERSION_MINOR: number;

/**
 * The operating system's patch version number.
 */
declare const OS_VERSION_PATCH: number;

/**
 * Console logging facilities.
 */
declare var console: Console;

/**
 * An alias for [Titanium.Locale.getString](Titanium.Locale.getString).
 */
declare function L(key: string, hint?: string): string;

/**
 * Displays a pop-up alert dialog with the passed in `message`.
 */
declare function alert(message: string): void;

/**
 * Cancels an interval timer.
 */
declare function clearInterval(timerId?: number): void;

/**
 * Cancels a one-time timer.
 */
declare function clearTimeout(timerId?: number): void;

/**
 * Replaces each escape sequence in the specified string, created using the `encodedURI`
 * method, with the character that it represents.
 */
declare function decodeURIComponent(encodedURI: string): string;

/**
 * Replaces each special character in the specified string with the equivalent URI escape
 * sequence. Useful for encoding URIs.
 */
declare function encodeURIComponent(string: string): string;

/**
 * Loads either a native Titanium module or a CommonJS module.
 */
declare function require(moduleId: string): any;

/**
 * Executes a function repeatedly with a fixed time delay between each call to that function.
 */
declare function setInterval(func: (...args: any[]) => void, delay?: number): number;

/**
 * Executes code or a function after a delay.
 */
declare function setTimeout(func: (...args: any[]) => void, delay?: number): number;
