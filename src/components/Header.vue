<template>
    <div class="header">
        <span class="header-line"></span>
        <h1 class="header-title">{{ title }}</h1>
        <p class="header-subtitle">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style>
    .header {
        position: relative;
        margin-bottom: 32px;
    }

    .header-line {
        position: absolute;
        top: -25px;
        width: 200px;
        height: 2px;
        background: #C6CA16;
    }

    @media (min-width: 1024px) {
        .header-line {
            width: 250px;
        }
    }

    .header-title {
        margin-bottom: 12px;
        font-size: 32px;
        font-weight: 700;
    }

    @media (min-width: 1024px) {
        .header-title {
            margin-bottom: 25px;
            font-size: 48px;
        }
    }

    @media (min-width: 1280px) {
        .header-title {
            font-size: 64px;
            letter-spacing: 1px;
        }
    }

    .header-subtitle {
        font-size: 12px;
        font-weight: 300;
        opacity: 0.8;
    }

    @media (min-width: 1024px) {
        .header-subtitle {
            font-size: 16px;
        }
    }

    @media (min-width: 1280px) {
        .header-subtitle {
            margin-bottom: 30px;
            font-size: 24px;
        }
    }
</style>
