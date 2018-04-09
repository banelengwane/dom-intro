// get a reference to the sms or call radio buttons
var billItemType = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callsTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");
var totalCostElem = document.querySelector(".totalTwo");
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
function radioBillTotal(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
      if (billItemType === "call"){
          callsTotal += 2.75
      }
      else if (billItemType === "sms"){
          smsTotal += 0.75;
      }

      //update the totals that is displayed on the screen.
      callsTotalElem.innerHTML = callsTotal.toFixed(2);
      smsTotalElem.innerHTML = smsTotal.toFixed(2);
      var totalCost = callsTotal + smsTotal;
      totalCostElem.innerHTML = totalCost.toFixed(2);

      //color the total based on the criteria
      if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
      }
      else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
      }
    }

}

radioBillAddBtn.addEventListener("click", radioBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
