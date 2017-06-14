/**
 * Created by yangyangyu on 2017/6/14.
 * 统一的api接口部分
 */

import axios from 'axios'
import config from './config'

class API {
  login (param) {
    console.log(param);
    config.data.Method="post";
    config.data= param;
    return axios.post('/cctv/login',{},config);
  }
  getCurrency (param) {
    var commonData = Object.create(config);
    console.log(commonData);
    config.Method="get";
    config.data= param;
    return axios.post('/Router',{},config);
  }
}
export default API;
