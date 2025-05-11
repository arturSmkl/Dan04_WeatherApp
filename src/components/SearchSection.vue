<script setup>
import { fetchCity } from "@/services/weatherLoader.js";
import { ref } from "vue";
import { useTriggerStore } from '@/stores/trigger'

const cityList = ref([]);
const loading = ref(false);
const input = ref('');

async function getCityList() {
  loading.value = true;
  cityList.value = await fetchCity(input.value);
  loading.value = false;
}

const trigger = useTriggerStore()

function showForecast(cityObj) {
  trigger.invoke(cityObj);
}

</script>

<template>
  <div class="container">
    <div class="column search">
      <h3>
        Type in a city
      </h3>
      <div class="input-container">
        <input v-model="input" placeholder="London">
        <button class="input_confirm" @click="getCityList"></button>
      </div>
    </div>
    <div class="column results">
      <h3>
        Select a city
      </h3>
      <div class="list">
        <div v-if="loading" class="empty">
          Loading...
        </div>
        <button class="list-item" v-else-if="cityList.length>0" v-for="(c, index) in cityList" :key="index" @click="showForecast(c)">
          <span>
            {{ c.name }} - {{ c.country }}<span v-if="c.state">, {{ c.state }}</span>
          </span>
        </button>
        <div v-else class="empty">
          No cities found
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  width: 100%;
  height: 26rem;
  margin-bottom: 4rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: var(--vt-c-black-mute);
}

h3 {
  color: var(--vt-c-white);
}

.column {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.search {
  border-right: 0.25rem solid var(--vt-c-white);
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
  outline: 0.2rem solid var(--navy);
}

.input_confirm {
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

.input_confirm:hover {
  background-color: var(--ocean);
  transform: scale(1.15);
  cursor: pointer;
}

.results {
  border-left: 0.25rem solid var(--vt-c-white-mute);
}

.list {
  width: 18rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: var(--vt-c-white-mute);
}

.list-item {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  background-color: var(--vt-c-white-mute);
}

.list-item:hover {
  background-color: var(--navy);
  color: var(--vt-c-white);
  cursor: pointer;
}

.empty {
  margin: auto;
}

</style>