<template>
  <custom-loader-page v-if="loading" />
  <div v-else>
    <div v-if="dataAvailable" class="foods-detail-section">
      <custom-breadcrumb-detail :prev="prev" :param="breadParam" :value="meal.name" />
      <container-detail-title :title="pageTitle" />
      <container-detail-meal :meal="meal" />
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
import customBreadcrumbDetail from '@/components/customBreadcrumbDetail.vue';
import containerDetailTitle from '@/components/container/containerDetailTitle.vue';
import containerDetailMeal from '@/components/container/containerDetailMeal.vue';

export default {
  name: 'FoodsDetail',
  data() {
    return {
      loading: true,
      dataAvailable: true,
      errorState: '',
      prev: 'foods',
      breadParam: this.$route.params.cat,
      pageDesc: `${this.$route.params.cat} Meal`,
      pageTitle: 'Meal Name',
      cat: this.$route.params.cat,
      mealsID: this.$route.params.id,
      meal: {
        name: '',
        category: '',
        area: '',
        instruction: [],
        image: {
          src: '',
          alt: '',
          title: '',
          class: 'w-full h-fit rounded-3xl',
          width: '500',
          height: '400',
          load: 'lazy',
        },
        tags: [],
        video: '',
        recipe: [],
      },
    };
  },
  components: {
    customLoaderPage,
    customBreadcrumbDetail,
    containerDetailTitle,
    containerDetailMeal,
  },
  methods: {
    getId(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);

      return (match && match[2].length === 11)
        ? match[2]
        : null;
    },
  },
  async mounted() {
    await HTTP.get('api/json/v1/1/lookup.php', { params: { i: this.mealsID } }).then((response) => {
      if (response.data.length < 1) {
        this.dataAvailable = false;
        this.errorState = 'Data Not Available';
        this.loading = false;
      } else {
        const mealData = response.data.meals[0];
        this.pageTitle = mealData.strMeal;
        this.meal.name = mealData.strMeal;
        this.meal.category = mealData.strCategory;
        this.meal.area = mealData.strArea;
        this.meal.image.src = mealData.strMealThumb;
        this.meal.image.alt = `Meal Name ${mealData.strMeal}`;
        this.meal.image.title = mealData.strMeal;
        this.meal.video = this.getId(mealData.strYoutube);
        if (mealData.strInstructions !== null) {
          const instructionData = mealData.strInstructions.split('\r\n');
          for (let i = 0; i < instructionData.length; i += 1) {
            if (instructionData[i] !== '') {
              this.meal.instruction.push(instructionData[i]);
            }
          }
        }
        if (mealData.strTags !== null) {
          const tagsData = mealData.strTags.split(',');
          for (let i = 0; i < tagsData.length; i += 1) {
            this.meal.tags.push(tagsData[i]);
          }
        }
        for (let i = 1; i <= 20; i += 1) {
          if (mealData[`strIngredient${i}`] !== '' && mealData[`strIngredient${i}`] !== null) {
            if (mealData[`strMeasure${i}`] !== '' && mealData[`strMeasure${i}`] !== null) {
              const ingredient = mealData[`strIngredient${i}`];
              const measure = mealData[`strMeasure${i}`];
              this.meal.recipe.push(`${measure} ${ingredient}`);
            }
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

<style>
.youtube-frame {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
