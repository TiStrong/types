/// <reference path="./ActivityIndicator.d.ts" />
/// <reference path="./ActivityIndicatorStyle.d.ts" />
/// <reference path="./AlertDialog.d.ts" />
/// <reference path="./Android/Android.d.ts" />
/// <reference path="./Animation.d.ts" />
/// <reference path="./AttributedString.d.ts" />
/// <reference path="./Button.d.ts" />
/// <reference path="./ButtonBar.d.ts" />
/// <reference path="./Clipboard/Clipboard.d.ts" />
/// <reference path="./Color.d.ts" />
/// <reference path="./DashboardItem.d.ts" />
/// <reference path="./DashboardView.d.ts" />
/// <reference path="./EmailDialog.d.ts" />
/// <reference path="./ImageView.d.ts" />
/// <reference path="./Label.d.ts" />
/// <reference path="./ListItem.d.ts" />
/// <reference path="./ListSection.d.ts" />
/// <reference path="./ListView.d.ts" />
/// <reference path="./MaskedImage.d.ts" />
/// <reference path="./Matrix2D.d.ts" />
/// <reference path="./Matrix3D.d.ts" />
/// <reference path="./NavigationWindow.d.ts" />
/// <reference path="./Notification.d.ts" />
/// <reference path="./OptionBar.d.ts" />
/// <reference path="./OptionDialog.d.ts" />
/// <reference path="./Picker.d.ts" />
/// <reference path="./PickerColumn.d.ts" />
/// <reference path="./PickerRow.d.ts" />
/// <reference path="./ProgressBar.d.ts" />
/// <reference path="./RefreshControl.d.ts" />
/// <reference path="./ScrollView.d.ts" />
/// <reference path="./ScrollableView.d.ts" />
/// <reference path="./SearchBar.d.ts" />
/// <reference path="./Shortcut/Shortcut.d.ts" />
/// <reference path="./ShortcutItem.d.ts" />
/// <reference path="./Slider.d.ts" />
/// <reference path="./Switch.d.ts" />
/// <reference path="./Tab.d.ts" />
/// <reference path="./TabGroup.d.ts" />
/// <reference path="./TabbedBar.d.ts" />
/// <reference path="./TableView.d.ts" />
/// <reference path="./TableViewRow.d.ts" />
/// <reference path="./TableViewSection.d.ts" />
/// <reference path="./TextArea.d.ts" />
/// <reference path="./TextField.d.ts" />
/// <reference path="./Toolbar.d.ts" />
/// <reference path="./View.d.ts" />
/// <reference path="./WebView.d.ts" />
/// <reference path="./Window.d.ts" />
/// <reference path="./iOS/iOS.d.ts" />
/// <reference path="./iPad/iPad.d.ts" />
declare namespace Titanium {
	/**
	 * The main <Titanium.UI> module.
	 */
	namespace UI {
		/**
		 * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts
		 * slowly and speeds up.
		 */
		const ANIMATION_CURVE_EASE_IN: number;

		/**
		 * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts
		 * slowly, and speeds up, then slows down at the end of the animation.
		 */
		const ANIMATION_CURVE_EASE_IN_OUT: number;

		/**
		 * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that starts
		 * quickly, then slows down at the end of the animation.
		 */
		const ANIMATION_CURVE_EASE_OUT: number;

		/**
		 * Use with [Animation.curve](Titanium.UI.Animation.curve) to specify an animation that proceeds
		 * at a constant rate.
		 */
		const ANIMATION_CURVE_LINEAR: number;

		/**
		 * Use with <Attribute.type> to specify a background color.
		 */
		const ATTRIBUTE_BACKGROUND_COLOR: number;

		/**
		 * Use with <Attribute.type> to apply a different baseline to the text.
		 */
		const ATTRIBUTE_BASELINE_OFFSET: number;

		/**
		 * Use with <Attribute.type> to stretch the text horizontally.
		 */
		const ATTRIBUTE_EXPANSION: number;

		/**
		 * Use with <Attribute.type> to specify a font.
		 */
		const ATTRIBUTE_FONT: number;

		/**
		 * Use with <Attribute.type> to specify a font color.
		 */
		const ATTRIBUTE_FOREGROUND_COLOR: number;

		/**
		 * Use with <Attribute.type> to specify kerning (space between characters).
		 */
		const ATTRIBUTE_KERN: number;

		/**
		 * Use with <Attribute.value> to use a letterpress text effect.
		 */
		const ATTRIBUTE_LETTERPRESS_STYLE: number;

		/**
		 * Use with <Attribute.type> to enable or disable ligatures.
		 */
		const ATTRIBUTE_LIGATURE: number;

		/**
		 * Use with <Attribute.type> to wrap and truncate the text.
		 * @deprecated Use [ParagraphAttribute.lineBreakMode](ParagraphAttribute.lineBreakMode) instead.
		 */
		const ATTRIBUTE_LINE_BREAK: number;

		/**
		 * Use with <Attribute.value> to wrap words at word boundaries.
		 */
		const ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING: number;

		/**
		 * Use with <Attribute.value> to set lines to not draw past the edge of the text container.
		 */
		const ATTRIBUTE_LINE_BREAK_BY_CLIPPING: number;

		/**
		 * Use with <Attribute.value> to use ellipsis glyph at the beginning of the line for missing text.
		 */
		const ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD: number;

		/**
		 * Use with <Attribute.value> to use ellipsis glyph at the middle of the line for missing text.
		 */
		const ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE: number;

		/**
		 * Use with <Attribute.value> to use ellipsis glyph at the end of the line for missing text.
		 */
		const ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL: number;

		/**
		 * Use with <Attribute.value> to wrap words at word boundaries.
		 */
		const ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING: number;

		/**
		 * Use with <Attribute.type> to create a link.
		 */
		const ATTRIBUTE_LINK: number;

		/**
		 * Use with <Attribute.type> to skew the text.
		 */
		const ATTRIBUTE_OBLIQUENESS: number;

		/**
		 * Use with <Attribute.type> to manages the behaviour of string set.
		 */
		const ATTRIBUTE_PARAGRAPH_STYLE: number;

		/**
		 * Use with <Attribute.type> to display a shadow behind the text.
		 */
		const ATTRIBUTE_SHADOW: number;

		/**
		 * Use with <Attribute.type> to change the color of the horizontal line.
		 */
		const ATTRIBUTE_STRIKETHROUGH_COLOR: number;

		/**
		 * Use with <Attribute.type> to place a horizontal line through the text.
		 */
		const ATTRIBUTE_STRIKETHROUGH_STYLE: number;

		/**
		 * Use with <Attribute.type> to specify a color for the stroke text.
		 */
		const ATTRIBUTE_STROKE_COLOR: number;

