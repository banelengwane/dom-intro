describe('The Settings Bill DOM function' , function(){
    it('should return 3.50 if user enteres selects / presses call and sms' , function(){
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



      assert.equal(settingUser.callsTotal(), 2.75);
      assert.equal(settingUser.smsTotal(), 0.75);
      assert.equal(settingUser.total(), 3.50);

    });
});
