<template>
  <img
    :src="data.src"
    :alt="data.alt"
    :title="data.title"
    :class="data.class"
    :width="data.width"
    :height="data.height"
    :loading="data.load"
  >
</template>

<script>
export default {
  name: 'customImage',
  props: {
    data: Object,
  },
};
</script>
