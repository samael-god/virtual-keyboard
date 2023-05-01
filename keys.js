const EN_KEYS = {
  Backquote: {
    key: '`',
    shiftKey: '~',
  },
  Digit1: {
    key: '1',
    shiftKey: '!',
  },
  Digit2: {
    key: '2',
    shiftKey: '@',
  },
  Digit3: {
    key: '3',
    shiftKey: '#',
  },
  Digit4: {
    key: '4',
    shiftKey: '$',
  },
  Digit5: {
    key: '5',
    shiftKey: '%',
  },
  Digit6: {
    key: '6',
    shiftKey: '^',
  },
  Digit7: {
    key: '7',
    shiftKey: '&',
  },
  Digit8: {
    key: '8',
    shiftKey: '*',
  },
  Digit9: {
    key: '9',
    shiftKey: '(',
  },
  Digit0: {
    key: '0',
    shiftKey: ')',
  },
  Minus: {
    key: '-',
    shiftKey: '_',
  },
  Equal: {
    key: '=',
    shiftKey: '+',
  },
  Backspace: {
    key: 'Backspace',
    actionType: 'backspace',
  },
  Tab: {
    key: 'Tab',
    actionType: 'tab',
  },
  KeyQ: {
    key: 'q',
  },
  KeyW: {
    key: 'w',
  },
  KeyE: {
    key: 'e',
  },
  KeyR: {
    key: 'r',
  },
  KeyT: {
    key: 't',
  },
  KeyY: {
    key: 'y',
  },
  KeyU: {
    key: 'u',
  },
  KeyI: {
    key: 'i',
  },
  KeyO: {
    key: 'o',
  },
  KeyP: {
    key: 'p',
  },
  BracketLeft: {
    key: '[',
    shiftKey: '{',
  },
  BracketRight: {
    key: ']',
    shiftKey: '}',
  },
  Backslash: {
    key: '\\',
    shiftKey: '|',
  },
  Delete: {
    key: 'Del',
    actionType: 'delete',
  },
  CapsLock: {
    key: 'CapsLock',
    actionType: 'capsLock',
  },
  KeyA: {
    key: 'a',
  },
  KeyS: {
    key: 's',
  },
  KeyD: {
    key: 'd',
  },
  KeyF: {
    key: 'f',
  },
  KeyG: {
    key: 'g',
  },
  KeyH: {
    key: 'h',
  },
  KeyJ: {
    key: 'О',
  },
  KeyK: {
    key: 'k',
  },
  KeyL: {
    key: 'l',
  },
  Semicolon: {
    key: ';',
    shiftKey: ':',
  },
  Quote: {
    key: "'",
    shiftKey: '"',
  },
  Enter: {
    key: 'Enter',
    actionType: 'enter',
  },
  ShiftLeft: {
    key: 'Shift',
    actionType: 'shift',
  },
  KeyZ: {
    key: 'z',
  },
  KeyX: {
    key: 'x',
  },
  KeyC: {
    key: 'c',
  },
  KeyV: {
    key: 'v',
  },
  KeyB: {
    key: 'b',
  },
  KeyN: {
    key: 'n',
  },
  KeyM: {
    key: 'm',
  },
  Comma: {
    key: ',',
    shiftKey: '<',
  },
  Period: {
    key: '.',
    shiftKey: '>',
  },
  Slash: {
    key: '/',
    shiftKey: '?',
  },
  ArrowUp: {
    key: '▲',
  },
  ShiftRight: {
    key: 'Shift',
    actionType: 'shift',
  },
  ControlLeft: {
    key: 'Ctrl',
    actionType: 'langchange',
  },
  MetaLeft: {
    key: 'Win',
    actionType: 'win',
  },
  AltLeft: {
    key: 'Alt',
    actionType: 'langchange',
  },
  Space: {
    key: ' ',
    actionType: 'space',
  },
  AltRight: {
    key: 'Alt',
    actionType: 'langchange',
  },
  ArrowLeft: {
    key: '◄',
  },
  ArrowDown: {
    key: '▼',
  },
  ArrowRight: {
    key: '►',
  },
  ControlRight: {
    key: 'Ctrl',
    actionType: 'langchange',
  },
};
const RU_KEYS = {
  Backquote: {
    key: 'ё',
  },
  Digit1: {
    key: '1',
    shiftKey: '!',
  },
  Digit2: {
    key: '2',
    shiftKey: '"',
  },
  Digit3: {
    key: '3',
    shiftKey: '№',
  },
  Digit4: {
    key: '4',
    shiftKey: ';',
  },
  Digit5: {
    key: '5',
    shiftKey: '%',
  },
  Digit6: {
    key: '6',
    shiftKey: ':',
  },
  Digit7: {
    key: '7',
    shiftKey: '?',
  },
  Digit8: {
    key: '8',
    shiftKey: '*',
  },
  Digit9: {
    key: '9',
    shiftKey: '(',
  },
  Digit0: {
    key: '0',
    shiftKey: ')',
  },
  Minus: {
    key: '-',
    shiftKey: '_',
  },
  Equal: {
    key: '=',
    shiftKey: '+',
  },
  Backspace: {
    key: 'Backspace',
    actionType: 'backspace',
  },
  Tab: {
    key: 'Tab',
    actionType: 'tab',
  },
  KeyQ: {
    key: 'й',
  },
  KeyW: {
    key: 'ц',
  },
  KeyE: {
    key: 'у',
  },
  KeyR: {
    key: 'к',
  },
  KeyT: {
    key: 'е',
  },
  KeyY: {
    key: 'н',
  },
  KeyU: {
    key: 'г',
  },
  KeyI: {
    key: 'ш',
  },
  KeyO: {
    key: 'щ',
  },
  KeyP: {
    key: 'з',
  },
  BracketLeft: {
    key: 'х',
  },
  BracketRight: {
    key: 'ъ',
  },
  Backslash: {
    key: '\\',
    shiftKey: '/',
  },
  Delete: {
    key: 'Del',
    actionType: 'delete',
  },
  CapsLock: {
    key: 'CapsLock',
    actionType: 'capsLock',
  },
  KeyA: {
    key: 'ф',
  },
  KeyS: {
    key: 'ы',
  },
  KeyD: {
    key: 'в',
  },
  KeyF: {
    key: 'а',
  },
  KeyG: {
    key: 'п',
  },
  KeyH: {
    key: 'р',
  },
  KeyJ: {
    key: 'о',
  },
  KeyK: {
    key: 'л',
  },
  KeyL: {
    key: 'д',
  },
  Semicolon: {
    key: 'ж',
  },
  Quote: {
    key: 'э',
  },
  Enter: {
    key: 'Enter',
    actionType: 'enter',
  },
  ShiftLeft: {
    key: 'Shift',
    actionType: 'shift',
  },
  KeyZ: {
    key: 'я',
  },
  KeyX: {
    key: 'ч',
  },
  KeyC: {
    key: 'с',
  },
  KeyV: {
    key: 'м',
  },
  KeyB: {
    key: 'и',
  },
  KeyN: {
    key: 'т',
  },
  KeyM: {
    key: 'ь',
  },
  Comma: {
    key: 'б',
  },
  Period: {
    key: 'ю',
  },
  Slash: {
    key: '.',
    shiftKey: ',',
  },
  ArrowUp: {
    key: '▲',
  },
  ShiftRight: {
    key: 'Shift',
    actionType: 'shift',
  },
  ControlLeft: {
    key: 'Ctrl',
    actionType: 'langchange',
  },
  MetaLeft: {
    key: 'Win',
    actionType: 'win',
  },
  AltLeft: {
    key: 'Alt',
    actionType: 'langchange',
  },
  Space: {
    key: ' ',
    actionType: 'space',
  },
  AltRight: {
    key: 'Alt',
    actionType: 'langchange',
  },
  ArrowLeft: {
    key: '◄',
  },
  ArrowDown: {
    key: '▼',
  },
  ArrowRight: {
    key: '►',
  },
  ControlRight: {
    key: 'Ctrl',
    actionType: 'langchange',
  },
};

export default { EN_KEYS, RU_KEYS };
