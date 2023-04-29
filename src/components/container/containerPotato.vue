<template>
  <div class="section pb-20 px-5">
    <div class="container container-about lg:max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="grid-image text-left pr-0 md:pr-10">
          <custom-image :data="imageData" />
        </div>
        <div class="grid-title text-left mt-5 md-mt-0 flex items-center">
          <div>
            <custom-h-2 :text="title" class="font-black mb-3" />
            <custom-h-3 :text="subtitle" class="text-peach mb-5" />
            <custom-desc :desc="desc" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customH2 from '@/components/customH2.vue';
import customH3 from '@/components/customH3.vue';
import customDesc from '@/components/customDesc.vue';
import customImage from '@/components/customImage.vue';

export default {
  name: 'containerPotato',
  data() {
    return {
      title: 'Did you know?',
      subtitle: 'The potatoes can absorb and reflect Wi-fi signals',
      desc: 'When Boeing wanted to test out its wireless signal on new planes in 2012, they placed giant piles of potatoes on seats. Because of their high water content and chemical makeup, potatoes absorb and reflect radio and wireless signals just like humans do.',
      imageData: {
        src: '/img/potatoes.webp',
        alt: 'Potatoes',
        title: 'Potatoes',
        class: 'pr-0 rounded-2xl',
        width: '700',
        height: '600',
        load: 'lazy',
      },
    };
  },
  components: {
    customH2,
    customH3,
    customDesc,
    customImage,
  },
};
</script>
