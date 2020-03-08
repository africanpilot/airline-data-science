import Page from 'components/Page';
import React from 'react';
import {
  Card, CardBody, CardHeader, Col, Row, Table, Button,
} from 'reactstrap';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

class DataAnalysisBuildPage extends React.Component {

  render() {

    const layout = [
      {i: '1', x: 4, y: 0, w: 1, h: 2},
      {i: '2', x: 4, y: 0, w: 1, h: 2},
      {i: '3', x: 4, y: 0, w: 1, h: 2}
    ];

  return (
    <Page title="Data Analysis Build" breadcrumbs={[{ name: 'Data Analysis Build', active: true }]}>
      <Row>
      <Col xl={25} lg={12} md={12}>
        <Card>
          <CardHeader>Data Analysis Build</CardHeader>
            <CardBody>
              <ResponsiveGridLayout className="layout" layouts={layout}
                breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
                <div key="1">1</div>
                <div key="2">2</div>
                <div key="3">3</div>
                </ResponsiveGridLayout>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
}
}
export default DataAnalysisBuildPage;
