import React from 'react';
import Contents from './footer/Contents';
import Copyright from './footer/Copyright';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer id="footer" className="mt-0">
      <Contents />
      <Copyright />
    </footer>
  );
};

export default Footer;
