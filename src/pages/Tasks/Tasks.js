import "./Tasks.css";
import { useEffect } from "react";
import { connect } from "react-redux";

// components
import TaskForm from "../../components/Tasks/TasksForm";
import TasksList from "../../components/Tasks/TasksList";

// redux actions
import {
  addTask,
  editTask,
  setEditView,
  setEmptyFields,
  setError,
  setExpiryDate,
  setName,
  setTask,
  setTasks,
  setTasksCount,
} from "./actions";

const Tasks = ({
  user,
  tasks,
  setTasks,
  tasksCount,
  setTasksCount,
  addTask,
  editTask,
  name,
  error,
  emptyFields,
  setName,
  setError,
  setEmptyFields,
  editView,
  setEditView,
  task,
  setTask,
  expiryDate,
  setExpiryDate,
}) => {
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        setTasks(json);
        if (json && json.length) {
          setTasksCount(json.length);
        }
      }
    };
    if (user) {
      fetchTasks();
    }
  }, []);

  const handleAdd = async () => {
    if (!user) {
      setError("You must be logged in");
      return;
    }

    const obj = { name, expiry: expiryDate, status: "pending" };
    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setName("");
      setError(null);
      setEmptyFields([]);
      addTask(json);
    }
  };
  const handleView = (obj) => {
    setEditView();
    setTask(obj);
    setName(obj.name);
  };
  const handleEdit = async (id, type) => {
    let obj = {};
    if (type == "statusChecked") {
      obj = { status: "done" };
    } else if (type == "statusDelete") {
      obj = { status: "delete" };
    } else if (type == "statusRestore" || type == "statusUnChecked") {
      obj = { status: "pending" };
    } else if (type == "name") {
      obj = { name };
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

    if (!response.ok) {
      setError(json.err);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setName("");
      setError(null);
      setEmptyFields([]);
      editTask(json);
      if (response.ok) {
      }
    }
    if (type == "name") {
      setEditView();
    }
  };

  return (
    <div className="tasks">
      <div>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => (
            <TasksList
              key={task._id}
              task={task}
              handleView={(obj) => handleView(obj)}
              handleEdit={(id, type) => handleEdit(id, type)}
            />
          ))}
      </div>
      <TaskForm
        handleAdd={() => handleAdd()}
        handleEdit={(id, type) => handleEdit(id, type)}
        name={name}
        error={error}
        emptyFields={emptyFields}
        setName={setName}
        editView={editView}
        task={task}
        expiryDate={expiryDate}
        setExpiryDate={setExpiryDate}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginStore.user,
    tasks: state.tasksStore.tasks,
    tasksCount: state.tasksStore.tasksCount,
    task: state.tasksStore.task,
    name: state.tasksStore.name,
    status: state.tasksStore.status,
    error: state.tasksStore.error,
    emptyFields: state.tasksStore.emptyFields,
    editView: state.tasksStore.editView,
    expiryDate: state.tasksStore.expiryDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTasks: (arr) => {
      dispatch(setTasks(arr));
    },
    setTasksCount: (num) => {
      dispatch(setTasksCount(num));
    },
    setTask: (obj) => {
      dispatch(setTask(obj));
    },
    addTask: (obj) => {
      dispatch(addTask(obj));
    },
    editTask: (obj) => {
      dispatch(editTask(obj));
    },
    setName: (str) => {
      dispatch(setName(str));
    },
    setError: (str) => {
      dispatch(setError(str));
    },
    setEmptyFields: (arr) => {
      dispatch(setEmptyFields(arr));
    },
    setEditView: () => {
      dispatch(setEditView());
    },
    setExpiryDate: (obj) => {
      dispatch(setExpiryDate(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
