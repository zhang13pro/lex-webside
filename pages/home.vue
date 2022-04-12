<template lang="pug">
div There is Home page don't need nuxt-page
| {{num}}
| hello {{$hello()}}
| {{x}} + {{y}}
button(@click="log") Dark
</template>
<script setup language="ts">
import { useMouse, useDark, useToggle } from "@vueuse/core"

const num = ref(1)
const { $hello } = useNuxtApp()
const isDark = useDark()
// TODO useDark
const toggleDark = useToggle(isDark)

function log() {
  console.log(121)
}
</script>
