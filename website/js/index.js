/*
  Hieruit wordt alles aangroepen.
*/

import { TEST_KEY } from "./constants.js";
import { Keyboard } from "./keyboard.js";

let layout = document.getElementById("layout");
let keyboard = new Keyboard(layout);

console.log(TEST_KEY.KEY_A.code);
console.log(TEST_KEY.KEY_A.code << 1);
