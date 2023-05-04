<template>
  <HelloWorld />
  <TeleportExample />
  <div id="root-modal">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TeleportExample from '@/components/teleport/TeleportExample.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TeleportExample
  }
}
</script>

<style>

</style>
