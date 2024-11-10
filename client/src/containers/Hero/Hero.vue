<script setup lang="ts">
    import image1 from "../../../public/home_pictures/image1-removebg.png"
</script>

<template>
    <div class="hero-container">
        <div class="left">
            <h1>
                Reducing Waste. Make's a Happy Face.
            </h1>
            <div class="slogan">
                Excess Express provides an effective and powerful way to reduce food waste.
            </div>
            <h3>
                Get Started
            </h3>
            <div class="button-wrapper">
                <button>
                    Log in
                </button>
            </div>
        </div>
        <div class="right">
            <img :src="image1" alt="">
        </div>
    </div>
</template>

<style scoped lang="scss"> 
    .hero-container{
        display: flex;
        justify-content: center;
        background-color: white;
        color: black;
        // border: 3px dotted black;
        padding: 50px;

        .left{
            width: 25vw;
            // border: 3px red dotted;

            h1{
                font-size: 40px;
            }

            .slogan{
                font-size: 18px;
            }

            button{
                background-color: #FFBF23;
                border: 1px black solid;
                transition: 0.3s;
                font-size: 18px;
                font-weight: bold;
                padding: 15px 30px;

                &:hover{
                    background-color: black;
                    color: #FFBF23;
                }
            }
        }

        // .right{
        //     border: 3px black dotted;
        // }
    }
</style>