<script setup>

</script>

<template>
<div class="wrapper">
  <div class="row header">
    <h4>
      Monday 12/12
    </h4>
    <h4>
      12:00
    </h4>
  </div>
  <div class="row body">
    <p>Sunny</p>
    <p>20 °C</p>
    <p>Feels like 21 °C</p>
    <p>Humidity: 70</p>
    <p>Wind: 1 m/s</p>
  </div>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 16rem;
  margin-right: 4rem;
}

.row {
  width: 100%;
}

.header {
  height: 30%;
  background: linear-gradient(to right, var(--navy), var(--ocean));
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.body {
  height: 70%;
  padding: 1rem;
  background-color: var(--vt-c-black-mute);
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

p {
  color: var(--vt-c-white);
  font-size: 1.25rem;
  font-weight: 500;
}

</style>