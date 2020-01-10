// Type definitions for non-npm package @titanium-sdk/ti.identity 2.2
// Project: https://github.com/appcelerator/titanium_mobile
// Definitions by: Sergey Volkov <https://github.com/drauggres>
// Definitions: https://github.com/TiStrong/types
// TypeScript Version: 3.0

/// <reference types="titanium" />

// to shut off automatic exporting
export {};

interface ProxyEventMap {}

/**
 * Dictionary containing results for <Identity.deviceCanAuthenticate>.
 */
interface DeviceCanAuthenticateResult {
	/**
	 * Set to true if device is configured for Touch ID / Face ID authentication.
	 */
	canAuthenticate?: boolean;

	/**
	 * iOS only, Module `ERROR_*` constant indicating the reason for the failure if any.
	 */
	code?: number;

	/**
	 * System error message if any.
	 */
	error?: string;

}
/**
 * Dictionary passed to <Identity.authenticate>.
 */
interface IdentityAuthenticationType {
	/**
	 * Note: This property is iOS only!
	 * The time interval (in seconds) for accepting a successful Touch ID / Face ID device
	 * unlock (on the lock screen) from the past.  If the device  was successfully
	 * unlocked by Touch ID / Face ID within this time interval, then the biometric authentication
	 * on this context will succeed automatically and the reply block will be
	 * called without prompting user for authentication.
	 * The default value is 0, meaning that no previous TouchID unlock can be reused.
	 * This property is meant only for reusing biometric matches from the device
	 * lock screen. It does not allow reusing previous biometric matches in
	 * application or between applications.
	 * The maximum supported interval is 5 minutes and setting the value beyond
	 * 5 minutes does not increase the accepted interval.
	 */
	allowableReuseDuration?: number;

	/**
	 * Callback function executed after the authentication completes.
	 * The callback function is passed a dictionary with three properties:
	 *   * `success` (Boolean): Set to true if authentication succeeded.
	 *   * `error` (String): System error message.
	 *   * `code` (Number): Module `ERROR_*` constant indicating the reason for the failure.
	 */
	callback: (...args: any[]) => void;

	/**
	 * Note: This property is iOS only!
	 * Allows cancel button title customization. A default localized title "Cancel"
	 * is used when this property is not defined or is set to empty string.
	 */
	cancelTitle?: string;

	/**
	 * Note: This property is iOS only!
	 * Allows fallback button title customization. A default localized title
	 * "Enter Password" is used when this property is left nil. If set to empty
	 * string, the button will be hidden.
	 */
	fallbackTitle?: string;

	/**
	 * Note: This property is iOS only!
	 * Determines whether the auth-context should be kept alive after authorizing
	 * with the TouchID-API and can be used to automatically terminate an auth-context
	 * after authorizing.
	 * Please note that calling `invalidate` will not be possible unless you
	 * have a valid auth-context, so you would decide whether to use `invalidate`
	 * to invalidate the context and release the auth-instance or use the `keepAlive`
	 * property inside `authenticate` to only terminate the context.
	 * Terminated contexts cannot be recovered and will be recreated with a new auth-context
	 * once `authenticate` is called again.
	 */
	keepAlive?: boolean;

	/**
	 * Note: This property is iOS only!
	 * Message displayed in the authentication dialog describing why the
	 * application is requesting authentication.
	 */
	reason: string;

}
/**
 * Dictionary passed to the `createKeychainItem` method.
 */
interface KeychainItemType {
	/**
	 * Optional constants used to determine the access control with the specified
	 * protection type and flags. The constants can be concatenated by using the
	 * Bit OR operator, e.g. `optionA | optionB | optionC`.
	 */
	accessControlMode?: number;

	/**
	 * Optional identifier used to define the access group the keychain item
	 * should be valid. This can be used to share a keychain item across two
	 * or more apps that use the same organization group identifier.
	 * More information about keychain access groups can be found in the
	 * [official iOS documentation](https://developer.apple.com/reference/security/ksecattraccessgroup).
	 */
	accessGroup?: string;

