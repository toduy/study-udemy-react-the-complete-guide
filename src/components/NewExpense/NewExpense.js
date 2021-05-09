import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  // It will execute in a different component even though it's not defined inside
  //  of ExpenseForm, because we are passing a pointer through the onSaveExpenseData prop
  // => This is how we can communicate between components and how we can communicate up
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  return <div className="new-expense">
    {/* - Just naming it start with "on" because I wanna make it clear 
       that the value for this prop should be a function which will eventually
       be triggered when something happens inside of this component. */}
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
};

export default NewExpense;