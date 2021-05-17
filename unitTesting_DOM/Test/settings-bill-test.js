describe("The bill with settings factory settings" , function() {
    describe("set value" , function() {

    it ("should set the call cost" , function(){
        let settingsBill=BillWithSettings();

        settingsBill.setCriticalLevel(20);
        settingsBill.setCallCost(2.75);
        assert.equal(2.75 , settingsBill.getCallCost());

        let settingsBillSecond=BillWithSettings();
        settingsBillSecond.setCallCost(1.75);
        assert.equal(1.75 , settingsBillSecond.getCallCost());
    })

    it ("should set the sms cost" , function(){
        let settingsBill=BillWithSettings();

        settingsBill.setSmsCost(0.75);
        assert.equal(0.75 , settingsBill.getSmsCost());

        let settingsBillSecond=BillWithSettings();
        settingsBillSecond.setSmsCost(0.65);
        assert.equal(0.65 , settingsBillSecond.getSmsCost());
    })

    it ("should set the call cost and the sms cost" , function(){
        let settingsBill=BillWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.75);

        assert.equal(0.75 , settingsBill.getSmsCost());
        assert.equal(2.75 , settingsBill.getCallCost());


        let settingsBillSecond=BillWithSettings(); 

        settingsBillSecond.setCallCost(3.75);
        settingsBillSecond.setSmsCost(1.75);

        assert.equal(1.75 , settingsBillSecond.getSmsCost());
        assert.equal(3.75 , settingsBillSecond.getCallCost());
    })

it ("should set the warning level" , function(){
    let settingsBill=BillWithSettings();

    settingsBill.setWarningLevel(30);

    assert.equal(30 , settingsBill.getWarningLevel());

})

it ("should set the critical level" , function(){
    let settingsBill=BillWithSettings();

    settingsBill.setCriticalLevel(60);

    assert.equal(60 , settingsBill.getCriticalLevel());

    })

    it ("should set the warning & critical level" , function(){
        let settingsBill=BillWithSettings();

        settingsBill.setWarningLevel(40);
        settingsBill.setCriticalLevel(80);

        assert.equal(40 , settingsBill.getWarningLevel());
        assert.equal(80 , settingsBill.getCriticalLevel());
    
        })

    });
    describe("use value" , function() {
    it ("Should use the call cost set" , function(){
        let settingsBill=BillWithSettings();

        settingsBill.setCriticalLevel(20);
        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.65);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(11.00 , settingsBill.getTotalCost());
        assert.equal(11.00 , settingsBill.getTotalCallCost());
        assert.equal(0.00 , settingsBill.getTotalSmsCost());
    
        })

        it ("Should use the call cost set for 3 calls at 1,50 each" , function(){
            let settingsBill=BillWithSettings();

            settingsBill.setCriticalLevel(20);
            settingsBill.setCallCost(1.50);
            settingsBill.setSmsCost(0.65);
            
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(4.50 , settingsBill.getTotalCost());
            assert.equal(4.50 , settingsBill.getTotalCallCost());
            assert.equal(0.00 , settingsBill.getTotalSmsCost());
        
            })

            it ("Should send 3 sms's at 0,45 each" , function(){
                let settingsBill=BillWithSettings();
    
                settingsBill.setCriticalLevel(20);
                settingsBill.setCallCost(1.50);
                settingsBill.setSmsCost(0.45);
                
                settingsBill.sendSms();
                settingsBill.sendSms();
                settingsBill.sendSms();
    
                assert.equal(1.35 , settingsBill.getTotalCost());
                assert.equal(0.00 , settingsBill.getTotalCallCost());
                assert.equal(1.35 , settingsBill.getTotalSmsCost());
            
                })

            it ("Should send 3 sms's at 0,90 each and make 2 calls at 2.50" , function(){
                let settingsBill=BillWithSettings();
                settingsBill.setCriticalLevel(20);
                settingsBill.setCallCost(2.50);
                settingsBill.setSmsCost(0.90);
        
                settingsBill.sendSms();
                settingsBill.sendSms();
                settingsBill.sendSms();
                settingsBill.makeCall();
                settingsBill.makeCall();
    
                assert.equal(7.70 , settingsBill.getTotalCost());
                assert.equal(5.00 , settingsBill.getTotalCallCost());
                assert.equal(2.70 , settingsBill.getTotalSmsCost());
            
                })
    });

    describe("the warning & critical level" , function() {
        it ("Should return a class name of the 'warning' if the warning level is reached" , function(){
            let settingsBill=BillWithSettings();

                settingsBill.setCallCost(2.50);
                settingsBill.setSmsCost(0.90);
                settingsBill.setWarningLevel(10);
                settingsBill.setCriticalLevel(20);
        
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();

            assert.equal('warning', settingsBill.totalClassName())

    });

    it ("Should return a class name of the 'critical' if the critical level has been reached" , function(){
        let settingsBill=BillWithSettings();

            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.90);
            settingsBill.setCriticalLevel(20);
            settingsBill.setWarningLevel(10);
    
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

        assert.equal('critical', settingsBill.totalClassName());
     
});

        it ("Should stop the Total Call cost from increasing when the critical level has been reached" , function(){
            let settingsBill=BillWithSettings();
    
                settingsBill.setCallCost(2.50);
                settingsBill.setSmsCost(0.90);
                settingsBill.setCriticalLevel(20);
              
        
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
    
            assert.equal('critical', settingsBill.totalClassName());
            assert.equal('20', settingsBill.getTotalCallCost());
         
    });
    it ("Should allow the total to increase after reaching the critical level & upping the critical level " , function(){
        let settingsBill=BillWithSettings();

            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.90);
            settingsBill.setWarningLevel(10);
            settingsBill.setCriticalLevel(20);
          
    
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

        assert.equal('critical', settingsBill.totalClassName());
        assert.equal('20', settingsBill.getTotalCallCost());
     
        settingsBill.setCriticalLevel(30);

        assert.equal('warning', settingsBill.totalClassName());

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
        assert.equal('27.5', settingsBill.getTotalCallCost());
          
});
});
});