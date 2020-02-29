import Page from 'components/Page';
import React from 'react';
import { Card, CardBody,  CardHeader,  Col,  Row,
  Table, Progress
  } from 'reactstrap';
import {Redirect } from 'react-router-dom';
import DbTableCreateUseCase from 'components/DbTableCreateUseCase'
import AddCircleIcon from '@material-ui/icons/AddCircle';


class CreateUseCasePage extends React.Component {
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
      return <Redirect to='/NewUseCasePage' />
    }
  }

  render() {

    return (
      <Page
        className="CreateUseCasePage"
        title="Create Use Case"
        breadcrumbs={[{ name: 'Create Use Case', active: true }]}
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>
                {this.renderRedirect()}
                  <AddCircleIcon fontSize="large" outline color="primary" onClick={this.setRedirect}>Add New Use Case</AddCircleIcon>
              </CardHeader>
              <CardBody>
                <DbTableCreateUseCase/>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
        <Col xl={4} lg={12} md={12}>
          <Card>
            <CardHeader>Sections</CardHeader>
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
                  <td>Department</td>
                  <td>Safety</td>
                </tr>
                <tr>
                  <td>Data Load</td>
                  <td>Web API</td>
                </tr>
                <tr>
                  <td>QC Rules</td>
                  <td>Rules 1</td>
                </tr>
                <tr>
                  <td>QC Format</td>
                  <td>Format 1</td>
                </tr>
                <tr>
                  <td>Data Analysis</td>
                  <td>Analysis 1</td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td>Model 1</td>
                </tr>
                <tr>
                  <td>Processing</td>
                  <td>Process 1</td>
                </tr>
                <tr>
                  <td>Evaluation</td>
                  <td>Evaluation 1</td>
                </tr>
                </tbody>
              </Table>
              </CardBody>
          </Card>
        </Col>
          <Col xl={4} lg={12} md={12}>
            <Card>
              <CardHeader>Progress</CardHeader>
                <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Progress</th>
                      <th>%</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="align-middle text-center">
                      <Progress value={100} style={{ height: 5 }} />
                    </td>
                      <td>100%</td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <Progress value={60} style={{ height: 5 }} />
                    </td>
                      <td>60%</td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <Progress value={50} style={{ height: 5 }} />
                    </td>
                      <td>50%</td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <Progress value={50} style={{ height: 5 }} />
                    </td>
                      <td>50%</td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <Progress value={50} style={{ height: 5 }} />
                    </td>
                      <td>50%</td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <Progress value={50} style={{ height: 5 }} />
                    </td>
                      <td>50%</td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <Progress value={50} style={{ height: 5 }} />
                    </td>
                      <td>50%</td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <Progress value={50} style={{ height: 5 }} />
                    </td>
                      <td>50%</td>
                  </tr>
                  </tbody>
                </Table>
                </CardBody>
            </Card>
          </Col>
          <Col xl={4} lg={12} md={12}>
            <Card>
              <CardHeader>Version</CardHeader>
                <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Committs</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>V2.3.4</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>V2.3.4</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>V2.3.4</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>V2.3.4</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>V2.3.4</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>V2.3.4</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>V2.3.4</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td>V2.3.4</td>
                    <td>2</td>
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
export default CreateUseCasePage;
