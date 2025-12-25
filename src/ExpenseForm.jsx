import { useState } from "react";
// import { compile } from "tailwindcss";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || amount<=0){
      
      return
    }

    onAddExpense({  title, amount, id: Date.now() });

    setTitle("");
    setAmount("");
  };

  return (
    <div>
      <form
        onSubmit={handlesubmit}
        className="expense-form flex flex-col lg:flex-row items-center justify-center  lg:gap-10 gap-2  w-100%"
      >
        <input
          className="h-10 lg:w-[40%] w-[90%] p-1 outline-1 outline-white rounded-md "
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="no-spinner h-10 lg:w-[40%] w-[90%] p-1 outline-1 outline-white rounded-md "
          type="number"
          min={1}
          placeholder="Amont ₹"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button
          className="text-nowrap p-3 border-black font-bold rounded-3xl w-fit bg-zinc-900 cursor-pointer hover:bg-zinc-950"
          type="submit"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}
export default ExpenseForm;
