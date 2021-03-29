import React , {useContext} from 'react';
import {GlobalContext} from '../contextAPI/GlobalState';

function IncomeExpenses() {
   const {transactions} = useContext(GlobalContext);

   const amount = transactions.map(transaction => transaction.amount);
   // icome 
   const income = amount.filter(num => num > 0 ).reduce((acc , item) => (acc += item) , 0 ).toFixed(2);
   // expense 
   const expense = amount.filter(num => num < 0 ).reduce((acc , item) => (acc += item) , 0 ).toFixed(2); 

    return (
        <div className="inc-exp-container">
           <div>
              <h4>income</h4>
              <p className='money plus' id='money-plus' >+${income}</p>    
           </div> 
           <div>
              <h4>expense</h4>
              <p className='money minus' id='money-minus'>-${expense}</p>    
           </div>
        </div>
    )
}

export default IncomeExpenses