	/**
	 * Optional constant used for determining when a keychain item should be
	 * readable. Use this property with caution to enable advanced access control.
	 * More information about this property and it's values can be found in the
	 * [official iOS documentation](https://developer.apple.com/reference/security/1658642-keychain_services/1663541-keychain_item_accessibility_cons).
	 */
	accessibilityMode?: number;

	/**
	 * Define the cipher used to encrypt keychain items.
	 * [Android supported ciphers](https://developer.android.com/training/articles/keystore.html#SupportedCiphers)
	 */
	cipher?: string;

	/**
	 * Required identifier to create or receive a keychain item. The identifier
	 * cannot contain alphanumeric characters or it might be rejected by the keychain.
	 */
	identifier: string;

	/**
	 * Optional parameter used to specify additional values to the keychain.
	 * Example: The raw-value of `kSecUseOperationPrompt` is `u_OpPrompt`, so
	 * you could specify `options: {'u_OpPrompt': 'Please authenticate yourself!'}`.
	 */
	options?: any;

	/**
	 * A key whose value is a string indicating the item's service. Defaults
	 * to `ti.touchid` if not set for backwards compatibility with the deprecated
	 * Ti.TouchID module. This property is required when using app extensions
	 * and should also include the app-prefix (aka team-ID).
	 */
	service: string;

}

export = Identity;

/**
 * Allows a Titanium application to use the iOS Touch ID / Face ID authentication mechanism.
 */
declare namespace Identity {
    /**
     * Item data can only be accessed once the device has been unlocked after
     * a restart.  This is recommended for items that need to be accesible by
     * background applications. Items with this attribute will migrate to a new
     * device when using encrypted backups.
     */
    const ACCESSIBLE_AFTER_FIRST_UNLOCK: string;

    /**
     * Item data can only be accessed once the device has been unlocked after a
     * restart. This is recommended for items that need to be accessible by
     * background applications. Items with this attribute will never migrate to
     * a new device, so after a backup is restored to a new device these items
     * will be missing.
     */
    const ACCESSIBLE_AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: string;

    /**
     * Item data can always be accessed regardless of the lock state of the device.
     * This is not recommended for anything except system use. Items with this
     * attribute will migrate to a new device when using encrypted backups.
     */
    const ACCESSIBLE_ALWAYS: number | string;

    /**
     * Item data can always be accessed regardless of the lock state of the device.
     * This option is not recommended for anything except system use. Items with
     * this attribute will never migrate to a new device, so after a backup is
     * restored to a new device, these items will be missing.
     */
    const ACCESSIBLE_ALWAYS_THIS_DEVICE_ONLY: number | string;

    /**
     * Item data can only be accessed while the device is unlocked. This class
     * is only available if a passcode is set on the device. This is recommended
     * for items that only need to be accessible while the application is in the
     * foreground. Items with this attribute will never migrate to a new
     * device, so after a backup is restored to a new device, these items
     * will be missing. No items can be stored in this class on devices
     * without a passcode. Disabling the device passcode will cause all
     * items in this class to be deleted.
     */
    const ACCESSIBLE_WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: number | string;

    /**
     * Item data can only be accessed while the device is unlocked. This is
     * recommended for items that only need be accesible while the application
     * is in the foreground.  Items with this attribute will migrate to a new
     * device when using encrypted backups.
     */
    const ACCESSIBLE_WHEN_UNLOCKED: string;

    /**
     * Item data can only be accessed while the device is unlocked. This is
     * recommended for items that only need be accesible while the application
     * is in the foreground. Items with this attribute will never migrate to a
     * new device, so after a backup is restored to a new device, these items
     * will be missing.
     */
    const ACCESSIBLE_WHEN_UNLOCKED_THIS_DEVICE_ONLY: string;

    /**
     * Constraint logic operation - When using more than one constraint, all must
     * be satisfied.
     */
    const ACCESS_CONTROL_AND: number;

