<script setup>

import HeaderComponent from "@/components/HeaderComponent.vue";
import SearchSection from "@/components/SearchSection.vue";
</script>

<template>
  <HeaderComponent />
  <main>
    <SearchSection />
  </main>
</template>

<style scoped>

main {
  width: 1400px;
  margin: 4rem auto;
}

</style>
