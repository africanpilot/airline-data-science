import Page from 'components/Page';
import React from 'react';
import { Card, CardBody,  CardHeader,  Col,  Row,
  Table, Button
  } from 'reactstrap';
import {Redirect } from 'react-router-dom';
import StickyHeadTable from 'components/StickyHeadTable';
import DbTableDataLoad from 'components/DbTableDataLoad';

class LoadDataPage extends React.Component {
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
      return <Redirect to='/ConnectDataPage' />
    }
  }

  render() {

    return (
      <Page
        className="LoadDataPage"
        title="Load Data"
        breadcrumbs={[{ name: 'Load Data', active: true }]}
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>
              {this.renderRedirect()}
                <Button outline color="secondary" onClick={this.setRedirect}>Add New Data</Button>
              </CardHeader>
              <CardBody>
                <DbTableDataLoad/>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl={8} lg={12} md={12}>
            <Card>
              <CardHeader>Data Frame</CardHeader>
                <CardBody>
                <StickyHeadTable/>
                </CardBody>
            </Card>
          </Col>
          <Col xl={4} lg={12} md={12}>
            <Card>
              <CardHeader>Stats</CardHeader>
                <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>#Rows</td>
                    <td>35000</td>
                  </tr>
                  <tr>
                    <td>#Cols</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>Total Nulls</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>Avg. Load Time</td>
                    <td>3 mins</td>
                  </tr>
                  <tr>
                    <td>Version</td>
                    <td>V2.3.4</td>
                  </tr>
                  <tr>
                    <td>Progress</td>
                    <td>60%</td>
                  </tr>
                  </tbody>
                </Table>
                </CardBody>
            </Card>
          </Col>
        </Row>

      </Page>
    );
  }
}
export default LoadDataPage;
