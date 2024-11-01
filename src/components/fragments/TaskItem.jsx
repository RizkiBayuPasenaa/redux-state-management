import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../../features/task/taskSlice";
import PropTypes from "prop-types";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-md mb-2 shadow-sm">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          className="mr-2"
        />
        <span
          className={`text-lg ${
          task.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
          >
          {task.text}
        </span>
      </div>
    <button
      onClick={() => dispatch(removeTask(task.id))}
      className="text-red-500 hover:text-red-700 transition duration-200"
        >
        Delete
      </button>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
