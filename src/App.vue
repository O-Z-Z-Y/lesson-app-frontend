<template>
  <HelloWorld />
  <ModalTeleport />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ModalTeleport from '@/components/teleport/ModalTeleport.vue'
// import Auth from './components/teleport/auth/Auth.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    ModalTeleport,
    // Auth
  }
}
</script>

<style>

</style>
