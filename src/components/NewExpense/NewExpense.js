import React from "react";
import ExpenseForm from "./ExpeseForm";
import "./NewExpense.css";

const NewExpense =(props) => {
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onFormSubmission(expenseData);
    }


    return (
      <div className="new-expense">
        <ExpenseForm onFormSubmition={saveExpenseDataHandler}/>
      </div>
    );
  
}

export default NewExpense;