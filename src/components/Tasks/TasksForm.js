import "./Tasks.css";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";

const TaskForm = ({
  handleAdd,
  handleEdit,
  name,
  error,
  emptyFields,
  setName,
  editView,
  task,
  expiryDate,
  setExpiryDate,
}) => {
  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    handleAdd();
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    handleEdit(task._id, "name");
  };

  return (
    <>
      {!editView && (
        <form className="task-form" onSubmit={handleSubmitAdd}>
          <h3>Add a New Task</h3>

          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={
              emptyFields && emptyFields.includes("name") ? "error" : "name"
            }
          />
          <label>Expiry:</label>
          <DatePicker
            selected={expiryDate}
            onChange={(date) => setExpiryDate(date)}
            showTimeSelect
            timeIntervals={5}
            minDate={addDays(new Date(), 0)}
            dateFormat="MMMM d, yyyy h:mm aa"
            className={
              emptyFields && emptyFields.includes("expiry") ? "error" : "name"
            }
          />
          <button className="button">Add Task</button>
          {error && <div className="error">{error}</div>}
        </form>
      )}
      {editView && (
        <form className="task-form" onSubmit={handleSubmitEdit}>
          <h3>Edit your Task</h3>

          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={
              emptyFields && emptyFields.includes("name") ? "error" : "name"
            }
          />

          <button className="button">Edit Task</button>
          {error && <div className="error">{error}</div>}
        </form>
      )}
    </>
  );
};

export default TaskForm;
