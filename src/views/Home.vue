<template>
  <div class="home-section">
    <container-banner />
    <container-about />
    <container-potato />
  </div>
</template>

<script>
import containerBanner from '@/components/container/containerBanner.vue';
import containerAbout from '@/components/container/containerAbout.vue';
import containerPotato from '@/components/container/containerPotato.vue';

export default {
  name: 'HomeView',
  components: {
    containerBanner,
    containerAbout,
    containerPotato,
  },
};
</script>
