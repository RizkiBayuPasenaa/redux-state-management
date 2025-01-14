import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector((state) => state.task);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
    {tasks.length > 0 ? (
      tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))
    ) : (
      <p className="text-gray-500 text-center">No tasks available</p>
    )}
  </div>
  );
}

export default TaskList;
