import Page from 'components/Page';
// import {FormPageCSV} from './FormPageCSV'
import React from 'react';
import {
  Card, CardBody, CardHeader, Col, Row, Table, Button,
} from 'reactstrap';
import {Redirect } from 'react-router-dom';
import DbTableDataAnalysis from 'components/DbTableDataAnalysis';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class DataAnalysisPage extends React.Component {
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
      return <Redirect to='/DataAnalysisBuildPage' />
    }
  }

  render() {

  return (
    <Page className="DataAnalysisPage" title="Data Analysis" breadcrumbs={[{ name: 'Data Analysis', active: true }]}>
      <Row>
      <Col xl={25} lg={12} md={12}>
        <Card>
        <CardHeader>
              {this.renderRedirect()}
                <AddCircleIcon fontSize="large" outline color="primary" onClick={this.setRedirect}>Data Analysis Build</AddCircleIcon>
              </CardHeader>
            <CardBody>
                <DbTableDataAnalysis/>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
          <Col xl={8} lg={12} md={12}>
            <Card>
              <CardHeader>Analysis Preview</CardHeader>
                <CardBody>
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
                      <th>Version</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Bar Chart</td>
                    <td>V2.3.4</td>
                  </tr>
                  <tr>
                    <td>Scatter Plot</td>
                    <td>V2.3.4</td>
                  </tr>
                  <tr>
                    <td>Table</td>
                    <td>V2.3.4</td>
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
export default DataAnalysisPage;
