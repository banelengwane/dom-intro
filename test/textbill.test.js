describe('The text-bill DOM function' , function(){
    it('should return 11.00 is user enteres 4 call entries' , function(){
      var bill = calculateTextBill();
      bill.callAndSMS('call');
      bill.callAndSMS('call');
      bill.callAndSMS('call');
      bill.callAndSMS('call');
      bill.callAndSMS('sms');
      bill.callAndSMS('sms');
      bill.callAndSMS('sms');
      bill.callAndSMS('sms');
      assert.equal(bill.callSum(), 11.00);
      assert.equal(bill.smsSum(), 2.60);
      assert.equal(bill.sum(), 13.60);
      assert.equal(bill.criticalReached(), false);
      assert.equal(bill.warningReached(), false);

    });

    it('should return 5.50 for the total and all other strings should be ignored' , function(){
      var bill1 = calculateTextBill();
      bill1.callAndSMS('call');
      bill1.callAndSMS('call');
      bill1.callAndSMS(1000);
      bill1.callAndSMS('banele');

      assert.equal(bill1.callSum(), 5.50);
      assert.equal(bill1.smsSum(), 0.00);
      assert.equal(bill1.sum(), 5.50);
    });

    it('should return 55.00 is user enteres 20 call entries and check for the critical level if they are reached' , function(){
      var bill2 = calculateTextBill();
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      bill2.callAndSMS('call');
      assert.equal(bill2.callSum(), 55.00);
      assert.equal(bill2.smsSum(), 0.0);
      assert.equal(bill2.sum(), 55.00);
      assert.equal(bill2.criticalReached(), false);
      assert.equal(bill2.warningReached(), false);

    });
});
