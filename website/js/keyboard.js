/*
  Hier wordt een de logica van een toetsenbord bewaard.
*/

import { KEY, TYPE } from "./constants.js";
import { DEFAULT_LAYOUT } from "./layout/default.js";
export const AANTAL_TOETSEN = 68; // een 65% toetsenbord heeft standaard 67 toetsen
const TOETS_CONFIG_DOM_ELEMENT = document.getElementById("toets-config");

export class Toets {
  #id;
  #key;
  type;
  value;
  analogValue;
  #domElement;

  constructor(
    id,
    key,
    type,
    value = undefined,
    analogValue = undefined,
    domElement = undefined,
  ) {
    this.#domElement = domElement;
    this.#id = id;
    this.type = type;
    this.value = value;
    this.analogValue = analogValue;
    this.key = key;

    this.#domElement.onclick = (event) => this.#showConfigurationHTML(event);
  }

  updateToets() {
    this.#domElement.innerText = this.#key;
  }

  #showConfigurationHTML(event) {
    TOETS_CONFIG_DOM_ELEMENT.innerHTML = `<div class="toets-info"><p>KEY: ${this.key}</p><p>TYPE: ${this.type}</p></div>`;
  }

  set key(key) {
    this.#key = key;
    this.updateToets();
  }

  get key() {
    return this.#key;
  }

  get id() {
    return this.#id;
  }
}

export class Keyboard {
  #layout;
  naam;
  aantalToetsen;
  #toetsen = [];

  constructor(
    layout,
    naam = "IT-LAB-analog-keyboard",
    aantalToetsen = AANTAL_TOETSEN,
  ) {
    this.#layout = layout;
    this.naam = naam;
    this.aantalToetsen = aantalToetsen;

    this.layoutToepassen();
  }

  layoutToepassen(layout = DEFAULT_LAYOUT) {
    for (let i = 0; i < this.aantalToetsen; i++) {
      let { key, type, value = undefined, analogValue = undefined } = layout[i];

      let toetsDOM = document.createElement("div");
      toetsDOM.className = "toets";

      if (
        (i == 15) |
        (i == 28) |
        (i == 55) |
        (i == 58) |
        (i == 59) |
        (i == 60)
      ) {
        toetsDOM.style = "grid-column: span 3;";
      } else if ((i == 13) | (i == 30) | (i == 42)) {
        toetsDOM.style = "grid-column: span 4;";
      } else if (i == 44) {
        toetsDOM.style = "grid-column: span 5;";
      } else if (i == 61) {
        toetsDOM.style = "grid-column: span 11;";
      }

      let toets = new Toets(i, key, type, value, analogValue, toetsDOM);
      this.#toetsen.push(toets);

      this.#layout.appendChild(toetsDOM);
    }
  }

  setToetsKey(id, key) {
    this.#toetsen[id].key = key;
  }
}
