import { useState } from "react";
import "./styles.css";

export default function BudgetTracker() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [budget, setBudget] = useState(500000);
  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);
  const [goal, setGoal] = useState("My financial goals and dreams...");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const newSavings = budget - expense;
    setSavings(newSavings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-6">
        <h2 className="text-xl font-bold">Daily Budget & Expenses</h2>
        <label className="block mt-4">Select Date</label>
        <input 
          type="date" 
          className="w-full p-2 rounded bg-gray-700 text-white" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
        />
        <label className="block mt-4">Daily Budget (Rp)</label>
        <input 
          type="number" 
          className="w-full p-2 rounded bg-gray-700 text-white" 
          value={budget} 
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        <label className="block mt-4">Daily Expense (Rp)</label>
        <input 
          type="number" 
          className="w-full p-2 rounded bg-gray-700 text-white" 
          value={expense} 
          onChange={(e) => setExpense(Number(e.target.value))}
        />
        <button 
          className="mt-4 w-full p-2 bg-red-500 text-white rounded hover:bg-red-600" 
          onClick={handleSave}
        >Save Entry</button>
        {saved && <p className="mt-2 text-green-400">Entry saved successfully!</p>}
      </div>

      {/* Main Section */}
      <div className="flex-1 p-10">
        <textarea 
          className="w-full p-4 bg-gray-700 text-white rounded" 
          value={goal} 
          onChange={(e) => setGoal(e.target.value)}
        />
        <div className="mt-6">
          <h3 className="text-lg">This Week's Savings</h3>
          <p className="text-2xl font-bold">Rp {savings.toLocaleString()}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg">This Month's Savings</h3>
          <p className="text-2xl font-bold">Rp {savings.toLocaleString()}</p>
        </div>
        <div className="mt-6 bg-gray-800 p-4 rounded">
          <h3 className="text-lg font-bold">With your weekly savings of Rp {savings.toLocaleString()}, you can...</h3>
          <ul className="mt-2">
            <li>Bitcoin Investment (30%): Rp {(savings * 0.3).toLocaleString()}</li>
            <li>Emergency Fund (20%): Rp {(savings * 0.2).toLocaleString()}</li>
            <li>Travel Savings (10%): Rp {(savings * 0.1).toLocaleString()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
