import React , {useContext} from 'react';
import {GlobalContext} from '../contextAPI/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
    const {transactions , dispatch } = useContext(GlobalContext);
    
    // action 
    const deleteTransaction = (id) => {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        });
    }

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => {
                    return (
                       <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
                    )
                })}
            </ul>
        </div>
    )
}

export default TransactionList
