import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenses = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enterdeExpenseData) => {
    const expenseData = {
      ...enterdeExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  const expenseAddHandler = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={expenseAddHandler}>Add New expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
