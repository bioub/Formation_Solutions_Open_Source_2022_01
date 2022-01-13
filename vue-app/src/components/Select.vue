<template>
  <div @click="menuOpen = !menuOpen">{{ selected }}</div>

  <div class="menu" v-if="menuOpen">
    <div class="item" v-for="item of items" :key="item" @click="selected = item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      items: ['Toto', 'Titi', 'Tata'],
      selected: 'Toto',
      menuOpen: false,
    };
  },
};
</script>

<style scoped>
  .menu {
    border: 1px solid black;
  }
</style>
