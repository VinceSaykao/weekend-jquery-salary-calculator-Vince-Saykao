$(document).ready(readyNow)


let employees = [];

function addEmployee (fNameInput, lNameInput, iInput, tInput, sInput) {
    const newEmpObject = {
        first: $(),
        last: lNameInput,
        id: Number(iInput),
        title: tInput,
        annualSalary: Number(sInput),
    };
    addEmployee.push(newEmpObject);
    return true;
}; // end newEmployeeFunction

function readyNow() {
    $('.submitButton').on('click', random)
}; // end readyNow function

function random() {
    let first = $('firstInput').val();
    $('.submitButton').on('click', submitButtonDo); 
    submitButtonDo();
    

};



function submitButtonDo() {
    console.log('You added', $('#nameInput').val());
    // tr <td>template literal tr
    // $('#theEmpList').empty();
   
    for (let emp of employees) {
    $('#tableEmployees').append(`<tr><td>${emp.first}</td></tr>`);
    // <td>${emp.last}</td><td>${emp.id}</td><td>${emp.title}</td><td>${emp.annualSalary}</td>
    };
    // $('#emp0').html($('#nameInput').val());
    // $('#nameInput').val(''),$('#lastInput').val(''),$('#idInput').val(''),$('#titleInput').val(''),$('#annualSalaryInput').val('');
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



