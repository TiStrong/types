// Type definitions for non-npm package @titanium-sdk/facebook 8.0
// Project: https://github.com/appcelerator-modules/ti.facebook
// Definitions by: Sergey Volkov <https://github.com/drauggres>
// Definitions: https://github.com/TiStrong/types
// TypeScript Version: 3.0

/// <reference types="titanium" />

// !!! IMPORTANT !!!
// "npm-naming" rule in tslint.json is disabled because of the names conflict
// Verify package version and name in the header manually.

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
 * Dictionary of parameter passed to [setAccessToken()](Modules.Facebook.setAccessToken).
 */
interface CurrentAccessTokenParams {
	/**
	 * The opaque token string.
	 */
	accessToken?: string;

	/**
	 * The app ID.
	 */
	appID?: string;

	/**
	 * The declined permissions.
	 */
	declinedPermissions?: string[];

	/**
	 * The optional expiration date (defaults to distant future).
	 */
	exipirationDate?: Date;

	/**
	 * The granted permissions.
	 */
	permissions?: string[];

	/**
	 * The optional date the token was last refreshed (defaults to today).
	 */
	refreshDate?: Date;

	/**
	 * The user ID.
	 */
	userID?: string;

}
/**
 * Object returned from the [fetchDeferredAppLink()](Modules.Facebook.fetchDeferredAppLink) method
 */
interface FacebookDeferredAppLinkResponse {
	/**
	 * A string that contain the error.
	 */
	error?: string;

	/**
	 * Indicates if the response has succeded and the response contain a URL.
	 */
	success?: boolean;

	/**
	 * The URL returned from the server.
	 */
	url?: string;

}
/**
 * Argument passed to the graph API callback, in response to a
 * [requestWithGraphPath](Modules.Facebook.requestWithGraphPath) call.
 */
interface FacebookGraphResponse extends ErrorResponse {
	/**
	 * Graph API path of the original request.
	 */
	path?: string;

	/**
	 * If successful, returns the JSON response returned by Facebook.
	 * If the request is not successfully completed, the result is undefined.
	 */
	result?: string;

}
/**
 * Argument passed to the dialog callback when a dialog is completed or canceled.
 */
interface FacebookPermissionResponse extends ErrorResponse {
	/**
	 * Indicates if the user canceled the dialog.
	 */
	cancelled?: boolean;

	/**
	 * Error message, if any returned.
	 * Will be undefined if `success` is `true`.
	 */
	error?: string;

	/**
	 * Indicates if successful
	 */
	success?: boolean;

}
/**
 * Parameters to pass to [presentInviteDialog()](Modules.Facebook.presentInviteDialog) method.
 */
interface InviteDialogParams {
	/**
	 * An app link target that will be used as a target when the user accept the invite.
	 */
	appLink: string;

	/**
	 * A URL to a preview image that will be displayed with the app invite
	 */
	appPreviewImageLink?: string;

}

export = Facebook;

declare namespace Facebook {
    /**
     * The user is asking for an object from friends.
     */
    const ACTION_TYPE_ASK_FOR: number;

    /**
     * No action type.
     */
    const ACTION_TYPE_NONE: number;

    /**
     * The user is sending an object to the friends.
     */
    const ACTION_TYPE_SEND: number;

    /**
     * It is the turn of the friends to play against the user in a match.
     */
    const ACTION_TYPE_TURN: number;

    /**
     * Published content is visible to all Facebook users.
     */
    const AUDIENCE_EVERYONE: number;

    /**
     * Published content is only visible to the user and user's friends.
     */
    const AUDIENCE_FRIENDS: number;

    /**
     * Published content is only visible to the user.
     */
    const AUDIENCE_ONLY_ME: number;

    /**
     * Use with [LoginButton.style](Modules.Facebook.LoginButton.style) to specify
     * the default login button reading "Connect" or "Login".
     */
    const BUTTON_STYLE_NORMAL: never;

