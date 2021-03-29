import React , {useState , useContext} from 'react';
import {GlobalContext} from '../contextAPI/GlobalState';

function AddTransaction() {
    const [text , setText ] = useState('');
    const [amount , setAmount ] = useState(0);
    const {dispatch } = useContext(GlobalContext);

    // action
    const addTransaction = (transaction) => {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        });
    }
    // onSubmit 
    const handleClick = (e) => {
        e.preventDefault();
        const newTransaction = {
            id:Math.floor(Math.random() * 10000 ),
            text,
            amount: parseInt(amount)
        }
        addTransaction(newTransaction);
        setText("");
        setAmount("");
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleClick} >
            <div className="form-control">
                <label>Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label 
                >Amount <br />
                (negative - expense, positive - income)</label
                >
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
