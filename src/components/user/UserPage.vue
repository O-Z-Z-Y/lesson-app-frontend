<template lang="">
    <div class="container">
        <h2 class="py-10 text-2xl font-bold"><span>{{ this.username }}</span> 님의 개인페이지</h2>
    </div>
    <div class="h-16 bg-gray-200 user-header">
        <div class="container flex items-center h-full nav-wrapper">
            <router-link class="mr-16 access-course" to="/user/courses">강좌</router-link>
            <router-link class="mr-16 user-notifications" to="/user/notifications">알림</router-link>
            <router-link class="mr-16 user-profile" to="/user/profile">프로필</router-link>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'UserPage',
    computed: {
        ...mapState('User', ['username'])
    }
}
</script>
<style lang="">
    
</style>