// eslint-disable-next-line max-classes-per-file
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

  render(context) {
    const { shift, capslock } = context;
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
}

class Keyboard2 {
  capslock = false;

  shift = false;

  constructor(dictionary, textarea) {
    this.textarea = textarea;
    this.keys = Object.entries(dictionary).map(([code, value]) => new Key2(code, value));
    this.element = document.createElement('div');
    this.keys.forEach((key) => this.element.append(key.element));
    this.element.addEventListener('click', (event) => this.processAction(event.target.dataset.keyCode));
    this.render();
  }

  processAction(keyCode) {
    const key = this.keys.find((currkey) => currkey.code === keyCode);
    if (!key) {
      return;
    }
    if (!key.isService) {
      const currentPosition = this.textarea.selectionStart;
      const text = this.textarea.value.split('');
      text.splice(currentPosition, 0, key.value);
      this.textarea.value = text.join('');
      return;
    }
    switch (key.actionType) {
      case 'backspace': {
        this.textarea.value = this.textarea.value.slice(0, -1);
        return;
      }
      case 'capsLock': {
        this.capslock = !this.capslock;
        key.toggleActive();
        this.render();
        return;
      }
      case 'shift': {
        this.shift = !this.shift;
        key.toggleActive();
        this.render();
        return;
      }
      default: {
        throw new Error('Unexpected Error');
      }
    }
  }

  render() {
    this.keys.forEach((key) => key.render({ capslock: this.capslock, shift: this.shift }));
  }
}

const textarea = document.createElement('textarea');

document.body.append(textarea);

const keyboard2 = new Keyboard2(RU_KEYS, textarea);
document.body.append(keyboard2.element);
