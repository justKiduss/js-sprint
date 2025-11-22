Day 17 – Number Analyzer Web Application
Overview

Day 17 focused on building an interactive web application to track numbers entered by the user and compute real-time statistics. The day emphasized DOM manipulation, array operations, input validation, and dynamic updates in JavaScript.

Project Goals

Accept numeric input from the user dynamically.

Maintain a list of entered numbers.

Display key statistics:

Count

Sum

Average

Minimum

Maximum

Provide real-time updates as numbers are added.

Handle invalid input with clear error messages.

Features Implemented

Dynamic Number List Rendering

Numbers are stored in an array.

Each new number is appended to the displayed list immediately.

Numbers are visually separated.

function renderNumbers(){
    lists.innerHTML="";
    numbers.forEach((num)=>{
        let li = document.createElement("li");
        li.textContent = num + ", ";
        lists.appendChild(li);
    });
}


Statistics Calculation

Count, Sum, Average (rounded to 2 decimals), Minimum, Maximum.

Calculated every time a new number is added.

function sumOfArr(){ return numbers.reduce((a,b)=>a+b,0); }
function Average(){ return (sumOfArr()/numbers.length).toFixed(2); }
function minimum(){ return Math.min(...numbers); }
function maximum(){ return Math.max(...numbers); }


Input Validation and Error Handling

Prevents empty input.

Only numeric input is allowed.

Displays temporary error messages.

function checkError(msg){
    error.textContent = msg;
    setTimeout(() => error.textContent = "", 3000);
}


Event Handling

Click listener on the Add button.

Prevents form submission from refreshing the page.

Clears input field after adding.

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const raw = inputField.value.trim();
    if(raw === "") return checkError("empty fields are not allowed");
    const num = Number(raw);
    if(Number.isNaN(num)) return checkError("only numbers allowed");
    numbers.push(num);
    inputField.value = "";
    renderNumbers();
});

Skills Improved

DOM manipulation and element creation

Array operations and iteration

Calculating real-time statistics

Input validation and error handling

Managing application state dynamically in JavaScript

Status

Day 17 completed successfully.
The Number Analyzer is functional and dynamically updates stats.
Ready for Day 18 – Building the Next Project or Feature Expansion.