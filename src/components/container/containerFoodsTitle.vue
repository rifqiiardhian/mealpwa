<template>
  <div class="section py-20 px-5 bg-gray-50">
    <div class="container container-banner lg:max-w-6xl mx-auto">
      <div class="foods-icon mb-5">
        <box-icon type="solid" name="bowl-hot" color="#FD5D5D"></box-icon>
        <box-icon type="solid" name="bowl-rice" class="mx-5" color="#FD5D5D"></box-icon>
        <box-icon type="solid" name="cookie" color="#FD5D5D"></box-icon>
      </div>
      <custom-desc :desc="data.desc" class="mb-7 font-bold text-zinc-700" />
      <custom-h-1 :text="data.title" class="font-black mb-10 text-slate-800" />
      <!-- <input type="text" name="search-foods" id="email-adress-icon" class="block max-w-md mx-auto py-2 px-5 w-full text-gray-900 bg-white rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search foods here..." aria-labelledby="search-foods"> -->
    </div>
  </div>
</template>

<script>
import customH1 from '@/components/customH1.vue';
import customDesc from '@/components/customDesc.vue';

export default {
  name: 'containerFoodsTitle',
  props: {
    data: Object,
  },
  components: {
    customH1,
    customDesc,
  },
};
</script>
