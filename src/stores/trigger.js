import { defineStore } from 'pinia'

export const useTriggerStore = defineStore('trigger', {
    state: () => ({
        triggerAction: false,
        payload: null
    }),
    actions: {
        invoke(payload) {
            this.payload = payload
            this.triggerAction = true
        },
        reset() {
            this.triggerAction = false
            this.payload = null
        }
    }
})
