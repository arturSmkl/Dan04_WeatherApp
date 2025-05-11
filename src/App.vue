<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SearchSection from "@/components/SearchSection.vue";
import ForecastSection from "@/components/ForecastSection.vue";
</script>

<template>
  <HeaderComponent />
  <main>
    <SearchSection />
    <ForecastSection />
  </main>
  <footer>
    @ 2025 Artur Smýkal
  </footer>
</template>

<style scoped>

main {
  width: 1400px;
  margin: 4rem auto;
}

footer {
  width: 100%;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  background-color: var(--vt-c-black-soft);
  color: var(--vt-c-white);
}

@media (max-width: 1450px) {
  main {
    width: 90%;
  }

}

</style>
