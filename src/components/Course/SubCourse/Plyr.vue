<template lang="">
    <vue-plyr ref="plyr">
        <div class="plyr__video-embed">
            <iframe :src="url" allowfullscreen allowtransparency allow="autoplay"></iframe>
        </div>
    </vue-plyr>
</template>
<script>

export default {
    name:'PlyrVue',
    props: {
        url: String,
        main: Number,
        sub: Number
    },
    mounted() {
        this.$refs.plyr.player.on('ended', () => {
            this.endSubCourse()
        })
    },
    methods: {
        async endSubCourse() {
            try {
                const response = await this.axios.post('/api/v1/jobs/subcourse/progress/update', {
                    maincourseId: this.main,
                    subcourseId: this.sub
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