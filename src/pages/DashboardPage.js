import HorizontalAvatarList from 'components/HorizontalAvatarList';
import Page from 'components/Page';
import UserProgressTable from 'components/UserProgressTable';
import { NumberWidget } from 'components/Widget';
import {
  avatarsData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { MdPersonPin} from 'react-icons/md';
import { Card, CardBody, CardDeck,  CardHeader,  Col,  Row, Button} from 'reactstrap';

// const today = new Date();

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Page
        className="DashboardPage"
        title=" Airline Data Science Dashboard"
        breadcrumbs={[{ name: ' Airline Data Science Dashboard', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Use Case Due"
              number="Feb 29, 2020"
              color="secondary"
              progress={{
                value: 50,
                label: "Completed",
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Task Due"
              number="Jan 31, 2020"
              color="secondary"
              progress={{
                value: 45,
                label: "Completed",
              }}
            />
          </Col>

          <CardDeck style={{ marginBottom: '1rem' }}>
            <Card body style={{ overflowX: 'auto','paddingBottom':'15px','height': 'fit-content','paddingTop': 'inherit'}}>
              <HorizontalAvatarList
                avatars={avatarsData}
                avatarProps={{ size: 50 }}
              />
            </Card>
          </CardDeck>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader> Use Case Stats
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button outline color="secondary" >All Use Cases</Button>
              </CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'name',
                    'progress',
                    '%',
                    'Task Due Date',
                    'Use Case Due Date',
                    'Version',
                    'Team Assigned',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
