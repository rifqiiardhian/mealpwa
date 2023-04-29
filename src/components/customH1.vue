<template>
  <h1 class="text-5xl lg:text-6xl">{{ text }}</h1>
</template>

<script>
export default {
  name: 'customH1',
  props: {
    text: String,
  },
};
</script>
