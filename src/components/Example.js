import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React from 'react';

function Example({ handleCloseModal, show, deleteToDo, currentToDo }) {


    return (
        <>


            <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
            </Button>
                    <Button variant="primary" onClick={deleteToDo.bind(this, currentToDo)} className="btn btn-danger">
                        Delete
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;