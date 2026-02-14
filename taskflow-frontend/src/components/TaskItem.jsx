function TaskItem({ task, onDelete, onToggle }) {
  const isCompleted = task.status === "done";

  return (
    <li className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={onToggle}
      >
        <input
          type="checkbox"
          checked={isCompleted}
          readOnly
          className="accent-black"
        />

        <span
          className={`text-sm ${
            isCompleted ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={onDelete}
        className="text-red-500 text-xs hover:underline"
      >
        🗑
      </button>
    </li>
  );
}

export default TaskItem;
