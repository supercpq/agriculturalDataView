
import { useCallback, useEffect, useState } from 'react';
import styles from './timeView.module.scss';
import dayjs from 'dayjs';
const timeView = () => {
    const [currentTime, setCurrentTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    const updateTime = useCallback(() => {
        setInterval(() => {
            setCurrentTime(dayjs().format('YYYY-MM-DD HH:mm:ss'));
        }, 1000);
    }, []);
    useEffect(() => {
        updateTime();
    }, [updateTime]);
    return (
        <div className={styles.timeView}>
            {currentTime}
        </div>
    );
}

export default timeView;