		/**
		 * Use with <Attribute.type> to specify the width of the stroke text.
		 */
		const ATTRIBUTE_STROKE_WIDTH: number;

		/**
		 * Use with <Attribute.type> to place the text in a lower position.
		 */
		const ATTRIBUTE_SUBSCRIPT_STYLE: number;

		/**
		 * Use with <Attribute.type> to place the text in an upper position.
		 */
		const ATTRIBUTE_SUPERSCRIPT_STYLE: number;

		/**
		 * Use with <Attribute.type> to apply a text effect.
		 */
		const ATTRIBUTE_TEXT_EFFECT: number;

		/**
		 * Use with <Attribute.type> to place a horizontal line under the text.
		 */
		const ATTRIBUTE_UNDERLINES_STYLE: number;

		/**
		 * Use with <Attribute.value> to draw a line only underneath or through words.
		 */
		const ATTRIBUTE_UNDERLINE_BY_WORD: number;

		/**
		 * Use with <Attribute.type> to change the color of the horizontal line.
		 */
		const ATTRIBUTE_UNDERLINE_COLOR: number;

		/**
		 * Use with <Attribute.value> to draw a dashed line.
		 */
		const ATTRIBUTE_UNDERLINE_PATTERN_DASH: number;

		/**
		 * Use with <Attribute.value> to draw an alternating line of dashes and dots.
		 */
		const ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT: number;

		/**
		 * Use with <Attribute.value> to draw an alternating line of dashes and two dots.
		 */
		const ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT: number;

		/**
		 * Use with <Attribute.value> to draw a dotted line.
		 */
		const ATTRIBUTE_UNDERLINE_PATTERN_DOT: number;

		/**
		 * Use with <Attribute.value> to draw a solid line.
		 */
		const ATTRIBUTE_UNDERLINE_PATTERN_SOLID: number;

		/**
		 * Use with <Attribute.value> to draw a double line.
		 */
		const ATTRIBUTE_UNDERLINE_STYLE_DOUBLE: number;

		/**
		 * Use with <Attribute.value> to not draw a line.
		 */
		const ATTRIBUTE_UNDERLINE_STYLE_NONE: number;

		/**
		 * Use with <Attribute.value> to draw a single line.
		 */
		const ATTRIBUTE_UNDERLINE_STYLE_SINGLE: number;

		/**
		 * Use with <Attribute.value> to draw a thick line.
		 */
		const ATTRIBUTE_UNDERLINE_STYLE_THICK: number;

		/**
		 * Use with <Attribute.type> to control the direction of the text.
		 */
		const ATTRIBUTE_WRITING_DIRECTION: number;

		/**
		 * Use with <Attribute.value> to use the embedded text direction.
		 */
		const ATTRIBUTE_WRITING_DIRECTION_EMBEDDING: number;

		/**
		 * Use with <Attribute.value> to write text left to right.
		 */
		const ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT: number;

		/**
		 * Use with <Attribute.value> to use the
		 * [Unicode Bidirection Algorithm rules P2 and P3](http://www.unicode.org/reports/tr9/#The_Paragraph_Level)
		 * to determine which direction to use.
		 */
		const ATTRIBUTE_WRITING_DIRECTION_NATURAL: number;

		/**
		 * Use with <Attribute.value> to override the text direction.
		 */
		const ATTRIBUTE_WRITING_DIRECTION_OVERRIDE: number;

		/**
		 * Use with <Attribute.value> to write text right to left.
		 */
		const ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT: number;

		/**
		 * Specifies the expectation of an address.
		 */
		const AUTOFILL_TYPE_ADDRESS: string;

		/**
		 * Specifies the expectation of a city name.
		 */
		const AUTOFILL_TYPE_ADDRESS_CITY: string;

		/**
		 * Specifies the expectation of a city name combined with a state name.
		 */
		const AUTOFILL_TYPE_ADDRESS_CITY_STATE: string;

		/**
		 * Specifies the expectation of the first line of a street address.
		 */
		const AUTOFILL_TYPE_ADDRESS_LINE1: string;

		/**
		 * Specifies the expectation of the second line of a street address.
		 */
		const AUTOFILL_TYPE_ADDRESS_LINE2: string;

		/**
		 * Specifies the expectation of a state name.
		 */
		const AUTOFILL_TYPE_ADDRESS_STATE: string;

		/**
		 * Specifies the expectation of a card expiration date.
		 */
		const AUTOFILL_TYPE_CARD_EXPIRATION_DATE: string;

		/**
		 * Specifies the expectation of a card expiration day.
		 */
		const AUTOFILL_TYPE_CARD_EXPIRATION_DAY: string;

		/**
		 * Specifies the expectation of a card expiration month.
		 */
		const AUTOFILL_TYPE_CARD_EXPIRATION_MONTH: string;

		/**
		 * Specifies the expectation of a card expiration year.
		 */
		const AUTOFILL_TYPE_CARD_EXPIRATION_YEAR: string;

		/**
		 * Specifies the expectation of a card number.
		 */
		const AUTOFILL_TYPE_CARD_NUMBER: string;

		/**
		 * Specifies the expectation of a card security code.
		 */
		const AUTOFILL_TYPE_CARD_SECURITY_CODE: string;

		/**
		 * Specifies the expectation of a country name.
		 */
		const AUTOFILL_TYPE_COUNTRY_NAME: string;

		/**
		 * Specifies the expectation of an email address.
		 */
		const AUTOFILL_TYPE_EMAIL: string;

		/**
		 * Specifies the expectation of a family name.
		 */
		const AUTOFILL_TYPE_FAMILY_NAME: string;

		/**
		 * Specifies the expectation of a given name.
		 */
		const AUTOFILL_TYPE_GIVEN_NAME: string;

		/**
		 * Specifies the expectation of a job title.
		 */
		const AUTOFILL_TYPE_JOB_TITLE: string;

		/**
		 * Specifies the expectation of a location, such as a point of interest, an address, or another way to identify a location.
		 */
		const AUTOFILL_TYPE_LOCATION: string;

		/**
		 * Specifies the expectation of a middle name.
		 */
		const AUTOFILL_TYPE_MIDDLE_NAME: string;

		/**
		 * Specifies the expectation of a name.
		 */
		const AUTOFILL_TYPE_NAME: string;

		/**
		 * Specifies the expectation of a prefix or title, such as 'Dr.'
		 */
		const AUTOFILL_TYPE_NAME_PREFIX: string;

		/**
		 * Specifies the expectation of a suffix, such as 'Jr.'
		 */
		const AUTOFILL_TYPE_NAME_SUFFIX: string;

