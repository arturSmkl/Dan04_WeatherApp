<script setup>
import ForecastItem from "@/components/ForecastItem.vue";
import { useTriggerStore } from '@/stores/trigger'
import {reactive, watch} from 'vue'

const trigger = useTriggerStore()
const cityObj = reactive({})

function showForecast(payload) {
  Object.assign(cityObj, payload)
  trigger.reset()
}

watch(() => trigger.triggerAction, (val) => {
  if (val) showForecast(trigger.payload)
})

</script>

<template>
<h3>
  Forecast for {{ cityObj.name }} - {{ cityObj.country }}<span v-if="cityObj.state">, {{ cityObj.state }}</span>
</h3>
<div class="container">
  <ForecastItem />
  <ForecastItem />
</div>
</template>

<style scoped>

.container {
  width: 100%;
  height: 24rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
}

span {
  font-weight: 600;
}

</style>