<template>
  <div class="section pt-10 pb-5 px-5">
    <div class="container container-title lg:max-w-6xl pb-10 border-b-2 border-gray-100 mx-auto">
      <div class="text-left">
        <custom-h-1 :text="title" />
      </div>
    </div>
  </div>
</template>

<script>
import customH1 from '@/components/customH1.vue';

export default {
  name: 'containerDetailTitle',
  props: {
    title: String,
  },
  components: {
    customH1,
  },
};
</script>
