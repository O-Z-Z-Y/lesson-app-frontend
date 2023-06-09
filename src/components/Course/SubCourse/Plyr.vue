<template lang="">
    <vue-plyr ref="plyr">
        <div class="plyr__video-embed">
            <iframe :src="url" allowfullscreen allowtransparency allow="autoplay"></iframe>
        </div>
    </vue-plyr>
</template>
<script>
import axios from 'axios';

export default {
    name:'PlyrVue',
    props: {
        url: String,
        main: Number,
        sub: Number
    },
    mounted() {
        this.$refs.plyr.player.on('ended', () => {
            alert('영상이 끝났습니다.')
            this.endSubCourse()
        })
    },
    methods: {
        async endSubCourse() {
            try {
                const response = await axios.post('/api/v1/jobs/subcourse/progress/update', {
                    maincourseId: this.main,
                    subcourseId: this.sub
                },{
                    headers: {
                        'Authorization': `Bearer ${this.$cookies.get('access_token')}`
                    }
                });
                console.log(response.status)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style lang="">
    
</style>