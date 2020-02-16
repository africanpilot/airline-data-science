import Page from 'components/Page';
// import {FormPageCSV} from './FormPageCSV'
import React from 'react';
import {
  Card, CardBody, CardHeader, Col, Form, Row
} from 'reactstrap';
import {Redirect } from 'react-router-dom';
import HorizontalLabelPositionBelowStepper from 'components/HorizontalLabelPositionBelowStepper';

class NewUseCasePage extends React.Component {
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
      return <Redirect to='/CreateUseCasePage' />
    }
  }

  render() {
  return (
    <Page title="Create New Use Case" breadcrumbs={[{ name: 'Create Use Case / Create New Use Case', active: true }]}>
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Use Case Fields</CardHeader>
              <CardBody>
              <Form>
                <HorizontalLabelPositionBelowStepper/>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>View Current Selections</CardHeader>
              <CardBody>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
}
}

export default NewUseCasePage;
