import React, { useState } from 'react';
import { Avatar, List, ConfigProvider, Space } from 'antd';
import TemperatureDashboard from '@/components/temperatureDashboard/index';
import { Button } from 'antd';


const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },{
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  }
  const currentStatus = (status: number) => {
    const statusColors: Record<string, Object> = {
      0: {
        color: 'primary',
        text: '降温'
      },
      1: {
        color: 'green',
        text: '正常'
      },
      2: {
        color: 'danger',
        text: '升温'
      }
    };
    return statusColors[String(status)] as any;
  }
  return (
    <>
      <TemperatureDashboard
        currentTemperature={25}
        temperatureList={[20,30,40]}
        isOpen={isOpen}
        onClose={onClose}
      />
      <ConfigProvider
        theme={{
          token: {
            // colorTextDescription: 'white',
            // colorText: 'white',
          },
        }}
      >
        <List
          pagination={{
            position: 'bottom',
            align: 'end',
            showSizeChanger: true,
            defaultPageSize: 20
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <div className='items-center text-white flex justify-around w-full'>
                <div>放风机：{index}</div>
                <div>当前温度：25 °C</div>
                <div className='items-center flex'>
                  状态：
                  <Button size="small" color={currentStatus(index % 3).color} variant="solid">
                    {currentStatus(index % 3).text}
                  </Button>
                </div>
                <Button type="link" onClick={() => setIsOpen(true)}>具体信息</Button>
              </div>
            </List.Item>
          )}
        />
      </ConfigProvider>
    </>
  );
};

export default App;