import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
        Form, Input, Label, FormGroup} from 'reactstrap';

const ModalCreateModel = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [setBackdrop] = useState(true);

    const changeBackdrop = e => {
      let value = e.target.value;
      if (value !== '') {
        value = JSON.parse(value);
      }
      setBackdrop(value);
    }

  return (
    <div>
      <Button outline color="secondary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Quality Control Selection</ModalHeader>
        <ModalBody>
        <Form>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <FormGroup>
                    <Label for="backdrop">Use Case</Label>{' '}
                    <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                    <option></option>
                    <option>Use Case 1</option>
                    <option>Use Case 2</option>
                    <option>Use Case 3</option>
                    </Input>
                </FormGroup>
                <br/><br/>
                <FormGroup>
                    <Label for="backdrop">Quality Control</Label>{' '}
                    <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                    <option></option>
                    <option>Quality Control 1</option>
                    <option>Quality Control 2</option>
                    <option>Quality Control 3</option>
                    </Input>
                </FormGroup>
                <br/><br/><br/>
                <FormGroup>
                    <Label for="backdrop">Format</Label>{' '}
                    <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                    <option></option>
                    <option>Format1</option>
                    <option>Format2</option>
                    <option>Format3</option>
                    </Input>
                </FormGroup>
            </Form>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalCreateModel;