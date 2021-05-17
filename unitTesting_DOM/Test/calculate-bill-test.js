describe("The Calculate Bill Factory Function" , function() {
    it ("should enter a string with 2 calls  separated with commas" , function(){

        assert.equal(5.5, BillCalculate("call,call"));

    });

    it ("should enter a string with 4 sms  separated with commas" , function(){
        
        assert.equal(3.00, BillCalculate("sms,sms,sms,sms"));

    });

    it ("should enter a string with 4 calls and 4 sms's  separated with commas" , function(){

        
        assert.equal(14.00, BillCalculate("sms,sms,sms,sms,call,call, call,call"));

    });

});