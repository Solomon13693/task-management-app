import React from 'react';
import TaskCard from './TaskCard';
import { groupTasksByTime } from '../../utils/groupTasksByTime';
import { useTaskContext } from '../../context/TaskContext';
import Empty from '../../image/empty.webp'

const TaskContainer = () => {

    const { state: { tasks } } = useTaskContext();
    const groupedTasks = groupTasksByTime(tasks);

    return (
        <div className="bg-slate-200/60 rounded-lg p-5">

            {groupedTasks.length < 1 ? (

                <div className="flex flex-col justify-center m-auto text-center py-10">

                    <img loading="lazy" className=" w-40 m-auto" src={Empty} />

                    <div className="flex flex-col mt-5">
                        <p className="text-slate-800 text-base font-semibold capitalize">You don’t have any tasks</p>
                        <p className="w-[285px] m-auto mt-3 text-center text-stone-500 text-xs font-normal capitalize leading-[18px]">Here you will be able to see all the tasks that you have. Stay organized and stay tuned!</p>

                    </div>

                </div>

            ) : (

                groupedTasks.map((group) => (
                    <div className='mb-5' key={group.date}>
                        <h2 className="text-blue mb-3 text-sm font-medium leading-normal">{group.date}</h2>

                        {group.tasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </div>
                ))

            )}

        </div>
    );
};

export default TaskContainer;
