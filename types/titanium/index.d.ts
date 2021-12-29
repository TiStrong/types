// Type definitions for non-npm package Titanium 10.2
// Project: https://github.com/appcelerator/titanium_mobile
// Definitions by: Axway Appcelerator <https://github.com/appcelerator>
//                 Jan Vennemann <https://github.com/janvennemann>
//                 Sergey Volkov <https://github.com/drauggres>
//                 Mathias Lorenzen <https://github.com/ffMathy>
// Definitions: https://github.com/TiStrong/types
// TypeScript Version: 4.0
/// <reference path="globals.global.d.ts" />
/// <reference path="orphans.d.ts" />
type _Omit<T, K extends keyof any | undefined> = Pick<T, Exclude<keyof T, K>>;
type FunctionPropertyNames<T> = {
	// tslint:disable-next-line:ban-types
	[K in keyof T]: T[K] extends Function ? K : never
}[keyof T];
type Dictionary<T> = Partial<_Omit<T, FunctionPropertyNames<Ti.Proxy>>>;

interface ProxyEventMap {}
import Ti = Titanium;
