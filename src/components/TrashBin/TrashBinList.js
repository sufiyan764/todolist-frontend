import "./TrashBin.css";
// date fns
import { format, formatDistanceToNow } from "date-fns";

const TrashBinList = ({ task, handleEdit }) => {
  return (
    <>
      {task.status == "delete" && (
        <div className="trash-bin-details">
          <p className="name">{task.name}</p>
          <p className="timestamp">
            <em>Expires at {format(new Date(task.expiry), "PPPpp")}</em>
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
          <span
            className="material-symbols-outlined delete"
            onClick={() => handleEdit(task._id, "statusRestore")}
          >
            restore_from_trash
          </span>
        </div>
      )}
    </>
  );
};

export default TrashBinList;
