$(document).ready(readyNow)

let employees = [];

function newEmployee (fNameInput, lNameInput, iInput, tInput, sInput) {
    const newEmpObject = {
        first: fNameInput,
        last: lNameInput,
        id: Number(iInput),
        title: tInput,
        annualSalary: Number(sInput),
    };
    employees.push(newEmpObject);
    return true;
}; // end newEmployeeFunction

function readyNow() {
    $('.submitButton').on('click', submitButtonDo)
}; // end readyNow function

function submitButtonDo() {
    console.log('You added', $('#nameInput').val());
    // tr <td>template literal tr
    // $('#theEmpList').empty();
    let first = $('#nameInput').val();
    let last = $('#lastInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
 
    newEmployee(first,last,id,title,annualSalary);
    $('#inputEmp').empty();
    for (let emp of employees) {
    $('#inputEmp').append(`<tr><td>${emp.first}</td><td>${emp.last}</td><td>${emp.id}</td><td>${emp.title}</td><td>${emp.annualSalary}</td></tr>`);
    // <td>${emp.last}</td><td>${emp.id}</td><td>${emp.title}</td><td>${emp.annualSalary}</td>
    };
    // $('#emp0').html($('#nameInput').val());
    $('#nameInput').val(''),$('#lastInput').val(''),$('#idInput').val(''),$('#titleInput').val(''),$('#annualSalaryInput').val('');
    // deleteThis = $('td').append('<button class="addDelete">button</button>')
   
};

function deleteButton() {
    $('#colDelete').empty('');

};

//appending, targeting parent, which is <table> or id tableEmployee




// console.log('You added', $('#lastInput').val());
    // console.log('You added', $('#idInput').val());
    // console.log('You added', $('#titleInput').val());
    // console.log('You added', $('#annualSalaryInput').val());



