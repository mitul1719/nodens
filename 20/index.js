class OwnEventEmitter {
  #events; //private slot

  constructor() {
    this.#events = {};
  }

  on(name, cb) {
    if (this.#events[name]) {
      this.#events[name].push(cb);
    } else {
      this.#events[name] = [];
      this.#events[name].push(cb);
    }
  }

  getEvents() {
    return this.#events;
  }

  removeAllListenners(name) {
    this.#events[name] = [];
  }

  emit(name) {
    this.#events[name].forEach((cb) => cb());
  }
}
module.exports = new OwnEventEmitter();
