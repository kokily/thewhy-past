import React, { forwardRef, Ref } from 'react';

interface Props {
  ref: Ref<HTMLDivElement>;
}

const KakaoMap: React.FC<Props> = forwardRef((_, ref) => {
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <div ref={ref} style={{ width: '100%', height: '100%' }} />
    </div>
  );
});

export default KakaoMap;
