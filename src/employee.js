class Employee {
    constructor(name) {
        this._name = name;
    }

    toString() {
        return `${this._name} (${this.type})`;
    }
}

class Engineer extends Employee {
    get type() {
        return 'engineer';
    }
}

class Manager extends Employee {
    get type() {
        return 'manager';
    }
}

class Salesman extends Employee {
    get type() {
        return 'salesman';
    }
}

function createEmployee(name, type) {
    if (type === 'engineer') {
        return new Engineer(name);
    }
    if (type === 'manager') {
        return new Manager(name);
    }
    if (type === 'salesman') {
        return new Salesman(name);
    }
    throw new Error(`Employee cannot be of type ${type}`)
}

module.exports = {
    createEmployee,
}
