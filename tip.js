 const billAmountInput=document.getElementById('billAmount')
    const tipPercentageInput=document.getElementById('tipPercentage')
    const numPeopleInput=document.getElementById('numPeople')
    const calculateBtnBtn=document.getElementById('calculateBtn')
    const totalTipDisplay=document.getElementById('totalTip')
    const tipPerPersonDisplay=document.getElementById('tipPerPerson')

    calculateBtnBtn.addEventListener('click', calculateamount);

    function calculateamount(){
        const billAmount=parseFloat(billAmountInput.value);
        const tipPercentage=parseFloat(tipPercentageInput.value);
        const numPeople=parseInt(numPeopleInput.value);

        if (Number.isNaN(billAmount) ||
         Number.isNaN(tipPercentage) || 
         Number.isNaN(numPeople)) {
            alert('please enter a valid value')
            return
        }
            const totalTip=(billAmount*tipPercentage)/100;
            const tipPerPerson=totalTip/numPeople;
            totalTipDisplay.textContent=`total tip :$${totalTip.toFixed(2)}`;
            tipPerPersonDisplay.textContent=`tip for each member : $${tipPerPerson.toFixed(2)}`
        
    }

