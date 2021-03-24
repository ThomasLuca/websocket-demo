<template>
    <div>
        <h3>{{ title }}</h3>
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
.slider {
  height: 85px;
}
.slidecontainer {
  display: flex;
}

</style>