    /**
     * Security: Application provided password for data encryption key generation.
     * This is not a constraint but additional item encryption mechanism.
     */
    const ACCESS_CONTROL_APPLICATION_PASSWORD: number;

    /**
     * Constraint - Device passcode.
     */
    const ACCESS_CONTROL_DEVICE_PASSCODE: number;

    /**
     * Constraint logic operation - When using more than one constraint, at least
     * one of them must be satisfied.
     */
    const ACCESS_CONTROL_OR: number;

    /**
     * Create access control for private key operations (i.e. sign operation).
     */
    const ACCESS_CONTROL_PRIVATE_KEY_USAGE: number;

    /**
     * Constraint - Touch ID (any finger). Touch ID must be available and at least
     * one finger must be enrolled. Item is still accessible by Touch ID even if
     * fingers are added or removed.
     */
    const ACCESS_CONTROL_TOUCH_ID_ANY: number;

    /**
     * Constraint - Touch ID from the set of currently enrolled fingers. Touch ID
     * must be available and at least one finger must be enrolled. When fingers
     * are added or removed, the item is invalidated.
     */
    const ACCESS_CONTROL_TOUCH_ID_CURRENT_SET: number;

    /**
     * User presence policy using Touch ID, Face ID or Passcode. Touch ID / Face ID does not have
     * to be available or enrolled. Item is still accessible by Touch ID / Face ID even
     * if fingers are added or removed.
     */
    const ACCESS_CONTROL_USER_PRESENCE: number;

    /**
     * Device owner was authenticated using a biometric method.
     */
    const AUTHENTICATION_POLICY_BIOMETRICS: number;

    /**
     * Device owner was authenticated using a biometric method or the Apple Watch.
     */
    const AUTHENTICATION_POLICY_BIOMETRICS_OR_WATCH: number;

    /**
     * Device owner was authenticated by Touch ID or device passcode.
     */
    const AUTHENTICATION_POLICY_PASSCODE: number;

    /**
     * Device owner was authenticated using the Apple Watch.
     */
    const AUTHENTICATION_POLICY_WATCH: number;

    /**
     * The device supports Face ID.
     */
    const BIOMETRY_TYPE_FACE_ID: number;

    /**
     * The device does not support biometry.
     */
    const BIOMETRY_TYPE_NONE: number;

    /**
     * The device supports Touch ID.
     */
    const BIOMETRY_TYPE_TOUCH_ID: number;

    /**
     * Constant indicating that the app cancelled authentication.
     */
    const ERROR_APP_CANCELLED: number;

    /**
     * Constant indicating that the authentication was not successful.
     */
    const ERROR_AUTHENTICATION_FAILED: number;

    /**
     * Authentication was not successful, because there were too many failed biometry
     * attempts and biometry is now locked. Passcode is required to unlock biometry,
     * e.g. evaluating <Identity.authenticate> will ask for passcode as a prerequisite.
     */
    const ERROR_BIOMETRY_LOCKOUT: number;

    /**
     * Authentication could not start, because biometry is not available on the device.
     */
    const ERROR_BIOMETRY_NOT_AVAILABLE: number;

    /**
     * Authentication could not start, because biometry has no enrolled identities.
     */
    const ERROR_BIOMETRY_NOT_ENROLLED: number;

    /**
     * Constant indicating that there is an invalid context.
     */
    const ERROR_INVALID_CONTEXT: number;

    /**
     * Constant indicating that the passcode is not set for the device.
     */
    const ERROR_PASSCODE_NOT_SET: number;

    /**
     * Constant indicating that iOS cancelled authentication, for example, if another
     * application enters the foreground.
     */
    const ERROR_SYSTEM_CANCEL: number;

    /**
     * Constant indicating that Touch ID has locked out.
     * Note: This constant has been deprecated for iOS 11 and later. Use
     * <Identity.ERROR_BIOMETRY_LOCKOUT> for apps targeting iOS 11
     * and later.
     */
    const ERROR_TOUCH_ID_LOCKOUT: number;

