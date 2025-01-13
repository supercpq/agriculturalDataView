import axios from "axios";

const commonParams = () => {
    return {
        "app_id": "1234567890",
        "time_stamp": new Date().getTime(),
    };
}
const axiosConfig = {
    baseURL: "",
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
};
const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
// 响应拦截器
axiosInstance.interceptors.response.use(
    (res) => {
        if (res.data?.code == "0") {
            return res.data;
        }
        return Promise.reject(res.data);
    },
    (error) => {
        Promise.reject(error);
    }
);

const apiGet = (url: string, params = {}, config = {}) => {
    return axiosInstance.get(url, { params: { ...commonParams(), ...params }, ...config });
};

const apiPost = (url: string, params = {}, data = {}, config = {}) => {
    return axiosInstance.post(
        url,
        data, // 请求体数据
        {
            ...config,
            params: { ...commonParams(), ...params }, // 查询参数
        }
    );
};

export {
    apiGet,
    apiPost,
};
