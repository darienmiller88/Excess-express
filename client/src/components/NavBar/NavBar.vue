<script setup lang="ts">
    import logo from "../../../public/logo.png"
    import { Icon } from "@iconify/vue"

</script>

<template>
    <nav>

        <!-- Logo and Slogan -->
        <div class="logo-wrapper">
            <img :src="logo" alt="logo">
            <div class="app-wrapper">
                <div class="app-name">Excess Express</div>
                <div class="slogan">Conserve. Collaborate. Community.</div>
            </div>
        </div>

        <!-- Links -->
        <div class="links">
            <RouterLink to="/"          class="link">Home</RouterLink>
            <RouterLink to="/dashboard" class="link">Dashboard</RouterLink>
            <RouterLink to="/business"  class="link">Your Business</RouterLink>
            <RouterLink to="/about-us"  class="link">About Us</RouterLink>
        </div>

        <!-- Log Out -->
        <div class="log-out">
            <Icon icon="mdi-light:account" class="icon" width="30"/>
            Log Out
        </div>
    </nav>
</template>

<style scoped lang="scss">
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        padding: 30px 60px;
        color: black;
        
        .logo-wrapper{
            display: flex;
            align-items: center;
            
            width: fit-content;
            margin-left: 20px;
            color:black;

            &:hover{
                cursor: pointer;
            }
            
            img{
                height: 45px;
                width: auto;
                border-radius: 5px;
                margin-right: 10px;
            }

            .app-wrapper{
                .app-name{
                    font-weight: bold;
                    font-size: 30px;
                }
            }
        }

        .links{
            display: flex;
            margin-right: 90px;
 
            .link{
                padding: 20px 30px;
                font-size: 20px;
                text-decoration: none;
                color: black;
                // transition: 0.3s;

                &:hover{
                    cursor: pointer;
                    background-color: rgba(100, 100, 100, 0.8);
                }

               
            }
        }

        .log-out{
            display: flex;
            align-items: center;
            padding: 20px;
            font-size: 20px;
            transition: 0.3s;

            .icon{
                margin-right: 10px;
            }

            &:hover{
                cursor: pointer;
                background-color:  rgba(100, 100, 100, 0.8);;
            }

        }


    }
</style>