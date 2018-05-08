describe('The Settings Bill DOM function' , function(){
  it('should return 3.20 as total, also return false for critial level reached if the total is less than the critical' , function(){
    var customer = CalculateSettingBill();
    customer.updateCall(2.50);
    customer.updateSMS(0.70);
    customer.updateWarning(10.00);
    customer.updateCritical(20.00);

    customer.settingEntry('call');
    customer.settingEntry('sms');


    assert.equal(customer.callsTotal(), 2.50);
    assert.equal(customer.smsTotal(), 0.70);
    assert.equal(customer.total(), 3.20);
    assert.equal(customer.criticalLevelReached(), false);


  });
    it('should return 10.50 as total, also return true for critial level reached if the total is more than the critical' , function(){
      var settingUser = CalculateSettingBill();

      settingUser.updateCall(2.50);
      settingUser.updateSMS(0.50);
      settingUser.updateWarning(5.00);
      settingUser.updateCritical(10.00);

      settingUser.settingEntry('call');
      settingUser.settingEntry('call');
      settingUser.settingEntry('call');
      settingUser.settingEntry('sms');
      settingUser.settingEntry('sms');
      settingUser.settingEntry('sms');
      settingUser.settingEntry('sms');
      settingUser.settingEntry('sms');
      settingUser.settingEntry('sms');

      assert.equal(settingUser.callsTotal(), 7.50);
      assert.equal(settingUser.smsTotal(), 3.00);
      assert.equal(settingUser.total(), 10.50);
      assert.equal(settingUser.criticalLevelReached(), true);


    });

    it('should return 10.50 as total, and other strings or numbers shouldnt affect the total '  , function(){
      var settingUser = CalculateSettingBill();

      settingUser.updateCall(2.50);
      settingUser.updateSMS(0.50);
      settingUser.updateWarning(5.00);
      settingUser.updateCritical(10.00);

      settingUser.settingEntry('call');
      settingUser.settingEntry('call');
      settingUser.settingEntry('call');
      settingUser.settingEntry('sms');
      settingUser.settingEntry('banele');
      settingUser.settingEntry('sms');
      settingUser.settingEntry('sms');
      settingUser.settingEntry('sms');
      settingUser.settingEntry('sms');
      settingUser.settingEntry('sms');
      settingUser.settingEntry(100);

      assert.equal(settingUser.callsTotal(), 7.50);
      assert.equal(settingUser.smsTotal(), 3.00);
      assert.equal(settingUser.total(), 10.50);
      assert.equal(settingUser.criticalLevelReached(), true);


    });
});
