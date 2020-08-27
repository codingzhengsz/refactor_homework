class Employee {
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(type) {
        if (![
            'engineer',
            'manager',
            'salesman',
        ].includes(type)) {
            throw new Error(`Employee cannot be of type ${type}`);
        }
    }

    get type() {
        return this._type;
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

function createEmployee(name, type) {
    if (type === 'engineer') {
        return new Engineer(name, type);
    }
    return new Employee(name, type);
}

module.exports = {
    createEmployee,
}
