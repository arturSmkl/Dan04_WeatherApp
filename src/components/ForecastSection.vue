<script setup>
import ForecastItem from "@/components/ForecastItem.vue";
import { useTriggerStore } from '@/stores/trigger'
import {reactive, watch} from 'vue'
import { fetchWeather } from "@/services/weatherLoader.js";

const trigger = useTriggerStore()
const cityObj = reactive({})
const forecastObj = reactive({})

async function showForecast(payload) {
  Object.assign(cityObj, payload)
  trigger.reset()
  const forecastData = await fetchWeather(cityObj.lat, cityObj.lon)
  Object.assign(forecastObj, forecastData)
}

watch(() => trigger.triggerAction, (val) => {
  if (val) showForecast(trigger.payload)
})

</script>

<template>
  <h3 v-if="cityObj.name">
    Forecast for {{ cityObj.name }} - {{ cityObj.country }}<span v-if="cityObj.state">, {{ cityObj.state }}</span>
  </h3>
  <h3 v-else>
    Please select a city
  </h3>
  <div class="container">
    <ForecastItem v-if="forecastObj.list" v-for="f in forecastObj.list" :forecast-item="f"/>
  </div>
</template>

<style scoped>

.container {
  width: 100%;
  height: 24rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  overflow-x: auto;
  overflow-y: hidden;
}

span {
  font-weight: 600;
}

</style>