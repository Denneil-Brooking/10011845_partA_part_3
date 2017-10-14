//class to hold data
class Employee {
    get FirstName() {
        return `${this._FirstName}!`
    }
    set FirstName(value) {
        this._FirstName = `${value}`
    }
    get LastName() {
        return `${this._LastName}!`
    }
    set LastName(value) {
        this._LastName = `${value}`
    }
    get Salary() {
        return `${this._Salary}!`
    }
    set Salary(value) {
        this._Salary = `${value}`
    }


    constructor(FirstName, LastName, Salary) {
        this._FirstName = fname;
        this._LastName = lname;
        this._Salary = pay;
    }
}

//Display function to show values of the form. or return an error message if failed to save data.
let displayeEmplyee = () => {

    if (Employee = true) {
        console.log("First Name: " + fname.value + " " + "Last Name: " + lname.value + " " + "Salary: $" + pay.value);
        alert("Thank you " + fname.value + " " + lname.value);
        document.getElementById("name1").innerHTML = fname.value;
        document.getElementById("name2").innerHTML = lname.value;
        document.getElementById("salary").innerHTML = "$" + pay.value;

    } else {
        alert("Failed to submit data, please check your information and try again");
        console.log("submit fail")

    }
}

submit.addEventListener('click', (e) => {
    displayeEmplyee();
    e.preventDefault()
})