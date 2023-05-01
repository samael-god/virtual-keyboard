// eslint-disable-next-line max-classes-per-file
import KEYS from './keys.js';

let currentLang = KEYS.EN_KEYS;
class Key2 {
  constructor(code, options) {
    this.element = document.createElement('div');
    this.element.style.gridArea = code;
    this.element.dataset.keyCode = code;
    this.element.classList.add('key');
    this.code = code;
    this.actionType = options.actionType;
    this.text = options.key;
    this.shiftText = options.shiftKey;
    this.active = false;
  }

  get isService() {
    return !!this.actionType;
  }

  get isServiceHold() {
    return this.actionType === 'shift' || this.actionType === 'capsLock' || this.actionType === 'langchange';
  }

  render(context) {
    const {
      shift, capslock, ctrl, alt,
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
    if (ctrl && alt) {
      // this.dictionary;
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

  constructor(dictionary, textarea) {
    this.textarea = textarea;
    this.keys = Object.entries(dictionary).map(([code, value]) => new Key2(code, value));
    this.element = document.createElement('div');
    this.element.classList.add('keyboard');
    this.keys.forEach((key) => this.element.append(key.element));
    this.element.addEventListener('mousedown', (event) => this.processAction(event.target.dataset.keyCode));
    this.render();
  }

  processAction(keyCode) {
    const key = this.keys.find((currentKey) => currentKey.code === keyCode);
    if (!key) {
      return;
    }
    if (!key.isService && !key.isServiceHold) {
      const currentPosition = this.textarea.selectionStart;
      const text = this.textarea.value.split('');
      text.splice(currentPosition, 0, key.value);
      this.textarea.value = text.join('');
      key.toggleActive();
      this.textarea.selectionStart = currentPosition + 1;
      this.textarea.selectionEnd = this.textarea.selectionStart;
      return;
    }
    switch (key.actionType) {
      case 'backspace': {
        key.toggleActive();
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
          this.shift = !this.shift;
          this.render();
          return;
        }
        key.toggleActive();
        this.activeShift = key;
        this.shift = !this.shift;
        this.render();
        return;
      }
      case 'enter': {
        key.toggleActive();
        const currPosition = this.textarea.selectionStart;
        const lastPosition = this.textarea.selectionEnd;
        const text = this.textarea.value.split('');
        if (currPosition === lastPosition) {
          text.splice(this.textarea.selectionStart, 0, '\n');
          this.textarea.value = text.join('');
          this.textarea.selectionStart = currPosition + 1;
        } else {
          text.splice(currPosition, lastPosition - currPosition, '\n');
          this.textarea.value = text.join('');
          this.textarea.selectionStart = currPosition;
        }
        this.textarea.selectionEnd = this.textarea.selectionStart;
        return;
      }
      case 'delete': {
        key.toggleActive();
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
        key.toggleActive();
        const currPosition = this.textarea.selectionStart;
        const lastPosition = this.textarea.selectionEnd;
        const text = this.textarea.value.split('');
        if (currPosition === lastPosition) {
          text.splice(currPosition, 0, ' ');
          this.textarea.value = text.join('');
          this.textarea.selectionStart = currPosition + 1;
        } else {
          text.splice(currPosition, lastPosition - currPosition, ' ');
          this.textarea.value = text.join('');
          this.textarea.selectionStart = currPosition + 1;
        }
        this.textarea.selectionEnd = this.textarea.selectionStart;

        return;
      }
      case 'tab': {
        key.toggleActive();
        const currPosition = this.textarea.selectionStart;
        const lastPosition = this.textarea.selectionEnd;
        const text = this.textarea.value.split('');
        if (currPosition === lastPosition) {
          text.splice(currPosition, 0, '    ');
          this.textarea.value = text.join('');
          this.textarea.selectionStart = currPosition + 4;
        } else {
          text.splice(currPosition, lastPosition - currPosition, '    ');
          this.textarea.value = text.join('');
          this.textarea.selectionStart = currPosition + 4;
        }
        this.textarea.selectionEnd = this.textarea.selectionStart;

        return;
      }
      case 'langchange': {
        if (key.text === 'Alt') {
          if (this.activeAlt && this.activeAlt !== key) {
            this.activeAlt.removeActive();
            key.toggleActive();
            this.activeAlt = key;
            if (this.ctrl) {
              console.log('pereklu4il');
              console.log(this);
              currentLang = KEYS.RU_KEYS;
              this.render();
            }
            return;
          }
          if (this.activeAlt && this.activeAlt === key) {
            key.toggleActive();
            this.activeAlt = false;
            this.alt = false;
            return;
          }
          this.alt = !this.alt;
          key.toggleActive();
          this.activeAlt = key;
          if (this.ctrl) {
            console.log('pereklu4il');
            console.log(this);
            currentLang = KEYS.RU_KEYS;
            this.render();
          }
          return;
        }
        if (key.text === 'Ctrl') {
          if (this.activeCtrl && this.activeCtrl !== key) {
            this.activeCtrl.removeActive();
            key.toggleActive();
            this.activeCtrl = key;
            if (this.alt) {
              console.log('pereklu4il');
              console.log(this);
              currentLang = KEYS.RU_KEYS;
              this.render();
            }
            return;
          }
          if (this.activeCtrl && this.activeCtrl === key) {
            key.toggleActive();
            this.activeCtrl = false;
            this.ctrl = false;
            return;
          }

          this.ctrl = !this.ctrl;
          key.toggleActive();
          this.activeCtrl = key;
          if (this.alt) {
            console.log('pereklu4il');
            console.log(this);
            currentLang = KEYS.RU_KEYS;
            this.render();
          }
          return;
        }
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
      shift: this.shift,
      ctrl: this.ctrl,
      alt: this.alt,
    }));
  }
}

const textarea = document.createElement('textarea');
const wrapper = document.createElement('div');
const text = document.createElement('p');
wrapper.classList.add('wrapper');
textarea.classList.add('textarea');
text.classList.add('message');
text.innerHTML = 'Для смены раскладки используйте ctrl + alt. <br> Клавиатура реализована для Windows. <br> Залипание клавишь shift, alt и ctrl так и задумано.';

const keyboard2 = new Keyboard2(currentLang, textarea);
document.body.append(wrapper);
// TODO add autofocus on textarea
wrapper.append(textarea);
wrapper.append(keyboard2.element);
wrapper.append(text);

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  keyboard2.processAction(event.code);
});
window.addEventListener('keyup', (event) => {
  const key = keyboard2.keys.find((currkey) => currkey.code === event.code);
  if (key && !key.isServiceHold) {
    key.removeActive();
  }
});

keyboard2.element.addEventListener('mousedown', (event) => {
  if (!event.target.classList.contains('key')) {
    return;
  }
  const key = keyboard2.keys.find((currkey) => currkey.code === event.target.getAttribute('data-key-code'));
  if (key && !key.isServiceHold) {
    // TODO Remove eventListener

    key.element.addEventListener('mouseleave', () => {
      key.removeActive();
    });
  }
});
keyboard2.element.addEventListener('mouseup', (event) => {
  if (!event.target.classList.contains('key')) {
    return;
  }

  const key = keyboard2.keys.find((currkey) => currkey.code === event.target.getAttribute('data-key-code'));
  if (!key.isServiceHold) {
    key.removeActive();
  }
});
window.addEventListener('click', () => {
  textarea.focus();
});