    /**
     * Use with [LoginButton.style](Modules.Facebook.LoginButton.style) to specify
     * a wide login button reading "Connect with Facebook" or "Login with Facebook".
     */
    const BUTTON_STYLE_WIDE: never;

    /**
     * Friends not using the app can be displayed.
     */
    const FILTER_APP_NON_USERS: number;

    /**
     * Friends using the app can be displayed.
     */
    const FILTER_APP_USERS: number;

    /**
     * No filter all friends can be displayed.
     */
    const FILTER_NONE: number;

    /**
     * Opens login window in the default Web Browser (Safari/Firefox etc...)
     */
    const LOGIN_BEHAVIOR_BROWSER: number;

    /**
     * Expose Facebook Login for devices such as Android TV and Fire TV.
     */
    const LOGIN_BEHAVIOR_DEVICE_AUTH: number;

    /**
     * Opens login window with the native Facebook app. On iOS it will attempt to
     * fallback to <Titanium.Modules.Facebook.LOGIN_BEHAVIOR_BROWSER> if the Facebook app
     * is not installed or Facebook chooses it internally. For Android use
     * <Titanium.Modules.Facebook.LOGIN_BEHAVIOR_NATIVE_WITH_FALLBACK> to get this behavior.
     * Note: As of today (Facebook SDK 4.11.0), Facebook seems to not allow logging in using
     * the Facebook app to login, so this constant won't work proper on iOS. This issue is
     * discussed [here](https://developers.facebook.com/bugs/786729821439894/?search_id).
     */
    const LOGIN_BEHAVIOR_NATIVE: number;

    /**
     * Opens login window with the native Facebook app. On Android it will attempt to
     * fallback to <Titanium.Modules.Facebook.LOGIN_BEHAVIOR_BROWSER> if the Facebook app
     * is not installed. For iOS use <Titanium.Modules.Facebook.NATIVE> to get this behavior.
     */
    const LOGIN_BEHAVIOR_NATIVE_WITH_FALLBACK: number;

    /**
     * Attempts to login with through the Facebook account currently signed in through
     * Settings.
     */
    const LOGIN_BEHAVIOR_SYSTEM_ACCOUNT: number;

    /**
     * Opens login window through a modal browser window.
     */
    const LOGIN_BEHAVIOR_WEB: number;

    /**
     * The default behavior. The tooltip will only be displayed if the app is eligible
     * (determined by possible server round trip).
     */
    const LOGIN_BUTTON_TOOLTIP_BEHAVIOR_AUTOMATIC: number;

    /**
     * Force disable. In this case you can still exert more refined control by manually
     * constructing a new login button.
     */
    const LOGIN_BUTTON_TOOLTIP_BEHAVIOR_DISABLE: number;

    /**
     * Force display of the tooltip (typically for UI testing).
     */
    const LOGIN_BUTTON_TOOLTIP_BEHAVIOR_FORCE_DISPLAY: number;

    /**
     * Light blue background, white text, faded blue close button.
     */
    const LOGIN_BUTTON_TOOLTIP_STYLE_FRIENDLY_BLUE: number;

    /**
     * Dark gray background, white text, light gray close button.
     */
    const LOGIN_BUTTON_TOOLTIP_STYLE_NEUTRAL_GRAY: number;

    /**
     * Use with [MessengerButton.mode](Modules.Facebook.MessengerButton.mode) to specify
     * the default send button reading "Send".
     */
    const MESSENGER_BUTTON_MODE_CIRCULAR: number;

    /**
     * Use with [MessengerButton.mode](Modules.Facebook.MessengerButton.mode) to specify
     * the default send button reading "Send".
     */
    const MESSENGER_BUTTON_MODE_RECTANGULAR: number;

    /**
     * Use with [MessengerButton.style](Modules.Facebook.MessengerButton.style) to specify
     * the default send button style.
     */
    const MESSENGER_BUTTON_STYLE_BLUE: number;

