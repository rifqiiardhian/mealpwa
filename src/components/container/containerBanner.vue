<template>
  <div class="section py-20 px-5 bg-gray-50">
    <div class="container container-banner lg:max-w-6xl mx-auto">
      <div class="home-icon mb-5">
        <box-icon type="solid" name="bowl-hot" color="#FD5D5D"></box-icon>
        <box-icon type="solid" name="bowl-rice" class="mx-5" color="#FD5D5D"></box-icon>
        <box-icon type="solid" name="cookie" color="#FD5D5D"></box-icon>
      </div>
      <custom-desc :desc="desc" class="mb-7 font-bold text-zinc-700" />
      <custom-h-1 :text="title" class="font-black mb-10 text-slate-800" />
      <button type="button" class="text-peach hover:text-white border border-peach hover:bg-peach focus:ring-4 focus:outline-none focus:ring-peach font-bold rounded-full px-7 py-2.5 text-center mr-2 mb-2">
        <router-link to="/foods">See All Foods</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import customH1 from '@/components/customH1.vue';
import customDesc from '@/components/customDesc.vue';

export default {
  name: 'containerBanner',
  data() {
    return {
      title: 'Frontend page that displayed a foods each category and local culinary',
      desc: 'mealapp by rifqiiardhian',
    };
  },
  components: {
    customH1,
    customDesc,
  },
};
</script>
