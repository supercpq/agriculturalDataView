import styles from './index.module.css';
import Container from '@/components/pageContainer';
import Header from '@/components/header';
import '@/utils/index.css';
import TemperatureDashboard from '@/components/temperatureDashboard/index';
import { useState } from 'react';
import { Button } from 'antd';
import MapDashboard from '@/components/map';
const Index = () => {
  const headerNode = () => (
    <Header title="农业大棚大数据展示系统"/>
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  }
  // const 
  return (
    <Container
      headerNode={headerNode()}
    >
        <div>
          <TemperatureDashboard
            currentTemperature={25}
            temperatureList={[20,30,40]}
            isOpen={isOpen}
            onClose={onClose}
          />
          <MapDashboard
            isOpen={isOpenMap}
            onClose={() => setIsOpenMap(false)}
          />
        </div>
        <Button onClick={() => setIsOpen(true)}>温度</Button>
        <Button onClick={() => setIsOpenMap(true)}>地图</Button>
    </Container>
  );
};

export default Index;
