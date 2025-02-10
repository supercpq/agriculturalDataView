import { Chart } from '@antv/g2';
import { Drawer } from 'antd';
import { useEffect, useState } from 'react';
import Prediction from './prediction';
interface TemperatureDashboardProps {
    currentTemperature: number;
    temperatureList: number[];
    isOpen: boolean;
    onClose: () => void;
}
const TemperatureDashboard = (props: TemperatureDashboardProps) => {
    // const [ currentTemperature, setCurrentTemperature ] = useState(25);
    // const [ open, setOpen ] = useState(false);
    const {
        currentTemperature,
        temperatureList,
        isOpen: open,
        onClose,
    } = props;
    useEffect(() => {
        const chart = new Chart({
            container: 'TemperatureDashboard-container',
            autoFit: true,
        });
        
        chart
            .gauge()
            .data({
            value: {
                target: currentTemperature,
                total: Math.max(...temperatureList),
                name: 'score',
                thresholds: temperatureList,
            },
            })
            .scale('color', {
            range: ['#226df6', 'green', '#F4664A'],
            })
            .style(
            'textContent',
            (target: any, total: any) => `温度 ${target}`,
            )
            .legend(false);
        if (open) {
            chart.render();
        }
        // const chart = new Chart({
        //     container: 'container',
        //     autoFit: true,
        //   });
          
        //   chart
        //     .gauge()
        //     .data({
        //       value: {
        //         target: 120,
        //         total: 400,
        //         name: 'score',
        //       },
        //     })
        //     .legend(false);
          
        //   chart.render();
    }, [currentTemperature, open]);
  
    return (
        <Drawer
            title={`具体信息`}
            placement="right"
            size="large"
            onClose={onClose}
            open={open}
        >
            <div
                id="TemperatureDashboard-container"
                className='bg-white overflow-hidden absolute top-0 end-0 m-3 p-2'
                style={{
                    width: 300,
                    height: 260,
                }}
            />
            <Prediction/>
        </Drawer>
    );
      
}
export default TemperatureDashboard;