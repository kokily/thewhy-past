import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Title = styled.h4`
  &:before {
    content: '';
    display: block;
    border-top: 3px solid ${oc.blue[6]};
    width: 100px;
    margin: -20px auto 5px auto;
  }
`;

const CardTopImage = styled.img`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    filter: grayscale(80%);
    -webkit-filter: grayscale(80%);
  }
`;

interface Props {
  url: string;
  img: string;
  title: string;
  sub: string;
  onClick: (menu: string) => void;
}

const Card: React.FC<Props> = ({ url, img, title, sub, onClick }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card align-items-center">
        <CardTopImage
          className="card-img-top"
          src={img}
          alt={title}
          onClick={() => onClick(url)}
        />
        <div className="card-body pl-1 pr-1">
          <Title
            className="card-title text-center mb-2 pt-1"
            style={{
              fontFamily: '윤고딕340',
              fontSize: '23px',
              color: '#463884',
            }}
          >
            {title}
          </Title>
          <p
            className="card-text"
            style={{
              textAlign: 'center',
              maxWidth: '297px',
              height: '52px',
              wordBreak: 'keep-all',
              fontFamily: '윤고딕310',
              fontSize: '19px',
              color: '#000000',
              lineHeight: 1.3,
            }}
          >
            {sub}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
