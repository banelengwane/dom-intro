describe('The radioBill DOM function' , function(){
    it('should return 3.40 if user enteres selects / presses call and sms' , function(){
      var radioCaller = CalculateBill();

      radioCaller.callAndSMS('call');
      radioCaller.callAndSMS('sms');

      assert.equal(radioCaller.callSum(), 2.75);
      assert.equal(radioCaller.smsSum(), 0.65);
      assert.equal(radioCaller.sum(), 3.40);

    });

    it('should return 2.75 and do not count any other inputs' , function(){
      var radioCaller = CalculateBill();

      radioCaller.callAndSMS('call');
      radioCaller.callAndSMS('banele');
      radioCaller.callAndSMS(100);

      assert.equal(radioCaller.callSum(), 2.75);
      assert.equal(radioCaller.smsSum(), 0.00);
      assert.equal(radioCaller.sum(), 2.75);
    });

    it('should return 2.75, check wether the critical / warning was reached, and do not count any other inputs' , function(){
      var radioCaller = CalculateBill();

      radioCaller.callAndSMS('call');
      radioCaller.callAndSMS('banele');
      radioCaller.callAndSMS(100);

      assert.equal(radioCaller.callSum(), 2.75);
      assert.equal(radioCaller.smsSum(), 0.00);
      assert.equal(radioCaller.callSum(), 2.75);

      assert.equal(radioCaller.criticalReached(), false);

    });
});
