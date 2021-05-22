import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.a<Props>`
  &:hover {
    background: ${oc.green[6]}!important;
  }
  span:before {
    font-family: sans-serif;
    font-size: 11px;
    font-weight: 600;
    content: 'N';
    color: ${oc.green[6]};
  }
  &:hover span:before {
    color: white;
  }
`;

interface Props {
  href: string;
}

const NaverIcon: React.FC<Props> = ({ href }) => {
  return (
    <Container href={href}>
      <span />
    </Container>
  );
};

export default NaverIcon;
