export const STATUS = {
  ERROR: 0,
  OK: 1,
};

export const TYPE = {
  COMMAND: 0,
  RESPONSE: 1,
};

export const ID = {
  VERSION: 0,
  GET_VALUES: 1,
  GET_KEYS: 2,
  SET_KEY: 3,
};

export class Message {
  #type;
  #status;
  #id;
  #payload;

  constructor(type, status, id, payload) {
    this.#type = type;
    this.#status = status;
    this.#id = id;
    this.#payload = payload;
  }

  get type() {
    return this.#type;
  }

  get status() {
    return this.#status;
  }

  get id() {
    return this.#id;
  }

  get payload() {
    return this.#payload;
  }
}
