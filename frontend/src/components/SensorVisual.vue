<template>
    <ve-progress
        :progress="calculatedValue"
        angle="90"
        thickness="20"
        :color="color"
    >
        <p><i class="mdi" :class="icon" ></i></p>
        <p>{{ value.toFixed(1) }} {{ unit }}</p>
    </ve-progress>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        value: {
            type: Number,
            default: 0
        },
        unit: {
            type: String,
            default: ''
        },
        maximum: {
            type: Number,
            default: 100
        },
        minimum: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
        },
        icon: String
    },
    computed: {
        calculatedValue() { 
            return ((this.value - this.minimum) / (this.maximum - this.minimum)) * 100
        }
    }
})
</script>

<style scoped>
p {
    font-size: 200%;
    margin: 0px;
}
.mdi {
    margin-top: 0px;
    font-size: 200%
}
</style>