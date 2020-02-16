import Page from 'components/Page';
import React, { useState } from 'react';
import { Card, CardBody,  CardHeader,  Col,  Row,
  Table, Button, Form, Input, Label, FormGroup
  } from 'reactstrap';

// const today = new Date();

const ReportPage = (props) => {

    const [setBackdrop] = useState(true);

    const changeBackdrop = e => {
      let value = e.target.value;
      if (value !== '') {
        value = JSON.parse(value);
      }
      setBackdrop(value);
    }

    return (
      <Page
        className="ReportPage"
        title="Quality Control Report"
        breadcrumbs={[{ name: 'Data Quality Control / Quality Control Report', active: true }]}
      >
      <Row>
        <Col xl={25} lg={12} md={12}>
          <Card>
            <CardHeader>Quality Control Report</CardHeader>
              <CardBody>
              <Form>
                <div>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    <FormGroup>
                      <Label for="backdrop">Project</Label>{' '}
                      <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                        <option></option>
                        <option>Project1</option>
                        <option>Project2</option>
                        <option>Project3</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="backdrop">Data Load</Label>{' '}
                      <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                        <option></option>
                        <option>Load1</option>
                        <option>Load2</option>
                        <option>Load3</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="backdrop">Rules</Label>{' '}
                      <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                        <option></option>
                        <option>Rule1</option>
                        <option>Rule2</option>
                        <option>Rule3</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="backdrop">Format</Label>{' '}
                      <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                        <option></option>
                        <option>Format1</option>
                        <option>Format2</option>
                        <option>Format3</option>
                      </Input>
                    </FormGroup>
                  </Form>
                  </div>
              </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader><b>Missing Values: Before Rules</b></CardHeader>
              <CardBody>
              before rules established
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader><b>Missing Values: After Rules </b>
                <Button size="sm" color="primary">Establish Rules</Button>
              </CardHeader>
              <CardBody>
                after rules established
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader><b>Bad Values: Before Rules</b></CardHeader>
              <CardBody>
              before rules established
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader><b>Bad Values: After Rules </b>
                <Button size="sm" color="primary">Establish Rules</Button>
              </CardHeader>
              <CardBody>
                after rules established
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader><b>Outliers: Before Rules</b></CardHeader>
              <CardBody>
              before rules established
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader><b>Outliers: After Rules </b>
                <Button size="sm" color="primary">Establish Rules</Button>
              </CardHeader>
              <CardBody>
                after rules established
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader><b>Categorical: Before Rules</b></CardHeader>
              <CardBody>
              before rules established
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader><b>Categorical: After Rules </b>
                <Button size="sm" color="primary">Establish Rules</Button>
              </CardHeader>
              <CardBody>
                after rules established
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader><b>Feature Scaling: Before Rules</b></CardHeader>
              <CardBody>
              before rules established
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader><b>Feature Scaling: After Rules </b>
                <Button size="sm" color="primary">Establish Rules</Button>
              </CardHeader>
              <CardBody>
                after rules established
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Current Rules Established</CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Rule Type</th>
                      <th>Method</th>
                      <th>Applies To</th>
                      <th>View</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Missing Values</td>
                    <td>Fillna</td>
                    <td>All Columns</td>
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
        <br />
        <Button color="secondary">Save Rules and Generate Report</Button>
      </Page>
    );
  };

export default ReportPage;
