const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        const newTasks = [...state.tasks, ...action.payload];
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        return {
          ...state,
          tasks: newTasks,
        };
      case "DELETE_TODO":
        const updatedTasksDelete = state.tasks.filter(
          (task) => task.id !== action.payload
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasksDelete));
        return {
          ...state,
          tasks: updatedTasksDelete,
        };
      case "REMOVE_TODO":
        localStorage.removeItem("tasks");
        return {
          ...state,
          tasks: [],
        };
      case "UPDATE_TODO":
        const updatedTasksUpdate = state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, data: action.payload.newData } : task
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasksUpdate));
        return {
          ...state,
          tasks: updatedTasksUpdate,
        };
        
        case "ADD_TASK":
          const updatedTask = state.tasks.find(task => task.id === action.payload.taskId);
          const updatedTasks = updatedTask ? state.tasks.map(task =>
            task.id === action.payload.taskId ? { ...task, tasks: [...(task.tasks || []), action.payload.newTask] } : task
          ) : [...state.tasks, { id: action.payload.taskId, tasks: [action.payload.newTask] }];
          
          localStorage.setItem("tasks", JSON.stringify(updatedTasks));
          
          return {
            ...state,
            tasks: updatedTasks,
          };
      default:      return state;
  
              }
            };
            
  
  
  export default taskReducer;