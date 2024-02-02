/*const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let userChar = 0;

const updateCounter = () => { 
    alert("Subscribe");
};


charVal.addEventListener("keyup" , () => updateCounter());
*/


const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCoutn = document.getElementById("remaining-counter");

let char = 0;

// to update the character on screen
const updateCounter = () => {
 userChar = charval.value.length;

 totalCount.innerText = userChar;

 remainingCoutn.innerText = 150 - userChar;
};

charval.addEventListener("keyup", () => updateCounter());

const copyText = () => {
    charval.select();
    navigator.clipboard.writeText(charval.value);
};