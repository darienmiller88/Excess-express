<script setup lang="ts">
    import image from "../../../public/home_pictures/lady bean.png"
</script>

<template>
    <div class="missionStatement-container" :style="{ backgroundImage: `url(${image})` }">
        <div class="mission-statement">
            <h1>Mission Statment</h1>
            <div class="description">
                Excess Express mission is to create the opportunity for small businesses
                to compete with larger franchisees sustainably. Our simple and easy to
                understand website make it an intuitive process for any Ma and Pa shop.  
            </div>
            <button>Learn More</button>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .missionStatement-container{
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;

        .mission-statement{
            text-align: center;
            padding: 55px 80px;
            background-color: white;
            width: 40vw;

            h1{
                font-size: 50px;
            }

            .description{
                margin: 30px 0px;
                font-size: 20px;
            }

            button{
                background-color: rgb(153, 110, 0);
                color: white;
                transition: 0.3s;
                padding: 10px 30px;

                &:hover{
                    background-color: white;
                    color: rgb(153, 110, 0);
                    border: 1px solid rgb(153, 110, 0);
                }
            }
        }
    }
</style>