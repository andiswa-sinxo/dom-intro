// get a reference to the sms or call radio buttons
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");
//create a variable that will keep track of the total bill
// var callsTotal1 = 0;
// var smsTotal1 = 0;
// var tot=0;
var radioInst = radioBill()
//add an event listener for when the add button is pressed
function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
}
    radioInst.radioBillTotal(billItemType)
    


//in the event listener get the value from the billItemTypeRadio radio buttons

callTotalTwoElement.innerHTML = radioInst.selCallsTotal().toFixed(2);
    smsTotalTwoElement.innerHTML = radioInst.selSmsTotal().toFixed(2);
    totalTwoElement.innerHTML = radioInst.recBillTotal().toFixed(2);

// * add the appropriate value to the running total
totalTwoElement.classList.remove("critical");
// }
    totalTwoElement.classList.remove("warning");
    totalTwoElement.classList.add(radioInst.forWarningCritical())
// }
}

radioBillAddBtnElement.addEventListener('click',radioBillTotal);

// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
