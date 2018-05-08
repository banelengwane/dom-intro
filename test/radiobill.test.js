describe('The radioBill DOM function' , function(){
    it('should return 3.50 if user enteres selects / presses call and sms' , function(){
      var radioCaller = calculateRadioBill();

      radioCaller.radioEntry('call');
      radioCaller.radioEntry('sms');

      assert.equal(radioCaller.callBill(), 2.75);
      assert.equal(radioCaller.smsBill(), 0.75);
      assert.equal(radioCaller.allBill(), 3.50);

    });

    it('should return 2.75 and do not count any other inputs' , function(){
      var radioCaller = calculateRadioBill();

      radioCaller.radioEntry('call');
      radioCaller.radioEntry('banele');
      radioCaller.radioEntry(100);

      assert.equal(radioCaller.callBill(), 2.75);
      assert.equal(radioCaller.smsBill(), 0.00);
      assert.equal(radioCaller.allBill(), 2.75);
    });

    it('should return 2.75, check wether the critical / warning was reached, and do not count any other inputs' , function(){
      var radioCaller = calculateRadioBill();

      radioCaller.radioEntry('call');
      radioCaller.radioEntry('banele');
      radioCaller.radioEntry(100);

      assert.equal(radioCaller.callBill(), 2.75);
      assert.equal(radioCaller.smsBill(), 0.00);
      assert.equal(radioCaller.allBill(), 2.75);

      assert.equal(radioCaller.checkCritical(), false);

    });
});
