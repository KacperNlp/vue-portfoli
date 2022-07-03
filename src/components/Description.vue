<template>
    <div class="description-container">
        <p class="description">{{ description }}</p>
    </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    description: {
      type: String
    }
  }
}
</script>

<style>
    .description-container {
        width: 90%;
    }

    @media (min-width: 1024px) {
        .description-container {
            width: 420px;
        }
    }

    @media (min-width: 1280px) {
        .description-container {
            width: 450px;
        }
    }

    .description {
        line-height: 170%;
        font-weight: 300;
        font-size: 14px;
    }

    @media (min-width: 1024px) {
        .description {
            font-size: 16px;
        }
    }
</style>
