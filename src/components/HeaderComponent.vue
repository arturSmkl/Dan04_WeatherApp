<script setup xmlns="http://www.w3.org/1999/html">

</script>

<template>
  <header>
    <div class="container">
      <div class="image"></div>
      <div class="text-container">
        <h1>
          The Most Epic <br>
          Weather App
        </h1>
        <h2>
          by Artur Smýkal
        </h2>
      </div>
    </div>
  </header>
</template>

<style scoped>

header {
  width: 100%;
  height: 24rem;
  background: linear-gradient(to right, var(--navy), var(--ocean));
  color: var(--vt-c-white-soft);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
}

.container {
  height: 20rem;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.image {
  background-image: url("/src/assets/images/weather_icon.png");
  background-size: cover;
  height: 100%;
  aspect-ratio: 1/1;
}

.text-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 1rem 4rem;
}

h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 5rem;
  padding-bottom: 0.5rem;
}
h2 {
  font-size: 1.55em;
}

</style>