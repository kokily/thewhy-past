import React from 'react';
import styled from 'styled-components';
import Left from './Left';
import Right from './Right';

interface Props {}

const CenterLogo = styled.div`
  justify-content: center !important;
`;

const Center = () => (
  <div className="header-column justify-content-start justify-content-md-center order-1 order-md-2">
    <CenterLogo className="header-row">
      <div className="header-logo">
        <a href="https://thewhy.kr/">
          <img
            alt="Porto"
            width="200"
            height="96"
            data-sticky-width="200"
            data-sticky-height="82"
            src="/img/main-logo-fixed.png"
          />
        </a>
      </div>
    </CenterLogo>
  </div>
);

const TopContainer: React.FC<Props> = () => {
  return (
    <div className="header-container container">
      <div className="header-row">
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
};

export default TopContainer;
