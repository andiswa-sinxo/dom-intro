// get a reference to the textbox where the bill type is to be entered
var billTypeTextElement = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");
//create a variable that will keep track of the total bill
var instaText = textInputBill()
//add an event listener for when the add button is pressed

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElement.value.trim();
   
    instaText.textBillTotal(billTypeEntered)
    
    //update the totals that is displayed on the screen.
    callTotalOneElement.innerHTML = instaText.enterCallTotal().toFixed(2);
    smsTotalOneElement.innerHTML = instaText.enterSmsTotal().toFixed(2);
    
    totalOneElement.innerHTML = instaText.getTotalText().toFixed(2);
        // adding the danger class will make the text red
        totalOneElement.classList.remove("critical");
    // }
        totalOneElement.classList.remove("warning");
    
        totalOneElement.classList.add(instaText.warningCriticalLevel())
    // }
}

addToBillBtnElement.addEventListener('click', textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
