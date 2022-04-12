<template lang="pug">
main
  .places(ref="places")
    .location(v-for="place in places" :key="place.name")
      img(:src="place.img" :alt="place.name")
      h2 {{ place.name }}
      p
        strong Rating: {{ place.rating }}
      p {{ place.description }}
      hr
  .mapcontain(ref="mapcontain")
    p
      icon-base(icon-name="mappin")
        icon-map-pin
      | Checked in at Honolulu location
    img(src="map.png" alt="Map of Honolulu")
</template>

<script setup lang="ts">
const places = ref(["Hangzhou", "Shanghai", "Xian"])
// computed: mapState(["page", "users", "places"]),
</script>

<style>
.mapboxgl-missing-css {
  display: none;
}
</style>

<style lang="scss" scoped>
main {
  padding-top: 20px;
  border-top: 1px solid #ddd;
  margin-top: 120px;
}

.places {
  img {
    float: left;
    margin: 0 15px 15px 0;
  }
  p {
    margin-top: 10px;
  }
  .location {
    padding: 10px 0;
  }
}

hr {
  border-top: 1px solid #ddd;
  border-bottom: none;
  margin-top: 15px;
}

.mapcontain {
  width: 35%;
  float: right;
  height: 400px;
  p {
    margin: 10px 0;
  }
  img {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .mapcontain {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