		/**
		 * Specifies the expectation of a new password.
		 */
		const AUTOFILL_TYPE_NEW_PASSWORD: string;

		/**
		 * Specifies the expectation of a nickname.
		 */
		const AUTOFILL_TYPE_NICKNAME: string;

		/**
		 * Specifies the expectation of a single-factor SMS login code.
		 */
		const AUTOFILL_TYPE_ONE_TIME_CODE: string;

		/**
		 * Specifies the expectation of an organization name.
		 */
		const AUTOFILL_TYPE_ORGANIZATION_NAME: string;

		/**
		 * Specifies the expectation of a password.
		 */
		const AUTOFILL_TYPE_PASSWORD: string;

		/**
		 * Specifies the expectation of a telephone number.
		 */
		const AUTOFILL_TYPE_PHONE: string;

		/**
		 * Specifies the expectation of a postal code.
		 */
		const AUTOFILL_TYPE_POSTAL_CODE: string;

		/**
		 * Specifies the expectation of a sublocality.
		 */
		const AUTOFILL_TYPE_SUBLOCALITY: string;

		/**
		 * Specifies the expectation of a URL.
		 */
		const AUTOFILL_TYPE_URL: string;

		/**
		 * Specifies the expectation of an account or login name.
		 */
		const AUTOFILL_TYPE_USERNAME: string;

		/**
		 * Converts all detectable types of data into clickable links.
		 */
		const AUTOLINK_ALL: number;

		/**
		 * Converts strings formatted as calendar events into clickable links.
		 */
		const AUTOLINK_CALENDAR: number;

		/**
		 * Converts strings formatted as email addresses into clickable links.
		 */
		const AUTOLINK_EMAIL_ADDRESSES: number;

		/**
		 * Converts strings formatted as addresses into clickable links.
		 */
		const AUTOLINK_MAP_ADDRESSES: number;

		/**
		 * Disables converting strings into clickable links.
		 */
		const AUTOLINK_NONE: number;

		/**
		 * Converts strings formatted as phone numbers into clickable links.
		 */
		const AUTOLINK_PHONE_NUMBERS: number;

		/**
		 * Converts strings formatted as URLs into clickable links.
		 */
		const AUTOLINK_URLS: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_CLEAR: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_COLOR: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_COLOR_BURN: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_COLOR_DODGE: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_COPY: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_DARKEN: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_DESTINATION_ATOP: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_DESTINATION_IN: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_DESTINATION_OUT: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_DESTINATION_OVER: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_DIFFERENCE: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_EXCLUSION: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_HARD_LIGHT: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_HUE: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_LIGHTEN: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_LUMINOSITY: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_MULTIPLY: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_NORMAL: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_OVERLAY: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_PLUS_DARKER: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_PLUS_LIGHTER: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_SATURATION: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_SCREEN: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_SOFT_LIGHT: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_SOURCE_ATOP: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_SOURCE_IN: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_SOURCE_OUT: number;

		/**
		 * Use with [MaskedImage.mode](Titanium.UI.MaskedImage.mode) to specify a blend mode.
		 */
		const BLEND_MODE_XOR: number;

		/**
		 * Use with [Button.style](Titanium.UI.Button.style) to show a solid filled button.
		 */
		const BUTTON_STYLE_FILLED: number;

		/**
		 * Use with [Button.style](Titanium.UI.Button.style) to show a negative themed escape button.
		 */
		const BUTTON_STYLE_OPTION_NEGATIVE: number;

		/**
		 * Use with [Button.style](Titanium.UI.Button.style) to show a normal themed option button.
		 */
		const BUTTON_STYLE_OPTION_NEUTRAL: number;

		/**
		 * Use with [Button.style](Titanium.UI.Button.style) to show a positive themed accept button.
		 */
		const BUTTON_STYLE_OPTION_POSITIVE: number;

		/**
		 * Use with [Button.style](Titanium.UI.Button.style) to show an unfilled rounded border button.
		 */
		const BUTTON_STYLE_OUTLINED: number;

		/**
		 * Use with [Button.style](Titanium.UI.Button.style) to show a text-only button without a background.
		 */
		const BUTTON_STYLE_TEXT: number;

		/**
		 * Specifies the time and date that you want the system to remove the clipboard items from the clipboard.
		 * Note that on macOS, setting a date in the past does not appear to invalidate items immediately, while on iOS it does.
		 */
		const CLIPBOARD_OPTION_EXPIRATION_DATE: string;

		/**
		 * Specifies that the clipboard items should not be available to other devices through Handoff.
		 */
		const CLIPBOARD_OPTION_LOCAL_ONLY: string;

		/**
		 * Displays a <Titanium.UI.Picker> using the best visual style on the current platform for date/time selection.
		 */
		const DATE_PICKER_STYLE_AUTOMATIC: number;

		/**
		 * Displays a <Titanium.UI.Picker> as a read-only text field which opens a selection dialog when tapped on.
		 */
		const DATE_PICKER_STYLE_COMPACT: number;

		/**
		 * Displays a <Titanium.UI.Picker> as a large calendar or clock view for date/time selection.
		 */
		const DATE_PICKER_STYLE_INLINE: number;

		/**
		 * Displays a <Titanium.UI.Picker> as spinner wheels for date/time selection.
		 */
		const DATE_PICKER_STYLE_WHEELS: number;

		/**
		 * Specifies that all the edges of the window can extend.
		 */
		const EXTEND_EDGE_ALL: number;

		/**
		 * Specifies that the bottom edge of the window can extend.
		 */
		const EXTEND_EDGE_BOTTOM: number;

		/**
		 * Specifies that the left edge of the window can extend.
		 */
		const EXTEND_EDGE_LEFT: number;

		/**
		 * Specifies that none of the edges of the window can extend.
		 */
		const EXTEND_EDGE_NONE: number;

		/**
		 * Specifies that the right edge of the window can extend.
		 */
		const EXTEND_EDGE_RIGHT: number;

		/**
		 * Specifies that the top edge of the window can extend.
		 */
		const EXTEND_EDGE_TOP: number;

		/**
		 * Constant value for face-down orientation.
		 */
		const FACE_DOWN: number;

		/**
		 * Constant value for face-up orientation.
		 */
		const FACE_UP: number;

		/**
		 * FILL behavior for UI layout.
		 */
		const FILL: string;

		/**
		 * Release free space when hiding an object.
		 */
		const HIDDEN_BEHAVIOR_GONE: number;

		/**
		 * Keeps free space when hiding an object.
		 */
		const HIDDEN_BEHAVIOR_INVISIBLE: number;

		/**
		 * Use when creating a TextField to specify the hintType as animated.
		 */
		const HINT_TYPE_ANIMATED: number;

