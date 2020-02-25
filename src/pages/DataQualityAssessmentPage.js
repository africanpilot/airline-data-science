import Page from 'components/Page';
import React from 'react';
import { Card, CardBody,  CardHeader,  Col,  Row,
  Table, Button
  } from 'reactstrap';
  import {Redirect } from 'react-router-dom';

// const today = new Date();

class DataQualityAssessmentPage extends React.Component {
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
      return <Redirect to='/ReportPage' />
    }
  }

  render() {

    return (
      <Page
        className="DataQualityAssessmentPage"
        title="Data Quality Control"
        breadcrumbs={[{ name: 'Data Quality Control', active: true }]}
      >
        <Row>
        <Col xl={25} lg={12} md={12}>
          <Card>
            <CardHeader>Quality Control</CardHeader>
              <CardBody>
                  {this.renderRedirect()}
                    <Button outline color="primary" onClick={this.setRedirect}>Generate Report</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Rules</CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Project</th>
                      <th>Rule Count</th>
                      <th>View</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Rule1</td>
                    <td>Global</td>
                    <td>7</td>
                    <td><Button outline color="success">View</Button></td>
                    <td><Button outline color="info">Edit</Button></td>
                    <td><Button outline color="danger">Remove</Button></td>
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
export default DataQualityAssessmentPage;
