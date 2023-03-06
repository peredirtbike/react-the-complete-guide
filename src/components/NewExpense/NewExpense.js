import React, {useState} from 'react';
import "./NewExpense.css"

import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

    const [isShowingForm, setIsShowingForm] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () =>{
        setIsShowingForm(true)
    }
    const stopEditingHandler = () =>{
        setIsShowingForm(false)
    }

    return(
        <div className='new-expense'>
            {!isShowingForm && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isShowingForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>

    )  
        
    
}

export default NewExpense