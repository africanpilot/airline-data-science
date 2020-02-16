import Page from 'components/Page';
import React from 'react';
import { Card, CardBody,  CardHeader,  Col,  Row,
  Table, Button
  } from 'reactstrap';
  import {Redirect } from 'react-router-dom';

// const today = new Date();

class MLModelsPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  state = {
    redirectCreate: false,
    redirectProcess: false
  }
  setRedirectCreate = () => {
    this.setState({
      redirectCreate: true
    })
  }
  setRedirectProcess = () => {
    this.setState({
      redirectProcess: true
    })
  }
  renderRedirectCreate = () => {
    if (this.state.redirectCreate) {
      return <Redirect to='/CreateModelPage' />
    }
  }
  renderRedirectProcess = () => {
    if (this.state.redirectProcess) {
      return <Redirect to='/ProcessModelPage' />
    }
  }

  render() {

    return (
      <Page
        className="MLModelsPage"
        title="Machine Learning Models"
        breadcrumbs={[{ name: 'Machine Learning Models', active: true }]}
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Create New Models</CardHeader>
              <CardBody>
                {this.renderRedirectCreate()}
                <Button color="primary" onClick={this.setRedirectCreate}>Create Model</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="mb-3">
              <CardHeader>Process Current Models</CardHeader>
              <CardBody>
              {this.renderRedirectProcess()}
                <Button color="primary"  onClick={this.setRedirectProcess}>Process Model</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Model</CardHeader>
              <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Project</th>
                    <th>Category</th>
                    <th>SubCategory</th>
                    <th>Class</th>
                    <th>Algorithm</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Model1</td>
                  <td>Global</td>
                  <td>SupervisedLearning</td>
                  <td>Classification</td>
                  <td>Two-Class</td>
                  <td>SVM</td>
                  <td><Button outline color="success">View</Button></td>
                  <td><Button outline color="info">Edit</Button></td>
                  <td><Button outline color="danger">Remove</Button></td>
                </tr>
                </tbody>
              </Table>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="mb-3">
              <CardHeader>Model Processing</CardHeader>
              <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Project</th>
                    <th>Model</th>
                    <th>Target</th>
                    <th>Data Partition</th>
                    <th>Training</th>
                    <th>Validating</th>
                    <th>Testing</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Processing1</td>
                  <td>Global</td>
                  <td>Model1</td>
                  <td>Column1</td>
                  <td>Split 60|20|20</td>
                  <td>Method1</td>
                  <td>Method1</td>
                  <td>Method1</td>
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
export default MLModelsPage;
