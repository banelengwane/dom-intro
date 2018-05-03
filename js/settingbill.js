function calculateSettingBill(){
  // create a variables that will keep track of all the settings
  var settingCall = 0;
  var settingSMS = 0;
  var settingWarning = 0;
  var settingCritical = 0;

  // create a variables that will keep track of all three totals.
  var settingCallTotal = 0;
  var settiingSMSTotal = 0;
  var settingTotal = 0;

  //new total
  var newTotal = 0;

  function updateCall(new_call){
    settingCall = parseFloat(new_call);
  }
  function updateSMS(new_sms){
    settingSMS = parseFloat(new_sms);
  }

  function updateWarning(new_warning){
    settingWarning = parseFloat(new_warning);
  }

  function updateCritical(new_critical){
    settingCritical = parseFloat(new_critical);
  }

  function settingEntry(enty){
    if (enty === "call"){
          settingCallTotal += settingCall;
    }else if (enty === "sms"){
          settiingSMSTotal += settingSMS;
    }
  }

  function settingCriticalBill(){
    return settingCritical;
  }
  function settingWarningBill(){
    return settingWarning.toFixed(2);
  }

  function settingsCallBill(){
    return settingCallTotal.toFixed(2);
  }

  function settingSMSBill(){
    return settiingSMSTotal.toFixed(2);
  }

  function settingsTotalBill(){
    settingTotal = settingCallTotal + settiingSMSTotal;
    return settingTotal.toFixed(2);
  }

  function criticalLevelReached(){
    return settingsTotalBill() >= settingCriticalBill();
  }

  return{
    criticalLevelReached,
    updateCall,
    updateSMS,
    updateWarning,
    updateCritical:updateCritical,
    settingEntry:settingEntry,
    settingCriticalBill,
    settingWarningBill:settingWarningBill,
    callsTotal:settingsCallBill,
    smsTotal:settingSMSBill,
    total:settingsTotalBill
  };
}
