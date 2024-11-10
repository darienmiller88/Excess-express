<script setup lang="ts">
    import logo from "../../../public/logo.png"
</script>

<template>
    <nav>
        <div class="logo-wrapper">
            <img :src="logo" alt="logo">
            <div class="app-name-wrapper">Excess Express</div>
            <div class="slogan">Conserve. Collaborate. Community.</div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    nav{
        background-color: white;
        padding: 10px;

        .logo-wrapper{
            border: 3px red solid;
            width: fit-content;
            margin-left: 120px;
            color:black;

        }

    }
</style>