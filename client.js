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
    $('#inputEmp').on('click', '.emp1', deleteButton)
}; // end readyNow function

function submitButtonDo() {
    console.log('You added', $('#nameInput').val(),$('#lastInput').val(),$('#idInput').val(),$('#titleInput').val(),$('#annualSalaryInput').val());
    let first = $('#nameInput').val();
    let last = $('#lastInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
 
    employeeList(first,last,id,title,annualSalary);
 
    $('#inputEmp').empty();
    for (let emp of employees) {
    $('#inputEmp').append(`<tr class="emp1"><td>${emp.first}</td><<td>${emp.last}</td><td>${emp.id}</td><td>${emp.title}</td><td>${emp.annualSalary}</td><td><button class="addDelete">Delete</button></td></tr>`);
    // <td>${emp.last}</td><td>${emp.id}</td><td>${emp.title}</td><td>${emp.annualSalary}</td>
    };
    // $('#emp0').html($('#nameInput').val());

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



