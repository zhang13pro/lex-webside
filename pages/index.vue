<template lang="pug">
h1 Kobe Bryant
p Do
span Something Cool
nuxt-link(to="/home")
  | toHome
next-page
button +
| {{ counter }}
button -
</template>
<script setup lang="ts">
import { useCounterStore } from "~~/stores/counter"

const { counter } = useCounterStore()
</script>