		/**
		 * Use when creating a TextField to specify the hintType as static.
		 */
		const HINT_TYPE_STATIC: number;

		/**
		 * Use a bezel-style border on the input field.
		 */
		const INPUT_BORDERSTYLE_BEZEL: number;

		/**
		 * Show an enclosed border with a filled background on the input field.
		 */
		const INPUT_BORDERSTYLE_FILLED: number;

		/**
		 * Use a simple line border on the input field.
		 */
		const INPUT_BORDERSTYLE_LINE: number;

		/**
		 * Use no border on the input field.
		 */
		const INPUT_BORDERSTYLE_NONE: number;

		/**
		 * Use a rounded-rectangle border on the input field.
		 */
		const INPUT_BORDERSTYLE_ROUNDED: number;

		/**
		 * Show an underline instead of a border around the input field.
		 */
		const INPUT_BORDERSTYLE_UNDERLINED: number;

		/**
		 * Always show buttons on the input field.
		 */
		const INPUT_BUTTONMODE_ALWAYS: number;

		/**
		 * Never show buttons on the input field.
		 */
		const INPUT_BUTTONMODE_NEVER: number;

		/**
		 * Show buttons on the input field when it loses focus.
		 */
		const INPUT_BUTTONMODE_ONBLUR: number;

		/**
		 * Show buttons on the input field when it gains focus.
		 */
		const INPUT_BUTTONMODE_ONFOCUS: number;

		/**
		 * Use a keyboard with a number pad only, with the pad keyboard layout. Accepts only numbers.
		 */
		const INPUT_TYPE_CLASS_NUMBER: number;

		/**
		 * Use an ASCII keyboard, with the standard keyboard layout.
		 */
		const INPUT_TYPE_CLASS_TEXT: number;

		/**
		 * Use a keyboard appearance suitable for entering text on an alert.
		 * @deprecated
		 */
		const KEYBOARD_APPEARANCE_ALERT: never;

		/**
		 * Use the platform-specific dark keyboard appearance.
		 */
		const KEYBOARD_APPEARANCE_DARK: number;

		/**
		 * Use the platform-specific default keyboard appearance.
		 */
		const KEYBOARD_APPEARANCE_DEFAULT: number;

		/**
		 * Use the platform-specific light keyboard appearance.
		 */
		const KEYBOARD_APPEARANCE_LIGHT: number;

		/**
		 * Use a keyboard supporting all characters except emoji. Defaults to English letters layout on iOS.
		 * @deprecated Use [Titanium.UI.KEYBOARD_TYPE_ASCII](Titanium.UI.KEYBOARD_TYPE_ASCII) instead.
		 */
		const KEYBOARD_ASCII: never;

		/**
		 * Use a number pad keyboard layout showing only numbers, decimal separator, and sign character.
		 * @deprecated Use [Titanium.UI.KEYBOARD_TYPE_DECIMAL_PAD](Titanium.UI.KEYBOARD_TYPE_DECIMAL_PAD) instead.
		 */
		const KEYBOARD_DECIMAL_PAD: never;

		/**
		 * Use the default keyboard, depending on the platform.
		 * @deprecated Use [Titanium.UI.KEYBOARD_TYPE_DEFAULT](Titanium.UI.KEYBOARD_TYPE_DEFAULT) instead.
		 */
		const KEYBOARD_DEFAULT: never;

		/**
		 * Use a keyboard suitable for composing email, with the standard keyboard layout.
		 * @deprecated Use [Titanium.UI.KEYBOARD_TYPE_EMAIL](Titanium.UI.KEYBOARD_TYPE_EMAIL) instead.
		 */
		const KEYBOARD_EMAIL: never;

		/**
		 * Use a keyboard suitable for entering names and phone numbers, with the pad keyboard layout.
		 * @deprecated Use [Titanium.UI.KEYBOARD_TYPE_NAMEPHONE_PAD](Titanium.UI.KEYBOARD_TYPE_NAMEPHONE_PAD) instead.
		 */
		const KEYBOARD_NAMEPHONE_PAD: never;

		/**
		 * Use a keyboard supporting all characters except emoji, defaulting to numbers layout on iOS.
		 * @deprecated Use [Titanium.UI.KEYBOARD_TYPE_NUMBERS_PUNCTUATION](Titanium.UI.KEYBOARD_TYPE_NUMBERS_PUNCTUATION) instead.
		 */
		const KEYBOARD_NUMBERS_PUNCTUATION: never;

		/**
		 * Use a number pad keyboard layout only showing numbers for entering positive integers.
		 * @deprecated Use [Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD](Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD) instead.
		 */
		const KEYBOARD_NUMBER_PAD: never;

		/**
		 * Use a keyboard with a phone-style number pad, with the pad keyboard layout.
		 * @deprecated Use [Titanium.UI.KEYBOARD_TYPE_PHONE_PAD](Titanium.UI.KEYBOARD_TYPE_PHONE_PAD) instead.
		 */
		const KEYBOARD_PHONE_PAD: never;

		/**
		 * Use a keyboard supporting all characters except emoji. Defaults to English letters layout on iOS.
		 */
		const KEYBOARD_TYPE_ASCII: number;

		/**
		 * Use a number pad keyboard layout showing only numbers, decimal separator, and sign character.
		 */
		const KEYBOARD_TYPE_DECIMAL_PAD: number;

		/**
		 * Use the default keyboard, depending on the platform.
		 */
		const KEYBOARD_TYPE_DEFAULT: number;

		/**
		 * Use a keyboard suitable for composing email, with the standard keyboard layout.
		 */
		const KEYBOARD_TYPE_EMAIL: number;

		/**
		 * Use a keyboard suitable for entering names and phone numbers, with the pad keyboard layout.
		 */
		const KEYBOARD_TYPE_NAMEPHONE_PAD: number;

		/**
		 * Use a keyboard supporting all characters except emoji, defaulting to numbers layout on iOS.
		 */
		const KEYBOARD_TYPE_NUMBERS_PUNCTUATION: number;

		/**
		 * Use a number pad keyboard layout only showing numbers for entering positive integers.
		 */
		const KEYBOARD_TYPE_NUMBER_PAD: number;

		/**
		 * Use a keyboard with a phone-style number pad, with the pad keyboard layout.
		 */
		const KEYBOARD_TYPE_PHONE_PAD: number;

		/**
		 * Use a keyboard optimized for twitter text entry, with easy access to the @ and
		 */
		const KEYBOARD_TYPE_TWITTER: number;

		/**
		 * Use a keyboard optimized for entering URLs, with the standard keyboard layout.
		 */
		const KEYBOARD_TYPE_URL: number;

		/**
		 * Use a keyboard optimized for web search terms and URL entry.
		 */
		const KEYBOARD_TYPE_WEBSEARCH: number;

