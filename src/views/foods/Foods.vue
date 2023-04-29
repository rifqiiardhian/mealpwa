<template>
  <div class="foods-section">
    <container-foods-title :data="titleData" />
    <div class="section py-20 px-5">
      <div class="container container-list relative lg:max-w-6xl mx-auto">
        <custom-loader v-if="loading"/>
        <div v-else>
          <div v-if="dataAvailable" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div class="relative w-full h-32 cursor-pointer rounded-3xl" v-for="item in categories" v-bind:key="item.id">
              <router-link :to="{ name: 'foodsFilter', params: { cat: item.name }}">
                <custom-image :data="item.image" />
                <div class="custom-overlay absolute inset-0 bg-black bg-opacity-40 rounded-3xl"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                  <h2 class="text-2xl font-black text-white">{{ item.name }}</h2>
                </div>
              </router-link>
            </div>
          </div>
          <div v-else class="h-96">
            <h2 class="text-2xl font-bold text-gray-300">{{ errorState }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from '@/http-common';
import containerFoodsTitle from '@/components/container/containerFoodsTitle.vue';
import CustomLoader from '@/components/customLoader.vue';
import customImage from '@/components/customImage.vue';

export default {
  name: 'FoodsView',
  data() {
    return {
      titleData: {
        title: 'See All The Delicious Foods',
        desc: 'mealapp by rifqiiardhian',
      },
      loading: true,
      dataAvailable: true,
      errorState: '',
      categories: [],
    };
  },
  components: {
    containerFoodsTitle,
    CustomLoader,
    customImage,
  },
  async mounted() {
    await HTTP.get('api/json/v1/1/categories.php').then((response) => {
      if (response.data.length < 1) {
        this.dataAvailable = false;
        this.errorState = 'Data Not Available';
        this.loading = false;
      } else {
        for (let i = 0; i < response.data.categories.length; i += 1) {
          if (response.data.categories[i].strCategory.toLowerCase().indexOf('pork') === -1) {
            this.categories.push({
              id: response.data.categories[i].idCategory,
              name: response.data.categories[i].strCategory,
              image: {
                src: response.data.categories[i].strCategoryThumb,
                alt: `Category Name ${response.data.categories[i].strCategory}`,
                title: response.data.categories[i].strCategory,
                class: 'object-cover w-full h-32 rounded-3xl',
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
