import "./App.css";
import { useState, useEffect } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  useEffect(() => {
    console.log("render");
    const data = JSON.parse(localStorage.getItem("exp"));
    if (Array.isArray(data)) {
      setExpenses(data);
    }
    setIsLoaded(true);
  }, []);
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("exp", JSON.stringify(expenses));
    console.log("item set");
  }, [expenses, isLoaded]);

  const totalExpense = expenses.reduce(
    (total, exp) => total + Number(exp.amount),
    0
  );

  const deleteExpense = (id) => {
    let conform = window.confirm("Do You Want To Delete ?");
    if (conform) {
      setExpenses(expenses.filter((exp) => exp.id !== id));
    }
  };

  return (
    <div className="app-container flex flex-col text-white w-screen h-screen bg-zinc-600 items-center justify-center">
      <div className="flex lg:p-10 p-2 flex-col h-[90vh] w-[90vw] lg:w-[70vw] items-center justify-around lg:gap-10 gap-2 bg-zinc-800 rounded-3xl">
        <h1 className="font-bold lg:text-5xl text-2xl ">💰Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpense} />
        <h3 className="lg:text-3xl text-2xl font-bold">Total Expense ₹{totalExpense}</h3>
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </div>
    </div>
  );
}

export default App;
