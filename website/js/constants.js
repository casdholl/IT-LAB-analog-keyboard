/*
  Constante waarden die door meerdere bestanden en functies wordt gebruikt.
*/

/*
  type toetsen
  - alphanumeric -> a-Z 0-9
  - function_keys -> F1-F12
  - control_keys -> Esc, Ctrl, Alt, Win
  - navigation_keys -> up down left right
  - modifier_keys -> Shift, Ctrl, Alt
  - toggle_keys -> Capslock, NumLock, ScrollLock
  - special_keys -> Prt Scr, Insert, Delete, Pause, Prt Scr, Delete, Tab
*/

/*
https://stackoverflow.com/questions/27075328/list-of-hex-keyboard-scan-codes-and-usb-hid-keyboard-documentation

The "scan codes" (they are really indexes to usage codes) are published on usb.org in the USB HID Usage Tables specification in Chapter 10 "Keyboard/Keypad Page (0x07)". A typical keyboard report layout can be found in the USB Device Class Specification for HID in Appendix B "Boot Interface Descriptors", section "B.1 Protocol 1 (Keyboard)".

That describes the keyboard report format as:

Byte 0: Keyboard modifier bits (SHIFT, ALT, CTRL etc)
Byte 1: reserved
Byte 2-7: Up to six keyboard usage indexes representing the keys that are
          currently "pressed".
          Order is not important, a key is either pressed (present in the
          buffer) or not pressed.

          Note that the USB spec doesn't define keyboard layouts. It simply lists the usage codes assigned to particular key functions. The letter "a" is usage code 0x04 for example. If you want an uppercase "A", then you would also need to set the Byte 0 modifier bits to select "Left Shift" (or "Right Shift").

The exact format of the report buffer depends on the Report Descriptor sent to the host computer when the keyboard was plugged in to a USB port, so the above is just a (pretty typical) example.
*/

export const TYPE = {
  ALPHANUMERIC: "alphanumeric",
  FUNCTION_KEY: "function_key",
  CONTROL_KEY: "control_key",
  NAVIGATION_KEY: "navigation_key",
  MODIFIER_KEY: "modifier_key",
  TOGGLE_KEY: "toggle_key",
  SPECIAL_KEY: "special_key",
};

export const KEY = {
  LOWER_A: "a",
  LOWER_B: "b",
  LOWER_C: "c",
  LOWER_D: "d",
  LOWER_E: "e",
  LOWER_F: "f",
  LOWER_G: "g",
  LOWER_H: "h",
  LOWER_I: "i",
  LOWER_J: "j",
  LOWER_K: "k",
  LOWER_L: "l",
  LOWER_N: "n",
  LOWER_M: "m",
  LOWER_O: "o",
  LOWER_P: "p",
  LOWER_Q: "q",
  LOWER_R: "r",
  LOWER_S: "s",
  LOWER_T: "t",
  LOWER_U: "u",
  LOWER_V: "v",
  LOWER_W: "w",
  LOWER_X: "x",
  LOWER_Y: "y",
  LOWER_Z: "z",
  UPPER_A: "A",
  UPPER_B: "B",
  UPPER_C: "C",
  UPPER_D: "D",
  UPPER_E: "E",
  UPPER_F: "F",
  UPPER_G: "G",
  UPPER_H: "H",
  UPPER_I: "I",
  UPPER_J: "J",
  UPPER_K: "K",
  UPPER_L: "L",
  UPPER_M: "M",
  UPPER_N: "N",
  UPPER_O: "O",
  UPPER_P: "P",
  UPPER_Q: "Q",
  UPPER_R: "R",
  UPPER_S: "S",
  UPPER_T: "T",
  UPPER_U: "U",
  UPPER_V: "V",
  UPPER_W: "W",
  UPPER_X: "X",
  UPPER_Y: "Y",
  UPPER_Z: "Z",
  NUMBER_0: "0",
  NUMBER_1: "1",
  NUMBER_2: "2",
  NUMBER_3: "3",
  NUMBER_4: "4",
  NUMBER_5: "5",
  NUMBER_6: "6",
  NUMBER_7: "7",
  NUMBER_8: "8",
  NUMBER_9: "9",
  F1: "F1",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  ESCAPE: "Esc",
  TAB: "Tab",
  CAPS_LOCK: "Caps Lock",
  SHIFT: "Shift",
  LEFT_SHIFT: "Shift",
  RIGHT_SHIFT: "Shift",
  LEFT_CONTROL: "Ctrl",
  RIGHT_CONTROL: "Ctrl",
  LEFT_ALT: "Alt",
  RIGHT_ALT: "Alt",
  LEFT_META: "Meta",
  RIGHT_META: "Meta",
  FUNCTION_KEY: "Fn",
  WINDOWS_KEY: "Win",
  COMMAND: "Command",
  OPTION: "Option",
  ENTER: "Enter",
  RETURN: "Return",
  BACKSPACE: "Backspace",
  DELETE: "Delete",
  INSERT: "Insert",
  HOME: "Home",
  END: "End",
  PAGE_UP: "PgUp",
  PAGE_DOWN: "PgDn",
  ARROW_UP: "↑",
  ARROW_DOWN: "↓",
  ARROW_LEFT: "←",
  ARROW_RIGHT: "→",
  NUM_LOCK: "Num Lock",
  SCROLL_LOCK: "Scroll Lock",
  PRINT_SCREEN: "Prt Sc",
  PAUSE: "Pause",
  CONTEXT_MENU: "Context Menu",
  PLUS: "+",
  MINUS: "-",
  EQUAL: "=",
  BACKTICK: "`",
  TILDE: "~",
  BRACKET_LEFT: "[",
  BRACKET_RIGHT: "]",
  BRACE_LEFT: "{",
  BRACE_RIGHT: "}",
  BACKSLASH: "\\",
  PIPE: "|",
  SEMICOLON: ";",
  COLON: ":",
  QUOTE: "'",
  DOUBLE_QUOTE: '"',
  COMMA: ",",
  PERIOD: ".",
  LESS_THAN: "<",
  GREATER_THAN: ">",
  SLASH: "/",
  QUESTION_MARK: "?",
  SPACE: "Space",
};

