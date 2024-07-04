
import './App.css'
import Navbar from './navbar'
import AddIncome from './addIncome'
import IncomeCard, { incomeprop } from './incomeCard'
import { useState } from 'react'

function App() {
  const [income, setIncome] = useState<incomeprop[]>([] as incomeprop[]);
  const [totalIncome, setIncomeamount] = useState(0)

  function addIncomeform(event:any){
    event.preventDefault()
    let category = event.target.category.value
    let amount = event.target.amount.value
    let date = event.target.date.value
    let description = event.target.description.value
    setIncome([...income,{category: category, amount: amount, date: date, description: description}])
    setIncomeamount((prevValue) => prevValue + parseInt(amount))
    console.log(income)
  }



  return (
    <>
    <Navbar/>
    <div className="main">
    <AddIncome onSubmit = {addIncomeform}/>
    <div className="incomes">
    {income.map((element)=> {
        return <IncomeCard category={element.category}  amount={element.amount} date={element.date} description={element.description} key= {element.date}/>
    })}
    </div>
    </div>
    <div className="totalIncome">
      <h2>Total Income: {totalIncome}</h2>
    </div>
    </>
  )
}

export default App
