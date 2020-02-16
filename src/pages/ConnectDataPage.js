import Page from 'components/Page';
import React from 'react';
import {
  Card, CardBody, CardHeader, Col, Row, Button,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import {Redirect } from 'react-router-dom';
import StickyHeadTable from 'components/StickyHeadTable';
import DataConnectCsv from 'components/DataConnectCsv';
import DataConnectJson from 'components/DataConnectJson';
import DataConnectSql from 'components/DataConnectSql';

class ConnectDataPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  state = {
    redirect: false,
    csv : false,
    json: false,
    sql: false,
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
      csv : true,
      json: true,
      sql: true
    })
  }

  setRedirectCsv = () => {
    this.setState({
      csv : true,
      json: false,
      sql: false
    })
  }

  setRedirectJson = () => {
    this.setState({
      json: true,
      csv : false,
      sql: false
    })
  }

  setRedirectSql = () => {
    this.setState({
      sql: true,
      json: false,
      csv : false
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/LoadDataPage' />
    }
  }

  renderDataConnection = () => {
    if (this.state.csv) {
      return <DataConnectCsv/>
    }
    if (this.state.json) {
      return <DataConnectJson/>
    }
    if (this.state.sql) {
      return <DataConnectSql/>
    }
  }

render() {
  return (
    <Page title="Data Connection" breadcrumbs={[{ name: 'Data Connection', active: true }]}>
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Select Data load Type</CardHeader>
              <CardBody>
              <UncontrolledDropdown>
                <DropdownToggle caret outline color="secondary">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.setRedirectCsv}>CSV</DropdownItem>
                  <DropdownItem onClick={this.setRedirectJson}>JSON</DropdownItem>
                  <DropdownItem onClick={this.setRedirectSql}>SQL</DropdownItem>
                  <DropdownItem onClick={this.setRedirectSql}>SQLITE</DropdownItem>
                  <DropdownItem onClick={this.setRedirectSql}>MONGODB</DropdownItem>
                  <DropdownItem onClick={this.setRedirectSql}>WEB API</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
        </Card>
      </Col>
    </Row>

          <Row>
            <Col>
              <Card className="mb-3">
                <CardHeader>Connection Fields</CardHeader>
                  <CardBody>
                  {this.renderDataConnection()}
                    <Button outline color="primary">LoadData</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>


      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>View DataFrame</CardHeader>
            <CardBody>
            <StickyHeadTable/>
            <br/>
            {this.renderRedirect()}
            <Button outline color="primary" onClick={this.setRedirect}>Submit</Button>{' '}
            <Button outline color="secondary" onClick={this.setRedirect}>Cancel</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};
};

export default ConnectDataPage;