    /**
     * Use with [MessengerButton.style](Modules.Facebook.MessengerButton.style) to specify
     * the default send button style.
     */
    const MESSENGER_BUTTON_STYLE_WHITE: number;

    /**
     * Use with [MessengerButton.style](Modules.Facebook.MessengerButton.style) to specify
     * the default send button style.
     */
    const MESSENGER_BUTTON_STYLE_WHITE_BORDERED: number;

    /**
     * High confidence level.
     */
    const PLACE_LOCATION_CONFIDENCE_HIGH: number;

    /**
     * Low confidence level.
     */
    const PLACE_LOCATION_CONFIDENCE_LOW: number;

    /**
     * Medium confidence level.
     */
    const PLACE_LOCATION_CONFIDENCE_MEDIUM: number;

    /**
     * Used to indicate that any level is acceptable as a minimum threshold.
     */
    const PLACE_LOCATION_CONFIDENCE_NOT_APPLICABLE: number;

    /**
     * Acts with the most appropriate mode that is available.
     */
    const SHARE_DIALOG_MODE_AUTOMATIC: number;

    /**
     * Displays the dialog in Safari.
     */
    const SHARE_DIALOG_MODE_BROWSER: number;

    /**
     * Displays the feed dialog in Safari.
     */
    const SHARE_DIALOG_MODE_FEED_BROWSER: number;

    /**
     * Displays the feed dialog in a webview within the app.
     */
    const SHARE_DIALOG_MODE_FEED_WEB: number;

    /**
     * Displays the dialog in the main native Facebook app.
     */
    const SHARE_DIALOG_MODE_NATIVE: number;

    /**
     * Displays the dialog in the iOS integrated share sheet.
     */
    const SHARE_DIALOG_MODE_SHARE_SHEET: number;

    /**
     * Displays the dialog in a web view within the app.
     */
    const SHARE_DIALOG_MODE_WEB: number;

    /**
     * Only attempt single sign-on.
     */
    const SSO_ONLY: never;

    /**
     * Attempt single sign-on, then fallback to dialog authorization.
     */
    const SSO_WITH_FALLBACK: never;

    /**
     * Do not attempt single sign-on and only use dialog authorization.
     */
    const SUPPRESS_SSO: never;

    /**
     * A Facebook Like button.
     * The API was removed by the Facebook SDK 4.x and up.
     */
    const LikeButton: never;
    /**
     * A Facebook Login Button.
     */
    class LoginButton extends Titanium.UI.View {
        /**
         * Default audience to use for Facebook posts if publish permissions are requested.
         */
        audience: number;

        /**
         * Requested write permissions.
         */
        publishPermissions: string[];

        /**
         * Requested read permissions.
         */
        readPermissions: string[];

        /**
         * Gets or sets the desired tooltip behavior.
         */
        tooltipBehavior: number;

        /**
         * Gets or sets the desired tooltip color style.
         */
        tooltipColorStyle: number;

        /**
         * Gets the value of the <Modules.Facebook.LoginButton.audience> property.
         */
        getAudience: never;

        /**
         * Gets the value of the <Modules.Facebook.LoginButton.publishPermissions> property.
         */
        getPublishPermissions: never;

        /**
         * Gets the value of the <Modules.Facebook.LoginButton.readPermissions> property.
         */
        getReadPermissions: never;

        /**
         * Gets the value of the <Modules.Facebook.LoginButton.tooltipBehavior> property.
         */
        getTooltipBehavior: never;

        /**
         * Gets the value of the <Modules.Facebook.LoginButton.tooltipColorStyle> property.
         */
        getTooltipColorStyle: never;

        /**
         * Sets the value of the <Modules.Facebook.LoginButton.audience> property.
         */
        setAudience: never;

        /**
         * Sets the value of the <Modules.Facebook.LoginButton.publishPermissions> property.
         */
        setPublishPermissions: never;

        /**
         * Sets the value of the <Modules.Facebook.LoginButton.readPermissions> property.
         */
        setReadPermissions: never;

