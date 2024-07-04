import React, { useState } from 'react';

const AddExpense: React.FC<{ onSubmit: (event: React.FormEvent<HTMLFormElement>) => void }> = ({ onSubmit }) => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className="addexpense">
      <form onSubmit={onSubmit}>
        <div className="category">
          <label htmlFor="category">Category</label>
          <select name="category" value={category} onChange={handleCategoryChange} required>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="title">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" required />
        </div>
        <div className="amount">
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" required />
        </div>
        <div className="date">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" required />
        </div>
        <button type="submit">
          <span className="add">+</span> <span className="add-expense">Add Expense</span>
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
