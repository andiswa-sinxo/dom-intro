//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");

// var calInstance = CalculateBills()

//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(){
    var billString = billStringElement.value;

    var total = BillCalculate(billString)

    if (total >= 20 && total < 30) {
         billTotalElement.classList.remove('critical');

        billTotalElement.classList.add('warning');
    }
    
    else if (total >= 30) {
        billTotalElement.classList.remove('warning');

        billTotalElement.classList.add('critical');
    }else{
           billTotalElement.classList.remove('warning');
   billTotalElement.classList.remove('critical');
    }

    billTotalElement.innerHTML = total.toFixed(2)

}

calculateBtnElement.addEventListener('click', calculateBtnClicked);
