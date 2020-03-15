import logo200Image from 'assets/img/logo/default.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-13.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar,} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const bem = bn.create('createModelSidebar');

class CreateModelSidebar extends React.Component {

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
        </div>
      </aside>
    );
  }
}

export default CreateModelSidebar;
