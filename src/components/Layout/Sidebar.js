import logo200Image from 'assets/img/logo/default.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-13.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import {
  MdChromeReaderMode,
  MdDashboard,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
  Collapse,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navItems = [
  { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
  { to: '/CreateUseCasePage', name: 'create use case', exact: false, Icon: MdChromeReaderMode },
  { to: '/LoadDataPage', name: 'load data', exact: false, Icon: MdChromeReaderMode },
  { to: '/DataQualityAssessmentPage', name: 'Quality Control', exact: true, Icon: MdChromeReaderMode },
  { to: '/DataAnalysisPage', name: 'Data Analysis', exact: true, Icon: MdChromeReaderMode },
];

const aiFactoryContents = [
  { to: '/MLModelsPage', name: 'ML Models', exact: false, Icon: MdChromeReaderMode },
  { to: '/DLModelsPage', name: 'DL Models', exact: false, Icon: MdChromeReaderMode },
  { to: '/EvaluateModelsPage', name: 'Evaluate Models', exact: false, Icon: MdChromeReaderMode },
];

const caseEvaluationContents = [
  { to: '/EvaluationPage', name: 'Evaluation', exact: true, Icon: MdChromeReaderMode },
  { to: '/PresentationPage', name: 'Presentation', exact: true, Icon: MdChromeReaderMode },
];

const settingsContents = [
  { to: '/SettingsPage', name: 'Settings', exact: true, Icon: MdChromeReaderMode },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: false,
    isOpenContents: false,
    isOpenPages: false,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="nav-item">
              <img
                src={logo200Image}
                width="205"
                height="130"
                className="pr-2"
                // style={{opacity: 0.95, backgroundSize: "60px 120px"}}
                alt=""
              />
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdChromeReaderMode className={bem.e('nav-item-icon')} />
                  <span className="">AI FACTORY</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {aiFactoryContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdChromeReaderMode className={bem.e('nav-item-icon')} />
                  <span className="">EVALUATE CASE</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPages}>
              {caseEvaluationContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdChromeReaderMode className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">SETTINGS</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponents}>
              {settingsContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
