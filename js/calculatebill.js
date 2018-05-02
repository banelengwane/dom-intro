function calculateBillEvent(bill){
    //test the string if its really a string
    var errorMessage = "Please enter a string";
    // if(typeof bill === 'string'){
      //split the string
      var billItems = bill.split(",");
      // a variable for the total phone bill.
      var billTotal = 0;
      //loop over all the bill items
      for (var i=0;i<billItems.length;i++){
          var billItem = billItems[i].trim();
          if (billItem === "call"){
              billTotal += 2.75;
          }
          else if (billItem === "sms"){
              billTotal += 0.75;
          }
      }
      return billTotal.toFixed(2);

    // }else{
    //   return errorMessage;
    // }
}
