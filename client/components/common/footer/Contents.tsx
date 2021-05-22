import React from 'react';
import useKakaoMap from './hooks/useKakaoMap';
import NaverIcon from '../NaverIcon';
import KakaoMap from './KakaoMap';

function FooterContent() {
  const kakaoMap = useKakaoMap();

  const ContactUs = (
    <div className="col-md-3 mb-4 mb-lg-0">
      <h5 className="text-3 mb-3 pb-1">Contact Us</h5>
      <p className="text-8 text-color-light font-weight-bold">050-5055-7221</p>
      <p className="mb-2">Tel: 050-5055-7221</p>
      <p className="mb-2">Fax: (0504) </p>
      <ul className="list list-icons list-icons-lg">
        <li className="mb-1">
          <i className="far fa-dot-circle text-color-primary" />
          <p className="m-0">서울시 강남구 영동대로 602, 6층 F231</p>
        </li>
        <li className="mb-1">
          <i className="far fa-envelope text-color-primary" />
          <p className="m-0">thewhycompany@naver.com</p>
        </li>
      </ul>
      <ul
        className="footer-social-icons social-icons mt-4"
        style={{ transition: '0.3s all' }}
      >
        <li className="social-icons-youtube mr-1">
          <a href="https://www.youtube.com/channel/UCggECPaCiuurAttkyNdWWDg/featured">
            <i className="fab fa-youtube text-2" />
          </a>
        </li>
        <li className="naver">
          <NaverIcon href="https://blog.naver.com/thewhycompany" />
        </li>
      </ul>
    </div>
  );

  const PageInfos = (
    <div className="col-md-6 mb-4 mb-lg-0">
      <h5 className="text-3 mb-1">회사소개</h5>
      <p className="mt-2 mb-2">
        더와이컴퍼니는 행복한 삶을 꿈꾸는 &quot;커뮤니케이션&quot; 전문 교육
        컨설팅 회사입니다.
      </p>
      <p className="mt-2 mb-2">
        우리가 존재하는 이유는{' '}
        <strong className="text-3">&quot;행복한 관계&quot;</strong>를 꿈꾸는
        것입니다.
      </p>
      <p className="mt-2 mb-2">
        우리의 비전은 믿을 수 있는{' '}
        <strong className="text-3">커뮤니케이터</strong>가 되는 것입니다.
      </p>

      <div className="row pt-3">
        {/* col-6(대화면 4개) col-lg-3(중화면 2개) */}
        <div className="col-6 col-lg-3 mb-4 mb-lg-0">
          <h5 className="text-3 mb-3">주요링크</h5>
          <ul className="list list-icons list-icons-sm mb-0">
            <li>
              <i className="fas fa-angle-right top-8" />
              <a href="/question" className="link-hover-style-1">
                교육문의
              </a>
            </li>

            <li>
              <i className="fas fa-angle-right top-8" />
              <a href="/education" className="link-hover-style-1">
                교육 프로그램
              </a>
            </li>

            <li>
              <i className="fas fa-angle-right top-8" />
              <a href="/online" className="link-hover-style-1">
                온라인 프로그램
              </a>
            </li>

            <li>
              <i className="fas fa-angle-right top-8" />
              <a href="/stories" className="link-hover-style-1">
                The Y 이야기
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const Map = (
    <div className="col-md-3 mb-4 mb-lg-0">
      <h5 className="text-3 mb-1">오시는 길</h5>
      <KakaoMap ref={kakaoMap} />
    </div>
  );

  return (
    <div className="container">
      <div className="footer-ribbon">
        <span>Get in Touch!</span>
      </div>

      <div className="row py-5 my-4">
        {ContactUs}
        {PageInfos}
        {/*{Map}*/}
      </div>
    </div>
  );
}

export default FooterContent;
