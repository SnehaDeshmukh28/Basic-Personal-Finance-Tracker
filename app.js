const form = document.getElementById('form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const dateInput = document.getElementById('date');
const totalExpenses = document.getElementById('total-expenses');
const list = document.getElementById('list');

let expenses = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    addExpense();
});

function addExpense() {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;
    const date = dateInput.value;

    if (!description || isNaN(amount) || amount <= 0 || !category || !date) {
        alert('Please enter valid values.');
        return;
    }

    const expense = {
        description,
        amount,
        category,
        date
    };

    expenses.push(expense);
    updateExpensesList();
    updateTotalExpenses();

    // Clear input fields
    descriptionInput.value = '';
    amountInput.value = '';
    categoryInput.value = '';
    dateInput.value = '';
}

function updateExpensesList() {
    list.innerHTML = '';
    expenses.forEach(expense => {
        const expenseItem = document.createElement('li');
        expenseItem.className = 'expense-item';
        expenseItem.innerHTML = `
            <span>${expense.description}</span>
            <span>${expense.category}</span>
            <span>${expense.date}</span>
            <span>$${expense.amount.toFixed(2)}</span>
        `;
        list.appendChild(expenseItem);
    });
}

function updateTotalExpenses() {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalExpenses.textContent = `$${total.toFixed(2)}`;
}
