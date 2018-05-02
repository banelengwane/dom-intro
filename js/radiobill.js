function calculateRadioBill(){
  var callTotals = 0;
  var smsTotals = 0;
  var totalCosts = 0;

  function radio(radioSelected){
    if (radioSelected === "call"){
        callTotals += 2.75;
    }
    else if (radioSelected === "sms"){
        smsTotals += 0.75;
    }
  }

  function allCalls(){
    return callTotals.toFixed(2);
  }

  function allSMS(){
    return smsTotals.toFixed(2);
  }

  function allTotals(){
    totalCosts = callTotals + smsTotals;
    return totalCosts.toFixed(2);
  }

  return {
    radioEntry:radio,
    callBill:allCalls,
    smsBill:allSMS,
    allBill:allTotals
  };
}
