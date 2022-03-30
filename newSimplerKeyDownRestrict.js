"use strict";

for (let i = 0; i < 3; i++) {
  document.getElementById(`digit${i}`).value = "00";
}

const minSecLimit = function (event) {
  //this adds a "0" and autotabs automatically if it encounters a digit > "5" (i.e. no digits that would violate min/sec limits)

  //if a digit over 5 is entered in min or sec
  if (
    event.target.id !== "digit0" &&
    event.target.value > 5 &&
    event.target.value.length < 2
  ) {
    console.log("MORE THAN 5!");
    document.getElementById(event.target.id).value = `0${event.target.value}`;
    if (event.target.id !== "digit2") {
      document
        .getElementById(`digit${parseInt(event.target.id.slice(5, 6)) + 1}`)
        .select();
    }
  }
};

/* let lastTabID = "digit0"; */

const autoTab = function (event) {
  //this resets the keydown counts as soon as key is depressed
  charCount = 0;
  /* console.log(`value - ${event.target.value}`); */
  console.log(`input value keyUp - ${event.target.value}`);
  console.log(`input length keyUp - ${event.target.value.length}`);
  console.log(`input id keyUp - ${event.target.id}`);

  minSecLimit(event);

  /* if (autoTabActive == true) { */
  let tabID = parseInt(event.target.id.slice(5, 6));
  /* let nextTabID = lastTabID.slice(0, 5) + `${String(tabID + 1)}`; */
  let nextTabID = "digit" + `${String(tabID + 1)}`;

  /* if (
      event.target.id !== "digit0" &&
      event.target.value > 5 &&
      event.target.value.length < 2
    ) {
      document.getElementById(event.target.id).value = `0${event.target.value}`;
    } */

  /* console.log(`which - ${event.which}`); */

  if (
    event.target.value.length > 1 &&
    event.which !== 9 &&
    event.which !== 16 &&
    event.which > 47 &&
    event.which < 58
  ) {
    if (event.target.id !== "digit2") {
      document.getElementById(nextTabID).select();
    }
  }
};
/* }; */
const currTabAnalyticsClosure = function () {};

let isNumber;

let autoTabActive;

let inputID = "digit0";

//this prevents numerous characters to return if key is left pressed down
let charCount = 0;

/* let inputType; */

const currTabAnalytics = function (event) {
  restrictInput(event);
  console.log(`isNumber - ${isNumber}`);
  //this part adds a counter to keydowns so that it restricts multiple characters returned in key is continiously pressed down
  if (event.which !== 9 && event.which !== 16) {
    charCount++;
  }

  /* } */

  /* inputType = "keyboard"; */
  console.log(`input value keyDown- ${event.target.value}`);
  console.log(`input length keyDown - ${event.target.value.length}`);
  console.log(`input id keyDown - ${event.target.id}`);
  inputID = event.target.id;
  /* //this avoids autotab when field already has 2 characters (allows to edit what has been inputted already)
  if (event.target.value.length > 1) {
    autoTabActive = false;
  } else {
    //if the key is tab - do not activate auto tab. this prevents a double tab situation
    if (event.which !== 9) {
      autoTabActive = true;
    }
  } */
  /* console.log(`autoTabActive - ${autoTabActive}`); */

  //if tab is pressed add a 0 - the length checker prevents an extra zero in "digit2" when shift-tabbing
  if (event.which == 9 && event.target.value.length < 2) {
    if (event.target.value.length < 1) {
      event.target.value = `00${event.target.value}`;
    } else {
      event.target.value = `0${event.target.value}`;
    }

    console.log(`input length when tab key- ${event.target.value.length}`);
    console.log(`input value when tab key- ${event.target.value}`);
  }

  /* console.log(`digit${parseInt(event.target.id.slice(5, 6)) + 1}`); */

  /* restrictInput(event); */

  if (isNumber && charCount < 2) {
    return true;
  } else {
    return false;
  }
};

const restrictInput = function (event) {
  if (
    (event.which > 47 && event.which < 58) ||
    event.which == 9 ||
    event.which == 16 ||
    event.which == 8 ||
    event.which == 46
  ) {
    isNumber = true;
  } else {
    isNumber = false;
  }
};
/* let lastClickID = "digit0"; */
const fieldClick = function (event) {
  /* console.log(`lastClickID - ${lastClickID}`); */
  console.log(`curr clicked ID - ${event.target.id}`);
  /* console.log(`click event - ${event.target.id}`);
  console.log(`keyboard event - ${inputID}`); */
  /* if (inputType == "keyboard") { */
  if (inputID !== event.target.id) {
    if (document.getElementById(inputID).value.length == 1) {
      document.getElementById(inputID).value = `0${
        document.getElementById(inputID).value
      }`;
    } else if (document.getElementById(inputID).value.length == 0) {
      document.getElementById(inputID).value = `00${
        document.getElementById(inputID).value
      }`;
    }
  } /* else {
      if (lastClickID !== event.target.id) {
        if (document.getElementById(lastClickID).value.length == 1) {
          document.getElementById(lastClickID).value = `0${
            document.getElementById(lastClickID).value
          }`;
        } else if (document.getElementById(lastClickID).value.length == 0) {
          document.getElementById(lastClickID).value = `00${
            document.getElementById(lastClickID).value
          }`;
        }
      }
    } */
  /* } */

  /* inputType = "mouse";
  lastClickID = event.target.id; */
};
