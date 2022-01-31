$(document).ready(readyNow)

// creating employee object/properties information
class newEmployeeFunction {
    constructor(firstName, lastName, employeeId, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.title = title;
        this.annualSalary = annualSalary;

    }
};  // end newEmployeeFunction

// global scope for employees array
let employees = [];

// readyNow function
function readyNow() {
    $('.submitButton').on('click', submitButtonDo);
    $('#inputEmp').on('click', 'tr', deleteButton);
    $('#deleteButton').on('click', handleDelete);
}; // end readyNow function

// function runs to remove table row of employee when clicked
function deleteButton() {
    console.log('deleted');
    $(this).remove();

}; // end of deleteButton function

// function runs to delete by ID
    function handleDelete() {
const idToDelete = $("#IdDelete").val();
    $("#IdDelete").val('')
    for (let i = 0; i < employees.length; i++) {
        if (idToDelete === employees[i].employeeId)
            employees.splice(i, 1);
    } // end of for loop
    displayEmployees();
    }; // end of handleDelete function


// function for actions for what submit button will do when clicked
function submitButtonDo() {
    console.log('You added', $('#nameInput').val(),$('#lastInput').val(),$('#idInput').val(),$('#titleInput').val(),$('#annualSalaryInput').val());
    // enters input values
    let newEmployee = new newEmployeeFunction($('#nameInput').val(), $('#lastInput').val(), $('#idInput').val(), $('#titleInput').val(), $('#annualSalaryInput').val());
    employees.push(newEmployee);
    displayEmployees();
    calculateMonthlyCost();
    // empty input values
    $('#nameInput').val(''),$('#lastInput').val(''),$('#idInput').val(''),$('#titleInput').val(''),$('#annualSalaryInput').val('');
    
}; // end of submitButtonDo function

// function runs to append values into display employee list by entered inputs
function displayEmployees() {
    // displays input values
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
    // end of input values

    console.log("in displayEmployees");
    let el = $('#inputEmp');
    el.empty();

    for (let employee of employees) {

        let outputString = '<tr class="table-dark">';
        outputString += '<td>' + employee.firstName + '</td>' + '<td>' + employee.lastName + '</td>' + '<td>' + employee.employeeId + '</td>' + '<td>' + employee.title + '</td>' + '<td class="yearCash" >' + employee.annualSalary + '</td>' + '<td id ="drow">' + `<button class="deleteButton">Delete</button>` + '</td>' + '</tr>';
        el.append(outputString);

}; // end of for loop
}; // end of displayEmployees function

// new function for calculating monthly costs
function calculateMonthlyCost(){
    let sum = 0;
    $('#span').empty();
    for (let salary of employees) {
        sum += (salary.annualSalary / 12);
    } //end for 
    let num = sum.toFixed(2);
    $('#span').text(num);
    if (num > 20000) {
        $('#span').css("color", 'red');
    } else {
        $('#span').css("color", 'skyblue');
    } // end if/else
} // end calculateSalary














