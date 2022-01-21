import { createRouter, createWebHistory } from "vue-router";
const history = createWebHistory();

const Article = () => import("./Article/index.vue");
const MyArticle = () => import("./Article/MyArticle.vue");
const ArticleDetail = () => import("./Article/ArticleDetail.vue");
const SignIn = () => import("./Auth/SignIn.vue");
const SignUp = () => import("./Auth/SignUp.vue");

const routes: any = [
  { path: "/", redirect: "/articles", exact: true },
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },
  {
    path: "/articles",
    component: Article,
    meta: {
      name: "article"
    }
  },
  {
    path: "/article/detail/:slug",
    component: ArticleDetail
  },
  { path: "/article/:name", component: MyArticle }
];

const router = createRouter({ history, routes });
export default router;
