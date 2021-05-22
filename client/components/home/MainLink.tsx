import React from 'react';
import Card from './Card';

interface Props {}

const MainLink: React.FC<Props> = () => {
  const onMenu = (menu: string) => {
    document.location.href = `${menu}`;
  };

  return (
    <section
      className="section section-default border-0 mt-0 pt-2 mb-0"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container py-4">
        <div className="row">
          <div className="col pb-4 text-center">
            <h2
              className="mb-2 pt-2"
              style={{
                fontFamily: '윤고딕',
                fontSize: '31px',
                color: '#463884',
              }}
            >
              교육 프로그램
            </h2>
            <p
              className="lead"
              style={{
                wordBreak: 'keep-all',
                fontFamily: '윤고딕',
                fontSize: '24px',
                color: '#808080',
              }}
            >
              더와이 컨설팅에서 진행하는 맞춤화된 교육 프로그램입니다.
            </p>
          </div>
        </div>

        <div className="row pb-4 mb-2">
          <Card
            url="/education"
            img="/img/main/main01.png"
            title="서비스 커뮤니케이션"
            sub="서비스 현장에서 역량 향상을 위한 커뮤니케이션 프로그램"
            onClick={onMenu}
          />
          <Card
            url="/education/business"
            img="/img/main/main02.png"
            title="비즈니스 커뮤니케이션"
            sub="비즈니스 현장에서 역량 향상을 위한 커뮤니케이션 프로그램"
            onClick={onMenu}
          />
          <Card
            url="/education/leader"
            img="/img/main/main03.png"
            title="리더 커뮤니케이션"
            sub="조직의 성과와 효율적인 경영을 위한 리더의 커뮤니케이션 훈련 프로그램"
            onClick={onMenu}
          />
        </div>
        <div className="row pb-4 mb-2">
          <Card
            url="/education/extended"
            img="/img/main/main04.png"
            title="Extended-DISC 커뮤니케이션"
            sub="개인, 팀, 조직의 소통 능력 활성화와 교육훈련을 위한 행동성향 분석 프로그램"
            onClick={onMenu}
          />
          <Card
            url="/education"
            img="/img/main/main05.png"
            title="직무역량 강화 프로그램"
            sub="직무분석을 기반으로 직무역량 강화를 위한 교육훈련 프로그램"
            onClick={onMenu}
          />
          <Card
            url="/education/online"
            img="/img/main/main06.png"
            title="온라인(On-Line) 프로그램"
            sub="실시간 또는 동영상 형태의 온라인 프로그램"
            onClick={onMenu}
          />
        </div>
      </div>
    </section>
  );
};

export default MainLink;