        /**
         * Sets the value of the <Modules.Facebook.LoginButton.tooltipBehavior> property.
         */
        setTooltipBehavior: never;

        /**
         * Sets the value of the <Modules.Facebook.LoginButton.tooltipColorStyle> property.
         */
        setTooltipColorStyle: never;

    }
    /**
     * A Facebook Messenger button.
     * This API was removed to align with the removal of the Facebook SDK 5+.
     */
    const MessengerButton: never;
}
/**
 * Base event for class Modules.Facebook
 */
interface FacebookBaseEvent extends Ti.Event {
    /**
     * Source object that fired the event.
     */
    source: Facebook;

}
/**
 * Fired at session login.
 */
interface Facebook_login_Event extends FacebookBaseEvent {
    /**
     * Indicates if the user canceled the login request by closing the dialog.
     */
    cancelled: number;

    /**
     * Error code.
     * Error code will be 0 if `success` is `true`, nonzero otherwise. If the error
     * was generated by the operating system, that system's error value is used.
     * Otherwise, this value will be -1.
     */
    code: number;

    /**
     * Data returned by Facebook when we query for the UID (using graph path "me")
     * after a successful login. Data is in JSON format, and includes information
     * such as user name, locale and gender.
     */
    data: any;

    /**
     * Error message, if any returned.
     * Will be undefined if `success` is `true`.
     */
    error: string;

    /**
     * Indicates if the user was logged in successfully.
     * Returns `true` if request succeeded, `false` otherwise.
     */
    success: boolean;

    /**
     * User ID returned by Facebook if the login was successful.
     */
    uid: string;

}
/**
 * Fired at session logout.
 */
interface Facebook_logout_Event extends FacebookBaseEvent {
}
/**
 * Fired when the Send Request dialog is closed.
 */
interface Facebook_requestDialogCompleted_Event extends FacebookBaseEvent {
    /**
     * Indicates if the user canceled the request by closing the dialog.
     */
    cancelled: number;

    /**
     * data returned by Facebook. See Facebook reference for details.
     */
    data: any;

    /**
     * Error message, if any returned.
     * Will be undefined if `success` is `true`.
     */
    error: string;

    /**
     * Returns `true` if request succeeded, `false` otherwise.
     */
    success: boolean;

}
/**
 * Fired when the Share dialog or Web Share dialog is closed.
 */
interface Facebook_shareCompleted_Event extends FacebookBaseEvent {
    /**
     * Indicates if the user canceled the request by closing the dialog.
     */
    cancelled: number;

    /**
     * Error message, if any returned.
     * Will be undefined if `success` is `true`.
     */
    error: string;

    /**
     * Returns `true` if request succeeded, `false` otherwise.
     */
    success: boolean;

}
/**
 * Fired when the Invite dialog is closed.
 */
interface Facebook_inviteCompleted_Event extends FacebookBaseEvent {
    /**
     * Indicates if the user canceled the request by closing the dialog.
     */
    cancelled: number;

    /**
     * Error message, if any returned.
     * Will be undefined if `success` is `true`.
     */
    error: string;

    /**
     * Returns `true` if request succeeded, `false` otherwise.
     */
    success: boolean;

}
/**
 * Fired when [refreshPermissionsFromServer](Modules.Facebook.refreshPermissionsFromServer) is completed.
 */
interface Facebook_tokenUpdated_Event extends FacebookBaseEvent {
}
interface FacebookEventMap extends ProxyEventMap {
    inviteCompleted: Facebook_inviteCompleted_Event;

    login: Facebook_login_Event;

    logout: Facebook_logout_Event;

    requestDialogCompleted: Facebook_requestDialogCompleted_Event;

    shareCompleted: Facebook_shareCompleted_Event;

    tokenUpdated: Facebook_tokenUpdated_Event;

}
/**
 * Add-on Facebook module.
 */
declare class Facebook extends Titanium.Module {
    /**
     * OAuth token set after a successful `authorize`.
     */
    static readonly accessToken: string;

