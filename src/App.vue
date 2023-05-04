<template>
  <HelloWorld />
  <ModalTeleport />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ModalTeleport from '@/components/teleport/ModalTeleport.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ModalTeleport
  }
}
</script>

<style>

</style>
