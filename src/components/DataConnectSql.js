import React from 'react';
import {
  Col, Row, Input, InputGroup, InputGroupText, InputGroupAddon
} from 'reactstrap';
import {Redirect } from 'react-router-dom';

class DataConnectSql extends React.Component {
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
            <InputGroupText>SQL Server Name</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br/>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>SQL Database Name</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br/>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>User Name</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br/>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Password</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
      </Col>
    </Row>
  );
};
};

export default DataConnectSql;
