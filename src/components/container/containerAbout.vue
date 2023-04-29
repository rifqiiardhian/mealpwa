<template>
  <div class="section py-20 px-5">
    <div class="container container-about lg:max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="grid-title text-left flex flex-col">
          <div class="md:sticky md:top-20">
            <div class="about-icon mb-3">
              <box-icon type="solid" name="bowl-hot" color="#FD5D5D"></box-icon>
            </div>
            <custom-h-2 :text="title" class="font-black" />
          </div>
        </div>
        <div class="grid-desc text-left">
          <custom-h-3 :text="subtitle1" class="font-bold mb-5" />
          <custom-desc :desc="desc1" class="mb-7" />
          <custom-h-3 :text="subtitle2" class="font-bold mb-5" />
          <custom-desc :desc="desc2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customH2 from '@/components/customH2.vue';
import customH3 from '@/components/customH3.vue';
import customDesc from '@/components/customDesc.vue';

export default {
  name: 'containerAbout',
  data() {
    return {
      title: 'The Introduction',
      subtitle1: 'About this website',
      subtitle2: 'What is Mealapp?',
      desc1: "Hello, my name is Rifqi Ardhian and it's my Final Exam Project. This website is about the Meal API Website. There is a food catalog page, category, meals area, and many more inside it. The website's style was originally created and developed by Rifqi Ardhian. Restricted and no copying for another websites.",
      desc2: "Mealapp is a frontend website that displays a food's content, including foods category, foods country area, ingredients, and cooking steps with a video. Thanks for watching our my website. Hope you glad. Do what you love and so many reasons to be happy.",
    };
  },
  components: {
    customH2,
    customH3,
    customDesc,
  },
};
</script>
