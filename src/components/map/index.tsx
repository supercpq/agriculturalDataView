import { Drawer } from 'antd';
import { useEffect, useState } from 'react';
import { PointLayer, Scene, Source } from '@antv/l7';
// import { GaodeMap } from '@antv/l7-maps';
import mockData from './mockData';
import { TMap } from '@antv/l7-maps';
interface MapProps {
    isOpen: boolean;
    onClose: () => void;
}
const MapDashboard = (props: MapProps) => {
    console.log('mockData.length', mockData.length);
    const {
        isOpen: open,
        onClose,
    } = props;

    useEffect(() => {
        if (!open) {
            return;
        }
        const scene = new Scene({
            id: 'MapDashboard-container',
            map: new TMap({
                style: 'dark',
                center: [140.067171, 36.26186],
                zoom: 3,
            }),
        });
        
        scene.on('loaded', () => {
        // const dataSource = new Source(data, {
        //   parser: {
        //     type: 'csv',
        //     x: 'lng',
        //     y: 'lat',
        //   },
        //   cluster: true,
        // });
        const dataSource = new Source(mockData, {
            parser: {
                type: 'json',
                x: 'lng', // 经度字段
                y: 'lat', // 纬度字段
            },
            cluster: true, // 启用聚合功能
        });
        console.log('dataSource', dataSource);
        const pointLayer = new PointLayer({
            autoFit: true,
          })
            .source(dataSource)
            .shape('circle')
            .scale('point_count', {
              type: 'quantile',
            })
            .size('point_count', [5, 10, 15, 20, 25])
            .active(true)
            .color('rgb(73,167,86)')
            .style({
              strokeWidth: 1,
              stroke: '#fff',
            });
    
          // 聚合图标注
          const pointLayerText = new PointLayer({
            autoFit: false,
          })
            .source(dataSource)
            .shape('point_count', 'text')
            .size(15)
            .active(true)
            .color('#fff')
            .style({
              strokeWidth: 0,
              stroke: '#fff',
            });
    
          scene.addLayer(pointLayer);
          scene.addLayer(pointLayerText);
        });
    },  [open]);
  
    return (
        <Drawer
            title={`具体信息`}
            placement="right"
            size="large"
            onClose={onClose}
            open={open}
        >
            <div
                id="MapDashboard-container"
                className='bg-white overflow-hidden absolute top-12 end-0 m-3 p-2'
                style={{
                    width: 700,
                    height: 600,
                }}
            />
        </Drawer>
    );
      
}
export default MapDashboard;