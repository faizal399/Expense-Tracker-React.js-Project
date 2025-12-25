import { MdDeleteOutline } from "react-icons/md";
import { BiTask } from "react-icons/bi";
const ExpenseItem = ({ expenses, deleteExpense }) => {
  if (expenses.length === 0) {
    return (
      <h2 className="m-auto w-full text-2xl font-bold text-center h-full my-[10%]">
        No Expenses Yet!!
      </h2>
    );
  } 
  return (
    <>
      {expenses.map((exp) => (
        <div
          key={exp.id}
          className="expense-item hover:shadow-zinc-500 hover:shadow-md hover:transform all ease-in-out duration-200 
         bg-zinc-900
         cursor-pointer  flex items-center justify-between rounded-2xl border mt-4  h-20 p-2"
        >
          <span className="flex justify-center items-center gap-1">
            <span>
              <BiTask />
            </span>
            {exp.title}
          </span>{" "}
          <span>₹{exp.amount}</span>
          <button
            onClick={() => deleteExpense(exp.id)}
            className="cursor-pointer p-2 "
          >
            <MdDeleteOutline />
          </button>
        </div>
      ))}
    </>
  );
};

export default ExpenseItem;
