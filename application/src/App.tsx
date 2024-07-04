
import { useState } from 'react';
import './App.css'
import IncomePage from './components/incomepage'
import Navbar from './components/navbar'
import ExpensePage from './components/expense';
function App() {
  let [page , setPage] = useState('income');
  function ChangePage(page:string){
    setPage(page)
  }




  return (
    <>
    <Navbar onClicked = {ChangePage}/>
    {page === 'income'? <IncomePage/> : <ExpensePage/>}
    </>
  )
}

export default App
