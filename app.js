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
    const total = expenses.reduce((acc, expense) => acc + Math.round(expense.amount), 0);
    totalExpenses.textContent = `$${total}`;
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random falling speed
    document.getElementById('snowfall').appendChild(snowflake);

    snowflake.addEventListener('animationiteration', () => {
        snowflake.style.left = `${Math.random() * 100}vw`; // Reset horizontal position
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Reset falling speed
    });
}

function createSnowflakes(num) {
    for (let i = 0; i < num; i++) {
        createSnowflake();
    }
}

createSnowflakes(50); // Create initial snowflakes

// Create more snowflakes periodically
setInterval(() => {
    createSnowflakes(10);
}, 3000);