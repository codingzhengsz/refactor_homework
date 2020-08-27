const test = require('ava');
const {createEmployee} = require('../src/employee')

test('employee case 1, Employee Martin is a engineer', t => {
    const engineer = createEmployee('Martin', 'engineer');
    t.is(engineer.toString(), 'Martin (engineer)')
})

test('employee case 2, Employee Martin is a manager', t => {
    const engineer = createEmployee('Martin', 'manager');
    t.is(engineer.toString(), 'Martin (manager)')
})

test('employee case 2, Employee Martin is a salesman', t => {
    const engineer = createEmployee('Martin', 'salesman');
    t.is(engineer.toString(), 'Martin (salesman)')
})
