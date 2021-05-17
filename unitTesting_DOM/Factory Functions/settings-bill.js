    function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;
    
    function setCallCost(callCost){
        theCallCost = callCost;
    }

    function getCallCost(){
        return theCallCost;
    }

    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    function getSmsCost(){
        return theSmsCost;
    }

    function setWarningLevel(warning){
        theWarningLevel = warning;
    }
    function getWarningLevel(){
        return theWarningLevel;
    }

    function setCriticalLevel(critical){
        theCriticalLevel = critical;
    }
    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function makeCall(){
        if (!hasReachedCriticalLevel())
        return callCostTotal += theCallCost;
    }

    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost(){
        return callCostTotal;
    }

    function getTotalSmsCost() {
        return smsCostTotal;
    }

    function sendSms(){
        if (!hasReachedCriticalLevel())
        smsCostTotal += theSmsCost;
    }

    function hasReachedCriticalLevel(){
        return getTotalCost() >= getCriticalLevel();
        
    }

    function totalClassName(){
        if (hasReachedCriticalLevel()){
            return 'critical'
        }

        if (getTotalCost() >= getWarningLevel()){
            return 'warning'
        }
    }


    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName
    } 
}