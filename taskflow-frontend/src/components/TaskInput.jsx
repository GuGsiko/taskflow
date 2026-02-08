import { useState } from "react";

function TaskInput({ onAdd }) {
    const [text, setText] = useState("");

    const submitHandler = (e) => {
         e.preventDefault();
         if (!text.trim()) return;
         onAdd(text);
         setText("");
    };

    return (
        <form onSubmit={submitHandler} className="flex gap-2 mb-4">
            <input
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button 
                disabled = {!text.trim()}
                className="bg-black text-white px-4 rounded-lg text-sm disabled:opacity-50"
            >
                Add
            </button>
        </form>
    );
}

export default TaskInput;
