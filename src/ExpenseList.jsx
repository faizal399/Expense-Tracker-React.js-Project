
import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({expenses,deleteExpense}) => {
  return (
    <div className="overflow-y-scroll expense-list border lg:w-[70%] p-2 w-full h-[40vh] bg-zinc-800 rounded-2xl">
      <div className=" lg:flex hidden items-center justify-between opacity-40 ">
        <span>Expense Title</span> <span>Expense Amount</span>
        <span>Delete</span>
      </div>
      <ExpenseItem  expenses={expenses} deleteExpense={deleteExpense}/>
    </div>
  );
};

export default ExpenseList;
