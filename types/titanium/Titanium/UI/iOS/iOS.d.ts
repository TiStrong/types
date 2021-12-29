/// <reference path="./AlertDialogStyle.d.ts" />
/// <reference path="./AnchorAttachmentBehavior.d.ts" />
/// <reference path="./AnimationStyle.d.ts" />
/// <reference path="./Animator.d.ts" />
/// <reference path="./ApplicationShortcuts.d.ts" />
/// <reference path="./BlurView.d.ts" />
/// <reference path="./CollisionBehavior.d.ts" />
/// <reference path="./CoverFlowView.d.ts" />
/// <reference path="./DocumentViewer.d.ts" />
/// <reference path="./DynamicItemBehavior.d.ts" />
/// <reference path="./FeedbackGenerator.d.ts" />
/// <reference path="./GravityBehavior.d.ts" />
/// <reference path="./ListViewCellSelectionStyle.d.ts" />
/// <reference path="./ListViewScrollPosition.d.ts" />
/// <reference path="./ListViewStyle.d.ts" />
/// <reference path="./LivePhoto.d.ts" />
/// <reference path="./LivePhotoView.d.ts" />
/// <reference path="./MenuPopup.d.ts" />
/// <reference path="./NavigationWindow.d.ts" />
/// <reference path="./PreviewAction.d.ts" />
/// <reference path="./PreviewActionGroup.d.ts" />
/// <reference path="./PreviewContext.d.ts" />
/// <reference path="./ProgressBarStyle.d.ts" />
/// <reference path="./PushBehavior.d.ts" />
/// <reference path="./RowAnimationStyle.d.ts" />
/// <reference path="./ScrollIndicatorStyle.d.ts" />
/// <reference path="./SnapBehavior.d.ts" />
/// <reference path="./SplitWindow.d.ts" />
/// <reference path="./StatusBar.d.ts" />
/// <reference path="./Stepper.d.ts" />
/// <reference path="./SystemButton.d.ts" />
/// <reference path="./SystemButtonStyle.d.ts" />
/// <reference path="./SystemIcon.d.ts" />
/// <reference path="./TabbedBar.d.ts" />
/// <reference path="./TableViewCellSelectionStyle.d.ts" />
/// <reference path="./TableViewScrollPosition.d.ts" />
/// <reference path="./TableViewStyle.d.ts" />
/// <reference path="./Toolbar.d.ts" />
/// <reference path="./TransitionAnimation.d.ts" />
/// <reference path="./ViewAttachmentBehavior.d.ts" />
/// <reference path="./WebViewConfiguration.d.ts" />
/// <reference path="./WebViewDecisionHandler.d.ts" />
/// <reference path="./WebViewProcessPool.d.ts" />
declare namespace Titanium {
	namespace UI {
		/**
		 * Apple iOS specific UI capabilities.  All properties, methods and events in this namespace will
		 * only work on Apple iOS devices.
		 */
		namespace iOS {
			/**
			 * Allow the navigation to continue.
			 */
			const ACTION_POLICY_ALLOW: number;

			/**
			 * Cancel the navigation.
			 */
			const ACTION_POLICY_CANCEL: number;

			/**
			 * All media types require a user gesture to begin playing.
			 */
			const AUDIOVISUAL_MEDIA_TYPE_ALL: number;

			/**
			 * Media types containing audio require a user gesture to begin playing.
			 */
			const AUDIOVISUAL_MEDIA_TYPE_AUDIO: number;

			/**
			 * No media types require a user gesture to begin playing.
			 */
			const AUDIOVISUAL_MEDIA_TYPE_NONE: number;

