const RU_KEYS = {
  Backspace: {
    key: 'Backspace',
    actionType: 'backspace',
  },
  CapsLock: {
    key: 'CapsLock',
    actionType: 'capsLock',
  },
  ShiftLeft: {
    key: 'Shift',
    actionType: 'shift',
  },
  // digits
  Digit1: {
    key: '1',
    shiftKey: '!',
  },
  Backquote: {
    key: 'ё',
  },

};

const EN_KEYS = {
  Backquote: {
    key: '`',
    shiftKey: '~',
  },
};

const KEYS = {
  row1: {
    Backquote: {
      en: {
        lowerCase: '`',
        upperCase: '`',
        shift: '`',
        capslock: '`',
      },
      ru: {
        lowerCase: 'ё',
        upperCase: 'Ё',
        shift: 'Ё',
        capslock: 'Ё',
      },
    },
    Digit1: {
      en: {
        lowerCase: '1',
        upperCase: '!',
        shift: '!',
        capslock: '1',
      },
      ru: {
        lowerCase: '1',
        upperCase: '!',
        shift: '!',
        capslock: '1',
      },
    },
    Digit2: {
      en: {
        lowerCase: '2',
        upperCase: '@',
        shift: '@',
        capslock: '2',
      },
      ru: {
        lowerCase: '2',
        upperCase: '"',
        shift: '"',
        capslock: '2',
      },
    },
    Digit3: {
      en: {
        lowerCase: '3',
        upperCase: '#',
        shift: '#',
        capslock: '3',
      },
      ru: {
        lowerCase: '3',
        upperCase: '№',
        shift: '№',
        capslock: '3',
      },
    },
    Digit4: {
      en: {
        lowerCase: '4',
        upperCase: '$',
        shift: '$',
        capslock: '4',
      },
      ru: {
        lowerCase: '4',
        upperCase: ';',
        shift: ';',
        capslock: '4',
      },
    },
    Digit5: {
      en: {
        lowerCase: '5',
        upperCase: '%',
        shift: '%',
        capslock: '5',
      },
      ru: {
        lowerCase: '5',
        upperCase: '%',
        shift: '%',
        capslock: '5',
      },
    },
    Digit6: {
      en: {
        lowerCase: '6',
        upperCase: '^',
        shift: '^',
        capslock: '6',
      },
      ru: {
        lowerCase: '6',
        upperCase: ':',
        shift: ':',
        capslock: '6',
      },
    },
    Digit7: {
      en: {
        lowerCase: '7',
        upperCase: '&',
        shift: '&',
        capslock: '7',
      },
      ru: {
        lowerCase: '7',
        upperCase: '?',
        shift: '?',
        capslock: '7',
      },
    },
    Digit8: {
      en: {
        lowerCase: '8',
        upperCase: '*',
        shift: '*',
        capslock: '8',
      },
      ru: {
        lowerCase: '8',
        upperCase: '*',
        shift: '*',
        capslock: '8',
      },
    },
    Digit9: {
      en: {
        lowerCase: '9',
        upperCase: '(',
        shift: '(',
        capslock: '9',
      },
      ru: {
        lowerCase: '9',
        upperCase: '(',
        shift: '(',
        capslock: '9',
      },
    },
    Digit0: {
      en: {
        lowerCase: '0',
        upperCase: ')',
        shift: ')',
        capslock: '0',
      },
      ru: {
        lowerCase: '0',
        upperCase: ')',
        shift: ')',
        capslock: '0',
      },
    },
    Minus: {
      en: {
        lowerCase: '-',
        upperCase: '_',
        shift: '_',
        capslock: '-',
      },
      ru: {
        lowerCase: '-',
        upperCase: '_',
        shift: '_',
        capslock: '-',
      },
    },
    Equal: {
      en: {
        lowerCase: '=',
        upperCase: '+',
        shift: '+',
        capslock: '=',
      },
      ru: {
        lowerCase: '=',
        upperCase: '+',
        shift: '+',
        capslock: '=',
      },
    },
    Backspace: {
      en: {
        lowerCase: 'Backspace',
        upperCase: 'Backspace',
        shift: 'Backspace',
        capslock: 'BBackspace',
      },
      ru: {
        lowerCase: 'Backspace',
        upperCase: 'Backspace',
        shift: 'Backspace',
        capslock: 'Backspace',
      },
    },
  },
  row2: {
    Tab: {
      en: {
        lowerCase: 'Tab',
        upperCase: 'Tab',
        shift: 'Tab',
        capslock: 'Tab',
      },
      ru: {
        lowerCase: 'Tab',
        upperCase: 'Tab',
        shift: 'Tab',
        capslock: 'Tab',
      },
    },
    KeyQ: {
      en: {
        lowerCase: 'q',
        upperCase: 'Q',
        shift: 'Q',
        capslock: 'Q',
      },
      ru: {
        lowerCase: 'й',
        upperCase: 'Й',
        shift: 'Й',
        capslock: 'Й',
      },
    },
    KeyW: {
      en: {
        lowerCase: 'w',
        upperCase: 'W',
        shift: 'W',
        capslock: 'W',
      },
      ru: {
        lowerCase: 'ц',
        upperCase: 'Ц',
        shift: 'Ц',
        capslock: 'Ц',
      },
    },
    KeyE: {
      en: {
        lowerCase: 'e',
        upperCase: 'E',
        shift: 'E',
        capslock: 'E',
      },
      ru: {
        lowerCase: 'у',
        upperCase: 'У',
        shift: 'У',
        capslock: 'У',
      },
    },
    KeyR: {
      en: {
        lowerCase: 'r',
        upperCase: 'R',
        shift: 'R',
        capslock: 'R',
      },
      ru: {
        lowerCase: 'к',
        upperCase: 'К',
        shift: 'К',
        capslock: 'К',
      },
    },
    KeyT: {
      en: {
        lowerCase: 't',
        upperCase: 'T',
        shift: 'T',
        capslock: 'T',
      },
      ru: {
        lowerCase: 'е',
        upperCase: 'Е',
        shift: 'Е',
        capslock: 'Е',
      },
    },
    KeyY: {
      en: {
        lowerCase: 'y',
        upperCase: 'Y',
        shift: 'Y',
        capslock: 'Y',
      },
      ru: {
        lowerCase: 'н',
        upperCase: 'Н',
        shift: 'Н',
        capslock: 'Н',
      },
    },
    KeyU: {
      en: {
        lowerCase: 'u',
        upperCase: 'U',
        shift: 'U',
        capslock: 'U',
      },
      ru: {
        lowerCase: 'г',
        upperCase: 'Г',
        shift: 'Г',
        capslock: 'Г',
      },
    },
    KeyI: {
      en: {
        lowerCase: 'i',
        upperCase: 'I',
        shift: 'I',
        capslock: 'I',
      },
      ru: {
        lowerCase: 'ш',
        upperCase: 'Ш',
        shift: 'Ш',
        capslock: 'Ш',
      },
    },
    KeyO: {
      en: {
        lowerCase: 'o',
        upperCase: 'O',
        shift: 'O',
        capslock: 'O',
      },
      ru: {
        lowerCase: 'щ',
        upperCase: 'Щ',
        shift: 'Щ',
        capslock: 'Щ',
      },
    },
    KeyP: {
      en: {
        lowerCase: 'p',
        upperCase: 'P',
        shift: 'P',
        capslock: 'P',
      },
      ru: {
        lowerCase: 'з',
        upperCase: 'З',
        shift: 'З',
        capslock: 'З',
      },
    },
    BracketLeft: {
      en: {
        lowerCase: '[',
        upperCase: '[',
        shift: '[',
        capslock: '[',
      },
      ru: {
        lowerCase: 'х',
        upperCase: 'Х',
        shift: 'Х',
        capslock: 'Х',
      },
    },
    BracketRight: {
      en: {
        lowerCase: ']',
        upperCase: ']',
        shift: ']',
        capslock: ']',
      },
      ru: {
        lowerCase: 'ъ',
        upperCase: 'Ъ',
        shift: 'Ъ',
        capslock: 'Ъ',
      },
    },
    Backslash: {
      en: {
        lowerCase: '\\',
        upperCase: '|',
        shift: '|',
        capslock: '\\',
      },
      ru: {
        lowerCase: '\\',
        upperCase: '/',
        shift: '/',
        capslock: '\\',
      },
    },
    Delete: {
      en: {
        lowerCase: 'Delete',
        upperCase: 'Delete',
        shift: 'Delete',
        capslock: 'Delete',
      },
      ru: {
        lowerCase: 'Delete',
        upperCase: 'Delete',
        shift: 'Delete',
        capslock: 'Delete',
      },
    },
  },
  row3: {
    CapsLock: {
      en: {
        lowerCase: 'CapsLock',
        upperCase: 'CapsLock',
        shift: 'CapsLock',
        capslock: 'CapsLock',
      },
      ru: {
        lowerCase: 'CapsLock',
        upperCase: 'CapsLock',
        shift: 'CapsLock',
        capslock: 'CapsLock',
      },
    },
    KeyA: {
      en: {
        lowerCase: 'a',
        upperCase: 'A',
        shift: 'A',
        capslock: 'A',
      },
      ru: {
        lowerCase: 'ф',
        upperCase: 'Ф',
        shift: 'Ф',
        capslock: 'Ф',
      },
    },
    KeyS: {
      en: {
        lowerCase: 's',
        upperCase: 'S',
        shift: 'S',
        capslock: 'S',
      },
      ru: {
        lowerCase: 'ы',
        upperCase: 'Ы',
        shift: 'Ы',
        capslock: 'Ы',
      },
    },
    KeyD: {
      en: {
        lowerCase: 'd',
        upperCase: 'D',
        shift: 'D',
        capslock: 'D',
      },
      ru: {
        lowerCase: 'в',
        upperCase: 'В',
        shift: 'В',
        capslock: 'В',
      },
    },
    KeyF: {
      en: {
        lowerCase: 'f',
        upperCase: 'F',
        shift: 'F',
        capslock: 'F',
      },
      ru: {
        lowerCase: 'а',
        upperCase: 'А',
        shift: 'А',
        capslock: 'А',
      },
    },
    KeyG: {
      en: {
        lowerCase: 'g',
        upperCase: 'G',
        shift: 'G',
        capslock: 'G',
      },
      ru: {
        lowerCase: 'п',
        upperCase: 'П',
        shift: 'П',
        capslock: 'П',
      },
    },
    KeyH: {
      en: {
        lowerCase: 'h',
        upperCase: 'H',
        shift: 'H',
        capslock: 'H',
      },
      ru: {
        lowerCase: 'р',
        upperCase: 'Р',
        shift: 'Р',
        capslock: 'Р',
      },
    },
    KeyJ: {
      en: {
        lowerCase: 'О',
        upperCase: 'J',
        shift: 'J',
        capslock: 'J',
      },
      ru: {
        lowerCase: 'о',
        upperCase: 'О',
        shift: 'О',
        capslock: 'О',
      },
    },
    KeyK: {
      en: {
        lowerCase: 'k',
        upperCase: 'K',
        shift: 'K',
        capslock: 'K',
      },
      ru: {
        lowerCase: 'л',
        upperCase: 'Л',
        shift: 'Л',
        capslock: 'Л',
      },
    },
    KeyL: {
      en: {
        lowerCase: 'l',
        upperCase: 'L',
        shift: 'L',
        capslock: 'L',
      },
      ru: {
        lowerCase: 'д',
        upperCase: 'Д',
        shift: 'Д',
        capslock: 'Д',
      },
    },
    Semicolon: {
      en: {
        lowerCase: ';',
        upperCase: ':',
        shift: ':',
        capslock: ';',
      },
      ru: {
        lowerCase: 'ж',
        upperCase: 'Ж',
        shift: 'Ж',
        capslock: 'Ж',
      },
    },
    Quote: {
      en: {
        lowerCase: "'",
        upperCase: '"',
        shift: '"',
        capslock: "'",
      },
      ru: {
        lowerCase: 'э',
        upperCase: 'Э',
        shift: 'Э',
        capslock: 'Э',
      },
    },
    Enter: {
      en: {
        lowerCase: 'Enter',
        upperCase: 'Enter',
        shift: 'Enter',
        capslock: 'Enter',
      },
      ru: {
        lowerCase: 'Enter',
        upperCase: 'Enter',
        shift: 'Enter',
        capslock: 'Enter',
      },
    },
  },
  row4: {
    ShiftLeft: {
      en: {
        lowerCase: 'Shift',
        upperCase: 'Shift',
        shift: 'Shift',
        capslock: 'Shift',
      },
      ru: {
        lowerCase: 'Shift',
        upperCase: 'Shift',
        shift: 'Shift',
        capslock: 'Shift',
      },
    },
    KeyZ: {
      en: {
        lowerCase: 'z',
        upperCase: 'Z',
        shift: 'Z',
        capslock: 'Z',
      },
      ru: {
        lowerCase: 'я',
        upperCase: 'Я',
        shift: 'Я',
        capslock: 'Я',
      },
    },
    KeyX: {
      en: {
        lowerCase: 'x',
        upperCase: 'X',
        shift: 'X',
        capslock: 'X',
      },
      ru: {
        lowerCase: 'ч',
        upperCase: 'Ч',
        shift: 'Ч',
        capslock: 'Ч',
      },
    },
    KeyC: {
      en: {
        lowerCase: 'c',
        upperCase: 'C',
        shift: 'C',
        capslock: 'C',
      },
      ru: {
        lowerCase: 'с',
        upperCase: 'С',
        shift: 'С',
        capslock: 'С',
      },
    },
    KeyV: {
      en: {
        lowerCase: 'v',
        upperCase: 'V',
        shift: 'V',
        capslock: 'V',
      },
      ru: {
        lowerCase: 'м',
        upperCase: 'М',
        shift: 'М',
        capslock: 'М',
      },
    },
    KeyB: {
      en: {
        lowerCase: 'b',
        upperCase: 'B',
        shift: 'B',
        capslock: 'B',
      },
      ru: {
        lowerCase: 'и',
        upperCase: 'И',
        shift: 'И',
        capslock: 'И',
      },
    },
    KeyN: {
      en: {
        lowerCase: 'n',
        upperCase: 'N',
        shift: 'N',
        capslock: 'N',
      },
      ru: {
        lowerCase: 'т',
        upperCase: 'Т',
        shift: 'Т',
        capslock: 'Т',
      },
    },
    KeyM: {
      en: {
        lowerCase: 'm',
        upperCase: 'M',
        shift: 'M',
        capslock: 'M',
      },
      ru: {
        lowerCase: 'ь',
        upperCase: 'Ь',
        shift: 'Ь',
        capslock: 'Ь',
      },
    },
    Comma: {
      en: {
        lowerCase: ',',
        upperCase: '<',
        shift: '<',
        capslock: ',',
      },
      ru: {
        lowerCase: 'б',
        upperCase: 'Б',
        shift: 'Б',
        capslock: 'Б',
      },
    },
    Period: {
      en: {
        lowerCase: '.',
        upperCase: '>',
        shift: '>',
        capslock: '.',
      },
      ru: {
        lowerCase: 'ю',
        upperCase: 'Ю',
        shift: 'Ю',
        capslock: 'Ю',
      },
    },
    Slash: {
      en: {
        lowerCase: '/',
        upperCase: '?',
        shift: '?',
        capslock: '?',
      },
      ru: {
        lowerCase: '.',
        upperCase: ',',
        shift: ',',
        capslock: '.',
      },
    },
    ArrowUp: {
      en: {
        lowerCase: '▲',
        upperCase: '▲',
        shift: '▲',
        capslock: '▲',
      },
      ru: {
        lowerCase: '▲',
        upperCase: '▲',
        shift: '▲',
        capslock: '▲',
      },
    },
    ShiftRight: {
      en: {
        lowerCase: 'Shift',
        upperCase: 'Shift',
        shift: 'Shift',
        capslock: 'Shift',
      },
      ru: {
        lowerCase: 'Shift',
        upperCase: 'Shift',
        shift: 'Shift',
        capslock: 'Shift',
      },
    },
  },
  row5: {
    ControlLeft: {
      en: {
        lowerCase: 'Ctrl',
        upperCase: 'Ctrl',
        shift: 'Ctrl',
        capslock: 'Ctrl',
      },
      ru: {
        lowerCase: 'Ctrl',
        upperCase: 'Ctrl',
        shift: 'Ctrl',
        capslock: 'Ctrl',
      },
    },
    MetaLeft: {
      en: {
        lowerCase: 'Win',
        upperCase: 'Win',
        shift: 'Win',
        capslock: 'Win',
      },
      ru: {
        lowerCase: 'Win',
        upperCase: 'Win',
        shift: 'Win',
        capslock: 'Win',
      },
    },
    AltLeft: {
      en: {
        lowerCase: 'Alt',
        upperCase: 'Alt',
        shift: 'Alt',
        capslock: 'Alt',
      },
      ru: {
        lowerCase: 'Alt',
        upperCase: 'Alt',
        shift: 'Alt',
        capslock: 'Alt',
      },
    },
    Space: {
      en: {
        lowerCase: ' ',
        upperCase: ' ',
        shift: ' ',
        capslock: ' ',
      },
      ru: {
        lowerCase: ' ',
        upperCase: ' ',
        shift: ' ',
        capslock: ' ',
      },
    },
    AltRight: {
      en: {
        lowerCase: 'Alt',
        upperCase: 'Alt',
        shift: 'Alt',
        capslock: 'Alt',
      },
      ru: {
        lowerCase: 'Alt',
        upperCase: 'Alt',
        shift: 'Alt',
        capslock: 'Alt',
      },
    },
    ArrowLeft: {
      en: {
        lowerCase: '◄',
        upperCase: '◄',
        shift: '◄',
        capslock: '◄',
      },
      ru: {
        lowerCase: '◄',
        upperCase: '◄',
        shift: '◄',
        capslock: '◄',
      },
    },
    ArrowDown: {
      en: {
        lowerCase: '▼',
        upperCase: '▼',
        shift: '▼',
        capslock: '▼',
      },
      ru: {
        lowerCase: '▼',
        upperCase: '▼',
        shift: '▼',
        capslock: '▼',
      },
    },
    ArrowRight: {
      en: {
        lowerCase: '►',
        upperCase: '►',
        shift: '►',
        capslock: '►',
      },
      ru: {
        lowerCase: '►',
        upperCase: '►',
        shift: '►',
        capslock: '►',
      },
    },
    ControlRight: {
      en: {
        lowerCase: 'Ctrl',
        upperCase: 'Ctrl',
        shift: 'Ctrl',
        capslock: 'Ctrl',
      },
      ru: {
        lowerCase: 'Ctrl',
        upperCase: 'Ctrl',
        shift: 'Ctrl',
        capslock: 'Ctrl',
      },
    },
  },
};
