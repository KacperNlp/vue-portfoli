<template>
    <div class="home">
        <section class="left-scetion top-section">
            <span class="img-background">
                <img src="@/assets/kacper-photo-black-white.png" alt="Kacper Nalepa - Frontend Web Developer" class="home-page-img"/>
            </span>
        </section>
        <section class="right-scetion bottom-section">
            <Header
                title="Kacper Nalepa"
                subtitle="Frontend Web Developer"
            />
            <Description
                description="Hi, I'm 21yo in this year I will finish my education in high school, then I would like to study IT. I have been learning programing in JavaScript for 1 year, CSS and HTML for 2 years, I learned basic knwoledge of node.js 3 months ago and I have been learning React for a month. In my projects I used Sass/Scss, since it's clearer for me, especially when I used BEM"
            />
            <SocialMediaIcon />
        </section>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Description from '../components/Description.vue'
import SocialMediaIcon from '../components/SocialMediaIcon.vue'
import { gsap } from 'gsap'

export default {
  name: 'home',
  props: {},
  components: { Header, Description, SocialMediaIcon },
  methods: {
    simpleFade () {
      gsap.fromTo(this, {autoAlpha: 1}, {autoAlpha: 0, duration: 0.35})
    }
  }
}
</script>

<style>
    .home {
        display: grid;
        grid-gap: 60px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        .home {
            grid-gap: 50px;
            grid-template-columns: 4fr 3fr;
            grid-template-rows: 1fr
        }
    }

    .left-scetion {
        position: relative;
    }

    .img-background {
        display: block;
        width: 280px;
        height: 300px;
        background: rgba(78, 78, 78, .3);
        box-shadow:inset 0 0 20px #000;
    }

    @media (min-width: 1024px) {
        .img-background {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-60%);
            width: 700px;
            height: 80vh;
            background: rgba(78, 78, 78, .3);
            box-shadow:inset 0 0 20px #000;
        }
    }

    .right-scetion {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
    }

    @media (min-width: 1024px) {
        .right-scetion {
            height: 100vh
        }
    }

    @media (min-width: 1024px) {
        .home-page-img {
            position: absolute;
            bottom: 0;
            top: -10%;
            width: 110%;
            height: 110%;
        }
    }
</style>
