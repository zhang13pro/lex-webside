<template lang="pug">
div There is Home page don't need nuxt-page
div hello {{ $hello() }}
button Dark
p {{ Math.round(output) }}+
</template>
<script setup language="ts">
import { TransitionPresets } from "@vueuse/core"

const { $hello } = useNuxtApp()
const isDark = useDark()
const toggleDark = useToggle(isDark)

/**number add animation */
const count = ref(0)
const output = useTransition(count, {
  duration: 5000,
  transition: TransitionPresets.easeOutExpo,
})
count.value = 1024
</script>
