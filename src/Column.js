import React from 'react';
import Task from "./Task";

function Column(props) {

    const {status, tasks, changePriority, changeStatus, statuses, onDelete, priority, updateTask} = props

    return (
        <div className="col">
            <h3>{status.toUpperCase()}</h3>
            {tasks.filter(el => el.status === status).map(el => <Task
                task={el}
                key={el.id}
                changePriority={changePriority}
                changeStatus={changeStatus}
                statuses={statuses}
                onDelete={onDelete}
                priority={priority}
                updateTask={updateTask}
            />)}
        </div>
    );
};

export default Column;
