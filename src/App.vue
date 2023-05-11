<template>
  <HelloWorld />
  <AuthModal />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AuthModal from '@/components/teleport/AuthModal.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    AuthModal,
  }
}
</script>

<style>

</style>
