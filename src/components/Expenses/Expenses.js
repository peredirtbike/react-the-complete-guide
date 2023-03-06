import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import React, {useState} from "react"
import ExpensesList from "./ExpensesList"

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    console.log(filteredYear)

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

   

    return (
        <div>
            <Card className="expenses">

                <ExpensesFilter selected={filteredYear} onSelectedValue={filterChangeHandler} />
               
                <ExpensesList items={filteredExpenses}/>
        
            </Card>
        </div> 
    )
}

export default Expenses