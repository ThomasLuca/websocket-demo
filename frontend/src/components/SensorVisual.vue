<template>
    <ve-progress
        :progress="calculatedValue"
        angle="90"
        thickness="15"
        line="square"
        :color="color"
    >
        <p class="icon">{{icon}}</p>
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
    font-size: 150%;
    margin: 0px;
}
.icon {
    margin-top: 0px;
    font-size: 200%
}
</style>