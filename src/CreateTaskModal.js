import React from 'react'
import {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroupText, InputGroup, Input} from 'reactstrap';

function CreateTaskModal(props) {
    const {statuses, priority, addNewTask} = props;

    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [status, setStatus] = useState(statuses[0]);
    const [taskPriority, setTaskPriority] = useState(priority[4]);
    const [description, setDescription] = useState('');


    const toggle = () => {
        setModal(!modal)
        setName('')
        setStatus(statuses[0])
        setTaskPriority(priority[4])
        setDescription('')

    };

    const okButtonHandler = () => {
        const newTask =
            {
                name,
                status,
                priority: taskPriority,
                description
            }
        addNewTask(newTask)
        toggle()
    }

    return (
        <div>
            <div style={{margin: '20px'}}>
                <Button color="outline-primary" onClick={toggle}>
                    Create New Task
                </Button>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create New Task</ModalHeader>
                <ModalBody>

                    <InputGroup>
                        <InputGroupText>
                            Task Name
                        </InputGroupText>
                        <Input value={name} onChange={e => setName(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Description
                        </InputGroupText>
                        <Input value={description} onChange={e => setDescription(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Statuses
                        </InputGroupText>
                        <select className="form-select"
                                aria-label="Default select example"
                                value={status}
                                onChange={e => setStatus(e.target.value)}>
                            {statuses.map((el, ind) =>
                                <option key={ind} value={el}>{el}</option>
                            )}
                        </select>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Priority
                        </InputGroupText>
                        <select className="form-select"
                                aria-label="Default select example"
                                value={taskPriority}
                                onChange={e => setTaskPriority(e.target.value)}>
                            {priority.map((el, ind) =>
                                <option key={ind} value={el}>{el}</option>
                            )}
                        </select>
                    </InputGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={okButtonHandler}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}


export default CreateTaskModal;
