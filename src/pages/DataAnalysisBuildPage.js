import Page from 'components/Page';
import React from 'react';
import {
  Card, CardBody, CardHeader, Col, Row, Table, Button,
} from 'reactstrap';
import { Responsive, WidthProvider } from 'react-grid-layout';
import AddRemoveLayout from 'components/AddRemoveLayout.jsx'

const ResponsiveGridLayout = WidthProvider(Responsive);

class DataAnalysisBuildPage extends React.Component {

  render() {

  return (
    <Page title="Data Analysis Build" breadcrumbs={[{ name: 'Data Analysis Build', active: true }]}>
      <Row>
        <Col xl={25} lg={12} md={12}>
          <AddRemoveLayout/>
        </Col>
      </Row>
    </Page>
  );
}
}
export default DataAnalysisBuildPage;
