import TaskItem from "./TaskItem";

function TaskList({ tasks , onDelete , onToggle }) {
    if(tasks.length == 0) {
        return(
            <p className="text-center text-sm text-grey-400">
                No tasks yet
            </p>
        );
    }

    return(
        <ul className="space-y-2">
            {tasks.map((task) => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    onDelete={() => onDelete(task._id)}
                    onToggle={() => onToggle(task._id)}
                />
            ))}
        </ul>
    );
}

export default TaskList;