import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';
import AddExpense from './components/expenses/expenseform';
import ExpenseCard, { expenseprop } from './components/expenses/expenselist';

interface Expense {
  category: string;
  title: string;
  amount: number;
  date: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const addExpenseForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const category = formData.get('category') as string;
    const title = formData.get('title') as string;
    const amount = parseInt(formData.get('amount') as string);
    const date = formData.get('date') as string;

    const newExpense = {
      category,
      title,
      amount,
      date,
    };

    setExpenses([...expenses, newExpense]);
    setTotalExpense(prevValue => prevValue + amount);

    event.currentTarget.reset();
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <AddExpense onSubmit={addExpenseForm} />
        <div className="expenses">
          {expenses.map((expense, index) => (
            <ExpenseCard
              key={index}
              category={expense.category}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </div>
      </div>
      <div className="totalIncome">
        <h2>Total Expense: {totalExpense}</h2>
      </div>
    </>
  );
}

export default App;
