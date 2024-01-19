import React from 'react'
import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useTaskContext } from '../../context/TaskContext';
import toast from 'react-hot-toast';

const TaskCard = ({ task }) => {

    const { deleteTask, markAsCompleted } = useTaskContext();

    const handleCompleted = (taskId) => {
        markAsCompleted(taskId);
        toast.success('Task marked as completed !');
    }

    const handleDelete = (taskId) => {
        deleteTask(taskId);
        toast.success('Task deleted successfully !');
    }

    return (
        <div className={`bg-white p-3 border-l-8 ${ task.completed ? 'border-[#05CD99]' : 'border-blue' } mb-3`}>

            <div className="flex items-end gap-4 justify-between flex-wrap">

                <div className="flex items-start gap-x-2">

                    <div className="flex items-center justify-center p-2 h-[25px] w-[25px] bg-[#F4F6FB] rounded-full">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" dataslot="icon" className="h-6 w-6 text-black"><path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd">
                        </path>
                        </svg>

                    </div>

                    <div className="ml-2">
                        <div className="flex items-center">
                            <p className="text-sm text-blue uppercase font-semibold tracking-tight"> {task.name} </p>
                        </div>
                        <p className="text-xs text-[#1E2B3B] font-normal leading-tight pt-1 tracking-tight"> {task.description} </p>
                    </div>

                </div>

                <p className="text-xs text-slate-400 font-medium leading-tight pt-1 tracking-tight"> {task.dueDate} </p>

                <div className="flex items-center gap-x-3">

                    <div className="flex items-center gap-x-4">

                        {task.completed ? (
                            <span className="inline-flex items-center justify-center gap-1.5 py-0.5 px-4 rounded-md text-[11px] font-medium text-center bg-[#EAF7EE] text-[#05CD99]">Completed</span>
                        ) : (
                            <button title='Mark as completed' onClick={() => handleCompleted(task.id)} className="py-1.5 px-1.5 flex items-center justify-center text-xs rounded-md text-green-800 bg-[#EAF7EE] "> <CheckIcon className="h-3 w-3 " /> </button>
                        )}

                        <button onClick={() => handleDelete(task.id)} className="py-1.5 px-1.5 flex items-center justify-center text-xs bg-[#FEEAEA] text-red-600 rounded-md "> <TrashIcon className="h-3 w-3 " /> </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default TaskCard