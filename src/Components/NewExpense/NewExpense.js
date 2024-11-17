import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense({ onAddExpense }) {
  function submitExpenseData(expenseData) {
    onAddExpense(expenseData);
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitExpenseData} />
    </div>
  );
}

export default NewExpense;
