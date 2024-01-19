export const groupTasksByTime = (tasks) => {
    const groupedTasks = [];

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const previous7Days = new Date(today);
    previous7Days.setDate(today.getDate() - 7);

    const previous30Days = new Date(today);
    previous30Days.setDate(today.getDate() - 30);

    const lastYear = new Date(today);
    lastYear.setFullYear(today.getFullYear() - 1);

    const groupedFuture = {
        date: 'Future Tasks',
        tasks: [],
    };

    const groupedToday = {
        date: 'Today Tasks',
        tasks: [],
    };

    const groupedYesterday = {
        date: 'Yesterday Tasks',
        tasks: [],
    };

    const groupedPrevious7Days = {
        date: 'Previous 7 Days Tasks',
        tasks: [],
    };

    const groupedPrevious30Days = {
        date: 'Previous 30 Days Tasks',
        tasks: [],
    };

    const groupedLastYear = {
        date: 'Last Year Tasks',
        tasks: [],
    };

    tasks.forEach((task) => {
        const taskDate = new Date(task.dueDate);

        if (taskDate.toDateString() === today.toDateString()) {
            groupedToday.tasks.push(task);
        } else if (taskDate.toDateString() === yesterday.toDateString()) {
            groupedYesterday.tasks.push(task);
        } else if (taskDate > today) {
            groupedFuture.tasks.push(task);
        } else if (taskDate > previous7Days && taskDate <= today) {
            groupedPrevious7Days.tasks.push(task);
        } else if (taskDate > previous30Days && taskDate <= today) {
            groupedPrevious30Days.tasks.push(task);
        } else if (taskDate > lastYear) {
            groupedLastYear.tasks.push(task);
        }
    });

    if (groupedFuture.tasks.length > 0) {
        groupedTasks.push(groupedFuture);
    }

    if (groupedToday.tasks.length > 0) {
        groupedTasks.push(groupedToday);
    }

    if (groupedYesterday.tasks.length > 0) {
        groupedTasks.push(groupedYesterday);
    }

    if (groupedPrevious7Days.tasks.length > 0) {
        groupedTasks.push(groupedPrevious7Days);
    }

    if (groupedPrevious30Days.tasks.length > 0) {
        groupedTasks.push(groupedPrevious30Days);
    }

    if (groupedLastYear.tasks.length > 0) {
        groupedTasks.push(groupedLastYear);
    }

    return groupedTasks;
};
