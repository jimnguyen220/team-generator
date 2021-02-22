// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, email, id) {
        this.name = name;
        this.role = role;
        this.role = "Employee"
        this.email =  email;
        this.id = id;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }
}


module.exports = Employee;