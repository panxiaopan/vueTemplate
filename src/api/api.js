import {
  baseUrl
} from '../../static/baseurl'
import axios from 'axios'
//import qs from 'qs'

axios.defaults.baseURL = baseUrl //接口变量..  引用过来编译的时候不会变,
