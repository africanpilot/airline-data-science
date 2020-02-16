import Page from 'components/Page';
import React from 'react';
import { Card, CardBody,  CardHeader,  Col,  Row
  } from 'reactstrap';

// const today = new Date();

class CreateModelPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Page
        className="CreateModelPage"
        title="Create Model"
        breadcrumbs={[{ name: 'Create Model', active: true }]}
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Create New Models</CardHeader>
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