    /**
     * Returns `true` if the <Modules.Facebook.accessToken> is not `null` AND not expired.
     */
    static readonly accessTokenActive: boolean;

    /**
     * Returns whether the <Modules.Facebook.accessToken> is expired by checking its <Modules.Facebook.expirationDate> property.
     */
    static readonly accessTokenExpired: boolean;

    /**
     * If not explicitly set, the default will be read from the application's
     * plist (FacebookAppID) which is the recommended way.
     *
     * Since Titanium SDK 6.2.0, this property also has a getter to return the currently set appID.
     */
    static appID: string;

    /**
     * Checks if the device can support the use of the Facebook Open Graph action dialog from the Facebook App.
     */
    static readonly canPresentOpenGraphActionDialog: boolean;

    /**
     * Checks if the device can support the use of the Facebook Share dialog from the Facebook App.
     */
    static readonly canPresentShareDialog: never;

    /**
     * Time at which the `accessToken` expires.
     */
    static readonly expirationDate: Date;

    /**
     * Indicates whether the login should use the traditional dialog-based
     * authentication.
     */
    static forceDialogAuth: never;

    /**
     * Indicates if the user is logged in.
     */
    static readonly loggedIn: boolean;

    /**
     * Defines the behavior that the module will attempt to use for authorize().
     */
    static loginBehavior: number;

    /**
     * Array of permissions to request for your app.
     */
    static permissions: string[];

    /**
     * Unique user ID returned from Facebook.
     */
    static readonly uid: string;

    /**
     * Adds the specified callback as an event listener for the named event.
     */
    static addEventListener<K extends keyof FacebookEventMap>(name: K, callback: (this: Facebook, event: FacebookEventMap[K]) => void): void;

    /**
     * Prompts the user to log in (if not already logged in) and authorize your application.
     * You can also use [LoginButton](Modules.Facebook.LoginButton) to log in.
     */
    static authorize(): void;

    /**
     * Creates a Facebook proxy to hook into the activity of either a standalone <Titanium.UI.Window>
     * (not inside a TabGroup) or <Titanium.UI.TabGroup>.
     */
    static createActivityWorker(parameters: Dictionary<Titanium.Proxy>): Titanium.Proxy;

    /**
     * Creates and returns an instance of <Modules.Facebook.LikeButton>.
     */
    static createLikeButton: never;

    /**
     * Creates and returns an instance of <Modules.Facebook.LoginButton>.
     */
    static createLoginButton(parameters?: Dictionary<Facebook.LoginButton>): Facebook.LoginButton;

    /**
     * Creates and returns an instance of <Modules.Facebook.MessengerButton>.
     */
    static createMessengerButton: never;

    /**
     * Fetch the deferred app link
     */
    static fetchDeferredAppLink(callback: (param0: FacebookDeferredAppLinkResponse) => void): void;

    /**
     * Query for places the device is likely located in.
     */
    static fetchNearbyPlacesForCurrentLocation(confidenceLevel?: number, fields?: ReadonlyArray<string>, success?: (...args: any[]) => void, error?: (...args: any[]) => void): void;

    /**
     * Query for nearby places using the device's current location and search-term.
     */
    static fetchNearbyPlacesForSearchTearm(searchTearm: string, categories?: ReadonlyArray<string>, fields?: ReadonlyArray<string>, distance?: number, cursor?: string, success?: (...args: any[]) => void, error?: (...args: any[]) => void): void;

    /**
     * Fires a synthesized event to any registered listeners.
     */
    static fireEvent<K extends keyof FacebookEventMap>(name: K, event?: FacebookEventMap[K]): void;

    /**
     * Gets the value of the <Modules.Facebook.accessToken> property.
     */
    static getAccessToken: never;

    /**
     * Gets the value of the <Modules.Facebook.accessTokenActive> property.
     */
    static getAccessTokenActive: never;

