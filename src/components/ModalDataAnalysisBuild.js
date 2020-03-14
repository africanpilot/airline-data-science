import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
        Form, Input, Label, FormGroup,InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import Editor from 'components/Editor.js'

const ModalDataAnalysisBuild = (props) => {
  const {
    buttonLabel,
    className,
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
      <Label onClick={toggle}>{buttonLabel}</Label>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Code</ModalHeader>
        <ModalBody>
            <Form>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    <FormGroup>
                        <Label for="backdrop">Load Code</Label>{' '}
                        <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                        <option></option>
                        <option>Load 1</option>
                        <option>Load 2</option>
                        <option>Load 3</option>
                        </Input>
                    </FormGroup>
                    
                </Form>
                <br/>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Name</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                    </InputGroup>
            </Form>
            
            <br/>
            <Editor/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDataAnalysisBuild;