import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col,  Row,
  } from 'reactstrap';
import MenuCreateMLModel from 'components/MenuCreateMLModel';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ModalCreateModel from 'components/ModalCreateModel';
import ProcessMLModel from 'components/ProcessMLModel';
import JupViewer from 'components/JupViewer.js'

const ipynb1 = require('components/notebooks/classificationreportexample/Code_Output1.ipynb')
const ipynb2 = require('components/notebooks/classificationreportexample/Code_Output2.ipynb')

class CreateModelPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    
    this.setState({
      showComponent: true,
    });
  }
  
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
                <br/>
                <ProcessMLModel/>
                <br/>
                <PlayCircleOutlineIcon color="primary" onClick={this._onButtonClick} />
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
                            <MenuCreateMLModel/>
                          </IconButton>
                        }
                  title="Processname V1.1"
                />
                <CardBody>
                classification_report
                {this.state.showComponent ? <JupViewer file={ipynb1}/> :null}       
                </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader 
                action={
                        <IconButton aria-label="settings">
                          <MenuCreateMLModel/>
                        </IconButton>
                      }
                title="Processname V1.2"
               />
              <CardBody>
                classification_report
                {this.state.showComponent ? <JupViewer file={ipynb2}/> :null}  
              </CardBody>
            </Card>
          </Col>         
        </Row>
      </Page>
    );
  }
}
export default CreateModelPage;