			/**
			 * Media types containing video require a user gesture to begin playing.
			 */
			const AUDIOVISUAL_MEDIA_TYPE_VIDEO: number;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_CLEAR](Titanium.UI.BLEND_MODE_CLEAR) instead.
			 */
			const BLEND_MODE_CLEAR: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_COLOR](Titanium.UI.BLEND_MODE_COLOR) instead.
			 */
			const BLEND_MODE_COLOR: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_COLOR_BURN](Titanium.UI.BLEND_MODE_COLOR_BURN) instead.
			 */
			const BLEND_MODE_COLOR_BURN: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_COLOR_DODGE](Titanium.UI.BLEND_MODE_COLOR_DODGE) instead.
			 */
			const BLEND_MODE_COLOR_DODGE: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_COPY](Titanium.UI.BLEND_MODE_COPY) instead.
			 */
			const BLEND_MODE_COPY: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_DARKEN](Titanium.UI.BLEND_MODE_DARKEN) instead.
			 */
			const BLEND_MODE_DARKEN: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_DESTINATION_ATOP](Titanium.UI.BLEND_MODE_DESTINATION_ATOP) instead.
			 */
			const BLEND_MODE_DESTINATION_ATOP: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_DESTINATION_IN](Titanium.UI.BLEND_MODE_DESTINATION_IN) instead.
			 */
			const BLEND_MODE_DESTINATION_IN: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_DESTINATION_OUT](Titanium.UI.BLEND_MODE_DESTINATION_OUT) instead.
			 */
			const BLEND_MODE_DESTINATION_OUT: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_DESTINATION_OVER](Titanium.UI.BLEND_MODE_DESTINATION_OVER) instead.
			 */
			const BLEND_MODE_DESTINATION_OVER: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_DIFFERENCE](Titanium.UI.BLEND_MODE_DIFFERENCE) instead.
			 */
			const BLEND_MODE_DIFFERENCE: never;

			/**
			 * Image mode constant. Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_EXCLUSION](Titanium.UI.BLEND_MODE_EXCLUSION) instead.
			 */
			const BLEND_MODE_EXCLUSION: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_HARD_LIGHT](Titanium.UI.BLEND_MODE_HARD_LIGHT) instead.
			 */
			const BLEND_MODE_HARD_LIGHT: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_HUE](Titanium.UI.BLEND_MODE_HUE) instead.
			 */
			const BLEND_MODE_HUE: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_LIGHTEN](Titanium.UI.BLEND_MODE_LIGHTEN) instead.
			 */
			const BLEND_MODE_LIGHTEN: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_LUMINOSITY](Titanium.UI.BLEND_MODE_LUMINOSITY) instead.
			 */
			const BLEND_MODE_LUMINOSITY: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_MULTIPLY](Titanium.UI.BLEND_MODE_MULTIPLY) instead.
			 */
			const BLEND_MODE_MULTIPLY: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_NORMAL](Titanium.UI.BLEND_MODE_NORMAL) instead.
			 */
			const BLEND_MODE_NORMAL: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_OVERLAY](Titanium.UI.BLEND_MODE_OVERLAY) instead.
			 */
			const BLEND_MODE_OVERLAY: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_PLUS_DARKER](Titanium.UI.BLEND_MODE_PLUS_DARKER) instead.
			 */
			const BLEND_MODE_PLUS_DARKER: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_PLUS_LIGHTER](Titanium.UI.BLEND_MODE_PLUS_LIGHTER) instead.
			 */
			const BLEND_MODE_PLUS_LIGHTER: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_SATURATION](Titanium.UI.BLEND_MODE_SATURATION) instead.
			 */
			const BLEND_MODE_SATURATION: never;

			/**
			 * Image mode constant. Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_SCREEN](Titanium.UI.BLEND_MODE_SCREEN) instead.
			 */
			const BLEND_MODE_SCREEN: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_SOFT_LIGHT](Titanium.UI.BLEND_MODE_SOFT_LIGHT) instead.
			 */
			const BLEND_MODE_SOFT_LIGHT: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_SOURCE_ATOP](Titanium.UI.BLEND_MODE_SOURCE_ATOP) instead.
			 */
			const BLEND_MODE_SOURCE_ATOP: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_SOURCE_IN](Titanium.UI.BLEND_MODE_SOURCE_IN) instead.
			 */
			const BLEND_MODE_SOURCE_IN: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_SOURCE_OUT](Titanium.UI.BLEND_MODE_SOURCE_OUT) instead.
			 */
			const BLEND_MODE_SOURCE_OUT: never;

			/**
			 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
			 * @deprecated Use [Titanium.UI.BLEND_MODE_XOR](Titanium.UI.BLEND_MODE_XOR) instead.
			 */
			const BLEND_MODE_XOR: never;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_DARK: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_EXTRA_LIGHT: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_LIGHT: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_PROMINENT: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_REGULAR: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_CHROME_MATERIAL: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_CHROME_MATERIAL_DARK: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_CHROME_MATERIAL_LIGHT: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_MATERIAL: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_MATERIAL_DARK: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_MATERIAL_LIGHT: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_THICK_MATERIAL: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_THICK_MATERIAL_DARK: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_THICK_MATERIAL_LIGHT: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_THIN_MATERIAL: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_THIN_MATERIAL_DARK: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_THIN_MATERIAL_LIGHT: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_ULTRA_THIN_MATERIAL: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_ULTRA_THIN_MATERIAL_DARK: number;

			/**
			 * Use with [BlurView.effect](Titanium.UI.iOS.BlurView.effect) to specify a blur effect.
			 */
			const BLUR_EFFECT_STYLE_SYSTEM_ULTRA_THIN_MATERIAL_LIGHT: number;

			/**
			 * Specifies that the data for the URL load should be loaded from the originating source.
			 * No existing cache data should be used to satisfy a URL load request.
			 */
			const CACHE_POLICY_RELOAD_IGNORING_LOCAL_CACHE_DATA: number;

			/**
			 * Specifies that the existing cache data should be used to satisfy a request,
			 * regardless of its age or expiration date.
			 */
			const CACHE_POLICY_RETURN_CACHE_DATA_DONT_LOAD: number;

			/**
			 * Specifies that the existing cached data should be used to satisfy the request,
			 * regardless of its age or expiration date.
			 */
			const CACHE_POLICY_RETURN_CACHE_DATA_ELSE_LOAD: number;

			/**
			 * Specifies that the caching logic defined in the protocol implementation, if any,
			 * is used for a particular URL load request.
			 */
			const CACHE_POLICY_USE_PROTOCOL_CACHE_POLICY: number;

			/**
			 * Use with <Titanium.UI.View.clipMode> to specify clipping behavior.
			 */
			const CLIP_MODE_DEFAULT: number;

			/**
			 * Use with <Titanium.UI.View.clipMode> to specify clipping behavior.
			 */
			const CLIP_MODE_DISABLED: number;

			/**
			 * Use with <Titanium.UI.View.clipMode> to specify clipping behavior.
			 */
			const CLIP_MODE_ENABLED: number;

			/**
			 * Use with <Titanium.UI.iOS.CollisionBehavior.collisionMode> to specify collisions with both items and
			 * boundaries.
			 */
			const COLLISION_MODE_ALL: number;

			/**
			 * Use with <Titanium.UI.iOS.CollisionBehavior.collisionMode> to specify collisions with
			 * boundaries only.
			 */
			const COLLISION_MODE_BOUNDARY: number;

			/**
			 * Use with <Titanium.UI.iOS.CollisionBehavior.collisionMode> to specify collisions with items only.
			 */
			const COLLISION_MODE_ITEM: number;

			/**
			 * Credential should be stored only for this session.
			 */
			const CREDENTIAL_PERSISTENCE_FOR_SESSION: number;

			/**
			 * Credential should not be stored.
			 */
			const CREDENTIAL_PERSISTENCE_NONE: number;

			/**
			 * Credential should be stored in the keychain.
			 */
			const CREDENTIAL_PERSISTENCE_PERMANENT: number;

			/**
			 * Credential should be stored permanently in the keychain, and in addition should be
			 * distributed to other devices based on the owning AppleID.
			 */
			const CREDENTIAL_PERSISTENCE_SYNCHRONIZABLE: number;

			/**
			 * Use with <Titanium.UI.Picker.datePickerStyle> to automatically pick the best style
			 * available for the current platform & mode.
			 * @deprecated Use [Titanium.UI.DATE_PICKER_STYLE_AUTOMATIC](Titanium.UI.DATE_PICKER_STYLE_AUTOMATIC) instead.
			 */
			const DATE_PICKER_STYLE_AUTOMATIC: number;

			/**
			 * Use with <Titanium.UI.Picker.datePickerStyle> to show the picker with a compact style. Editing occurs in an overlay.
			 * @deprecated Use [Titanium.UI.DATE_PICKER_STYLE_COMPACT](Titanium.UI.DATE_PICKER_STYLE_COMPACT) instead.
			 */
			const DATE_PICKER_STYLE_COMPACT: number;

			/**
			 * Use with <Titanium.UI.Picker.datePickerStyle> to allow editing in place (as a calendar).
			 * @deprecated Use [Titanium.UI.DATE_PICKER_STYLE_INLINE](Titanium.UI.DATE_PICKER_STYLE_INLINE) instead.
			 */
			const DATE_PICKER_STYLE_INLINE: number;

			/**
			 * Use with <Titanium.UI.Picker.datePickerStyle> to show the picker the wheels. Editing occurs inline.
			 * @deprecated Use [Titanium.UI.DATE_PICKER_STYLE_WHEELS](Titanium.UI.DATE_PICKER_STYLE_WHEELS) instead.
			 */
			const DATE_PICKER_STYLE_WHEELS: number;

			/**
			 * The heavy impact style used as the `style` argument when creating a <Titanium.UI.iOS.FeedbackGenerator> with the
			 * type <Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT>.
			 */
			const FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY: number;

			/**
			 * The light impact style used as the `style` argument when creating a <Titanium.UI.iOS.FeedbackGenerator> with the
			 * type <Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT>.
			 */
			const FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT: number;

			/**
			 * The medium impact style used as the `style` argument when creating a <Titanium.UI.iOS.FeedbackGenerator> with the
			 * type <Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT>.
			 */
			const FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM: number;

			/**
			 * The error notification type used as the argument in <Titanium.UI.iOS.FeedbackGenerator.notificationOccurred>.
			 */
			const FEEDBACK_GENERATOR_NOTIFICATION_TYPE_ERROR: number;

			/**
			 * The success notification type used as the argument in <Titanium.UI.iOS.FeedbackGenerator.notificationOccurred>.
			 */
			const FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS: number;

			/**
			 * The warning notification type used as the argument in <Titanium.UI.iOS.FeedbackGenerator.notificationOccurred>.
			 */
			const FEEDBACK_GENERATOR_NOTIFICATION_TYPE_WARNING: number;

			/**
			 * The feedback type to be used when specifying an impact in <Titanium.UI.iOS.FeedbackGenerator>.
			 */
			const FEEDBACK_GENERATOR_TYPE_IMPACT: number;

			/**
			 * The feedback type to be used when specifying a received notification in <Titanium.UI.iOS.FeedbackGenerator>.
			 */
			const FEEDBACK_GENERATOR_TYPE_NOTIFICATION: number;

			/**
			 * The feedback type to be used when specifying a selection in <Titanium.UI.iOS.FeedbackGenerator>.
			 */
			const FEEDBACK_GENERATOR_TYPE_SELECTION: number;

			/**
			 * Inject the script after the document finishes loading, but before other subresources finish loading.
			 */
			const INJECTION_TIME_DOCUMENT_END: number;

			/**
			 * Inject the script after the document element is created, but before any other content is loaded.
			 */
			const INJECTION_TIME_DOCUMENT_START: number;

			/**
			 * Use with <Titanium.UI.ScrollView.keyboardDismissMode> to control keyboard dismiss mode.
			 */
			const KEYBOARD_DISMISS_MODE_INTERACTIVE: number;

			/**
			 * Use with <Titanium.UI.ScrollView.keyboardDismissMode> to control keyboard dismiss mode.
			 */
			const KEYBOARD_DISMISS_MODE_NONE: number;

			/**
			 * Use with <Titanium.UI.ScrollView.keyboardDismissMode> to control keyboard dismiss mode.
			 */
			const KEYBOARD_DISMISS_MODE_ON_DRAG: number;

			/**
			 * Always use a larger title when this item is top most.
			 */
			const LARGE_TITLE_DISPLAY_MODE_ALWAYS: number;

			/**
			 * Automatically use the large out-of-line title based on the state of the p
			 * revious item in the navigation bar.
			 */
			const LARGE_TITLE_DISPLAY_MODE_AUTOMATIC: number;

			/**
			 * Never use a larger title when this item is top most.
			 */
			const LARGE_TITLE_DISPLAY_MODE_NEVER: number;

			/**
			 * To indicate that the Live Photo aspect is turned off and it will
			 * be treated as a still (e.g. for sharing).
			 */
			const LIVEPHOTO_BADGE_OPTIONS_LIVE_OFF: number;

			/**
			 * Include treatments so this image can be shown directly over the content
			 * of the Live Photo.
			 */
			const LIVEPHOTO_BADGE_OPTIONS_OVER_CONTENT: number;

			/**
			 * Plays back the entire motion and sound content of the Live Photo, including transition
			 * effects at the start and end.
			 */
			const LIVEPHOTO_PLAYBACK_STYLE_FULL: number;

			/**
			 * Plays back only a brief section of the motion content of the Live Photo, without sound.
			 */
			const LIVEPHOTO_PLAYBACK_STYLE_HINT: number;

			/**
			 * An arrow that is automatically aligned.
			 */
			const MENU_POPUP_ARROW_DIRECTION_DEFAULT: number;

			/**
			 * An arrow that points downward.
			 */
			const MENU_POPUP_ARROW_DIRECTION_DOWN: number;

			/**
			 * An arrow that points toward the left.
			 */
			const MENU_POPUP_ARROW_DIRECTION_LEFT: number;

			/**
			 * An arrow that points toward the right.
			 */
			const MENU_POPUP_ARROW_DIRECTION_RIGHT: number;

			/**
			 * An arrow that points upward.
			 */
			const MENU_POPUP_ARROW_DIRECTION_UP: number;

			/**
			 * View presented with the same style as its parent window.
			 */
			let MODAL_PRESENTATION_CURRENT_CONTEXT: number;

			/**
			 * Window width and height are smaller than those of the screen and the view is centered on
			 * the screen.
			 */
			const MODAL_PRESENTATION_FORMSHEET: number;

			/**
			 * Window covers the screen.
			 */
			const MODAL_PRESENTATION_FULLSCREEN: number;

			/**
			 * View presented over its parent window.
			 */
			let MODAL_PRESENTATION_OVER_CURRENT_CONTEXT: number;

			/**
			 * Presented view covers the screen.
			 */
			let MODAL_PRESENTATION_OVER_CURRENT_FULL_SCREEN: number;

			/**
			 * Window height is the height of the screen and width is equal to screen width in a portrait
			 * orientation.
			 */
			const MODAL_PRESENTATION_PAGESHEET: number;

			/**
			 * When the window is presented, its view slides up from the bottom of the screen. On dismissal,
			 * the view slides back down (default.)
			 */
			const MODAL_TRANSITION_STYLE_COVER_VERTICAL: number;

			/**
			 * When the window is presented, the current view fades out while the new view fades in at the
			 * same time. On dismissal, a similar type of cross-fade is used to return to the original view.
			 */
			const MODAL_TRANSITION_STYLE_CROSS_DISSOLVE: number;

			/**
			 * When the window is presented, the current view initiates a horizontal 3D flip from
			 * right-to-left, resulting in the revealing of the new view as if it were on the back of the
			 * previous view. On dismissal, the flip occurs from left-to-right, returning to the original
			 * view.
			 */
			const MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL: number;

			/**
			 * When the window is presented, one corner of the current view curls up to reveal the modal
			 * view underneath. On dismissal, the curled up page unfurls itself back on top of the modal
			 * view.
			 */
			const MODAL_TRANSITION_STYLE_PARTIAL_CURL: number;

			/**
			 * The normal style for preview actions.
			 */
			const PREVIEW_ACTION_STYLE_DEFAULT: number;

			/**
			 * The destructive style for preview actions.
			 */
			const PREVIEW_ACTION_STYLE_DESTRUCTIVE: number;

			/**
			 * The selected style for preview actions.
			 */
			const PREVIEW_ACTION_STYLE_SELECTED: number;

			/**
			 * Use with <Titanium.UI.iOS.PushBehavior.pushMode> to specifiy a continuous force.
			 */
			const PUSH_MODE_CONTINUOUS: number;

			/**
			 * Use with <Titanium.UI.iOS.PushBehavior.pushMode> to specifiy an instantaneous force.
			 */
			const PUSH_MODE_INSTANTANEOUS: number;

			/**
			 * The default style for <RowActionType>.
			 */
			const ROW_ACTION_STYLE_DEFAULT: number;

			/**
			 * The destructive style for <RowActionType>.
			 */
			const ROW_ACTION_STYLE_DESTRUCTIVE: number;

			/**
			 * The normal style for <RowActionType>.
			 */
			const ROW_ACTION_STYLE_NORMAL: number;

			/**
			 * Use with <Titanium.UI.ScrollView.decelerationRate> to control deceleration rate.
			 */
			const SCROLL_DECELERATION_RATE_FAST: number;

			/**
			 * Use with <Titanium.UI.ScrollView.decelerationRate> to control deceleration rate.
			 */
			const SCROLL_DECELERATION_RATE_NORMAL: number;

			/**
			 * Use with <Titanium.UI.SearchBar.style> to change the search bar style.
			 */
			const SEARCH_BAR_STYLE_MINIMAL: number;

			/**
			 * Use with <Titanium.UI.SearchBar.style> to change the search bar style.
			 */
			const SEARCH_BAR_STYLE_PROMINENT: number;

			/**
			 * Selection endpoints can be placed at any character boundary.
			 */
			const SELECTION_GRANULARITY_CHARACTER: number;

			/**
			 * Selection granularity varies automatically depending on the selection.
			 */
			const SELECTION_GRANULARITY_DYNAMIC: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_ADD: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_ALARM: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_AUDIO: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_BOOKMARK: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_CAPTURE_PHOTO: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_CAPTURE_VIDEO: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_CLOUD: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_COMPOSE: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_CONFIRMATION: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_CONTACT: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_DATE: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_FAVORITE: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_HOME: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_INVITATION: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_LOCATION: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_LOVE: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_MAIL: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_MARK_LOCATION: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_MESSAGE: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_PAUSE: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_PLAY: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_PROHIBIT: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_SEARCH: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_SHARE: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_SHUFFLE: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_TASK: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_TASK_COMPLETED: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_TIME: number;

			/**
			 * Number that represents the icon used for the application shortcut
			 */
			const SHORTCUT_ICON_TYPE_UPDATE: number;

			/**
			 * String that represents the magnifying glass on the table view index bar
			 */
			const TABLEVIEW_INDEX_SEARCH: string;

			/**
			 * User tapped the back or forward button.
			 * @deprecated Not used with Titanium SDK 8.0.0 and later by replacing UIWebView with WKWebView.
			 */
			const WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD: never;

			/**
			 * User resubmitted a form.
			 * @deprecated Not used with Titanium SDK 8.0.0 and later by replacing UIWebView with WKWebView.
			 */
			const WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED: never;

			/**
			 * User submitted a form.
			 * @deprecated Not used with Titanium SDK 8.0.0 and later by replacing UIWebView with WKWebView.
			 */
			const WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED: never;

			/**
			 * User tapped a link.
			 * @deprecated Not used with Titanium SDK 8.0.0 and later by replacing UIWebView with WKWebView.
			 */
			const WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED: never;

			/**
			 * Some other action occurred.
			 * @deprecated Not used with Titanium SDK 8.0.0 and later by replacing UIWebView with WKWebView.
			 */
			const WEBVIEW_NAVIGATIONTYPE_OTHER: never;

			/**
			 * User tapped the reload button.
			 * @deprecated Not used with Titanium SDK 8.0.0 and later by replacing UIWebView with WKWebView.
			 */
			const WEBVIEW_NAVIGATIONTYPE_RELOAD: never;

		}
		/**
		 * Apple iOS specific UI capabilities.  All properties, methods and events in this namespace will
		 * only work on Apple iOS devices.
		 */
		class iOS extends Titanium.Module {
			/**
			 * The name of the API that this proxy corresponds to.
			 */
			static readonly apiName: string;

			/**
			 * Value of the badge for the application's springboard icon.
			 */
			static appBadge: number;

			/**
			 * Determines whether the shake to edit system-wide capability is enabled.
			 */
			static appSupportsShakeToEdit: boolean;

			/**
			 * Indicates if the proxy will bubble an event to its parent.
			 */
			static bubbleParent: boolean;

			/**
			 * Determines if the 3D-Touch capability "Force Touch" is supported (`true`) or not (`false`) by the device.
			 */
			static readonly forceTouchSupported: boolean;

			/**
			 * Sets the global status bar background color for the application. Android does not support setting instances of <Titanium.UI.Color>
			 */
			static statusBarBackgroundColor: string | Titanium.UI.Color;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Applies the properties to the proxy.
			 */
			static applyProperties(props: any): void;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.AnchorAttachmentBehavior>.
			 */
			static createAnchorAttachmentBehavior(parameters?: Dictionary<Titanium.UI.iOS.AnchorAttachmentBehavior>): Titanium.UI.iOS.AnchorAttachmentBehavior;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.Animator>.
			 */
			static createAnimator(parameters?: Dictionary<Titanium.UI.iOS.Animator>): Titanium.UI.iOS.Animator;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.BlurView>.
			 */
			static createBlurView(parameters?: Dictionary<Titanium.UI.iOS.BlurView>): Titanium.UI.iOS.BlurView;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.CollisionBehavior>.
			 */
			static createCollisionBehavior(parameters?: Dictionary<Titanium.UI.iOS.CollisionBehavior>): Titanium.UI.iOS.CollisionBehavior;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.CoverFlowView>.
			 */
			static createCoverFlowView(parameters?: Dictionary<Titanium.UI.iOS.CoverFlowView>): Titanium.UI.iOS.CoverFlowView;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.DocumentViewer>.
			 */
			static createDocumentViewer(parameters?: Dictionary<Titanium.UI.iOS.DocumentViewer>): Titanium.UI.iOS.DocumentViewer;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.DynamicItemBehavior>.
			 */
			static createDynamicItemBehavior(parameters?: Dictionary<Titanium.UI.iOS.DynamicItemBehavior>): Titanium.UI.iOS.DynamicItemBehavior;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.GravityBehavior>.
			 */
			static createGravityBehavior(parameters?: Dictionary<Titanium.UI.iOS.GravityBehavior>): Titanium.UI.iOS.GravityBehavior;

			/**
			 * Creates a live photo badge to be used together with the
			 * <Titanium.UI.iOS.LivePhotoView> API.
			 */
			static createLivePhotoBadge(type: number): Titanium.Blob;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.LivePhotoView>.
			 */
			static createLivePhotoView(parameters?: Dictionary<Titanium.UI.iOS.LivePhotoView>): Titanium.UI.iOS.LivePhotoView;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.MenuPopup>.
			 */
			static createMenuPopup(parameters?: Dictionary<Titanium.UI.iOS.MenuPopup>): Titanium.UI.iOS.MenuPopup;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.NavigationWindow>.
			 * @deprecated Use [Titanium.UI.NavigationWindow](Titanium.UI.NavigationWindow) instead.
			 */
			static createNavigationWindow: never;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.PreviewAction>.
			 */
			static createPreviewAction(parameters?: Dictionary<Titanium.UI.iOS.PreviewAction>): Titanium.UI.iOS.PreviewAction;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.PreviewActionGroup>.
			 */
			static createPreviewActionGroup(parameters?: Dictionary<Titanium.UI.iOS.PreviewActionGroup>): Titanium.UI.iOS.PreviewActionGroup;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.PreviewContext>.
			 */
			static createPreviewContext(parameters?: Dictionary<Titanium.UI.iOS.PreviewContext>): Titanium.UI.iOS.PreviewContext;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.PushBehavior>.
			 */
			static createPushBehavior(parameters?: Dictionary<Titanium.UI.iOS.PushBehavior>): Titanium.UI.iOS.PushBehavior;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.SnapBehavior>.
			 */
			static createSnapBehavior(parameters?: Dictionary<Titanium.UI.iOS.SnapBehavior>): Titanium.UI.iOS.SnapBehavior;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.SplitWindow>.
			 */
			static createSplitWindow(parameters?: Dictionary<Titanium.UI.iOS.SplitWindow>): Titanium.UI.iOS.SplitWindow;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.Stepper>.
			 */
			static createStepper(parameters?: Dictionary<Titanium.UI.iOS.Stepper>): Titanium.UI.iOS.Stepper;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.SystemButton>.
			 */
			static createSystemButton(parameters?: Dictionary<Titanium.UI.iOS.SystemButton>): Titanium.UI.iOS.SystemButton;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.TabbedBar>.
			 * @deprecated Use [Titanium.UI.TabbedBar](Titanium.UI.TabbedBar) instead.
			 */
			static createTabbedBar: never;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.Toolbar>.
			 * @deprecated Use the cross-platform [Titanium.UI.Toolbar](Titanium.UI.Toolbar) instead.
			 */
			static createToolbar: never;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.TransitionAnimation>.
			 */
			static createTransitionAnimation(parameters?: Dictionary<Titanium.UI.iOS.TransitionAnimation>): Titanium.UI.iOS.TransitionAnimation;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.ViewAttachmentBehavior>.
			 */
			static createViewAttachmentBehavior(parameters?: Dictionary<Titanium.UI.iOS.ViewAttachmentBehavior>): Titanium.UI.iOS.ViewAttachmentBehavior;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.WebViewConfiguration>.
			 */
			static createWebViewConfiguration(parameters?: Dictionary<Titanium.UI.iOS.WebViewConfiguration>): Titanium.UI.iOS.WebViewConfiguration;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.WebViewDecisionHandler>.
			 */
			static createWebViewDecisionHandler(parameters?: Dictionary<Titanium.UI.iOS.WebViewDecisionHandler>): Titanium.UI.iOS.WebViewDecisionHandler;

			/**
			 * Creates and returns an instance of <Titanium.UI.iOS.WebViewProcessPool>.
			 */
			static createWebViewProcessPool(parameters?: Dictionary<Titanium.UI.iOS.WebViewProcessPool>): Titanium.UI.iOS.WebViewProcessPool;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			static fireEvent(name: string, event?: any): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Get image from SF Symbols provided by Apple.
			 */
			static systemImage(name: string, parameters?: SystemImageParameters): Titanium.Blob;

		}
	}
}
/**
 * Dictionary object of parameters for the 2nd parameter of the <Titanium.UI.iOS.systemButton> method
 * to pass additional configuration options like `weight` and `size`. Available in Titanium SDK 10.1.0
 * and later.
 */
interface SystemImageParameters {
	/**
	 * The symbol point size to use for the SF Symbol
	 */
	size?: number;

	/**
	 * The symbol weight to use for the SF Symbol.
	 * Can be one of `ultralight`, `light`, `thin`, `normal`, `semibold`, `bold`, `heavy` or `black`.
	 */
	weight?: string;

}
