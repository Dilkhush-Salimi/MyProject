 const dice=document.getElementById('dice')
    const rollButton=document.getElementById('rollButton')
    const resultMessagess=document.getElementById('resultMessagess')
    rollButton.addEventListener('click', rollDice);

    const diceFace=["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685"];
    function rollDice(){
        const randomIndex=Math.floor(Math.random()*6);
        dice.textContent=diceFace[randomIndex];
        resultMessagess.textContent=`you rolled ${randomIndex+1}`
    }