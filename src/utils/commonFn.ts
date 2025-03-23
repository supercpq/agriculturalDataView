/**
 * @description 埋点上报
 * @param key 埋点的key
 * @param params 埋点参数
 */
const sendLog = (key: string, params: Record<string, string>) => {
    const preLog = 'fe_argi_';
    const img = document.createElement('img');
    const paramsArr = [`type=${preLog + key}`, ...Object.keys(params).map((k) => `${k}=${params[k]}`)];
    const url = `/api/imglog?${paramsArr.join('&')}`;
    img.src = url;
}

export { sendLog };