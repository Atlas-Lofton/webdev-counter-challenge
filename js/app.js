"use strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");


function incrementCount() {
count++;
 //document.querySelector(".increment-btn").innerCSS = .incrementBtn;
}



function decrementCount() {
    // Write the relevant code in this block
    count--;
}


function resetCount() {
    // Write the relevant code in this block
    count = 0;
}

function renderUpdatedCount() {
    countElement.innerText = count;
}

incrementBtn.addEventListener("click", function () {
    // Write code below this line
    count++;
    // STOP HERE
    renderUpdatedCount();
});

resetBtn.addEventListener("click", function () {
    // Write code below this line
    count=0;
    // STOP HERE
    renderUpdatedCount();
});

decrementBtn.addEventListener("click", function () {
    // Write code below this line
    count--;
    // STOP HERE
    renderUpdatedCount();
});
