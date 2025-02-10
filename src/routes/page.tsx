import styles from './index.module.css';
import Container from '@/components/pageContainer';
import Header from '@/components/header';
import '@/utils/index.css';
import { useState } from 'react';
import { Button } from 'antd';
import MapDashboard from '@/components/map';
import List from '@/components/list';
import StatisticCard from '@/components/statistic/card';
import Prediction from '@/components/temperatureDashboard/prediction';
import useLoginStore from '@/stores/login';
import noLogin from '@/assets/images/no-login.svg';
const Index = () => {
  const headerNode = () => (
    <Header title="农业大棚大数据展示系统"/>
  );
  const isLogined = useLoginStore((state: any) => state.isLogin)
  const [isOpenMap, setIsOpenMap] = useState(false);
  // const 
  return (
    <Container
      headerNode={headerNode()}
    >
      {isLogined
        ? <>
          <div>
            <MapDashboard
              isOpen={isOpenMap}
              onClose={() => setIsOpenMap(false)}
            />
          </div>
          <div className='w-full h-full p-3 flex gap-10'>
            <div className='box-special-borders-angle flex-1 whitespace-nowrap bg-transparent overflow-y-scroll no-scrollbar'>
              <List/>
            </div>
            <div className='flex-1 flex flex-col justify-between h-full gap-3'>
              <StatisticCard />
              <div className='bg-white bg-opacity-80 rounded-lg p-2'>
                <Prediction />
              </div>
            </div>
            <div className='flex-2'>
              <Button onClick={() => setIsOpenMap(true)}>分布地图</Button>
              
            </div>
          </div>
        </>
        : <>
          <div className='flex flex-col gap-3 items-center justify-center'>
            <img className='w-80' src={noLogin} alt="no login" />
            <div className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
              您还没有登录，请点击右上角登录后再使用
            </div>
          </div>
        </>
      }
    </Container>
  );
};

export default Index;
