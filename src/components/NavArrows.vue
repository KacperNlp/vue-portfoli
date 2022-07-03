<template>
    <nav class="nav">
        <div class="nav-arrow">
            <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div class="nav-arrow">
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavArrows'
}
</script>

<style>
    .nav {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 80vh;
        right: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    }

    @media (min-width: 1024px) {
        .nav {
            bottom: 120px;
            right: 100px;
        }
    }

    .nav-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: #C6CA16;
        color: #EBEFEA;
        cursor: pointer;
        transition: .3s;
    }

    @media (min-width: 1024px) {
        .nav-arrow {
            width: 60px;
            height: 60px;
        }
    }

    .nav-arrow:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    }
</style>
