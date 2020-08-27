const test = require('ava');
const {deliveryDate} = require('../src/delivery')

const anOrder = {
    deliveryState: 'MA',
    placedOn: {
        plusDays: function (deliveryTime) {
            return deliveryTime;
        }
    }
}

test('delivery case 1, isRush is true', t => {
    const result = deliveryDate(anOrder, true);

    t.is(result, 2)
})

test('delivery case 1, isRush is false', t => {
    const result = deliveryDate(anOrder, false);

    t.is(result, 4)
})

