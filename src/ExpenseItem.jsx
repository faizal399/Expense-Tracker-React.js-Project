import { MdDeleteOutline } from "react-icons/md";
import { BiTask } from "react-icons/bi";
const ExpenseItem = ({ expenses,deleteExpense }) => {
  return (
    <>
      {expenses.map((exp) => (
        <div key={exp.id}
         className="expense-item flex items-center justify-between rounded-2xl border mt-4  h-20 p-2">
          <span className="flex justify-center items-center gap-1"><span><BiTask/></span>{exp.title}</span> <span>₹{exp.amount}</span>
          <button
          onClick={()=>deleteExpense(exp.id)}
           className="cursor-pointer p-2 ">
            <MdDeleteOutline />
          </button>
        </div>
      ))}
    </>
  );
};

export default ExpenseItem;
