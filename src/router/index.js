import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/foods',
    name: 'foods',
    component: () => import(/* webpackChunkName: "foods" */ '../views/foods/Foods.vue'),
  },
  {
    path: '/foods/:cat',
    name: 'foodsFilter',
    component: () => import(/* webpackChunkName: "foodsFilter" */ '../views/foods/Filter.vue'),
  },
  {
    path: '/foods/:cat/:id/detail',
    name: 'foodsDetail',
    component: () => import(/* webpackChunkName: "foodsDetail" */ '../views/foods/Detail.vue'),
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: () => import(/* webpackChunkName: "ingredients" */ '../views/ingredients/Ingredients.vue'),
  },
  {
    path: '/ingredients/:title',
    name: 'ingredientsFilter',
    component: () => import(/* webpackChunkName: "ingredientsFilter" */ '../views/ingredients/Filter.vue'),
  },
  {
    path: '/ingredients/:ing/:id/detail',
    name: 'ingredientsDetail',
    component: () => import(/* webpackChunkName: "ingredientsDetail" */ '../views/ingredients/Detail.vue'),
  },
  {
    path: '/location',
    name: 'location',
    component: () => import(/* webpackChunkName: "location" */ '../views/area/Area.vue'),
  },
  {
    path: '/location/:loc',
    name: 'locationsFilter',
    component: () => import(/* webpackChunkName: "locationsFilter" */ '../views/area/Filter.vue'),
  },
  {
    path: '/location/:loc/:id/detail',
    name: 'locationsDetail',
    component: () => import(/* webpackChunkName: "locationsDetail" */ '../views/area/Detail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
