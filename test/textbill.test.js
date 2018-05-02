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
    });
});
