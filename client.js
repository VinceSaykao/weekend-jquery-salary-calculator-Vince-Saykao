$(document).ready(readyNow)


function readyNow() {
    $('.submitButton').on('click', submitButtonDo)


    // lastInput
    // idInput
    // titleInput
    // annualSalaryInput

};

function submitButtonDo() {
    console.log('You added', $('#nameInput').val());
    // tr <td>template literal tr
    $('#tableEmployees').append('<tr><td>' + $('#nameInput').val() + '</td><td>' + $('#lastInput').val() + '</td><td>' + + $('#idInput').val() + '</td><td>' + $('#titleInput').val() + '</td><td>' + $('#annualSalaryInput').val() + '</td></tr>');
    // $('#emp0').html($('#nameInput').val());
    $('#nameInput').val(''),$('#lastInput').val(''),$('#idInput').val(''),$('#titleInput').val(''),$('#annualSalaryInput').val('') + //delete;
};

function deleteButton() {
    $('#colDelete').empty('');

};

//appending, targeting parent, which is <table> or id tableEmployee




// console.log('You added', $('#lastInput').val());
    // console.log('You added', $('#idInput').val());
    // console.log('You added', $('#titleInput').val());
    // console.log('You added', $('#annualSalaryInput').val());



