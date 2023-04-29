<template>
  <h3 class="text-3xl lg:text-4xl">{{ text }}</h3>
</template>

<script>
export default {
  name: 'customH3',
  props: {
    text: String,
  },
};
</script>