		/**
		 * Use a keyboard optimized for entering URLs, with the standard keyboard layout.
		 * @deprecated Use [Titanium.UI.KEYBOARD_TYPE_URL](Titanium.UI.KEYBOARD_TYPE_URL) instead.
		 */
		const KEYBOARD_URL: never;

		/**
		 * Standard landscape orientation (home button on left).
		 */
		const LANDSCAPE_LEFT: number;

		/**
		 * Reverse landscape orientation (home button on right).
		 */
		const LANDSCAPE_RIGHT: number;

		/**
		 * Displays a checkmark on the right side of an item in a list view.
		 */
		const LIST_ACCESSORY_TYPE_CHECKMARK: number;

		/**
		 * Displays a detail disclosure button on the right side of an item in a list view.
		 */
		const LIST_ACCESSORY_TYPE_DETAIL: number;

		/**
		 * Displays a disclosure indicator on the right side of an item in a list view.
		 */
		const LIST_ACCESSORY_TYPE_DISCLOSURE: number;

		/**
		 * Do not display anything on the right side of an item in a list view.
		 */
		const LIST_ACCESSORY_TYPE_NONE: number;

		/**
		 * A built-in style for an item with a right-aligned title label on the left side of the cell,
		 * which is next to a left-aligned subtitle label.
		 */
		const LIST_ITEM_TEMPLATE_CONTACTS: number;

		/**
		 * A built-in style for an item with an image view and left-aligned title label.
		 */
		const LIST_ITEM_TEMPLATE_DEFAULT: number;

		/**
		 * A built-in style for a item with an image view; a left-aligned title label; and a
		 * right-aligned subtitle label.
		 */
		const LIST_ITEM_TEMPLATE_SETTINGS: number;

		/**
		 * A built-in style for an item with an image view; a black, left-aligned title label across the
		 * top of the cell and a subtitle label below it.
		 */
		const LIST_ITEM_TEMPLATE_SUBTITLE: number;

		/**
		 * Specifies a long duration for an Android Toast notification (<Titanium.UI.Notification>).
		 */
		const NOTIFICATION_DURATION_LONG: number;

		/**
		 * Specifies a short duration for an Android Toast notification (<Titanium.UI.Notification>).
		 */
		const NOTIFICATION_DURATION_SHORT: number;

		/**
		 * Use a picker with a countdown timer appearance, showing hours and minutes.
		 */
		const PICKER_TYPE_COUNT_DOWN_TIMER: number;

		/**
		 * Use a date picker.
		 */
		const PICKER_TYPE_DATE: number;

		/**
		 * Use a date and time picker.
		 */
		const PICKER_TYPE_DATE_AND_TIME: number;

		/**
		 * Use a plain picker (for values other than date or time).
		 */
		const PICKER_TYPE_PLAIN: number;

		/**
		 * Use a time picker.
		 */
		const PICKER_TYPE_TIME: number;

		/**
		 * Orientation constant for portrait mode orientation.
		 */
		const PORTRAIT: number;

		/**
		 * Set the return key text to "Continue".
		 */
		const RETURNKEY_CONTINUE: number;

		/**
		 * Use the default return key on the virtual keyboard.
		 */
		const RETURNKEY_DEFAULT: number;

		/**
		 * Set the return key text to "Done".
		 */
		const RETURNKEY_DONE: number;

		/**
		 * Set the return key text to "Emergency Call".
		 */
		const RETURNKEY_EMERGENCY_CALL: number;

		/**
		 * Set the return key text to "Go".
		 */
		const RETURNKEY_GO: number;

		/**
		 * Set the return key text to "Google".
		 */
		const RETURNKEY_GOOGLE: number;

		/**
		 * Set the return key text to "Join".
		 */
		const RETURNKEY_JOIN: number;

		/**
		 * Set the return key text to "Next".
		 */
		const RETURNKEY_NEXT: number;

		/**
		 * Set the return key text to "Route".
		 */
		const RETURNKEY_ROUTE: number;

		/**
		 * Set the return key text to "Search".
		 */
		const RETURNKEY_SEARCH: number;

		/**
		 * Set the return key text to "Send".
		 */
		const RETURNKEY_SEND: number;

		/**
		 * Set the return key text to "Yahoo".
		 */
		const RETURNKEY_YAHOO: number;

		/**
		 * Set the selection style to system default.
		 */
		const SELECTION_STYLE_DEFAULT: number;

		/**
		 * Set the selection style to none.
		 */
		const SELECTION_STYLE_NONE: number;

		/**
		 * The value returned by <Titanium.UI.semanticColorType> when the device is in dark/night mode.
		 * @deprecated Use [USER_INTERFACE_STYLE_DARK](Titanium.UI.USER_INTERFACE_STYLE_DARK) instead.
		 */
		const SEMANTIC_COLOR_TYPE_DARK: string;

		/**
		 * The value returned by <Titanium.UI.semanticColorType> when the device is in light/normal mode.
		 * @deprecated Use [USER_INTERFACE_STYLE_LIGHT](Titanium.UI.USER_INTERFACE_STYLE_LIGHT) instead.
		 */
		const SEMANTIC_COLOR_TYPE_LIGHT: string;

		/**
		 * SIZE behavior for UI layout.
		 */
		const SIZE: string;

		/**
		 * Use with [Switch.style](Titanium.UI.Switch.style) to show a checkbox.
		 */
		const SWITCH_STYLE_CHECKBOX: number;

		/**
		 * Use with [Switch.style](Titanium.UI.Switch.style) to show a material design checkable chip widget.
		 */
		const SWITCH_STYLE_CHIP: number;

		/**
		 * Use with [Switch.style](Titanium.UI.Switch.style) to show a slidable button.
		 */
		const SWITCH_STYLE_SLIDER: number;

		/**
		 * Use with [Switch.style](Titanium.UI.Switch.style) to show a toggleable button.
		 */
		const SWITCH_STYLE_TOGGLE_BUTTON: number;

		/**
		 * The row divider is hidden.
		 */
		const TABLE_VIEW_SEPARATOR_STYLE_NONE: number;

		/**
		 * The row divider is shown as a single line.
		 */
		const TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE: number;

		/**
		 * Center align text.
		 */
		const TEXT_ALIGNMENT_CENTER: number | string;

		/**
		 * Justify align text.
		 */
		const TEXT_ALIGNMENT_JUSTIFY: number | string;

		/**
		 * Left align text.
		 */
		const TEXT_ALIGNMENT_LEFT: number | string;

		/**
		 * Right align text.
		 */
		const TEXT_ALIGNMENT_RIGHT: number | string;

		/**
		 * Auto-capitalize all text in the input field.
		 */
		const TEXT_AUTOCAPITALIZATION_ALL: number;

