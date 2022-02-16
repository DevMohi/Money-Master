let calculateBtn = document.getElementById('calculateBtn')


function gettingInput(param) {
    return document.getElementById(param);
}

calculateBtn.addEventListener('click', function () {

    let food = gettingInput('foodCost');
    let foodCost = food.value;

    let rent = gettingInput('rentCost');
    let rentCost = rent.value;

    let cloth = gettingInput('clothCost');
    let clothCost = cloth.value;

    // Validating 
    
    if (foodCost == "" || foodCost < 0 || rentCost == "" || rentCost < 0 || clothCost == "" || clothCost < 0 ){
        // console.log('please enter valid name'); 
        gettingInput('hiddenText').style.display = 'block';
    }
    
    // Total Expense 
    let totalExpense = gettingInput('totalExpenses');
    let expense = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    
    // Income 
    let income = gettingInput('income');
    let incomeInput = parseFloat(income.value);
    
    let balance = gettingInput('balance');
    
    
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
