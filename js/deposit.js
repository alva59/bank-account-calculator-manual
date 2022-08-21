document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInputField = document.getElementById('deposit-field');
    const depositInputFieldValueString = depositInputField.value;
    const depositInputFieldValue = parseFloat(depositInputFieldValueString);

    // Clear the deposit input field
    depositInputField.value = '';

    // Set the deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalElementText = depositTotalElement.innerText;
    const depositTotalElementValue = parseFloat(depositTotalElementText);

    // calculate the deposit total 
    const newDepositTotal = depositTotalElementValue + depositInputFieldValue;
    depositTotalElement.innerText = newDepositTotal;

    // calculate the balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalElementString);
    const newBalanceTotal = balanceTotal + depositInputFieldValue;
    balanceTotalElement.innerText = newBalanceTotal;
})