// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

// return employee's name
    getName(name) {
        return name;
    }

// return employee's id
    getId(id) {
        return id;
    }

// return employee's email address
    getEmail(email) {
        return email;
    }

// return "employee"
    getRole() {
        return "Employee";
    }

}


module.exports = Employee;