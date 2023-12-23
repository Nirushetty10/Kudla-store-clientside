import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteModal(props) {
  const [modal, setModal] = useState(props.toggle);

  useEffect(() => {
    setModal(props.toggle);
  }, [props.toggle]);

  const toggleContinue = () => {
    props.handleDelete();
    setModal(!modal)
  };

  const toggleCancel = () => {
    props.handleCancel();
    setModal(!modal)
  };
// console.log(props.toggle,modal);
//   debugger

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleCancel}>
        <ModalHeader>Delete item</ModalHeader>
        <ModalBody>
          <h5>Are you sure you want to delete this?</h5>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleContinue}>
            Continue
          </Button>{' '}
          <Button color="secondary" onClick={toggleCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeleteModal;