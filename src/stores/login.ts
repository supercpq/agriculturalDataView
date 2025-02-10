import { create } from 'zustand'
import { getUserInfo } from '@/api/login';


interface UserInfo {
    displayName: string
    email: string
    phone: string
    avatar: string
}
const useLoginStore = create((set) => ({
    userInfo: {
        displayName: '',
        email: '',
        phone: '',
        avatar: ''
    },
    isLogin: false,
    publicDecryptionKey: '',
    updateUserInfo: (newlUserInfo: UserInfo) =>
        set((state: any) => ({
          userInfo: {
            ...state.userInfo,
            ...newlUserInfo,
        },
    })),
    updatePublicDecryptionKey: (newPublicDecryptionKey: string) => {
        set((state: any) => ({
            publicDecryptionKey: newPublicDecryptionKey
        }))
    },
    fetchUserInfo: async () => {
        set({ loading: true }); // 开始加载
        try {
            const response = await getUserInfo();
            set({ userInfo: response.data, loading: false, isLogin: true }); // 更新数据并结束加载
        } catch (error) {
            console.error('Failed to fetch user info:', error);
            set({ loading: false }); // 结束加载
        }
    },
    login: async (email: string, pwd: string) => {
        set({ loading: true }); // 开始加载
        // TODO: 登录逻辑
        try {
            const response = await getUserInfo();
            set({ userInfo: response.data, loading: false, isLogin: true }); // 更新数据并结束加载
            return true;
        } catch (error) {
            console.error('Failed to fetch user info:', error);
            set({ loading: false }); // 结束加载
            throw error;
        }
    },
    logout: () => {
        set({ userInfo: {
            displayName: '',
            email: '',
            phone: '',
            avatar: ''
        }, isLogin: false });
    }
}))

export default useLoginStore;