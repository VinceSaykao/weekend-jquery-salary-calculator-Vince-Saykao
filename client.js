$(document).ready(readyNow)

let employees = [];

function employeeList (fNameInput, lNameInput, iInput, tInput, sInput) {
    const newEmpObject = {
        first: fNameInput,
        last: lNameInput,
        id: Number(iInput),
        title: tInput,
        annualSalary: Number(sInput),
    };
    employees.push(newEmpObject);
    calculateMonthlyCost();
    return true;
}; // end newEmployeeFunction

function readyNow() {
    $('.submitButton').on('click', submitButtonDo)
    $('#inputEmp').on('click', 'tr', deleteButton)
}; // end readyNow function

function submitButtonDo() {
    console.log('You added', $('#nameInput').val(),$('#lastInput').val(),$('#idInput').val(),$('#titleInput').val(),$('#annualSalaryInput').val());
    // let first = $('#nameInput').val();
    // let last = $('#lastInput').val();
    // let id = $('#idInput').val();
    // let title = $('#titleInput').val();
    // let annualSalary = $('#annualSalaryInput').val();
 
    // employeeList(first,last,id,title,annualSalary);
   
    
    $('#inputEmp').append('<tr><td>' + $('#nameInput').val() + '</td><td>' + $('#lastInput').val() + '</td><td>' + Number($('#idInput').val()) + '</td><td>' + $('#titleInput').val() + '</td><td>' + Number($('#annualSalaryInput').val()) + '</td><td>' + `<button class="deleteButton">DELETE</button>` + '</td></tr>');
    //empty the inputs-boxes
    $('#nameInput').val(''),$('#lastInput').val(''),$('#idInput').val(''),$('#titleInput').val(''),$('#annualSalaryInput').val('');
 
   
};

function deleteButton() {
    console.log('deleted')
    $(this).remove();

};


// new function
function calculateMonthlyCost(){
    let total = 0;
    for(let person of employees){
        let monthly = person.annualSalary / 12;
        total = total + monthly;
    }

    let thatTotal = total.toFixed(2).toString().replace();

    $('#totalMoney').text(thatTotal);

    if(total > 20000){
        $('#totalMoney').addClass('redText');
    }
    else{
        $('#totalMoney').removeClass('redText');
    }
}

//appending, targeting parent, which is <table> or id tableEmployee




// console.log('You added', $('#lastInput').val());
    // console.log('You added', $('#idInput').val());
    // console.log('You added', $('#titleInput').val());
    // console.log('You added', $('#annualSalaryInput').val());



