import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
        Form, Input, Label, FormGroup, InputGroup, InputGroupAddon, InputGroupText
        } from 'reactstrap';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Dropdown, {
  DropdownToggle,
  DropdownMenu,
  DropdownMenuWrapper,
  MenuItem,
  DropdownButton
} from '@trendmicro/react-dropdown';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

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
       <AddCircleIcon fontSize="large" outline color="primary" onClick={toggle}>{buttonLabel}</AddCircleIcon>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Model Selection </ModalHeader>
        <ModalBody>
        <Form>
            <Form inline onSubmit={(e) => e.preventDefault()}>
            <br/><br/>
            <Dropdown>
                <DropdownToggle title= 'Select ML Model' />
                <DropdownMenu>
                    <MenuItem>
                      Saved Models
                      <MenuItem>
                        Model 1
                      </MenuItem>
                      <MenuItem>
                        Model 2
                      </MenuItem>
                      <MenuItem>
                        Model 3
                      </MenuItem>
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem>
                        Supervised Learning
                        <MenuItem>
                            Classifiction
                            <MenuItem>
                              Two Class: Support Vector Classifiction
                            </MenuItem>
                            <MenuItem>
                              Two Class: Stochastic Gradient Descent Classifiction
                            </MenuItem>
                            <MenuItem>
                              Two Class: Nearest Neighbors Classifiction
                            </MenuItem>
                            <MenuItem>
                              Two Class: Decision Trees Classifiction
                            </MenuItem>
                        </MenuItem>
                        <MenuItem>
                            Regression
                            <MenuItem>
                              Two Class: Support Vector Regression
                            </MenuItem>
                            <MenuItem>
                              Two Class: Stochastic Gradient Descent Regression
                            </MenuItem>
                            <MenuItem>
                              Two Class: Nearest Neighbors Regression
                            </MenuItem>
                            <MenuItem>
                              Two Class: Decision Trees Regression
                            </MenuItem>
                        </MenuItem>
                    </MenuItem>
                    <MenuItem>
                        Unsupervised Learning
                        <MenuItem>
                            Clustering
                            <MenuItem>
                              K-means
                            </MenuItem>
                            <MenuItem>
                              Affinity Propagation
                            </MenuItem>
                            <MenuItem>
                              Mean-shift
                            </MenuItem>
                        </MenuItem>
                        <MenuItem>
                            Dimensionality Reduction
                            <MenuItem>
                              Principal Component Analysis
                            </MenuItem>
                        </MenuItem>
                    </MenuItem>
                    <MenuItem>
                        Semi-Supervised Learning
                    </MenuItem>
                </DropdownMenu>
            </Dropdown>   
            </Form>
        </Form>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Model Name</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Create Model Name..." />
      </InputGroup>
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