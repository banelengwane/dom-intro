// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
var callsSettingElement = document.querySelector(".callCostSetting");
var smsSettingElement = document.querySelector(".smsCostSetting");
var warningSettingElement = document.querySelector(".warningLevelSetting");
var criticalSettingElement = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
var addBtn = document.querySelector(".addBtn");

var settingCallTotalElem = document.querySelector(".callTotalSettings");
var settingSMSTotalElem = document.querySelector(".smsTotalSettings");
var settingTotalElem = document.querySelector(".totalSettings");
//get a reference to the 'Update settings' button
var settingUpdateBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var settingCall = 0;
var settingSMS = 0;
var settingWarning = 0;
var settingCritical = 0;
// create a variables that will keep track of all three totals.
var settingCallTotal = 0;
var settiingSMSTotal = 0;
var settingTotal = 0;
//add an event listener for when the 'Update settings' button is pressed
settingUpdateBtn.addEventListener("click", settingsUpdater);

function settingsUpdater(){
  //update the values of the entered setting
  var newCallSetting = callsSettingElement.value;
  var newSMSSetting = smsSettingElement.value;
  var newWarningSetting = warningSettingElement.value;
  var newCriticalSetting = criticalSettingElement.value;

  //update the values of the variables which keep track all settings
  settingCall = parseFloat(newCallSetting);
  settingSMS = parseFloat(newSMSSetting);
  settingWarning = parseFloat(newWarningSetting);
  settingCritical = parseFloat(newCriticalSetting);
  if (settingTotal >= settingCritical) {
    
  }

}
//add an event listener for when the add button is pressed
function settingRadioBill(){

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
      // get the value entered in the billType textfield
      var billItemTypeWithSettings = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
      if(Number.isNaN(Number(billItemTypeWithSettings))){
        if (settingTotal === settingCritical) {

        }else{
          if (billItemTypeWithSettings === "call"){
              settingCallTotal += settingCall;
          }
          else if (billItemTypeWithSettings === "sms"){
              settiingSMSTotal += settingSMS;
          }

          //update the totals that is displayed on the screen.
          settingCallTotalElem.innerHTML = settingCallTotal.toFixed(2);
          settingSMSTotalElem.innerHTML = settiingSMSTotal.toFixed(2);
          settingTotal = settingCallTotal + settiingSMSTotal;
          settingTotalElem.innerHTML = settingTotal.toFixed(2);

          //color the total based on the criteria
          if (settingTotal > settingWarning){
            // adding the danger class will make the text red
            settingTotalElem.style.color = 'orange';
          }else if (settingTotal > settingCritical) {
            settingTotalElem.style.color = 'crimson';
          }
        }

      }else {
        alert("Please select the 'sms' or 'call' radio button");
      }
    }
}

addBtn.addEventListener("click", settingRadioBill);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
