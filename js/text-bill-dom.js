// get a reference to the textbox where the bill type is to be entered
var bill_TypeText = document.querySelector(".billTypeText");
var calls_TotalEle = document.querySelector(".callTotalOne");
var sms_TotalEle = document.querySelector(".smsTotalOne");
var total_CostEle = document.querySelector(".totalOne");

//get a reference to the add button this will add all
var text_TotalAddBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed
function text_BillTotal(){
    // get the value entered in the billType textfield
    var bill_TypeEntered = bill_TypeText.value.trim();
    // if(Number.isNaN(Number(bill_TypeEntered))){
    //   // update the correct total
    //   if (bill_TypeEntered === "call"){
    //       calls_Total += 2.75;
    //   }
    //   else if (bill_TypeEntered === "sms"){
    //       sms_Total += 0.75;
    //   }
    var theBill = calculateTextBill();
    theBill.callAndSMS(bill_TypeEntered);
      //update the totals that is displayed on the screen.
      calls_TotalEle.innerHTML = theBill.callSum();
      sms_TotalEle.innerHTML = theBill.smsSum();
      total_CostEle.innerHTML = theBill.sum();

      //color the total based on the criteria
      if (theBill.sum() >= 50){
        // adding the danger class will make the text red
        total_CostEle.classList.add("danger");
      }
      else if (theBill.sum() >= 30){
        total_CostEle.classList.add("warning");
      }else if (theBill.sum() < 20) {
        //hoping that this will bring the color of the text to black
        total_CostEle.classList.remove("warning");
        total_CostEle.classList.remove("danger");
      }
    // }else {
    //   alert("Please enter sms / call!");
    // }
}

text_TotalAddBtn.addEventListener('click', text_BillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
