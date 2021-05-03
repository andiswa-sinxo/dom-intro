// get a reference to the textbox where the bill type is to be entered
var billTypeTextElement = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");
//create a variable that will keep track of the total bill
var callsTotal = 0.00;
var smsTotal = 0.00;

//add an event listener for when the add button is pressed
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElement.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalOneElement.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
    var totalOne = callsTotal + smsTotal;
    totalOneElement.innerHTML = totalOne.toFixed(2);
    if (totalOne >= 50){
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    }
    else if (totalOne >= 30){
        totalOneElement.classList.add("warning");
    }
}

addToBillBtnElement.addEventListener('click', textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
