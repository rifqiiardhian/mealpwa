<template>
  <p>{{ desc }}</p>
</template>

<script>
export default {
  name: 'customDesc',
  props: {
    desc: String,
  },
};
</script>