    /**
     * Constant indicating that Touch ID is not available on the device.
     * Note: This constant has been deprecated for iOS 11 and later. Use
     * <Identity.ERROR_BIOMETRY_NOT_AVAILABLE> for apps targeting iOS 11
     * and later.
     */
    const ERROR_TOUCH_ID_NOT_AVAILABLE: number;

    /**
     * Constant indicating that Touch ID does not have any enrolled fingerprints.
     * Note: This constant has been deprecated for iOS 11 and later. Use
     * <Identity.ERROR_TOUCH_ID_NOT_ENROLLED for apps targeting iOS 11
     * and later.
     */
    const ERROR_TOUCH_ID_NOT_ENROLLED: number;

    /**
     * Constant indicating that the user canceled authentication.
     */
    const ERROR_USER_CANCEL: number;

    /**
     * Constant indicating that the user tapped the fallback button to enter their passcode.
     */
    const ERROR_USER_FALLBACK: number;

    /**
     * Base event for class Identity.KeychainItem
     */
    interface KeychainItemBaseEvent extends Ti.Event {
        /**
         * Source object that fired the event.
         */
        source: Identity.KeychainItem;

    }
    /**
     * Triggered when a new keychain item is saved (or an error occurred).
     */
    interface KeychainItem_save_Event extends KeychainItemBaseEvent {
    }
    /**
     * Triggered when a new keychain item is updated (or an error occurred).
     */
    interface KeychainItem_update_Event extends KeychainItemBaseEvent {
    }
    /**
     * Triggered when a new keychain item is read (or an error occurred).
     */
    interface KeychainItem_read_Event extends KeychainItemBaseEvent {
    }
    /**
     * Triggered when a new keychain item is reset (or an error occurred).
     */
    interface KeychainItem_reset_Event extends KeychainItemBaseEvent {
    }
    interface KeychainItemEventMap extends ProxyEventMap {
        read: KeychainItem_read_Event;

        reset: KeychainItem_reset_Event;

        save: KeychainItem_save_Event;

        update: KeychainItem_update_Event;

    }
    /**
     * Represents a keychain item to communicate with the native iOS Keychain and Android Keystore.
     */
    class KeychainItem extends Titanium.Module {
        /**
         * Asynchronously determines whether or not a value of the specified identifier
         * exists in the keychain item.
         */
        static fetchExistence(result: (...args: any[]) => void): void;

        /**
         * Reads an existing value to the native keychain.
         */
        static read(): void;

        /**
         * Resets an existing value from the native keychain.
         */
        static reset(): void;

        /**
         * Saves a new value to the native keychain.
         */
        static save(value: string): void;

        /**
         * Updates an existing value to the native keychain.
         */
        static update(value: string): void;

    }
}

/**
 * Allows a Titanium application to use the iOS Touch ID / Face ID authentication mechanism.
 */
declare class Identity extends Titanium.Module {
    /**
     * Sets the global authentication policy used in this Touch ID / Face ID context.
     */
    static authenticationPolicy: number;

    /**
     * Indicates the type of the biometry supported by the device.
     */
    static readonly biometryType: number;

    /**
     * Initiates the biometric authentication process.
     */
    static authenticate(params: IdentityAuthenticationType): void;

    /**
     * Create KeychainItem.
     */
    static createKeychainItem(params: KeychainItemType): void;

    /**
     * Checks to see if device is configured for biometric authentication.
     */
    static deviceCanAuthenticate(): DeviceCanAuthenticateResult;

    /**
     * Gets the value of the <Identity.authenticationPolicy> property.
     */
    static getAuthenticationPolicy: never;

    /**
     * Gets the value of the <Identity.biometryType> property.
     */
    static getBiometryType: never;

    /**
     * Invalidates the current biometric dialog.
     */
    static invalidate(): void;

    /**
     * Determines if the current device supports Touch ID or Face ID.
     */
    static isSupported(): boolean;

    /**
     * Sets the value of the <Identity.authenticationPolicy> property.
     */
    static setAuthenticationPolicy: never;

}
