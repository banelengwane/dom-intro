function calculateTextBill(){
  var calls_Total = 0;
  var sms_Total = 0;
  var total_cost = 0;
  function callAndSMS(user_bill){
    if (user_bill === "call"){
        calls_Total += 2.75;
    }else if (user_bill === 'sms') {
      sms_Total += 0.65;
    }
  }

  function totalOfCalls(){
    return calls_Total.toFixed(2);
  }

  function totalOfSMS(){
    return sms_Total.toFixed(2);
  }

  function callsAndSMSTotal(){
    return (calls_Total + sms_Total).toFixed(2);
  }

  return{
    callAndSMS:callAndSMS,
    callSum:totalOfCalls,
    smsSum:totalOfSMS,
    sum:callsAndSMSTotal,
  }
}
