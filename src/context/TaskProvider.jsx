import React, { useReducer, useEffect } from 'react';
import TaskContext from './TaskContext';
import taskReducer from '../reducers/taskReducer';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }, [state.tasks]);

    const addTask = (newTask) => {
        dispatch({ type: 'ADD_TASK', payload: newTask });
    };

    const deleteTask = (taskId) => {
        dispatch({ type: 'DELETE_TASK', payload: taskId });
    };

    const markAsCompleted = (taskId) => {
        dispatch({ type: 'MARK_AS_COMPLETED', payload: taskId });
    };

    return (
        <TaskContext.Provider value={{ state, addTask, deleteTask, markAsCompleted }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
