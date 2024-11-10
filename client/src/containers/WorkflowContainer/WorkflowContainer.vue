<script setup lang="ts">
    import image4 from "../../../public/home_pictures/image4-removebg-hq.png"
</script>

<template>
    <div class="workflow-Container">
        <div class="title">
            Get Ready to Maximize Your Productivity With Our Workflow Solutions
        </div>
        <div class="button-wrapper">
            <button>Get Started</button>
        </div>
        <img :src="image4" alt="image">
    </div>
</template>

<style scoped lang="scss"> 
    .workflow-Container{
        // border: 3px dotted red;

        .title{
            text-align: center;
            margin-top: 100px;
            padding: 0px 250px;
            font-size: 40px;
        }

        .button-wrapper{
            margin: 30px;
            text-align: center;

            button{
                color: white;
                font-weight: bold;
                transition: 0.3s;

                &:hover{
                    background-color: var(--goldenrod);
                    color: black;
                }
            }
        }

        img{
            width: 100%;
            height: auto;
        }
    }
</style>