$(document).ready(readyNow)


function readyNow() {
    $('.submitButton').on('click', submitButtonDo)


    // lastInput
    // idInput
    // titleInput
    // annualSalaryInput

};

function submitButtonDo (){
    console.log('You added', $('#nameInput').val());
    console.log('You added', $('#lastInput').val());
    console.log('You added', $('#idInput').val());
    console.log('You added', $('#titleInput').val());
    console.log('You added', $('#annualSalaryInput').val());
}
