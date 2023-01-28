// TODO: Write code to define and export the Employee class


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // return employee's name
    getName() {
        return this.name;
    }

    // return employee's id
    getId() {
        return this.id;
    }

    // return employee's email address
    getEmail() {
        return this.email;
    }

    // return "employee"
    getRole() {
        return "Employee";
    }

}

module.exports = Employee;