describe('The Settings Bill DOM function' , function(){
    it('should return 10.50 as total, also return true for critial level reached if the total is more than the critical' , function(){
      var settingUser = calculateSettingBill();

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
      var settingUser = calculateSettingBill();

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
