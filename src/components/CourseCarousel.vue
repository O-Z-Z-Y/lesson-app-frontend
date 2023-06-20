<template>
    <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
        <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">
                <a href="#">
                    <img class="w-full h-full" src="./../assets/carousel-test-image.jpg" alt="Slide {{ slide }}">
                </a>
            </div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: 'CourseCarousel',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    methods: {
        todo() {
            alert("되겠냐고 ㅋㅋ")
        }
    }
}
</script>

<style scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
    height: 20rem;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev,
.carousel__slide--next {
    opacity: 1;
    transform: scale(0.95);
}

.carousel__slide--prev {
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}

.carousel__slide--active,
.carousel__slide--prev,
.carousel__slide--next {
    opacity: 1;
    transition: opacity 0.3s;
}
</style>