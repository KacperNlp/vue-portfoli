<template>
    <div class="sm-container">
        <a href="https://github.com/KacperNlp" class="sm-icon" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.instagram.com/kacper.nlp/" class="sm-icon" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/kacpernalepa/" class="sm-icon" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>
    </div>
</template>

<script>
export default {
  name: 'SocialMediaIcon'
}
</script>

<style>
    .sm-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
        width: 150px;
        margin-top: 30px;
        padding-bottom: 30px;
    }

    @media (min-width: 760px) {
        .sm-container {
            position: absolute;
            bottom: 20px;
            left: 20px;
            margin-top: 0;
            padding-bottom: 0;
        }
    }

    @media (min-width: 1024px) {
        .sm-container {
            bottom: 120px;
            left: 59vw;
        }
    }

    .sm-icon {
        display: block;
        width: 40px;
        height: 40px;
        color: #C6CA16;
        text-decoration: none;
        font-size: 32px;
        transition: .3s;
    }

    .sm-icon:hover {
        color: #EBEFEA;
        transform: scale(1.1);
    }
</style>
