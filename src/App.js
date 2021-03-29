import React from 'react';
import AddTransaction from './Components/AddTranscation';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpenses from './Components/IncomeExpences';
import TransactionList from './Components/TransactionList';
import {GlobalProvider} from './contextAPI/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Header/>
        <div className="container">
          <Balance/> 
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>
       </div>
    </GlobalProvider>

  );
}

export default App;
