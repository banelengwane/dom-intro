// get a reference to the sms or call radio buttons
var billItemType = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var calls_TotalElem = document.querySelector(".callTotalTwo");
var sms_TotalElem = document.querySelector(".smsTotalTwo");
var total_CostElem = document.querySelector(".totalTwo");
//create a variable that will keep track of the total bill
var calls_Total = 0;
var sms_Total = 0;
//add an event listener for when the add button is pressed
function radioBillTotal(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      // get the value entered in the billItemType radioBillBtn
      var billItemType = checkedRadioBtn.value

    // billItemType will be 'call' or 'sms'
      if (billItemType === "call"){
          calls_Total += 2.75
      }
      else if (billItemType === "sms"){
          sms_Total += 0.75;
      }

      //update the totals that is displayed on the screen.
      calls_TotalElem.innerHTML = callsTotal.toFixed(2);
      sms_TotalElem.innerHTML = smsTotal.toFixed(2);
      var total_Cost = calls_Total + sms_Total;
      total_CostElem.innerHTML = total_Cost.toFixed(2);

      //color the total based on the criteria
      if (total_Cost >= 50){
        // adding the danger class will make the text red
        total_CostElem.classList.add("danger");
      }
      else if (total_Cost >= 30){
        total_CostElem.classList.add("warning");
      }
    }

}

radioBillAddBtn.addEventListener("click", radioBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
