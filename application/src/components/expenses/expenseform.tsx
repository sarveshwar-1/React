import React, {useState} from 'react';

const ExpenseForm =() =>{
    const[title, setTitle]=useState('');
    const[amount, setAmount]=useState('');
    const[date, setDate]=useState('');
    const[Category, setCategory]=useState('');
const handleSubmit = (e) => {
    e.preventDefault();

}



    return(
        
        <form onSubmit={handleSubmit} id="expenseform">
            <div>
                <label>Category</label>
                <select value={Category} onChange={(e) => setCategory(e.target.value)} >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="others">Others</option>

                </select>
            </div>
            <br></br>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <label>Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <br></br>
            <button type="submit">Add Expense</button>
            
            









        </form>
        
    )

}

export default ExpenseForm