import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col,  Row,
  Button
  } from 'reactstrap';
import MenuQualityControl from 'components/MenuQualityControl';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import ModalQualityControl from 'components/ModalQualityControl';
import MovableRowQualityControl from 'components/MovableRowQualityControl'
import Editor from 'components/Editor.js'

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
                  <Editor/>  
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
              <CardHeader title = "Current Quality Controls Established"/>
              <CardBody>
                <MovableRowQualityControl/>
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
