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
var setUserBill = calculateSettingBill();
//add an event listener for when the 'Update settings' button is pressed
settingUpdateBtn.addEventListener("click", settingsUpdater);

function settingsUpdater(){
  //type check for all fields on the setting section

  //update the values of the entered setting
  var newCallSetting = callsSettingElement.value;
  var newSMSSetting = smsSettingElement.value;
  var newWarningSetting = warningSettingElement.value;
  var newCriticalSetting = criticalSettingElement.value;

  // if(Number.isNaN(Number(newCallSetting)) || Number.isNaN(Number(newSMSSetting)) || Number.isNaN(Number(newWarningSetting)) || Number.isNaN(Number(newCriticalSetting))){
  //   alert("something went wrong!");
  // }else {
    //update the values of the variables which keep track all settings
    setUserBill.updateCall(newCallSetting);
    setUserBill.updateSMS(newSMSSetting);
    setUserBill.updateWarning(newWarningSetting);
    setUserBill.updateCritical(newCriticalSetting);


    // create a variable to update and keep the settingTotal


    //color the total based on the criteria
    if (setUserBill.total() > setUserBill.settingWarningBill()){
      // adding the danger class will make the text red
      settingTotalElem.style.color = 'orange';
    }else if (setUserBill.total() > setUserBill.settingCriticalBill()) {
      settingTotalElem.style.color = 'red';
    }else if (setUserBill.total() < setUserBill.settingWarningBill()) {
      settingTotalElem.style.color = 'black';
    }
  // }

}
//add an event listener for when the add button is pressed
function settingRadioBill(){

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
      // get the value entered in the billType textfield
      var billItemTypeWithSettings = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
      // if(Number.isNaN(Number(billItemTypeWithSettings))){

        if (setUserBill.criticalLevelReached()) {
          settingTotalElem.style.color = 'red';
        }else{
          setUserBill.settingEntry(billItemTypeWithSettings);

          //update the totals that is displayed on the screen.
          settingCallTotalElem.innerHTML = setUserBill.callsTotal();
          settingSMSTotalElem.innerHTML = setUserBill.smsTotal();
          settingTotalElem.innerHTML = setUserBill.total();

          //color the total based on the criteria
          if (setUserBill.total() > setUserBill.settingWarningBill()){
            // adding the danger class will make the text red
            settingTotalElem.style.color = 'orange';
          }else if (setUserBill.total() > setUserBill.settingCriticalBill()) {
            settingTotalElem.style.color = 'red';
          }
      }
      // else {
      //   alert("Please select the 'sms' or 'call' radio button");
      // }
    }
}

addBtn.addEventListener("click", settingRadioBill);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
