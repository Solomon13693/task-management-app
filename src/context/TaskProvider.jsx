import React, { useReducer, useEffect } from 'react';
import TaskContext from './TaskContext';
import taskReducer from '../reducers/taskReducer';
import toast from 'react-hot-toast';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }, [state.tasks]);

    const addTask = (newTask) => {

        // Check if the task name already exists
        const taskExists = state.tasks.some(task => task.name === newTask.name);

        if (taskExists) {
            toast.error('Task with the same name already exists!');
        } else {
            dispatch({ type: 'ADD_TASK', payload: newTask });
            toast.success('Task added successfully!');
        }

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
