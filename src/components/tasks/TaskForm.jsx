import React from 'react'
import CustomInput from '../FormElements/CustomInput'
import { Form, Formik } from 'formik';
import TextArea from '../FormElements/TextArea';
import schema from '../../validationSchema';
import { useTaskContext } from '../../context/TaskContext';
import toast from 'react-hot-toast';

const TaskForm = () => {

    const { addTask } = useTaskContext();

    return (
        <div className="bg-white px-4 py-5 rounded-lg space-y-4">

            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    dueDate: ''
                }}
                validationSchema={schema}
                onSubmit={(values, actions) => {

                    const newTask = {
                        id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
                        name: values.name,
                        dueDate: values.dueDate, 
                        description: values.description,
                        completed: false,
                    };

                    addTask(newTask)

                }}
            >

            {(props) => (

                <Form autoComplete='off'>

                    <CustomInput label="Task Name" name="name" type="text" placeholder="Enter task name" />

                    <TextArea label="Task Description" name="description" placeholder="Enter task description" />

                    <CustomInput label="Choose Due Date" name="dueDate" type="date" placeholder="Enter due date" />

                    <button type='submit' className="btn btn-primary w-full mb-4"> Submit </button>

                </Form>

            )}

        </Formik>

        </div >
    )
}

export default TaskForm