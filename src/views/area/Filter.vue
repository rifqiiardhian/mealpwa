<template>
  <custom-loader-page v-if="loading" />
  <div v-else>
    <div v-if="dataAvailable" class="foods-filter-section">
      <custom-breadcrumb-filter :prev="prevRoute" :value="breadVal" />
      <container-filter-title :title="pageTitle" />
      <div class="section pt-5 pb-10 px-5">
        <div class="container container-list lg:max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div class="relative w-full aspect-square cursor-pointer rounded-3xl" v-for="item in meals" v-bind:key="item.id">
              <router-link :to="{ name: 'locationsDetail', params: { loc: this.$route.params.loc, id: item.id }}">
                <custom-image :data="item.image" />
                <div class="custom-overlay absolute inset-0 bg-black bg-opacity-60 rounded-3xl"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 w-full">
                  <h2 class="text-2xl font-black text-white">{{ item.name }}</h2>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="py-96">
      <h2 class="text-2xl font-bold text-gray-300 mb-5">{{ errorState }}</h2>
      <button type="button" class="text-peach hover:text-white border border-peach hover:bg-peach focus:ring-4 focus:outline-none focus:ring-peach font-bold rounded-full px-7 py-2.5 text-center mr-2 mb-2">
        <router-link :to="{name: 'home'}">Back to Home</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { HTTP } from '@/http-common';
import customLoaderPage from '@/components/customLoaderPage.vue';
import customBreadcrumbFilter from '@/components/customBreadcrumbFilter.vue';
import containerFilterTitle from '@/components/container/containerFilterTitle.vue';
import customImage from '@/components/customImage.vue';

export default {
  name: 'AreaFilter',
  data() {
    return {
      loading: true,
      dataAvailable: true,
      errorState: '',
      prevRoute: 'locations',
      breadVal: this.$route.params.loc,
      pageDesc: 'Foods by Category',
      pageTitle: `${this.$route.params.loc} Meals`,
      meals: [],
    };
  },
  components: {
    customLoaderPage,
    customBreadcrumbFilter,
    containerFilterTitle,
    customImage,
  },
  async mounted() {
    await HTTP.get('api/json/v1/1/filter.php', { params: { a: this.$route.params.loc } }).then((response) => {
      if (response.data.length < 1) {
        this.dataAvailable = false;
        this.errorState = 'Data Not Available';
        this.loading = false;
      } else {
        for (let i = 0; i < response.data.meals.length; i += 1) {
          if (
            response.data.meals[i].strMeal.toLowerCase().indexOf('pork') === -1
            && response.data.meals[i].strMeal.toLowerCase().indexOf('bacon') === -1
            && response.data.meals[i].strMeal.toLowerCase().indexOf('lard') === -1
            && response.data.meals[i].strMeal.toLowerCase().indexOf('wine') === -1
            && response.data.meals[i].strMeal.toLowerCase().indexOf('rum') === -1) {
            this.meals.push({
              id: response.data.meals[i].idMeal,
              name: response.data.meals[i].strMeal,
              image: {
                src: response.data.meals[i].strMealThumb,
                alt: `Meal Name ${response.data.meals[i].strMeal}`,
                title: response.data.meals[i].strMeal,
                class: 'object-cover w-full aspect-square rounded-3xl',
                width: '400',
                height: '400',
                load: 'lazy',
              },
            });
          }
        }
        this.dataAvailable = true;
      }
    }).catch(() => {
      this.dataAvailable = false;
      this.errorState = 'Data Not Available';
    }).finally(() => {
      this.loading = false;
    });
  },
};
</script>
