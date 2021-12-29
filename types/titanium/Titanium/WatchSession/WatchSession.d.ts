declare namespace Titanium {
	/**
	 * Base event for class Titanium.WatchSession
	 */
	interface WatchSessionBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.WatchSession;

	}
	/**
	 * App received message from apple watch in foreground. Will be called on startup if the
	 * incoming message caused the receiver to launch.
	 */
	interface WatchSession_receivemessage_Event extends WatchSessionBaseEvent {
		/**
		 * The message content
		 */
		message: any;

	}
	/**
	 * App received app context from apple watch. Will be called on startup if an applicationContext is available.
	 */
	interface WatchSession_receiveapplicationcontext_Event extends WatchSessionBaseEvent {
		/**
		 * The application Context
		 */
		applicationContext: any;

	}
	/**
	 * App received user info from apple watch in background. Will be called on startup if the user info finished
	 * transferring when the receiver was not running.
	 */
	interface WatchSession_receiveuserinfo_Event extends WatchSessionBaseEvent {
		/**
		 * The user info content
		 */
		userInfo: any;

	}
	/**
	 * App received file from apple watch in background.
	 */
	interface WatchSession_receivefile_Event extends WatchSessionBaseEvent {
		/**
		 * The downloaded data as a Titanium.Blob object.
		 */
		data: Titanium.Blob;

		/**
		 * Error code if transfer failed.
		 */
		errorCode: number;

		/**
		 * Error message if any.
		 */
		message: string;

		/**
		 * Information about the file.
		 */
		metaData: any;

		/**
		 * If the transfer was successful.
		 */
		success: boolean;

	}
	/**
	 * The watch state has changed.
	 */
	interface WatchSession_watchstatechanged_Event extends WatchSessionBaseEvent {
		/**
		 * Returns the current activation state of the watch.  Only available on iOS 9.3
		 * and later. See <Titanium.WatchSession.activationState> for more infos.
		 */
		activationState: number;

		/**
		 * If the apple watch is currently activated. Only available on iOS 9.3
		 * and later. See <Titanium.WatchSession.isActivated> for more infos.
		 */
		isActivated: boolean;

		/**
		 * If the complication is enabled in the apple watch.
		 */
		isComplicationEnabled: boolean;

		/**
		 * If the device is paired with the apple watch.
		 */
		isPaired: boolean;

		/**
		 * If apple watch is currently reachable.
		 */
		isReachable: boolean;

		/**
		 * If the watch app is installed in the apple watch.
		 */
		isWatchAppInstalled: boolean;

	}
	/**
	 * The watch reachability state has changed.
	 */
	interface WatchSession_reachabilitychanged_Event extends WatchSessionBaseEvent {
		/**
		 * Returns the current activation state of the watch.  Only available on iOS 9.3
		 * and later. See <Titanium.WatchSession.activationState> for more infos.
		 */
		activationState: number;

		/**
		 * If the apple watch is currently activated. Only available on iOS 9.3
		 * and later. See <Titanium.WatchSession.isActivated> for more infos.
		 */
		isActivated: boolean;

		/**
		 * If the complication is enabled in the apple watch.
		 */
		isComplicationEnabled: boolean;

		/**
		 * If the device is paired with the apple watch.
		 */
		isPaired: boolean;

		/**
		 * If apple watch is currently reachable.
		 */
		isReachable: boolean;

		/**
		 * If the watch app is installed in the apple watch.
		 */
		isWatchAppInstalled: boolean;

	}
	/**
	 * Fired when the application completed user info transfer to the watch app.
	 */
	interface WatchSession_finishuserinfotransfer_Event extends WatchSessionBaseEvent {
		/**
		 * Error code if transfer failed.
		 */
		errorCode: number;

		/**
		 * Error message if any.
		 */
		message: string;

		/**
		 * If the transfer was successful.
		 */
		success: boolean;

		/**
		 * The downloaded data as a Titanium.Blob object.
		 */
		userInfo: any;

	}
	/**
	 * App completed file transfer to watch app.
	 */
	interface WatchSession_finishfiletransfer_Event extends WatchSessionBaseEvent {
		/**
		 * Error code if transfer failed.
		 */
		errorCode: number;

		/**
		 * URL of the file transferred.
		 */
		fileURL: string;

		/**
		 * Error message if any.
		 */
		message: string;

		/**
		 * meta data of the file transferred.
		 */
		metaData: any;

		/**
		 * If the transfer was successful.
		 */
		success: boolean;

	}
	/**
	 * Called when the session can no longer be used to modify or add any new transfers and,
	 * all interactive messages will be cancelled, but events for background transfers can still fire.
	 * This will happen when the selected watch is being changed.
	 */
	interface WatchSession_inactive_Event extends WatchSessionBaseEvent {
		/**
		 * Returns the current activation state of the watch.  Only available on iOS 9.3
		 * and later. See <Titanium.WatchSession.activationState> for more infos.
		 */
		activationState: number;

		/**
		 * If the apple watch is currently activated. Only available on iOS 9.3
		 * and later. See <Titanium.WatchSession.isActivated> for more infos.
		 */
		isActivated: boolean;

		/**
		 * If the complication is enabled in the apple watch.
		 */
		isComplicationEnabled: boolean;

		/**
		 * If the device is paired with the apple watch.
		 */
		isPaired: boolean;

		/**
		 * If apple watch is currently reachable.
		 */
		isReachable: boolean;

		/**
		 * If the watch app is installed in the apple watch.
		 */
		isWatchAppInstalled: boolean;

	}
	/**
	 * Called when all events for the previously selected watch has occurred.
	 * The session can be re-activated for the now selected watch using activateSession.
	 */
	interface WatchSession_deactivate_Event extends WatchSessionBaseEvent {
		/**
		 * Returns the current activation state of the watch.  Only available on iOS 9.3
		 * and later. See <Titanium.WatchSession.activationState> for more infos.
		 */
		activationState: number;

		/**
		 * If the apple watch has currently content pending. Only available on iOS 10.0
		 * and later. See <Titanium.WatchSession.hasContentPending> for more infos.
		 */
		hasContentPending: boolean;

		/**
		 * If the apple watch is currently activated. Only available on iOS 9.3
		 * and later. See <Titanium.WatchSession.isActivated> for more infos.
		 */
		isActivated: boolean;

		/**
		 * If the complication is enabled in the apple watch.
		 */
		isComplicationEnabled: boolean;

		/**
		 * If the device is paired with the apple watch.
		 */
		isPaired: boolean;

		/**
		 * If apple watch is currently reachable.
		 */
		isReachable: boolean;

		/**
		 * If the watch app is installed in the apple watch.
		 */
		isWatchAppInstalled: boolean;

		/**
		 * If the apple watch has complication userInfo transfers left. Only available on iOS 10.0
		 * and later. See <Titanium.WatchSession.remainingComplicationUserInfoTransfers> for more infos.
		 */
		remainingComplicationUserInfoTransfers: boolean;

	}
	/**
	 * Called when the session has completed activation. If session state is
	 * <Titanium.WatchSession.ACTIVATION_STATE_NOT_ACTIVATED> there will be an error
	 * with more details.
	 */
	interface WatchSession_activationCompleted_Event extends WatchSessionBaseEvent {
		/**
		 * Returns the current activation state of the watch.  Only available on iOS 9.3
		 * and later. See <Titanium.WatchSession.activationState> for more infos.
		 */
		activationState: number;

		/**
		 * If the apple watch is currently activated. Only available on iOS 9.3
		 * and later. See <Titanium.WatchSession.isActivated> for more infos.
		 */
		isActivated: boolean;

		/**
		 * If the complication is enabled in the apple watch.
		 */
		isComplicationEnabled: boolean;

		/**
		 * If the device is paired with the apple watch.
		 */
		isPaired: boolean;

		/**
		 * If apple watch is currently reachable.
		 */
		isReachable: boolean;

		/**
		 * If the watch app is installed in the apple watch.
		 */
		isWatchAppInstalled: boolean;

	}
	interface WatchSessionEventMap extends ProxyEventMap {
		activationCompleted: WatchSession_activationCompleted_Event;

		deactivate: WatchSession_deactivate_Event;

		finishfiletransfer: WatchSession_finishfiletransfer_Event;

		finishuserinfotransfer: WatchSession_finishuserinfotransfer_Event;

		inactive: WatchSession_inactive_Event;

		reachabilitychanged: WatchSession_reachabilitychanged_Event;

		receiveapplicationcontext: WatchSession_receiveapplicationcontext_Event;

		receivefile: WatchSession_receivefile_Event;

		receivemessage: WatchSession_receivemessage_Event;

		receiveuserinfo: WatchSession_receiveuserinfo_Event;

		watchstatechanged: WatchSession_watchstatechanged_Event;

	}
	/**
	 * Used to enable data and file transfers between a watchOS and iOS application.
	 */
	class WatchSession extends Titanium.Module {
		/**
		 * The watch is currently activated.
		 */
		static readonly ACTIVATION_STATE_ACTIVATED: number;

		/**
		 * The watch is currently inactive.
		 */
		static readonly ACTIVATION_STATE_INACTIVE: number;

		/**
		 * The watch is currently not activated.
		 */
		static readonly ACTIVATION_STATE_NOT_ACTIVATED: number;

		/**
		 * Returns the current activation state of the watch.
		 */
		static readonly activationState: number;

		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * Returns `true` if there is more content for the session to deliver.
		 */
		static readonly hasContentPending: boolean;

		/**
		 * Returns `true` if the watch is currently activated.
		 */
		static readonly isActivated: boolean;

		/**
		 * Returns `true` if complication is enabled on the installed watch app.
		 */
		static readonly isComplicationEnabled: boolean;

		/**
		 * Returns `true` if the device is paired with a watch.
		 */
		static readonly isPaired: boolean;

		/**
		 * Returns `true` if the watch is currently reachable.
		 */
		static readonly isReachable: boolean;

		/**
		 * Returns `true` if the device supports watch connectivity.
		 */
		static readonly isSupported: boolean;

		/**
		 * Returns `true` if the accompanying watch app is installed.
		 */
		static readonly isWatchAppInstalled: boolean;

		/**
		 * The most recent application context sent to the watch app.
		 */
		static readonly recentApplicationContext: any;

		/**
		 * The number of calls remaining to `transferCurrentComplication` before the system starts
		 * transferring the complicationUserInfo as regular userInfos.
		 */
		static readonly remainingComplicationUserInfoTransfers: number;

		/**
		 * Activates the watch session
		 */
		static activateSession(): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof WatchSessionEventMap>(name: K, callback: (this: Titanium.WatchSession, event: WatchSessionEventMap[K]) => void): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Cancels all incomplete file transfers to the apple watch.
		 */
		static cancelAllFileTransfers(): void;

		/**
		 * Cancels all incomplete transfers to the apple watch.
		 */
		static cancelAllTransfers(): void;

		/**
		 * Cancels all incomplete user info and complication transfers to the apple watch.
		 */
		static cancelAllUserInfoTransfers(): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent<K extends keyof WatchSessionEventMap>(name: K, event?: WatchSessionEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof WatchSessionEventMap>(name: K, callback: (this: Titanium.WatchSession, event: WatchSessionEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Sends a message to the apple watch.
		 */
		static sendMessage(message: any, reply?: (param0: MessageReply) => void): void;

		/**
		 * Transfers complication data to the watch application.
		 */
		static transferCurrentComplication(params: any): void;

		/**
		 * Transfers a file to the apple watch.
		 */
		static transferFile(params: any): void;

		/**
		 * Transfers an user info to the apple watch.
		 */
		static transferUserInfo(params: any): void;

		/**
		 * Sends an app context update to the apple watch.
		 */
		static updateApplicationContext(params: any): void;

	}
}
/**
 * Reply message received from watch app.
 */
interface MessageReply {
	/**
	 * Error code. Returns 0 if `success` is `true`.
	 */
	code?: number;

	/**
	 * Error message, if any returned.
	 */
	error?: string;

	/**
	 * Reply message from watchapp.
	 */
	message?: any;

	/**
	 * Indicates if the operation succeeded.
	 */
	success?: boolean;

}
