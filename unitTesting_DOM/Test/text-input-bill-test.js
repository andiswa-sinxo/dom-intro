describe("The Text input bill factory function" , function() {
    describe("enter value" , function() {
        it ("should be able to enter the call cost in the textbox" , function(){
            let textInput = textInputBill();

            textInput.textBillTotal('call');
            assert.equal(2.75, textInput.enterCallTotal());
            assert.equal(2.75, textInput.getTotalText());
    });

    it ("should be able to enter the 4 calls cost in the textbox" , function(){
        let textInput = textInputBill();

        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        
        assert.equal(11.00, textInput.enterCallTotal());
        assert.equal(11.00, textInput.getTotalText());
});

    it ("should be able to enter the sms cost in the textbox" , function(){
        let textInput = textInputBill();

        textInput.textBillTotal('sms');
        assert.equal(0.75, textInput.enterSmsTotal());
        assert.equal(0.75, textInput.getTotalText());
});

it ("should be able to enter 6 sms cost in the textbox" , function(){
    let textInput = textInputBill();

    textInput.textBillTotal('sms');
    textInput.textBillTotal('sms');
    textInput.textBillTotal('sms');
    textInput.textBillTotal('sms');
    textInput.textBillTotal('sms');
    textInput.textBillTotal('sms');
    assert.equal(4.5, textInput.enterSmsTotal());
    assert.equal(4.5, textInput.getTotalText());
});

it ("should be able to enter the call cost and sms cost in the textbox" , function(){
    let textInput = textInputBill();

    textInput.textBillTotal('call');
    textInput.textBillTotal('sms');
    assert.equal(2.75, textInput.enterCallTotal());
    assert.equal(3.5, textInput.getTotalText());
    assert.equal(0.75, textInput.enterSmsTotal());
});

it ("should be able to enter the 2 calls cost and 2 sms cost in the textbox" , function(){
    let textInput = textInputBill();

    textInput.textBillTotal('call');
    textInput.textBillTotal('call');
    textInput.textBillTotal('sms');
    textInput.textBillTotal('sms');
    assert.equal(5.5, textInput.enterCallTotal());
    assert.equal(7.00, textInput.getTotalText());
    assert.equal(1.5, textInput.enterSmsTotal());
});

describe("warning & critical" , function() {
    it ("should return 'warning' for 4 calls if the warning level is reached" , function(){
        let textInput = textInputBill();

        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');

        assert.equal('warning', textInput.warningCriticalLevel());
    });

    it ("should return 'critical' for 8 calls if the critical level is reached" , function(){
        let textInput = textInputBill();

        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');

        assert.equal('critical', textInput.warningCriticalLevel());
    });

    it ("should return 'warning' for 15 sms's if the warning level is reached" , function(){
        let textInput = textInputBill();

        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');

        assert.equal('warning', textInput.warningCriticalLevel());
    });

    it ("should return 'critical' for 30 sms's if the critical level is reached" , function(){
        let textInput = textInputBill();

        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');

        assert.equal('critical', textInput.warningCriticalLevel());
    });

    it ("should return 'warning' for 2 calls and 6 sms's if the warning level is reached" , function(){
        let textInput = textInputBill();

        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        

        assert.equal('warning', textInput.warningCriticalLevel());
    });

    it ("should return 'critical' for 4 calls and 12 sms's if the critical level is reached" , function(){
        let textInput = textInputBill();

        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('call');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        textInput.textBillTotal('sms');
        

        assert.equal('critical', textInput.warningCriticalLevel());
    });

});
});
});