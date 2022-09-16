import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originPush.call(this, location).catch((err) => err);
};

// 引入组件
import Login from "../views/login/Login.vue";
import Layout from "../views/layout/Layout.vue";
import Home from "../views/home/Home.vue";
import Order from "../views/order/Order.vue";
import GoodsList from "../views/goods/GoodsList.vue";
import GoodsAdd from "../views/goods/GoodsAdd.vue";
import GoodsCategory from "../views/goods/GoodsCategory.vue";
import Shop from "../views/shop/Shop.vue";
import AccountAdd from "../views/account/AccountAdd.vue";
import AccountList from "../views/account/AccountList.vue";
import PasswordModify from "../views/account/PasswordModify.vue";
import Personal from "../views/account/Personal.vue";
import GoodsTotal from "../views/total/GoodsTotal.vue";
import OrderTotal from "../views/total/OrderTotal.vue";

// 路由配置
const routes = [
  // 重定向
  { path: "/", redirect: "/login" },
  // 登录
  { path: "/login", component: Login },
  // 后台首页
  {
    path: "/home",
    component: Layout,
    meta: { title: "后台首页" },
    children: [{ path: "", component: Home }],
  },
  // 订单管理
  {
    path: "/order",
    component: Layout,
    meta: { title: "订单管理" },
    // 如果children中只有一个,默认跳转
    children: [{ path: "", component: Order }],
  },
  {
    path: "/goods",
    component: Layout,
    // 如果children中有多个,需要单独指定
    redirect: "/goods/list",
    meta: { title: "商品管理" },
    children: [
      {
        path: "/goods/list",
        component: GoodsList,
        meta: { title: "商品列表" },
      },
      { path: "/goods/add", component: GoodsAdd, meta: { title: "商品添加" } },
      {
        path: "/goods/category",
        component: GoodsCategory,
        meta: { title: "商品分类" },
      },
    ],
  },
  {
    path: "/shop",
    component: Layout,
    meta: { title: "店铺管理" },
    children: [{ path: "", component: Shop }],
  },
  {
    path: "/account",
    component: Layout,
    redirect: "/account/list",
    meta: { title: "账号管理" },
    children: [
      {
        path: "/account/list",
        component: AccountList,
        meta: { title: "账号列表" },
      },
      {
        path: "/account/add",
        component: AccountAdd,
        meta: { title: "账号添加" },
      },
      {
        path: "/account/passwordmodify",
        component: PasswordModify,
        meta: { title: "修改密码" },
      },
      {
        path: "/account/personal",
        component: Personal,
        meta: { title: "个人中心" },
      },
    ],
  },
  {
    path: "/total",
    component: Layout,
    redirect: "/total/goods",
    meta: { title: "销售统计" },
    children: [
      {
        path: "/total/goods",
        component: GoodsTotal,
        meta: { title: "商品统计" },
      },
      {
        path: "/total/order",
        component: OrderTotal,
        meta: { title: "订单统计" },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
