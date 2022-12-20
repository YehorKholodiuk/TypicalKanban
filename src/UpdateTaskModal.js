import React from 'react';

import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function UpdateTaskModal(props) {

    const {statuses, priority, task, modal, toggle, updateTask} = props;

    const [name, setName]= useState(task.name);
    const [status, setStatus] = useState(task.status);
    const [taskPriority, setTaskPriority] = useState(task.priority);
    const [description, setDescription] = useState(task.description);

    const onSave = () => {
        const updatedTask = {
            id: task.id,
            name,
            status,
            priority: +taskPriority,
            description
        }
        updateTask(updatedTask)
        toggle()
    }

    return (

        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control"
                           aria-describedby="basic-addon1"
                           value={name} onChange={e => setName(e.target.value)}/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description</span>
                    <input type="text" className="form-control"
                           aria-describedby="basic-addon1"
                           value={description} onChange={e => setDescription(e.target.value)}/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Priority</span>
                    <select className="form-select" aria-label="Default select example"
                            value={taskPriority} onChange={e => setTaskPriority(e.target.value)}>
                        {priority.map((el, ind) =>
                            <option key={ind} value={el}>{el}</option>
                        )}
                    </select>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Statuses</span>
                    <select className="form-select" aria-label="Default select example"
                            value={status} onChange={e => setStatus(e.target.value)}>
                        {statuses.map((el, ind) =>
                            <option key={ind} value={el}>{el}</option>
                        )}
                    </select>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onSave}>
                    Save
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>

    );
}

export default UpdateTaskModal;
