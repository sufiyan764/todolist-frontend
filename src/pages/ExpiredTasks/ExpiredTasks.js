import "./ExpiredTasks.css";
import { useSelector } from "react-redux";

// components
import ExpiredTasksList from "../../components/ExpiredTasks/ExpiredTasksList";

const ExpiredTasks = () => {
  // states
  const tasks = useSelector((state) => state.tasksStore.tasks);
  const tasksCount = useSelector((state) => state.tasksStore.tasksCount);

  return (
    <div className="expired-tasks">
      <div>
        {tasksCount > 0 &&
          tasks.map((task) => <ExpiredTasksList key={task._id} task={task} />)}
      </div>
    </div>
  );
};

export default ExpiredTasks;
