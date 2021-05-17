function radioBill(){
    var callsTotal1 = 0;
    var smsTotal1 = 0;
    var billTotal = 0;  


function radioBillTotal(billButton){
    // var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
// if (checkedRadioBtn){
    var billItemType = billButton
    // billItemType will be 'call' or 'sms'
    if (billItemType === "call"){
        callsTotal1 += 2.75;
        // tot +=2.75

    }
    else if (billItemType === "sms"){
        smsTotal1 += 0.75;
        // tot += 0.75;
    }
}

function selCallsTotal(){
    return callsTotal1
}

function selSmsTotal(){
    return smsTotal1
}

function recBillTotal(){
    billTotal=callsTotal1+ smsTotal1
    return billTotal
}

function forWarningCritical(){
    if (recBillTotal() >= 15 && recBillTotal() < 25){
        return 'warning'
    }
    else if (recBillTotal() >= 25){
        return 'critical'
    }
}
    return {
        radioBillTotal,
        selCallsTotal,
        selSmsTotal,
        recBillTotal,
        forWarningCritical


    }
    }