    /**
     * Gets the value of the <Modules.Facebook.accessTokenExpired> property.
     */
    static getAccessTokenExpired: never;

    /**
     * Gets the value of the <Modules.Facebook.appID> property.
     */
    static getAppID: never;

    /**
     * Gets the value of the <Modules.Facebook.canPresentOpenGraphActionDialog> property.
     */
    static getCanPresentOpenGraphActionDialog: never;

    /**
     * Gets the value of the <Modules.Facebook.canPresentShareDialog> property.
     */
    static getCanPresentShareDialog: never;

    /**
     * Gets the value of the <Modules.Facebook.expirationDate> property.
     */
    static getExpirationDate: never;

    /**
     * Gets the value of the <Modules.Facebook.forceDialogAuth> property.
     */
    static getForceDialogAuth: never;

    /**
     * Gets the value of the <Modules.Facebook.loggedIn> property.
     */
    static getLoggedIn: never;

    /**
     * Gets the value of the <Modules.Facebook.loginBehavior> property.
     */
    static getLoginBehavior: never;

    /**
     * Gets the value of the <Modules.Facebook.permissions> property.
     */
    static getPermissions: never;

    /**
     * Gets the value of the <Modules.Facebook.uid> property.
     */
    static getUid: never;

    /**
     * Loads a cached Facebook session if available, then fires the `login` event.
     */
    static initialize(): void;

    /**
     * Logs a custom event to Facebook.
     */
    static logCustomEvent(event: string, valueToSum?: number, params?: any): void;

    /**
     * Log a purchase of the specified amount, in the specified currency.
     */
    static logPurchase(amount: number, currency: string): void;

    /**
     * Log an app event that tracks that the application was open via Push Notification.
     */
    static logPushNotificationOpen(payload: any, action?: string): void;

    /**
     * Clears the OAuth `accessToken` and logs out the user.
     */
    static logout(): void;

    /**
     * Opens a supported Facebook Invite dialog from the Facebook App.
     */
    static presentInviteDialog: never;

    /**
     * Opens a supported Messenger dialog from the Facebook Messenger App.
     */
    static presentMessengerDialog(params: ShareLinkContentParams): void;

    /**
     * Opens a Facebook photo share dialog.
     */
    static presentPhotoShareDialog(params: SharePhotoContentParams): void;

    /**
     * Opens an App Request dialog.
     */
    static presentSendRequestDialog(params: RequestDialogParams): void;

    /**
     * Opens a Facebook link share dialog.
     */
    static presentShareDialog(params: ShareLinkContentParams): void;

    /**
     * Makes a request to Facebook to get the latest permissions granted.
     */
    static refreshPermissionsFromServer(): void;

    /**
     * Removes the specified callback as an event listener for the named event.
     */
    static removeEventListener<K extends keyof FacebookEventMap>(name: K, callback: (this: Facebook, event: FacebookEventMap[K]) => void): void;

    /**
     * Makes a request to Facebook for additional write permissions.
     */
    static requestNewPublishPermissions(permissions: ReadonlyArray<string>, audience: number, callback: (param0: FacebookPermissionResponse) => void): void;

    /**
     * Makes a request to Facebook for additional read permissions.
     */
    static requestNewReadPermissions(permissions: ReadonlyArray<string>, callback: (param0: FacebookPermissionResponse) => void): void;

    /**
     * Makes a Facebook Graph API request.
     */
    static requestWithGraphPath(path: string, params: any, httpMethod: string, callback: (param0: FacebookGraphResponse) => void): void;

    /**
     * Sets the value of the <Modules.Facebook.appID> property.
     */
    static setAppID: never;

    /**
     * Set a new access token for using Facebook services.
     */
    static setCurrentAccessToken(params: CurrentAccessTokenParams): void;

    /**
     * Sets the value of the <Modules.Facebook.forceDialogAuth> property.
     */
    static setForceDialogAuth: never;

    /**
     * Sets the value of the <Modules.Facebook.loginBehavior> property.
     */
    static setLoginBehavior: never;

