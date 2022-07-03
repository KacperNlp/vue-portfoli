<template>
    <div class="portfolio">
        <carousel perPage="1">
            <slide>
                <SlideContent/>
            </slide>
            <slide>
                <SlideContent/>
            </slide>
        </carousel>
        <NavArrows
            nextPath="/tech-stack"
            prevPath="/"
        />
    </div>
</template>

<script>
import NavArrows from '../components/NavArrows.vue'
import SlideContent from '../components/SlideContent.vue'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'portfolio',
  props: {},
  components: {NavArrows, Carousel, Slide, SlideContent}
}
</script>
