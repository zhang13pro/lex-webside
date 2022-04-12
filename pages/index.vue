<template lang="pug">
h1 Kobe Bryant
p Do
div Something Cool
nuxt-link(to="/home") toHome  
button +
| {{num}}
button -
</template>
<script setup lang="ts">
let num = ref(1)
</script>
