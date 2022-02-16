let calculateBtn = document.getElementById('calculateBtn')
let clearBtn = document.getElementById('clearBtn')

function gettingInput(param) {
    return document.getElementById(param);
}

function clear(){
    let food = gettingInput('foodCost');
    let rent = gettingInput('rentCost');
    let cloth = gettingInput('clothCost');
    let income = gettingInput('income');
    let totalExpense = gettingInput('totalExpenses');
    let balance = gettingInput('balance');
    gettingInput('hiddenText').style.display = 'none';
    gettingInput('hiddenMessage2').style.display = 'none';

    food.value = '';
    rent.value = '';
    cloth.value = '';
    income.value = '';
    totalExpense.innerText = '';
    balance.innerText = '';
}

calculateBtn.addEventListener('click', function () {

    let food = gettingInput('foodCost');
    let foodCost = food.value;

    let rent = gettingInput('rentCost');
    let rentCost = rent.value;

    let cloth = gettingInput('clothCost');
    let clothCost = cloth.value;

    // Income 
    let income = gettingInput('income');
    let incomeInput = parseFloat(income.value);
    let balance = gettingInput('balance');
    
    // Total Expense 
    let totalExpense = gettingInput('totalExpenses');
    let expense = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);

    // Validating   
    if (foodCost == "" || foodCost < 0 || rentCost == "" || rentCost < 0 || clothCost == "" || clothCost < 0 || isNaN(expense)){
        // console.log('please enter valid name'); 
        gettingInput('hiddenText').style.display = 'block';
    }

    // Validating again 
    if(expense> incomeInput){
        gettingInput('hiddenMessage2').style.display = 'block';
        
    }
    else{
        totalExpense.innerText = expense;
        let newBalance = incomeInput - expense;
        balance.innerText =newBalance;
        gettingInput('hiddenMessage2').style.display = 'none';

    }

})

// Clearing Fields 

clearBtn.addEventListener('click',function(){
    clear();
})




