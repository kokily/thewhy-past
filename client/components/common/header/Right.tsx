import React from 'react';
import styled from 'styled-components';

interface Props {}

const RightContentBox = styled.div`
  @media screen and (max-width: 765px) {
    display: none !important;
  }
`;

const Right: React.FC<Props> = () => {
  return (
    <RightContentBox className="header-column justify-content-end w-50 order-2 order-md-3">
      <div className="header-row">
        <ul className="header-extra-info">
          <li className="m-0">
            <div className="feature-box reverse-allres feature-box-style-2 align-items-center">
              <div className="feature-box-icon">
                <i
                  className="fab fa-whatsapp text-7 p-relative"
                  style={{ top: '-2px', color: '#463884' }}
                />
              </div>
              <div className="feature-box-info">
                <p
                  className="pb-0 font-weight-semibold line-height-5 text-2"
                  style={{
                    fontFamily: 'helvetica serif',
                  }}
                >
                  050-5055-7221
                  <br />
                  thewhycompany@naver.com
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </RightContentBox>
  );
};

export default Right;
