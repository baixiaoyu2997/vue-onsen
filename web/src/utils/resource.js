import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

// 请求拦截器
Vue.http.interceptor.before = function(request) {
  request.url = /(http|https):\/\/([\w.]+\/?)\S*/.test(request.url)
    ? request.url
    : "https://api.douban.com" + request.url;
  request.params = {
    apikey: "0df993c66c0c636e29ecbb5344252a4a", // 豆瓣api限制必须使用apikey
    ...request.params
  };
};
