import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 样式初始化
import "./assets/css/normalize.css";
import "./assets/css/reset.css";

// 字体图标
import "./assets/fonts/iconfont.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

// 中介
Vue.prototype.$bus = new Vue();

Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
