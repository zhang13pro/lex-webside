<template lang="pug">
svg(xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24" :aria-labelledby="iconName" role="presentation")
  title(:id="iconName" lang="en")
    | {{ iconName }} icon
  g(:fill="iconColor")
    slot
</template>

<script setup lang='ts'>
type NumStr = number | string
interface Props {
  iconName: string,
  width: NumStr,
  height: NumStr,
  iconColor: string
}

withDefaults(defineProps<Props>(),{
  iconName: 'box',
  width: 18,
  height: 18,
  iconColor: 'currentColor',
})
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
