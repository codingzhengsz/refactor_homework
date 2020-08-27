function printHeader() {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
}

function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

function calculateOurStanding(invoice) {
    let outstanding = 0;
    for (const o of invoice.borderSpacing) {
        outstanding += o.amount;
    }
    return outstanding;
}

function recordDueDate(invoice) {
    const today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printOwing(invoice) {
    printHeader();
    let outstanding = calculateOurStanding(invoice);
    recordDueDate(invoice);
    printDetails(invoice, outstanding);
}
