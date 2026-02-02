function TaskItem({ task, onDelete}){
    return(
        <li className="felx justifu-between items-center bg-gray-50 px-3 py-2 rounded-1g">
            <span className="text-sm">{task.text}</span>
            <button
                onClick={() => onDelete(task.id)}
                className="text-red-500 text-xs"
            >Delete</button>
        </li>
    );
}

export default TaskItem;