import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteModal(props) {

    const {modal, toggle, task, onDelete} = props;

    const okBtnHandler= () => {
        onDelete(task.id)
        toggle()
    }

    return (
        <div>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Delete task</ModalHeader>
                <ModalBody>
                    Delete {task.name}?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={okBtnHandler}>
                        OK
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;
