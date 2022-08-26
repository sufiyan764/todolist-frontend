import "./Tasks.css";
// date fns
import { format, formatDistance, formatDistanceToNow, isAfter } from "date-fns";

const TasksList = ({ task, handleEdit, handleView }) => {
  const handleChange = (event, id) => {
    if (event.target.checked) {
      handleEdit(id, "statusChecked");
    } else {
      handleEdit(id, "statusUnChecked");
    }
  };
  return (
    <>
      {(task.status == "pending" || task.status == "done") &&
        (!isAfter(new Date(), new Date(task.expiry)) ||
          task.status == "done") && (
          <div
            className="task-details"
            style={task.status == "done" ? { background: "lightgreen" } : {}}
          >
            <p className="name">{task.name}</p>
            <p className="timestamp">
              {task.status == "done" && (
                <em>Expired at {format(new Date(task.expiry), "PPPpp")}</em>
              )}
              {task.status == "pending" && (
                <em>
                  Expires in{" "}
                  {formatDistance(new Date(task.expiry), new Date(), {
                    includeSeconds: true,
                  })}
                </em>
              )}
            </p>
            <p className="timestamp">
              <em>
                Created{" "}
                {formatDistanceToNow(new Date(task.createdAt), {
                  addSuffix: true,
                })}
              </em>
            </p>
            <p className="timestamp">
              <em>
                Updated{" "}
                {formatDistanceToNow(new Date(task.updatedAt), {
                  addSuffix: true,
                })}
              </em>
            </p>
            <span className="check">
              <input
                type="checkbox"
                defaultChecked={task.status == "done"}
                onChange={(e) => handleChange(e, task._id)}
              />
            </span>
            <span
              className="material-symbols-outlined edit"
              onClick={() => handleView(task)}
            >
              edit
            </span>
            <span
              className="material-symbols-outlined delete"
              onClick={() => handleEdit(task._id, "statusDelete")}
            >
              delete
            </span>
          </div>
        )}
    </>
  );
};

export default TasksList;