    /**
     * Sets the value of the <Modules.Facebook.permissions> property.
     */
    static setPermissions: never;

    /**
     * Sets a device token to register the current application installation for push notifications.
     */
    static setPushNotificationsDeviceToken(deviceToken: string): void;

    /**
     * Call this method to open Messenger and share an image, animated GIF or video.
     */
    static shareMediaToMessenger(params: ShareToMessengerParams): void;

}

/**
 * Parameters to pass to [presentSendRequestDialog()](Modules.Facebook.presentSendRequestDialog) method.
 */
interface RequestDialogParams {
	/**
	 * The nature of the request. Required if objectID is set.
	 */
	actionType?: number;

	/**
	 * Additional data to send with the request object.
	 */
	data?: any;

	/**
	 * The set of friends someone sees if a multi-friend selector is shown.
	 */
	filters?: number;

	/**
	 * Message to send with the request.
	 */
	message: string;

	/**
	 * The Open Graph object ID of the object being sent. Required if actionType is set.
	 */
	objectID?: string;

	/**
	 * An array of user IDs that will be included in the dialog as the first suggested friends. Cannot be used together with filters.
	 */
	recipientSuggestions?: string[];

	/**
	 * Array of pre-selected facebook ids.
	 */
	recipients?: string[];

	/**
	 * Title of request.
	 */
	title?: string;

}
/**
 * Optional parameters to pass to either the
 * [presentShareDialog()](Modules.Facebook.presentShareDialog) or
 * [presentMessengerDialog()](Modules.Facebook.presentMessengerDialog) methods.
 */
interface ShareLinkContentParams {
	/**
	 * Hashtag for the content being shared.
	 */
	hashtag?: string;

	/**
	 * URL to share (required for any link of sharing).
	 */
	link?: string;

	/**
	 * The mode to select for presenting a share dialog. Only used in `presentShareDialog`.
	 */
	mode?: number;

	/**
	 * The ID for a place to tag with this content.
	 */
	placeID?: string;

	/**
	 * A value to be added to the referrer URL when a person follows a link from this shared content on feed.
	 */
	referal?: string;

	/**
	 * List of IDs for taggable people to tag with this content.
	 */
	to?: string[];

}
/**
 * Parameters to pass to the the [presentPhotoShareDialog()](Modules.Facebook.presentPhotoShareDialog) method.
 */
interface SharePhotoContentParams {
	/**
	 * The mode to select for presenting a share dialog.
	 */
	mode?: number;

	/**
	 * An array of photos that is represented by an object of `photo`, `caption` and `userGenerated`
	 * parameters.
	 */
	photos?: SharePhotoContentPhotoParams[];

}
/**
 * Parameters to pass to the `images` property of the [presentPhotoShareDialog()](Modules.Facebook.presentPhotoShareDialog)
 * method.
 */
interface SharePhotoContentPhotoParams {
	/**
	 * The user generated caption for the photo. Note that the 'caption' must come from
	 * the user, as pre-filled content is forbidden by the Platform Policies (2.3).
	 */
	caption?: string;

	/**
	 * The (required) photo. Can either be a file on the local disk (represented as a <Titanium.Blob>)
	 * or a photo URL (represented as a String).
	 */
	photo: Titanium.Blob | string;

}
/**
 * Parameters to pass to [shareMediaToMessenger()](Modules.Facebook.shareMediaToMessenger) method.
 */
interface ShareToMessengerParams {
	/**
	 * Optional property describing the www source URL of the content.
	 */
	link?: string;

	/**
	 * Media to send with the messenger. Allowed media are images, GIF's and videos represented
	 * as Blobs.
	 */
	media: Titanium.Blob;

	/**
	 * Pass additional information to be sent to Messenger which is sent back to the user's app when
	 * they reply to an attributed message.
	 */
	metadata?: string;

	/**
	 * Optional property describing whether the content should be rendered like a sticker.
	 */
	renderAsSticker?: boolean;

}