		/**
		 * Do not auto-capitalize.
		 */
		const TEXT_AUTOCAPITALIZATION_NONE: number;

		/**
		 * Use sentence-style auto-capitalization in the input field.
		 */
		const TEXT_AUTOCAPITALIZATION_SENTENCES: number;

		/**
		 * Auto-capitalize the first letter of each word in the input field.
		 */
		const TEXT_AUTOCAPITALIZATION_WORDS: number;

		/**
		 * Add ellipses before the first character that doesnt fit.
		 */
		const TEXT_ELLIPSIZE_TRUNCATE_CHAR_WRAP: number;

		/**
		 * Lines are simply not drawn past the edge of the text container.
		 */
		const TEXT_ELLIPSIZE_TRUNCATE_CLIP: number;

		/**
		 * Add ellipses at the end of the label if the text is too large to fit.
		 */
		const TEXT_ELLIPSIZE_TRUNCATE_END: number;

		/**
		 * Turns on a marquee effect of the label if the text is too large to fit. (This requires <Titanium.UI.Label.focusable> to be true)
		 */
		const TEXT_ELLIPSIZE_TRUNCATE_MARQUEE: number;

		/**
		 * Add ellipses in the middle of the label if the text is too large to fit.
		 */
		const TEXT_ELLIPSIZE_TRUNCATE_MIDDLE: number;

		/**
		 * Disables ellipsizing of the label. The text will be cut off if it is too long.
		 */
		const TEXT_ELLIPSIZE_TRUNCATE_NONE: number;

		/**
		 * Add ellipses at the beginning of the label if the text is too large to fit.
		 */
		const TEXT_ELLIPSIZE_TRUNCATE_START: number;

		/**
		 * Add ellipses at word boundaries, unless the word itself doesn't fit on a single line.
		 */
		const TEXT_ELLIPSIZE_TRUNCATE_WORD_WRAP: number;

		/**
		 * The font used for body texts.
		 */
		const TEXT_STYLE_BODY: string;

		/**
		 * The font used for callouts.
		 */
		const TEXT_STYLE_CALLOUT: string;

		/**
		 * The font used for standard captions.
		 */
		const TEXT_STYLE_CAPTION1: string;

		/**
		 * The font used for alternate captions.
		 */
		const TEXT_STYLE_CAPTION2: string;

		/**
		 * The font used in footnotes.
		 */
		const TEXT_STYLE_FOOTNOTE: string;

		/**
		 * The font used for headings.
		 */
		const TEXT_STYLE_HEADLINE: string;

		/**
		 * Specifies the text style for the <Font> Object.
		 */
		const TEXT_STYLE_LARGE_TITLE: string;

		/**
		 * The font used for subheadings.
		 */
		const TEXT_STYLE_SUBHEADLINE: string;

		/**
		 * The font used for first level hierarchical headings.
		 */
		const TEXT_STYLE_TITLE1: string;

		/**
		 * The font used for second level hierarchical headings.
		 */
		const TEXT_STYLE_TITLE2: string;

		/**
		 * The font used for third level hierarchical headings.
		 */
		const TEXT_STYLE_TITLE3: string;

		/**
		 * Align text to the bottom of the view.
		 */
		const TEXT_VERTICAL_ALIGNMENT_BOTTOM: number | string;

		/**
		 * Vertically align text to the center of the view.
		 */
		const TEXT_VERTICAL_ALIGNMENT_CENTER: number | string;

		/**
		 * Align text to the top of the view.
		 */
		const TEXT_VERTICAL_ALIGNMENT_TOP: number | string;

		/**
		 * Unit constant representing units in centimeters.
		 */
		const UNIT_CM: string;

		/**
		 * Unit constant representing units in density-independent pixels.
		 */
		const UNIT_DIP: string;

		/**
		 * Unit constant representing units in inches.
		 */
		const UNIT_IN: string;

		/**
		 * Unit constant representing units in millimeters.
		 */
		const UNIT_MM: string;

		/**
		 * Unit constant representing units in pixels.
		 */
		const UNIT_PX: string;

		/**
		 * Orientation constant representing an unknown orientation.
		 */
		const UNKNOWN: number;

		/**
		 * Orientation constant for inverted portait orientation.
		 */
		const UPSIDE_PORTRAIT: number;

		/**
		 * Authentication error code reported via <Titanium.UI.WebView.error>.
		 */
		const URL_ERROR_AUTHENTICATION: number;

		/**
		 * Bad url error code reported via <Titanium.UI.WebView.error>.
		 */
		const URL_ERROR_BAD_URL: number;

		/**
		 * Error code reported via <Titanium.UI.WebView.error> for a failure to connect to host.
		 */
		const URL_ERROR_CONNECT: number;

		/**
		 * Error code reported via <Titanium.UI.WebView.error> for a failure to access a file resource on a host, except "file not found", which has its own constant.
		 */
		const URL_ERROR_FILE: number;

		/**
		 * Error code reported via <Titanium.UI.WebView.error> when a requested file does not exist on the host.
		 */
		const URL_ERROR_FILE_NOT_FOUND: number;

		/**
		 * Error code reported via <Titanium.UI.WebView.error> when a host name cannot be resolved, such as via a DNS lookup error.
		 */
		const URL_ERROR_HOST_LOOKUP: number;

		/**
		 * Error code reported via <Titanium.UI.WebView.error> when a redirect loop is detected.
		 */
		const URL_ERROR_REDIRECT_LOOP: number;

		/**
		 * Error code reported via <Titanium.UI.WebView.error> for an SSL failure.
		 */
		const URL_ERROR_SSL_FAILED: number;

		/**
		 * Error code reported via <Titanium.UI.WebView.error> when a timeout occurs.
		 */
		const URL_ERROR_TIMEOUT: number;

		/**
		 * Error code reported via <Titanium.UI.WebView.error> when an unknown error occurs.
		 */
		const URL_ERROR_UNKNOWN: number;

		/**
		 * Error code reported via <Titanium.UI.WebView.error> when a url contains an unsupported scheme.
		 */
		const URL_ERROR_UNSUPPORTED_SCHEME: number;

		/**
		 * A dark interface style.
		 */
		const USER_INTERFACE_STYLE_DARK: number;

		/**
		 * A light interface style.
		 */
		const USER_INTERFACE_STYLE_LIGHT: number;

