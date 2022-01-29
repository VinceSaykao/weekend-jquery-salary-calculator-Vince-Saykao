$(document).ready(readyNow)


function readyNow() {
    $('.submitButton').on('click', submitButtonDo)



    // lastInput
    // idInput
    // titleInput
    // annualSalaryInput

};

let employees = [];

function addEmployee (fNameInput, lNameInput, iInput, tInput, sInput) {
    const newEmpObject = {
        first: fNameInput,
        last: lNameInput,
        id: iInput,
        title: tInput,
        annualSalary: sInput,
    };
    addEmployee.push(newEmpObject);
    return true;
}

function submitButtonDo() {
    console.log('You added', $('#nameInput').val());
    // tr <td>template literal tr
    $('#tableEmployees').append('<tr><td>' + $('#nameInput').val() + '</td><td>' + $('#lastInput').val() + '</td><td>' + + $('#idInput').val() + '</td><td>' + $('#titleInput').val() + '</td><td>' + $('#annualSalaryInput').val() + '</td></tr>' + '<td></td><button>${'Delete'}</button></td></td>');
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



