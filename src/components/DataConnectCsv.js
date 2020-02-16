import React from 'react';
import {
  Col, Row, Input, Label, FormGroup, FormText,
  InputGroup, InputGroupText, InputGroupAddon
} from 'reactstrap';
import {Redirect } from 'react-router-dom';

class DataConnectCsv extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/LoadDataPage' />
    }
  }

render() {
  return (
    <Row>
      <Col>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Name</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
          <br/>
          <InputGroup>
           <InputGroupAddon addonType="append">
             <InputGroupText>Type of Data</InputGroupText>
           </InputGroupAddon>
           <Input placeholder="CSV" readOnly={true}/>
         </InputGroup>
         <br/>
         <FormGroup>
           <Label for="exampleSelect">Amount of Data</Label>
           <Input type="select" name="select" id="exampleSelect">
             <option>Single file</option>
             <option>Multiple file but same dataframe</option>
             <option>Multiple file but different data frame</option>
           </Input>
         </FormGroup>
         <br/>
         <FormGroup>
           <Label for="exampleFile">Location</Label>
           <Input type="file" name="file" id="exampleFile" multiple />
           <FormText color="muted">
             Please select the files you want to load
           </FormText>
         </FormGroup>
      </Col>
    </Row>
  );
};
};

export default DataConnectCsv;
