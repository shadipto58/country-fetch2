
function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldText);
    inputField.value = "";
    return inputFieldNumber;
}

function currentTotal(totalField, inputFieldNumber){
    const currentTotalField = document.getElementById(totalField);
    const currentTotalText = currentTotalField.innerText;
    const currentTotalNumber = parseFloat(currentTotalText);

    const updateTotal = inputFieldNumber + currentTotalNumber;  
    currentTotalField.innerText = updateTotal;
}

function currentBalance(){
    const balaceTotalInput = document.getElementById('balace-total');
    const balaceTotalText = balaceTotalInput.innerText;
    const balaceTotalNumber = parseFloat(balaceTotalText);
    return balaceTotalNumber;
}

function updateBalance(ammount,isAdd){
    const balaceTotalInput = document.getElementById('balace-total');
    const balaceTotalNumber = currentBalance();
    if (isAdd == true){
        balaceTotalInput.innerText = balaceTotalNumber + ammount;
    }
    else{
        balaceTotalInput.innerText = balaceTotalNumber - ammount;
    }  
}

document.getElementById('deposit-button').addEventListener('click', function(){
    //get deposit input
    const depositInputNumber = getInput('deposit-input');

    if(depositInputNumber > 0){
        currentTotal('deposit-total',depositInputNumber);
    updateBalance(depositInputNumber,true);   
    }  
});

document.getElementById('withdra-button').addEventListener('click', function(){
    //get withdraw input
    const withdrawInputNumber = getInput('withdraw-input');
    const getCurrentBalance = currentBalance();
    console.log(getCurrentBalance);
    if(withdrawInputNumber > 0 && getCurrentBalance >= withdrawInputNumber){
        currentTotal('withdraw-total',withdrawInputNumber);
        updateBalance(withdrawInputNumber,false);  
    }     
});