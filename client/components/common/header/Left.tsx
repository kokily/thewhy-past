import React from 'react';
import NaverIcon from '../NaverIcon';

interface Props {}

const Left: React.FC<Props> = () => {
  return (
    <div className="header-column justify-content-start w-50 order-md-1 d-none d-md-flex">
      <div className="header-row">
        <ul className="header-extra-info">
          <li className="m-0">
            <div className="feature-box feature-box-style-2 align-items-center">
              <div className="feature-box-info">
                <p className="pb-0 font-weight-semibold line-height-5 text-2">
                  커뮤니케이션 전문 교육컨설팅
                </p>
                <ul className="social-icons mt-2 text-center">
                  <li className="social-icons-youtube ml-0">
                    <a href="https://www.youtube.com/channel/UCggECPaCiuurAttkyNdWWDg/featured">
                      <i className="fab fa-youtube text-2" />
                    </a>
                  </li>
                  <li className="ml-2">
                    <NaverIcon href="https://blog.naver.com/thewhycompany" />
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left;
