// get a reference to the sms or call radio buttons
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");
//create a variable that will keep track of the total bill
var callsTotal1 = 0;
var smsTotal1 = 0;
// var tot=0;
//add an event listener for when the add button is pressed
function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
    if (billItemType === "call"){
        callsTotal1 += 2.75;
        // tot +=2.75

    }
    else if (billItemType === "sms"){
        smsTotal1 += 0.75;
        // tot += 0.75;
    }


//in the event listener get the value from the billItemTypeRadio radio buttons
}
callTotalTwoElement.innerHTML = callsTotal1.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotal1.toFixed(2);
    var totalTwo = callsTotal1 + smsTotal1;
    totalTwoElement.innerHTML = totalTwo.toFixed(2);

    if (totalTwo >= 50){
// * add the appropriate value to the running total
totalTwoElement.classList.add("danger");
}
else if (totalTwo >= 30){
    totalTwoElement.classList.add("warning");
}
}

radioBillAddBtnElement.addEventListener('click',radioBillTotal);

// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
