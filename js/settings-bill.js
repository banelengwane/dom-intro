// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
var callsElem = document.querySelector(".callTotalSettings");
var smsElem = document.querySelector(".smsTotalSettings");
var totCostElem = document.querySelector(".totalSettings");
//get a reference to the add button
var addBtn = document.querySelector(".button-primary");
//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callsCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
// create a variables that will keep track of all three totals.
var cTotal = 0;
var sTotal = 0;
var total = 0;
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed
function radioBillSettingTotal(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      var billItemTypeWithSettings = checkedRadioBtn.value;
      var callsCostSettingValue = callsCostSettingElem.value;
      var smsCostSettingValue = smsCostSettingElem.value;
      var warningLevelValue = warningLevelSettingElem.value;
      var criticalLevelValue = criticalLevelSettingElem.value;
    // billItemTypeWithSettings will be 'call' or 'sms'
      if (billItemTypeWithSettings === "call"){

          cTotal += callsCostSettingValue.toFixed(2);
      }
      else if (billItemTypeWithSettings === "sms"){

          sTotal += smsCostSettingValue.toFixed(2);
      }

      //update the totals that is displayed on the screen.
      callsElem.innerHTML = cTotal.toFixed(2);
      smsElem.innerHTML = sTotal.toFixed(2);
      var totCost = cTotal + sTotal;
      totCostElem.innerHTML = totCost.toFixed(2);

      //color the total based on the criteria
      if (totCost >= warningLevelValue){
        // adding the danger class will make the text red
        totCostElem.classList.add("danger");
      }
      else if (totCost >= criticalLevelValue){
        totCostElem.classList.add("warning");
      }
    }

}

addBtn.addEventListener("click", radioBillSettingTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
