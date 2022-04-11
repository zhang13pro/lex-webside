<template lang="pug">
div There is Home page don't need nuxt-page
| {{num}}
| {{$hello()}}
</template>
<script setup language="ts">
import { ref } from "#imports"
const num = ref(1)
const { $hello } = useNuxtApp()
</script>
