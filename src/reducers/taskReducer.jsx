const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks], 
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        case 'MARK_AS_COMPLETED':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: true } : task
                ),
            };
        case 'SET_TASKS': // Added action type for setting tasks
            return {
                ...state,
                tasks: action.payload,
            };
        default:
            return state;
    }
};

export default taskReducer;
