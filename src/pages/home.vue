<template>
    <div class="home">
        <video src="../assets/planet.mp4" class="video-bg" autoplay muted loop="true">
            <source src="../assets/planet.mp4" type="video/mp4" style="width: 100%; height: 100%">
        </video>
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
        <NavArrows
            nextPath="/portfolio"
            prevPath="/tech-stack"
        />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Description from '../components/Description.vue'
import SocialMediaIcon from '../components/SocialMediaIcon.vue'
import NavArrows from '../components/NavArrows.vue'
import { gsap } from 'gsap'

export default {
  name: 'home',
  props: {},
  components: { Header, Description, SocialMediaIcon, NavArrows },
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
            grid-gap: 30px;
            grid-template-columns: 4fr 3fr;
            grid-template-rows: 1fr
        }
    }

    .left-scetion {
        position: relative;
        z-index: 1;
    }

    .img-background {
        position: relative;
        display: block;
        width: 320px;
        height: 400px;
        background: rgba(78, 78, 78, .3);
        box-shadow:inset 0 0 20px #000;
    }

    .home-page-img {
        position: absolute;
        width: 100%;
        height: 100%;
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

    @media (min-width: 760px) {
        .img-background {
            width: 400px;
            height: 55vh;
        }
    }

    @media (min-width: 1024px) {
        .img-background {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-60%);
            width: 500px;
            height: 70vh;
        }
    }

    @media (min-width: 1440px) {
        .img-background {
            width: 600px;
            height: 80vh;
        }
    }

    @media (min-width: 1600px) {
        .img-background {
            width: 700px;
        }
    }

    .right-scetion {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
        z-index: 1;
    }

    @media (min-width: 760px) {
        .right-scetion {
            justify-content: flex-start;
        }
    }

    @media (min-width: 1024px) {
        .right-scetion {
            height: 100vh;
            justify-content: center;
            padding-left: 0;
        }
    }

    .video-bg {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100vh;
        width: 100%;
        height: 100%;
        object-fit: fill;
        z-index: 0;
        }

    @media (min-width: 1023px) {
        .video-bg {
            display: block;
        }
    }
</style>