		/**
		 * An unspecified interface style.
		 */
		const USER_INTERFACE_STYLE_UNSPECIFIED: number;

	}
	/**
	 * Base event for class Titanium.UI
	 */
	interface UIBaseEvent extends Ti.Event {
		/**
		 * Source object that fired the event.
		 */
		source: Titanium.UI;

	}
	/**
	 * Fired when the `userInterfaceStyle` changes.
	 */
	interface UI_userinterfacestyle_Event extends UIBaseEvent {
		/**
		 * The new userInterfaceStyle value.
		 */
		value: number;

	}
	interface UIEventMap extends ProxyEventMap {
		userinterfacestyle: UI_userinterfacestyle_Event;

	}
	/**
	 * The main <Titanium.UI> module.
	 */
	class UI extends Titanium.Module {
		/**
		 * The name of the API that this proxy corresponds to.
		 */
		static readonly apiName: string;

		/**
		 * Sets the background color of the master view (when there are no windows or other top-level
		 * controls displayed).
		 */
		static backgroundColor: string | Titanium.UI.Color;

		/**
		 * Local path or URL to an image file for setting a background for the master view (when there
		 * are no windows or other top-level controls displayed).
		 */
		static backgroundImage: string;

		/**
		 * Indicates if the proxy will bubble an event to its parent.
		 */
		static bubbleParent: boolean;

		/**
		 * The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.
		 */
		static lifecycleContainer: Titanium.UI.Window | Titanium.UI.TabGroup;

		/**
		 * Forces the app to used assigned theme instead of the system theme.
		 */
		static overrideUserInterfaceStyle: number;

		/**
		 * The current mode for the device (corresponding to night/dark or light/normal)
		 * @deprecated Use [userInterfaceStyle](Titanium.UI.userInterfaceStyle) instead.
		 */
		static semanticColorType: string;

		/**
		 * Sets the global tint color of the application. It is inherited by the child views and can be
		 * overwritten by them using the `tintColor` property.
		 */
		static tintColor: string | Titanium.UI.Color;

		/**
		 * The style associated with the user interface.
		 */
		static readonly userInterfaceStyle: number;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener<K extends keyof UIEventMap>(name: K, callback: (this: Titanium.UI, event: UIEventMap[K]) => void): void;

		/**
		 * Adds the specified callback as an event listener for the named event.
		 */
		static addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

		/**
		 * Applies the properties to the proxy.
		 */
		static applyProperties(props: any): void;

		/**
		 * Converts one type of unit to another using the metrics of the main display.
		 */
		static convertUnits(convertFromValue: string, convertToUnits: number): number;

		/**
		 * Creates and returns an instance of <Titanium.UI.2DMatrix>.
		 * @deprecated Use [Titanium.UI.createMatrix2D](Titanium.UI.createMatrix2D) instead.
		 */
		static create2DMatrix(parameters?: Matrix2DCreationDict): Titanium.UI.Matrix2D;

		/**
		 * Creates and returns an instance of <Titanium.UI.3DMatrix>.
		 * @deprecated Use [Titanium.UI.createMatrix3D](Titanium.UI.createMatrix3D) instead.
		 */
		static create3DMatrix(parameters?: Matrix3DCreationDict): Titanium.UI.Matrix3D;

		/**
		 * Creates and returns an instance of <Titanium.UI.ActivityIndicator>.
		 */
		static createActivityIndicator(parameters?: Dictionary<Titanium.UI.ActivityIndicator>): Titanium.UI.ActivityIndicator;

		/**
		 * Creates and returns an instance of <Titanium.UI.AlertDialog>.
		 */
		static createAlertDialog(parameters?: Dictionary<Titanium.UI.AlertDialog>): Titanium.UI.AlertDialog;

		/**
		 * Creates and returns an instance of <Titanium.UI.Animation>.
		 */
		static createAnimation(parameters?: Dictionary<Titanium.UI.Animation>): Titanium.UI.Animation;

		/**
		 * Creates and returns an instance of <Titanium.UI.AttributedString>.
		 */
		static createAttributedString(parameters?: Dictionary<Titanium.UI.AttributedString>): Titanium.UI.AttributedString;

		/**
		 * Creates and returns an instance of <Titanium.UI.Button>.
		 */
		static createButton(parameters?: Dictionary<Titanium.UI.Button>): Titanium.UI.Button;

		/**
		 * Creates and returns an instance of <Titanium.UI.ButtonBar>.
		 */
		static createButtonBar(parameters?: Dictionary<Titanium.UI.ButtonBar>): Titanium.UI.ButtonBar;

		/**
		 * Creates and returns an instance of <Titanium.UI.Color>.
		 */
		static createColor(parameters?: Dictionary<Titanium.UI.Color>): Titanium.UI.Color;

		/**
		 * Creates and returns an instance of <Titanium.UI.DashboardItem>.
		 */
		static createDashboardItem(parameters?: Dictionary<Titanium.UI.DashboardItem>): Titanium.UI.DashboardItem;

		/**
		 * Creates and returns an instance of <Titanium.UI.DashboardView>.
		 */
		static createDashboardView(parameters?: Dictionary<Titanium.UI.DashboardView>): Titanium.UI.DashboardView;

		/**
		 * Creates and returns an instance of <Titanium.UI.EmailDialog>.
		 */
		static createEmailDialog(parameters?: Dictionary<Titanium.UI.EmailDialog>): Titanium.UI.EmailDialog;

		/**
		 * Creates and returns an instance of <Titanium.UI.ImageView>.
		 */
		static createImageView(parameters?: Dictionary<Titanium.UI.ImageView>): Titanium.UI.ImageView;

		/**
		 * Creates and returns an instance of <Titanium.UI.Label>.
		 */
		static createLabel(parameters?: Dictionary<Titanium.UI.Label>): Titanium.UI.Label;

		/**
		 * Creates and returns an instance of <Titanium.UI.ListSection>.
		 */
		static createListSection(parameters?: Dictionary<Titanium.UI.ListSection>): Titanium.UI.ListSection;

		/**
		 * Creates and returns an instance of <Titanium.UI.ListView>.
		 */
		static createListView(parameters?: Dictionary<Titanium.UI.ListView>): Titanium.UI.ListView;

		/**
		 * Creates and returns an instance of <Titanium.UI.MaskedImage>.
		 */
		static createMaskedImage(parameters?: Dictionary<Titanium.UI.MaskedImage>): Titanium.UI.MaskedImage;

		/**
		 * Creates and returns an instance of <Titanium.UI.Matrix2D>.
		 */
		static createMatrix2D(parameters?: Matrix2DCreationDict): Titanium.UI.Matrix2D;

		/**
		 * Creates and returns an instance of <Titanium.UI.Matrix3D>.
		 */
		static createMatrix3D(parameters?: Matrix3DCreationDict): Titanium.UI.Matrix3D;

		/**
		 * Creates and returns an instance of <Titanium.UI.NavigationWindow>.
		 */
		static createNavigationWindow(parameters?: Dictionary<Titanium.UI.NavigationWindow>): Titanium.UI.NavigationWindow;

