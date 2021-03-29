import React from 'react';

function Transaction({transaction , deleteTransaction }) {
    const sign = transaction.amount > 0 ? 'plus' : 'minus';

    return (
        <>
            <li className={sign}>
              {transaction.text}<span>{transaction.amount}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
            </li>
        </>
    )
}

export default Transaction
