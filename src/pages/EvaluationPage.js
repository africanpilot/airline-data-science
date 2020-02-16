import Page from 'components/Page';
// import {FormPageCSV} from './FormPageCSV'
import React from 'react';
import {
  Card, CardBody, CardHeader, Col, Row, Table, Button,
} from 'reactstrap';

const EvaluationPage = (props) => {

  return (
    <Page title="Evaluation and Conclusion" breadcrumbs={[{ name: 'Evaluation and Conclusion', active: true }]}>
      <Row>
      <Col xl={25} lg={12} md={12}>
        <Card>
          <CardHeader>Evaluate and Conclude Project</CardHeader>
            <CardBody>
                <Button color="primary">Evaluate and Conclude</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Project Evaluation and Conclusion</CardHeader>
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
                  <td>EvaluationAndConclusion1</td>
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

export default EvaluationPage;
