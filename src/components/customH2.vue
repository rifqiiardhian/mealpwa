<template>
  <h2 class="text-4xl lg:text-5xl">{{ text }}</h2>
</template>

<script>
export default {
  name: 'customH2',
  props: {
    text: String,
  },
};
</script>
