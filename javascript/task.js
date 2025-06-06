function setReminder(taskName, deadline) {
    const currentTime = new Date().getTime();
    const deadlineTime = new Date(deadline).getTime();
    const timeDifference = deadlineTime - currentTime;

    if (timeDifference > 0) {
        setTimeout(() => {
            console.log(`Reminder: ${taskName} is due!`);
        }, timeDifference);
    } else {
        console.log(`Reminder: ${taskName} is overdue!`);
    }
}


const deadline = new Date(Date.now()).toISOString();
setReminder("Task 1", deadline);

