<template>
    <div>
        <h4>{{ title }}</h4>
        <div class="slidecontainer">
          <input type="range" :min="min" :max="max" class="slider" :step="step" v-model="value">
          <p>{{ value }}{{ unit }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: String,
        min: String,
        max: String,
        step: String,
        unit: String,
        initialValue: String
    },
    data(){
        return {
            value: this.initialValue
        }
    },
    watch: {
        value: function updateParent() {
            this.$emit('updateData', this.value)
        }
    }
})

</script>

<style>
.slidecontainer {
    display: grid;
    grid-template-columns: 90% auto;
    height: 45px;
}
.slider {
    grid-column-start: 1;
    height: 45px;
    margin: auto;
}
p {
    text-align: center;
    grid-column-start: 2;
    font-size: 24px;
    margin: auto;
}

</style>