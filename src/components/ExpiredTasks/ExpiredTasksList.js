import "./ExpiredTasks.css";
// date fns
import { format, formatDistanceToNow, isAfter } from "date-fns";

const ExpiredTasksList = ({ task }) => {
  return (
    <>
      {isAfter(new Date(), new Date(task.expiry)) && task.status == "pending" && (
        <div className="expired-tasks-details">
          <p className="name">{task.name}</p>
          <p className="timestamp">
            <em>Expired at {format(new Date(task.expiry), "PPPpp")}</em>
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
        </div>
      )}
    </>
  );
};

export default ExpiredTasksList;
