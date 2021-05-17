function textInputBill(){
    var textTotal = 0;
    var callsTotal = 0;
    var smsTotal = 0;


    function textBillTotal(textString){
        // get the value entered in the billType textfield
        var billTypeEntered = textString.trim();
        // update the correct total
        if (billTypeEntered === "call"){
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }
    }

    function getTotalText(){
        textTotal=callsTotal+ smsTotal
        return textTotal;

    }

    function enterCallTotal(){
        return callsTotal;
    }

    function enterSmsTotal(){
        return smsTotal;
    }
    function warningCriticalLevel(){

        if (getTotalText() >= 10 && getTotalText() < 20){
            return 'warning'
        }
        else if (getTotalText() >= 20){
            return 'critical'
        }
    }

    return{
        textBillTotal,
        getTotalText,
        enterCallTotal,
        enterSmsTotal,
        warningCriticalLevel
}
}
