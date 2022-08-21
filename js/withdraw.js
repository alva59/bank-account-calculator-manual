const btnWithdraw = document.getElementById('btn-withdraw').addEventListener('click', function () {

    // get the withdraw input field value
    const withdrawInputField = document.getElementById('withdraw-field');
    const withdrawInputFieldValueString = withdrawInputField.value;
    const withdrawInputFieldValue = parseFloat(withdrawInputFieldValueString);
    // console.log(withdrawInputFieldValue);



    // clear the withdraw field 
    withdrawInputField.value = '';

    // Set the withdraw input field value to the withdraw amount 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawAmountTextString = withdrawTotal.innerText;
    const withdrawAmount = parseFloat(withdrawAmountTextString);


    if (isNaN(withdrawInputFieldValue)) {
        alert("please enter a valid number less than or equal your remaining balance");
        return;
    }
    // Calculate the withdraw total amount 
    const withdrawAmountTotal = withdrawAmount + withdrawInputFieldValue;
    withdrawTotal.innerText = withdrawAmountTotal;



    // Get the balance total 
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);


    if (withdrawInputFieldValue > previousBalanceAmount) {
        alert('You can not withdraw more than your remaining balance');
        withdrawTotal.innerText = withdrawAmount;
    } else {
        // Calculate the balance total after withdraw the amount 
        const newBalanceTotal = previousBalanceAmount - withdrawInputFieldValue;
        previousBalance.innerText = newBalanceTotal;

    }
})