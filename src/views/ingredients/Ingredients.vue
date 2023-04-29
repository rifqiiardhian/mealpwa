<template>
  <div class="foods-section">
    <container-foods-title :data="titleData" />
    <div class="section py-20 px-5">
      <div class="container container-list relative lg:max-w-6xl mx-auto">
        <div class="max-w-md mx-auto mb-10">
          <input type="text" v-on:keyup="detectValue" v-model="formValue" name="search_ingredient" id="search_ingredient" class="block py-2 px-5 w-full text-gray-900 bg-white rounded-lg border border-gray-300 sm:text-sm focus:ring-guava focus:border-guava" placeholder="Search ingredient here..." aria-labelledby="search_ingredient">
          <div class="text-sm font-bold text-gray-500 mt-2">Please <span class="bg-gray-200 text-gray-900 rounded-md px-2 py-0.5">Enter</span> to search</div>
        </div>
        <custom-loader v-if="loading"/>
        <div v-else>
          <div v-if="dataAvailable" class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-5">
            <div class="text-left" v-for="item in ingredients" v-bind:key="item.id">
              <div class="text-4xl font-black text-zinc-900">{{ item.group }}</div>
              <div class="mb-10">
                <div v-for="child in item.children" v-bind:key="child.id">
                  <router-link :to="{ name: 'ingredientsFilter', params: { title: setDetailUrls(child.name) }}">
                    <p class="text-lg font-bold text-zinc-900">{{ child.name }}</p>
                  </router-link>
                </div>
              </div>
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
  name: 'FoodsView',
  data() {
    return {
      titleData: {
        title: 'See All The Foods Ingredients',
        desc: 'mealapp by rifqiiardhian',
      },
      loading: true,
      dataAvailable: true,
      errorState: '',
      formValue: '',
      ingredients: [],
      rawIngredients: [],
    };
  },
  components: {
    containerFoodsTitle,
    CustomLoader,
  },
  methods: {
    setDetailUrls(param) {
      return param.replaceAll(' ', '_');
    },
    grouping(params) {
      params.sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));

      const data = params.reduce((r, e) => {
        const group = e.name[0];
        if (!r[group]) {
          r[group] = {
            group,
            children: [e],
          };
        } else {
          r[group].children.push(e);
        }
        return r;
      }, {});
      this.ingredients = Object.values(data);
    },
    detectValue(event) {
      let tempIngredients = this.rawIngredients;
      if (event.key === 'Enter') {
        this.loading = true;
        if (this.formValue !== '' && this.formValue) {
          tempIngredients = tempIngredients.filter((item) => item.name.toUpperCase().includes(this.formValue.toUpperCase()));
        }
      }
      this.grouping(tempIngredients);
      this.loading = false;
    },
  },
  async mounted() {
    await HTTP.get('api/json/v1/1/list.php', { params: { i: 'list' } }).then((response) => {
      if (response.data.length < 1) {
        this.dataAvailable = false;
        this.errorState = 'Data Not Available';
        this.loading = false;
      } else {
        for (let i = 0; i < response.data.meals.length; i += 1) {
          if (
            response.data.meals[i].strIngredient.toLowerCase().indexOf('pork') === -1
            && response.data.meals[i].strIngredient.toLowerCase().indexOf('bacon') === -1
            && response.data.meals[i].strIngredient.toLowerCase().indexOf('lard') === -1
            && response.data.meals[i].strIngredient.toLowerCase().indexOf('wine') === -1
            && response.data.meals[i].strIngredient.toLowerCase().indexOf('rum') === -1) {
            this.rawIngredients.push({
              id: response.data.meals[i].idIngredient,
              name: response.data.meals[i].strIngredient,
            });
          }
        }
        this.grouping(this.rawIngredients);
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
