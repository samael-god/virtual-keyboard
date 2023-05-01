// eslint-disable-next-line max-classes-per-file
import DICTIONARIES from './keys.js';

class Key2 {
  constructor(code, options) {
    this.element = document.createElement('button');
    this.element.style.gridArea = code;
    this.element.dataset.keyCode = code;
    this.element.classList.add('key');
    this.code = code;
    this.reset(options);
    this.active = false;
  }

  reset(options) {
    this.actionType = options.actionType;
    this.text = options.key;
    this.shiftText = options.shiftKey;
  }

  get isService() {
    return !!this.actionType;
  }

  get isServiceHold() {
    return this.actionType === 'shift' || this.actionType === 'capsLock' || this.actionType === 'langchange';
  }

  render(context) {
    const {
      shift, capslock,
    } = context;
    if (this.isService) {
      this.element.textContent = this.text;
      return;
    }
    if (shift && this.shiftText) {
      this.element.textContent = this.shiftText;
      return;
    }
    if (capslock) {
      this.element.textContent = shift ? this.text.toLowerCase() : this.text.toUpperCase();
      return;
    }
    this.element.textContent = shift ? this.text.toUpperCase() : this.text.toLowerCase();
  }

  get value() {
    return this.element.textContent;
  }

  toggleActive() {
    this.element.classList.toggle('active');
    this.active = !this.active;
  }

  removeActive() {
    this.element.classList.remove('active');
    this.active = false;
  }
}

class Keyboard2 {
  capslock = false;

  shift = false;

  ctrl = false;

  alt = false;

  langchange = false;

  constructor(dictionaries, textarea) {
    this.textarea = textarea;
    this.dictionaries = dictionaries;
    this.currentLang = localStorage.getItem('keyboard_lang') || 'EN';
    this.keys = Object.entries(dictionaries[this.currentLang])
      .map(([code, value]) => new Key2(code, value));
    this.element = document.createElement('div');
    this.element.classList.add('keyboard');
    this.keys.forEach((key) => this.element.append(key.element));
    this.element.addEventListener('click', (event) => this.processAction(event.target.dataset.keyCode));
    this.render();
  }

  processAction(keyCode) {
    const key = this.keys.find((currentKey) => currentKey.code === keyCode);
    if (!key) {
      return;
    }
    if (!key.isService && !key.isServiceHold) {
      this.insert(key.value);
      return;
    }
    switch (key.actionType) {
      case 'backspace': {
        const currPosition = this.textarea.selectionStart;
        const lastPosition = this.textarea.selectionEnd;
        const text = this.textarea.value.split('');
        if (currPosition === lastPosition) {
          text.splice(currPosition - 1, 1);
          this.textarea.value = text.join('');
          this.textarea.selectionStart = currPosition - 1;
        } else {
          text.splice(currPosition, lastPosition - currPosition);
          this.textarea.value = text.join('');
          this.textarea.selectionStart = currPosition;
        }
        this.textarea.selectionEnd = this.textarea.selectionStart;

        return;
      }
      case 'capsLock': {
        this.capslock = !this.capslock;
        key.toggleActive();
        this.render();
        return;
      }
      case 'shift': {
        if (this.activeShift && this.activeShift !== key) {
          this.activeShift.removeActive();
          key.toggleActive();
          this.activeShift = key;
          this.render();
          return;
        }
        if (this.activeShift && this.activeShift === key) {
          this.activeShift = false;
          key.toggleActive();
          this.render();
          return;
        }
        key.toggleActive();
        this.activeShift = key;
        this.render();
        return;
      }
      case 'enter': {
        this.insert('\n');
        return;
      }
      case 'delete': {
        const currPosition = this.textarea.selectionStart;
        const lastPosition = this.textarea.selectionEnd;
        const text = this.textarea.value.split('');
        if (currPosition === lastPosition) {
          text.splice(currPosition, 1);
          this.textarea.value = text.join('');
          this.textarea.selectionStart = currPosition;
        } else {
          text.splice(currPosition, lastPosition - currPosition);
          this.textarea.value = text.join('');
          this.textarea.selectionStart = currPosition;
        }
        this.textarea.selectionEnd = this.textarea.selectionStart;

        return;
      }
      case 'space': {
        this.insert(' ');
        return;
      }
      case 'tab': {
        this.insert('    ');

        return;
      }
      case 'langchange': {
        if (key.text === 'Alt') {
          if (this.activeAlt && key !== this.activeAlt) {
            key.toggleActive();
            this.activeAlt.removeActive();
            this.activeAlt = key;
            return;
          }
          if (key === this.activeAlt) {
            key.removeActive();
            this.activeAlt = null;
            return;
          }
          key.toggleActive();
          this.activeAlt = key;
        }
        if (key.text === 'Ctrl') {
          if (this.activeCtrl && key !== this.activeCtrl) {
            key.toggleActive();
            this.activeCtrl.removeActive();
            this.activeCtrl = key;
            return;
          }
          if (key === this.activeCtrl) {
            key.removeActive();
            this.activeCtrl = null;
            return;
          }
          key.toggleActive();
          this.activeCtrl = key;
        }
        if (this.activeAlt && this.activeCtrl) {
          this.activeAlt.removeActive();
          this.activeCtrl.removeActive();
          this.activeAlt = null;
          this.activeCtrl = null;
          this.changeLang();
        }
        return;
      }
      case 'arrowLeft': {
        this.textarea.selectionStart -= 1;
        this.textarea.selectionEnd = this.textarea.selectionStart;
        return;
      }
      case 'arrowRight': {
        this.textarea.selectionEnd += 1;
        this.textarea.selectionStart = this.textarea.selectionEnd;
        return;
      }
      case 'arrowDown': {
        const rows = this.calculateRows();
        const { position, rowIndex } = this.calculatePositionInRow(rows);
        const rightOffset = rows[rowIndex].length - position;
        const nextRowLeftOffset = Math.min(rows[rowIndex + 1]?.length || 0, position);
        this.textarea.selectionStart += rightOffset + nextRowLeftOffset;
        this.textarea.selectionEnd = this.textarea.selectionStart;
        return;
      }
      case 'arrowUp': {
        const rows = this.calculateRows();
        const { position, rowIndex } = this.calculatePositionInRow(rows);
        const prevRowRightOffset = Math.max((rows[rowIndex - 1]?.length || 0) - position, 0);
        this.textarea.selectionStart += -position - prevRowRightOffset;
        this.textarea.selectionEnd = this.textarea.selectionStart;
        return;
      }
      default: {
        key.toggleActive();
      }
    }
  }

