<template>
    <div class="sub-course-title">제목띠</div>
    <div class="sub-course-body">
        <div class="video-wrapper">
            <vue-plyr>
                <div class="plyr__video-embed">
                    <iframe
                        src="https://player.vimeo.com/video/824522580?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media"
                        allowfullscreen allowtransparency allow="autoplay"></iframe>
                </div>
            </vue-plyr>
        </div>
        기타등등
    </div>
</template>
<script>
export default {
    name: "SubCourse",
    mounted() {
        console.log(this.$refs.plyr.player)
    }
}
</script>
<style></style>