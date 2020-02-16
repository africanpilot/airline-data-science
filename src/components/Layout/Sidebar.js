import logo200Image from 'assets/img/logo/default.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-13.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import {
  MdChromeReaderMode,
  MdDashboard,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
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
  { to: '/MLModelsPage', name: 'ML Models', exact: true, Icon: MdChromeReaderMode },
  { to: '/EvaluationPage', name: 'Evaluation', exact: true, Icon: MdChromeReaderMode },
  { to: '/SettingsPage', name: 'Settings', exact: true, Icon: MdChromeReaderMode },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
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
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
