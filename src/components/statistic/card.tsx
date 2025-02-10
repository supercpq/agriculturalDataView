import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const StatisticCard: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="温度上升"
          value={112}
          valueStyle={{ color: 'red' }}
          prefix={<ArrowUpOutlined />}
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="温度下降"
          value={93}
          valueStyle={{ color: 'blue' }}
          prefix={<ArrowDownOutlined />}
        />
      </Card>
    </Col>
  </Row>
);

export default StatisticCard;