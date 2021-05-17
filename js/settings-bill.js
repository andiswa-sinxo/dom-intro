// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
// get refences to all the settings fields
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
//get a reference to the add button
var radioBtn = document.querySelector(".radioBtn");
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
// var callCostSettingReference = 0;
// var smsCostSettingReference = 0;
// var warningLevelSettingReference = 0;
// var criticalLevelSettingReference = 0;

// create a variables that will keep track of all three totals.
// var callCost = 0;
// var smsCost = 0;
// var total = 0;
var settingsInstance = BillWithSettings()

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', function(){
    settingsInstance.setCallCost(Number(callCostSetting.value))
    settingsInstance.setSmsCost(Number(smsCostSetting.value))
    settingsInstance.setWarningLevel(Number (warningLevelSetting.value))
    settingsInstance.setCriticalLevel(Number(criticalLevelSetting.value))

    colorChange()
});
// function
function settingsBillTotal(){
    var settingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (settingsBtn){
        if(settingsBtn.value==="call"){
            settingsInstance.makeCall()
        }
        else if(settingsBtn.value === "sms"){
            settingsInstance.sendSms()
        }

       
   }
   callTotalSettings.innerHTML =  (settingsInstance.getTotalCallCost()).toFixed(2);
   smsTotalSettings.innerHTML = (settingsInstance.getTotalSmsCost()).toFixed(2);
   totalSettings.innerHTML = (settingsInstance.getTotalCost()).toFixed(2);
   colorChange()
}
//add an event listener for when the add button is pressed
radioBtn.addEventListener('click',settingsBillTotal);

function colorChange(){
        totalSettings.classList.remove("warning");
        totalSettings.classList.remove("critical");
        totalSettings.classList.add(settingsInstance.totalClassName());

   
}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
