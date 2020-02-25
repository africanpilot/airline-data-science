import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col,  Row,
  Table, Button
  } from 'reactstrap';
import MenuQualityControl from 'components/MenuQualityControl';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import ModalQualityControl from 'components/ModalQualityControl';

// const today = new Date();

const ReportPage = (props) => {

    return (
      <Page
        className="ReportPage"
        title="Quality Control Report"
        breadcrumbs={[{ name: 'Data Quality Control / Quality Control Report', active: true }]}
      >
      <Row>
        <Col xl={25} lg={12} md={12}>
          <Card>
              <CardBody>
                <ModalQualityControl buttonLabel={"Generate"}/>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader 
                  action={
                          <IconButton aria-label="settings">
                            <MenuQualityControl/>
                          </IconButton>
                        }
                  title="Missing Values: Before"
                />
                <CardBody>
                  before control established
                </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader 
                action={
                        <IconButton aria-label="settings">
                          <MenuQualityControl/>
                        </IconButton>
                      }
                title="Missing Values: After"
               />
              <CardBody>
                after control established
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader 
                action={
                        <IconButton aria-label="settings">
                          <MenuQualityControl/>
                        </IconButton>
                      }
                title="Bad Values: Before"
              />
                <CardBody>
                  before control established
                </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader 
                  action={
                          <IconButton aria-label="settings">
                            <MenuQualityControl/>
                          </IconButton>
                        }
                  title="Bad Values: After"
              />
              <CardBody>
                after control established
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
            <CardHeader 
                action={
                        <IconButton aria-label="settings">
                          <MenuQualityControl/>
                        </IconButton>
                      }
                title="Outliers: Before"
            />
              <CardBody>
                before control established
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
            <CardHeader 
                  action={
                          <IconButton aria-label="settings">
                            <MenuQualityControl/>
                          </IconButton>
                        }
                  title="Outliers: After"
            />
              <CardBody>
                after control established
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Current controls Established</CardHeader>
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
        <Button outline color="secondary">Save Quality Control and Generate</Button>
      </Page>
    );
  };

export default ReportPage;
