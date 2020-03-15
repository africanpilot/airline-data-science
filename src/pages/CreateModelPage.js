import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col,  Row,
  Button
  } from 'reactstrap';
import MenuQualityControl from 'components/MenuQualityControl';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import ModalCreateModel from 'components/ModalCreateModel';

class CreateModelPage extends React.Component {

  render() {

    return (
      <Page
        className="CreateModelPage"
        title="Create Model"
        breadcrumbs={[{ name: 'Create Model', active: true }]}
      >
        <Row>
        <Col xl={25} lg={12} md={12}>
          <Card>
              <CardBody>
                <ModalCreateModel buttonLabel={"Create New Model"}/>
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
                  title="Processname V1.1"
                />
                <CardBody>
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
                title="Processname V1.2"
               />
              <CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default CreateModelPage;