/*
Voorbeeld HID-report (8 bytes common HID keyboard): [modifier, reserved, key1, key2, key3, key4, key5, key6]
*/

/* https://gist.github.com/MightyPork/6da26e382a7ad91b5496ee55fdc73db2 */
/* https://source.android.com/docs/core/interaction/input/keyboard-devices */

export const TEST_KEY = {
  /* modifier keys */
  KEY_MOD_LCTRL: { naam: "Ctrl", code: 0x01 },
  KEY_MOD_RCTRL: { naam: "Ctrl", code: 0x10 },
  KEY_MOD_LSHIFT: { naam: "Shift", code: 0x02 },
  KEY_MOD_RSHIFT: { naam: "Shift", code: 0x20 },
  KEY_MOD_LALT: { naam: "Alt", code: 0x04 },
  KEY_MOD_RALT: { naam: "Alt", code: 0x40 },
  KEY_MOD_LMETA: { naam: "Meta", code: 0x08 },
  KEY_MOD_RMETA: { naam: "Meta", code: 0x80 },

  KEY_NONE: { naam: "", code: 0x00 }, // No key pressed
  KEY_ERR_ROV: { naam: "", code: 0x01 }, //  Keyboard Error Roll Over - used for all slots if too many keys are pressed ("Phantom key")
  // 0x02 //  Keyboard POST Fail
  // 0x03 //  Keyboard Error Undefined
  KEY_A: { naam: "a", code: 0x04 }, // Keyboard a and A
  KEY_B: { naam: "b", code: 0x05 }, // Keyboard b and B
  KEY_C: { naam: "c", code: 0x06 }, // Keyboard c and C
  KEY_D: { naam: "d", code: 0x07 }, // Keyboard d and D
  KEY_E: { naam: "e", code: 0x08 }, // Keyboard e and E
  KEY_F: { naam: "f", code: 0x09 }, // Keyboard f and F
  KEY_G: { naam: "g", code: 0x0a }, // Keyboard g and G
  KEY_H: { naam: "h", code: 0x0b }, // Keyboard h and H
  KEY_I: { naam: "i", code: 0x0c }, // Keyboard i and I
  KEY_J: { naam: "j", code: 0x0d }, // Keyboard j and J
  KEY_K: { naam: "k", code: 0x0e }, // Keyboard k and K
  KEY_L: { naam: "l", code: 0x0f }, // Keyboard l and L
  KEY_M: { naam: "m", code: 0x10 }, // Keyboard m and M
  KEY_N: { naam: "n", code: 0x11 }, // Keyboard n and N
  KEY_O: { naam: "o", code: 0x12 }, // Keyboard o and O
  KEY_P: { naam: "p", code: 0x13 }, // Keyboard p and P
  KEY_Q: { naam: "q", code: 0x14 }, // Keyboard q and Q
  KEY_R: { naam: "r", code: 0x15 }, // Keyboard r and R
  KEY_S: { naam: "s", code: 0x16 }, // Keyboard s and S
  KEY_T: { naam: "t", code: 0x17 }, // Keyboard t and T
  KEY_U: { naam: "u", code: 0x18 }, // Keyboard u and U
  KEY_V: { naam: "v", code: 0x19 }, // Keyboard v and V
  KEY_W: { naam: "w", code: 0x1a }, // Keyboard w and W
  KEY_X: { naam: "x", code: 0x1b }, // Keyboard x and X
  KEY_Y: { naam: "y", code: 0x1c }, // Keyboard y and Y
  KEY_Z: { naam: "z", code: 0x1d }, // Keyboard z and Z
  KEY_1: { naam: "1", code: 0x1e }, // Keyboard 1 and !
  KEY_2: { naam: "2", code: 0x1f }, // Keyboard 2 and @
  KEY_3: { naam: "3", code: 0x20 }, // Keyboard 3 and #
  KEY_4: { naam: "4", code: 0x21 }, // Keyboard 4 and $
  KEY_5: { naam: "5", code: 0x22 }, // Keyboard 5 and %
  KEY_6: { naam: "6", code: 0x23 }, // Keyboard 6 and ^
  KEY_7: { naam: "7", code: 0x24 }, // Keyboard 7 and &
  KEY_8: { naam: "8", code: 0x25 }, // Keyboard 8 and *
  KEY_9: { naam: "9", code: 0x26 }, // Keyboard 9 and (
  KEY_0: { naam: "0", code: 0x27 }, // Keyboard 0 and )
  KEY_ENTER: { naam: "Enter", code: 0x28 },
  KEY_ESCAPE: { naam: "Esc", code: 0x29 },
  KEY_BACKSPACE: { naam: "Backspace", code: 0x2a },
  KEY_TAB: { naam: "Tab", code: 0x2b },
  KEY_SPACE: { naam: "Space", code: 0x2c },
  KEY_MINUS: { naam: "Space", code: 0x2d },
  KEY_EQUAL: { naam: "Space", code: 0x2e },
  KEY_LEFTBRACE: { naam: "Space", code: 0x2f },
  KEY_RIGHTBRACE: { naam: "Space", code: 0x30 },
  KEY_BACKSLASH: { naam: "\\", code: 0x31 },
  //KEY_BACKSLASH: { naam: "#", code: 0x32 },
  KEY_SEMICOLON: { naam: ";", code: 0x33 },
  KEY_APOSTROPHE: { naam: "'", code: 0x34 },
  KEY_GRAVE: { naam: "`", code: 0x35 },
  KEY_COMMA: { naam: ",", code: 0x36 },
  KEY_DOT: { naam: ".", code: 0x37 },
  KEY_SLASH: { naam: "/", code: 0x38 },
  KEY_CAPSLOCK: { naam: "Caps Lock", code: 0x39 },
  KEY_F1: { naam: "F1", code: 0x3a },
  KEY_F2: { naam: "F2", code: 0x3b },
  KEY_F3: { naam: "F3", code: 0x3c },
  KEY_F4: { naam: "F4", code: 0x3d },
  KEY_F5: { naam: "F5", code: 0x3e },
  KEY_F6: { naam: "F6", code: 0x3f },
  KEY_F7: { naam: "F7", code: 0x40 },
  KEY_F8: { naam: "F8", code: 0x41 },
  KEY_F9: { naam: "F9", code: 0x42 },
  KEY_F10: { naam: "F10", code: 0x43 },
  KEY_F11: { naam: "F11", code: 0x44 },
  KEY_F12: { naam: "F12", code: 0x45 },
  KEY_SYSRQ: { naam: "Prt Sc", code: 0x46 },
  KEY_SCROLLLOCK: { naam: "Scroll Lock", code: 0x47 },
  KEY_PAUSE: { naam: "Pause", code: 0x48 },
  KEY_INSERT: { naam: "Insert", code: 0x49 },
  KEY_HOME: { naam: "Home", code: 0x4a },
  KEY_PAGEUP: { naam: "Home", code: 0x4b },
  KEY_DELETE: { naam: "Delete", code: 0x4c },
  KEY_END: { naam: "End", code: 0x4d },
  KEY_PAGEDOWN: { naam: "Pg Dn", code: 0x4e },
  KEY_RIGHT: { naam: "→", code: 0x4f },
  KEY_LEFT: { naam: "←", code: 0x50 },
  KEY_DOWN: { naam: "↓", code: 0x051 },
  KEY_UP: { naam: "↑", code: 0x52 },
  KEY_NUMLOCK: { naam: "Num Lock", code: 0x53 },
  KEY_KPSLASH: { naam: "/", code: 0x54 },
  KEY_KPASTERISK: { naam: "*", code: 0x55 },
  KEY_KPMINUS: { naam: "-", code: 0x56 },
  KEY_KPPLUS: { naam: "+", code: 0x57 },
  KEY_KPENTER: { naam: "Enter", code: 0x58 },
  KEY_KP1: { naam: "1", code: 0x59 },
  KEY_KP2: { naam: "2", code: 0x5a },
  KEY_KP3: { naam: "3", code: 0x5b },
  KEY_KP4: { naam: "4", code: 0x5c },
  KEY_KP5: { naam: "5", code: 0x5d },
  KEY_KP6: { naam: "6", code: 0x5e },
  KEY_KP7: { naam: "7", code: 0x5f },
  KEY_KP8: { naam: "8", code: 0x60 },
  KEY_KP9: { naam: "9", code: 0x61 },
  KEY_KP0: { naam: "0", code: 0x62 },
  KEY_KPDOT: { naam: ".", code: 0x63 },
  KEY_102ND: { naam: "\\", code: 0x65 },
};
