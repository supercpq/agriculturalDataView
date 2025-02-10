import { Chart } from '@antv/g2';
import { useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';

const Prediction = () => {
    const chartId = useMemo(() => nanoid(), []);
    
    useEffect(() => {
        const data = [
            { hour: '1', min: 3, actual: 4, max: 5 },
            { hour: '2', min: 4, actual: 5, max: 6 },
            { hour: '3', min: 3.5, actual: 4.5, max: 7.5 },
            { hour: '4', min: 5, actual: 6, max: 8 },
            { hour: '5', min: 4.9, actual: 5.9, max: 8.9 },
            { hour: '6', min: 6, actual: 7, max: 9 },
            { hour: '7', min: 7, actual: 8, max: 10 },
            { hour: '8', min: 9, actual: 10, max: 11 },
            { hour: '9', min: 13, actual: 14, max: 15 },
            { hour: '10', min: 12, actual: 13, max: 14 },
            { hour: '11', min: 11, actual: 12, max: 13 },
            { hour: '12', min: 10, actual: 11, max: 12 },
        ];
        const transformedData = data.flatMap(({ hour, min, actual, max }) => [
            { hour, value: min, type: '低温阈值' },
            { hour, value: actual, type: '真实温度' },
            { hour, value: max, type: '高温阈值' },
          ]);
        const chart = new Chart({
            container: chartId,
            autoFit: true,
        });
        
        chart
            .data(transformedData)
            .encode('x', 'hour')
            .encode('y', 'value')
            .encode('color', 'type') // 4. 让 min 和 actual 用不同的颜色显示
            .scale('x', { range: [0, 1] })
            .scale('y', { nice: true });
        
        chart.line().label({
            text: '',
            style: {
            dx: -10,
            dy: -12,
            },
        });
        
        chart.point().style('fill', 'white').tooltip(false);
        
        chart.render();
    }, []);

    return (
        <>
            <h2>温度折线图：</h2>
            <div id={chartId}></div>
        </>
    )
}

export default Prediction;
