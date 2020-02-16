import Page from 'components/Page';
// import {FormPageCSV} from './FormPageCSV'
import React from 'react';
import {
  Card, CardBody, CardHeader, Col, Row, Table, Button,
} from 'reactstrap';

const DataAnalysisPage = (props) => {

  return (
    <Page title="Data Analysis" breadcrumbs={[{ name: 'Data Analysis', active: true }]}>
      <Row>
      <Col xl={25} lg={12} md={12}>
        <Card>
          <CardHeader>Data Analysis</CardHeader>
            <CardBody>
                <Button color="primary">Data Analysis</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Data Analysis</CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Project</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>DataAnalysis1</td>
                  <td>Project1</td>
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
};

export default DataAnalysisPage;
