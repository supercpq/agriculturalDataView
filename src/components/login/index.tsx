import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface ModalProps {
    closeDialog: () => void;
    isModalOpen: boolean;
}

const Login = (props: ModalProps) => {
	const { closeDialog, isModalOpen } = props;
	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setInputPassword] = useState('');
	const goLogin = () => {
		// TODO: 登录逻辑
        alert(inputEmail + ', ' + inputPassword)
	};

	const handleCancel = () => {
        setInputEmail('');
        setInputPassword('');
        closeDialog();
    };

    return (
        <>
        <Modal title="登录" width={300} open={isModalOpen} onCancel={handleCancel} footer={null}>
            <div className='flex flex-col gap-6'>
                <Input
                    placeholder="用户名/邮箱/手机号"
                    maxLength={100}
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                />
                <Input.Password
                    placeholder="密码"
                    maxLength={30}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                />
                <Button type="primary" onClick={goLogin}>登录</Button>
            </div>
        </Modal>
        </>
    );
};

export default Login;