  render() {
    this.keys.forEach((key) => key.render({
      capslock: this.capslock,
      shift: !!this.activeShift,
      ctrl: this.ctrl,
      alt: this.alt,
    }));
  }

  changeLang() {
    this.currentLang = this.currentLang === 'EN' ? 'RU' : 'EN';
    const dictionary = this.dictionaries[this.currentLang];
    localStorage.setItem('keyboard_lang', this.currentLang);
    this.keys.forEach((key) => key.reset(dictionary[key.code]));
    this.render();
  }

  insert(text) {
    const currPosition = this.textarea.selectionStart;
    const lastPosition = this.textarea.selectionEnd;
    const currentText = this.textarea.value.split('');
    if (currPosition === lastPosition) {
      currentText.splice(this.textarea.selectionStart, 0, text);
      this.textarea.value = currentText.join('');
      this.textarea.selectionStart = currPosition + text.length;
    } else {
      currentText.splice(currPosition, lastPosition - currPosition, text);
      this.textarea.value = currentText.join('');
      this.textarea.selectionStart = currPosition + text.length;
    }
    this.textarea.selectionEnd = this.textarea.selectionStart;
  }

  calculateRows() {
    const text = this.textarea.value;
    let temp = '';
    const rows = [];
    const maxCols = Math.floor((parseInt(getComputedStyle(this.textarea).width, 10) - 22) / 13.2);
    for (let i = 0; i < text.length; i += 1) {
      temp += text[i];
      if (temp.length === maxCols || text[i] === '\n') {
        rows.push(temp);
        temp = '';
      }
    }
    if (temp) {
      rows.push(temp);
    }
    return rows;
  }

  calculatePositionInRow(rows) {
    let position = this.textarea.selectionStart;
    let rowIndex = 0;
    for (let i = 0; i < rows.length; i += 1) {
      if (position > rows[i].length) {
        position -= rows[i].length;
      } else {
        rowIndex = i;
        break;
      }
    }
    return { position, rowIndex };
  }
}

const textarea = document.createElement('textarea');
const wrapper = document.createElement('div');
const text = document.createElement('p');
wrapper.classList.add('wrapper');
textarea.classList.add('textarea');
text.classList.add('message');
text.innerHTML = 'Для смены раскладки используйте ctrl + alt. <br> Клавиатура реализована для Windows. <br> "Залипание" клавишь shift, alt и ctrl так и задумано.';

const keyboard2 = new Keyboard2(DICTIONARIES, textarea);
document.body.append(wrapper);
wrapper.append(textarea);
wrapper.append(keyboard2.element);
wrapper.append(text);

window.addEventListener('keydown', (event) => {
  const key = keyboard2.keys.find((currentKey) => currentKey.code === event.code);
  if (!key) {
    return;
  }
  event.preventDefault();
  keyboard2.processAction(event.code);
  if (!key.isService || (key.isService && !key.isServiceHold)) {
    key.toggleActive();
  }
});
window.addEventListener('keyup', (event) => {
  const key = keyboard2.keys.find((currentKey) => currentKey.code === event.code);
  if (key && !key.isServiceHold) {
    key.removeActive();
  }
});

window.addEventListener('click', () => {
  textarea.focus();
});
