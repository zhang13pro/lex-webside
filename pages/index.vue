<template lang="pug">
h1 Kobe Bryant
p Do
div Something Cool
nuxt-link(to="/home") toHome  
button +
| {{counter}}
button -
</template>
<script setup lang="ts">
import { useCounterStore } from "../stores/counter"
// TODO How does count is?
const counter = useCounterStore()
counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
</script>
