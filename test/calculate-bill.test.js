describe('The calculate-bill DOM function' , function(){
    it('should return 5.50 is user enteres two call entries' , function(){
        assert.equal(CalculateBillEvent('call,call,banele'), 5.50);
    });

    it('should return 0.75 is user enteres sms only' , function(){
        assert.equal(CalculateBillEvent('sms'), 0.75);
    });

    it('should return 2.75 is user enteres sms only' , function(){
        assert.equal(CalculateBillEvent('call'), 2.75);
    });

    it('should return 0.00 is user enteres if entry is not sms / call' , function(){
        assert.equal(CalculateBillEvent('banele'), 0.00);
    });

    it('should return message when user enteres if entry is 1000' , function(){
        assert.equal(CalculateBillEvent(1000), "Please enter a string");
    });

    it('should return message when user entry is empty' , function(){
        assert.equal(CalculateBillEvent(), "Please enter a string");
    });

});
