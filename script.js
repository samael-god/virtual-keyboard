import KEYS from './keys.js';

const mediumKeys = ['ControlRight', 'ControlLeft', 'AltRight', 'AltLeft', 'MetaLeft', 'Tab', 'Delete'];
const longKeys = ['Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight'];
const controls = ['ControlRight', 'ControlLeft', 'AltRight', 'AltLeft', 'MetaLeft', 'Tab', 'Delete', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Backspace', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight'];
const currLang = 'ru';

let text = [];

window.addEventListener('keydown', (event) => {
  const textarea = document.querySelector('.text-area');
  textarea.focus();
  if (event.code === 'Tab' || event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
    if (event.code === 'Tab') {
      const currentPosition = textarea.selectionStart;
      for (let i = 0; i < 4; i += 1) {
        text.splice(currentPosition, 0, ' ');
        textarea.value = text.join('');
      }
      textarea.selectionStart = currentPosition + 4;
      textarea.selectionEnd = textarea.selectionStart;
    }
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    if (key.classList.contains(`${event.code}`)) {
      if (key.classList.contains('CapsLock') && key.classList.contains('active')) {
        key.classList.remove('active');
      } else {
        key.classList.add('active');
      }
    }
  });
});
window.addEventListener('keyup', (event) => {
  const textarea = document.querySelector('.text-area');
  text = textarea.value.split('');
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    if (key.classList.contains(`${event.code}`) && key.classList.contains('active') && !key.classList.contains('CapsLock')) {
      key.classList.remove('active');
    }
  });
});

class Key {
  createKeyboard = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const textArea = document.createElement('textarea');
    textArea.classList.add('text-area');
    textArea.setAttribute('autofocus', 'true');
    wrapper.appendChild(textArea);
    wrapper.appendChild(keyboard);
    document.querySelector('body').appendChild(wrapper);
    keyboard.addEventListener('click', () => {
      document.querySelector('.text-area').focus();
    });
  };

  createRow(row, num, lang, mod = 'lowerCase') {
    const ul = document.createElement('ul');
    const keyArr = Object.keys(row);
    const currentRow = Object.keys(KEYS)[num - 1];
    ul.classList.add('row');
    ul.setAttribute('data-set', `${Object.keys(KEYS)[num - 1]}`);
    for (let i = 0; i < keyArr.length; i += 1) {
      const key = document.createElement('li');
      key.classList.add('key');
      key.innerHTML = KEYS[currentRow][keyArr[i]][lang][mod];
      key.classList.add(`${keyArr[i]}`);
      if (mediumKeys.includes(keyArr[i])) {
        key.classList.add('key_controls-medium');
      }
      if (longKeys.includes(keyArr[i])) {
        key.classList.add('key_controls-long');
      }
      if (controls.includes(keyArr[i])) {
        key.classList.add('key_controls');
      }
      if (key.classList.contains('Backspace')) {
        key.classList.add('key_backspace');
      }
      if (key.classList.contains('Space')) {
        key.classList.add('key_space');
      }
      ul.appendChild(key);
    }
    document.querySelector('.keyboard').appendChild(ul);
  }

  handleEnter() {
    if (document.querySelector('.Enter')) {
      const enter = document.querySelector('.Enter');
      enter.addEventListener('click', () => {
        const textarea = document.querySelector('.text-area');
        const currPosition = textarea.selectionStart;
        text.splice(textarea.selectionStart, 0, '\n');
        textarea.value = text.join('');
        textarea.selectionStart = currPosition + 1;
        textarea.selectionEnd = textarea.selectionStart;
      });
    }
  }

  handleBackSpace() {
    if (document.querySelector('.Backspace')) {
      const backSpace = document.querySelector('.Backspace');
      backSpace.addEventListener('click', () => {
        const textarea = document.querySelector('.text-area');
        if (textarea.selectionStart !== 0) {
          const currPosition = textarea.selectionStart;
          text.splice(currPosition - 1, 1);
          textarea.value = text.join('');
          textarea.selectionStart = currPosition - 1;
          textarea.selectionEnd = textarea.selectionStart;
        }
      });
    }
  }

  handleTab() {
    if (document.querySelector('.Tab')) {
      const tab = document.querySelector('.Tab');
      tab.addEventListener('click', () => {
        const textarea = document.querySelector('.text-area');
        textarea.focus();
        const currentPosition = textarea.selectionStart;
        for (let i = 0; i < 4; i += 1) {
          text.splice(currentPosition, 0, ' ');
          textarea.value = text.join('');
        }
        textarea.selectionStart = currentPosition + 4;
        textarea.selectionEnd = textarea.selectionStart;
      });
    }
  }

  handleSpace() {
    if (document.querySelector('.Space')) {
      const space = document.querySelector('.Space');
      space.addEventListener('click', () => {
        const textarea = document.querySelector('.text-area');
        textarea.focus();
        const currentPosition = textarea.selectionStart;
        text.splice(currentPosition, 0, ' ');
        textarea.value = text.join('');
        textarea.selectionStart = currentPosition + 1;
        textarea.selectionEnd = textarea.selectionStart;
      });
    }
  }
}

const keyboard = new Key();
keyboard.createKeyboard();
keyboard.createRow(KEYS.row1, 1, currLang);
keyboard.createRow(KEYS.row2, 2, currLang);
keyboard.createRow(KEYS.row3, 3, currLang);
keyboard.createRow(KEYS.row4, 4, currLang);
keyboard.createRow(KEYS.row5, 5, currLang);
keyboard.handleEnter();
keyboard.handleBackSpace();
keyboard.handleTab();
keyboard.handleSpace();
