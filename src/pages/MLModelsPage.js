import Page from 'components/Page';
import React from 'react';
import { Card, CardBody,  CardHeader,  Col,  Row,
  Table, Button
  } from 'reactstrap';
  import {Redirect } from 'react-router-dom';
  import DbTableMlModels from 'components/DbTableMlModels';
  import AddCircleIcon from '@material-ui/icons/AddCircle';

  
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
        title="ML Models"
        breadcrumbs={[{ name: 'Machine Learning Models', active: true }]}
      >
        <Row>
        <Col xl={25} lg={12} md={12}>
          <Card>
            <CardHeader>
              {this.renderRedirectCreate()}
              <AddCircleIcon fontSize="large" outline color="primary" onClick={this.setRedirectCreate}>Add ML Model</AddCircleIcon>
            </CardHeader>
              <CardBody>
              <DbTableMlModels/>
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
                      <th>Model Info</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Version</td>
                    <td>V2.3.4</td>
                  </tr>
                  <tr>
                    <td>Use Cases</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Class</td>
                    <td>Two-Class</td>
                  </tr>
                  <tr>
                    <td>Algorithm</td>
                    <td>SVM</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3">
              <CardHeader>Process Model</CardHeader>
              <CardBody>
                <Table responsive>
                    <thead>
                      <tr>
                        <th>Process Info</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Version</td>
                      <td>V2.3.4</td>
                    </tr>
                    <tr>
                      <td>Tagert</td>
                      <td> Column 1</td>
                    </tr>
                    <tr>
                      <td>Data Partition</td>
                      <td>Split 60|20|20</td>
                    </tr>
                    <tr>
                      <td>Training</td>
                      <td>Method 1</td>
                    </tr>
                    <tr>
                      <td>Validating</td>
                      <td>Method 1</td>
                    </tr>
                    <tr>
                      <td>Testing</td>
                      <td>Method 1</td>
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
