import React from 'react';
import Top from './header/TopContainer';
import Navigation from './nav/Navigation';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header
      id="header"
      className="header-effect-shrink"
      data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 40, 'stickyHeaderContainerHeight': 70}"
    >
      <div className="header-body border-top-0">
        <Top />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
