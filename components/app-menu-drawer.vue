<template lang="pug">
transition(mode="out-in" name="menu")
  .menudrawer(v-if="menuOpened")
    nuxt-link(exact to="/")
      | Lex's Home
    br
    nuxt-link(to="/place")
      | Lex's Places
    br
    nuxt-link(to="/group")
      | Lex's Group Talks
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    menuOpened: boolean
  }>(),
  {
    menuOpened: true,
  }
)
</script>

<style scoped>
.menudrawer {
  background: rgba(0, 0, 0, 0.5);
  line-height: 1.8;
  text-align: right;
  position: absolute;
  right: 0px;
  top: 45px;
  padding: 20px;
  border-radius: 4px;
  z-index: 10000;
}

a,
a:visited,
a:active {
  color: white;
}

.menu-enter-active {
  transition: all 0.3s ease;
}
.menu-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.menu-enter,
.menu-leave-to {
  transform: scale(0.9);
  transform-origin: "100% 0%";
  opacity: 0;
}
</style>
