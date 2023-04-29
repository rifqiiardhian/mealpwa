<template>
  <div class="section pt-5 pb-10 px-5">
    <div class="container container-list lg:max-w-6xl mx-auto">
      <div class="text-left mb-5">
        <div v-if="meal.area" class="text-lg font-black text-guava mb-3">{{ meal.area }} Culinary</div>
        <div v-if="meal.tags">
          <span v-for="(tagdata, index) in meal.tags" v-bind:key="index" class="bg-apple text-green-800 font-bold mr-2 px-2.5 py-0.5 rounded">{{ tagdata }}</span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <custom-image :data="meal.image" class="md:sticky md:top-20" />
        <div class="text-left">
          <custom-h-2 :text="instructionTitle" class="mb-5" />
          <div v-for="(step, index) in meal.instruction" v-bind:key="index" class="mb-5">
            <custom-desc :desc="step" />
          </div>
          <custom-h-2 :text="recipeTitle" class="mt-10 mb-5" />
          <li v-for="(recipe, index) in meal.recipe" v-bind:key="index">{{ recipe }}</li>
        </div>
      </div>
      <custom-h-2 :text="tutorialTitle" class="mt-20 mb-5" />
      <div class="youtube-frame">
        <iframe :src="`//www.youtube.com/embed/${meal.video}`" height="full" :title="meal.name" class="responsive-iframe w-full" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture" allowfullscreen="allowfullscreen" crossorigin="anonymous"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import customH2 from '@/components/customH2.vue';
import customImage from '@/components/customImage.vue';
import customDesc from '@/components/customDesc.vue';

export default {
  name: 'containerDetailMeal',
  data() {
    return {
      instructionTitle: 'Instructions',
      recipeTitle: 'Recipes',
      tutorialTitle: 'Tutorials',
    };
  },
  props: {
    meal: Object,
  },
  components: {
    customH2,
    customImage,
    customDesc,
  },
};
</script>
