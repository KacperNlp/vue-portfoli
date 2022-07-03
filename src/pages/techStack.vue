<template>
    <div class="tech-stack">
        <h1>techStack</h1>
        <NavArrows
            nextPath="/"
            prevPath="/portfolio"
        />
    </div>
</template>

<script>
import NavArrows from '../components/NavArrows.vue'

export default {
  name: 'techStack',
  props: {},
  components: {NavArrows}
}
</script>
