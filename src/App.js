import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';


const AuthPage = React.lazy(() => import('pages/AuthPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const CreateUseCasePage = React.lazy(() => import('pages/CreateUseCasePage'));
const NewUseCasePage = React.lazy(() => import('pages/NewUseCasePage'));
const LoadDataPage = React.lazy(() => import('pages/LoadDataPage'));
const ConnectDataPage = React.lazy(() => import('pages/ConnectDataPage'));
const DataQualityAssessmentPage = React.lazy(() => import('pages/DataQualityAssessmentPage'));
const ReportPage = React.lazy(() => import('pages/ReportPage'));
const DataAnalysisPage = React.lazy(() => import('pages/DataAnalysisPage'));
const MLModelsPage = React.lazy(() => import('pages/MLModelsPage'));
const CreateModelPage = React.lazy(() => import('pages/CreateModelPage'));
const ProcessModelPage = React.lazy(() => import('pages/ProcessModelPage'));
const DLModelsPage = React.lazy(() => import('pages/DLModelsPage'));
const EvaluateModelsPage = React.lazy(() => import('pages/EvaluateModelsPage'));
const EvaluationPage = React.lazy(() => import('pages/EvaluationPage'));
const PresentationPage = React.lazy(() => import('pages/PresentationPage'));
const SettingsPage = React.lazy(() => import('pages/SettingsPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/CreateUseCasePage" component={CreateUseCasePage} />
                <Route exact path="/NewUseCasePage" component={NewUseCasePage} />
                <Route exact path="/LoadDataPage" component={LoadDataPage} />
                <Route exact path="/ConnectDataPage" component={ConnectDataPage} />
                <Route exact path="/DataQualityAssessmentPage" component={DataQualityAssessmentPage} />
                <Route exact path="/ReportPage" component={ReportPage} />
                <Route exact path="/DataAnalysisPage" component={DataAnalysisPage} />
                <Route exact path="/MLModelsPage" component={MLModelsPage} />
                <Route exact path="/CreateModelPage" component={CreateModelPage} />
                <Route exact path="/ProcessModelPage" component={ProcessModelPage} />
                <Route exact path="/DLModelsPage" component={DLModelsPage} />
                <Route exact path="/EvaluateModelsPage" component={EvaluateModelsPage} />
                <Route exact path="/EvaluationPage" component={EvaluationPage} />
                <Route exact path="/PresentationPage" component={PresentationPage} />
                <Route exact path="/SettingsPage" component={SettingsPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
