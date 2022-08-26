import "./TrashBin.css";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

// components
import TrashBinList from "../../components/TrashBin/TrashBinList";

// redux actions
import { editTask } from "../Tasks/actions";

const TrashBin = () => {
  // states
  const user = useSelector((state) => state.loginStore.user);
  const tasks = useSelector((state) => state.tasksStore.tasks);
  const tasksCount = useSelector((state) => state.tasksStore.tasksCount);

  // dispatch action
  const dispatch = useDispatch();

  const handleEdit = async (id, type) => {
    let obj = {};
    if (type == "statusChecked") {
      obj = { status: "done" };
    } else if (type == "statusDelete") {
      obj = { status: "delete" };
    } else if (type == "statusRestore" || type == "statusUnChecked") {
      obj = { status: "pending" };
    }

    const response = await fetch("/api/tasks/" + id, {
      method: "PATCH",
      body: JSON.stringify(obj),
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch(editTask(json));
    }
  };

  return (
    <div className="trashBin">
      <div>
        {tasksCount > 0 &&
          tasks.map((task) => (
            <TrashBinList
              key={task._id}
              task={task}
              handleEdit={(id, type) => handleEdit(id, type)}
            />
          ))}
      </div>
    </div>
  );
};

export default TrashBin;
