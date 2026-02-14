function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
        <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onToggle(task.id)}
        >
        <input
             type="checkbox"
             checked={task.status}
              readOnly
              className="accent-black"
        />
        ✓
        <span
            className={`text-sm ${
                task.status === "done"
                ? "line-through text-gray-400"
                : ""
            }`}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 text-xs hover:underline"
      >
        🗑
      </button>
    </li>
  );
}

export default TaskItem;
