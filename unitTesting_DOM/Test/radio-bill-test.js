describe("The Radio Button Bill factory function " , function() {
        it ("Should be able to select the call cost in the bill type" , function(){
            let radioBtn = radioBill();

            radioBtn.radioBillTotal('call');

            assert.equal(2.75, radioBtn.selCallsTotal());
            assert.equal(2.75, radioBtn.recBillTotal());
    });

    it ("Should be able to select 4 calls cost in the bill type" , function(){
        let radioBtn = radioBill();

        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');

        assert.equal(11.00, radioBtn.selCallsTotal());
        assert.equal(11.00, radioBtn.recBillTotal());
});

    it ("Should be able to select the sms cost in the bill type" , function(){
        let radioBtn = radioBill();

        radioBtn.radioBillTotal('sms');

        assert.equal(0.75, radioBtn.selSmsTotal());
        assert.equal(0.75, radioBtn.recBillTotal());
});


it ("Should be able to select 5 sms's cost in the bill type" , function(){
    let radioBtn = radioBill();

    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');

    assert.equal(3.75, radioBtn.selSmsTotal());
    assert.equal(3.75, radioBtn.recBillTotal());
});

it ("Should be able to select the call and sms cost in the bill type" , function(){
    let radioBtn = radioBill();

    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('call');

    assert.equal(0.75, radioBtn.selSmsTotal());
    assert.equal(2.75, radioBtn.selCallsTotal());
    assert.equal(3.5, radioBtn.recBillTotal());
});

it ("Should be able to select 3 call and 3 sms cost in the bill type" , function(){
    let radioBtn = radioBill();

    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');

    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');

    assert.equal(2.25, radioBtn.selSmsTotal());
    assert.equal(8.25, radioBtn.selCallsTotal());
    assert.equal(10.5, radioBtn.recBillTotal());
});

describe("warning and critical" , function() {
    it ("should return 'warning' for 6 calls if the warning level is reached" , function(){
        let radioBtn = radioBill();

        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');

        assert.equal('warning', radioBtn.forWarningCritical())
            
        }); 

   it ("should return 'critical' for 13 calls if the critical level is reached" , function(){
        let radioBtn = radioBill();


        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');
        radioBtn.radioBillTotal('call');

            assert.equal('critical', radioBtn.forWarningCritical());
        });

    it ("should return 'warning' for 20 sms's if the warning level is reached" , function(){
        let radioBtn = radioBill();
    
        
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');  
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');

    
            assert.equal('warning', radioBtn.forWarningCritical());
        });

        it ("should return 'critical' for 40 sms's if the critical level is reached" , function(){
            let radioBtn = radioBill();
    
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');  
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');  
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');

            assert.equal('critical', radioBtn.forWarningCritical());
        });

    it ("should return 'warning' for 4 calls and 12 sms's if the warning level is reached" , function(){
        let radioBtn = radioBill();

    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
            
    
            assert.equal('warning', radioBtn.forWarningCritical());
        });

        it ("should return 'critical' for 8 calls and 24 sms's if the critical level is reached" , function(){
            let radioBtn = radioBill();
    
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('call');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    radioBtn.radioBillTotal('sms');
    
            assert.equal('critical', radioBtn.forWarningCritical());
        });
});
});