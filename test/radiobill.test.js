describe('The radioBill DOM function' , function(){
    it('should return 3.50 if user enteres selects / presses call and sms' , function(){
      var radioCaller = calculateRadioBill();

      radioCaller.radioEntry('call');
      radioCaller.radioEntry('sms');

      assert.equal(radioCaller.callBill(), 2.75);
      assert.equal(radioCaller.smsBill(), 0.75);
      assert.equal(radioCaller.allBill(), 3.50);

    });
});
