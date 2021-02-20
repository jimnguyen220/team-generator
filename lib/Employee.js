// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, email, id) {
        this.name = name;
        this.role = role;
        this.email =  email;
        this.id = id;
    }

    getName() {
        this.name;
    }

    getRole() {
        this.role;
    }

    getEmail() {
        this.email;
    }

    getId() {
        this.id;
    }
}


module.exports = Employee;