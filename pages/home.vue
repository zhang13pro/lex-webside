<template lang="pug">
div There is Home page don't need nuxt-page
| {{num}}
| hello {{$hello()}}
| {{x}} + {{y}}
button(@click="log") Dark
</template>
<script setup language="ts">
const num = ref(1)
const { $hello } = useNuxtApp()
const isDark = useDark()
// TODO useDark
const toggleDark = useToggle(isDark)
const { x, y } = useMouse()

function log() {
  console.log(121)
}
</script>
