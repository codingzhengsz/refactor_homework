const test = require('ava');
const {EmployeeClass} = require('../src/employee')

test('employee case 1, Employee Martin is a engineer', t => {
    const engineer = new EmployeeClass('Martin', 'engineer');

    const result = engineer.toString();

    t.is(result, 'Martin (engineer)')
})

test('employee case 2, Employee Martin is a manager', t => {
    const engineer = new EmployeeClass('Martin', 'manager');

    const result = engineer.toString();

    t.is(result, 'Martin (manager)')
})

test('employee case 2, Employee Martin is a salesman', t => {
    const engineer = new EmployeeClass('Martin', 'salesman');

    const result = engineer.toString();

    t.is(result, 'Martin (salesman)')
})
