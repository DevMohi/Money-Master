// getting all the buttons 
let calculateBtn = gettingId('calculateBtn')
let clearBtn = gettingId('clearBtn')
let saveBtn = gettingId('saveBtn');

// common gettingId function 
function gettingId(param) {
    return document.getElementById(param);
}
// Block or Hide 
function displayBlockOrHide(id , noneOrBlock){
    gettingId(id).style.display = noneOrBlock;
}
// hiding all the block messages 
function displayHidden(){
    displayBlockOrHide('hiddenMessage1', 'none');
    displayBlockOrHide('hiddenMessage2', 'none');
    displayBlockOrHide('hiddenMessage3', 'none');
    displayBlockOrHide('hiddenMessage4', 'none');
    displayBlockOrHide('hiddenMessage5', 'none');
}

// clear function 
function clear(){
// getting all the values and innerText to clear the fields.
    gettingId('foodCost').value = "";
    gettingId('rentCost').value = "";
    gettingId('clothCost').value = "";
    gettingId('income').value = "";
    gettingId('totalExpenses').innerText = "";
    gettingId('balance').innerText = "";
    gettingId('savingAmount').innerText = "";
    gettingId('remaining').innerText = "";
    gettingId('saveInput').value = "";
    displayBlockOrHide('hiddenMessage1', 'none');
    displayBlockOrHide('hiddenMessage2', 'none');
    displayBlockOrHide('hiddenMessage3', 'none');
    displayBlockOrHide('hiddenMessage4', 'none');
    displayBlockOrHide('hiddenMessage5', 'none');
}
// calculate onclick 
calculateBtn.addEventListener('click', function () {

    let food = gettingId('foodCost');
    let foodCost = food.value;
    let rent = gettingId('rentCost');
    let rentCost = rent.value;
    let cloth = gettingId('clothCost');
    let clothCost = cloth.value;

    // Income 
    let income = gettingId('income');
    let incomeInput = parseFloat(income.value);
    let balance = gettingId('balance');
    
    // Total Expense 
    let totalExpense = gettingId('totalExpenses');
    let expense = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);

    // Validating empty fields negative number and isNan 
    if (foodCost == "" || foodCost < 0 || rentCost == "" || rentCost < 0 || clothCost == "" || clothCost < 0 || incomeInput == "" || incomeInput<0 || isNaN(expense)){
        displayBlockOrHide('hiddenMessage1', 'block');
    }
    else{
        // Validating
        if(expense> incomeInput){
            displayBlockOrHide('hiddenMessage2', 'block');
            displayBlockOrHide('hiddenMessage1', 'none');   
            displayBlockOrHide('hiddenMessage5', 'none');
            balance.innerText = "";
        }
        else{
            totalExpense.innerText = expense;
            balance.innerText= "";
            displayBlockOrHide('hiddenMessage5', 'block');
            if(incomeInput > expense){
                let newBalance = incomeInput - expense;
                balance.innerText = newBalance;
                displayHidden();
            }
        }
    }
})

// Clearing Fields when clicked on clear button
clearBtn.addEventListener('click',function(){
    clear();
})

// Save button and its uses
saveBtn.addEventListener('click',function(){
    // getting all the values and innerText needed 
    let saveInput = gettingId('saveInput');
    let saveInputAmount  = parseFloat(saveInput.value);
    let savingAmount = gettingId('savingAmount');
    let remainingBalance = gettingId('remaining');
    let balance = gettingId('balance').innerText;
    let income = gettingId('income').value;
    let savedAmount = (saveInputAmount/100) * parseFloat(income);
    
    // validating isNan and if the value is negative
    if (isNaN(saveInputAmount) || saveInputAmount < 0){
        saveInput.value = '';
        displayBlockOrHide('hiddenMessage3', 'none');
        displayBlockOrHide('hiddenMessage4', 'block');
        savingAmount.innerText = '';
        remainingBalance.innerText = '';
    }
    else{
        if (savedAmount > parseFloat(balance)) {
            // console.log('error') 
            saveInput.value = '';
            displayBlockOrHide('hiddenMessage3', 'block');
            displayBlockOrHide('hiddenMessage4', 'none');
            savingAmount.innerText = '';
            remainingBalance.innerText = '';
        }
        else if (savedAmount < parseFloat(balance)) {
            savingAmount.innerText = savedAmount.toFixed(2);
            let balanceLeft = parseFloat(balance) - savingAmount.innerText;
            remainingBalance.innerText = balanceLeft.toFixed(2);
            displayHidden();
        }
        else{
            savingAmount.innerText = '';
            remainingBalance.innerText = '';
        }
        if(income == ""){
            displayBlockOrHide('hiddenMessage5', 'block');
        }
    }    
})



