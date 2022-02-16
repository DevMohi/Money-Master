// getting all the buttons 
let calculateBtn = gettingId('calculateBtn')
let clearBtn = gettingId('clearBtn')
let saveBtn = document.getElementById('saveBtn');

// common gettingId function 
function gettingId(param) {
    return document.getElementById(param);
}

// clear function 
function clear(){
    // getting all the inputs and innerText 
    let food = gettingId('foodCost');
    let rent = gettingId('rentCost');
    let cloth = gettingId('clothCost');
    let income = gettingId('income');
    let totalExpense = gettingId('totalExpenses');
    let balance = gettingId('balance');
    let savingAmount = gettingId('savingAmount');
    let remainingBalance = gettingId('remaining');
    let saveInput = gettingId('saveInput');
    gettingId('hiddenMessage1').style.display = 'none';
    gettingId('hiddenMessage2').style.display = 'none';
    gettingId('hiddenMessage3').style.display = 'none';
    gettingId('hiddenMessage4').style.display = 'none';


    // Clearing all the inputs and innerText 
    food.value = '';
    rent.value = '';
    cloth.value = '';
    income.value = '';
    totalExpense.innerText = '';
    balance.innerText = '';
    savingAmount.innerText = '';
    remainingBalance.innerText = '';
    saveInput.value = '';
    
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
    if (foodCost == "" || foodCost < 0 || rentCost == "" || rentCost < 0 || clothCost == "" || clothCost < 0 || income== "" || income<0 || isNaN(expense)){
        // console.log('please enter valid name'); 
        clear();
        gettingId('hiddenMessage1').style.display = 'block';
    }
    else{

        // Validating
        if(expense> incomeInput){
            clear();
            gettingId('hiddenMessage2').style.display = 'block';
            
        }
        else{
            totalExpense.innerText = expense;
            let newBalance = incomeInput - expense;
            balance.innerText =newBalance;
            gettingId('hiddenMessage2').style.display = 'none';
            
        }
        
    }
})

// Clearing Fields 

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
        gettingId('hiddenMessage3').style.display = 'none';
        gettingId('hiddenMessage4').style.display = 'block';
    }
    else{
        if (savedAmount > parseFloat(balance)) {
            // console.log('error') 
            saveInput.value = '';
            gettingId('hiddenMessage3').style.display = 'block';
            gettingId('hiddenMessage4').style.display = 'none';

        }
        else {
            savingAmount.innerText = savedAmount;
            remainingBalance.innerText = parseFloat(balance) - savingAmount.innerText;
            gettingId('hiddenMessage3').style.display = 'none';
            gettingId('hiddenMessage4').style.display = 'none';

        }
    }    
})



