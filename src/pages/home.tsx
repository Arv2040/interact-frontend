import Navbar from '@/components/common/navbar';
import Feed from '@/screens/feed';
import Protect from '@/utils/protect';
import BaseWrapper from '@/wrappers/base';
import MainWrapper from '@/wrappers/main';
import SideWrapper from '@/wrappers/side';
import React, { useState } from 'react';

const Home = () => {
  const [active, setActive] = useState(0);
  return (
    <BaseWrapper>
      <Navbar index={1} />
      <MainWrapper>
        <div className="w-full flex flex-col gap-4">
          <div className="w-5/6 m-auto bg-slate-100 flex justify-around">
            <div
              onClick={() => setActive(0)}
              className={`${active == 0 ? 'bg-slate-300' : 'bg-slate-200'} w-1/2 text-center`}
            >
              Feed
            </div>
            <div
              onClick={() => setActive(1)}
              className={`${active == 1 ? 'bg-slate-300' : 'bg-slate-200'} w-1/2 text-center`}
            >
              Discover
            </div>
          </div>
          {active == 0 ? <Feed /> : <></>}
        </div>
      </MainWrapper>
      <SideWrapper>
        <div></div>
      </SideWrapper>
    </BaseWrapper>
  );
};

export default Protect(Home);
