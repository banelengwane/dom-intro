//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
//
function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value;
    //check whether the billString is valid
    // if(Number.isNaN(Number(billString))){
      //split the string
      // a variable for the total phone bill.

      var roundedBillTotal = calculateBillEvent(billString);
      //round to two decimals
      //var roundedBillTotal = calculateBillEvent();
      billTotalElement.innerHTML = roundedBillTotal;
      if (roundedBillTotal > 30){
            // adding the danger class will make the text red
            billTotalElement.style.color = 'crimson';
            //span.style.color = 'crimson';
        }
        else if (roundedBillTotal > 20){
            billTotalElement.style.color = 'orange';
            //span.style.color = 'orange';

        }else if (roundedBillTotal < 20) {
        //hoping that this will bring the color of the text to black
        billTotalElement.style.color = 'black';
        //span.style.color = 'black';
      }
    // }else {
    //   alert ("Please enter a bill string!");
    // }
}
//link the function to a click event on the calculate button
// add event listener
calculateBtn.addEventListener('click', calculateBtnClicked);
