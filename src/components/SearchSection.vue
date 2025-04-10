<script setup>

</script>

<template>
  <div class="container">
    <div class="column search">
      <h3>
        Select a city
      </h3>
      <div class="input-container">
        <input :value="text" @input="onInput" placeholder="London">
        <button></button>
      </div>
    </div>
    <div class="column">

    </div>
  </div>
</template>

<style scoped>

.container {
  width: 100%;
  height: 26rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: var(--vt-c-white-mute);
}

.column {
  width: 50%;
}

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 0.1rem solid var(--navy);
}

h3 {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

input {
  width: 18rem;
  height: 2.5rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
  font-size: 1.25rem;
}
input:focus {
  border-radius: 0.5rem;
  outline: 0.1rem solid var(--navy);
}

button {
  width: 2.5rem;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  border: none;
  background-color: var(--navy);
  background-image: url("/src/assets/images/search_icon.png");
  background-size: 1.75rem;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.1s ease;
}

button:hover {
  background-color: var(--ocean);
  transform: scale(1.15);
  cursor: pointer;
}

</style>