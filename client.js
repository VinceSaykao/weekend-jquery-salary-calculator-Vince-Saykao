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
    
}; // end newEmployeeFunction

// readyNow function
function readyNow() {
    $('.submitButton').on('click', submitButtonDo)
    $('#inputEmp').on('click', 'tr', deleteButton)
}; // end readyNow function


// function for actions for what submit button will do when clicked
function submitButtonDo() {
    console.log('You added', $('#nameInput').val(),$('#lastInput').val(),$('#idInput').val(),$('#titleInput').val(),$('#annualSalaryInput').val());
    // let first = $('#nameInput').val();
    // let last = $('#lastInput').val();
    // let id = $('#idInput').val();
    // let title = $('#titleInput').val();
    // let annualSalary = $('#annualSalaryInput').val();
 
    // employeeList(first,last,id,title,annualSalary);
   
    $('#inputEmp').append(
        '<tr><td>' 
    + $('#nameInput').val() 
    + '</td><td>' 
    + $('#lastInput').val() 
    + '</td><td>' + Number($('#idInput').val()) 
    + '</td><td>' + $('#titleInput').val() 
    + '</td><td>' + Number($('#annualSalaryInput').val()) 
    + '</td><td>' 
    + `<button class="deleteButton">DELETE</button>` 
        + '</td></tr>');

    //empty the inputs-boxes
    $('#nameInput').val(''),$('#lastInput').val(''),$('#idInput').val(''),$('#titleInput').val(''),$('#annualSalaryInput').val('');
    
}; // end of submitButtonDo function

function deleteButton() {
    console.log('deleted')
    $(this).remove();

    calculateMonthlyCost();

}; // end of deleteButton function



// new function for calculating monthly costs
function calculateMonthlyCost(){
    let sum = 0;
    $('#span').empty();
    for (let salary of employees) {
        sum += (salary.annualSalary / 12);
    } //end for 
    let num = sum.toFixed(2);
    $('#span').append(num);
    if (num > 20000) {
        $('#span').css("background-color", "red");
    } else {
        $('#span').css("background-color", '#skyblue');
    } // end if/else
} // end calculateSalary














