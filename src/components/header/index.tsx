import styles from './index.module.scss';
import TimeView from './timeView';
import { Button, Popconfirm } from 'antd';
import useLoginStore from '@/stores/login';
import LoginDialog from '@/components/login';
import { useState } from 'react';
interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {
    const { title } = props;
    const isLogined = useLoginStore((state: any) => state.isLogin)
    const [isShowLogin, setIsShowLogin] = useState(false)
    const goLogin = () => {
        setIsShowLogin(true);
    }
    const closeLogin = () => {
        setIsShowLogin(false)
    }
    const logout = () => {
        alert('登出成功')
    }
    return (
        <div className={styles.header}>
            {title}
            <LoginDialog isModalOpen={isShowLogin} closeDialog={closeLogin}/>
            { isLogined
                ? <Popconfirm
                    placement="bottomRight"
                    title="你确定要登出吗？"
                    onConfirm={logout}
                    okText="是的"
                    cancelText="不"
                >
                    <Button danger className={styles.loginBtn}>登出</Button>
                </Popconfirm>
                : <Button
                    type="primary"
                    className={styles.loginBtn}
                    onClick={goLogin}
                >登录</Button>
            }
            <TimeView />
        </div>
    )
}

export default Header;