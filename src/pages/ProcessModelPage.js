import Page from 'components/Page';
import React from 'react';
import { Card, CardBody,  CardHeader,  Col,  Row
  } from 'reactstrap';

// const today = new Date();

class ProcessModelPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Page
        className="ProcessModelPage"
        title="Process Model"
        breadcrumbs={[{ name: 'Process Model', active: true }]}
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Process Current Model</CardHeader>
              <CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default ProcessModelPage;
