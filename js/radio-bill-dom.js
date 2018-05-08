// get a reference to the sms or call radio buttons
var billItem_Types = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBill_AddBtn = document.querySelector(".radioBillAddBtn");

var callsTotal_Elem = document.querySelector(".callTotalTwo");
var smsTotal_Elem = document.querySelector(".smsTotalTwo");
var totalCost_Elem = document.querySelector(".totalTwo");
//create a variable that will keep track of the total bill
var radio_bill = CalculateBill();
//add an event listener for when the add button is pressed
function radioBill_Total(){

    var checkedRadio_Btn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadio_Btn){
      // get the value entered in the billType textfield
      var billItem_Type = checkedRadio_Btn.value;



      radio_bill.callAndSMS(billItem_Type);
    // billItemType will be 'call' or 'sms'
    // if(Number.isNaN(Number(billItem_Type))){
    //   if (billItem_Type === "call"){
    //       callTotals += 2.75
    //   }
    //   else if (billItem_Type === "sms"){
    //       smsTotals += 0.75;
    //   }

      //update the totals that is displayed on the screen.
      callsTotal_Elem.innerHTML = radio_bill.callSum();
      smsTotal_Elem.innerHTML = radio_bill.smsSum();
      totalCost_Elem.innerHTML = radio_bill.sum();

      //color the total based on the criteria
      if (radio_bill.sum() >= 50){
        // adding the danger class will make the text red
        totalCost_Elem.classList.add("danger");
      }
      else if (radio_bill.sum() >= 30){
        totalCost_Elem.classList.add("warning");
      }
    }
    // }else {
    //   alert("Please select the 'sms' or 'call' radio button");
    // }


}

radioBill_AddBtn.addEventListener("click", radioBill_Total);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
