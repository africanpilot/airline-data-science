import Page from 'components/Page';
import React from 'react';
import { Card, CardBody,  CardHeader,  Col, Table,  Row} from 'reactstrap';
import {Redirect } from 'react-router-dom';
import DbTableQualityControl from 'components/DbTableQualityControl';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
            <CardHeader>
              {this.renderRedirect()}
              <AddCircleIcon fontSize="large" outline color="primary" onClick={this.setRedirect}>Add Quality Control</AddCircleIcon>
            </CardHeader>
              <CardBody>
              <DbTableQualityControl/>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Quality Control Type</CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Quality Control Type</th>
                      <th>Method</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Missing Values</td>
                    <td>Fillna</td>
                  </tr>
                  <tr>
                    <td>Bad Values</td>
                    <td>Replace</td>
                  </tr>
                  <tr>
                    <td>Outliers</td>
                    <td>Remove 3 Standard Deviations</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3">
              <CardHeader>Quality Control Formats</CardHeader>
              <CardBody>
                <Table responsive>
                    <thead>
                      <tr>
                        <th>Format</th>
                        <th># Sections</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Format 1</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>Format 2</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Format 3</td>
                      <td>4</td>
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
