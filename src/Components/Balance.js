import React , {useContext} from 'react';
import {GlobalContext} from '../contextAPI/GlobalState';

function Balance() {
  const {transactions} = useContext(GlobalContext); 

  const amount = transactions.map(transaction => transaction.amount);
  // total 
  const total = amount.reduce((acc , item) => (acc += item) , 0 ).toFixed(2);
    return (
        <>
          <h4>your Balance </h4> 
          <h1>${total}</h1>  
        </>
    )
}

export default Balance
