<template>
    <div class="card blue-grey lighten-5">
        <div class="card-content black-text">
            <span class="card-title">{{title}}</span>
            <p>{{value}}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default {
    props: {title: String, value: String}
}
</script>

<style>
.card{
    width: 330px;
    margin-bottom: 30px;
}
</style>