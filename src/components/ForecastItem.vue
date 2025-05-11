<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  forecastItem: Object
})

const formattedDate = ref('')
const formattedTime = ref('')
const temperatue = ref('')
const feelsLike = ref('')


// Watch for changes in the forecastItem prop
watch(
    () => props.forecastItem,
    (newVal) => {
      if (newVal?.dt) {
        const date = new Date(newVal.dt * 1000)
        formattedDate.value = date.toLocaleDateString("en-US", {weekday: "long", day: "numeric", month: "short"})
        formattedTime.value = date.toLocaleTimeString("en-US", {timeZone: "UTC", hour12: false, hour: "numeric", minute: "numeric"})
        temperatue.value = Math.round(newVal.main.temp)
        feelsLike.value = Math.round(newVal.main.feels_like)
      }
    },
    { immediate: true }
)
</script>


<template>
<div class="wrapper">
  <div class="row header">
    <h4>
      {{ formattedTime }}
    </h4>
    <h4 class="date">
      {{ formattedDate }}
    </h4>
  </div>
  <div class="row body">
    <p>{{ props.forecastItem.weather[0].main }}</p>
    <p>{{ temperatue }} °C</p>
    <p>Feels like {{ feelsLike }} °C</p>
    <p>Humidity: {{ props.forecastItem.main.humidity }}%</p>
    <p>Wind: {{ props.forecastItem.wind.speed }} m/s</p>
  </div>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 14rem;
  margin-right: 2rem;
  flex-shrink: 0;
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
  background-color: var(--vt-c-white-mute);
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

p {
  font-size: 1.25rem;
  font-weight: 500;
}

.date {
  font-size: 1.25rem;
}

</style>