		/**
		 * Creates and returns an instance of <Titanium.UI.Notification>.
		 */
		static createNotification(parameters?: Dictionary<Titanium.UI.Notification>): Titanium.UI.Notification;

		/**
		 * Creates and returns an instance of <Titanium.UI.OptionBar>.
		 */
		static createOptionBar(parameters?: Dictionary<Titanium.UI.OptionBar>): Titanium.UI.OptionBar;

		/**
		 * Creates and returns an instance of <Titanium.UI.OptionDialog>.
		 */
		static createOptionDialog(parameters?: Dictionary<Titanium.UI.OptionDialog>): Titanium.UI.OptionDialog;

		/**
		 * Creates and returns an instance of <Titanium.UI.Picker>.
		 */
		static createPicker(parameters?: Dictionary<Titanium.UI.Picker>): Titanium.UI.Picker;

		/**
		 * Creates and returns an instance of <Titanium.UI.PickerColumn>.
		 */
		static createPickerColumn(parameters?: Dictionary<Titanium.UI.PickerColumn>): Titanium.UI.PickerColumn;

		/**
		 * Creates and returns an instance of <Titanium.UI.PickerRow>.
		 */
		static createPickerRow(parameters?: Dictionary<Titanium.UI.PickerRow>): Titanium.UI.PickerRow;

		/**
		 * Creates and returns an instance of <Titanium.UI.ProgressBar>.
		 */
		static createProgressBar(parameters?: Dictionary<Titanium.UI.ProgressBar>): Titanium.UI.ProgressBar;

		/**
		 * Creates and returns an instance of <Titanium.UI.RefreshControl>.
		 */
		static createRefreshControl(parameters?: Dictionary<Titanium.UI.RefreshControl>): Titanium.UI.RefreshControl;

		/**
		 * Creates and returns an instance of <Titanium.UI.ScrollView>.
		 */
		static createScrollView(parameters?: Dictionary<Titanium.UI.ScrollView>): Titanium.UI.ScrollView;

		/**
		 * Creates and returns an instance of <Titanium.UI.ScrollableView>.
		 */
		static createScrollableView(parameters?: Dictionary<Titanium.UI.ScrollableView>): Titanium.UI.ScrollableView;

		/**
		 * Creates and returns an instance of <Titanium.UI.SearchBar>.
		 */
		static createSearchBar(parameters?: Dictionary<Titanium.UI.SearchBar>): Titanium.UI.SearchBar;

		/**
		 * Creates and returns an instance of <Titanium.UI.Shortcut>.
		 */
		static createShortcut(parameters?: Dictionary<Titanium.UI.Shortcut>): Titanium.UI.Shortcut;

		/**
		 * Creates and returns an instance of <Titanium.UI.ShortcutItem>.
		 */
		static createShortcutItem(parameters?: Dictionary<Titanium.UI.ShortcutItem>): Titanium.UI.ShortcutItem;

		/**
		 * Creates and returns an instance of <Titanium.UI.Slider>.
		 */
		static createSlider(parameters?: Dictionary<Titanium.UI.Slider>): Titanium.UI.Slider;

		/**
		 * Creates and returns an instance of <Titanium.UI.Switch>.
		 */
		static createSwitch(parameters?: Dictionary<Titanium.UI.Switch>): Titanium.UI.Switch;

		/**
		 * Creates and returns an instance of <Titanium.UI.Tab>.
		 */
		static createTab(parameters?: Dictionary<Titanium.UI.Tab>): Titanium.UI.Tab;

		/**
		 * Creates and returns an instance of <Titanium.UI.TabGroup>.
		 */
		static createTabGroup(parameters?: Dictionary<Titanium.UI.TabGroup>): Titanium.UI.TabGroup;

		/**
		 * Creates and returns an instance of <Titanium.UI.TabbedBar>.
		 */
		static createTabbedBar(parameters?: Dictionary<Titanium.UI.TabbedBar>): Titanium.UI.TabbedBar;

		/**
		 * Creates and returns an instance of <Titanium.UI.TableView>.
		 */
		static createTableView(parameters?: Dictionary<Titanium.UI.TableView>): Titanium.UI.TableView;

		/**
		 * Creates and returns an instance of <Titanium.UI.TableViewRow>.
		 */
		static createTableViewRow(parameters?: Dictionary<Titanium.UI.TableViewRow>): Titanium.UI.TableViewRow;

		/**
		 * Creates and returns an instance of <Titanium.UI.TableViewSection>.
		 */
		static createTableViewSection(parameters?: Dictionary<Titanium.UI.TableViewSection>): Titanium.UI.TableViewSection;

		/**
		 * Creates and returns an instance of <Titanium.UI.TextArea>.
		 */
		static createTextArea(parameters?: Dictionary<Titanium.UI.TextArea>): Titanium.UI.TextArea;

		/**
		 * Creates and returns an instance of <Titanium.UI.TextField>.
		 */
		static createTextField(parameters?: Dictionary<Titanium.UI.TextField>): Titanium.UI.TextField;

		/**
		 * Creates and returns an instance of <Titanium.UI.Toolbar>.
		 */
		static createToolbar(parameters?: Dictionary<Titanium.UI.Toolbar>): Titanium.UI.Toolbar;

		/**
		 * Creates and returns an instance of <Titanium.UI.View>.
		 */
		static createView(parameters?: Dictionary<Titanium.UI.View>): Titanium.UI.View;

		/**
		 * Creates and returns an instance of <Titanium.UI.WebView>.
		 */
		static createWebView(parameters?: Dictionary<Titanium.UI.WebView>): Titanium.UI.WebView;

		/**
		 * Creates and returns an instance of <Titanium.UI.Window>.
		 */
		static createWindow(parameters?: Dictionary<Titanium.UI.Window>): Titanium.UI.Window;

		/**
		 * Fetches the correct color to be used with a UI element dependent on the users current dark mode setting on iOS 13 and above, or the [Titanium.UI.semanticColorType](Titanium.UI.semanticColorType) setting in other instances.
		 * Will return a valid string value to be used for color properties on Android. This may be a hex string or an `rgba()` function.
		 */
		static fetchSemanticColor(colorName: string): Titanium.UI.Color | string;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent<K extends keyof UIEventMap>(name: K, event?: UIEventMap[K]): void;

		/**
		 * Fires a synthesized event to any registered listeners.
		 */
		static fireEvent(name: string, event?: any): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener<K extends keyof UIEventMap>(name: K, callback: (this: Titanium.UI, event: UIEventMap[K]) => void): void;

		/**
		 * Removes the specified callback as an event listener for the named event.
		 */
		static removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

	}
}
