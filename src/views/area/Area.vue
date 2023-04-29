<template>
  <div class="foods-section">
    <container-foods-title :data="titleData" />
    <div class="section py-20 px-5">
      <div class="container container-list relative lg:max-w-6xl mx-auto">
        <custom-loader v-if="loading"/>
        <div v-else>
          <div v-if="dataAvailable" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div class="relative w-full h-16 cursor-pointer rounded-3xl" v-for="item in areas" v-bind:key="item.id">
              <router-link :to="{ name: 'locationsFilter', params: { loc: item.name }}">
                <div class="custom-overlay absolute inset-0 bg-guava bg-opacity-40 rounded-3xl"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                  <h2 class="text-xl font-black text-white">{{ item.name }}</h2>
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

export default {
  name: 'areaView',
  data() {
    return {
      titleData: {
        title: 'Local Culinary Explorations',
        desc: 'mealapp by rifqiiardhian',
      },
      loading: true,
      dataAvailable: true,
      errorState: '',
      areas: [],
    };
  },
  components: {
    containerFoodsTitle,
    CustomLoader,
  },
  async mounted() {
    await HTTP.get('api/json/v1/1/list.php', { params: { a: 'list' } }).then((response) => {
      if (response.data.length < 1) {
        this.dataAvailable = false;
        this.errorState = 'Data Not Available';
        this.loading = false;
      } else {
        for (let i = 0; i < response.data.meals.length; i += 1) {
          this.areas.push({
            name: response.data.meals[i].strArea,
          });
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
