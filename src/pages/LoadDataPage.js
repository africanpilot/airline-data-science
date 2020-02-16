import Page from 'components/Page';
import React from 'react';
import { Card, CardBody,  CardHeader,  Col,  Row,
  Table, Button
  } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Redirect } from 'react-router-dom';
import StickyHeadTable from 'components/StickyHeadTable';
// import MaterialTableDemo from 'components/MaterialTableDemo';

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
              <CardHeader>Current Data Loads
              {this.renderRedirect()}
              &nbsp;&nbsp;&nbsp;&nbsp;
                <Button outline color="secondary" onClick={this.setRedirect}>Add New Data</Button>
                  <IconButton aria-label="delete" className="float-right" color="primary">
                    <DeleteSweepIcon/>
                  </IconButton>
                  <IconButton aria-label="view" className="float-right" color="primary">
                    <VisibilityIcon/>
                  </IconButton>
                  <IconButton aria-label="edit" className="float-right" color="primary">
                    <EditIcon/>
                  </IconButton>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Project</th>
                      <th>Type of Data</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Test1</td>
                    <td>Global</td>
                    <td>CSV</td>
                    <td>'path.csv'</td>
                  </tr>
                  </tbody>
                </Table>
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
