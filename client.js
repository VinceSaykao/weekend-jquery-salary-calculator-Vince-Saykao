$(document).ready(readyNow)

// readyNow function
function readyNow() {
    $('.submitButton').on('click', submitButtonDo);
    $('#inputEmp').on('click', 'tr', deleteButton);

}; // end readyNow function


// function for actions for what submit button will do when clicked
function submitButtonDo() {
    console.log('You added', $('#nameInput').val(),$('#lastInput').val(),$('#idInput').val(),$('#titleInput').val(),$('#annualSalaryInput').val());

    $('#inputEmp').append('<tr><td>' + $('#nameInput').val() + '</td><td>' + $('#lastInput').val() + '</td><td>' + Number($('#idInput').val()) + '</td><td>' + $('#titleInput').val() + '</td><td>' + Number($('#annualSalaryInput').val()) + '</td><td>' + `<button class="deleteButton">DELETE</button>` + '</td></tr>');
    //empty the inputs-boxes
    $('#nameInput').val(''),$('#lastInput').val(''),$('#idInput').val(''),$('#titleInput').val(''),$('#annualSalaryInput').val('');
}; // end of submitButtonDo function

// deleteButton function will perform actions once delete is clicked
function deleteButton() {
    console.log('deleted')
    $(this).remove();

}; // end of deleteButton function



// new function for calculating monthly costs
function calculateMonthlyCost(costs){
    let total = 0;
    for(let person of employees){
        let monthly = person.annualSalary / 12;
        total = total + monthly;
    }

    let thatTotal = total

    $('#totalMoney').text(thatTotal);

    if(total > 20000){
        $('#totalMoney').addClass('redText');
    }
    else{
        $('#totalMoney').removeClass('redText');
    }
};


    




// console.log('You added', $('#lastInput').val());
    // console.log('You added', $('#idInput').val());
    // console.log('You added', $('#titleInput').val());
    // console.log('You added', $('#annualSalaryInput').val());



